// Accent marks, punctuation, and consonant clusters.

///|
fn filter_mark(s : String, m : Char) -> String {
  let sb = StringBuilder()
  for c0 in s {
    for c in nfd_char(c0) {
      if @kernel.keep_char(c.to_int(), m.to_int()) {
        sb.write_char(c)
      }
    }
  }
  nfc(sb.to_string())
}

///|
pub fn remove_acutes(s : String) -> String {
  filter_mark(s, acute)
}

///|
pub fn remove_graves(s : String) -> String {
  filter_mark(s, grave)
}

///|
pub fn remove_circumflexes(s : String) -> String {
  filter_mark(s, circ)
}

///|
pub fn contains_circumflex(s : String) -> Bool {
  for c0 in s {
    for c in nfd_char(c0) {
      if c == circ {
        return true
      }
    }
  }
  false
}

///|
pub fn add_acute(s : String) -> String {
  nfc(s + "\u{0301}")
}

///|
pub fn add_circumflex(s : String) -> String {
  nfc(s + "\u{0342}")
}

///|
/// Each character reduced to its base letter (accents, breathings, subscripts dropped).
pub fn without_accents(s : String) -> String {
  let sb = StringBuilder()
  for c in s {
    let d = nfd_char(c)
    if d == "" {
      sb.write_char(c)
    } else {
      // keep only base letters of the decomposition (proved: marks dropped, letters kept)
      for x in d {
        if @kernel.is_base_char(x.to_int()) {
          sb.write_char(x)
        }
      }
    }
  }
  sb.to_string()
}

///|
/// Acute on the last vowel of the string.
pub fn accentuate_last_vowel(s : String) -> String {
  let cs = chars(nfc(s))
  let mut x = cs.length() - 1
  while x >= 0 {
    if kl_is_vowel(cs[x]) {
      return join_chars(cs[0:x]) +
        add_acute(cs[x].to_string()) +
        join_chars(cs[x + 1:])
    }
    x -= 1
  }
  join_chars(cs[:])
}

///|
/// TS isLongSyllable: η ω ᾳ or a diphthong. Same (accent-sensitive) behaviour as the TS; the
/// accent functions use the length rules in g2p.mbt instead.
pub fn is_long_syllable(syl : String) -> Bool {
  let v = StringBuilder()
  let mut n = 0
  for c in syl {
    if kl_is_vowel(c) {
      v.write_char(c)
      n += 1
    }
  }
  let vs = v.to_string()
  if n == 2 {
    return is_diph(vs)
  }
  vs == "η" || vs == "ω" || vs == "ᾳ"
}

///|
pub fn remove_punctuation(s : String) -> String {
  let sb = StringBuilder()
  for c in s {
    if c != ',' && c != '.' && c != '·' && c != ';' {
      sb.write_char(c)
    }
  }
  sb.to_string()
}

///|
/// Drop newlines, collapse runs of spaces, drop digits.
pub fn remove_numbers(s : String) -> String {
  let cs = chars(s).filter(fn(c) { c != '\n' && c != '\r' })
  let sb = StringBuilder()
  for i, c in cs {
    if c == ' ' && i + 1 < cs.length() && cs[i + 1] == ' ' {
      continue
    }
    if c >= '0' && c <= '9' {
      continue
    }
    sb.write_char(c)
  }
  sb.to_string()
}

///|
fn kl_lower(s : String) -> String {
  let sb = StringBuilder()
  for c in s {
    let o = c.to_int()
    let l = if o >= 0x391 && o <= 0x3A9 && o != 0x3A2 {
      Int32::unsafe_to_char(o + 32)
    } else if c >= 'A' && c <= 'Z' {
      Int32::unsafe_to_char(o + 32)
    } else {
      let d = decomp(c)
      if d != c.to_string() && o >= 0x370 {
        // precomposed capital: lower-case NFC form
        nfc_or(d, c)
      } else {
        c
      }
    }
    sb.write_char(l)
  }
  sb.to_string()
}

///|
fn nfc_or(d : String, c : Char) -> Char {
  let cs = chars(nfc(d))
  if cs.length() == 1 {
    cs[0]
  } else {
    c
  }
}

///|
/// Distinct word-initial consonant clusters (2+ consonants) in a text, in order of first use.
pub fn extract_consonant_clusters(text : String) -> Array[String] {
  let out : Array[String] = []
  let t = remove_numbers(remove_punctuation(kl_lower(text)))
  for w in t.split(" ") {
    let sb = StringBuilder()
    let mut n = 0
    for c in w {
      if kl_is_vowel(c) {
        break
      }
      sb.write_char(c)
      n += 1
    }
    let cl = sb.to_string()
    if n > 1 && !out.contains(cl) {
      out.push(cl)
    }
  }
  out
}
