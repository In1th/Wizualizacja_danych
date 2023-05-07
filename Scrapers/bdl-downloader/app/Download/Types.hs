{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE DerivingVia #-}
module Download.Types (OutEvent(..)) where

import BdlDicts.Types (Aggregate, Attribute, AvailabilityLevel, AvailabilityYear, MeasureUnit)
import BdlVars.Types (BdlSubjectInfo, BdlUnitData, BdlVarInfo)
import Deriving.Aeson

data OutEvent
  = ValueEvent
      { oe_varId :: !Int,
        oe_data :: !BdlUnitData
      }
  | VarInfoEvent {oe_varInfo :: !BdlVarInfo}
  | AttrEvent {oe_attr :: !Attribute}
  | MeasureUnitEvent {oe_mu :: !MeasureUnit}
  | AvailYearEvent {oe_availYr :: !AvailabilityYear}
  | AvailLevelEvent {oe_availLvl :: !AvailabilityLevel}
  | SubjectInfoEvent {oe_si :: !BdlSubjectInfo}
  | AggregateEvent {oe_agg :: !Aggregate}
  deriving (Show, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "oe_"]] OutEvent