// Sourced distance rows. Each shipped id is accepted or rejected as specified.
// Policy rows are the ones whose tolerance is a design choice.

///|
fn at(
  t : String,
  h : String,
  sc : String,
  goal : String,
  sit : @lib.PhoneSituation,
) -> @lib.PhoneDistance {
  @lib.phone_distance_in(t, h, sc, goal, sit)
}

///|
fn row_pd(
  t : String,
  h : String,
  sc : String,
  goal : String,
) -> @lib.PhoneDistance {
  at(t, h, sc, goal, @lib.PhoneSituation::absent())
}

///|
fn sit_right(right : String) -> @lib.PhoneSituation {
  { left: "", right, right2: "", place: "", posterior: -1.0 }
}

///|
fn sit_left(left : String) -> @lib.PhoneSituation {
  { left, right: "", right2: "", place: "", posterior: -1.0 }
}

///|
fn sit_gate(p : Double) -> @lib.PhoneSituation {
  @lib.PhoneSituation::with_posterior(p)
}

///|
fn accepts(goal : String, tier : String) -> Bool {
  if goal == "strict" {
    tier == accurate
  } else {
    tier == accurate || tier == tolerated
  }
}

///|
test "E01 ʝ and j are one sound in Modern and Koine" {
  let note = "γ before ι/ε is a palatal buzz [ʝ], like a soft y."
  for sc in ["modern", "koine", "grc-modern-style", "grc-koine-reconstructed"] {
    for g in ["strict", "gracious", "lenient"] {
      let a = row_pd("ʝ", "j", sc, g)
      let b = row_pd("j", "ʝ", sc, g)
      assert_eq(a.tier, accurate)
      assert_eq(b.tier, accurate)
      assert_true(near(a.d, 0.02))
      assert_true(near(b.d, 0.02))
      assert_eq(a.sim, 1.0)
      assert_eq(a.note, note)
      assert_eq(a.note, b.note)
      assert_eq(a.advice, "")
    }
  }
  assert_eq(row_pd("ʝ", "j", "attic", "gracious").tier != accurate, true)
  assert_eq(row_pd("ʝ", "j", "", "strict").note, row_pd("ʝ", "j", "", "lenient").note)
}

///|
test "E02 nasal is optional medially and E06 a geminate is one phone" {
  let nasal = @lib.sequence_distance(["a", "n", "d", "o"], ["a", "d", "o"], "modern", "strict")
  assert_eq(nasal.tier, accurate)
  assert_true(near(nasal.d, 0.02))
  assert_true(nasal.note.contains("light"))
  let ins = @lib.sequence_distance(["a", "d", "o"], ["a", "n", "d", "o"], "modern", "gracious")
  assert_eq(ins.tier, accurate)
  assert_true(near(ins.d, 0.02))
  let mp = @lib.sequence_distance(["m", "b"], ["b"], "modern", "strict")
  assert_eq(mp.tier, accurate)
  let gk = @lib.sequence_distance(["ŋ", "g"], ["g"], "modern", "strict")
  assert_eq(gk.tier, accurate)
  assert_eq(@lib.sequence_distance(["n", "d"], ["d"], "koine", "gracious").tier, nomatch)
  assert_eq(@lib.sequence_distance(["n", "d"], ["d"], "attic", "gracious").tier, nomatch)
  for sc in ["modern", "koine"] {
    let gem = @lib.sequence_distance(["a", "l", "l", "a"], ["a", "l", "a"], sc, "strict")
    assert_eq(gem.tier, accurate, msg=sc)
    assert_true(near(gem.d, 0.02))
    let ss = @lib.sequence_distance(["s", "s"], ["s"], sc, "gracious")
    assert_eq(ss.tier, accurate)
  }
  assert_eq(@lib.sequence_distance(["l", "l"], ["l"], "attic", "gracious").tier, nomatch)
  assert_eq(@lib.sequence_distance(["a", "a"], ["a"], "modern", "gracious").tier, nomatch)
}

///|
test "E03 Koine postnasal voicing is accurate and the default stays voiceless" {
  assert_true(@lib.ipa("ἀντί", "koine").contains("n t"))
  let voiced = at("t", "d", "koine", "strict", sit_left("n"))
  let back = at("d", "t", "koine", "gracious", sit_left("n"))
  assert_eq(voiced.tier, accurate)
  assert_eq(back.tier, accurate)
  assert_true(near(voiced.d, 0.02))
  assert_true(voiced.note.contains("Horrocks"))
  assert_eq(at("p", "b", "koine", "strict", sit_left("m")).tier, accurate)
  assert_eq(at("k", "g", "koine", "strict", sit_left("ŋ")).tier, accurate)
  assert_eq(at("b", "p", "koine", "strict", sit_left("m")).tier, accurate)
  let bare = row_pd("t", "d", "koine", "gracious")
  assert_eq(bare.tier, nomatch)
  assert_true(near(bare.d, 0.5))
  let seq = @lib.sequence_distance(["n", "t"], ["n", "d"], "koine", "strict")
  assert_eq(seq.tier, accurate)
  assert_true(near(seq.d, 0.02))
}

///|
test "E07 Attic consonant geminate is tolerated and vowel length stays accurate" {
  let s = row_pd("sː", "s", "attic", "gracious")
  assert_eq(s.tier, tolerated)
  assert_true(near(s.d, 0.25))
  assert_true(s.note.contains("long consonant"))
  assert_eq(row_pd("sː", "s", "attic", "strict").tier, nomatch)
  assert_eq(row_pd("s", "sː", "attic", "gracious").tier, tolerated)
  assert_eq(row_pd("ɔː", "ɔ", "attic", "strict").tier, accurate)
  assert_eq(row_pd("uː", "u", "attic", "strict").tier, accurate)
  assert_true(row_pd("sː", "s", "", "").d <= 0.02)
  let table = @lib.dist_table_sourced_json("attic")
  assert_true(table.contains("\"id\":\"E07\""))
  assert_true(table.contains("\"policy\":true"))
}

///|
test "E09 velar nasal only, E10 tap, E11 notation twins" {
  let velar = at("n", "ŋ", "modern", "strict", sit_right("k"))
  assert_eq(velar.tier, accurate)
  assert_true(near(velar.d, 0.02))
  assert_true(velar.note.contains("[ŋ]"))
  assert_eq(at("ŋ", "n", "koine", "strict", sit_right("ɣ")).tier, accurate)
  assert_eq(at("n", "ŋ", "attic", "strict", sit_right("x")).tier, accurate)
  assert_eq(row_pd("n", "ŋ", "modern", "lenient").tier, nomatch)
  assert_eq(at("n", "ŋ", "modern", "gracious", sit_right("p")).tier, nomatch)
  assert_eq(row_pd("n", "m", "modern", "gracious").tier, nomatch)
  for sc in ["modern", "koine", "attic", "erasmian"] {
    let tap = row_pd("r", "ɾ", sc, "strict")
    assert_eq(tap.tier, accurate, msg=sc)
    assert_true(near(tap.d, 0.02))
    assert_eq(row_pd("ɾ", "r", sc, "gracious").d, tap.d)
  }
  assert_eq(row_pd("e", "ɛ", "koine", "strict").tier, accurate)
  assert_eq(row_pd("ɛ", "e", "modern", "strict").tier, accurate)
  assert_eq(row_pd("i", "ɪ", "attic", "strict").tier, accurate)
  assert_eq(row_pd("u", "ʊ", "erasmian", "strict").tier, accurate)
  assert_true(near(row_pd("i", "ɪ", "erasmian", "gracious").d, 0.25))
  assert_eq(row_pd("ɪ", "i", "erasmian", "strict").tier, nomatch)
  assert_eq(row_pd("ɪ", "i", "erasmian", "gracious").tier, tolerated)
  assert_true(near(row_pd("o", "ɔ", "erasmian", "gracious").d, 0.25))
  assert_eq(row_pd("o", "ɔ", "koine", "strict").d, 0.0)
  assert_eq(row_pd("o", "ɔ", "modern", "strict").d, 0.0)
  let policy = @lib.dist_table_sourced_json("erasmian")
  assert_true(policy.contains("\"id\":\"E11\""))
  assert_true(policy.contains("\"policy\":true"))
}

///|
test "E12 chi, E13 palatal allophones the 41-phone set cannot emit" {
  let front = at("x", "ç", "modern", "strict", sit_right("i"))
  assert_eq(front.tier, accurate)
  assert_true(near(front.d, 0.02))
  assert_true(front.note.contains("[ç]"))
  assert_eq(at("ç", "x", "koine", "strict", sit_right("e")).tier, accurate)
  let outside = row_pd("x", "ç", "modern", "gracious")
  assert_eq(outside.tier, tolerated)
  assert_true(near(outside.d, 0.25))
  assert_eq(row_pd("x", "ç", "modern", "strict").tier, nomatch)
  assert_eq(row_pd("ç", "x", "koine", "strict").tier, nomatch)
  let pal : @lib.PhoneSituation = { left: "", right: "i", right2: "a", place: "", posterior: -1.0 }
  assert_eq(at("k", "c", "modern", "strict", pal).tier, accurate)
  assert_eq(at("c", "k", "modern", "strict", sit_right("e")).tier, accurate)
  assert_eq(at("n", "ɲ", "modern", "strict", sit_right("i")).tier, accurate)
  assert_eq(at("ʎ", "l", "modern", "strict", sit_right("ɛ")).tier, accurate)
  assert_eq(at("ɣ", "ʝ", "modern", "strict", sit_right("i")).tier, accurate)
  assert_eq(at("ɣ", "ɟ", "modern", "strict", pal).tier, accurate)
  assert_true(near(at("k", "c", "modern", "gracious", sit_right("i")).d, 0.02))
  assert_eq(row_pd("k", "c", "modern", "lenient").tier, nomatch)
  assert_eq(row_pd("n", "ɲ", "modern", "gracious").tier, nomatch)
  assert_eq(at("k", "c", "koine", "gracious", sit_right("i")).tier != accurate, true)
  assert_true(@lib.phone_known("c"))
  assert_true(@lib.phone_known("ɲ"))
  assert_true(@lib.phone_known("ʎ"))
}

///|
test "E14 absorbed iota and E15 glide before a vowel" {
  let drop = @lib.sequence_distance(["ʝ", "i", "a"], ["ʝ", "a"], "modern", "strict")
  assert_eq(drop.tier, accurate)
  assert_true(near(drop.d, 0.02))
  assert_true(drop.note.contains("[ja]"))
  let extra = @lib.sequence_distance(["j", "a"], ["j", "i", "a"], "modern", "gracious")
  assert_eq(extra.tier, accurate)
  assert_eq(@lib.sequence_distance(["ʝ", "i", "a"], ["ʝ", "a"], "koine", "gracious").tier, nomatch)
  let glide = at("i", "j", "modern", "strict", sit_right("a"))
  assert_eq(glide.tier, accurate)
  assert_true(near(glide.d, 0.02))
  assert_true(glide.note.contains("glide"))
  assert_eq(at("j", "i", "modern", "strict", sit_right("o")).tier, accurate)
  assert_eq(row_pd("i", "j", "modern", "gracious").tier, nomatch)
  assert_eq(row_pd("i", "j", "koine", "gracious").tier, tolerated)
}

///|
test "E17 diphthong voicing, E18 beta, E19 monophthong and offglide" {
  let follows = at(
    "v",
    "f",
    "modern",
    "strict",
    { left: "a", right: "t", right2: "", place: "", posterior: -1.0 },
  )
  assert_eq(follows.tier, accurate)
  assert_true(near(follows.d, 0.02))
  let wrong = at(
    "f",
    "v",
    "modern",
    "gracious",
    { left: "a", right: "t", right2: "", place: "", posterior: -1.0 },
  )
  assert_eq(wrong.tier, tolerated)
  assert_true(near(wrong.d, 0.25))
  assert_eq(row_pd("f", "v", "modern", "lenient").tier, nomatch)
  assert_eq(
    at(
      "v",
      "f",
      "koine",
      "gracious",
      { left: "a", right: "", right2: "", place: "final", posterior: -1.0 },
    ).tier,
    tolerated,
  )
  assert_eq(row_pd("v", "f", "modern", "gracious").tier, nomatch)
  assert_eq(row_pd("β", "v", "koine", "strict").d, 0.0)
  assert_eq(row_pd("β", "v", "koine", "strict").tier, accurate)
  let off = @lib.sequence_distance(["ɛ"], ["a", "i"], "koine", "gracious")
  assert_eq(off.tier, tolerated)
  assert_true(near(off.d, 0.25))
  assert_eq(@lib.sequence_distance(["ɛ"], ["a", "i"], "koine", "strict").tier, nomatch)
  assert_eq(@lib.sequence_distance(["i"], ["e", "i"], "koine", "gracious").tier, tolerated)
  assert_eq(@lib.sequence_distance(["y"], ["o", "i"], "koine", "gracious").tier, tolerated)
  assert_eq(row_pd("ɛ", "e", "koine", "strict").tier, accurate)
  let attic = @lib.sequence_distance(["a", "i"], ["ɛ"], "attic", "gracious")
  assert_eq(attic.tier, tolerated)
  assert_true(near(attic.d, 0.25))
  assert_eq(@lib.sequence_distance(["a", "i"], ["e"], "attic", "strict").tier, nomatch)
  assert_eq(@lib.sequence_distance(["o", "i"], ["y"], "attic", "gracious").tier, tolerated)
  let opts = @lib.G2pOpts::with_alts().with_sourced(true)
  let ai = @lib.g2p_words_opts("αι", "koine", opts)[0]
  let mut saw = false
  for alt in ai.units[0].alts {
    if alt.heard.length() == 2 && alt.heard[0] == "a" && alt.heard[1] == "i" {
      saw = true
      assert_eq(alt.tier, tolerated)
      assert_true(near(alt.d, 0.25))
      assert_true(alt.note.contains("as in"))
    }
  }
  assert_true(saw)
  let attic_ai = @lib.g2p_words_opts("αι", "attic", opts)[0]
  let mut saw_e = false
  for alt in attic_ai.units[0].alts {
    if alt.heard.length() == 1 && alt.heard[0] == "e" {
      saw_e = true
      assert_eq(alt.tier, tolerated)
    }
  }
  assert_true(saw_e)
  let modern = @lib.g2p_words_opts("αι", "modern", opts)[0]
  assert_eq(modern.units[0].alts.length(), 0)
}

///|
test "E21 E22 E23 aspiration, and the gate on E24 and E25" {
  assert_eq(row_pd("kʰ", "k", "koine", "gracious").tier, tolerated)
  assert_eq(row_pd("kʰ", "k", "koine", "strict").tier, nomatch)
  assert_true(near(row_pd("t", "tʰ", "koine", "gracious").d, 0.25))
  assert_true(row_pd("kʰ", "k", "koine", "strict").note.contains("puff of breath"))
  assert_eq(row_pd("tʰ", "t", "attic", "gracious").tier, tolerated)
  assert_eq(row_pd("pʰ", "p", "attic", "strict").tier, nomatch)
  assert_true(row_pd("tʰ", "t", "attic", "gracious").note.contains("puff"))
  assert_eq(row_pd("θ", "tʰ", "koine", "strict").tier, accurate)
  assert_eq(row_pd("x", "kʰ", "koine", "strict").tier, accurate)
  assert_eq(row_pd("f", "pʰ", "koine", "gracious").tier, accurate)
  assert_eq(row_pd("ɸ", "f", "koine", "strict").tier, accurate)
  assert_eq(row_pd("pʰ", "ɸ", "koine", "strict").tier, accurate)
  assert_true(near(row_pd("θ", "tʰ", "koine", "").d, 0.02))
  assert_true(row_pd("θ", "tʰ", "koine", "strict").note.contains("aspirated stops in early Koine"))
  let shut = row_pd("k", "g", "koine", "gracious")
  assert_eq(shut.tier, nomatch)
  assert_true(near(shut.d, 0.5))
  let open = at("k", "g", "koine", "gracious", sit_gate(0.15))
  assert_eq(open.tier, tolerated)
  assert_true(near(open.d, 0.25))
  assert_eq(at("g", "k", "koine", "strict", sit_gate(0.9)).tier, nomatch)
  assert_true(near(at("t", "d", "koine", "gracious", sit_gate(0.2)).d, 0.25))
  assert_eq(at("t", "d", "koine", "gracious", sit_gate(0.14)).tier, nomatch)
  assert_eq(at("d", "t", "koine", "lenient", sit_gate(0.15)).tier, tolerated)
  let zs = at("z", "s", "koine", "gracious", sit_gate(0.4))
  assert_eq(zs.tier, tolerated)
  assert_true(zs.note.contains("[z]"))
  assert_eq(row_pd("z", "s", "koine", "gracious").tier, nomatch)
  assert_eq(row_pd("z", "s", "koine", "lenient").tier, nomatch)
  assert_eq(at("z", "s", "modern", "gracious", sit_gate(0.9)).tier, nomatch)
  assert_true(row_pd("k", "g", "attic", "gracious").d > 0.25)
  let credit = @lib.phone_credit_in(
    "k",
    ["g", "k"],
    [0.8, 0.16],
    "koine",
    "gracious",
    @lib.PhoneSituation::absent(),
  )
  assert_true(credit.combined > 0.0)
  let no_target = @lib.phone_credit_in(
    "k",
    ["g"],
    [0.9],
    "koine",
    "gracious",
    @lib.PhoneSituation::absent(),
  )
  assert_eq(no_target.combined, 0.0)
  let table = @lib.dist_table_sourced_json("koine")
  assert_true(table.contains("\"id\":\"E24\""))
  assert_true(table.contains("\"id\":\"E25\""))
  assert_true(table.contains("\"policy\":true"))
}

///|
test "E27 Modern voicing is not a match, E28 gamma, E34 contrasts" {
  for pair in [("t", "d"), ("k", "g"), ("p", "b"), ("z", "s"), ("f", "v"), ("ð", "θ")] {
    let (a, b) = pair
    assert_eq(row_pd(a, b, "modern", "lenient").tier, nomatch, msg=a)
    assert_true(near(row_pd(a, b, "modern", "gracious").d, 1.0))
    assert_eq(row_pd(b, a, "modern", "strict").tier, nomatch)
  }
  assert_eq(row_pd("ð", "d", "modern", "gracious").tier, tolerated)
  assert_eq(row_pd("ɣ", "x", "modern", "gracious").tier, tolerated)
  let gamma = row_pd("ɣ", "g", "modern", "gracious")
  assert_eq(gamma.tier, tolerated)
  assert_true(near(gamma.d, 0.25))
  assert_true(gamma.note.contains("air keep flowing"))
  assert_eq(row_pd("ɣ", "g", "modern", "strict").tier, nomatch)
  assert_eq(row_pd("g", "ɣ", "koine", "gracious").tier, tolerated)
  for sc in ["modern", "koine", "attic", "erasmian"] {
    assert_eq(row_pd("k", "t", sc, "lenient").tier, nomatch, msg=sc)
    assert_eq(row_pd("r", "l", sc, "lenient").tier, nomatch)
    assert_eq(row_pd("l", "r", sc, "gracious").tier, nomatch)
    assert_eq(row_pd("a", "e", sc, "lenient").tier, nomatch)
    assert_eq(row_pd("a", "o", sc, "lenient").tier, nomatch)
    assert_eq(row_pd("u", "i", sc, "lenient").tier, nomatch)
    assert_eq(row_pd("s", "θ", sc, "strict").tier, nomatch)
    assert_eq(row_pd("n", "l", sc, "gracious").tier, nomatch)
    assert_true(near(row_pd("k", "t", sc, "").d, 1.0))
  }
  assert_true(row_pd("k", "t", "", "").d < 1.0)
  assert_eq(row_pd("e", "i", "modern", "gracious").tier, nomatch)
}

///|
test "strict acceptance implies gracious acceptance on the sourced rows" {
  let rows = [
    ("ʝ", "j", "modern"),
    ("r", "ɾ", "attic"),
    ("e", "ɛ", "koine"),
    ("kʰ", "k", "koine"),
    ("tʰ", "t", "attic"),
    ("ɣ", "g", "modern"),
    ("s", "z", "modern"),
    ("k", "t", "erasmian"),
    ("x", "ç", "modern"),
    ("i", "ɪ", "erasmian"),
  ]
  for row in rows {
    let (t, h, sc) = row
    let s = row_pd(t, h, sc, "strict")
    let g = row_pd(t, h, sc, "gracious")
    let l = row_pd(t, h, sc, "lenient")
    if accepts("strict", s.tier) {
      assert_true(accepts("gracious", g.tier), msg=t)
    }
    if accepts("gracious", g.tier) {
      assert_true(accepts("lenient", l.tier), msg=t)
    }
    assert_eq(s.d, g.d)
    assert_eq(g.d, l.d)
    assert_eq(s.note, g.note)
    assert_true(near(row_pd(t, h, sc, "strict").d, row_pd(h, t, sc, "lenient").d))
    if s.tier == nomatch {
      assert_eq(s.sim, 0.0)
    }
  }
}

///|
fn modern_prm() -> @lib.AlignParams {
  prm().with_scheme("modern").with_sourced(true)
}

///|
test "alignment scores optional nasal, geminate collapse, and ʝ as j" {
  let nasal = take_of(
    lane_custom([["a", "n", "d", "o"]], []),
    ["a", "d", "o", "_"],
    modern_prm(),
  )
  assert_true(nasal.cost <= 0.021, msg=nasal.cost.to_string())
  assert_true(nasal.words[0].score >= 80, msg=nasal.words[0].score.to_string())
  let inserted = take_of(
    lane_custom([["a", "d", "o"]], []),
    ["a", "n", "d", "o", "_"],
    modern_prm(),
  )
  assert_true(inserted.cost <= 0.021, msg=inserted.cost.to_string())
  assert_true(inserted.words[0].score >= 80, msg=inserted.words[0].score.to_string())
  let initial = take_of(
    lane_custom([["d", "o"]], []),
    ["n", "d", "o", "_"],
    modern_prm(),
  )
  assert_true(initial.cost > 0.2, msg=initial.cost.to_string())
  let gem = take_of(
    lane_custom([["a", "l", "l", "a"]], []),
    ["a", "l", "a", "_"],
    modern_prm(),
  )
  assert_true(gem.cost <= 0.021, msg=gem.cost.to_string())
  assert_true(gem.words[0].score >= 80, msg=gem.words[0].score.to_string())
  let koine_gem = take_of(
    lane_custom([["s", "s", "a"]], []),
    ["s", "a", "_"],
    prm().with_scheme("koine").with_sourced(true),
  )
  assert_true(koine_gem.cost <= 0.021, msg=koine_gem.cost.to_string())
  assert_true(koine_gem.words[0].score >= 80)
  let glide = take_of(
    lane_custom([["ʝ", "e"]], []),
    ["j", "e", "_"],
    modern_prm(),
  )
  assert_true(glide.cost <= 0.001, msg=glide.cost.to_string())
  assert_true(glide.words[0].score >= 80, msg=glide.words[0].score.to_string())
  let iota = take_of(
    lane_custom([["ʝ", "i", "a"]], []),
    ["ʝ", "a", "_"],
    modern_prm(),
  )
  assert_true(iota.cost <= 0.021, msg=iota.cost.to_string())
  assert_true(iota.words[0].score >= 80, msg=iota.words[0].score.to_string())
  let palatal = take_of(
    lane_custom([["c", "i", "a"]], []),
    ["k", "i", "a", "_"],
    modern_prm(),
  )
  assert_true(palatal.cost <= 0.001, msg=palatal.cost.to_string())
  assert_true(palatal.words[0].score >= 80, msg=palatal.words[0].score.to_string())
  let off = take_of(
    lane_custom([["a", "n", "d", "o"]], []),
    ["a", "d", "o", "_"],
    prm(),
  )
  assert_true(off.cost > 0.2)
}
