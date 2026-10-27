// Units tile the typed word. Phones match ipa() until an explicit diphthong change.

///|
fn tiled(w : @lib.G2pWord) -> String {
  let sb = StringBuilder()
  for u in w.units {
    sb.write_string(u.t)
  }
  sb.to_string()
}

///|
fn phones_of(w : @lib.G2pWord) -> String {
  w.phones.join(" ")
}

///|
fn assert_tiled(w : @lib.G2pWord) -> Unit raise {
  assert_true(w.units.length() > 0, msg=w.text)
  assert_eq(tiled(w), w.text, msg=w.text)
  assert_eq(w.units[0].from, 0, msg=w.text)
  let last = w.units[w.units.length() - 1]
  assert_eq(last.to, w.text.length(), msg=w.text)
  let mut prev = 0
  for u in w.units {
    assert_eq(u.from, prev, msg=w.text + " " + u.t)
    assert_true(u.to > u.from, msg=u.t)
    assert_true(u.t.length() > 0, msg=w.text)
    assert_true(u.ph.length() > 0, msg=u.t)
    assert_eq(w.text[u.from:u.to].to_owned(), u.t, msg=u.t)
    prev = u.to
  }
}

///|
test "units tile the lexicon sample and phones match ipa()" {
  // A previous test may have loaded a lexicon; this sample is already accented.
  ignore(@lib.load_lexicon([]))
  let mut n = 0
  for line in ipa_golden_tsv.split("\n") {
    let row = line.to_owned()
    if row == "" || row.has_prefix("form\t") {
      continue
    }
    let p = row.split("\t").map(fn(v) { v.to_owned() }).collect()
    let form = p[0]
    for si, scheme in ["modern", "koine", "attic", "erasmian"] {
      let ws = @lib.g2p_words(form, scheme)
      assert_eq(ws.length(), 1, msg=form)
      assert_tiled(ws[0])
      assert_eq(phones_of(ws[0]), p[si + 1], msg=form + " " + scheme)
      assert_eq(@lib.ipa(form, scheme), p[si + 1], msg=form)
    }
    n += 1
  }
  assert_true(n > 8000)
}

///|
test "units: diphthong, digraph, geminate, punctuation, unreadable" {
  let aut = @lib.g2p_words("αὐτός", "modern")[0]
  assert_tiled(aut)
  assert_eq(aut.units.map(fn(u) { u.k }), ["diph", "c", "v", "c"])
  assert_eq(aut.units[0].t, "αὐ")
  assert_eq(aut.units[0].ph, ["a", "f"])
  assert_eq(aut.units[0].ctx, "next-letter")
  assert_eq(aut.form_used, "typed")
  let eu = @lib.g2p_words("εὖ", "modern")[0]
  assert_eq(eu.units[0].k, "diph")
  assert_eq(eu.units[0].ctx, "word-end")
  assert_eq(eu.units[0].ph, ["e", "f"])
  let mp = @lib.g2p_words("μπα", "modern")[0]
  assert_tiled(mp)
  assert_eq(mp.units[0].k, "dig")
  assert_eq(mp.units[0].t, "μπ")
  assert_eq(mp.units[0].ph, ["b"])
  let gem = @lib.g2p_words("θάλασσα", "attic")[0]
  assert_tiled(gem)
  let mut saw = false
  for u in gem.units {
    if u.k == "gem" {
      saw = true
      assert_eq(u.t, "σσ")
      assert_eq(u.ph, ["sː"])
    }
  }
  assert_true(saw)
  let punct = @lib.g2p_words("(λόγος),", "koine")[0]
  assert_tiled(punct)
  assert_eq(phones_of(punct), @lib.ipa("(λόγος),", "koine"))
  let bad = @lib.g2p_words("αa", "modern")[0]
  assert_eq(bad.units.length(), 0)
  assert_eq(bad.phones.length(), 0)
  assert_eq(@lib.ipa("αa", "modern"), "")
  let phrase = @lib.g2p_words("καὶ εὖ", "attic")
  assert_eq(phrase.length(), 2)
  assert_tiled(phrase[0])
  assert_tiled(phrase[1])
  let sb = StringBuilder()
  for i, w in phrase {
    if i > 0 {
      sb.write_string(" | ")
    }
    sb.write_string(phones_of(w))
  }
  assert_eq(sb.to_string(), @lib.ipa("καὶ εὖ", "attic"))
}

///|
test "units JSON matches a small word and the alts flag is opt-in" {
  let bare = @lib.g2p_json("αι", "modern")
  assert_eq(
    bare,
    "{\"v\":1,\"scheme\":\"modern\",\"lib\":\"0.3.1\",\"words\":[{\"text\":\"αι\",\"form\":\"αι\",\"form_used\":\"typed\",\"phones\":[\"e\"],\"units\":[{\"t\":\"αι\",\"k\":\"diph\",\"ph\":[\"e\"],\"from\":0,\"to\":2,\"restored\":false}]}]}",
  )
  let flagged = @lib.g2p_json_flags("αι", "modern", "alts")
  assert_true(flagged.contains("\"alts\":[]"))
  assert_false(bare.contains("alts"))
}

///|
test "lexicon marks: restored only when a phone used an untyped mark" {
  // Front-coded blob, k = 0, NT flag. Forms: πᾶς, υἱός, λόγος.
  let blob : Array[Int32] = [
    0, 1, 46, 31, 5, 48, 0, 0, 1, 51, 39, 4, 45, 1, 48, 0, 0, 1, 41, 45, 1, 33, 45,
    48, 0,
  ]
  ignore(@lib.load_lexicon(blob))
  let bare_a = @lib.g2p_words("πας", "attic")[0]
  assert_eq(bare_a.form, "πᾶς")
  assert_eq(bare_a.form_used, "lexicon")
  assert_tiled(bare_a)
  assert_eq(bare_a.text, "πας")
  assert_eq(phones_of(bare_a), @lib.ipa("πας", "attic"))
  assert_eq(phones_of(bare_a), "p aː s")
  let mut restored_a = false
  for u in bare_a.units {
    if u.ph.length() == 1 && u.ph[0] == "aː" {
      restored_a = u.restored
    }
  }
  assert_true(restored_a)
  let typed_a = @lib.g2p_words("πᾶς", "attic")[0]
  assert_tiled(typed_a)
  for u in typed_a.units {
    assert_false(u.restored, msg=u.t)
  }
  let son = @lib.g2p_words("υιος", "erasmian")[0]
  assert_tiled(son)
  assert_eq(son.form, "υἱός")
  assert_eq(phones_of(son), "h w i o s")
  assert_eq(phones_of(son), @lib.ipa("υιος", "erasmian"))
  assert_eq(son.units[0].k, "diph")
  assert_eq(son.units[0].t, "υι")
  assert_true(son.units[0].restored)
  assert_true(son.units[0].asp)
  let typed_son = @lib.g2p_words("υἱός", "erasmian")[0]
  assert_false(typed_son.units[0].restored)
  assert_eq(typed_son.units[0].ph, ["h", "w", "i"])
  let logos = @lib.g2p_words("λογος", "modern")[0]
  assert_eq(logos.form, "λόγος")
  assert_eq(logos.form_used, "lexicon")
  assert_tiled(logos)
  for u in logos.units {
    assert_false(u.restored, msg="acute does not change Modern phones")
  }
  assert_eq(phones_of(logos), @lib.ipa("λόγος", "modern"))
  ignore(@lib.load_lexicon([]))
}
