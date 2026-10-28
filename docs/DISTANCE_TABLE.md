# Sourced phonetic distance rows

Opt-in. `ipa()` does not read this table, and the golden `ipa()` snapshot is unchanged. A recognizer's phone strings are scored as they arrive. The hand-weighted feature table is still the default. A row below replaces that distance only for its scheme and context.

A learner goal changes acceptance and credit only. Distances: strict 0.20, gracious 0.33, lenient 0.42. Credit caps stay 0.60 / 0.75 / 0.90.

| Distance | Tier | Strict | Gracious |
|---|---|---|---|
| ≤ 0.02 | accurate | accepted, no deduction | accepted |
| 0.25 | tolerated | edit | accepted, with a deduction |
| 0.50 ungated | not-a-match | reject | reject |
| 1 | not-a-match | reject | reject |

Koine and Modern `o`/`ɔ` stay distance 0, and Koine `β`/`v` stays distance 0. Those equivalences are stricter than a 0.02 notation row.

**Policy** rows are marked `"policy": true` in `dist_table` JSON. The target value is sourced. The tolerance is a design choice, not a historical claim. The other rows are historical claims.

Marks: **[V]** means the passage was opened and read. Nothing marked recalled is quoted here.

Call `phone_distance_in` with a `PhoneSituation` when a row needs neighbors or a gate. `left`, `right`, and `right2` are the phones around the target. `place` is `initial`, `medial`, or `final`. `posterior` is the recognizer's probability of the **target** phone. Below 0 means no gate, and a gated row is then not a match. `phone_credit` reads that probability from the candidate list. The string form is `left,right,right2,place,posterior`.

## Shipped historical rows

| ID | Scheme | Pair | Distance | Note |
|---|---|---|---|---|
| E01 | Modern, Koine | ʝ ↔ j | 0.02 | γ before ι/ε is a palatal buzz [ʝ], like a soft y. |
| E02 | Modern | medial n↔∅ before d, m↔∅ before b, ŋ↔∅ before g | 0.02 | ντ is a voiced [d], often with a light [n] before it inside a word. |
| E03 | Koine | t↔d after n, p↔b after m, k↔g after ŋ | 0.02 | Koine ντ, μπ, γκ are [nd mb ŋg] after Horrocks; Egyptian papyri also show voiceless [nt mp ŋk]. |
| E06 | Modern, Koine | doubled σσ λλ ρρ ττ κκ μμ νν ππ ββ heard as one | 0.02 | Modern: a double letter is one consonant [alá]. Koine: doubled letters were already simplified in the Koine. |
| E09 | Modern, Koine, Attic | n ↔ ŋ before k, g, x, ɣ | 0.02 in that context, otherwise not a match | ν before κ/γ/χ is [ŋ]. Labial n↔m is not in this table. |
| E10 | all four | r ↔ ɾ | 0.02 | no extra note |
| E12 | Modern, Koine | x ↔ ç | 0.02 before a front vowel, 0.25 outside | χ is [ç] before ι/ε. |
| E13 | Modern | k↔c, n↔ɲ, l↔ʎ, ɣ↔ɟ, ɣ↔ʝ | 0.02 before ι/ε or before ι plus a back vowel, otherwise not a match | κ, λ, ν before ι/ε are slightly palatalized. |
| E14 | Modern | ʝ i V ↔ ʝ V, and the same with j | 0.02 | γιά is [ja]: the ι is part of the ʝ. |
| E15 | Modern | i ↔ j before a vowel | 0.02 in that context, otherwise not a match | Keep ι a vowel in careful speech; in running speech it is a glide. |
| E17 | Modern, Koine | v↔f, and β↔f, on an αυ/ευ/ηυ coda | 0.02 when the hearing follows the voicing rule, otherwise 0.25 | αυ/ευ = [av/ev] or [af/ef] by what follows. |
| E18 | Koine | β ↔ v | 0 | already the equivalence |
| E19 | Koine | αι↔a i, ει↔e i, οι↔o i; αι↔e is E11 | offglide 0.25 | αι = [ai] in Attic, [ɛ] in Koine. |
| E21 | Koine | tʰ↔t, kʰ↔k, pʰ↔p | 0.25 | Add the puff of breath: θ/φ/χ are aspirated stops in early Koine. |
| E22 | Koine | θ↔tʰ, x↔kʰ, f↔pʰ, f↔ɸ, pʰ↔ɸ | 0.02 | θ φ χ: aspirated stops in early Koine, fricatives later. |
| E27 | Modern | t/d, k/g, p/b, z/s, f/v, ð/θ | 1 | phonemic voicing. The αυ/ευ coda is E17, not this row. |
| E34 | all four | k↔t, r↔l, a↔e, a↔o, u↔i, s↔θ, n↔l | 1 | phonemic contrasts |

E03 does **not** change `ipa()`. Koine still emits voiceless `n t`, `m p`, `ŋ k`. The voiced hearing is an accurate variant. Flipping the default to voiced is a separate decision.

E13: the 41-phone inventory has no `c`, `ɲ`, or `ʎ`, so a model hears `k`, `n`, or `l`. The rows stay if a richer inventory arrives. `c`, `ɲ`, `ʎ`, and `ɟ` are known to the distance table only. `ipa()` does not emit them.

E15 uses “before a vowel” because stress is not on the phone string.

E17 keeps the existing Koine word-final decision: `[f]` for word-final αυ/ευ/ηυ is tolerated, not accurate.

E22's runtime note says “and later the air keeps flowing” so the learner note does not use the word the style test rejects. The claim is the sentence in the table above.

E06 and E02 and E14 and E01 are applied inside alignment, not only as a pair lookup. A medial nasal deletes or inserts at path cost 0.02. One copy of a doubled consonant deletes at 0.02, and the word score drops that copy only when the other copy was heard. An ι between ʝ/j and a vowel does the same. ʝ↔j and, in palatal context, k↔c are accurate substitutions (path cost 0). A word-initial nasal is not optional.

## Policy rows

| ID | Scheme | Pair | Distance | Note |
|---|---|---|---|---|
| E07 | Attic | consonant `Cː` heard as `C` | 0.25 | A double letter is a long consonant: hold it a beat longer. |
| E11 | all four | e↔ɛ, i↔ɪ, o↔ɔ, u↔ʊ | 0.02 | notation twins. Erasmian i↔ɪ and o↔ɔ stay 0.25. |
| E19 | Attic | αι heard as e or ɛ; οι heard as y | 0.25 | same αι sentence as the Koine row |
| E23 | Attic | tʰ↔t, kʰ↔k, pʰ↔p | 0.25 | Attic θ φ χ are aspirated; the puff is the difference from τ π κ. |
| E24 | Koine | k↔g, t↔d | 0.25 when the target posterior is at least 0.15, otherwise 0.50 | Voice the consonant: κ is [k], γ is [ɣ]/[g]. |
| E25 | Koine | z↔s | same gate as E24 | ζ is [z] in Koine. |
| E28 | Modern | ɣ↔g | 0.25 | γ: let the air keep flowing, no full closure. |

E24 and E25 are Koine only. Strict still rejects 0.25. Gracious and lenient accept only when the gate is open. With no posterior, they are not a match. p↔b is not in E24.

Attic vowel length (`ɔː`/`ɔ`, `uː`/`u`) stays the accurate length row. E07 is consonants only. Attic αυ and ευ stay diphthongs: the verified note does not give them one monophthong phone, so no phone was invented for them.

E34 has no onset-phantom exception. This library has no such guard, so k↔t and r↔l are distance 1 everywhere.

## Sources

| ID | Source |
|---|---|
| E01 | Holton, Mackridge, and Philippaki-Warburton, ch. 1 §1.4 [V]. Arvaniti 2007, pp. 112–113 and 124 [V]. Koine: Horrocks §6.4 (19), [j] before front vowels [V]. |
| E02 | Holton §1.4: the nasal is optionally present inside a word and generally absent at the start [V]. Arvaniti 2007, p. 104 [V]. |
| E03 | Horrocks §6.4 (18): voiced allophones after nasals [V]. Gignac vol. I §C, pp. 76–86, postnasal voiced values marked uncertain [V]. |
| E06 | Modern: Holton §1.4 [V]. Koine: Horrocks §6.4 (22) [V]. Gignac §F, p. 154 [V]. |
| E07 | Policy. Allen, *Vox Graeca*, double consonants, pp. 10–12: a double letter is a lengthened sound [V]. |
| E09 | Allen: γ before a velar is [ŋ] [V]. Holton: [ŋ] before /g/ [V]. |
| E10 | Arvaniti 2007, pp. 109–110: Greek /r/ is mostly a tap [V]. Allen: a rolled r [V]. |
| E11 | Policy. Notation only. Holton writes plain [e i o u] for Modern [V]. |
| E12 | Arvaniti 2007, p. 112: [ç] is the allophone of /x/ before /i e/ [V]. Holton lists a palatalized x before front vowels [V]. |
| E13 | Arvaniti 2007, pp. 112–113, including παλιός, νιάτα, and κυάλι [V]. Holton writes a palatalized k and g [V]. |
| E14 | Holton §1.4: [j] is also γ plus unstressed /i/ plus a vowel [V]. |
| E15 | Holton §1.2: non-syllabic /i/ is [j] after a voiced consonant [V]. Arvaniti 2007, p. 124 [V]. |
| E17 | Holton §1.3 [V]. Horrocks §6.4, [af/av ef/ev] by the early Byzantine period [V]. Buth [V]. Koine word-final [f] stays the 2026-10-27 decision. |
| E18 | Buth [V], and the existing β/v equivalence. |
| E19 | Horrocks, Koine vowels: αι = [e], ει = [i], οι and υ = [y] [V]. Attic tolerance is policy. Allen treats οι as a diphthong [V]. |
| E21 | Gignac §D, pp. 86–98, and §E, pp. 98–102 [V]. Horrocks §6.4 (20) [V]. |
| E22 | Horrocks §6.4 (20d): fricativization was widely, though not universally, carried through by the end of the 4th century AD [V]. Buth [V]. |
| E23 | Policy. Allen, pp. 16 ff.: the aspirates are phonemic [V]. |
| E24 | Policy, and the gate. Gignac §C, pp. 76–86: voiced and voiceless stops interchange often in the Egyptian papyri [V]. |
| E25 | Policy, and the gate. The two [V] claims disagree: Gignac finds no phonemic voiced/voiceless sibilant distinction, and Horrocks §6.4 (21) treats /z/ as a new phoneme. |
| E27 | Holton §1.4: voicing is phonemic [V]. |
| E28 | Policy. Holton §1.4: [ɣ] is the fricative, and [g] is for γκ and γγ [V]. |
| E34 | Holton §1.4 consonant chart [V]. Allen's consonant tables [V]. |

## What was not shipped

Needs a source, so it is not in the table: E04 (medial nasal loss in Koine; word-final ν before a stop is the only part with a source), E08, E16, E20, E26, E29, E30, E31.

Dropped: E05, E32, E33.

On the public FLEURS el_gr test set (seg3: 1,229 segments, 42,482 reference phones), the high-confidence rows move word acceptance by about 2.1 points with pooled false accepts from 1.1% to 1.3%. Adding E12, E15, E17, and E19 reaches about 3.0 points and 1.4% false accepts. Accepting every near pair at a fixed cost reaches about 9.8 points and 13.9% false accepts. That is why E24 and E25 are gated.
