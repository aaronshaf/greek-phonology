// Property tests for invariants that are not (yet) machine-proved; see README "Verification".

///|
fn lcg(seed : Ref[Int]) -> Int {
  seed.val = (seed.val * 1103515245 + 12345) & 0x7FFFFFFF
  seed.val
}

///|
let letters : Array[String] = [
  "α", "ε", "η", "ι", "ο", "υ", "ω", "ά", "έ", "ή", "ί", "ό", "ύ", "ώ", "ᾶ", "ῆ", "ῶ", "ᾳ", "ῃ", "ῳ",
  "ϊ", "ϋ", "ἁ", "ἐ", "ὁ", "αι", "ει", "οι", "ου", "αυ", "ευ", "υι", "β", "γ", "δ", "ζ", "θ", "κ",
  "λ", "μ", "ν", "ξ", "π", "ρ", "σ", "τ", "φ", "χ", "ψ", "στ", "πτ", "χθ", "στρ", "γγ", "μν",
]

///|
fn random_word(seed : Ref[Int]) -> String {
  let n = 1 + lcg(seed) % 7
  let sb = StringBuilder::new()
  for _ in 0..<n {
    sb.write_string(letters[lcg(seed) % letters.length()])
  }
  sb.to_string()
}

///|
fn vowel_unit(u : String) -> Bool {
  for c in u {
    return c == 'α' || c == 'ε' || c == 'η' || c == 'ι' || c == 'ο' || c == 'υ' || c == 'ω'
  }
  false
}

///|
test "softmax: probabilities are non-negative and sum to 1" {
  let seed = Ref(42)
  for _ in 0..<2000 {
    let ll = Array::makei(5, fn(_) { (lcg(seed) % 20000).to_double() / 100.0 - 100.0 })
    let t = 0.1 + (lcg(seed) % 3000).to_double() / 100.0
    let p = @lib.softmax(ll, t)
    let mut z = 0.0
    for x in p {
      assert_true(x >= 0.0)
      z += x
    }
    assert_true((z - 1.0).abs() < 1.0e-12)
  }
}

///|
test "detect: output probabilities are a distribution (aligned and free modes)" {
  let seed = Ref(7)
  for _ in 0..<300 {
    let w = random_word(seed) + " " + random_word(seed)
    let s = @lib.schemes[lcg(seed) % 5]
    for d in [@lib.detect(@lib.ipa(w, s), greek_text=w), @lib.detect(@lib.ipa(w, s))] {
      let mut z = 0.0
      for x in d.probs {
        assert_true(x >= 0.0)
        z += x
      }
      assert_true((z - 1.0).abs() < 1.0e-9)
    }
  }
}

///|
test "syllabify: concatenation gives back the word's units; one nucleus per syllable" {
  let seed = Ref(1)
  for _ in 0..<5000 {
    let w = random_word(seed)
    let us = @lib.units(w).map(fn(u) { u.u })
    let sy = @lib.syllabify(w)
    let flat : Array[String] = []
    for s in sy {
      for u in s {
        flat.push(u)
      }
    }
    assert_eq(flat, us)
    let has_vowel = us.iter().any(vowel_unit)
    if has_vowel {
      for s in sy {
        let n = s.filter(vowel_unit).length()
        assert_eq(n, 1)
      }
    }
  }
}

///|
test "recessive accent always obeys the law of limitation" {
  let seed = Ref(3)
  for _ in 0..<5000 {
    let w = random_word(seed)
    match @lib.recessive_accent(w) {
      Some((pos, kind)) => {
        let n = @lib.syllabify(w).length()
        assert_true(pos >= 1 && pos <= n && pos <= 3)
        if kind == "circumflex" {
          assert_true(pos <= 2)
        }
      }
      None => ()
    }
  }
}

///|
test "examples" {
  assert_eq(@lib.syllabify("ἀκηκόαμεν"), [["α"], ["κ", "η"], ["κ", "ο"], ["α"], ["μ", "ε", "ν"]])
  assert_eq(@lib.syllabify("Βηθσαϊδά"), [["β", "η", "θ"], ["σ", "α"], ["ι"], ["δ", "α"]])
  assert_eq(@lib.syllabify("στραφείς")[0], ["σ", "τ", "ρ", "α"])
  assert_eq(@lib.syllabify("γωνίᾳ"), [["γ", "ω"], ["ν", "ι"], ["α"]])
  assert_eq(@lib.accent("ἐχθροῦ"), Some((1, "circumflex")))
  assert_eq(@lib.accent_ok("ἀκηκόαμεν"), Some(true))
  assert_eq(@lib.accent_ok("λόγου") , Some(true))
  assert_eq(@lib.accent_ok("ἄνθρωπου"), Some(false))
  assert_eq(@lib.ipa("θεός", "attic"), "tʰ e o s")
  assert_eq(@lib.ipa("θεός", "modern"), "θ e o s")
  assert_eq(@lib.ipa("οἱ", "byzantine"), "y")
  assert_eq(@lib.ipa("αὐτός", "modern"), "a f t o s")
  let t = "Ἐν ἀρχῇ ἦν ὁ λόγος, καὶ ὁ λόγος ἦν πρὸς τὸν θεόν, οἱ υἱοὶ τῆς γῆς εὐαγγέλιον ἔχουσιν, δι αὐτοῦ πάντα ἐγένετο."
  for i, s in @lib.schemes {
    let d = @lib.detect(@lib.ipa(t, s), greek_text=t)
    let mut best = 0
    for j in 0..<5 {
      if d.probs[j] > d.probs[best] {
        best = j
      }
    }
    assert_eq(best, i)
  }
}

///|
fn ncount(s : String) -> Int {
  let mut n = 0
  for _ in s {
    n += 1
  }
  n
}

///|
test "accentuate_verb: result always obeys the law of limitation" {
  let seed = Ref(11)
  for _ in 0..<3000 {
    let w = @lib.remove_circumflexes(@lib.remove_acutes(random_word(seed)))
    let a = @lib.accentuate_verb(w)
    match @lib.accent_ok(a) {
      Some(ok) => assert_true(ok, msg=a)
      None => () // no vowel to accent
    }
  }
}

///|
test "amalgamate never lengthens; remove_* are idempotent; without_accents leaves no marks" {
  let seed = Ref(5)
  for _ in 0..<3000 {
    let w = random_word(seed)
    assert_true(ncount(@lib.amalgamate(w)) <= ncount(w))
    let r = @lib.remove_acutes(w)
    assert_eq(@lib.remove_acutes(r), r)
    assert_false(@lib.contains_circumflex(@lib.remove_circumflexes(w)))
    for c in @lib.without_accents(w) {
      assert_true(c.to_int() < 0x300 || c.to_int() > 0x36F)
    }
  }
}

///|
test "kl examples" {
  assert_eq(@lib.accentuate_verb("λυομεν"), "λύομεν")
  assert_eq(@lib.accentuate_verb("δουλος"), "δοῦλος")
  assert_eq(@lib.amalgamate("γραφσω"), "γραψω")
  assert_eq(@lib.conjugate("λυ", "future-active-indicative")[0], "λύσω")
}

///|
test "accentuate_phrase: at most two accents per word, a second accent only before an enclitic" {
  let seed = Ref(9)
  let words = [
    "ἄνθρωπος", "δοῦλος", "λόγος", "θεός", "τιμῶν", "ἐν", "εἰ", "οὐ", "καί", "ἀκούσαντες", "σῶμα",
    "τις", "τινές", "μου", "σου", "ἐστί", "ποτέ", "γε", "τε", "εἰσί", "με", ",", ".",
  ]
  for _ in 0..<2000 {
    let k = 2 + lcg(seed) % 6
    let ws : Array[String] = []
    for _ in 0..<k {
      ws.push(words[lcg(seed) % words.length()])
    }
    let out = @lib.accentuate_phrase(ws.join(" ")).split(" ").map(fn(v) { v.to_string() }).collect()
    for i, w in out {
      let c = @lib.count_accents(w)
      assert_true(c <= 2, msg=ws.join(" ") + " -> " + w)
      if c == 2 {
        assert_true(i + 1 < ws.length() && @lib.is_enclitic(ws[i + 1]), msg=ws.join(" ") + " -> " + w)
      }
    }
  }
}

///|
test "g2p: deterministic, total, and each scheme only uses phones it can produce" {
  // inventory per scheme = phones seen over a large random sample with a different seed
  let inv : Array[Map[String, Bool]] = [{}, {}, {}, {}, {}]
  let s1 = Ref(101)
  for _ in 0..<4000 {
    let w = random_word(s1)
    for si, s in @lib.schemes {
      for p in @lib.tokenize(@lib.ipa(w, s)) {
        inv[si][p] = true
      }
    }
  }
  let s2 = Ref(202)
  for _ in 0..<2000 {
    let w = random_word(s2)
    for si, s in @lib.schemes {
      let a = @lib.ipa(w, s)
      assert_eq(a, @lib.ipa(w, s))
      for p in @lib.tokenize(a) {
        if !inv[si].contains(p) {
          fail("scheme " + s + " produced unexpected phone " + p + " for " + w)
        }
      }
    }
  }
  // Byzantine keeps y for upsilon; Modern never produces y
  assert_false(inv[@lib.schemes.search("modern").unwrap()].contains("y"))
}

///|
test "detect: evidence hits never exceed totals" {
  let seed = Ref(9)
  for _ in 0..<300 {
    let w = random_word(seed) + " " + random_word(seed)
    let s = @lib.schemes[lcg(seed) % 5]
    let d = @lib.detect(@lib.ipa(w, s), greek_text=w)
    for i, hs in d.evidence_hits {
      assert_eq(hs.length(), d.evidence_total[i].length())
      for j, h in hs {
        assert_true(0 <= h && h <= d.evidence_total[i][j])
      }
    }
  }
}

///|
test "contract never lengthens; without_accents keeps base letters" {
  let seed = Ref(11)
  for _ in 0..<3000 {
    let w = random_word(seed)
    // "[ει]"/"[ου]" brackets are TS-compatible spurious-diphthong markers, not letters
    let c = @lib.contract(w).replace_all(old="[", new="").replace_all(old="]", new="")
    if ncount(c) > ncount(w) {
      fail("contract lengthened: " + w + " -> " + c)
    }
    assert_eq(@lib.without_accents(@lib.without_accents(w)), @lib.without_accents(w))
    assert_eq(ncount(@lib.without_accents(@lib.remove_acutes(w))), ncount(@lib.without_accents(w)))
  }
}
