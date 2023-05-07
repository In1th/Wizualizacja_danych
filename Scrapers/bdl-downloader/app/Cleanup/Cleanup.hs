module Cleanup.Cleanup (consolidateEvents) where

import BdlDicts.Types (Attribute (..), MeasureUnit (mu_id), attr_id)
import BdlVars.Types
import Cleanup.Types
import Control.Lens
import Data.Map.Strict qualified as M
import Data.Text qualified as DT
import Data.Text.Read (decimal)
import Data.Time.Calendar
import Data.Time.Calendar.Month
import Data.Time.Calendar.Quarter
import OutputObjects (OutEvent (..))
import Pipes
import Pipes.Prelude qualified as P
import Prelude hiding (withFile)

consolidateEvents :: forall m. (MonadIO m) => Producer OutEvent m () -> m ConsolidatedData
consolidateEvents = P.fold mergeEvent initCtx finalise
  where
    initCtx = ConsolidationCtx (ConsolidatedData mempty mempty mempty mempty) mempty mempty mempty

    mergeEvent :: ConsolidationCtx -> OutEvent -> ConsolidationCtx
    mergeEvent cc (AttrEvent attr) = cc & cc_data . cd_attributes . at attrId ?~ attr
      where
        attrId = AttributeId $ attr_id attr
    --
    mergeEvent cc (MeasureUnitEvent mu) = cc & cc_data . cd_measureUnits . at muId ?~ mu
      where
        muId = MeasureUnitId $ mu_id mu
    --
    mergeEvent cc (SubjectInfoEvent si) = cc & cc_data . cd_subjects . at subjectId ?~ sub
      where
        subjectKind = determineSubjectKind si
        subjectId = SubjectId $ si_id si
        subjectName = si_name si
        subjectDesc = si_description si
        dimTypes =
          DimensionType <$> case subjectKind of
            Yearly -> si_dimensions si
            _ -> fromMaybe (si_dimensions si) (viaNonEmpty tail (si_dimensions si))
        sub = Subject subjectId subjectName subjectKind subjectDesc dimTypes M.empty
    --
    mergeEvent cc (VarInfoEvent vi) =
      cc
        & cc_varIdToDimSet . at varId ?~ dimSet
        & cc_varIdToSubId . at varId ?~ subjectId
        & cc_varIdToTimeDim . at varId ?~ timeDim
        & cc_data
          . (cd_subjects . ix subjectId)
          . (sub_dimensions . at dimSet)
          %~ (Just . fromMaybe ddInit)
      where
        subjectId = SubjectId $ varInfo_subjectId vi
        subjectKind = fromMaybe Yearly $ cc ^? cc_data . cd_subjects . ix subjectId . sub_kind
        measureUnit = MeasureUnitId $ varInfo_measureUnit vi
        varId = OriginalVarId $ varInfo_id vi
        dimSet =
          DimensionSet $
            DimensionName <$> case (subjectKind, varInfo_dimNames vi) of
              (_, []) -> []
              (_, [x]) -> [x]
              (Yearly, xs) -> xs
              (Monthly, _ : ys) -> ys
              (Quarterly, _ : ys) -> ys
        timeDim = case (subjectKind, varInfo_dimNames vi) of
          (Monthly, td : _) -> uncurry MonthRangeVar $ textToMonths td
          (Quarterly, td : _) -> uncurry QuarterVar $ textToQuarters td
          _ -> None
        ddInit = DimensionData measureUnit mempty
    --
    mergeEvent cc (ValueEvent varId ud) = fromMaybe cc $
      do
        timeDim <- cc ^. cc_varIdToTimeDim . at (OriginalVarId varId)

        let unitKtsCode = UnitKtsCode $ bdlUnitData_id ud
            unitName = bdlUnitData_name ud
            values = bdlUnitData_values ud
            addRecords old =
              foldl'
                ( \l v ->
                    let value = bdlValue_val v
                        attrId = AttributeId <$> bdlValue_attrId v
                        year = fromRight 0 $ fst <$> decimal (bdlValue_year v)
                        dateRange = case timeDim of
                          None -> YearRange year
                          MonthRangeVar a b -> MonthRange (YearMonth year a) (YearMonth year b)
                          QuarterVar q q' -> QuarterRange (YearQuarter year q) (YearQuarter year q')
                        record = DataRecord attrId dateRange value
                     in record : l
                )
                old
                values

        subjectId <- cc ^. cc_varIdToSubId . at (OriginalVarId varId)
        dimSet <- cc ^. cc_varIdToDimSet . at (OriginalVarId varId)

        pure $
          cc
            & cc_data
              %~ ( (cd_subjects . ix subjectId)
                     . (sub_dimensions . ix dimSet)
                     . (dimData_records . at unitKtsCode)
                     %~ Just
                       . addRecords
                       . fromMaybe mempty
                 )
                . (cd_territorialUnitNames . at unitKtsCode ?~ unitName)
    --
    mergeEvent cc _ = cc

    finalise :: ConsolidationCtx -> ConsolidatedData
    finalise cc = (cc ^. cc_data) & (cd_subjects . itraversed %~ cleanSubject)
      where
        cleanSubject :: Subject -> Subject
        cleanSubject sub =
          sub
            & sub_dimensions
              . itraversed
              . dimData_records
              . itraversed
              %~ sortRecords
                . normalizeRecords

        sortRecords :: [DataRecord] -> [DataRecord]
        sortRecords = sortBy (\a b -> compare (a ^. rec_dateRange) (b ^. rec_dateRange))

        normalizeRecords :: [DataRecord] -> [DataRecord]
        normalizeRecords records = normalizeRecord <$> records
          where
            recordsByMonthRange :: Map (Month, Month) DataRecord
            recordsByMonthRange =
              M.fromList $
                mapMaybe
                  ( \r -> case r ^. rec_dateRange of
                      MonthRange a b -> Just ((a, b), r)
                      _ -> Nothing
                  )
                  records

            recordsByQuarterRange :: Map (Quarter, Quarter) DataRecord
            recordsByQuarterRange =
              M.fromList $
                mapMaybe
                  ( \r -> case r ^. rec_dateRange of
                      QuarterRange a b -> Just ((a, b), r)
                      _ -> Nothing
                  )
                  records

            normalizeRecord :: DataRecord -> DataRecord
            normalizeRecord !r = case r ^. rec_dateRange of
              MonthRange a b
                | a == b -> r
                | otherwise ->
                    maybe
                      r
                      ( \prevRecord ->
                          r
                            & rec_value %~ (\v -> v - (prevRecord ^. rec_value))
                            & rec_dateRange .~ MonthRange b b
                      )
                      (recordsByMonthRange M.!? (a, addMonths (-1) b))
              QuarterRange a b
                | a == b -> r
                | otherwise ->
                    maybe
                      r
                      ( \prevRecord ->
                          r
                            & rec_value %~ (\v -> v - (prevRecord ^. rec_value))
                            & rec_dateRange .~ QuarterRange b b
                      )
                      (recordsByQuarterRange M.!? (a, addQuarters (-1) b))
              _ -> r

determineSubjectKind :: BdlSubjectInfo -> SubjectKind
determineSubjectKind si
  | "dane miesięczne" `DT.isInfixOf` si_name si = Monthly
  | "dane kwartalne" `DT.isInfixOf` si_name si = Quarterly
  | otherwise = Yearly

textToMonths :: Text -> (MonthOfYear, MonthOfYear)
textToMonths !t = case DT.split (== '-') t of
  [a] -> (textToMonth a, textToMonth a)
  [a, b] -> (textToMonth a, textToMonth b)
  x -> error ("invalid month range: " <> show x)

textToMonth :: Text -> MonthOfYear
textToMonth = \case
  "styczeń" -> 1
  "luty" -> 2
  "marzec" -> 3
  "kwiecień" -> 4
  "maj" -> 5
  "czerwiec" -> 6
  "lipiec" -> 7
  "sierpień" -> 8
  "wrzesień" -> 9
  "październik" -> 10
  "listopad" -> 11
  "grudzień" -> 12
  x -> error ("invalid month: " <> x)

textToQuarters :: Text -> (QuarterOfYear, QuarterOfYear)
textToQuarters = \case
  "1 kwartał" -> (Q1, Q1)
  "2 kwartał" -> (Q2, Q2)
  "3 kwartał" -> (Q3, Q3)
  "4 kwartał" -> (Q4, Q4)
  "pierwsze półrocze" -> (Q1, Q2)
  "1-3 kwartały" -> (Q1, Q3)
  "rok" -> (Q1, Q4)
  x -> error ("invalid quarter: " <> x)
