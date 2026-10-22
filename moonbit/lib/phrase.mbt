// Phrase-level (sandhi) accentuation: enclitics, proclitics, grave for acute, elision, crasis.
// Input words carry their lexical (dictionary) accent; enclitics may be written unaccented
// (τις, μου) or with their lexical accent (τινές, ἐστί, ποτέ, τὶς). Decisions go through the
// proved kernel functions extra_acute / enclitic_keeps / to_grave / accent_count.

///|
priv struct Tok {
  pre : String // leading punctuation / marks
  core : String
  post : String // trailing punctuation
}

///|
fn is_greek_or_mark(c : Char) -> Bool {
  let o = c.to_int()
  (o >= 0x370 && o <= 0x3FF) || (o >= 0x1F00 && o <= 0x1FFF) || is_comb(c) || is_apos(c)
}

///|
fn is_apos(c : Char) -> Bool {
  c == '\u{2019}' || c == '\'' || c == '\u{1FBD}' || c == '\u{02BC}' || c == '\u{1FBF}'
}

///|
fn split_tok(t : String) -> Tok {
  let cs = chars(t)
  let mut a = 0
  while a < cs.length() && !is_greek_or_mark(cs[a]) {
    a += 1
  }
  let mut b = cs.length()
  while b > a && !is_greek_or_mark(cs[b - 1]) {
    b -= 1
  }
  // a leading apostrophe is punctuation, not elision
  while a < b && is_apos(cs[a]) {
    a += 1
  }
  { pre: join_chars(cs[0:a]), core: join_chars(cs[a:b]), post: join_chars(cs[b:]) }
}

///|
/// Punctuation that blocks the grave and ends a clause (quotes and text-critical marks do not).
fn has_stop(s : String) -> Bool {
  for c in s {
    match c {
      ',' | '.' | '·' | ';' | '\u{037E}' | '\u{0387}' | ':' | '!' | '?' | '(' | ')' | '—' | '–' | '[' | ']' =>
        return true
      _ => ()
    }
  }
  false
}

///|
fn plain(w : String) -> String {
  // lower-case, no accents (breathings kept), final sigma folded
  let sb = StringBuilder()
  for c0 in w {
    for c in nfd_char(c0) {
      if c == acute || c == grave || c == circ {
        continue
      }
      if is_comb(c) || c == 'ς' {
        sb.write_char(c)
      } else {
        sb.write_char(fold_lower(c))
      }
    }
  }
  nfc(sb.to_string())
}

///|
fn bare(w : String) -> String {
  key_bare(w)
}

///|
fn ends_elided(w : String) -> Bool {
  let cs = chars(w)
  cs.length() > 0 && is_apos(cs[cs.length() - 1])
}

///|
/// Lexical accent of a word: (pos from end, is_circumflex), pos 0 = none. Grave read as acute.
fn lex_accent(w : String) -> (Int, Bool) {
  match accent(w) {
    Some((p, k)) => (p, k == "circumflex")
    None => (0, false)
  }
}

///|
fn nsyl(w : String) -> Int {
  syllabify(w).length()
}

///|
/// Enclitic forms (accent-free, lower-case keys).
let enclitic_plain : Array[String] = [
  "μου", "μοι", "με", "σου", "σοι", "σε", "πως", "που", "πη", "ποι", "ποθεν", "ποτε",
  "γε", "τε", "τοι", "περ", "θην", "νυν", "τις", "τι", "τινος", "τινι", "τινα", "τινες", "τινων",
  "τισι", "τισιν", "τινας", "εἰμι", "ἐστι", "ἐστιν", "ἐσμεν", "ἐστε", "εἰσι", "εἰσιν",
  "φημι", "φησι", "φησιν", "φαμεν", "φατε", "φασι", "φασιν",
]

///|
/// Is this token an enclitic? Unaccented or accented on the ultima (lexical form); an accent
/// further left (τίνες, πότε) or a circumflex on πῶς/ποῦ/πῇ means the orthotone interrogative.
pub fn is_enclitic(w : String) -> Bool {
  let p = plain(w)
  if !enclitic_plain.contains(p) {
    return false
  }
  let (pos, c) = lex_accent(w)
  if pos == 0 {
    return true
  }
  if p == "τις" || p == "τι" {
    // τίς / τί interrogative (acute); enclitic written τις or τὶς
    return accent(w) is Some((_, "grave"))
  }
  if pos != 1 {
    return false
  }
  if c {
    return p == "τινων"
  }
  true
}

///|
let proclitic_plain : Array[String] = [
  "ὁ", "ἡ", "οἱ", "αἱ", "ἐν", "εἰς", "ἐκ", "ἐξ", "εἰ", "ὡς", "οὐ", "οὐκ", "οὐχ",
]

///|
pub fn is_proclitic(w : String) -> Bool {
  lex_accent(w).0 == 0 && proclitic_plain.contains(plain(w))
}

///|
fn strip_acc(w : String) -> String {
  remove_circumflexes(remove_acutes(remove_graves(w)))
}

///|
/// Write mark on the vowel nucleus of syllable pos (1 = ultima) of w, keeping other marks.
fn place_accent(w : String, pos : Int, mark : Char) -> String {
  let sy = syllabify(w)
  let n = sy.length()
  if pos < 1 || pos > n {
    return w
  }
  let us = units(w)
  let mut base_i = 0
  let mut target = -1
  let mut k = 0
  for si, s in sy {
    for _ in s {
      for c in us[k].u {
        if si == n - pos && is_vowel(c) {
          target = base_i
        }
        base_i += 1
      }
      k += 1
    }
  }
  let sb = StringBuilder()
  let mut bi = -1
  let mut pending = false
  for c0 in w {
    for c in nfd_char(c0) {
      let greek_base = !is_comb(c) && c.to_int() >= 0x370 && c.to_int() <= 0x3FF
      if !is_comb(c) {
        if pending {
          sb.write_char(mark)
          pending = false
        }
        if greek_base {
          bi += 1
          if bi == target {
            pending = true
          }
        }
      }
      if pending && c == subscr {
        sb.write_char(mark)
        pending = false
      }
      sb.write_char(c)
    }
  }
  if pending {
    sb.write_char(mark)
  }
  nfc(sb.to_string())
}

///|
let esti_triggers : Array[String] = ["οὐκ", "οὐ", "μη", "εἰ", "ὡς", "και", "ἀλλ’", "ἀλλ'", "τουτ’", "τουτ'", "ὁτι"]

///|
let eimi_forms : Array[String] = [
  "εἰμι", "ἐστι", "ἐστιν", "ἐσμεν", "ἐστε", "εἰσι", "εἰσιν", "φημι", "φησι", "φησιν", "φαμεν", "φατε", "φασι", "φασιν",
]

///|
/// After these, σου σοι σε are emphatic (orthotone): ἐν σοί, πρὸς σέ, καὶ σοί.
let su_triggers : Array[String] = [
  "ἐν", "εἰς", "ἐκ", "ἐξ", "προς", "περι", "ὑπερ", "παρα", "ἀπο", "δια", "δι’", "μετα", "μεθ’", "μετ’", "ἐπι",
  "ἐπ’", "ἐφ’", "κατα", "κατ’", "συν", "ὑπο", "ἀντι", "και", "ἠ",
]

///|
/// Lexical accent of an enclitic used as an ordinary word (ἔστι handled separately).
fn orthotone(base : String, p : String) -> String {
  if p == "σου" {
    place_accent(base, 1, circ)
  } else if p == "σοι" || p == "σε" || eimi_forms.contains(p) || nsyl(base) >= 2 {
    place_accent(base, 1, if p == "τινων" { circ } else { acute })
  } else {
    base
  }
}

///|
/// Accentuate a phrase in context. Each word should carry its dictionary accent.
///|
/// Write a phrase_decision code onto a word (see kernel/phrase_decision).
fn render_decision(code : Int, w : String, base : String) -> String {
  match code {
    0 => base
    1 => w
    2 => place_accent(base, 1, acute)
    3 => place_accent(base, 1, grave)
    4 => place_accent(w, 1, acute)
    _ => place_accent(base, 1, circ)
  }
}

///|
pub fn accentuate_phrase(text : String) -> String {
  let raw = text.split(" ").map(fn(v) { v.to_string() }).filter(fn(v) { v != "" }).collect()
  let toks = raw.map(split_tok)
  let n = toks.length()
  let enc = toks.map(fn(t) { t.core != "" && is_enclitic(t.core) })
  // an enclitic with no host (text start or after punctuation) is orthotone; so are εἰμί/φημί
  // forms after οὐκ etc., and σου σοι σε after a preposition, καί or ἤ
  let ortho = Array::make(n, false)
  for i in 0..<n {
    if !enc[i] {
      continue
    }
    let p = plain(toks[i].core)
    let hostless = i == 0 || has_stop(toks[i - 1].post) || has_stop(toks[i].pre) || toks[i - 1].core == ""
    let hp = if i > 0 { plain(toks[i - 1].core) } else { "" }
    if hostless || (eimi_forms.contains(p) && esti_triggers.contains(hp)) ||
      ((p == "σου" || p == "σοι" || p == "σε") && su_triggers.contains(hp)) {
      enc[i] = false
      ortho[i] = true
    }
  }
  let out : Array[String] = []
  for i in 0..<n {
    let t = toks[i]
    if t.core == "" {
      out.push(raw[i])
      continue
    }
    let w = t.core
    let stop_after = has_stop(t.post) || i + 1 >= n || has_stop(toks[i + 1].pre)
    let next_enc = !stop_after && enc[i + 1]
    let word_follows = !stop_after && !next_enc && toks[i + 1].core != ""
    let (lp, lc) = lex_accent(w)
    let base = strip_acc(w)
    let mut res = w
    if ortho[i] {
      let p = plain(w)
      let hp = if i > 0 { plain(toks[i - 1].core) } else { "" }
      let hostless = i == 0 || has_stop(toks[i - 1].post) || has_stop(t.pre) || toks[i - 1].core == ""
      if (p == "ἐστι" || p == "ἐστιν") && (hostless || esti_triggers.contains(hp)) {
        res = place_accent(base, 2, acute) // ἔστι(ν)
      } else if hostless && !eimi_forms.contains(p) {
        res = base // clause-initial τις, τινες ... stay unaccented in the SBLGNT convention
      } else {
        res = orthotone(base, p)
        let (op, oc) = lex_accent(res)
        if op == 1 && !oc && !next_enc && @kernel.to_grave(1, true, word_follows) {
          res = place_accent(base, 1, grave)
        } else if next_enc && op >= 2 {
          res = place_accent(res, 1, acute)
        }
      }
    } else {
      // Decision made by the proved kernel; this step only renders it.
      let kind = if enc[i] { 2 } else if is_proclitic(w) { 1 } else { 0 }
      let p = plain(w)
      let keeps = kind == 2 && {
        let host = toks[i - 1].core
        let (hp, hc) = lex_accent(host)
        !enc[i - 1] && !is_proclitic(host) && !ends_elided(host) &&
        @kernel.enclitic_keeps(nsyl(base), hp, hc)
      }
      let interrog = p == "τις" || p == "τι" || p == "ἱνατι" || p == "διατι"
      let is_ou = p == "οὐ" || p == "οὐκ" || p == "οὐχ"
      let code = @kernel.phrase_decision(
        kind, lp, lc, next_enc, word_follows, stop_after, interrog, is_ou, keeps, p == "τινων",
      )
      res = render_decision(code, w, base)
    }
    out.push(t.pre + res + t.post)
  }
  out.join(" ")
}

///|
/// Undo sandhi: graves become acutes, an extra acute before an enclitic is dropped, enclitics lose
/// their accent (disyllabic ones keep a lexical acute on the ultima), proclitics lose theirs.
pub fn lexical_phrase(text : String) -> String {
  let raw = text.split(" ").map(fn(v) { v.to_string() }).filter(fn(v) { v != "" }).collect()
  let out : Array[String] = []
  for r in raw {
    let t = split_tok(r)
    if t.core == "" {
      out.push(r)
      continue
    }
    let w = t.core
    let base = strip_acc(w)
    let p = plain(w)
    let accs = written_accents(w)
    let res = if enclitic_plain.contains(p) &&
      (accs.length() == 0 || (accs[0].0 == 1 && (accs[0].1 != circ || p == "τινων")) || p == "ἐστι" || p == "ἐστιν") &&
      !((p == "τις" || p == "τι") && accs.length() == 1 && accs[0].1 == acute) {
      if nsyl(base) >= 2 && p != "ἐστι" && p != "ἐστιν" && p != "εἰμι" && p != "φημι" {
        place_accent(base, 1, if p == "τινων" { circ } else { acute })
      } else if p == "εἰμι" || p == "φημι" || p == "ἐστι" || p == "ἐστιν" || p == "εἰσι" || p == "εἰσιν" || p == "φησι" || p == "φησιν" || p == "φασι" || p == "φασιν" {
        place_accent(base, 1, acute)
      } else if p == "τις" || p == "τι" {
        place_accent(base, 1, grave)
      } else {
        base
      }
    } else if proclitic_plain.contains(p) && (accs.length() == 0 || accs[0].1 == acute) &&
      !(p == "ὁ" || p == "ἡ" || p == "οἱ" || p == "αἱ") {
      base // εἴ, οὔ before an enclitic or at clause end
    } else if proclitic_plain.contains(p) && accs.length() == 0 {
      base
    } else if accs.length() == 0 {
      w
    } else {
      // keep the first accent; grave -> acute
      let (pos, m) = accs[0]
      place_accent(base, pos, if m == grave { acute } else { m })
    }
    out.push(t.pre + res + t.post)
  }
  out.join(" ")
}

///|
/// All written accents of a word: (syllable pos from end, mark), left to right.
fn written_accents(w : String) -> Array[(Int, Char)] {
  let sm = syl_marks(w)
  let out : Array[(Int, Char)] = []
  for i, x in sm {
    for m in [acute, grave, circ] {
      if x.0.contains(m) {
        out.push((sm.length() - i, m))
      }
    }
  }
  out
}

///|
/// Compare a written phrase with what the sandhi rules predict from its lexical form.
/// JSON list: {"word","expected","ok"} per word.
pub fn check_phrase_accents(text : String) -> String {
  let pred = accentuate_phrase(lexical_phrase(text))
  let a = text.split(" ").map(fn(v) { v.to_string() }).filter(fn(v) { v != "" }).collect()
  let b = pred.split(" ").map(fn(v) { v.to_string() }).collect()
  let items : Array[String] = []
  for i, w in a {
    let e = if i < b.length() { b[i] } else { "" }
    let ok = nfc(split_tok(w).core) == nfc(split_tok(e).core)
    items.push("{\"word\":" + jstr(w) + ",\"expected\":" + jstr(e) + ",\"ok\":" + ok.to_string() + "}")
  }
  "[" + items.join(",") + "]"
}

///|
/// Number of acute, grave and circumflex marks in a word.
pub fn count_accents(w : String) -> Int {
  let mut n = 0
  for c0 in w {
    for c in nfd_char(c0) {
      if c == acute || c == grave || c == circ {
        n += 1
      }
    }
  }
  n
}
