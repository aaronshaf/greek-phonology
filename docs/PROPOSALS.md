# Proposals

Not implemented. Each one would change behavior or needs a source this tree does not have. `ipa()` stays as it is until one of these is decided.

1. **Medial Koine αυ/ευ/ηυ before a vowel or a voiced consonant** is still [β], not [v]. The distance table now calls those two symbols the same sound, but `ipa()` still prints [β] in that position. Open in [RESEARCH.md](RESEARCH.md).
2. **Erasmian χ heard as [k], and Attic ου heard as [o],** stay on the feature table. No curated high-credit band. Open in [RESEARCH.md](RESEARCH.md).
3. **[ɥ] has no feature row.** A hearing of [ɥ] is `not-a-match`. No vector was guessed.
4. **Metrical syllabification** (stop + liquid as heterosyllabic) is a separate option. The default stays the grammarians' onset, which accentuation needs.
5. **Cross-word voicing (`ctx`)** stays default off. Phrase-final output matches the isolated word. Whether a later version turns the flag on is open.
6. **Triangle inequality** does not hold for the feature table (`w`, `j`, `e`). Do not treat `d` as a metric in a new API.
7. **Float proofs of the alignment matrix, Unicode normalization, and the two-call credit monotonicity lemmas.** Z3 timed out on the lemmas. The matrix and Unicode are outside the prover's model. See [VERIFICATION.md](VERIFICATION.md).
8. **Restart lists, take statistics, and the pass/fail gate stay on the page.** `attemptCredit` is already in the alignment result, because those rows are computed while scoring words. A `restarts` list and the gate are the page's evidence floor, derived from `align.pairs`. Measured page checks found no mismatch, so a second copy of that policy in the library is not worth a new rule. Erasmian offglide abstention (ɪ after e, ʊ after o) is also still the page's `opt` list: `optionalPhones` only marks rough breathing [h].
