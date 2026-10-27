// Written accent and the recessive accent.

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
