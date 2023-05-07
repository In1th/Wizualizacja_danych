module Commands.ListCommands (listVarsProgram) where

import AppEnv (AppEnv (env_bdlSess))
import BdlVars.BdlVars (getVariablesInSubjectP)
import Pipes (for)
import Pipes.Core (runEffect)

listVarsProgram :: (MonadIO m) => Text -> ReaderT AppEnv m ()
listVarsProgram subjectId = do
  appEnv <- ask
  let sess = env_bdlSess appEnv
  runEffect $ for (getVariablesInSubjectP sess subjectId) (lift . print)
