{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE DerivingVia #-}

module BdlVars.Types
  ( BdlVarInfo (..),
    BdlUnitData (..),
    BdlValue (..),
    BdlSubjectInfo (..),
  )
where

import Deriving.Aeson

data BdlVarInfo = BdlVarInfo
  { varInfo_id :: !Int,
    varInfo_subjectId :: !Text,
    varInfo_dimNames :: ![Text],
    varInfo_level :: !Int,
    varInfo_measureUnit :: !Int
  }
  deriving (Show, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "varInfo_"]] BdlVarInfo

data BdlValue = BdlValue
  { bdlValue_year :: !Text,
    bdlValue_val :: !Double,
    bdlValue_attrId :: !(Maybe Int),
    bdlValue_precision :: !(Maybe Int)
  }
  deriving (Show, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "bdlValue_"]] BdlValue

data BdlUnitData = BdlUnitData
  { bdlUnitData_id :: !Text,
    bdlUnitData_name :: !Text,
    bdlUnitData_values :: ![BdlValue]
  }
  deriving (Show, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "bdlUnitData_"]] BdlUnitData

data BdlSubjectInfo = BdlSubjectInfo
  { si_id :: !Text,
    si_name :: !Text,
    si_description :: !(Maybe Text),
    si_dimensions :: ![Text]
  }
  deriving (Show, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "si_"]] BdlSubjectInfo
