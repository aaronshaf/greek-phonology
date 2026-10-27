// Snapshot of current ipa() output. Regenerate with tools/regen_golden.sh only
// when a pronunciation change is intentional. White-box so it can read the
// private snapshot string in ipa_golden_data.mbt.

///|
test "ipa golden snapshot matches current ipa()" {
  let mut n = 0
  for line in ipa_golden_tsv.split("\n") {
    let row = line.to_owned()
    if row == "" || row.has_prefix("form\t") {
      continue
    }
    let p = row.split("\t").map(fn(v) { v.to_owned() }).collect()
    if p.length() != 5 {
      fail(row)
    }
    assert_eq(@lib.ipa(p[0], "modern"), p[1], msg=p[0])
    assert_eq(@lib.ipa(p[0], "koine"), p[2], msg=p[0])
    assert_eq(@lib.ipa(p[0], "attic"), p[3], msg=p[0])
    assert_eq(@lib.ipa(p[0], "erasmian"), p[4], msg=p[0])
    n += 1
  }
  assert_true(n > 8000)
}

///|
test "ipa hand examples: diphthongs, subscripts, voicing, geminates" {
  inspect(@lib.ipa("υἱός", "modern"), content="i o s")
  inspect(@lib.ipa("υἱός", "koine"), content="y o s")
  inspect(@lib.ipa("υἱός", "attic"), content="h y i o s")
  inspect(@lib.ipa("υἱός", "erasmian"), content="h w i o s")
  inspect(@lib.ipa("αὐτός", "modern"), content="a f t o s")
  inspect(@lib.ipa("αὐτός", "koine"), content="a f t o s")
  inspect(@lib.ipa("αὐτός", "attic"), content="a u t o s")
  inspect(@lib.ipa("αὐτός", "erasmian"), content="a ʊ t o s")
  inspect(
    @lib.ipa("εὐαγγέλιον", "erasmian"),
    content="j u a ŋ g e l i o n",
  )
  inspect(@lib.ipa("θεός", "attic"), content="tʰ e o s")
  inspect(@lib.ipa("οὐρανός", "attic"), content="uː r a n o s")
  inspect(@lib.ipa("κόσμος", "modern"), content="k o z m o s")
  inspect(@lib.ipa("θάλασσα", "attic"), content="tʰ a l a sː a")
  inspect(@lib.ipa("ἄγγελος", "modern"), content="a ŋ ʝ e l o s")
}
