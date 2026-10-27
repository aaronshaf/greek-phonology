#!/usr/bin/env bash
# Fill packages/npm with the release JS, wasm, and lexicon. Does not publish.
set -euo pipefail
cd "$(dirname "$0")/.."
moon build --target js --release
moon build --target wasm --release
dest="$(cd .. && pwd)/packages/npm"
cp _build/js/release/build/api/api.js "$dest/greek-phonology.cjs"
cp _build/wasm/release/build/api/api.wasm "$dest/greek-phonology.wasm"
cp data/greek-phonology-lexicon.bin "$dest/greek-phonology-lexicon.bin"
echo "built $dest (version $(python3 -c 'import json,sys; print(json.load(open(sys.argv[1]))["version"])' "$dest/package.json"))"
