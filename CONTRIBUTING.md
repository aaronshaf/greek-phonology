# Contributing

Checks run locally. GitHub Actions only builds and deploys the playground (`pages.yml`). It does not run tests.

One-time setup in a clone:

```sh
sh scripts/setup-hooks.sh
```

That sets `git config core.hooksPath .githooks`. The hook is `.githooks/pre-commit`, which runs `moonbit/tools/precommit.sh`:

1. `moon check`
2. `moon test`, which includes the `ipa()` golden snapshot
3. `moon info`, then an additive-only check of the three `pkg.generated.mbti` files (a `pub fn`, `pub let`, struct header, or struct field that existed on HEAD must still be there)
4. `moon prove` when `z3` is on PATH. If `z3` is missing, the hook prints `moon prove skipped: z3 is not on PATH` and continues. `GREEK_PHONOLOGY_SKIP_PROVE=1` skips prove even when z3 is installed.
5. Prints the coverage metric (`python3 moonbit/tools/coverage.py`). How that count is computed is in [docs/VERIFICATION.md](docs/VERIFICATION.md).

`GREEK_PHONOLOGY_FULL=1` also runs `node moonbit/tools/regen_golden.cjs --check`. That needs a release JS build and is the slow check, so the default hook does not run it.

Install MoonBit with the command in the README. For proofs, install Z3 4.13 (the same solver the old informational job used) and put `z3` on PATH. A newer Z3 can report a different goal count; the hook does not require a fixed number.

Do not publish to npm from a commit, and do not add a git tag. The committed playground wasm is rebuilt by `moonbit/tools/build_pages.sh` when a release artifact is intentional.
