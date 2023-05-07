{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE DerivingVia #-}
{-# LANGUAGE TemplateHaskell #-}

module Cleanup.Types (module Cleanup.Types) where

import BdlDicts.Types (Attribute, MeasureUnit)
import Control.Lens (makeLenses)
import Data.Aeson (FromJSONKey (..), FromJSONKeyFunction (..), ToJSONKey (..))
import Data.Aeson.Types (toJSONKeyText)
import Data.Text qualified as DT
import Data.Time.Calendar (MonthOfYear, Year)
import Data.Time.Calendar.Month (Month)
import Data.Time.Calendar.Quarter (Quarter, QuarterOfYear)
import Deriving.Aeson

newtype DimensionType = DimensionType Text
  deriving (Eq, Show, Ord)
  deriving (FromJSON, ToJSON)

newtype DimensionName = DimensionName Text
  deriving (Eq, Show, Ord)
  deriving (FromJSON, ToJSON)

newtype SubjectId = SubjectId Text
  deriving (Eq, Show, Ord)
  deriving (FromJSON, ToJSON, FromJSONKey, ToJSONKey)

newtype UnitKtsCode = UnitKtsCode Text
  deriving (Eq, Show, Ord, FromJSONKey, ToJSONKey, FromJSON, ToJSON)

newtype AttributeId = AttributeId Int
  deriving (Eq, Show, Ord)
  deriving (FromJSON, ToJSON, FromJSONKey, ToJSONKey)

newtype MeasureUnitId = MeasureUnitId Int
  deriving (Eq, Show, Ord)
  deriving (FromJSON, ToJSON, FromJSONKey, ToJSONKey)

newtype OriginalVarId = OriginalVarId Int
  deriving (Eq, Show, Ord)
  deriving (FromJSON, ToJSON)

newtype DimensionSet = DimensionSet [DimensionName]
  deriving (Eq, Show, Ord)
  deriving (FromJSON, ToJSON)

instance ToJSONKey DimensionSet where
  toJSONKey = toJSONKeyText $ \(DimensionSet s) -> DT.intercalate "\n" $ (\(DimensionName n) -> n) <$> s

instance FromJSONKey DimensionSet where
  fromJSONKey = FromJSONKeyText (\t -> DimensionSet $ DimensionName <$> DT.split (== '\n') (DT.strip t))

data ConsolidatedData = ConsolidatedData
  { _cd_attributes :: !(Map AttributeId Attribute),
    _cd_measureUnits :: !(Map MeasureUnitId MeasureUnit),
    _cd_territorialUnitNames :: !(Map UnitKtsCode Text),
    _cd_subjects :: !(Map SubjectId Subject)
  }
  deriving (Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "_cd_"]] ConsolidatedData

data Subject = Subject
  { _sub_id :: !SubjectId,
    _sub_name :: !Text,
    _sub_kind :: !SubjectKind,
    _sub_description :: !(Maybe Text),
    _sub_dimensionTypes :: ![DimensionType],
    _sub_dimensions :: !(Map DimensionSet DimensionData)
  }
  deriving (Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "_sub_"]] Subject

data DimensionData = DimensionData
  { _dimData_measureUnit :: !MeasureUnitId,
    _dimData_records :: !(Map UnitKtsCode [DataRecord])
  }
  deriving (Show, Eq, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "_dimData_"]] DimensionData

data DateRange
  = MonthRange Month Month
  | QuarterRange Quarter Quarter
  | YearRange Year
  deriving (Eq, Ord, Show, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[] DateRange

data VarTimeDimension = None | QuarterVar QuarterOfYear QuarterOfYear | MonthRangeVar MonthOfYear MonthOfYear deriving (Eq, Show, Ord, Generic)

data DataRecord = DataRecord
  { _rec_attributeId :: !(Maybe AttributeId),
    _rec_dateRange :: !DateRange,
    _rec_value :: Double
  }
  deriving (Show, Eq, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "_rec_"]] DataRecord

data SubjectKind = Monthly | Quarterly | Yearly
  deriving (Eq, Ord, Enum, Show, Generic)
  deriving (FromJSON, ToJSON) via CustomJSON '[] SubjectKind

data ConsolidationCtx = ConsolidationCtx
  { _cc_data :: !ConsolidatedData,
    _cc_varIdToDimSet :: !(Map OriginalVarId DimensionSet),
    _cc_varIdToSubId :: !(Map OriginalVarId SubjectId),
    _cc_varIdToTimeDim :: !(Map OriginalVarId VarTimeDimension)
  }

makeLenses ''ConsolidationCtx
makeLenses ''ConsolidatedData
makeLenses ''Subject
makeLenses ''DimensionData
makeLenses ''DataRecord
