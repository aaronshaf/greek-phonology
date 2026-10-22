# How the rules compare with published research

A short check of greek-phonology's rules against the standard references. Nothing in this file changes behavior. Items marked **Proposal** would change output and need Aaron's sign-off first.

## 1. Pronunciation schemes (`ipa`)

### Restored Attic
What the library does: η [ɛː], ει [eː], ου [oː], ω [ɔː], υ [y], ζ [zd], φ θ χ [pʰ tʰ kʰ], αι [ai], αυ [au], and β δ γ as stops.
- **Agrees** with Allen, *Vox Graeca* (3rd ed., CUP 1987) on the aspirated stops, ζ as [zd], η and ω as open long vowels, υ as [y] and the spurious diphthong ει as [eː].
- **Diverges:** Allen dates the change of ου from [oː] to [uː] to before the mid-4th century BC, so [uː] fits the usual target of classical Attic. Teodorsson, *The Phonemic System of the Attic Dialect 400–340 BC* (1974), dates many changes even earlier.
  **Proposal:** Attic ου → [uː].
- **Gap:** spelling doesn't show the length of α ι υ, so these are always short. Allen also treats ᾳ ῃ ῳ as long diphthongs and doubled consonants as geminates. The scheme should document this, or model it from a length-marked source.
- **Gap:** no pitch accent is shown. That is fine for segmental IPA but worth stating.

### Koine
What the library does: η [e], ε/αι [ɛ], ει [i], οι/υ [y], ω [o], β [v], δ [ð], γ [ɣ ~ ʝ], ζ [z], and φ θ χ aspirated [pʰ tʰ kʰ].
- **Agrees** with Buth's reconstruction ("Ἡ Κοινὴ Προφορά", Biblical Language Center, <https://athenaze.com/wp-content/media/PRONSYS12005.pdf>), which has voiced fricatives already by the 1st century and keeps η distinct from ε/αι.
- **Agrees** with Horrocks, *Greek: A History of the Language and its Speakers* (2nd ed., Wiley-Blackwell 2010, ch. 6). Horrocks finds the evidence for frication of φ θ χ "frankly meagre" before the late Roman period, and Egypt kept hard aspirates. Gignac, *A Grammar of the Greek Papyri of the Roman and Byzantine Periods*, vol. 1, *Phonology* (1976), documents the papyrus spellings that support the vowel mergers.
- **Agrees with the recent switch** to aspirated φ θ χ for Roman Palestine (koinegreek.com, <https://www.koinegreek.com/koine-pronunciation>; Wikipedia summary with sources, <https://en.wikipedia.org/wiki/Koine_Greek_phonology>).
- **Note:** Buth's own "Living Koine" teaching uses fricative [f θ x] for consistency. So the library's choice is the historical NT-era one, not Buth's classroom one. Say so in the docs.
- **Minor:** some sources write β as bilabial [β] rather than [v] for this period. Optional.

### Erasmian
What the library does: η [eɪ], ω [oʊ], υ [u], ζ [dz], θ [θ], φ [f], χ [k], ει [eɪ], οι [ɔɪ], αυ [aʊ], ευ [ju].
- There is no single standard. Erasmian is a family of classroom practices; the Ohio State "Greek Ancient and Modern" page discusses them (<https://u.osu.edu/greek/phonology/>). The library follows common North American seminary practice.
- **Diverges** from many university courses, which say χ as [x] or [kʰ], not [k]. Buth also notes that Erasmian f/th/ch were borrowed from Modern Greek.
  **Proposal:** document χ = [k] as a US-seminary variant, or add an option for [x].

### Byzantine
What the library does: like Modern, except υ and οι are [y].
- In Horrocks's usage, the period's defining feature is that υ and οι had merged as [y] and did not merge with [i] until about the 10th century. Every other Modern feature was already in place, and the Wikipedia page on Koine Greek phonology agrees. So the library models early-to-middle Byzantine Greek (about 6th–10th century).
- **Proposal (definition only):** name that date range in the docs. "Byzantine" in church use often just means Modern Greek reading pronunciation, and Aaron should choose which meaning to use.

### Modern
What the library does: standard Athenian values, with μπ ντ γκ as digraphs and γ/χ palatalized before front vowels.
- **Agrees** with Arvaniti, "Greek Phonetics: The State of the Art", *Journal of Greek Linguistics* 8 (2007), and with Holton, Mackridge & Philippaki-Warburton, *Greek: A Comprehensive Grammar*.
- **Small gaps:** σ is not voiced to [z] before voiced consonants (κόσμος [ˈkozmos]). Medial μπ/ντ, which many speakers say as [mb]/[nd], is not prenasalized.
  **Proposal:** voice σ before a voiced consonant in Modern (and Byzantine).

## 2. Accent rules and sandhi
- The law of limitation, recessive accent, grave before a following word, and the enclitic rules follow Smyth, *Greek Grammar* §§149–187 (rev. Messing, 1956; text at <https://www.perseus.tufts.edu/>), and Probert, *A New Short Guide to the Accentuation of Ancient Greek* (Bristol Classical Press, 2003). These cover: an extra acute on a proparoxytone or properispomenon before an enclitic, a two-syllable enclitic keeping its accent after a paroxytone, and the acute kept on an oxytone before an enclitic. **Agrees.**
- **Edition conventions:** SBLGNT and Rahlfs write the acute, not the grave, before punctuation, and interrogative τίς/τί never takes a grave. The phrase code follows the SBLGNT text, which it reproduces on round trip.
- **Not modeled:** Devine & Stephens, *The Prosody of Greek Speech* (OUP 1994), treat the accent as a pitch contour with phrase-level effects. The library models only the written marks, which is the right scope for a text tool, but it should not claim to model pitch.

## 3. Syllabification
- Smyth §140: a single consonant goes with the next vowel. A cluster that can begin a word (including stop + liquid/nasal) also goes with the next vowel. Double consonants and other clusters are split. The library's proved "legal onset" rule matches this. **Agrees.**
- **Divergence by purpose:** in Attic verse, stop + liquid often counts as heterosyllabic ("correption", Allen, *Vox Graeca*; Devine & Stephens). The library uses the grammarians' split, which is right for accentuation but not for meter.
  **Proposal:** add a metrical option later; keep the default.
- Diaeresis forces a break, which the library already does.

## 4. Prior art for detecting a pronunciation scheme
- We found no published tool or paper that classifies speech or IPA by Ancient Greek reading scheme (Erasmian vs. Restored vs. Koine vs. Modern). The closest work:
  - Modern Greek dialect classifiers, such as Cypriot vs. Standard Modern Greek (IEEE, <https://ieeexplore.ieee.org/document/8554709>).
  - Rule-based Greek G2P such as IPAGreek, and learned G2P (surveyed in Papantoniou & Tzitzikas, "NLP for the Greek Language: A Longer Survey", <https://arxiv.org/abs/2408.10962>).
  - Phonetic matching (SoundexGR, <https://github.com/YannisTzitzikas/SoundexGR>).
- So `detect` appears to be new. The README should describe it as a heuristic likelihood model, not an established method.

## Top divergences
1. Attic ου is [oː]; Allen's 4th-century target is [uː]. (Proposal)
2. Erasmian χ is [k]; many academic courses use [x] or [kʰ]. (Document or add an option.)
3. Byzantine needs a stated date range (about 6th–10th century, υ/οι = [y]). (Docs)
4. Modern doesn't voice σ before voiced consonants. (Proposal)
5. Attic doesn't show vowel length for α ι υ or geminates. (Document)
