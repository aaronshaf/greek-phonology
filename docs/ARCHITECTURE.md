# Architecture

The library is the place for letter-to-sound, closeness, and alignment. A playground page and a learning app should call it rather than keep a second copy.

## Packages

- `moonbit/kernel/` is the finite model `moon prove` checks. Specs are in `spec.mbtp`. The float distance table and the alignment matrix are not in here.
- `moonbit/lib/` is the API: `g2p.mbt` and `g2p_units.mbt` (letter to sound), `phondist.mbt` and `phondist_adapt.mbt` (closeness and credit), `align.mbt` and `align_json.mbt` (alignment), plus syllables, accents, morphology, and the lexicon.
- `moonbit/api/` is the wasm and JavaScript export list. `ipa()` does not call the distance table or the aligner.

## Letter to sound

`ipa(text, scheme)` is the stable surface. Four schemes. Grapheme units (`g2p`) tile the typed word and can attach curated alternates (`alts`) or cross-word voicing (`ctx`). Both flags default off and do not change `ipa()`.

## Closeness

`phone_distance` is opt-in and model-agnostic. `d`, `note`, and `advice` come from the hand-weighted feature table plus a few scheme equivalences. A learner goal (`strict`, `gracious`, `lenient`) changes only the tier and the credit.

Koine equivalences: `o`/`ɔ`, and `β`/`v`. The second one is this reconstruction's decision that the letter β and the voiced αυ/ευ/ηυ coda are one sound (Aaron, 2026-10-27; see [RESEARCH.md](RESEARCH.md)). [f] for that coda stays tolerated. With an empty scheme, `β`/`v` keeps the feature-table distance.

`hearing_credit` is `phone_credit` plus the note. `credit_level` and `credit_bands` are the tint table (8, 30, 60, 85, 95 percent). A page should not keep its own cutoffs.

## Alignment

`align_tokens` is the deploy-122 restart/skip aligner. Substitution cost is `phone_distance` at the gracious goal only:

| Pair | Cost |
|---|---|
| Same string, or tier accurate (length, or a scheme equivalence) | 0 |
| Tier tolerated | 0.5 |
| Anything else | 1 |

The old CLASS list priced `e`/`i` and `r`/`l` at 0.5. Those pairs are not tolerated here (`e`/`i` is a step of vowel height; `r` and `l` differ in manner), so the cost is 1. CLASS is not a second price list. The JavaScript fixture `packages/npm/test/align_ref.cjs` still has CLASS so the parity test can name that disagreement. A page that still wants that 0.5 on the path passes `params.subCost` (both orders of the pair). The default stays 1 so a caller that does not opt in keeps the feature table. An identical string stays 0. The override is a path price, not a new credit tier. The learner goal does not move the path.

When two heard tokens can take the same target at the same cost, the identical string wins, then the token with the higher posterior on that target. A saturated insert cost (peak at least `QPK`) is what makes those paths tie; the tie-break does not change a strictly cheaper path.

Word `score` and `overall` are 0–100. An exact phone, or a lane alternate, still uses the posterior mass when it clears `floor`. A different heard phone below that floor uses `hearing_credit` at `params.goal` (empty means gracious), unless `params.nearMiss` is false or `goal` is `exact`. Then that phone scores 0. Divide by 100 and pass it to `credit_level`. The JSON also carries `credit`, `level`, `overallCredit`, `overallLevel`, and `attemptCredit` for every attempt already scored.

`lanes` runs one soft decode and one token list, then aligns each lane. Tokenisation uses the outer `TAU` and `MERGE_GAP`. A lane's own `scheme` or `params` applies to its path and its credit. Pass the matrix as a typed array, a number array, base64 float32, or `alignSetPost` plus `postRef`, instead of a JSON number list.

`phone_is_optional` is the page's default abstain rule: rough breathing [h] only. Aspiration (`pʰ`) stays required. The caller can still set `opt` itself.

The cost matrix is three arrays of `(heard + 1) * (phones + 1)` cells. A side over 20,000, or a product over 250,000, returns no pairs and cost `1e9` instead of allocating.

## What stays out

Pronunciation changes that are still open are listed in [PROPOSALS.md](PROPOSALS.md) and [RESEARCH.md](RESEARCH.md). The committed playground wasm is not rebuilt by a docs-only edit.
