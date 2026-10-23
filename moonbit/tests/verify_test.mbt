// Exhaustive and static verification (see VERIFICATION.md at repo root).

///|
fn strip_macron(p : String) -> String {
  p.replace(old="ː", new="")
}

///|
fn phone_allowed_for_scheme(s : Int32, p : String) -> Bool {
  if p == "|" || p == "h" || p == "i" {
    return true
  }
  let base = strip_macron(p)
  for id in 1..<48 {
    let lab = @lib.phone_label(id)
    if @kernel.in_scheme_inv(s, id) && (lab == p || lab == base || strip_macron(lab) == base) {
      return true
    }
  }
  false
}

///|
let greek_letters : Array[String] = [
  "α", "ε", "η", "ι", "ο", "υ", "ω", "β", "γ", "δ", "ζ", "θ", "κ", "λ", "μ", "ν", "ξ", "π", "ρ", "σ",
  "τ", "φ", "χ", "ψ",
]

///|
let diphthongs : Array[String] = [
  "αι", "ει", "οι", "υι", "ου", "αυ", "ευ", "ηυ",
]

///|
test "static tables: contract rules and language-model vocabulary" {
  assert_true(@lib.contract_rules_satisfy_kernel())
  assert_true(@lib.verify_lm_phones_in_vocab())
}

///|
test "phone inventories: ids 1..47 align with labels and schemes" {
  for id in 1..<48 {
    assert_false(@lib.phone_label(id) == "")
    assert_true(@kernel.in_scheme_inv(0, id) || @kernel.in_scheme_inv(1, id) ||
      @kernel.in_scheme_inv(2, id) || @kernel.in_scheme_inv(3, id))
  }
  assert_false(@kernel.in_scheme_inv(1, 47)) // yː is Attic-only
  assert_true(@kernel.in_scheme_inv(2, 47))
}

///|
test "detect fold is idempotent; normalize4 always distributes s" {
  for p in [
    "a", "e", "ɛ", "i", "ɪ", "j", "o", "u", "y", "β", "ʋ", "ç", "χ", "d͡z", "tʰ", "aː",
  ] {
    let f = @lib.fold(p)
    assert_eq(@lib.fold(f), f)
  }
  let s = 1_073_741_824L
  for w0 in 0..<12 {
    for w1 in 0..<12 {
      for w2 in 0..<12 {
        for w3 in 0..<12 {
          let t = w0 + w1 + w2 + w3
          if t == 0 {
            continue
          }
          let q = @kernel.normalize4(
            w0.to_int64(),
            w1.to_int64(),
            w2.to_int64(),
            w3.to_int64(),
            s,
          )
          let mut z = 0L
          for x in q {
            assert_true(x >= 0L)
            z += x
          }
          assert_eq(z, s)
        }
      }
    }
  }
}

///|
test "ipa: deterministic; NFC and NFD spellings agree; phones stay in scheme inventory" {
  let nfc_nfd : Array[(String, String)] = [
    ("θέος", "θε\u{0301}ος"),
    ("οὐρανός", "οὐραν\u{03CC}\u{03C2}"),
    ("χάρις", "χα\u{0301}ρις"),
    ("λόγος", "λο\u{0301}γος"),
  ]
  for si, scheme in @lib.schemes {
    for g in greek_letters {
      let a = @lib.ipa(g, scheme)
      assert_eq(a, @lib.ipa(g, scheme))
      for p in @lib.tokenize(a) {
        assert_true(phone_allowed_for_scheme(si, p), msg=scheme + " " + g + " -> " + p)
      }
    }
    for d in diphthongs {
      let a = @lib.ipa(d, scheme)
      for p in @lib.tokenize(a) {
        assert_true(phone_allowed_for_scheme(si, p), msg=scheme + " " + d + " -> " + p)
      }
    }
    for pair in nfc_nfd {
      assert_eq(@lib.ipa(pair.0, scheme), @lib.ipa(pair.1, scheme))
    }
  }
}

///|
test "kernel g2p_step on every single-letter cluster: phones in inventory" {
  let buf = FixedArray::make(8, 0)
  for si in 0..<4 {
    for g in greek_letters {
      let c = g.get_char(0).unwrap().to_int()
      let bs = FixedArray::from_array([c])
      let z = FixedArray::from_array([0])
      let r = @kernel.g2p_step(si, bs, z, z, 0, buf)
      let cnt = r % 8
      for k in 0..<cnt {
        assert_true(@kernel.in_scheme_inv(si, buf[k]))
      }
    }
  }
}
