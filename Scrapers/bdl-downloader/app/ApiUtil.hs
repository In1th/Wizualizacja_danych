module ApiUtil
  ( makeBdlUri,
    initBdlSess,
    bdlJsonReq,
    bdlJsonReqCustomParser,
    Page (..),
    PageInfo (..),
    pagingJsonReqP,
  )
where

import Control.Lens
import Control.Monad.Catch (Handler (..), MonadMask, MonadThrow (throwM))
import Control.Retry qualified as R
import Data.Aeson (FromJSON)
import Data.Aeson.Types (Parser, Value, parseEither)
import Data.ByteString.Char8 (readInteger)
import Data.ByteString.Lazy qualified as BL
import Network.HTTP.Client
  ( HttpException (HttpExceptionRequest),
    HttpExceptionContent (StatusCodeException),
    ManagerSettings (managerModifyRequest),
    Request (requestHeaders),
  )
import Network.HTTP.Client.TLS (tlsManagerSettings)
import Network.Wreq (responseBody)
import Network.Wreq as W (JSONError (JSONError), Response, asJSON, asValue, responseHeader)
import Network.Wreq.Lens (responseStatus, statusCode)
import Network.Wreq.Session (Session, newSessionControl)
import Pipes qualified as P

data PageInfo = PageInfo {pageNumber :: Int, pageSize :: Int}

class Page p r | p -> r where
  pageRecords :: p -> [r]
  pageTotalRecords :: p -> Int

makeBdlUri :: (IsString s, Semigroup s) => s -> s
makeBdlUri s = "https://bdl.stat.gov.pl/api/v1/" <> s

initBdlSess :: IO Session
initBdlSess = newSessionControl Nothing bdlManagerSettings
  where
    setAcceptToJson :: Request -> Request
    setAcceptToJson req =
      let headers = requestHeaders req
       in req
            { requestHeaders =
                [("Accept", "application/json"), ("Accept-Language", "pl")]
                  ++ filter ((\h -> h /= "Accept" && h /= "Accept-Language") . fst) headers
            }

    bdlManagerSettings :: ManagerSettings
    bdlManagerSettings =
      let dfl = tlsManagerSettings
          origMod = managerModifyRequest dfl
          custMod = origMod . setAcceptToJson
       in dfl {managerModifyRequest = custMod}

bdlJsonReq :: forall t m. (MonadIO m, MonadMask m, FromJSON t) => m (W.Response BL.ByteString) -> m t
bdlJsonReq req =
  reqWithDecode <&> view responseBody
  where
    reqWithDecode :: m (W.Response t)
    reqWithDecode = reqWithRetry >>= (asJSON @m)
    reqWithRetry = makeReqRetryable req

bdlJsonReqCustomParser :: forall t m. (MonadIO m, MonadMask m, MonadThrow m) => (Value -> Parser t) -> m (W.Response BL.ByteString) -> m t
bdlJsonReqCustomParser parser req =
  reqWithDecode <&> view responseBody
  where
    reqWithDecode :: m (W.Response t)
    reqWithDecode =
      reqWithRetry >>= asValue >>= \r ->
        let body = r ^. responseBody
         in either
              (throwM . JSONError)
              (\v -> pure (v <$ r))
              (parseEither parser body)

    reqWithRetry = makeReqRetryable req

pagingJsonReqP :: forall m p r. (MonadIO m, Page p r, FromJSON p) => PageInfo -> (PageInfo -> IO p) -> P.Producer r m ()
pagingJsonReqP preq fetch = do
  p <- P.liftIO $ fetch preq

  let pCur = pageSize preq * pageNumber preq + length (pageRecords p)
  let pTot = pageTotalRecords p
  let remaining = pTot - pCur
  P.each $ pageRecords p
  if remaining > 0
    then pagingJsonReqP (PageInfo (pageNumber preq + 1) (pageSize preq)) fetch
    else mempty

makeReqRetryable :: (MonadIO m, MonadMask m) => m (W.Response t) -> m (W.Response t)
makeReqRetryable req =
  R.recoveringDynamic
    (R.exponentialBackoff (50 * 10 ^ (3 :: Int)) <> R.limitRetries 2)
    [myRetryHandler]
    (const req)

myRetryHandler :: (MonadIO m, MonadMask m) => R.RetryStatus -> Handler m R.RetryAction
myRetryHandler _ = Handler excToRa
  where
    excToRa :: (MonadIO m, MonadMask m) => HttpException -> m R.RetryAction
    excToRa (HttpExceptionRequest _ (StatusCodeException r _)) =
      case r ^. responseStatus . statusCode of
        429 -> do
          let retryAfter :: Maybe Int =
                r ^? W.responseHeader "retry-after"
                  >>= readInteger
                  <&> (* 10 ^ (6 :: Int)) . fromIntegral . min 10000 . fst
          return $ maybe R.ConsultPolicy R.ConsultPolicyOverrideDelay retryAfter
        422 -> pure R.DontRetry
        404 -> pure R.DontRetry
        _ -> pure R.ConsultPolicy
    excToRa _ = return R.ConsultPolicy
