{-# LANGUAGE DataKinds #-}
{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE DerivingVia #-}

module BdlDicts.BdlDicts
  ( AvailabilityLevel,
    Attribute,
    getAvailabilityLevel,
    getAttribute,
    getMeasureUnit,
    getAvailabilityYear,
    getAggregate,
  )
where

import ApiUtil (bdlJsonReq, makeBdlUri)
import AppEnv (AppEnv (..), BdlDictCache (..))
import BdlDicts.Types
import Data.Map.Strict qualified as Map
import Deriving.Aeson
import Network.Wreq.Session qualified as Sess

getSimpleDict :: forall a d. TVar (Maybe (Map Int d)) -> IO a -> (a -> [d]) -> (d -> Int) -> IO (Map Int d)
getSimpleDict cacheEntry req toValue toKey = liftIO (readTVarIO cacheEntry) >>= maybe fetch pure
  where
    fetch :: IO (Map Int d)
    fetch =
      req <&> toValue <&> map (\d -> (toKey d, d)) <&> fromList >>= (\m -> atomically $ writeTVar cacheEntry (Just m) $> m)

getAvailabilityLevel :: (MonadIO m) => Int -> ReaderT AppEnv m (Maybe AvailabilityLevel)
getAvailabilityLevel !key = do
  env <- ask
  let sess = env_bdlSess env
  let cache = (dc_availLevels . env_dictCache) env
  liftIO $ getSimpleDict cache (bdlJsonReq $ Sess.get sess $ makeBdlUri "/levels") availLvl_r_results availLvl_id <&> Map.lookup key

getAttribute :: (MonadIO m) => Int -> ReaderT AppEnv m (Maybe Attribute)
getAttribute !key = do
  env <- ask
  let sess = env_bdlSess env
  let cache = (dc_attributes . env_dictCache) env
  liftIO $ getSimpleDict cache (bdlJsonReq $ Sess.get sess $ makeBdlUri "/attributes") attr_r_results attr_id <&> Map.lookup key

getMeasureUnit :: (MonadIO m) => Int -> ReaderT AppEnv m (Maybe MeasureUnit)
getMeasureUnit !key = do
  env <- ask
  let sess = env_bdlSess env
  let cache = (dc_measureUnits . env_dictCache) env
  liftIO $ getSimpleDict cache (bdlJsonReq $ Sess.get sess $ makeBdlUri "/measures") mu_r_results mu_id <&> Map.lookup key

getAvailabilityYear :: (MonadIO m) => Int -> ReaderT AppEnv m (Maybe AvailabilityYear)
getAvailabilityYear !key = do
  env <- ask
  let sess = env_bdlSess env
  let cache = (dc_availYrs . env_dictCache) env
  liftIO $ getSimpleDict cache (bdlJsonReq $ Sess.get sess $ makeBdlUri "/years") availYr_r_results availYr_id <&> Map.lookup key

getAggregate :: (MonadIO m) => Int -> ReaderT AppEnv m (Maybe Aggregate)
getAggregate !key = do
  env <- ask
  let sess = env_bdlSess env
  let cache = (dc_aggregates . env_dictCache) env
  liftIO $ getSimpleDict cache (bdlJsonReq $ Sess.get sess $ makeBdlUri "/aggregates") agg_r_results agg_id <&> Map.lookup key

data AvailabilityLevelResponse = AvailabilityLevelResponse
  { availLvl_r_totalRecords :: !Int,
    availLvl_r_results :: ![AvailabilityLevel]
  }
  deriving (Generic, Show)
  deriving (FromJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "availLvl_r_"]] AvailabilityLevelResponse

data AttributesResponse = AttributesResponse
  { attr_r_totalRecords :: Int,
    attr_r_results :: ![Attribute]
  }
  deriving (Generic, Show)
  deriving (FromJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "attr_r_"]] AttributesResponse

data MeasureUnitResponse = MeasureUnitResponse
  { mu_r_totalRecords :: Int,
    mu_r_results :: ![MeasureUnit]
  }
  deriving (Generic, Show)
  deriving (FromJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "mu_r_"]] MeasureUnitResponse

data AvailabilityYearResponse = AvailabilityYearResponse
  { availYr_r_totalRecords :: Int,
    availYr_r_results :: ![AvailabilityYear]
  }
  deriving (Generic, Show)
  deriving (FromJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "availYr_r_"]] AvailabilityYearResponse

data AggregateResponse = AggregateResponse
  { agg_r_totalRecords :: Int,
    agg_r_results :: ![Aggregate]
  }
  deriving (Generic, Show)
  deriving (FromJSON) via CustomJSON '[FieldLabelModifier '[StripPrefix "agg_r_"]] AggregateResponse
