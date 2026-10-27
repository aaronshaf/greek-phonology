// Syllable units, onsets, and cuts.

///|
pub let schemes : Array[String] = ["modern", "koine", "attic", "erasmian"]

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
  let sb = StringBuilder()
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
  let sb = StringBuilder()
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
    let sb = StringBuilder()
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
