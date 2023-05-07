#!/bin/sh

test -f gus_bdl.json || exit 1
jq '.subjects | .[] | {id,name,description,dimensionTypes}' gus_bdl.json