{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE DerivingVia #-}

module BdlVars.BdlVars
  ( BdlVarInfo (..),
    getVariablesInSubjectP,
    getVariableById,
    BdlUnitData (..),
    BdlValue (..),
    GetDataOptions (..),
    getDataP,
    getSubjectInfo,
  )
where

import ApiUtil (Page (..), PageInfo (PageInfo), bdlJsonReq, bdlJsonReqCustomParser, makeBdlUri, pagingJsonReqP)
import BdlVars.Types
import Control.Lens
import Data.Aeson
  ( FromJSON (..),
    Result (..),
    Value,
    withArray,
    withObject,
    (.:),
    (.:?),
  )
import Data.Aeson.Types (Parser, parse)
import Deriving.Aeson
import Network.Wreq qualified as W
import Network.Wreq.Session qualified as Sess
import Pipes (Producer)

getVariablesInSubjectP :: (MonadIO m) => Sess.Session -> Text -> Producer BdlVarInfo m ()
getVariablesInSubjectP sess subject = pagingJsonReqP (PageInfo 0 100) fetch
  where
    fetch :: PageInfo -> IO BdlVarsInfoApiResponse
    fetch (PageInfo num sz) =
      let opts =
            W.defaults
              & W.params
                .~ [("page", show num), ("page-size", show sz), ("subject-id", subject)]
       in bdlJsonReq $ Sess.getWith opts sess (makeBdlUri "/variables")

getVariableById :: (MonadIO m) => Sess.Session -> Int -> m BdlVarInfo
getVariableById sess varId = do
  liftIO $ bdlJsonReqCustomParser apiVarInfoParser $ Sess.get sess (makeBdlUri "/variables/" <> show varId)

getDataP :: (MonadIO m) => Sess.Session -> Int -> GetDataOptions -> Producer BdlUnitData m ()
getDataP sess varId (GetDataOptions availLvl minYr maxYr) = pagingJsonReqP (PageInfo 0 100) fetch
  where
    fetch :: PageInfo -> IO BdlDataByVarApiResponse
    fetch (PageInfo num sz) =
      let opts =
            W.defaults
              & W.params
                .~ ( [("page", show num), ("page-size", show sz)]
                       <> (toList availLvl <&> \lv -> ("unit-level", show lv))
                       <> [("year", show yr) | yr <- [minYr .. maxYr]]
                   )
       in bdlJsonReq $ Sess.getWith opts sess (makeBdlUri "/data/by-variable/" <> show varId)

getSubjectInfo :: (MonadIO m) => Sess.Session -> Text -> m BdlSubjectInfo
getSubjectInfo sess subjectId = liftIO $ bdlJsonReq $ Sess.get sess (makeBdlUri "subjects/" <> toString subjectId)

apiVarInfoParser :: Value -> Parser BdlVarInfo
apiVarInfoParser = withObject "BdlVarInfo" $ \o ->
  let p_id :: Parser Int = o .: "id"
      p_subjectId :: Parser Text = o .: "subjectId"
      p_dimNames :: Parser [Text] = parseWhileJust (o .:?) ["n" <> show x | x <- [1 :: Int .. 5]]
      p_level :: Parser Int = o .: "level"
      p_measureUnit :: Parser Int = o .: "measureUnitId"
   in BdlVarInfo <$> p_id <*> p_subjectId <*> p_dimNames <*> p_level <*> p_measureUnit
  where
    parseWhileJust :: forall a b. (a -> Parser (Maybe b)) -> [a] -> Parser [b]
    parseWhileJust f as = go as (pure [])
      where
        go :: [a] -> Parser [b] -> Parser [b]
        go [] !pAcc = pAcc <&> reverse
        go (a : as') !pAcc =
          f a >>= \case
            Just b -> go as' $ pAcc <&> (b :)
            Nothing -> go [] pAcc

data GetDataOptions = GetDataOptions
  { gd_availLevel :: !(Maybe Int),
    gd_minYear :: !Int,
    gd_maxYear :: !Int
  }

data BdlVarsInfoApiResponse = BdlVarsInfoApiResponse
  { varsInfo_r_page :: !Int,
    varsInfo_r_pageSize :: !Int,
    varsInfo_r_totalRecords :: !Int,
    varsInfo_r_results :: ![BdlVarInfo]
  }
  deriving (Generic, Show)

data BdlDataByVarApiResponse = BdlDataByVarApiResponse
  { bdlDataByVar_r_variableId :: !Int,
    bdlDataByVar_r_measureUnitId :: !Int,
    bdlDataByVar_r_totalRecords :: !Int,
    bdlDataByVar_r_results :: ![BdlUnitData]
  }
  deriving (Generic, Show)
  deriving (FromJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "bdlDataByVar_r_"]] BdlDataByVarApiResponse

instance FromJSON BdlVarsInfoApiResponse where
  parseJSON = withObject "BdlVarsInfoApiResponse" $ \o ->
    let p_page :: Parser Int = o .: "page"
        p_pageSize :: Parser Int = o .: "pageSize"
        p_totalRecords :: Parser Int = o .: "totalRecords"
        p_resultsField :: Parser Value = o .: "results"
        p_results :: Parser [BdlVarInfo] =
          p_resultsField
            >>= withArray
              "BdlVarInfo"
              ( \arr ->
                  pure $
                    toList $
                      arr >>= \v -> case parse apiVarInfoParser v of
                        Error e -> fail e
                        Success s -> pure s
              )
     in BdlVarsInfoApiResponse <$> p_page <*> p_pageSize <*> p_totalRecords <*> p_results

instance Page BdlVarsInfoApiResponse BdlVarInfo where
  pageRecords = varsInfo_r_results
  pageTotalRecords = varsInfo_r_totalRecords

instance Page BdlDataByVarApiResponse BdlUnitData where
  pageRecords = bdlDataByVar_r_results
  pageTotalRecords = bdlDataByVar_r_totalRecords
