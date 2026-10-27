#!/bin/sh
# Local checks for one commit. See CONTRIBUTING.md.
# Slow work (a fresh JS golden rebuild) stays behind GREEK_PHONOLOGY_FULL=1.
# moon prove runs when z3 is on PATH. Set GREEK_PHONOLOGY_SKIP_PROVE=1 to skip it.
set -u
root=$(git rev-parse --show-toplevel) || exit 1
cd "$root" || exit 1
export PATH="$HOME/.moon/bin:$HOME/.local/bin:$PATH"

if ! command -v moon >/dev/null 2>&1; then
  echo "pre-commit: moon is not on PATH. Install MoonBit from https://www.moonbitlang.com and re-run."
  exit 1
fi

echo "pre-commit: moon check"
( cd moonbit && moon check ) || exit 1

echo "pre-commit: moon test (this includes the ipa() golden snapshot)"
( cd moonbit && moon test ) || exit 1

echo "pre-commit: moon info"
( cd moonbit && moon info ) || exit 1
python3 moonbit/tools/check_mbti_additive.py || exit 1
if ! git diff --exit-code -- moonbit/kernel/pkg.generated.mbti moonbit/lib/pkg.generated.mbti moonbit/api/pkg.generated.mbti >/dev/null; then
  echo "pre-commit: moon info rewrote a .mbti file. Review the diff and stage it."
  exit 1
fi

if command -v z3 >/dev/null 2>&1; then
  if [ "${GREEK_PHONOLOGY_SKIP_PROVE:-}" = "1" ]; then
    echo "pre-commit: moon prove skipped because GREEK_PHONOLOGY_SKIP_PROVE=1. z3 is installed."
  else
    echo "pre-commit: moon prove"
    ( cd moonbit && moon prove ) || exit 1
    python3 moonbit/tools/coverage.py || exit 1
  fi
else
  echo "pre-commit: moon prove skipped: z3 is not on PATH."
fi

if [ "${GREEK_PHONOLOGY_FULL:-}" = "1" ]; then
  echo "pre-commit: JS golden check (needs a release JS build under moonbit/_build)"
  ( cd moonbit && node tools/regen_golden.cjs --check ) || exit 1
else
  echo "pre-commit: JS rebuild of the golden snapshot skipped. moon test already compares ipa() to the snapshot. Set GREEK_PHONOLOGY_FULL=1 to rebuild-check it."
fi

echo "pre-commit: ok"
