// Ancient Greek -> IPA for five reading schemes, syllables and accent.

///|
pub let schemes : Array[String] = [
  "modern", "byzantine", "koine", "attic", "erasmian",
]

///|
let rough_mark : Char = '\u{0314}'

///|
let diaer : Char = '\u{0308}'

///|
let subscr : Char = '\u{0345}'

///|
let acute : Char = '\u{0301}'

///|
let grave : Char = '\u{0300}'

///|
let circ : Char = '\u{0342}'

///|
fn is_vowel(c : Char) -> Bool {
  c == 'α' ||
  c == 'ε' ||
  c == 'η' ||
  c == 'ι' ||
  c == 'ο' ||
  c == 'υ' ||
  c == 'ω'
}

///|
fn is_diph(s : String) -> Bool {
  s == "αι" ||
  s == "ει" ||
  s == "οι" ||
  s == "υι" ||
  s == "αυ" ||
  s == "ευ" ||
  s == "ου" ||
  s == "ηυ"
}

///|
fn split_spaces(s : String) -> Array[String] {
  let out : Array[String] = []
  let sb = StringBuilder::new()
  let mut n = 0
  for c in s {
    if c == ' ' {
      if n > 0 {
        out.push(sb.to_string())
        sb.reset()
        n = 0
      }
    } else {
      sb.write_char(c)
      n += 1
    }
  }
  if n > 0 {
    out.push(sb.to_string())
  }
  out
}

///|
fn is_ws(c : Char) -> Bool {
  c == ' ' ||
  c == '\t' ||
  c == '\n' ||
  c == '\r' ||
  c == '\u{0B}' ||
  c == '\u{0C}'
}

///|
/// Split on ASCII whitespace (same rule as the Python reference).
pub fn split_ws(s : String) -> Array[String] {
  let out : Array[String] = []
  let sb = StringBuilder::new()
  let mut n = 0
  for c in s {
    if is_ws(c) {
      if n > 0 {
        out.push(sb.to_string())
        sb.reset()
        n = 0
      }
    } else {
      sb.write_char(c)
      n += 1
    }
  }
  if n > 0 {
    out.push(sb.to_string())
  }
  out
}

///|
fn is_comb(c : Char) -> Bool {
  c.to_int() >= 0x300 && c.to_int() <= 0x36F
}

///|
/// An orthographic unit: a letter or diphthong plus its combining marks.
pub(all) struct GUnit {
  u : String
  marks : Array[Char]
}

///|
fn first_char(s : String) -> Char {
  for c in s {
    return c
  }
  '\u{0}'
}

///|
fn char_count(s : String) -> Int32 {
  let mut n = 0
  for _ in s {
    n += 1
  }
  n
}

///|
fn clusters(word : String) -> Array[(Char, Array[Char])] {
  let out : Array[(Char, Array[Char])] = []
  for c0 in word {
    for ch in decomp(c0) {
      if is_comb(ch) {
        if out.length() > 0 {
          let m = out[out.length() - 1].1
          if !m.contains(ch) {
            m.push(ch)
          }
        }
      } else if ch.to_int() >= 0x370 && ch.to_int() <= 0x3FF {
        out.push((ch, []))
      }
    }
  }
  out
}

///|
/// Units of a word: letters, with diphthongs merged unless the second vowel has a diaeresis.
pub fn units(word : String) -> Array[GUnit] {
  let cl = clusters(word)
  let res : Array[GUnit] = []
  let mut i = 0
  while i < cl.length() {
    let (b, m) = cl[i]
    if i + 1 < cl.length() {
      let (b2, m2) = cl[i + 1]
      let pair = b.to_string() + b2.to_string()
      if is_diph(pair) && !m2.contains(diaer) && !m.contains(subscr) {
        let mm = m.copy()
        for x in m2 {
          if !mm.contains(x) {
            mm.push(x)
          }
        }
        res.push({ u: pair, marks: mm, })
        i += 2
        continue
      }
    }
    res.push({ u: b.to_string(), marks: m.copy(), })
    i += 1
  }
  res
}

///|
fn is_onset(s : String) -> Bool {
  match s {
    "πλ"
    | "πρ"
    | "βλ"
    | "βρ"
    | "γλ"
    | "γρ"
    | "κλ"
    | "κρ"
    | "τρ"
    | "δρ"
    | "θρ"
    | "φρ"
    | "φλ"
    | "χρ"
    | "χλ"
    | "θλ"
    | "κν"
    | "γν"
    | "πν"
    | "μν"
    | "τμ"
    | "θν"
    | "κτ"
    | "πτ"
    | "φθ"
    | "χθ"
    | "βδ"
    | "σπ"
    | "στ"
    | "σκ"
    | "σφ"
    | "σθ"
    | "σχ"
    | "σμ"
    | "στρ"
    | "σπλ"
    | "σκλ"
    | "σκρ"
    | "πτρ"
    | "χθρ"
    | "φθρ"
    | "σφρ"
    | "κτρ"
    | "τλ"
    | "δμ" => true
    _ => false
  }
}

///|
/// Longest legal onset length at the end of a consonant run (Python: shrink from the left).
fn onset_len(cons : Array[Char]) -> Int32 {
  let n = cons.length()
  let mut j = 0
  while j < n {
    let sb = StringBuilder::new()
    for k in j..<n {
      sb.write_char(cons[k])
    }
    if is_onset(sb.to_string()) || n - j <= 1 {
      break
    }
    j += 1
  }
  n - j
}

///|
/// Start index of every syllable after the first; each cut comes from the proved kernel.
pub fn syllable_cuts(us : Array[GUnit]) -> Array[Int32] {
  let kinds = FixedArray::make(us.length(), 0)
  let nuc : Array[Int32] = []
  for i, x in us {
    if is_vowel(first_char(x.u)) {
      kinds[i] = 1
      nuc.push(i)
    }
  }
  let cuts : Array[Int32] = []
  for k in 0..<(nuc.length() - 1) {
    let a = nuc[k]
    let b = nuc[k + 1]
    let cons : Array[Char] = []
    for i in (a + 1)..<b {
      for c in us[i].u {
        cons.push(c)
      }
    }
    cuts.push(@kernel.syllable_cut(kinds, a, b, onset_len(cons)))
  }
  cuts
}

///|
/// Syllables of a word, as lists of units. Diaeresis splits, iota subscript stays with its vowel.
pub fn syllabify(word : String) -> Array[Array[String]] {
  let us = units(word)
  if us.length() == 0 {
    return []
  }
  let mut any = false
  for x in us {
    if is_vowel(first_char(x.u)) {
      any = true
    }
  }
  if !any {
    return [us.map(fn(x) { x.u })]
  }
  let out : Array[Array[String]] = []
  let cuts = syllable_cuts(us)
  cuts.push(us.length())
  let mut prev = 0
  for c in cuts {
    let s : Array[String] = []
    for i in prev..<c {
      s.push(us[i].u)
    }
    out.push(s)
    prev = c
  }
  out
}

///|
fn syl_marks(word : String) -> Array[(Array[Char], String)] {
  let us = units(word)
  let sy = syllabify(word)
  let out : Array[(Array[Char], String)] = []
  let mut k = 0
  for s in sy {
    let m : Array[Char] = []
    let mut nu = ""
    for _ in s {
      for x in us[k].marks {
        if !m.contains(x) {
          m.push(x)
        }
      }
      if is_vowel(first_char(us[k].u)) {
        nu = us[k].u + (if us[k].marks.contains(subscr) { "ι" } else { "" })
      }
      k += 1
    }
    out.push((m, nu))
  }
  out
}

///|
/// Written accent: (position from the end, 1 = ultima; kind), or None.
pub fn accent(word : String) -> (Int32, String)? {
  let sm = syl_marks(word)
  for i, x in sm {
    let m = x.0
    if m.contains(acute) {
      return Some((sm.length() - i, "acute"))
    }
    if m.contains(grave) {
      return Some((sm.length() - i, "grave"))
    }
    if m.contains(circ) {
      return Some((sm.length() - i, "circumflex"))
    }
  }
  None
}

///|
/// True when the word ends in its last vowel (so final -αι/-οι count short: λύεται, but λόγοις).
fn ends_in_vowel(word : String) -> Bool {
  let us = units(word)
  us.length() > 0 && is_vowel(first_char(us[us.length() - 1].u))
}

///|
/// 1 long, 0 short, 2 unknown (α ι υ). Final -αι/-οι count short for accent.
fn nucleus_long(nu : String, is_final : Bool) -> Int32 {
  if nu == "" {
    return 0
  }
  if char_count(nu) >= 2 {
    return if is_final && (nu == "αι" || nu == "οι") { 0 } else { 1 }
  }
  let c = first_char(nu)
  if c == 'η' || c == 'ω' {
    1
  } else if c == 'ε' || c == 'ο' {
    0
  } else {
    2
  }
}

///|
/// Does the written accent obey the law of limitation? None if unaccented. (Proved checker.)
pub fn accent_ok(word : String) -> Bool? {
  guard accent(word) is Some((pos, kind)) else { return None }
  let sm = syl_marks(word)
  let n = sm.length()
  let nl = nucleus_long(sm[n - pos].1, false)
  let ul = nucleus_long(sm[n - 1].1, ends_in_vowel(word))
  Some(@kernel.law_ok(n, pos, kind == "circumflex", nl != 0, ul == 1))
}

///|
/// Accent predicted by the recessive (verb) rule: (position, kind). Unknown α ι υ length counts short.
pub fn recessive_accent(word : String) -> (Int32, String)? {
  let sm = syl_marks(word)
  let n = sm.length()
  if n == 0 {
    return None
  }
  let ul = nucleus_long(sm[n - 1].1, ends_in_vowel(word)) == 1
  let (pos, c) = if n == 1 {
    (1, @kernel.recessive_circ(1, false, nucleus_long(sm[0].1, false) == 1))
  } else {
    let p = @kernel.recessive_pos(n, ul)
    (p, @kernel.recessive_circ(n, ul, nucleus_long(sm[n - 2].1, false) == 1))
  }
  Some((pos, if c { "circumflex" } else { "acute" }))
}

///|
/// A phone with its Greek source unit: tag "" for plain consonants, word/unit indices for alignment.
pub(all) struct Phone {
  p : String
  tag : String
  w : Int32
  u : Int32
}

///|
fn is_gv(c : Char) -> Bool {
  is_vowel(c)
}

///|
fn is_gc(c : Char) -> Bool {
  match c {
    'β' | 'γ' | 'δ' | 'ζ' | 'θ' | 'κ' | 'λ' | 'μ' | 'ν' | 'ξ' | 'π' | 'ρ' | 'σ' | 'ς' | 'τ' | 'φ' | 'χ' | 'ψ' => true
    _ => false
  }
}

///|
let non_alpha : Array[Int] = [
  0x0375, 0x0378, 0x0379, 0x037E, 0x0380, 0x0381, 0x0382, 0x0383, 0x0384, 0x0385, 0x0387, 0x038B,
  0x038D, 0x03A2, 0x03F6, 0x1F16, 0x1F17, 0x1F1E, 0x1F1F, 0x1F46, 0x1F47, 0x1F4E, 0x1F4F, 0x1F58,
  0x1F5A, 0x1F5C, 0x1F5E, 0x1F7E, 0x1F7F, 0x1FB5, 0x1FBD, 0x1FBF, 0x1FC0, 0x1FC1, 0x1FC5, 0x1FCD,
  0x1FCE, 0x1FCF, 0x1FD4, 0x1FD5, 0x1FDC, 0x1FDD, 0x1FDE, 0x1FDF, 0x1FED, 0x1FEE, 0x1FEF, 0x1FF0,
  0x1FF1, 0x1FF5, 0x1FFD, 0x1FFE, 0x1FFF, 0x00D7, 0x00F7,
]

///|
fn is_alpha_like(c : Char) -> Bool {
  let o = c.to_int()
  if non_alpha.contains(o) {
    return false
  }
  (c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z') || (o >= 0xC0 && o <= 0x24F) ||
  (o >= 0x370 && o <= 0x3FF) || (o >= 0x1F00 && o <= 0x1FFF)
}

///|
fn fold_lower(c : Char) -> Char {
  if c == 'ς' {
    return 'σ'
  }
  let d = decomp(c)
  if d != c.to_string() {
    return first_char(d)
  }
  if c >= 'A' && c <= 'Z' {
    return Int::unsafe_to_char(c.to_int() + 32)
  }
  c
}

///|
priv struct GCl {
  b : Char
  rough : Bool
  dia : Bool
  long : Bool // circumflex or macron: the vowel is long (used for Restored Attic length)
  isub : Bool // iota subscript: a long diphthong (Restored Attic)
}

///|
/// Letter clusters as the reference G2P reads them (iota subscript dropped, casefolded).
/// None if the word contains a letter the G2P cannot read.
fn g2p_clusters(word : String) -> Array[GCl]? {
  let t : Array[Char] = []
  for c in word {
    for ch in nfd_char(c) {
      if ch == '\u{0345}' || ch == '\u{1FBE}' {
        t.push('\u{0345}')
        continue
      }
      t.push(if is_comb(ch) { ch } else { fold_lower(ch) })
    }
  }
  let out : Array[GCl] = []
  let mut i = 0
  while i < t.length() {
    let ch = t[i]
    if is_comb(ch) || ch == '\u{0345}' {
      i += 1
      continue
    }
    i += 1
    let mut rough = false
    let mut dia = false
    let mut long = false
    let mut isub = false
    while i < t.length() && (is_comb(t[i]) || t[i] == '\u{0345}') {
      if t[i] == '\u{0345}' {
        isub = true
      } else if t[i] == circ || t[i] == '\u{0304}' {
        long = true
      } else if t[i] == rough_mark {
        rough = true
      } else if t[i] == diaer {
        dia = true
      }
      i += 1
    }
    if is_gv(ch) || is_gc(ch) {
      out.push({ b: ch, rough, dia, long, isub })
    } else if is_alpha_like(ch) {
      return None
    }
  }
  if out.length() == 0 {
    None
  } else {
    Some(out)
  }
}

///|
/// Phone strings by id (index 0 unused); ids and per-scheme inventories are in kernel/spec.mbtp.
let phone_names : Array[String] = [
  "", "a", "e", "i", "o", "u", "y", "ɛ", "ɛː", "ɔː", "eː", "oː", "ɪ", "ʊ", "ɔ", "w", "j", "h", "f",
  "v", "β", "b", "d", "g", "m", "n", "ŋ", "ʝ", "ɣ", "ç", "x", "z", "ð", "θ", "k", "s", "p", "l", "r",
  "t", "d͡z", "tʰ", "pʰ", "kʰ", "uː", "aː", "iː", "yː",
]

///|
/// Phones of one word in scheme s (0 modern, 1 byzantine, 2 koine, 3 attic, 4 erasmian).
/// Port of the reference G2P. The phones come from the proved step function
/// @kernel.g2p_step (finite tables; every cluster consumed once; only the scheme's inventory).
fn word_phones(word : String, s : Int, wi : Int) -> Array[Phone] {
  let out : Array[Phone] = []
  guard g2p_clusters(word) is Some(cl) else { return out }
  let n = cl.length()
  let bs = FixedArray::make(n, 0)
  let rf = FixedArray::make(n, 0)
  let dd = FixedArray::make(n, 0)
  for i, c in cl {
    bs[i] = c.b.to_int()
    rf[i] = if c.rough { 1 } else { 0 }
    dd[i] = if c.dia { 1 } else { 0 }
  }
  let buf = FixedArray::make(8, 0)
  // unit boundaries from the proved segmenter: every cluster consumed exactly once
  let starts = FixedArray::make(n + 1, 0)
  let nu = @kernel.g2p_units(s, bs, rf, dd, starts)
  let mut skip = false
  for ui in 0..<nu {
    let i = starts[ui]
    let r = @kernel.g2p_step(s, bs, rf, dd, i, buf)
    let cnt = r % 8
    let adv = r / 8
    if skip {
      // second letter of a Restored Attic geminate, already written as Cː
      skip = false
      continue
    }
    // Restored Attic length (tested, not proven: it reads accents the kernel does not model)
    let mut gem = false
    let mut isub = false
    if s == 3 && adv == 1 && is_gv(cl[i].b) {
      for k in 0..<cnt {
        if buf[k] != 17 && (cl[i].long || cl[i].isub) {
          buf[k] = @kernel.g_attic_long(buf[k])
        }
      }
      isub = cl[i].isub
    } else if s == 3 && adv == 1 && cnt == 1 && !is_gv(cl[i].b) && cl[i].b != 'γ' &&
      ui + 1 < nu && starts[ui + 1] == i + 1 && i + 1 < n && cl[i + 1].b == cl[i].b {
      gem = true
      skip = true
    }
    let base = cl[i].b
    let tag = if adv == 2 {
      base.to_string() + cl[i + 1].b.to_string()
    } else if is_gv(base) {
      base.to_string()
    } else {
      match base {
        'β' | 'γ' | 'δ' | 'ζ' | 'θ' | 'φ' | 'χ' => base.to_string()
        _ => ""
      }
    }
    for k in 0..<cnt {
      let id = buf[k]
      if id == 17 {
        out.push({ p: "h", tag: "h", w: wi, u: -1 })
      } else {
        out.push({ p: phone_names[id] + (if gem { "ː" } else { "" }), tag, w: wi, u: ui })
      }
    }
    if isub {
      out.push({ p: "i", tag, w: wi, u: ui })
    }
  }
  out
}

///|
fn scheme_index(name : String) -> Int32 {
  for i, s in schemes {
    if s == name {
      return i
    }
  }
  -1
}

///|
/// Phones of a text in one scheme (scheme index 0..4); words separated by a "|" phone.
pub fn g2p_index(text : String, s : Int32) -> Array[Phone] {
  let out : Array[Phone] = []
  for wi, w in split_ws(text) {
    let p = word_phones(lex_form(w), s, wi)
    if p.length() > 0 {
      if out.length() > 0 {
        out.push({ p: "|", tag: "", w: -2, u: 0, })
      }
      for x in p {
        out.push(x)
      }
    }
  }
  out
}

///|
/// Space-separated IPA of `text` in `scheme` ("modern", "byzantine", "koine", "attic", "erasmian").
pub fn ipa(text : String, scheme : String) -> String {
  let s = scheme_index(scheme)
  if s < 0 {
    return ""
  }
  let sb = StringBuilder::new()
  for i, x in g2p_index(text, s) {
    if i > 0 {
      sb.write_char(' ')
    }
    sb.write_string(x.p)
  }
  sb.to_string()
}
