///|
fn hex_digit(n : Int) -> Char {
  if n < 10 {
    Int::unsafe_to_char(48 + n)
  } else {
    Int::unsafe_to_char(87 + n)
  }
}

///|
/// JSON string literal. Escapes `"`, `\`, and every code point below U+0020
/// (`\n` `\r` `\t` `\b` `\f`, otherwise `\u00XX`). Other characters, including
/// U+2028, are copied unchanged so existing outputs stay byte-identical.
fn jstr(s : String) -> String {
  let sb = StringBuilder::new()
  sb.write_char('"')
  for c in s {
    let cp = c.to_int()
    if c == '"' {
      sb.write_string("\\\"")
    } else if c == '\\' {
      sb.write_string("\\\\")
    } else if c == '\n' {
      sb.write_string("\\n")
    } else if c == '\r' {
      sb.write_string("\\r")
    } else if c == '\t' {
      sb.write_string("\\t")
    } else if cp == 0x08 {
      sb.write_string("\\b")
    } else if cp == 0x0C {
      sb.write_string("\\f")
    } else if cp < 0x20 {
      sb.write_string("\\u00")
      sb.write_char(hex_digit(cp >> 4))
      sb.write_char(hex_digit(cp & 0x0F))
    } else {
      sb.write_char(c)
    }
  }
  sb.write_char('"')
  sb.to_string()
}

///|
fn jnum(d : Double) -> String {
  d.to_string()
}

///|
/// Detection as JSON: {"mode", "probs": {scheme: p}, "loglik": {...}, "evidence": {scheme: {tag: [hits, total]}}, "phones"}.
pub fn Detection::to_json_string(self : Detection) -> String {
  let sb = StringBuilder::new()
  sb.write_string("{\"mode\":" + jstr(self.mode))
  for k in ["probs", "loglik"] {
    let v = if k == "probs" { self.probs } else { self.loglik }
    sb.write_string(",\"" + k + "\":{")
    for i, s in schemes {
      if i > 0 {
        sb.write_char(',')
      }
      sb.write_string(jstr(s) + ":" + jnum(v[i]))
    }
    sb.write_char('}')
  }
  sb.write_string(",\"evidence\":{")
  for i, s in schemes {
    if self.evidence_tags.length() == 0 {
      break
    }
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(jstr(s) + ":{")
    for j, t in self.evidence_tags[i] {
      if j > 0 {
        sb.write_char(',')
      }
      sb.write_string(
        jstr(t) +
        ":[" +
        self.evidence_hits[i][j].to_string() +
        "," +
        self.evidence_total[i][j].to_string() +
        "]",
      )
    }
    sb.write_char('}')
  }
  sb.write_string("},\"phones\":" + self.phones.to_string() + "}")
  sb.to_string()
}

///|
pub fn syllabify_json(word : String) -> String {
  let sb = StringBuilder::new()
  sb.write_char('[')
  for i, s in syllabify(word) {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_char('[')
    for j, u in s {
      if j > 0 {
        sb.write_char(',')
      }
      sb.write_string(jstr(u))
    }
    sb.write_char(']')
  }
  sb.write_char(']')
  sb.to_string()
}

///|
fn opt_acc(a : (Int32, String)?) -> String {
  match a {
    Some((p, k)) => "[" + p.to_string() + "," + jstr(k) + "]"
    None => "null"
  }
}

///|
/// {"syllables", "accent", "accent_ok", "recessive"} for one word.
pub fn word_json(word : String) -> String {
  let ok = match accent_ok(word) {
    Some(true) => "true"
    Some(false) => "false"
    None => "null"
  }
  "{\"syllables\":" +
  syllabify_json(word) +
  ",\"accent\":" +
  opt_acc(accent(word)) +
  ",\"accent_ok\":" +
  ok +
  ",\"recessive\":" +
  opt_acc(recessive_accent(word)) +
  "}"
}
