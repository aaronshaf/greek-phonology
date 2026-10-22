#!/usr/bin/env bash
# Build the wasm + js libraries and copy them, with the lexicon, into docs/ for GitHub Pages.
set -euo pipefail
cd "$(dirname "$0")/.."
moon build --target wasm --release
moon build --target js --release
cp _build/wasm/release/build/api/api.wasm ../docs/greek-phonology.wasm
cp _build/js/release/build/api/api.js ../docs/greek-phonology.js
cp data/greek-phonology-lexicon.bin ../docs/greek-phonology-lexicon.bin
ls -la ../docs
