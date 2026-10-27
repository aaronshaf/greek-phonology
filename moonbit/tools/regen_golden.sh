#!/usr/bin/env bash
# Refresh the ipa() golden snapshot from the current release JS build.
# Deliberate: run this only when an output change is intended and reviewed.
set -euo pipefail
cd "$(dirname "$0")/.."
moon build --target js --release
node tools/regen_golden.cjs "$@"
