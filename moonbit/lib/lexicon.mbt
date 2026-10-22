// NT (SBLGNT) + LXX (Rahlfs) word forms, loaded at runtime from data/greek-phonology-lexicon.bin
// so the core wasm/JS stays small. See tools/build_lexicon.py for the format.

///|
priv struct LexEntry {
  form : String // NFC
  flags : Int
}

///|
let lex_exact : Map[String, Int] = {}

///|
let lex_fold : Map[String, Int] = {}

///|
let lex_bare : Map[String, Int] = {}

///|
let lex_entries : Array[LexEntry] = []

///|
fn nfc_join(cs : Array[Char]) -> String {
  let sb = StringBuilder()
  for c in cs {
    sb.write_char(c)
  }
  nfc(sb.to_string())
}

///|
fn nfd_chars(w : String) -> Array[Char] {
  let out : Array[Char] = []
  for c in w {
    for d in nfd_char(c) {
      out.push(if d == '\u{0300}' { '\u{0301}' } else { d })
    }
  }
  out
}

///|
fn key_fold(w : String) -> String {
  let sb = StringBuilder()
  for c in nfd_chars(w) {
    if c == '\u{0345}' || c == '\u{1FBE}' {
      continue
    }
    sb.write_char(if is_comb(c) { c } else { fold_lower(c) })
  }
  sb.to_string()
}

///|
fn key_bare(w : String) -> String {
  let sb = StringBuilder()
  for c in nfd_chars(w) {
    if !is_comb(c) && c != '\u{1FBE}' {
      sb.write_char(fold_lower(c))
    }
  }
  sb.to_string()
}

///|
fn lex_put(m : Map[String, Int], k : String, idx : Int) -> Unit {
  match m.get(k) {
    Some(j) =>
      if (lex_entries[idx].flags >> 2) > (lex_entries[j].flags >> 2) {
        m[k] = idx
      }
    None => m[k] = idx
  }
}

///|
/// Load the bundled lexicon blob. Returns the number of word forms.
pub fn load_lexicon(blob : Array[Int]) -> Int {
  lex_exact.clear()
  lex_fold.clear()
  lex_bare.clear()
  lex_entries.clear()
  let alpha : Array[Char] = ['\u{0}']
  for c in lex_alpha {
    alpha.push(c)
  }
  let cur : Array[Char] = []
  let mut i = 0
  while i + 1 < blob.length() {
    let k = blob[i]
    let flags = blob[i + 1]
    i += 2
    while cur.length() > k {
      ignore(cur.pop())
    }
    while i < blob.length() && blob[i] != 0 {
      cur.push(alpha[blob[i]])
      i += 1
    }
    i += 1
    let form = nfc_join(cur)
    let idx = lex_entries.length()
    lex_entries.push({ form, flags })
    lex_put(lex_exact, key_fold_exact(form), idx)
    lex_put(lex_fold, key_fold(form), idx)
    lex_put(lex_bare, key_bare(form), idx)
  }
  lex_entries.length()
}

///|
fn key_fold_exact(w : String) -> String {
  let sb = StringBuilder()
  for c in nfd_chars(w) {
    sb.write_char(c)
  }
  sb.to_string()
}

///|
/// Number of loaded word forms (0 if no lexicon is loaded).
pub fn lexicon_size() -> Int {
  lex_entries.length()
}

///|
/// Look a word up: exact (grave read as acute), then case/iota-subscript folded, then accents stripped.
/// JSON: {"form","match","nt","lxx","freq_band"} or null.
pub fn lookup_json(word : String) -> String {
  let w = word.trim().to_string()
  let (hit, how) = match lex_exact.get(key_fold_exact(w)) {
    Some(j) => (j, "exact")
    None =>
      match lex_fold.get(key_fold(w)) {
        Some(j) => (j, "fold")
        None =>
          match lex_bare.get(key_bare(w)) {
            Some(j) => (j, "bare")
            None => (-1, "")
          }
      }
  }
  if hit < 0 {
    return "null"
  }
  let e = lex_entries[hit]
  "{\"form\":" + jstr(e.form) + ",\"match\":\"" + how + "\",\"nt\":" +
  ((e.flags & 1) != 0).to_string() + ",\"lxx\":" + ((e.flags & 2) != 0).to_string() +
  ",\"freq_band\":" + (e.flags >> 2).to_string() + "}"
}

///|
/// Compose a decomposed Greek string (base + marks) back to NFC, using the generated table.
fn nfc(s : String) -> String {
  let cs : Array[Char] = []
  for c in s {
    cs.push(c)
  }
  let sb = StringBuilder()
  let mut i = 0
  while i < cs.length() {
    let mut j = i + 1
    while j < cs.length() && is_comb(cs[j]) {
      j += 1
    }
    let mut k = j
    let mut done = false
    while k > i + 1 && !done {
      let piece = StringBuilder()
      for t in i..<k {
        piece.write_char(cs[t])
      }
      match nfc_lookup(piece.to_string()) {
        Some(c) => {
          sb.write_char(c)
          for t in k..<j {
            sb.write_char(cs[t])
          }
          done = true
        }
        None => k -= 1
      }
    }
    if !done {
      for t in i..<j {
        sb.write_char(cs[t])
      }
    }
    i = j
  }
  sb.to_string()
}

///|
/// The lexicon's spelling of w when a lexicon is loaded and w matches it (restores
/// accents, breathings and diaeresis on bare input); w itself otherwise. Rules do the rest.
fn lex_form(w : String) -> String {
  if lex_entries.length() == 0 {
    return w
  }
  let hit = match lex_exact.get(key_fold_exact(w)) {
    Some(j) => j
    None =>
      match lex_fold.get(key_fold(w)) {
        Some(j) => j
        None => lex_bare.get(key_bare(w)).unwrap_or(-1)
      }
  }
  if hit < 0 {
    w
  } else {
    lex_entries[hit].form
  }
}
