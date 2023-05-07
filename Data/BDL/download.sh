#!/bin/bash

SUBJECTS=(P3824 P3823 P3822 P3820 P3789 P3793 P3791 P3792 P3794 P3790 P3778 P3777 P3892 P3780 P3782 P3781 P3779 P3614 P1737 P2352 P3952 P3950 P4088 P2166 P2762 P2430 P4267 P1727 P1719 P3961 P3964 P4264 P3816 P4217)

echo "Building scraper..."
cd ../../Scrapers/bdl-downloader && cabal build && cd - || exit 1

_exe=(../../Scrapers/bdl-downloader/dist-newstyle/build/*/*/bdl-downloader-0.1.0.0/x/bdl-downloader/build/bdl-downloader/bdl-downloader)
EXE="$(realpath "${_exe[-1]}")"

mkdir -p dl
cd dl || exit 1
rm -f down*

echo "Downloading (you can open the partial file in an editor to see progress)" &&
$EXE download-subs "${SUBJECTS[@]}" -l 2 &&
echo "Downloaded. Generate the final JSON using ./consolidate.sh"
