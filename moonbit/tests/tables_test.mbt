// Exhaustive checks on finite tables (phone ids, inventories, contraction rules, NFC).

///|
test "finite tables: phones, inventories, contract rules" {
  assert_true(@lib.phone_table_ok())
  assert_true(@lib.scheme_inventories_ok())
  assert_true(@lib.contract_tables_ok())
}

///|
test "nfc: compose after decompose fixes precomposed Greek letters" {
  let samples = [
    'ά', 'έ', 'ή', 'ί', 'ό', 'ύ', 'ώ', 'ἀ', 'ἁ', 'ἐ', 'ἑ', 'ὀ', 'ὁ', 'ᾶ', 'ῆ', 'ῶ', 'ᾳ', 'ῃ', 'ῳ',
  ]
  for c in samples {
    let d = @lib.to_nfd(c.to_string())
    assert_eq(@lib.to_nfc(d), c.to_string())
  }
}

///|
test "detect: confusion tables and LM vocabulary" {
  assert_true(@lib.confusion_tables_ok())
  assert_true(@lib.detect_vocab_ok())
}

///|
let greek_atoms : Array[String] = [
  "α", "ε", "η", "ι", "ο", "υ", "ω", "ά", "έ", "ή", "ί", "ό", "ύ", "ώ", "ᾶ", "ῆ", "ῶ", "ᾳ", "ῃ", "ῳ",
  "ϊ", "ϋ", "ἁ", "ἐ", "ὁ", "αι", "ει", "οι", "ου", "αυ", "ευ", "υι", "β", "γ", "δ", "ζ", "θ", "κ",
  "λ", "μ", "ν", "ξ", "π", "ρ", "σ", "τ", "φ", "χ", "ψ",
]

///|
test "g2p: every atomic unit yields only declared phones per scheme" {
  for w in greek_atoms {
    for si, s in @lib.schemes {
      for x in @lib.g2p_index(w, si) {
        if x.p == "|" {
          continue
        }
        assert_true(@lib.phone_allowed(si, x.p), msg=s + " " + w + " -> " + x.p)
      }
    }
  }
}
