// Ancient Greek to IPA for four reading schemes.

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
    'β'
    | 'γ'
    | 'δ'
    | 'ζ'
    | 'θ'
    | 'κ'
    | 'λ'
    | 'μ'
    | 'ν'
    | 'ξ'
    | 'π'
    | 'ρ'
    | 'σ'
    | 'ς'
    | 'τ'
    | 'φ'
    | 'χ'
    | 'ψ' => true
    _ => false
  }
}

///|
let non_alpha : Array[Int32] = [
  0x0375, 0x0378, 0x0379, 0x037E, 0x0380, 0x0381, 0x0382, 0x0383, 0x0384, 0x0385,
  0x0387, 0x038B, 0x038D, 0x03A2, 0x03F6, 0x1F16, 0x1F17, 0x1F1E, 0x1F1F, 0x1F46,
  0x1F47, 0x1F4E, 0x1F4F, 0x1F58, 0x1F5A, 0x1F5C, 0x1F5E, 0x1F7E, 0x1F7F, 0x1FB5,
  0x1FBD, 0x1FBF, 0x1FC0, 0x1FC1, 0x1FC5, 0x1FCD, 0x1FCE, 0x1FCF, 0x1FD4, 0x1FD5,
  0x1FDC, 0x1FDD, 0x1FDE, 0x1FDF, 0x1FED, 0x1FEE, 0x1FEF, 0x1FF0, 0x1FF1, 0x1FF5,
  0x1FFD, 0x1FFE, 0x1FFF, 0x00D7, 0x00F7,
]

///|
fn is_alpha_like(c : Char) -> Bool {
  let o = c.to_int()
  if non_alpha.contains(o) {
    return false
  }
  (c >= 'a' && c <= 'z') ||
  (c >= 'A' && c <= 'Z') ||
  (o >= 0xC0 && o <= 0x24F) ||
  (o >= 0x370 && o <= 0x3FF) ||
  (o >= 0x1F00 && o <= 0x1FFF)
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
    return Int32::unsafe_to_char(c.to_int() + 32)
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
/// Letter clusters for G2P (iota subscript kept as a length flag, casefolded).
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
      out.push({ b: ch, rough, dia, long, isub, })
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
  "", "a", "e", "i", "o", "u", "y", "ɛ", "ɛː", "ɔː", "eː", "oː", "ɪ", "ʊ",
  "ɔ", "w", "j", "h", "f", "v", "β", "b", "d", "g", "m", "n", "ŋ", "ʝ", "ɣ",
  "ç", "x", "z", "ð", "θ", "k", "s", "p", "l", "r", "t", "d͡z", "tʰ", "pʰ",
  "kʰ", "uː", "aː", "iː", "yː",
]

///|
/// Phones of one word in scheme s (0 modern, 1 koine, 2 attic, 3 erasmian).
/// The phones come from the proved step function
/// @kernel.g2p_step (finite tables; every cluster consumed once; only the scheme's inventory).
fn word_phones(word : String, s : Int32, wi : Int32) -> Array[Phone] {
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
    if s == 2 && adv == 1 && is_gv(cl[i].b) {
      for k in 0..<cnt {
        if buf[k] != 17 && (cl[i].long || cl[i].isub) {
          buf[k] = @kernel.g_attic_long(buf[k])
        }
      }
      isub = cl[i].isub
    } else if s == 2 &&
      adv == 1 &&
      cnt == 1 &&
      !is_gv(cl[i].b) &&
      cl[i].b != 'γ' &&
      ui + 1 < nu &&
      starts[ui + 1] == i + 1 &&
      i + 1 < n &&
      cl[i + 1].b == cl[i].b {
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
        out.push({ p: "h", tag: "h", w: wi, u: -1, })
      } else {
        out.push({
          p: phone_names[id] + (if gem { "ː" } else { "" }),
          tag,
          w: wi,
          u: ui,
        })
      }
    }
    if isub {
      out.push({ p: "i", tag, w: wi, u: ui, })
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
/// Space-separated IPA of `text` in `scheme` ("modern", "koine", "attic", "erasmian").
pub fn ipa(text : String, scheme : String) -> String {
  let s = scheme_index(scheme)
  if s < 0 {
    return ""
  }
  let sb = StringBuilder()
  for i, x in g2p_index(text, s) {
    if i > 0 {
      sb.write_char(' ')
    }
    sb.write_string(x.p)
  }
  sb.to_string()
}
