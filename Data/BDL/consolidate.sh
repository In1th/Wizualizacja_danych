#!/bin/bash

echo "Building scraper..."
cd ../../Scrapers/bdl-downloader && cabal -v0 build && cd - || exit 1

_exe=(../../Scrapers/bdl-downloader/dist-newstyle/build/*/*/bdl-downloader-0.1.0.0/x/bdl-downloader/build/bdl-downloader/bdl-downloader)
EXE="$(realpath "${_exe[-1]}")"

echo "Consolidating..."

test -f gus_bdl.json && mv gus_bdl.json gus_bdl.json.bak

$EXE consolidate-data dl/down* -n 4 -n 91 -n 50 > gus_bdl.json || (test -f gus_bdl.json.bak && mv gus_bdl.json.bak gus_bdl.json)

rm -f gus_bdl.json.bak
