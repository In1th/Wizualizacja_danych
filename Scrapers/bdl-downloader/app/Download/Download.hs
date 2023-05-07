module Download.Download (downloadSubject) where

import AppEnv (AppEnv (AppEnv, env_bdlSess))
import BdlDicts.BdlDicts (getAttribute, getAvailabilityLevel, getMeasureUnit)
import BdlVars.BdlVars
  ( BdlUnitData (..),
    BdlValue (..),
    BdlVarInfo (..),
    GetDataOptions (..),
    getDataP,
    getSubjectInfo,
    getVariablesInSubjectP,
  )
import Data.Aeson (encode)
import Data.ByteString (hPut)
import Data.Map.Strict qualified as M
import Data.Set qualified as S
import OutputObjects (OutEvent (..))
import Pipes (for, runEffect)
import Pipes.Prelude qualified as P

downloadSubject :: (MonadIO m) => Handle -> [Text] -> GetDataOptions -> ReaderT AppEnv m ()
downloadSubject !h subjects getOpts =
  runStateT downloadAndWrite (DownloadCtx S.empty S.empty S.empty S.empty M.empty) $> ()
  where
    downloadAndWrite = do
      AppEnv {env_bdlSess = sess} <- ask
      getAndWriteSubsInfo h subjects
      forM_ subjects $ \subId -> do
        variables <- P.toListM (getVariablesInSubjectP sess subId)
        forM_ variables $ writeVarInfo h
        getAndWriteVarsData h (variables <&> varInfo_id) getOpts

getAndWriteSubInfo :: (MonadIO m) => Handle -> Text -> StateT DownloadCtx (ReaderT AppEnv m) ()
getAndWriteSubInfo !h !subId = do
  AppEnv {env_bdlSess = sess} <- ask
  DownloadCtx {seenSubjectIds} <- get
  si <- liftIO $ getSubjectInfo sess subId
  liftIO $ hPut h (toStrict $ encode (SubjectInfoEvent si) <> "\n")
  modify (\s -> s {seenSubjectIds = S.insert subId seenSubjectIds})

getAndWriteSubsInfo :: (MonadIO m) => Handle -> [Text] -> StateT DownloadCtx (ReaderT AppEnv m) ()
getAndWriteSubsInfo !h !subs = forM_ subs $ \subId -> getAndWriteSubInfo h subId

writeVarInfo :: (MonadIO m) => Handle -> BdlVarInfo -> StateT DownloadCtx (ReaderT AppEnv m) ()
writeVarInfo !h !varInfo = do
  DownloadCtx {seenAvailLvls, seenMeasureUnits, idToAvailLv, seenSubjectIds} <- get
  let varId = varInfo_id varInfo
  let varLv = varInfo_level varInfo
  let varMu = varInfo_measureUnit varInfo
  let varSi = varInfo_subjectId varInfo

  when (S.notMember varMu seenMeasureUnits) $ do
    maybeMu <- lift $ getMeasureUnit varMu
    forM_ maybeMu (\mu -> liftIO $ hPut h (toStrict $ encode (MeasureUnitEvent mu) <> "\n"))
    modify' (\s -> s {seenMeasureUnits = S.insert varMu seenMeasureUnits})

  when (S.notMember varLv seenAvailLvls) $ do
    maybeLv <- lift $ getAvailabilityLevel varLv
    forM_ maybeLv (\lv -> liftIO $ hPut h (toStrict $ encode (AvailLevelEvent lv) <> "\n"))
    modify' (\s -> s {seenAvailLvls = S.insert varLv seenAvailLvls})

  when (S.notMember varSi seenSubjectIds) $ getAndWriteSubInfo h varSi

  when (M.notMember varId idToAvailLv) $ modify' (\s -> s {idToAvailLv = M.insert varId varLv idToAvailLv})

  liftIO $ hPut h (toStrict $ encode (VarInfoEvent varInfo) <> "\n")

getAndWriteVarsData :: (MonadIO m) => Handle -> [Int] -> GetDataOptions -> StateT DownloadCtx (ReaderT AppEnv m) ()
getAndWriteVarsData !h !variables !getOpts = do
  AppEnv {env_bdlSess = sess} <- ask
  forM_ variables $ \varId -> do
    DownloadCtx {idToAvailLv} <- get
    let lv = gd_availLevel getOpts
    let possibleLv = min lv (Just $ idToAvailLv M.! varId)
    let stream = getDataP sess varId (getOpts {gd_availLevel = possibleLv})

    runEffect $ for stream $ \d -> do
      forM_ (catMaybes $ bdlUnitData_values d <&> bdlValue_attrId) $ \attrId -> do
        DownloadCtx {seenAttrs} <- get

        when (S.notMember attrId seenAttrs) $ do
          maybeAttr <- lift . lift $ getAttribute attrId
          forM_ maybeAttr (\attr -> liftIO $ hPut h (toStrict $ encode (AttrEvent attr) <> "\n"))
          modify' (\s -> s {seenAttrs = S.insert attrId seenAttrs})

      liftIO $ hPut h (toStrict $ encode (ValueEvent varId d) <> "\n")
      hFlush h

data DownloadCtx = DownloadCtx
  { seenAvailLvls :: !(Set Int),
    seenAttrs :: !(Set Int),
    seenMeasureUnits :: !(Set Int),
    seenSubjectIds :: !(Set Text),
    idToAvailLv :: !(Map Int Int)
  }
