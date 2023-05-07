module AppEnv
  ( AppEnv (..),
    BdlDictCache (..),
    initAppEnv,
  )
where

import ApiUtil (initBdlSess)
import BdlDicts.Types
import Network.Wreq.Session (Session)

initAppEnv :: IO AppEnv
initAppEnv = do
  dc_availLevels <- newTVarIO Nothing
  dc_attributes <- newTVarIO Nothing
  dc_measureUnits <- newTVarIO Nothing
  dc_availYrs <- newTVarIO Nothing
  dc_aggregates <- newTVarIO Nothing
  env_bdlSess <- initBdlSess
  let env_dictCache = BdlDictCache {dc_availLevels, dc_attributes, dc_measureUnits, dc_availYrs, dc_aggregates}
  return AppEnv {env_bdlSess, env_dictCache}

data AppEnv = AppEnv
  { env_bdlSess :: !Session,
    env_dictCache :: !BdlDictCache
  }

data BdlDictCache = BdlDictCache
  { dc_availLevels :: TVar (Maybe (Map Int AvailabilityLevel)),
    dc_attributes :: TVar (Maybe (Map Int Attribute)),
    dc_measureUnits :: TVar (Maybe (Map Int MeasureUnit)),
    dc_availYrs :: TVar (Maybe (Map Int AvailabilityYear)),
    dc_aggregates :: TVar (Maybe (Map Int Aggregate))
  }
