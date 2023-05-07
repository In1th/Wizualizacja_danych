{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE DerivingVia #-}

module BdlDicts.Types
  ( AvailabilityLevel (..),
    Attribute (..),
    MeasureUnit (..),
    AvailabilityYear (..),
    Aggregate (..),
  )
where

import Deriving.Aeson

data AvailabilityLevel = AvailabilityLevel
  { availLvl_id :: !Int,
    availLvl_name :: !Text
  }
  deriving (Generic, Show)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "availLvl_"]] AvailabilityLevel

data Attribute = Attribute
  { attr_id :: !Int,
    attr_name :: !Text,
    attr_symbol :: !Text,
    attr_description :: !Text
  }
  deriving (Generic, Show)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "attr_"]] Attribute

data MeasureUnit = MeasurementUnit
  { mu_id :: !Int,
    mu_name :: !Text,
    mu_description :: !Text
  }
  deriving (Generic, Show)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "mu_"]] MeasureUnit

data AvailabilityYear = AvailabilityYear
  { availYr_id :: !Int,
    availYr_hasLocalities :: !Bool,
    availYr_quarterly :: !Text -- "R" roczny, "M" miesięczny, "K" kwartalny
  }
  deriving (Generic, Show)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "availYr_"]] AvailabilityYear

data Aggregate = Aggregate
  { agg_id :: !Int,
    agg_name :: !Text,
    agg_level :: !Int,
    agg_description :: !(Maybe Text)
  }
  deriving (Generic, Show)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "agg_"]] Aggregate
