// Opt-in helpers for a recognizer posterior. ipa(), word_json, and detect do not call them.
// hearing_credit uses phone_credit for the numbers, then adds the learner note.
// A learner goal still does not change that note.

///|
pub let credit_level_close : Double = 8.0

///|
pub let credit_level_light : Double = 30.0

///|
pub let credit_level_medium : Double = 60.0

///|
pub let credit_level_clear : Double = 85.0

///|
pub let credit_level_deepest : Double = 95.0

///|
/// Percent cutoffs for `credit_level`. `combined` is still a fraction in [0, 1].
/// A consumer passes its own scale to override these; `standard` is the default.
pub(all) struct CreditScale {
  close : Double
  light : Double
  medium : Double
  clear : Double
  deepest : Double
}

///|
pub fn CreditScale::standard() -> CreditScale {
  {
    close: credit_level_close,
    light: credit_level_light,
    medium: credit_level_medium,
    clear: credit_level_clear,
    deepest: credit_level_deepest,
  }
}

///|
pub(all) struct HearingCredit {
  exact : Double
  near : Double
  combined : Double
  best : CreditHit?
  note : String
}

///|
fn empty_hearing() -> HearingCredit {
  { exact: 0.0, near: 0.0, combined: 0.0, best: None, note: "" }
}

///|
fn blank_unit(ph : Array[String], alts : Array[G2pAlt]) -> G2pUnit {
  {
    t: "",
    k: "",
    ph,
    from: 0,
    to: 0,
    restored: false,
    asp: false,
    ctx: "",
    alts,
  }
}

///|
/// Short scheme id for a page id or a long id.
/// The playground page (`docs/index.html`) uses `koine`, `attic`, `erasmian`, and `modern`.
/// The distance table also accepts `grc-koine-reconstructed`, `grc-attic-restored`,
/// `grc-modern-style`, `grc-erasmian-us`, and the same words in ids such as
/// `attic-reconstructed`, `koine-reconstructed`, `modern-style`, and `erasmian-us`.
/// An unknown id returns "". `ipa` is unchanged: pass this result into it.
pub fn scheme_id(name : String) -> String {
  scheme_short(name)
}

///|
fn reached(pct : Double, cut : Double) -> Bool {
  pct + 0.0000001 >= cut
}

///|
/// Map a combined credit in [0, 1] to a display level.
/// Cutoffs are percents: below `close` is "none", then "close tint", "light",
/// "medium", "clear", and "deepest" at or above `deepest`.
/// The default cutoffs are `credit_level_close` (8), `credit_level_light` (30),
/// `credit_level_medium` (60), `credit_level_clear` (85), and `credit_level_deepest` (95).
pub fn credit_level(combined : Double, scale : CreditScale) -> String {
  let pct = combined * 100.0
  if !reached(pct, scale.close) {
    "none"
  } else if !reached(pct, scale.light) {
    "close tint"
  } else if !reached(pct, scale.medium) {
    "light"
  } else if !reached(pct, scale.clear) {
    "medium"
  } else if !reached(pct, scale.deepest) {
    "clear"
  } else {
    "deepest"
  }
}

///|
fn parse_pct(s : String, fallback : Double) -> Double {
  if s == "" {
    return fallback
  }
  try {
    @string.parse_double(s)
  } catch {
    _ => fallback
  }
}

///|
fn parse_scale(s : String) -> CreditScale {
  let d = CreditScale::standard()
  if s == "" {
    return d
  }
  let parts = s.split(",").map(fn(v) { v.to_owned() }).collect()
  fn at(i : Int, fallback : Double) -> Double {
    if i >= parts.length() {
      fallback
    } else {
      parse_pct(parts[i], fallback)
    }
  }
  {
    close: at(0, d.close),
    light: at(1, d.light),
    medium: at(2, d.medium),
    clear: at(3, d.clear),
    deepest: at(4, d.deepest),
  }
}

///|
fn jwhole(d : Double) -> String {
  d.round().to_int().to_string()
}

///|
pub fn credit_scale_json() -> String {
  let s = CreditScale::standard()
  "{\"close\":" +
  jwhole(s.close) +
  ",\"light\":" +
  jwhole(s.light) +
  ",\"medium\":" +
  jwhole(s.medium) +
  ",\"clear\":" +
  jwhole(s.clear) +
  ",\"deepest\":" +
  jwhole(s.deepest) +
  "}"
}

///|
pub fn credit_level_json(combined : Double, scale : String) -> String {
  jstr(credit_level(combined, parse_scale(scale)))
}

///|
fn candidates_of_lists(
  phones : Array[String],
  weights : Array[Double],
) -> Array[(String, Double)] {
  let out : Array[(String, Double)] = []
  let n = if phones.length() < weights.length() {
    phones.length()
  } else {
    weights.length()
  }
  for i in 0..<n {
    out.push((phones[i], weights[i]))
  }
  out
}

///|
fn lists_of(candidates : Array[(String, Double)]) -> (Array[String], Array[Double]) {
  let phones : Array[String] = []
  let weights : Array[Double] = []
  for item in candidates {
    let (p, w) = item
    phones.push(p)
    weights.push(w)
  }
  (phones, weights)
}

///|
fn exact_note(
  target : String,
  phones : Array[String],
  weights : Array[Double],
  scheme : String,
  goal : String,
) -> String {
  let n = if phones.length() < weights.length() {
    phones.length()
  } else {
    weights.length()
  }
  let mut best_p = -1.0
  let mut best_phone = ""
  for i in 0..<n {
    if weights[i] > best_p {
      let d = phone_distance(target, phones[i], scheme, goal)
      if d.tier == "accurate" {
        best_p = weights[i]
        best_phone = phones[i]
      }
    }
  }
  if best_phone == "" {
    "That is the target sound."
  } else {
    phone_distance(target, best_phone, scheme, goal).note
  }
}

///|
fn alt_note(unit : G2pUnit, index : Int, heard : String) -> String? {
  if index < 0 || index >= unit.ph.length() || heard == unit.ph[index] {
    return None
  }
  for alt in unit.alts {
    if alt.heard.length() == unit.ph.length() && alt.heard[index] == heard {
      let mut ok = true
      for j in 0..<unit.ph.length() {
        if j != index && alt.heard[j] != unit.ph[j] {
          ok = false
        }
      }
      if ok {
        return Some(alt.note)
      }
    }
  }
  None
}

///|
fn hearing_of(
  target : String,
  phones : Array[String],
  weights : Array[Double],
  scheme : String,
  goal : String,
  curated : String?,
) -> HearingCredit {
  let c = phone_credit(target, phones, weights, scheme, goal)
  let note = match c.best {
    Some(b) =>
      match curated {
        Some(n) => n
        None => phone_distance(target, b.phone, scheme, goal).note
      }
    None =>
      if c.exact > 0.0 {
        exact_note(target, phones, weights, scheme, goal)
      } else {
        ""
      }
  }
  { exact: c.exact, near: c.near, combined: c.combined, best: c.best, note, }
}

///|
/// Combined credit for one target phone, plus the note for the best alternate.
/// `candidates` is the recognizer list of (phone, probability). The numbers match
/// `phone_credit`. The note is the distance-table note for `best`, or the accurate
/// note when the credit is exact and there is no near miss.
pub fn hearing_credit(
  target : String,
  candidates : Array[(String, Double)],
  scheme : String,
  goal : String,
) -> HearingCredit {
  let (phones, weights) = lists_of(candidates)
  hearing_of(target, phones, weights, scheme, goal, None)
}

///|
/// Same as `hearing_credit` for one phone of a grapheme unit.
/// `at` < 0 scores every phone in the unit and keeps the highest combined credit
/// (a curated alternate wins a tie). `at` >= 0 scores only that phone.
/// When the best near phone is a curated alternate of that phone, `note` is the
/// alternate's note. Otherwise it is the distance-table note.
pub fn unit_hearing_credit(
  unit : G2pUnit,
  candidates : Array[(String, Double)],
  scheme : String,
  goal : String,
  at : Int,
) -> HearingCredit {
  if unit.ph.length() == 0 {
    return empty_hearing()
  }
  let (phones, weights) = lists_of(candidates)
  let mut lo = 0
  let mut hi = unit.ph.length()
  if at >= 0 {
    if at >= unit.ph.length() {
      return empty_hearing()
    }
    lo = at
    hi = at + 1
  }
  let mut chosen = empty_hearing()
  let mut chosen_cur = false
  let mut seen = false
  for i in lo..<hi {
    let curated = match phone_credit(unit.ph[i], phones, weights, scheme, goal).best {
      Some(b) => alt_note(unit, i, b.phone)
      None => None
    }
    let h = hearing_of(unit.ph[i], phones, weights, scheme, goal, curated)
    let cur = curated is Some(_)
    let take = if !seen {
      true
    } else if h.combined > chosen.combined + 0.000000000001 {
      true
    } else if chosen.combined > h.combined + 0.000000000001 {
      false
    } else {
      cur && !chosen_cur
    }
    if take {
      chosen = h
      chosen_cur = cur
      seen = true
    }
  }
  chosen
}

///|
priv enum JVal {
  JNull
  JNum(Double)
  JStr(String)
  JArr(Array[JVal])
  JObj(Array[(String, JVal)])
}

///|
fn is_json_ws(c : Char) -> Bool {
  c == ' ' || c == '\n' || c == '\r' || c == '\t'
}

///|
fn skip_ws(cs : Array[Char], i : Int) -> Int {
  let mut j = i
  while j < cs.length() && is_json_ws(cs[j]) {
    j += 1
  }
  j
}

///|
fn hex_val(c : Char) -> Int {
  if c >= '0' && c <= '9' {
    c.to_int() - '0'.to_int()
  } else if c >= 'a' && c <= 'f' {
    c.to_int() - 'a'.to_int() + 10
  } else if c >= 'A' && c <= 'F' {
    c.to_int() - 'A'.to_int() + 10
  } else {
    -1
  }
}

///|
fn starts_word(cs : Array[Char], i : Int, w : String) -> Bool {
  let wd = w.to_array()
  if i + wd.length() > cs.length() {
    return false
  }
  for k in 0..<wd.length() {
    if cs[i + k] != wd[k] {
      return false
    }
  }
  true
}

///|
fn parse_str(cs : Array[Char], i0 : Int) -> (JVal, Int)? {
  if i0 >= cs.length() || cs[i0] != '"' {
    return None
  }
  let mut j = i0 + 1
  let mut acc = ""
  while j < cs.length() {
    let c = cs[j]
    if c == '"' {
      return Some((JStr(acc), j + 1))
    }
    if c == '\\' {
      if j + 1 >= cs.length() {
        return None
      }
      let e = cs[j + 1]
      if e == 'u' {
        if j + 6 > cs.length() {
          return None
        }
        let mut n = 0
        for k in 0..<4 {
          let h = hex_val(cs[j + 2 + k])
          if h < 0 {
            return None
          }
          n = n * 16 + h
        }
        acc = acc + Int32::unsafe_to_char(n).to_string()
        j += 6
      } else {
        let ch = if e == 'n' {
          '\n'
        } else if e == 'r' {
          '\r'
        } else if e == 't' {
          '\t'
        } else {
          e
        }
        acc = acc + ch.to_string()
        j += 2
      }
    } else {
      acc = acc + c.to_string()
      j += 1
    }
  }
  None
}

///|
fn parse_num(cs : Array[Char], i0 : Int) -> (JVal, Int)? {
  let mut j = i0
  if j < cs.length() && (cs[j] == '-' || cs[j] == '+') {
    j += 1
  }
  let start = i0
  let mut saw = false
  while j < cs.length() {
    let c = cs[j]
    let ok = (c >= '0' && c <= '9') ||
      c == '.' ||
      c == 'e' ||
      c == 'E' ||
      c == '+' ||
      c == '-'
    if !ok {
      break
    }
    saw = true
    j += 1
  }
  if !saw {
    return None
  }
  let mut s = ""
  for k in start..<j {
    s = s + cs[k].to_string()
  }
  try {
    Some((JNum(@string.parse_double(s)), j))
  } catch {
    _ => None
  }
}

///|
fn parse_val(cs : Array[Char], i0 : Int) -> (JVal, Int)? {
  let i = skip_ws(cs, i0)
  if i >= cs.length() {
    return None
  }
  let c = cs[i]
  if c == '"' {
    parse_str(cs, i)
  } else if c == '{' {
    parse_obj(cs, i)
  } else if c == '[' {
    parse_arr(cs, i)
  } else if starts_word(cs, i, "true") {
    Some((JNull, i + 4))
  } else if starts_word(cs, i, "false") {
    Some((JNull, i + 5))
  } else if starts_word(cs, i, "null") {
    Some((JNull, i + 4))
  } else {
    parse_num(cs, i)
  }
}

///|
fn parse_arr(cs : Array[Char], i0 : Int) -> (JVal, Int)? {
  let mut j = skip_ws(cs, i0 + 1)
  let xs : Array[JVal] = []
  if j < cs.length() && cs[j] == ']' {
    return Some((JArr(xs), j + 1))
  }
  while j < cs.length() {
    match parse_val(cs, j) {
      None => return None
      Some((v, k)) => {
        xs.push(v)
        j = skip_ws(cs, k)
        if j < cs.length() && cs[j] == ',' {
          j = skip_ws(cs, j + 1)
        } else if j < cs.length() && cs[j] == ']' {
          return Some((JArr(xs), j + 1))
        } else {
          return None
        }
      }
    }
  }
  None
}

///|
fn parse_obj(cs : Array[Char], i0 : Int) -> (JVal, Int)? {
  let mut j = skip_ws(cs, i0 + 1)
  let fields : Array[(String, JVal)] = []
  if j < cs.length() && cs[j] == '}' {
    return Some((JObj(fields), j + 1))
  }
  while j < cs.length() {
    match parse_str(cs, skip_ws(cs, j)) {
      None => return None
      Some((keyv, k1)) => {
        let key = match keyv {
          JStr(s) => s
          _ => ""
        }
        let colon = skip_ws(cs, k1)
        if colon >= cs.length() || cs[colon] != ':' {
          return None
        }
        match parse_val(cs, colon + 1) {
          None => return None
          Some((v, k2)) => {
            fields.push((key, v))
            j = skip_ws(cs, k2)
            if j < cs.length() && cs[j] == ',' {
              j = skip_ws(cs, j + 1)
            } else if j < cs.length() && cs[j] == '}' {
              return Some((JObj(fields), j + 1))
            } else {
              return None
            }
          }
        }
      }
    }
  }
  None
}

///|
fn parse_json(s : String) -> JVal? {
  let cs = s.to_array()
  match parse_val(cs, 0) {
    None => None
    Some((v, j)) =>
      if skip_ws(cs, j) == cs.length() {
        Some(v)
      } else {
        None
      }
  }
}

///|
fn jstr_of(v : JVal) -> String? {
  match v {
    JStr(s) => Some(s)
    _ => None
  }
}

///|
fn jnum_of(v : JVal) -> Double? {
  match v {
    JNum(n) => Some(n)
    JStr(s) =>
      try {
        Some(@string.parse_double(s))
      } catch {
        _ => None
      }
    _ => None
  }
}

///|
fn field(fields : Array[(String, JVal)], key : String) -> JVal? {
  for pair in fields {
    let (k, v) = pair
    if k == key {
      return Some(v)
    }
  }
  None
}

///|
fn candidates_of_json(v : JVal) -> Array[(String, Double)] {
  let out : Array[(String, Double)] = []
  match v {
    JArr(xs) =>
      for item in xs {
        match item {
          JObj(fields) => {
            let phone = match field(fields, "phone") {
              Some(p) => jstr_of(p)
              None => None
            }
            let weight = match field(fields, "p") {
              Some(w) => jnum_of(w)
              None =>
                match field(fields, "probability") {
                  Some(w) => jnum_of(w)
                  None =>
                    match field(fields, "weight") {
                      Some(w) => jnum_of(w)
                      None => None
                    }
                }
            }
            match (phone, weight) {
              (Some(p), Some(w)) => out.push((p, w))
              _ => ()
            }
          }
          JArr(pair) =>
            if pair.length() >= 2 {
              match (jstr_of(pair[0]), jnum_of(pair[1])) {
                (Some(p), Some(w)) => out.push((p, w))
                _ => ()
              }
            }
          _ => ()
        }
      }
    _ => ()
  }
  out
}

///|
fn parse_candidates(s : String) -> Array[(String, Double)] {
  let cs = s.to_array()
  let i = skip_ws(cs, 0)
  if i >= cs.length() {
    return []
  }
  if cs[i] == '[' {
    match parse_json(s) {
      Some(v) => candidates_of_json(v)
      None => []
    }
  } else {
    let (phones, weights) = parse_posterior(s)
    candidates_of_lists(phones, weights)
  }
}

///|
fn str_list(v : JVal) -> Array[String]? {
  match v {
    JArr(xs) => {
      let out : Array[String] = []
      for item in xs {
        match jstr_of(item) {
          Some(s) => out.push(s)
          None => return None
        }
      }
      Some(out)
    }
    _ => None
  }
}

///|
fn unit_from_json(s : String) -> G2pUnit {
  match parse_json(s) {
    Some(JObj(fields)) => {
      let ph = match field(fields, "ph") {
        Some(v) =>
          match str_list(v) {
            Some(xs) => xs
            None => []
          }
        None =>
          match field(fields, "phones") {
            Some(v) =>
              match str_list(v) {
                Some(xs) => xs
                None => []
              }
            None => []
          }
      }
      let alts : Array[G2pAlt] = []
      match field(fields, "alts") {
        Some(JArr(xs)) =>
          for item in xs {
            match item {
              JObj(af) => {
                let heard = match field(af, "heard") {
                  Some(v) =>
                    match str_list(v) {
                      Some(xs) => xs
                      None => []
                    }
                  None => []
                }
                let note = match field(af, "note") {
                  Some(v) =>
                    match jstr_of(v) {
                      Some(n) => n
                      None => ""
                    }
                  None => ""
                }
                if heard.length() > 0 {
                  alts.push({ heard, tier: "", d: 0.0, note, src: "" })
                }
              }
              _ => ()
            }
          }
        _ => ()
      }
      blank_unit(ph, alts)
    }
    _ => blank_unit([], [])
  }
}

///|
fn hearing_json(h : HearingCredit) -> String {
  let best = match h.best {
    None => "null"
    Some(b) =>
      "{\"phone\":" +
      jstr(b.phone) +
      ",\"p\":" +
      jdec3(b.p) +
      ",\"sim\":" +
      jdec3(b.sim) +
      ",\"d\":" +
      jdec3(b.d) +
      ",\"tier\":" +
      jstr(b.tier) +
      "}"
  }
  "{\"exact\":" +
  jdec3(h.exact) +
  ",\"near\":" +
  jdec3(h.near) +
  ",\"combined\":" +
  jdec3(h.combined) +
  ",\"best\":" +
  best +
  ",\"note\":" +
  jstr(h.note) +
  "}"
}

///|
/// `posterior` is the existing `phone=weight` list, or a JSON array of
/// `{"phone","p"}` / `{"phone","probability"}` objects, or `[phone, probability]` pairs.
pub fn hearing_credit_posterior(
  target : String,
  posterior : String,
  scheme : String,
  goal : String,
) -> HearingCredit {
  hearing_credit(target, parse_candidates(posterior), scheme, goal)
}

///|
pub fn hearing_credit_json(
  target : String,
  posterior : String,
  scheme : String,
  goal : String,
) -> String {
  hearing_json(hearing_credit_posterior(target, posterior, scheme, goal))
}

///|
fn parse_at(s : String) -> Int {
  if s == "" {
    return -1
  }
  try {
    @string.parse_double(s).round().to_int()
  } catch {
    _ => -1
  }
}

///|
pub fn unit_hearing_credit_json(
  unit_json : String,
  posterior : String,
  scheme : String,
  goal : String,
  at : String,
) -> String {
  let unit = unit_from_json(unit_json)
  let h = unit_hearing_credit(
    unit,
    parse_candidates(posterior),
    scheme,
    goal,
    parse_at(at),
  )
  hearing_json(h)
}
