module Main (main) where

import AppEnv (initAppEnv)
import AppOptions (AppCmdOpts (..), AppOpts (..), optsP)
import Commands.DownloadCommands (downloadSubjectProgram)
import Commands.ListCommands (listVarsProgram)
import Commands.ProcessingCommands (consolidateDataProgram, inspectAttributesProgram)
import Options.Applicative (customExecParser, prefs, showHelpOnEmpty)

main :: IO ()
main = do
  appEnv <- initAppEnv
  opts <- customExecParser (prefs showHelpOnEmpty) optsP
  case cmdOpts opts of
    ListVarsOpts subjectId -> runReaderT (listVarsProgram subjectId) appEnv
    DownloadSubjectsOpts subjects getOpts -> runReaderT (downloadSubjectProgram subjects getOpts) appEnv
    ConsolidateDataOpts file idBlacklist -> runReaderT (consolidateDataProgram file idBlacklist) appEnv
    InspectAttributeOpts file -> runReaderT (inspectAttributesProgram file) appEnv
