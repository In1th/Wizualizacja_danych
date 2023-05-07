{-# OPTIONS_GHC -Wno-unrecognised-pragmas #-}

{-# HLINT ignore "Use newtype instead of data" #-}
module AppOptions
  ( cmdP,
    optsP,
    AppOpts (..),
    AppCmdOpts (..),
  )
where

import BdlVars.BdlVars (GetDataOptions (..))
import Options.Applicative

data AppOpts = AppOpts {cmdOpts :: AppCmdOpts}

data AppCmdOpts
  = ListVarsOpts Text
  | DownloadSubjectsOpts [Text] GetDataOptions
  | ConsolidateDataOpts FilePath [Int]
  | InspectAttributeOpts FilePath

listVarsP :: Parser AppCmdOpts
listVarsP = ListVarsOpts <$> argument str (metavar "SUBJECT_ID")

commonGetDataOptsP :: Parser GetDataOptions
commonGetDataOptsP =
  GetDataOptions
    <$> optional
      ( option
          auto
          ( long "avail-lvl"
              <> short 'l'
              <> metavar "LVL"
              <> help
                "Availability level; 0 - Poland, 1 - Macroregions, 2 - Voivodeships, \
                \3 - Regions, 4 - Subregions, 5 - Counties, 6 - Municipalities, 7 - Localities"
          )
      )
    <*> option auto (long "year-from" <> short 'f' <> metavar "YYYY" <> help "Minimum year" <> value 1995)
    <*> option auto (long "year-to" <> short 't' <> metavar "YYYY" <> help "Maximum year" <> value 2030)

downloadSubjectsP :: Parser AppCmdOpts
downloadSubjectsP =
  DownloadSubjectsOpts
    <$> many (strArgument (metavar "SUBJECT_ID..."))
    <*> commonGetDataOptsP

consolidateDataP :: Parser AppCmdOpts
consolidateDataP =
  ConsolidateDataOpts
    <$> strArgument (metavar "FILE")
    <*> many (option auto (long "no-attr" <> short 'n' <> metavar "ID" <> help "Skip records with given attribute"))

inspectAttrP :: Parser AppCmdOpts
inspectAttrP =
  InspectAttributeOpts
    <$> strArgument (metavar "FILE")

cmdP :: Parser AppCmdOpts
cmdP =
  subparser
    ( command "list-vars" (info listVarsP (progDesc "Get a list of variables in a given subject"))
        <> command "download-subs" (info downloadSubjectsP (fullDesc <> progDesc "Download subjects (all variables) given their IDs"))
        <> command "consolidate-data" (info consolidateDataP (fullDesc <> progDesc "Consolidate raw data"))
        <> command "inspect-attr" (info inspectAttrP (fullDesc <> progDesc "View attributes that appear in raw data"))
    )

optsP :: ParserInfo AppOpts
optsP = info ((AppOpts <$> cmdP) <**> helper) (fullDesc <> progDesc "Download data from GUS BDL")
