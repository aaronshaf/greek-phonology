// English respelling of one reading. ipa() does not call this.
//
// Syllables come from syllabify and are joined with hyphens. The capital
// syllable is the one accent() reports, which is the accent word() returns.
// Acute, grave, and circumflex all count. A word with no written accent stays
// lowercase. Phones are the g2p units for that scheme, the same phones ipa()
// prints. The ctx flag stays off, so a phrase-final αυ/ευ/ηυ matches the
// isolated word.
//
// Each phone is spelled from phone_label().say, tightened into a spelling:
//   ah→a, eh→e, ih→i, oh→o, ü→ue
//   ay, ee, aw, oo, th, gh, ch, ng, and the one-letter says stay
//   p/t/k + puff → ph/th/kh, so θ, δ, and aspirated τ all read "th"
//   rolled r and tapped r → r
//   ʊ is also said "oo"; it is spelled u so book-oo stays distinct from food-oo
// Length is not written. say already ignores it.
// Inside one syllable, [ɪ] ("i") is dropped after a spelling that already ends
// in y, so [eɪ] is "ay" and not "ayi". [u] ("oo") and [i] ("ee") after a vowel
// letter are written "u" and "i", so αυ and αι read "au" and "ai". A geminate
// phone that sits on a syllable break is written on both sides, so attic
// θάλασσα is THA-las-sa. Every written accent is capitalized, so a host word
// before an enclitic (ἄνθρωπός) has two capital syllables and an unaccented
// enclitic or proclitic has none.
//
// Spaces and punctuation are copied, including comma, period, `;`, `·`, and
// the Greek question mark. A character this library cannot read is copied.
// Nothing here throws. An unknown scheme returns "".

///|
fn spell_phone(p : String) -> String {
  if p == "" || p == "|" {
    return ""
  }
  match phone_label(p).say {
    "ah" => "a"
    "ay" => "ay"
    "eh" => "e"
    "ee" => "ee"
    "ih" => "i"
    "oh" => "o"
    "aw" => "aw"
    "oo" => if phone_has(p, 'ʊ') { "u" } else { "oo" }
    "ü" => "ue"
    "p + puff" => "ph"
    "t + puff" => "th"
    "k + puff" => "kh"
    "rolled r" => "r"
    "tapped r" => "r"
    say => if ascii_letters(say) { say } else { "" }
  }
}

///|
fn phone_has(p : String, c : Char) -> Bool {
  for ch in p {
    if ch == c {
      return true
    }
  }
  false
}

///|
fn ascii_letters(s : String) -> Bool {
  for c in s {
    if !(c >= 'a' && c <= 'z') {
      return false
    }
  }
  true
}

///|
fn ends_vowel_letter(s : String) -> Bool {
  let mut last = '\u{0}'
  let mut any = false
  for c in s {
    last = c
    any = true
  }
  any &&
  (last == 'a' || last == 'e' || last == 'i' || last == 'o' || last == 'u')
}

///|
fn cat_spell(cur : String, sp : String) -> String {
  if sp == "" {
    cur
  } else if sp == "i" && cur.has_suffix("y") {
    cur
  } else if sp == "oo" && ends_vowel_letter(cur) {
    cur + "u"
  } else if sp == "ee" && ends_vowel_letter(cur) {
    cur + "i"
  } else {
    cur + sp
  }
}

///|
fn up_ascii(s : String) -> String {
  let sb = StringBuilder()
  for c in s {
    if c >= 'a' && c <= 'z' {
      sb.write_char(Int32::unsafe_to_char(c.to_int() - 32))
    } else {
      sb.write_char(c)
    }
  }
  sb.to_string()
}

///|
fn folded_bases(u : String) -> String {
  let sb = StringBuilder()
  for c in u {
    let b = fold_lower(c)
    if is_gv(b) || is_gc(b) {
      sb.write_char(b)
    }
  }
  sb.to_string()
}

///|
fn is_greek_letter(c : Char) -> Bool {
  let o = c.to_int()
  if non_alpha.contains(o) {
    return false
  }
  (o >= 0x370 && o <= 0x3FF) || (o >= 0x1F00 && o <= 0x1FFF)
}

///|
fn accent_flags(word : String, n : Int32) -> Array[Int32] {
  let flags : Array[Int32] = []
  for _ in 0..<n {
    flags.push(0)
  }
  for i in accented_syllables(word) {
    if i >= 0 && i < n {
      flags[i] = 1
    }
  }
  flags
}

///|
fn consume_key(
  bases : Array[String],
  syl_of : Array[Int32],
  start : Int32,
  key : String,
) -> (Int32, Array[Int32])? {
  if key == "" {
    return None
  }
  let touched : Array[Int32] = []
  let mut acc = ""
  let mut i = start
  while i < bases.length() && acc != key {
    let b = bases[i]
    if b == "" {
      return None
    }
    acc = acc + b
    if acc.length() > key.length() {
      return None
    }
    touched.push(syl_of[i])
    i += 1
  }
  if acc == key {
    Some((i, touched))
  } else {
    None
  }
}

///|
fn place_phones(
  parts : Array[String],
  ph : Array[String],
  syls : Array[Int32],
) -> Unit {
  if syls.length() == 0 {
    return
  }
  let spells : Array[String] = []
  for p in ph {
    let sp = spell_phone(p)
    if sp != "" {
      spells.push(sp)
    }
  }
  if spells.length() == 0 {
    return
  }
  let s0 = syls[0]
  let mut same = true
  for s in syls {
    if s != s0 {
      same = false
    }
  }
  if same {
    for sp in spells {
      parts[s0] = cat_spell(parts[s0], sp)
    }
    return
  }
  if spells.length() == 1 {
    let mut prev = -1
    for s in syls {
      if s != prev {
        parts[s] = cat_spell(parts[s], spells[0])
        prev = s
      }
    }
    return
  }
  if spells.length() == syls.length() {
    for i, sp in spells {
      parts[syls[i]] = cat_spell(parts[syls[i]], sp)
    }
    return
  }
  let order : Array[Int32] = []
  for s in syls {
    if order.length() == 0 || order[order.length() - 1] != s {
      order.push(s)
    }
  }
  let n = order.length()
  let m = spells.length()
  if m >= n {
    for i in 0..<(n - 1) {
      parts[order[i]] = cat_spell(parts[order[i]], spells[i])
    }
    for i in (n - 1)..<m {
      parts[order[n - 1]] = cat_spell(parts[order[n - 1]], spells[i])
    }
  } else {
    for i in 0..<m {
      parts[order[i]] = cat_spell(parts[order[i]], spells[i])
    }
  }
}

///|
fn join_stressed(parts : Array[String], flags : Array[Int32]) -> String {
  let sb = StringBuilder()
  let mut shown : Int32 = 0
  for i, p in parts {
    if p == "" {
      continue
    }
    let before = @kernel.syllable_hyphens(shown)
    let after = @kernel.syllable_hyphens(shown + 1)
    if after > before {
      sb.write_char('-')
    }
    shown = shown + 1
    let flag = if i >= 0 && i < flags.length() { flags[i] } else { 0 }
    if @kernel.syllable_caps(flag) {
      sb.write_string(up_ascii(p))
    } else {
      sb.write_string(p)
    }
  }
  sb.to_string()
}

///|
fn spell_all(phones : Array[String]) -> String {
  let mut cur = ""
  for p in phones {
    cur = cat_spell(cur, spell_phone(p))
  }
  cur
}

///|
fn fallback_spell(
  phones : Array[String],
  flags : Array[Int32],
  word : String,
) -> String {
  let s = spell_all(phones)
  if s == "" {
    word
  } else if flags.length() == 1 && @kernel.syllable_caps(flags[0]) {
    up_ascii(s)
  } else {
    s
  }
}

///|
fn aligned_parts(
  syls : Array[Array[String]],
  units : Array[G2pUnit],
) -> Array[String]? {
  let bases : Array[String] = []
  let syl_of : Array[Int32] = []
  for si, syl in syls {
    for u in syl {
      bases.push(folded_bases(u))
      syl_of.push(si)
    }
  }
  let parts : Array[String] = []
  for _ in syls {
    parts.push("")
  }
  let mut fi = 0
  for gu in units {
    let key = unit_key(gu.t)
    if key == "" {
      continue
    }
    match consume_key(bases, syl_of, fi, key) {
      None => return None
      Some((next, touched)) => {
        fi = next
        place_phones(parts, gu.ph, touched)
      }
    }
  }
  if fi != bases.length() {
    return None
  }
  Some(parts)
}

///|
fn spell_from_units(
  word : String,
  syls : Array[Array[String]],
  units : Array[G2pUnit],
  phones : Array[String],
) -> String {
  let flags = accent_flags(word, syls.length())
  match aligned_parts(syls, units) {
    Some(parts) => {
      let joined = join_stressed(parts, flags)
      if joined == "" {
        word
      } else {
        joined
      }
    }
    None => fallback_spell(phones, flags, word)
  }
}

///|
fn respell_word(word : String, scheme : String) -> String {
  let syls = syllabify(word)
  if syls.length() == 0 {
    return word
  }
  let gs = g2p_words(word, scheme)
  if gs.length() == 0 {
    return word
  }
  let gw = gs[0]
  if gw.units.length() == 0 || gw.phones.length() == 0 {
    return word
  }
  spell_from_units(word, syls, gw.units, gw.phones)
}

///|
/// English-friendly pronunciation of `text` in `scheme`.
/// Syllables are hyphenated and every accented syllable is in capitals
/// (none, one, or two). `respell("ἄρτος", "koine")` is `AR-tos`.
/// Spaces and punctuation stay put.
/// An unknown scheme returns "". Unknown characters are copied and do not throw.
pub fn respell(text : String, scheme : String) -> String {
  if scheme_index(scheme) < 0 {
    return ""
  }
  let sb = StringBuilder()
  let word = StringBuilder()
  let mut in_word = false
  for c in text {
    if @kernel.respell_take(in_word, is_greek_letter(c), is_comb(c)) {
      word.write_char(c)
      in_word = true
    } else {
      if in_word {
        sb.write_string(respell_word(word.to_string(), scheme))
        word.reset()
        in_word = false
      }
      sb.write_char(Int32::unsafe_to_char(@kernel.copy_code(c.to_int())))
    }
  }
  if in_word {
    sb.write_string(respell_word(word.to_string(), scheme))
  }
  sb.to_string()
}

///|
fn unit_of(t : String, ph : Array[String]) -> G2pUnit {
  {
    t,
    k: "",
    ph,
    from: 0,
    to: 0,
    restored: false,
    asp: false,
    ctx: "",
    alts: [],
  }
}

///|
test "spellings follow phone_label say" {
  assert_eq(phone_label("a").say, "ah")
  assert_eq(spell_phone("a"), "a")
  assert_eq(spell_phone("aː"), "a")
  assert_eq(phone_label("e").say, "ay")
  assert_eq(spell_phone("e"), "ay")
  assert_eq(phone_label("ɛ").say, "eh")
  assert_eq(spell_phone("ɛ"), "e")
  assert_eq(spell_phone("ɛː"), "e")
  assert_eq(phone_label("i").say, "ee")
  assert_eq(spell_phone("i"), "ee")
  assert_eq(spell_phone("iː"), "ee")
  assert_eq(phone_label("ɪ").say, "ih")
  assert_eq(spell_phone("ɪ"), "i")
  assert_eq(phone_label("o").say, "oh")
  assert_eq(spell_phone("o"), "o")
  assert_eq(spell_phone("ɔ"), "aw")
  assert_eq(spell_phone("ɔː"), "aw")
  assert_eq(phone_label("u").say, "oo")
  assert_eq(spell_phone("u"), "oo")
  assert_eq(spell_phone("uː"), "oo")
  assert_eq(phone_label("ʊ").say, "oo")
  assert_eq(spell_phone("ʊ"), "u")
  assert_eq(phone_label("y").say, "ü")
  assert_eq(spell_phone("y"), "ue")
  assert_eq(spell_phone("yː"), "ue")
  assert_eq(phone_label("kʰ").say, "k + puff")
  assert_eq(spell_phone("kʰ"), "kh")
  assert_eq(spell_phone("tʰ"), "th")
  assert_eq(spell_phone("pʰ"), "ph")
  assert_eq(phone_label("r").say, "rolled r")
  assert_eq(spell_phone("r"), "r")
  assert_eq(phone_label("ɾ").say, "tapped r")
  assert_eq(spell_phone("ɾ"), "r")
  assert_eq(phone_label("θ").say, "th")
  assert_eq(spell_phone("θ"), "th")
  assert_eq(phone_label("ð").say, "th")
  assert_eq(spell_phone("ð"), "th")
  assert_eq(spell_phone("ɣ"), "gh")
  assert_eq(spell_phone("x"), "ch")
  assert_eq(spell_phone("ç"), "h")
  assert_eq(spell_phone("ʝ"), "y")
  assert_eq(spell_phone("ŋ"), "ng")
  assert_eq(spell_phone("β"), "v")
  assert_eq(spell_phone("ɸ"), "f")
  assert_eq(spell_phone("d͡z"), "dz")
  assert_eq(spell_phone("c"), "ky")
  assert_eq(spell_phone("ɲ"), "ny")
  assert_eq(spell_phone("ʎ"), "ly")
  assert_eq(spell_phone("ɟ"), "gy")
  assert_eq(spell_phone("h"), "h")
  assert_eq(spell_phone("j"), "y")
  assert_eq(spell_phone("w"), "w")
  assert_eq(spell_phone(""), "")
  assert_eq(spell_phone("|"), "")
  assert_eq(spell_phone("ʔ"), "")
  for p in phone_names {
    if p != "" {
      ignore(spell_phone(p))
      ignore(spell_phone(p + "ː"))
    }
  }
}

///|
test "syllable joining shortens an offglide and keeps a consonant oo" {
  assert_eq(cat_spell("a", "oo"), "au")
  assert_eq(cat_spell("t", "oo"), "too")
  assert_eq(cat_spell("e", "oo"), "eu")
  assert_eq(cat_spell("y", "oo"), "yoo")
  assert_eq(cat_spell("a", "ee"), "ai")
  assert_eq(cat_spell("th", "ee"), "thee")
  assert_eq(cat_spell("e", "ee"), "ei")
  assert_eq(cat_spell("ay", "i"), "ay")
  assert_eq(cat_spell("a", "i"), "ai")
  assert_eq(cat_spell("aw", "i"), "awi")
  assert_eq(cat_spell("", "s"), "s")
  assert_eq(cat_spell("la", ""), "la")
  assert_eq(up_ascii("a1-b"), "A1-B")
  assert_eq(join_stressed(["a", "", "tos"], [0, 0, 1]), "a-TOS")
  assert_eq(join_stressed(["an", "thro", "pos"], [1, 0, 1]), "AN-thro-POS")
  assert_eq(join_stressed(["", ""], []), "")
  assert_eq(accented_syllables("τις"), [])
  assert_eq(fallback_spell([], [], "x"), "x")
  assert_eq(fallback_spell(["a"], [1], "α"), "A")
  assert_eq(fallback_spell(["a", "o"], [1, 0], "αο"), "ao")
}

///|
test "place_phones groups a diphthong, splits a geminate, and shares a digraph" {
  let one = [""]
  place_phones(one, ["a", "u"], [0])
  assert_eq(one, ["au"])
  let gem = ["la", ""]
  place_phones(gem, ["sː"], [0, 1])
  place_phones(gem, ["a"], [1])
  assert_eq(gem, ["las", "sa"])
  let dig = ["la", ""]
  place_phones(dig, ["m", "b"], [0, 1])
  place_phones(dig, ["a"], [1])
  assert_eq(dig, ["lam", "ba"])
  let extra = ["", ""]
  place_phones(extra, ["e", "ɪ", "u"], [0, 1])
  assert_eq(extra, ["ay", "iu"])
  let fewer = ["", "", ""]
  place_phones(fewer, ["a", "b"], [0, 1, 2])
  assert_eq(fewer, ["a", "b", ""])
  let keep = ["x"]
  place_phones(keep, [], [])
  place_phones(keep, ["ʔ"], [0])
  assert_eq(keep, ["x"])
}

///|
test "aligned_parts skips an empty grapheme and rejects a short or long key" {
  let ok = aligned_parts([["α"]], [unit_of(",", []), unit_of("α", ["a"])])
  match ok {
    Some(parts) => assert_eq(parts, ["a"])
    None => fail("alpha")
  }
  assert_true(aligned_parts([["α"], ["β"]], [unit_of("α", ["a"])]) is None)
  assert_true(aligned_parts([["αι"]], [unit_of("α", ["a"])]) is None)
  assert_eq(
    spell_from_units("αβ", [["α"], ["β"]], [unit_of("α", ["a"])], ["a"]),
    "a",
  )
  assert_eq(
    spell_from_units("α", [["α"]], [unit_of("α", ["ʔ"])], ["ʔ"]),
    "α",
  )
  let bases = ["αι", "σ"]
  let syl = [0, 1]
  assert_true(consume_key(bases, syl, 0, "") is None)
  assert_true(consume_key(bases, syl, 0, "α") is None)
  assert_true(consume_key(bases, syl, 0, "αια") is None)
  match consume_key(bases, syl, 0, "αι") {
    Some((n, touched)) => {
      assert_eq(n, 1)
      assert_eq(touched, [0])
    }
    None => fail("αι")
  }
  assert_true(consume_key([""], [0], 0, "α") is None)
}

///|
test "a word g2p cannot read is copied, and a bad scheme is not respell_word's problem" {
  assert_eq(respell_word("...", "koine"), "...")
  assert_eq(respell_word("αa", "koine"), "αa")
  assert_eq(respell_word("λόγος", "nope"), "λόγος")
  let odd = respell("ᾳυ", "attic")
  assert_true(odd != "")
  assert_eq(respell("ᾳυ", "attic"), odd)
}
