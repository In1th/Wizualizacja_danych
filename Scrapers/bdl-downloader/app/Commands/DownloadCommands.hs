module Commands.DownloadCommands (downloadSubjectProgram) where

import AppEnv (AppEnv)
import BdlVars.BdlVars (GetDataOptions)
import Data.Time (getCurrentTime, getTimeZone, utcToLocalTime)
import Data.Time.Format.ISO8601 (iso8601Show)
import Download.Download (downloadSubject)
import UnliftIO (MonadUnliftIO, withFile)
import Prelude hiding (withFile)

downloadSubjectProgram :: (MonadUnliftIO m) => [Text] -> GetDataOptions -> ReaderT AppEnv m ()
downloadSubjectProgram subjects getOpts = do
  time <- liftIO getCurrentTime
  tz <- liftIO $ getTimeZone time
  let localTime = utcToLocalTime tz time
  let timeStr = iso8601Show localTime

  withFile ("download_" <> timeStr <> "_" <> intercalate "_" (subjects <&> toString)) WriteMode $
    \h -> downloadSubject h subjects getOpts