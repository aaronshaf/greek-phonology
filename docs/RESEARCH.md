# How the rules compare with published research

A short check of greek-phonology's rules against the standard references. Nothing in this file changes behavior. Items marked **Proposal** would change output and need Aaron's sign-off first.

## 1. Pronunciation schemes (`ipa`)

### Attic
What the library does: η [ɛː], ει [eː], ου [uː], ω [ɔː], υ [y], ζ [zd], φ θ χ [pʰ tʰ kʰ], αι [ai], αυ [au], and β δ γ as stops.
- **Agrees** with Allen, *Vox Graeca* (3rd ed., CUP 1987) on the aspirated stops, ζ as [zd], η and ω as open long vowels, υ as [y] and the spurious diphthong ει as [eː].
- **Diverges:** Allen dates the change of ου from [oː] to [uː] to before the mid-4th century BC, so [uː] fits the usual target of classical Attic. Teodorsson, *The Phonemic System of the Attic Dialect 400–340 BC* (1974), dates many changes even earlier.
  **Done (Oct 2026):** Attic ου → [uː].
- **Length (done, Oct 2026, partly):** α ι υ are written long [aː iː yː] when the spelling shows it: a circumflex, a macron, or an iota subscript. ᾳ ῃ ῳ are long diphthongs [aːi ɛːi ɔːi]. Doubled consonants are geminates written with ː (θάλασσα [tʰ a l a sː a]); γγ is still [ŋg], and aspirate pairs (κχ πφ τθ) are left as two phones. Not modeled: α ι υ under an acute or with no accent, whose length the spelling doesn't show and the bundled SBLGNT/Rahlfs word list doesn't mark; these stay short.
- **Gap:** no pitch accent is shown. That is fine for segmental IPA but worth stating.

### Koine
What the library does: η [e], ε/αι [ɛ], ει [i], οι/υ [y], ω [o], β [v], δ [ð], γ [ɣ ~ ʝ], ζ [z], and φ θ χ aspirated [pʰ tʰ kʰ].
- **Agrees** with Buth's reconstruction ("Ἡ Κοινὴ Προφορά", Biblical Language Center, <https://athenaze.com/wp-content/media/PRONSYS12005.pdf>), which has voiced fricatives already by the 1st century and keeps η distinct from ε/αι.
- **Agrees** with Horrocks, *Greek: A History of the Language and its Speakers* (2nd ed., Wiley-Blackwell 2010, ch. 6). Horrocks finds the evidence for frication of φ θ χ "frankly meagre" before the late Roman period, and Egypt kept hard aspirates. Gignac, *A Grammar of the Greek Papyri of the Roman and Byzantine Periods*, vol. 1, *Phonology* (1976), documents the papyrus spellings that support the vowel mergers.
- **Agrees with the recent switch** to aspirated φ θ χ for Roman Palestine (koinegreek.com, <https://www.koinegreek.com/koine-pronunciation>; Wikipedia summary with sources, <https://en.wikipedia.org/wiki/Koine_Greek_phonology>).
- **Note:** Buth's own "Living Koine" teaching uses fricative [f θ x] for consistency. So the library's choice is the historical NT-era one, not Buth's classroom one. Say so in the docs.
- **Minor:** some sources write β as bilabial [β] rather than [v] for this period. Optional.

### Erasmian
What the library does: η [eɪ], ω [oʊ], υ [u], ζ [dz], θ [θ], φ [f], χ [x], ει [eɪ], οι [ɔɪ], αυ [aʊ], ευ [ju].
- There is no single standard. Erasmian is a family of classroom practices; the Ohio State "Greek Ancient and Modern" page discusses them (<https://u.osu.edu/greek/phonology/>). The library follows common North American seminary practice.
- **Diverges** from many university courses, which say χ as [x] or [kʰ], not [k]. Buth also notes that Erasmian f/th/ch were borrowed from Modern Greek.
  **Done (Oct 2026):** Erasmian χ is now [x].

### Byzantine
Removed from the library (Oct 2026) pending a definition: "Byzantine" can mean a 6th–10th-century reconstruction (υ/οι = [y]) or simply Modern Greek reading pronunciation in church use.

### Modern
What the library does: standard Athenian values, with μπ ντ γκ as digraphs and γ/χ palatalized before front vowels.
- **Agrees** with Arvaniti, "Greek Phonetics: The State of the Art", *Journal of Greek Linguistics* 8 (2007), and with Holton, Mackridge & Philippaki-Warburton, *Greek: A Comprehensive Grammar*.
- **Small gaps:** σ is not voiced to [z] before voiced consonants (κόσμος [ˈkozmos]). Medial μπ/ντ, which many speakers say as [mb]/[nd], is not prenasalized.
  **Done (Oct 2026), Modern only:** σ/ς becomes [z] before β γ δ μ ν λ ρ (κόσμος [k o z m o s]).

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
1. ~~Attic ου is [oː]~~ Done: [uː].
2. ~~Erasmian χ is [k]~~ Done: [x].
3. Byzantine: removed pending a definition.
4. ~~Modern doesn't voice σ before voiced consonants~~ Done: [z] before β γ δ μ ν λ ρ.
5. Attic length: done where the spelling shows it (circumflex, macron, iota subscript, geminates). Open: α ι υ under an acute or unaccented.

After items 1, 2, 4 and 5 the detector's phone-bigram tables were rebuilt from the SBLGNT and Rahlfs LXX word counts. The detector uses no audio-derived data.
