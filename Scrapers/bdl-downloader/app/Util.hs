module Util (stripPfxLower1) where

import Data.Char (toLower)
import Data.List (stripPrefix)

stripPfxLower1 :: String -> String -> String
stripPfxLower1 pfx name =
  maybe
    name
    ( \case
        f : rst -> toLower f : rst
        [] -> []
    )
    (stripPrefix pfx name)
