// Opt-in reliability weights for the on-device model ft-AC-20mb-lo.
// ipa(), phone_distance, and alignment do not call this.
//
// Weight is how much a miss counts. 1 trusts the miss fully. A lower weight
// down-weights it, because the model often misses that phone on a correct
// reading. The number is a Wilson 95% lower bound, shrunk toward a parent
// so a thin count cannot swing it. The rung is position or stress, then the
// phone, then the phone class, then a neutral 0.500.
//
// Modern reads the FLEURS rows. Attic, Koine, and Erasmian read the Attic
// rows. There is no Koine test set. A phone the Attic table does not have
// backs off to the Attic class pool.

///|
pub(all) struct TolContext {
  position : String
  stress : String
}

///|
pub(all) struct Tolerance {
  weight : Double
  accept : Array[String]
  rung : String
  band : String
  n : Int32
  set : String
  model : String
  sha256 : String
  data : String
}

///|
pub(all) struct TolPhone {
  phone : String
  position : String
  stress : String
  weight : Double
  accept : Array[String]
  rung : String
  band : String
  miss : Double
}

///|
pub(all) struct TolUnit {
  t : String
  k : String
  from : Int32
  to : Int32
  weight : Double
  band : String
  phones : Array[TolPhone]
  group : String
  group_weight : Double
  group_accept : Array[String]
}

///|
pub(all) struct TolWord {
  text : String
  phones : Int32
  scored : Int32
  penalty : Double
  units : Array[TolUnit]
}

///|
pub fn TolContext::plain() -> TolContext {
  { position: "", stress: "", }
}

///|
pub fn TolContext::of(position : String, stress : String) -> TolContext {
  { position, stress, }
}

///|
fn tol_lemmas() -> Bool {
  @kernel.tol_defaults() &&
  @kernel.tol_sparse_position_backs_off() &&
  @kernel.tol_aspirate_onset_low() &&
  @kernel.tol_lenient_pick(true, 400, true, 200) == 200 &&
  @kernel.tol_length_miss_is_free(0) &&
  @kernel.tol_length_miss_is_free(1000)
}

///|
fn bound_n(n : Int32) -> Int32 {
  if n < 0 {
    0
  } else if n > 100000 {
    100000
  } else {
    n
  }
}

///|
fn bound_w(w : Int32) -> Int32 {
  if w < 0 {
    0
  } else if w > 1000 {
    1000
  } else {
    w
  }
}

///|
fn milli_double(m : Int32) -> Double {
  m.to_double() / 1000.0
}

///|
fn dec3(m : Int32) -> String {
  let neg = m < 0
  let v = if neg { 0 - m } else { m }
  let frac = v % 1000
  let digits = if frac < 10 {
    "00" + frac.to_string()
  } else if frac < 100 {
    "0" + frac.to_string()
  } else {
    frac.to_string()
  }
  let sign = if neg { "-" } else { "" }
  sign + (v / 1000).to_string() + "." + digits
}

///|
fn band_name(code : Int32) -> String {
  if code == 0 {
    "lenient"
  } else if code == 1 {
    "mixed"
  } else {
    "strict"
  }
}

///|
fn rung_name(src : Int32) -> String {
  match src {
    0 => "position"
    1 => "stress"
    2 => "position+stress"
    3 => "phone"
    4 => "class"
    _ => "default"
  }
}

///|
fn set_name(set : Int32) -> String {
  if set == 1 {
    "fleurs"
  } else if set == 0 {
    "attic"
  } else {
    ""
  }
}

///|
fn set_of(scheme : String) -> Int32 {
  let s = scheme_id(scheme)
  if s == "modern" {
    1
  } else if s == "attic" || s == "koine" || s == "erasmian" {
    0
  } else {
    -1
  }
}

///|
fn strip_length(phone : String) -> String {
  if !phone.has_suffix("ː") {
    return phone
  }
  let mut n = 0
  for _ in phone {
    n = n + 1
  }
  let sb = StringBuilder()
  let mut i = 0
  for c in phone {
    if i < n - 1 {
      sb.write_char(c)
    }
    i = i + 1
  }
  sb.to_string()
}

///|
fn class_of(phone : String) -> Int32 {
  let base = if phone.has_suffix("ː") { strip_length(phone) } else { phone }
  match base {
    "a"
    | "e"
    | "i"
    | "o"
    | "u"
    | "y"
    | "ɛ"
    | "ɔ"
    | "ɪ"
    | "ʊ"
    | "ai"
    | "ei"
    | "oi"
    | "yi"
    | "au"
    | "eu"
    | "ou"
    | "hu" => 1
    "pʰ" | "tʰ" | "kʰ" => 2
    "p" | "t" | "k" | "b" | "d" | "g" => 3
    "f"
    | "v"
    | "θ"
    | "ð"
    | "s"
    | "z"
    | "x"
    | "ɣ"
    | "ç"
    | "ʝ"
    | "β"
    | "ɸ" => 4
    "m" | "n" | "ŋ" => 5
    "l" | "r" | "ɾ" => 6
    "j" | "w" => 7
    "h" => 8
    _ => 0
  }
}

///|
fn is_nucleus_phone(phone : String) -> Bool {
  let base = if phone.has_suffix("ː") { strip_length(phone) } else { phone }
  match base {
    "a" | "e" | "i" | "o" | "u" | "y" | "ɛ" | "ɔ" | "ɪ" | "ʊ" => true
    _ => false
  }
}

///|
fn is_length_miss(phone : String, heard : String) -> Bool {
  if !phone.has_suffix("ː") {
    false
  } else {
    let short = strip_length(phone)
    heard == short || (phone == "ɔː" && heard == "o")
  }
}

///|
fn split_accept(s : String) -> Array[String] {
  if s == "" {
    []
  } else {
    s.split("|").map(fn(v) { v.to_owned() }).collect()
  }
}

///|
fn accept_has(xs : Array[String], heard : String) -> Bool {
  for x in xs {
    if x == heard {
      return true
    }
  }
  false
}

///|
fn find_row(set : Int32, phone : String) -> TolRec? {
  for r in tol_rows {
    if r.set == set && r.phone == phone {
      return Some(r)
    }
  }
  None
}

///|
fn find_class(set : Int32, cls : Int32) -> (Int32, Int32) {
  for c in tol_classes {
    if c.set == set && c.cls == cls {
      return (c.n, c.w)
    }
  }
  (0, 0)
}

///|
fn pos_slice(r : TolRec, position : String) -> (Int32, Int32) {
  if r.long {
    return (0, 0)
  }
  if position == "onset" {
    (r.onset.n, r.onset.w)
  } else if position == "nucleus" {
    (r.nucleus.n, r.nucleus.w)
  } else if position == "coda" {
    (r.coda.n, r.coda.w)
  } else {
    (0, 0)
  }
}

///|
fn stress_slice(r : TolRec, stress : String) -> (Int32, Int32) {
  if r.long {
    return (0, 0)
  }
  if stress == "stressed" {
    (r.stressed.n, r.stressed.w)
  } else if stress == "unstressed" {
    (r.unstressed.n, r.unstressed.w)
  } else {
    (0, 0)
  }
}

///|
priv struct TolRaw {
  milli : Int32
  accept : Array[String]
  rung : String
  n : Int32
  set : Int32
}

///|
fn raw_of(phone : String, ctx : TolContext, set : Int32) -> TolRaw {
  ignore(tol_lemmas())
  let found = find_row(set, phone)
  let (n_phone, w_phone, n_pos, w_pos, n_stress, w_stress, accept, cls) = match
    found {
    Some(r) => {
      let (pn, pw) = pos_slice(r, ctx.position)
      let (sn, sw) = stress_slice(r, ctx.stress)
      (r.n, r.w, pn, pw, sn, sw, split_accept(r.accept), r.cls)
    }
    None =>
      (
        0,
        0,
        0,
        0,
        0,
        0,
        split_accept(
          if phone.has_suffix("ː") {
            let short = strip_length(phone)
            if phone == "ɔː" && short != "o" {
              short + "|o"
            } else {
              short
            }
          } else {
            ""
          },
        ),
        class_of(phone),
      )
  }
  let (n_class, w_class) = find_class(set, cls)
  let packed = @kernel.tol_decide(
    bound_n(n_pos),
    bound_w(w_pos),
    bound_n(n_stress),
    bound_w(w_stress),
    bound_n(n_phone),
    bound_w(w_phone),
    bound_n(n_class),
    bound_w(w_class),
  )
  let src = @kernel.tol_decided_source(packed)
  let milli = @kernel.tol_decided_weight(packed)
  let n = match src {
    0 => n_pos
    1 => n_stress
    2 => if n_pos <= n_stress { n_pos } else { n_stress }
    3 => n_phone
    4 => n_class
    _ => 0
  }
  { milli, accept, rung: rung_name(src), n, set, }
}

///|
fn tolerance_at(phone : String, ctx : TolContext, scheme : String) -> Tolerance {
  let set = set_of(scheme)
  if set < 0 {
    let milli = @kernel.tol_default_milli()
    return {
      weight: milli_double(milli),
      accept: [],
      rung: "default",
      band: band_name(@kernel.tol_band(milli)),
      n: 0,
      set: "",
      model: tol_data_model,
      sha256: tol_data_sha,
      data: tol_data_name,
    }
  }
  let raw = raw_of(phone, ctx, set)
  {
    weight: milli_double(raw.milli),
    accept: raw.accept,
    rung: raw.rung,
    band: band_name(@kernel.tol_band(raw.milli)),
    n: raw.n,
    set: set_name(raw.set),
    model: tol_data_model,
    sha256: tol_data_sha,
    data: tol_data_name,
  }
}

///|
/// How much a miss of `phone` should count in `scheme`.
/// `ctx.position` is `onset`, `nucleus`, `coda`, or empty.
/// `ctx.stress` is `stressed`, `unstressed`, or empty.
/// `weight` is 0..=1. 1 trusts a miss fully. `accept` lists hearings to treat
/// as not a miss, including `∅` when a deletion is the model's habit.
/// Koine and Erasmian use the Attic rows. There is no Koine test set.
pub fn tolerance(
  phone : String,
  ctx : TolContext,
  scheme : String,
) -> Tolerance {
  tolerance_at(phone, ctx, scheme)
}

///|
fn jaccept(xs : Array[String]) -> String {
  jarr(xs)
}

///|
fn tolerance_body(t : Tolerance) -> String {
  "{\"weight\":" +
  dec3(@kernel.tol_clamp((t.weight * 1000.0).round().to_int())) +
  ",\"accept\":" +
  jaccept(t.accept) +
  ",\"rung\":" +
  jstr(t.rung) +
  ",\"band\":" +
  jstr(t.band) +
  ",\"n\":" +
  t.n.to_string() +
  ",\"set\":" +
  jstr(t.set) +
  ",\"model\":" +
  jstr(t.model) +
  ",\"sha256\":" +
  jstr(t.sha256) +
  ",\"data\":" +
  jstr(t.data) +
  "}"
}

///|
/// `context` is `position,stress`, for example `onset,stressed`. Either side may be empty.
pub fn tolerance_json(
  phone : String,
  context : String,
  scheme : String,
) -> String {
  let parts = context.split(",").map(fn(v) { v.to_owned() }).collect()
  let position = if parts.length() > 0 { parts[0] } else { "" }
  let stress = if parts.length() > 1 { parts[1] } else { "" }
  tolerance_body(tolerance(phone, { position, stress, }, scheme))
}

///|
/// Data version, model id, and sha256 for the embedded reliability table.
pub fn tolerance_meta_json() -> String {
  "{\"data\":" +
  jstr(tol_data_name) +
  ",\"version\":" +
  tol_data_version.to_string() +
  ",\"generated\":" +
  jstr(tol_data_generated) +
  ",\"model\":" +
  jstr(tol_data_model) +
  ",\"sha256\":" +
  jstr(tol_data_sha) +
  ",\"lib\":" +
  jstr(lib_version) +
  ",\"koine\":\"no held-out set; Attic rows are used where the phone matches\"}"
}

///|
fn row_known(set : Int32, phone : String) -> Bool {
  match find_row(set, phone) {
    Some(_) => true
    None => false
  }
}

///|
fn diph_id(bases : String) -> String {
  match bases {
    "αι" => "ai"
    "οι" => "oi"
    "αυ" => "au"
    "ευ" => "eu"
    "ει" => "ei"
    "ου" => "ou"
    "υι" => "yi"
    "ηυ" => "hu"
    _ => ""
  }
}

///|
fn orth_letters(us : Array[GUnit], i : Int32, n : Int32) -> String {
  let sb = StringBuilder()
  let mut k = 0
  while k < n && i + k < us.length() {
    sb.write_string(us[i + k].u)
    k = k + 1
  }
  sb.to_string()
}

///|
fn syllable_of(word : String) -> (Array[GUnit], Array[Int32]) {
  let us = units(word)
  let cuts = syllable_cuts(us)
  let syl = Array::make(us.length(), 0)
  let mut s = 0
  let mut ci = 0
  let mut i = 0
  while i < us.length() {
    if ci < cuts.length() && i == cuts[ci] {
      s = s + 1
      ci = ci + 1
    }
    syl[i] = s
    i = i + 1
  }
  (us, syl)
}

///|
fn take_span(
  us : Array[GUnit],
  syl : Array[Int32],
  i : Int32,
  key : String,
) -> (Int32, Int32) {
  if i >= us.length() {
    return (i, 0)
  }
  if key == "" {
    return (i, syl[i])
  }
  let mut n = 1
  while i + n <= us.length() && n <= 4 && orth_letters(us, i, n) != key {
    n = n + 1
  }
  if i + n > us.length() || orth_letters(us, i, n) != key {
    n = 1
  }
  let at = i + n - 1
  let s = if at >= 0 && at < syl.length() { syl[at] } else { 0 }
  (i + n, s)
}

///|
fn stress_name(word : String, syl : Int32) -> String {
  let marks = accented_syllables(word)
  for m in marks {
    if m == syl {
      return "stressed"
    }
  }
  "unstressed"
}

///|
fn heard_phones(heard : String) -> Array[String] {
  let out : Array[String] = []
  let sb = StringBuilder()
  let mut n = 0
  for c in heard {
    if c == ' ' || c == '|' || c == '\t' || c == '\n' || c == '\r' {
      if n > 0 {
        out.push(sb.to_string())
        sb.reset()
        n = 0
      }
    } else {
      sb.write_char(c)
      n = n + 1
    }
  }
  if n > 0 {
    out.push(sb.to_string())
  }
  out
}

///|
fn miss_of(
  phone : String,
  heard : String,
  accept : Array[String],
  milli : Int32,
) -> Int32 {
  if heard == "" {
    -1
  } else if heard == phone || accept_has(accept, heard) {
    @kernel.tol_miss_milli(milli, true, is_length_miss(phone, heard))
  } else if is_length_miss(phone, heard) {
    @kernel.tol_miss_milli(milli, false, true)
  } else {
    @kernel.tol_miss_milli(milli, false, false)
  }
}

///|
priv struct Draft {
  ui : Int32
  phone : String
  syl : Int32
  stress : String
}

///|
priv struct Placed {
  ui : Int32
  phone : String
  position : String
  stress : String
}

///|
fn place_word(w : G2pWord) -> Array[Placed] {
  let (orth, syl) = syllable_of(w.text)
  let draft : Array[Draft] = []
  let mut oi = 0
  for ui, u in w.units {
    let key = unit_key(u.t)
    let (next, s) = if orth.length() == 0 {
      (oi, 0)
    } else {
      take_span(orth, syl, oi, key)
    }
    oi = next
    let stress = stress_name(w.text, s)
    for p in u.ph {
      draft.push({ ui, phone: p, syl: s, stress, })
    }
  }
  let pos = Array::make(draft.length(), "")
  let mut i = 0
  while i < draft.length() {
    let s = draft[i].syl
    let mut j = i + 1
    while j < draft.length() && draft[j].syl == s {
      j = j + 1
    }
    let mut nuc = -1
    let mut k = i
    while k < j {
      if is_nucleus_phone(draft[k].phone) {
        nuc = k
        break
      }
      k = k + 1
    }
    if nuc < 0 {
      k = i
      while k < j {
        pos[k] = "onset"
        k = k + 1
      }
    } else {
      let mut endn = nuc
      while endn + 1 < j && is_nucleus_phone(draft[endn + 1].phone) {
        endn = endn + 1
      }
      k = i
      while k < nuc {
        pos[k] = "onset"
        k = k + 1
      }
      k = nuc
      while k <= endn {
        pos[k] = "nucleus"
        k = k + 1
      }
      k = endn + 1
      while k < j {
        pos[k] = "coda"
        k = k + 1
      }
    }
    i = j
  }
  let out : Array[Placed] = []
  for i, d in draft {
    out.push({ ui: d.ui, phone: d.phone, position: pos[i], stress: d.stress, })
  }
  out
}

///|
fn phones_of_unit(placed : Array[Placed], ui : Int32) -> Array[Placed] {
  let out : Array[Placed] = []
  for p in placed {
    if p.ui == ui {
      out.push(p)
    }
  }
  out
}

///|
fn min_milli(xs : Array[Int32]) -> Int32 {
  if xs.length() == 0 {
    @kernel.tol_default_milli()
  } else {
    let mut m = xs[0]
    for x in xs {
      if x < m {
        m = x
      }
    }
    m
  }
}

///|
fn one_tol_word(
  w : G2pWord,
  scheme : String,
  heard : Array[String],
  at : Ref[Int32],
) -> TolWord {
  let set = set_of(scheme)
  let placed = place_word(w)
  let units : Array[TolUnit] = []
  let mut phone_n = 0
  let mut scored = 0
  let mut penalty = 0
  for ui, u in w.units {
    let ps = phones_of_unit(placed, ui)
    let phones : Array[TolPhone] = []
    let millis : Array[Int32] = []
    for p in ps {
      let ctx = { position: p.position, stress: p.stress, }
      let raw = if set < 0 {
        {
          milli: @kernel.tol_default_milli(),
          accept: [],
          rung: "default",
          n: 0,
          set: -1,
        }
      } else {
        raw_of(p.phone, ctx, set)
      }
      let h = if heard.length() == 0 {
        ""
      } else if at.val < heard.length() {
        heard[at.val]
      } else {
        ""
      }
      if heard.length() > 0 && at.val < heard.length() {
        at.val = at.val + 1
      }
      let miss = if heard.length() == 0 {
        -1
      } else {
        miss_of(p.phone, h, raw.accept, raw.milli)
      }
      if miss >= 0 {
        scored = scored + 1
        penalty = penalty + miss
      }
      phone_n = phone_n + 1
      millis.push(raw.milli)
      phones.push({
        phone: p.phone,
        position: p.position,
        stress: p.stress,
        weight: milli_double(raw.milli),
        accept: raw.accept,
        rung: raw.rung,
        band: band_name(@kernel.tol_band(raw.milli)),
        miss: if miss < 0 {
          -1.0
        } else {
          milli_double(miss)
        },
      })
    }
    let gid = diph_id(unit_key(u.t))
    let grouped = set >= 0 &&
      u.k == "diph" &&
      u.ph.length() >= 2 &&
      gid != "" &&
      row_known(set, gid)
    let (group, gmilli, gaccept) = if grouped {
      let stress = if ps.length() > 0 { ps[0].stress } else { "unstressed" }
      let raw = raw_of(gid, { position: "nucleus", stress, }, set)
      (gid, raw.milli, raw.accept)
    } else {
      ("", -1, [])
    }
    if grouped {
      millis.push(gmilli)
    }
    let letter = min_milli(millis)
    units.push({
      t: u.t,
      k: u.k,
      from: u.from,
      to: u.to,
      weight: milli_double(letter),
      band: band_name(@kernel.tol_band(letter)),
      phones,
      group,
      group_weight: if gmilli < 0 {
        -1.0
      } else {
        milli_double(gmilli)
      },
      group_accept: gaccept,
    })
  }
  {
    text: w.text,
    phones: phone_n,
    scored,
    penalty: if heard.length() == 0 || scored == 0 {
      -1.0
    } else {
      milli_double(penalty)
    },
    units,
  }
}

///|
/// Per-letter weights for `text` in `scheme`.
/// Each unit's `weight` and `band` colour that grapheme: `lenient` below 0.350,
/// `mixed` below 0.600, `strict` from 0.600. The letter uses the lowest phone
/// weight on it, and a two-phone diphthong also considers the diphthong row.
/// `heard` is space-separated IPA in target-phone order (`|` between words is
/// ignored). An empty `heard` leaves `miss` and `penalty` at -1 so the call
/// only colours. A heard phone that matches, or sits in `accept`, or is only a
/// length miss, scores 0. Any other miss scores that phone's weight.
/// `penalty` is the sum of those miss weights.
/// `ipa()` does not call this.
pub fn tolerance_word(
  text : String,
  scheme : String,
  heard : String,
) -> Array[TolWord] {
  ignore(tol_lemmas())
  let hs = heard_phones(heard)
  let at = Ref(0)
  let out : Array[TolWord] = []
  for w in g2p_words(text, scheme) {
    out.push(one_tol_word(w, scheme, if heard == "" { [] } else { hs }, at))
  }
  out
}

///|
fn phone_json(p : TolPhone) -> String {
  let miss = if p.miss < 0.0 {
    "-1"
  } else {
    dec3((p.miss * 1000.0).round().to_int())
  }
  "{\"phone\":" +
  jstr(p.phone) +
  ",\"position\":" +
  jstr(p.position) +
  ",\"stress\":" +
  jstr(p.stress) +
  ",\"weight\":" +
  dec3((p.weight * 1000.0).round().to_int()) +
  ",\"accept\":" +
  jarr(p.accept) +
  ",\"rung\":" +
  jstr(p.rung) +
  ",\"band\":" +
  jstr(p.band) +
  ",\"miss\":" +
  miss +
  "}"
}

///|
fn tol_unit_json(u : TolUnit) -> String {
  let sb = StringBuilder()
  sb.write_string(
    "{\"t\":" +
    jstr(u.t) +
    ",\"k\":" +
    jstr(u.k) +
    ",\"from\":" +
    u.from.to_string() +
    ",\"to\":" +
    u.to.to_string() +
    ",\"weight\":" +
    dec3((u.weight * 1000.0).round().to_int()) +
    ",\"band\":" +
    jstr(u.band) +
    ",\"phones\":[",
  )
  for i, p in u.phones {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(phone_json(p))
  }
  sb.write_string(
    "],\"group\":" +
    jstr(u.group) +
    ",\"group_weight\":" +
    (if u.group_weight < 0.0 {
      "-1"
    } else {
      dec3((u.group_weight * 1000.0).round().to_int())
    }) +
    ",\"group_accept\":" +
    jarr(u.group_accept) +
    "}",
  )
  sb.to_string()
}

///|
fn word_json_tol(w : TolWord) -> String {
  let sb = StringBuilder()
  let penalty = if w.penalty < 0.0 {
    "-1"
  } else {
    dec3((w.penalty * 1000.0).round().to_int())
  }
  sb.write_string(
    "{\"text\":" +
    jstr(w.text) +
    ",\"phones\":" +
    w.phones.to_string() +
    ",\"scored\":" +
    w.scored.to_string() +
    ",\"penalty\":" +
    penalty +
    ",\"units\":[",
  )
  for i, u in w.units {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(tol_unit_json(u))
  }
  sb.write_string("]}")
  sb.to_string()
}

///|
/// Same as `tolerance_word`, as one JSON object. `heard` may be empty.
pub fn tolerance_word_json(
  text : String,
  scheme : String,
  heard : String,
) -> String {
  let words = tolerance_word(text, scheme, heard)
  let sb = StringBuilder()
  sb.write_string(
    "{\"v\":1,\"lib\":" +
    jstr(lib_version) +
    ",\"data\":" +
    jstr(tol_data_name) +
    ",\"version\":" +
    tol_data_version.to_string() +
    ",\"generated\":" +
    jstr(tol_data_generated) +
    ",\"model\":" +
    jstr(tol_data_model) +
    ",\"sha256\":" +
    jstr(tol_data_sha) +
    ",\"scheme\":" +
    jstr(scheme_id(scheme)) +
    ",\"koine\":\"no held-out set; Attic rows are used where the phone matches\",\"words\":[",
  )
  for i, w in words {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(word_json_tol(w))
  }
  sb.write_string("]}")
  sb.to_string()
}
