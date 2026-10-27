#!/usr/bin/env bash
# Compare a fresh release build with the files committed for GitHub Pages.
# Informational: a difference is reported and this script exits 1, but CI does not block on it.
set -u
cd "$(dirname "$0")/.."
moon build --target wasm --release
moon build --target js --release
status=0
cmp_one() {
  local built="$1" committed="$2"
  if cmp -s "$built" "$committed"; then
    echo "ok  $committed"
  else
    echo "STALE  $committed"
    echo "  built $(wc -c < "$built") bytes, committed $(wc -c < "$committed") bytes"
    status=1
  fi
}
cmp_one _build/wasm/release/build/api/api.wasm ../docs/greek-phonology.wasm
cmp_one _build/js/release/build/api/api.js ../docs/greek-phonology.js
cmp_one data/greek-phonology-lexicon.bin ../docs/greek-phonology-lexicon.bin
if [ "$status" -ne 0 ]; then
  echo "Committed Pages artifacts differ from this build. Refreshing them is a separate decision; this check only reports it."
fi
exit "$status"
