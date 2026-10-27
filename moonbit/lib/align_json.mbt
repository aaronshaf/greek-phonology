// JSON boundary for align_phones. The page passes one object and reads one object.
// Bad input returns an empty take and does not throw.

///|
priv enum AVal {
  ANull
  ABool(Bool)
  ANum(Double)
  AStr(String)
  AArr(Array[AVal])
  AObj(Array[(String, AVal)])
}

///|
fn aws(c : Char) -> Bool {
  c == ' ' || c == '\n' || c == '\r' || c == '\t'
}

///|
fn askip(cs : Array[Char], i : Int32) -> Int32 {
  let mut j = i
  while j < cs.length() && aws(cs[j]) {
    j = j + 1
  }
  j
}

///|
fn ahex(c : Char) -> Int32 {
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
fn aword(cs : Array[Char], i : Int32, w : String) -> Bool {
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
fn apstr(cs : Array[Char], i0 : Int32) -> (AVal, Int32)? {
  if i0 >= cs.length() || cs[i0] != '"' {
    return None
  }
  let mut j = i0 + 1
  let acc = StringBuilder()
  while j < cs.length() {
    let c = cs[j]
    if c == '"' {
      return Some((AStr(acc.to_string()), j + 1))
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
          let h = ahex(cs[j + 2 + k])
          if h < 0 {
            return None
          }
          n = n * 16 + h
        }
        acc.write_char(Int32::unsafe_to_char(n))
        j = j + 6
      } else {
        let ch = if e == 'n' {
          '\n'
        } else if e == 'r' {
          '\r'
        } else if e == 't' {
          '\t'
        } else if e == 'b' {
          '\u{0008}'
        } else if e == 'f' {
          '\u{000C}'
        } else {
          e
        }
        acc.write_char(ch)
        j = j + 2
      }
    } else {
      acc.write_char(c)
      j = j + 1
    }
  }
  None
}

///|
fn apnum(cs : Array[Char], i0 : Int32) -> (AVal, Int32)? {
  let mut j = i0
  if j < cs.length() && (cs[j] == '-' || cs[j] == '+') {
    j = j + 1
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
    j = j + 1
  }
  if !saw {
    return None
  }
  let mut s = ""
  for k in start..<j {
    s = s + cs[k].to_string()
  }
  Some((ANum(@string.parse_double(s)), j)) catch {
    _ => None
  }
}

///|
fn apval(cs : Array[Char], i0 : Int32) -> (AVal, Int32)? {
  let i = askip(cs, i0)
  if i >= cs.length() {
    return None
  }
  let c = cs[i]
  if c == '"' {
    apstr(cs, i)
  } else if c == '{' {
    apobj(cs, i)
  } else if c == '[' {
    aparr(cs, i)
  } else if aword(cs, i, "true") {
    Some((ABool(true), i + 4))
  } else if aword(cs, i, "false") {
    Some((ABool(false), i + 5))
  } else if aword(cs, i, "null") {
    Some((ANull, i + 4))
  } else {
    apnum(cs, i)
  }
}

///|
fn aparr(cs : Array[Char], i0 : Int32) -> (AVal, Int32)? {
  let mut j = askip(cs, i0 + 1)
  let xs : Array[AVal] = []
  if j < cs.length() && cs[j] == ']' {
    return Some((AArr(xs), j + 1))
  }
  while j < cs.length() {
    match apval(cs, j) {
      None => return None
      Some((v, k)) => {
        xs.push(v)
        j = askip(cs, k)
        if j < cs.length() && cs[j] == ',' {
          j = askip(cs, j + 1)
        } else if j < cs.length() && cs[j] == ']' {
          return Some((AArr(xs), j + 1))
        } else {
          return None
        }
      }
    }
  }
  None
}

///|
fn apobj(cs : Array[Char], i0 : Int32) -> (AVal, Int32)? {
  let mut j = askip(cs, i0 + 1)
  let fields : Array[(String, AVal)] = []
  if j < cs.length() && cs[j] == '}' {
    return Some((AObj(fields), j + 1))
  }
  while j < cs.length() {
    match apstr(cs, askip(cs, j)) {
      None => return None
      Some((keyv, k1)) => {
        let key = match keyv {
          AStr(s) => s
          _ => ""
        }
        let colon = askip(cs, k1)
        if colon >= cs.length() || cs[colon] != ':' {
          return None
        }
        match apval(cs, colon + 1) {
          None => return None
          Some((v, k2)) => {
            fields.push((key, v))
            j = askip(cs, k2)
            if j < cs.length() && cs[j] == ',' {
              j = askip(cs, j + 1)
            } else if j < cs.length() && cs[j] == '}' {
              return Some((AObj(fields), j + 1))
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
fn aparse(s : String) -> AVal? {
  let cs = s.to_array()
  match apval(cs, 0) {
    None => None
    Some((v, j)) => if askip(cs, j) == cs.length() { Some(v) } else { None }
  }
}

///|
fn afields(v : AVal) -> Array[(String, AVal)]? {
  match v {
    AObj(xs) => Some(xs)
    _ => None
  }
}

///|
fn afind(fields : Array[(String, AVal)], key : String) -> AVal? {
  for pair in fields {
    let (k, v) = pair
    if k == key {
      return Some(v)
    }
  }
  None
}

///|
fn anum(v : AVal) -> Double? {
  match v {
    ANum(n) => Some(n)
    AStr(s) => Some(@string.parse_double(s)) catch { _ => None }
    _ => None
  }
}

///|
fn aint(v : AVal) -> Int32? {
  match anum(v) {
    Some(n) => Some(n.to_int())
    None => None
  }
}

///|
fn astr(v : AVal) -> String? {
  match v {
    AStr(s) => Some(s)
    _ => None
  }
}

///|
fn abool(v : AVal) -> Bool? {
  match v {
    ABool(b) => Some(b)
    ANum(n) => Some(n != 0.0)
    _ => None
  }
}

///|
fn anum_list(v : AVal) -> Array[Double]? {
  match v {
    AArr(xs) => {
      let out : Array[Double] = []
      for item in xs {
        match anum(item) {
          Some(n) => out.push(n)
          None => return None
        }
      }
      Some(out)
    }
    _ => None
  }
}

///|
fn aint_list(v : AVal) -> Array[Int32]? {
  match v {
    AArr(xs) => {
      let out : Array[Int32] = []
      for item in xs {
        match aint(item) {
          Some(n) => out.push(n)
          None => return None
        }
      }
      Some(out)
    }
    _ => None
  }
}

///|
fn astr_list(v : AVal) -> Array[String]? {
  match v {
    AArr(xs) => {
      let out : Array[String] = []
      for item in xs {
        match astr(item) {
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
fn abool_list(v : AVal) -> Array[Bool]? {
  match v {
    AArr(xs) => {
      let out : Array[Bool] = []
      for item in xs {
        match abool(item) {
          Some(b) => out.push(b)
          None => return None
        }
      }
      Some(out)
    }
    _ => None
  }
}

///|
fn aint_list_list(v : AVal) -> Array[Array[Int32]]? {
  match v {
    AArr(xs) => {
      let out : Array[Array[Int32]] = []
      for item in xs {
        match aint_list(item) {
          Some(xs2) => out.push(xs2)
          None => return None
        }
      }
      Some(out)
    }
    _ => None
  }
}

///|
fn fnum(
  fields : Array[(String, AVal)],
  key : String,
  fallback : Double,
) -> Double {
  match afind(fields, key) {
    Some(v) =>
      match anum(v) {
        Some(n) => n
        None => fallback
      }
    None => fallback
  }
}

///|
fn fint(
  fields : Array[(String, AVal)],
  key : String,
  fallback : Int32,
) -> Int32 {
  match afind(fields, key) {
    Some(v) =>
      match aint(v) {
        Some(n) => n
        None => fallback
      }
    None => fallback
  }
}

///|
fn params_of(v : AVal?, scheme : String) -> AlignParams {
  let base = align_params_default()
  match v {
    None => base.with_scheme(scheme)
    Some(raw) =>
      match afields(raw) {
        None => base.with_scheme(scheme)
        Some(f) => {
          let mode = match afind(f, "mode") {
            Some(AStr(s)) => s
            _ => ""
          }
          let sch = match afind(f, "scheme") {
            Some(AStr(s)) => s
            _ => scheme
          }
          {
            tau: fnum(f, "TAU", base.tau),
            ins: fnum(f, "INS", base.ins),
            qpk: fnum(f, "QPK", base.qpk),
            inslo: fnum(f, "INSLO", base.inslo),
            sublo: fnum(f, "SUBLO", base.sublo),
            rs: fnum(f, "RS", base.rs),
            sk: fnum(f, "SK", base.sk),
            back: fint(f, "BACK", base.back),
            floor: fnum(f, "FLOOR", base.floor),
            min_frac: fnum(f, "MIN_FRAC", base.min_frac),
            minc: fint(f, "MINC", base.minc),
            merge_gap: fint(f, "MERGE_GAP", base.merge_gap),
            win: fnum(f, "WIN", base.win),
            hop: fnum(f, "HOP", base.hop),
            edge: fnum(f, "EDGE", base.edge),
            plain: mode == "plain",
            scheme: sch,
            goal: match afind(f, "goal") {
              Some(AStr(s)) => s
              _ => ""
            },
            near_miss: match afind(f, "nearMiss") {
              Some(v) =>
                match abool(v) {
                  Some(b) => b
                  None => true
                }
              None =>
                match afind(f, "near_miss") {
                  Some(v) =>
                    match abool(v) {
                      Some(b) => b
                      None => true
                    }
                  None => true
                }
            },
            sub: match afind(f, "subCost") {
              Some(v) => sub_overrides(v)
              None =>
                match afind(f, "sub_cost") {
                  Some(v) => sub_overrides(v)
                  None => []
                }
            },
          }
        }
      }
  }
}

///|
fn sub_overrides(v : AVal) -> Array[SubOverride] {
  match v {
    AArr(xs) => {
      let out : Array[SubOverride] = []
      for item in xs {
        match item {
          AArr(pair) =>
            if pair.length() >= 3 {
              match (astr(pair[0]), astr(pair[1]), anum(pair[2])) {
                (Some(a), Some(b), Some(cost)) => out.push({ a, b, cost, })
                _ => ()
              }
            }
          _ => ()
        }
      }
      out
    }
    _ => []
  }
}

///|
fn lp_b64_of(fields : Array[(String, AVal)]) -> Array[Double]? {
  match afind(fields, "lpB64") {
    Some(AStr(s)) => Some(align_f32le_b64(s))
    _ =>
      match afind(fields, "lp_b64") {
        Some(AStr(s)) => Some(align_f32le_b64(s))
        _ => None
      }
  }
}

///|
fn window_of(v : AVal) -> AlignWindow? {
  match afields(v) {
    None => None
    Some(f) => {
      let data = match afind(f, "data") {
        Some(d) => anum_list(d)
        None =>
          match afind(f, "lp") {
            Some(d) => anum_list(d)
            None => None
          }
      }
      match data {
        None => None
        Some(lp) => {
          let frames = match afind(f, "T") {
            Some(n) =>
              match aint(n) {
                Some(t) => t
                None => 0
              }
            None =>
              match afind(f, "frames") {
                Some(n) =>
                  match aint(n) {
                    Some(t) => t
                    None => 0
                  }
                None => 0
              }
          }
          let width = match afind(f, "V") {
            Some(n) =>
              match aint(n) {
                Some(t) => t
                None => 0
              }
            None =>
              match afind(f, "width") {
                Some(n) =>
                  match aint(n) {
                    Some(t) => t
                    None => 0
                  }
                None => 0
              }
          }
          Some({
            start: fnum(f, "start", fnum(f, "start_s", 0.0)),
            frames,
            width,
            data: lp,
            spf: fnum(f, "spf", 0.02),
          })
        }
      }
    }
  }
}

///|
fn windows_of(v : AVal) -> Array[AlignWindow]? {
  match v {
    AArr(xs) => {
      let out : Array[AlignWindow] = []
      for item in xs {
        match window_of(item) {
          Some(w) => out.push(w)
          None => return None
        }
      }
      Some(out)
    }
    _ => None
  }
}

///|
fn lane_with_wof(lane : AlignLane, w_of : Array[Int32]) -> AlignLane {
  {
    tgt: lane.tgt,
    phones: lane.phones,
    ids: lane.ids,
    alts: lane.alts,
    opt: lane.opt,
    start: lane.start,
    wlen: lane.wlen,
    w_of,
  }
}

///|
fn lookup_id(vocab : Array[String], name : String) -> Int32 {
  for i in 0..<vocab.length() {
    if vocab[i] == name {
      return i
    }
  }
  0
}

///|
fn lane_of(v : AVal, vocab : Array[String]) -> AlignLane? {
  match afields(v) {
    None => None
    Some(f) => {
      let tgt = match afind(f, "tgt") {
        Some(x) => astr_list(x)
        None => None
      }
      match tgt {
        None => None
        Some(names) => {
          let phones = match afind(f, "phones") {
            Some(x) =>
              match astr_list(x) {
                Some(xs) => xs
                None => names
              }
            None => names
          }
          let ids = match afind(f, "ids") {
            Some(x) =>
              match aint_list(x) {
                Some(xs) => xs
                None => names.map(fn(p) { lookup_id(vocab, p) })
              }
            None => names.map(fn(p) { lookup_id(vocab, p) })
          }
          let alts = match afind(f, "alts") {
            Some(x) =>
              match aint_list_list(x) {
                Some(xs) => xs
                None => Array::make(names.length(), [])
              }
            None => Array::make(names.length(), [])
          }
          let opt = match afind(f, "opt") {
            Some(x) =>
              match abool_list(x) {
                Some(xs) => xs
                None => Array::make(names.length(), false)
              }
            None => Array::make(names.length(), false)
          }
          let start = match afind(f, "start") {
            Some(x) =>
              match aint_list(x) {
                Some(xs) => xs
                None => [0]
              }
            None => [0]
          }
          let wlen = match afind(f, "wlen") {
            Some(x) =>
              match aint_list(x) {
                Some(xs) => xs
                None => [names.length()]
              }
            None => [names.length()]
          }
          let lane = align_lane(names, phones, ids, alts, opt, start, wlen)
          let ready = match afind(f, "wOf") {
            Some(x) =>
              match aint_list(x) {
                Some(xs) =>
                  if xs.length() == names.length() {
                    lane_with_wof(lane, xs)
                  } else {
                    lane
                  }
                None => lane
              }
            None => lane
          }
          Some(ready)
        }
      }
    }
  }
}

///|
fn post_of(fields : Array[(String, AVal)]) -> AlignPost? {
  let nested = match afind(fields, "post") {
    Some(v) => afields(v)
    None => None
  }
  let src = match nested {
    Some(f) => f
    None => fields
  }
  let lp = match afind(src, "lp") {
    Some(v) => anum_list(v)
    None => lp_b64_of(src)
  }
  match lp {
    None => None
    Some(data) => {
      let width = match afind(src, "V") {
        Some(v) =>
          match aint(v) {
            Some(n) => n
            None => 0
          }
        None =>
          match afind(src, "width") {
            Some(v) =>
              match aint(v) {
                Some(n) => n
                None => 0
              }
            None => 0
          }
      }
      let frames = match afind(src, "T") {
        Some(v) =>
          match aint(v) {
            Some(n) => n
            None => 0
          }
        None =>
          match afind(src, "frames") {
            Some(v) =>
              match aint(v) {
                Some(n) => n
                None => 0
              }
            None => if width > 0 { data.length() / width } else { 0 }
          }
      }
      let spf = fnum(src, "spf", 0.02)
      Some({ lp: data, frames, width, spf, })
    }
  }
}

///|
fn jpct(score : Int32) -> String {
  let s = if score < 0 { 0 } else if score > 100 { 100 } else { score }
  let whole = s / 100
  let frac = s % 100
  let digits = if frac < 10 { "0" + frac.to_string() } else { frac.to_string() }
  whole.to_string() + "." + digits
}

///|
fn jint_list(xs : Array[Int32]) -> String {
  let sb = StringBuilder()
  sb.write_char('[')
  for i, x in xs {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(x.to_string())
  }
  sb.write_char(']')
  sb.to_string()
}

///|
fn jdbl_list(xs : Array[Double]) -> String {
  let sb = StringBuilder()
  sb.write_char('[')
  for i, x in xs {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(jnum(x))
  }
  sb.write_char(']')
  sb.to_string()
}

///|
fn hit_json(p : PhoneHit) -> String {
  if p.absent && p.optional {
    "{\"target\":" + jstr(p.target) + ",\"score\":null,\"optional\":true}"
  } else if !p.has_span {
    "{\"target\":" +
    jstr(p.target) +
    ",\"score\":" +
    p.score.to_string() +
    ",\"heard\":null}"
  } else {
    "{\"target\":" +
    jstr(p.target) +
    ",\"score\":" +
    p.score.to_string() +
    ",\"heard\":" +
    jstr(p.heard) +
    ",\"h\":" +
    p.h.to_string() +
    ",\"t0\":" +
    p.t0.to_string() +
    ",\"t1\":" +
    p.t1.to_string() +
    ",\"shared\":" +
    jbool(p.shared) +
    "}"
  }
}

///|
fn hits_json(xs : Array[PhoneHit]) -> String {
  let sb = StringBuilder()
  sb.write_char('[')
  for i, p in xs {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(hit_json(p))
  }
  sb.write_char(']')
  sb.to_string()
}

///|
fn word_out(w : WordScore) -> String {
  let ph = if w.has_ph { hits_json(w.ph) } else { "null" }
  let t0 = if w.has_time { jnum(w.t0) } else { "null" }
  let t1 = if w.has_time { jnum(w.t1) } else { "null" }
  "{\"i\":" +
  w.i.to_string() +
  ",\"score\":" +
  w.score.to_string() +
  ",\"credit\":" +
  jpct(w.score) +
  ",\"level\":" +
  jstr(credit_level(w.score.to_double() / 100.0, CreditScale::standard())) +
  ",\"attempts\":" +
  w.attempts.to_string() +
  ",\"evidence\":" +
  jbool(w.evidence) +
  ",\"ph\":" +
  ph +
  ",\"lo\":" +
  w.lo.to_string() +
  ",\"hi\":" +
  w.hi.to_string() +
  ",\"t0\":" +
  t0 +
  ",\"t1\":" +
  t1 +
  "}"
}

///|
fn token_out(t : HeardToken) -> String {
  "{\"id\":" +
  t.id.to_string() +
  ",\"p\":" +
  jstr(t.p) +
  ",\"t0\":" +
  t.t0.to_string() +
  ",\"t1\":" +
  t.t1.to_string() +
  ",\"pk\":" +
  jnum(t.pk) +
  ",\"fr\":" +
  jint_list(t.fr) +
  "}"
}

///|
fn pair_out(p : AlignPair) -> String {
  let shared = if p.shared { ",\"shared\":true" } else { "" }
  "{\"h\":" +
  p.h.to_string() +
  ",\"j\":" +
  p.j.to_string() +
  ",\"att\":" +
  p.att.to_string() +
  shared +
  "}"
}

///|
fn align_out(al : TokenAlign) -> String {
  let sb = StringBuilder()
  sb.write_string("{\"pairs\":[")
  for i, p in al.pairs {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(pair_out(p))
  }
  sb.write_string(
    "],\"k\":" +
    al.k.to_string() +
    ",\"cost\":" +
    jnum(al.cost) +
    ",\"atts\":" +
    al.atts.to_string() +
    ",\"heardN\":" +
    al.heard_n.to_string() +
    "}",
  )
  sb.to_string()
}

///|
fn take_out(r : TakeScore) -> String {
  let sb = StringBuilder()
  sb.write_string("{\"words\":[")
  for i, w in r.words {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(word_out(w))
  }
  sb.write_string(
    "],\"overall\":" +
    r.overall.to_string() +
    ",\"overallCredit\":" +
    jpct(r.overall) +
    ",\"overallLevel\":" +
    jstr(credit_level(r.overall.to_double() / 100.0, CreditScale::standard())) +
    ",\"cursorWord\":" +
    r.cursor_word.to_string() +
    ",\"lastPhone\":" +
    r.last_phone.to_string() +
    ",\"attempts\":" +
    r.attempts.to_string() +
    ",\"tokens\":[",
  )
  for i, t in r.tokens {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(token_out(t))
  }
  sb.write_string(
    "],\"cost\":" +
    jnum(r.cost) +
    ",\"align\":" +
    align_out(r.align) +
    ",\"attemptCredit\":" +
    attempt_credit_out(r.attempt_credit) +
    "}",
  )
  sb.to_string()
}

///|
fn attempt_credit_out(xs : Array[AttemptCredit]) -> String {
  let sb = StringBuilder()
  sb.write_char('[')
  for i, a in xs {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(
      "{\"w\":" +
      a.w.to_string() +
      ",\"att\":" +
      a.att.to_string() +
      ",\"credited\":" +
      a.credited.to_string() +
      ",\"score\":" +
      a.score.to_string() +
      "}",
    )
  }
  sb.write_char(']')
  sb.to_string()
}

///|
fn post_out(p : AlignPost) -> String {
  "{\"lp\":" +
  jdbl_list(p.lp) +
  ",\"T\":" +
  p.frames.to_string() +
  ",\"V\":" +
  p.width.to_string() +
  ",\"spf\":" +
  jnum(p.spf) +
  "}"
}

///|
fn wants_stored_post(f : Array[(String, AVal)]) -> Bool {
  match afind(f, "postRef") {
    Some(v) =>
      match abool(v) {
        Some(b) => b
        None => false
      }
    None =>
      match afind(f, "post_ref") {
        Some(v) =>
          match abool(v) {
            Some(b) => b
            None => false
          }
        None => false
      }
  }
}

///|
fn lane_prm_of(v : AVal, base : AlignParams) -> AlignParams {
  match afields(v) {
    None => base
    Some(f) => {
      let sch = match afind(f, "scheme") {
        Some(AStr(s)) => if s == "" { base.scheme } else { s }
        _ => base.scheme
      }
      match afind(f, "params") {
        Some(_) => params_of(afind(f, "params"), sch)
        None => if sch == base.scheme { base } else { base.with_scheme(sch) }
      }
    }
  }
}

///|
fn parsed_lanes(
  v : AVal,
  vocab : Array[String],
  base : AlignParams,
) -> (Array[AlignLane], Array[AlignParams])? {
  match v {
    AArr(xs) => {
      let lanes : Array[AlignLane] = []
      let prms : Array[AlignParams] = []
      for item in xs {
        match lane_of(item, vocab) {
          None => return None
          Some(ln) => {
            lanes.push(ln)
            prms.push(lane_prm_of(item, base))
          }
        }
      }
      Some((lanes, prms))
    }
    _ => None
  }
}

///|
fn lanes_out(batch : LaneBatch) -> String {
  let sb = StringBuilder()
  sb.write_string("{\"tokens\":[")
  for i, t in batch.tokens {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(token_out(t))
  }
  sb.write_string("],\"takes\":[")
  for i, take in batch.takes {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(take_out(take))
  }
  sb.write_string("]}")
  sb.to_string()
}

///|
/// One JSON call for stitch and score. See `score_take`.
/// `lanes` scores every lane against one soft decode. `postRef: true` reads
/// the matrix stored by `align_set_post` instead of a JSON number list.
/// `lpB64` is little-endian float32 in base64.
pub fn align_phones_json(spec : String) -> String {
  match aparse(spec) {
    None => take_out(empty_take())
    Some(v) =>
      match afields(v) {
        None => take_out(empty_take())
        Some(f) => {
          let scheme = match afind(f, "scheme") {
            Some(AStr(s)) => s
            _ => ""
          }
          let prm = params_of(afind(f, "params"), scheme)
          let wins = match afind(f, "windows") {
            Some(w) => windows_of(w)
            None => None
          }
          match wins {
            Some(ws) => {
              let total = fnum(f, "totalSec", fnum(f, "total_sec", 0.0))
              let stitched = stitch(ws, total, prm)
              let has_lane = match afind(f, "lane") {
                Some(_) => true
                None => false
              }
              let has_lanes = match afind(f, "lanes") {
                Some(AArr(xs)) => xs.length() > 0
                _ => false
              }
              if !has_lane && !has_lanes {
                post_out(stitched)
              } else {
                score_spec(f, Some(stitched), prm)
              }
            }
            None => score_spec(f, None, prm)
          }
        }
      }
  }
}

///|
fn resolve_post(f : Array[(String, AVal)], stitched : AlignPost?) -> AlignPost? {
  match stitched {
    Some(p) => Some(p)
    None => if wants_stored_post(f) { align_stored_post() } else { post_of(f) }
  }
}

///|
fn score_spec(
  f : Array[(String, AVal)],
  stitched : AlignPost?,
  prm : AlignParams,
) -> String {
  let vocab = match afind(f, "vocab") {
    Some(v) =>
      match astr_list(v) {
        Some(xs) => xs
        None => [""]
      }
    None => [""]
  }
  let post = resolve_post(f, stitched)
  let many = match afind(f, "lanes") {
    Some(v) => parsed_lanes(v, vocab, prm)
    None => None
  }
  match (post, many) {
    (Some(p), Some((lanes, prms))) =>
      if lanes.length() > 0 {
        return lanes_out(score_lanes(p, lanes, vocab, prm, prms))
      }
    _ => ()
  }
  let lane = match afind(f, "lane") {
    Some(v) => lane_of(v, vocab)
    None => None
  }
  match (post, lane) {
    (Some(p), Some(ln)) => take_out(score_take(p, ln, vocab, prm))
    _ => take_out(empty_take())
  }
}
