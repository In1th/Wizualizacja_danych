module Commands.ProcessingCommands (consolidateDataProgram, inspectAttributesProgram) where

import AppEnv (AppEnv)
import BdlDicts.Types (Attribute (..))
import BdlVars.Types (BdlUnitData (bdlUnitData_values), BdlValue (bdlValue_attrId))
import Cleanup.Cleanup (consolidateEvents)
import Data.Aeson
  ( decodeStrict',
    encode,
  )
import Data.ByteString qualified as BS
import Data.Set qualified as S
import OutputObjects (OutEvent (..))
import Pipes
import Pipes.Prelude qualified as P
import UnliftIO (MonadUnliftIO, withFile)
import Prelude hiding (withFile)

inspectAttributesProgram :: (MonadUnliftIO m) => FilePath -> ReaderT AppEnv m ()
inspectAttributesProgram !path = withFile path ReadMode $ \h ->
  runEffect $ for (streamOutputEvents h) $ \case
    AttrEvent (Attribute i n s d) -> lift $ putTextLn $ show i <> ": " <> n <> " [" <> s <> "]; " <> d
    _ -> mempty

consolidateDataProgram :: (MonadUnliftIO m) => FilePath -> [Int] -> ReaderT AppEnv m ()
consolidateDataProgram !path idBlacklist = withFile path ReadMode $ \h -> do
  cd <- consolidateEvents (streamOutputEvents h >-> filterAttrs bl)
  lift $ putLBS (encode cd)
  where
    bl = S.fromList idBlacklist

streamOutputEvents :: (MonadIO m) => Handle -> Producer OutEvent m ()
streamOutputEvents !h = ifM (lift $ hIsEOF h) mempty (liftIO (BS.hGetLine h) >>= go)
  where
    go !line
      | BS.null line = streamOutputEvents h
      | otherwise = maybe mempty yield (decodeStrict' line) >> streamOutputEvents h

filterAttrs :: (Functor m) => Set Int -> Pipe OutEvent OutEvent m r
filterAttrs bl = P.mapMaybe mPred
  where
    mPred :: OutEvent -> Maybe OutEvent
    mPred e = case e of
      AttrEvent attr
        | S.notMember (attr_id attr) bl -> Just e
        | otherwise -> Nothing
      ValueEvent i ud ->
        Just $
          ValueEvent
            i
            ( ud
                { bdlUnitData_values =
                    filter
                      (\v -> fromMaybe True (bdlValue_attrId v <&> (`S.notMember` bl)))
                      (bdlUnitData_values ud)
                }
            )
      _ -> Just e
