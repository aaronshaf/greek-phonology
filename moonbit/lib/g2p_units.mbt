// Per-grapheme units for one reading of a typed word.
//
// `ipa()` is unchanged: it still joins phones from `word_phones`. Units are a
// second view of the same step function. `units[].t` tiles the user's NFC text.
// The lexicon form, when it only restores marks, supplies the phones; a unit is
// `restored` when a phone depended on a mark the user did not type (rough
// breathing, Attic length, iota subscript, or a diaeresis that split a diphthong).
// An acute or grave that does not change the phones is not `restored`.

///|
pub(all) struct G2pOpts {
  alts : Bool
  cross_word : Bool
}

///|
pub fn G2pOpts::plain() -> G2pOpts {
  { alts: false, cross_word: false }
}

///|
pub fn G2pOpts::with_alts() -> G2pOpts {
  { alts: true, cross_word: false }
}

///|
/// Word-final αυ/ευ/ηυ takes the next word's first letter into account.
/// Off by default, and `ipa()` never reads this flag.
pub fn G2pOpts::contextual() -> G2pOpts {
  { alts: false, cross_word: true }
}

///|
pub(all) struct G2pAlt {
  heard : Array[String]
  tier : String
  d : Double
  note : String
  src : String
}

///|
pub(all) struct G2pUnit {
  t : String
  k : String
  ph : Array[String]
  from : Int
  to : Int
  restored : Bool
  asp : Bool
  ctx : String
  alts : Array[G2pAlt]
}

///|
pub(all) struct G2pWord {
  text : String
  form : String
  form_used : String
  phones : Array[String]
  units : Array[G2pUnit]
}

///|
let lib_version : String = "0.3.0"

///|
priv struct Cls {
  b : Char
  rough : Bool
  dia : Bool
  long : Bool
  isub : Bool
  from : Int
}

///|
fn cl_mark(
  c : Cls,
  rough : Bool,
  dia : Bool,
  long : Bool,
  isub : Bool,
) -> Cls {
  {
    b: c.b,
    rough: c.rough || rough,
    dia: c.dia || dia,
    long: c.long || long,
    isub: c.isub || isub,
    from: c.from,
  }
}

///|
fn u16w(c : Char) -> Int {
  if c.to_int() > 0xFFFF {
    2
  } else {
    1
  }
}

///|
/// Letter clusters of an NFC word, with UTF-16 spans into that word.
/// None when the word has no readable letter or contains a letter G2P cannot read.
fn span_clusters(word : String) -> Array[Cls]? {
  let out : Array[Cls] = []
  let mut open : Cls? = None
  let mut i16 = 0
  for c in word {
    let w = u16w(c)
    let start = i16
    i16 += w
    for ch in nfd_char(c) {
      if ch == '\u{0345}' || ch == '\u{1FBE}' {
        open = match open {
          Some(cl) => Some(cl_mark(cl, false, false, false, true))
          None => None
        }
      } else if is_comb(ch) {
        open = match open {
          Some(cl) =>
            Some(
              cl_mark(
                cl,
                ch == rough_mark,
                ch == diaer,
                ch == circ || ch == '\u{0304}',
                false,
              ),
            )
          None => None
        }
      } else {
        let base = fold_lower(ch)
        if is_gv(base) || is_gc(base) {
          match open {
            Some(cl) => out.push(cl)
            None => ()
          }
          open = Some({
            b: base,
            rough: false,
            dia: false,
            long: false,
            isub: false,
            from: start,
          })
        } else if is_alpha_like(base) {
          return None
        } else {
          match open {
            Some(cl) => out.push(cl)
            None => ()
          }
          open = None
        }
      }
    }
  }
  match open {
    Some(cl) => out.push(cl)
    None => ()
  }
  if out.length() == 0 {
    None
  } else {
    Some(out)
  }
}

///|
fn cl_bases(cl : Array[Cls]) -> String {
  let sb = StringBuilder()
  for c in cl {
    sb.write_char(c.b)
  }
  sb.to_string()
}

///|
/// Lexicon form when it keeps the same base letters; otherwise the typed word.
fn phone_source(typed : String, lex : String) -> (String, String) {
  if key_bare(typed) == key_bare(lex) {
    if typed == lex {
      (typed, "typed")
    } else {
      (lex, "lexicon")
    }
  } else {
    (typed, "typed")
  }
}

///|
fn relied_mark(src : Cls, typ : Cls, h : Bool, lengthened : Bool, isub : Bool) -> Bool {
  (h && src.rough && !typ.rough) ||
  (lengthened && src.long && !typ.long) ||
  (isub && src.isub && !typ.isub) ||
  (src.dia && !typ.dia)
}

///|
fn unit_bounds(
  text_len : Int,
  typed : Array[Cls],
  i : Int,
  cover : Int,
) -> (Int, Int) {
  let start = if i == 0 {
    0
  } else {
    typed[i].from
  }
  let j = i + cover
  let end = if j >= typed.length() {
    text_len
  } else {
    typed[j].from
  }
  (start, end)
}

///|
fn is_au_eu_hu(a : Char, b : Char) -> Bool {
  b == 'υ' && (a == 'α' || a == 'ε' || a == 'η')
}

///|
fn push_phones(
  ph : Array[String],
  buf : FixedArray[Int32],
  cnt : Int,
  gem : Bool,
) -> Bool {
  let mut h = false
  for k in 0..<cnt {
    let id = buf[k]
    if id == 17 {
      ph.push("h")
      h = true
    } else {
      let tail = if gem { "ː" } else { "" }
      ph.push(phone_names[id] + tail)
    }
  }
  h
}

///|
fn build_units(
  text : String,
  typed : Array[Cls],
  src : Array[Cls],
  s : Int32,
) -> Array[G2pUnit] {
  let n = src.length()
  let bs = FixedArray::make(n, 0)
  let rf = FixedArray::make(n, 0)
  let dd = FixedArray::make(n, 0)
  for i, c in src {
    bs[i] = c.b.to_int()
    rf[i] = if c.rough { 1 } else { 0 }
    dd[i] = if c.dia { 1 } else { 0 }
  }
  let buf = FixedArray::make(8, 0)
  let starts = FixedArray::make(n + 1, 0)
  let nu = @kernel.g2p_units(s, bs, rf, dd, starts)
  let out : Array[G2pUnit] = []
  let mut skip = false
  let text_len = text.length()
  for ui in 0..<nu {
    if skip {
      skip = false
      continue
    }
    let i = starts[ui]
    let r = @kernel.g2p_step(s, bs, rf, dd, i, buf)
    let cnt = r % 8
    let adv = r / 8
    let mut gem = false
    let mut isub = false
    let mut lengthened = false
    if s == 2 && adv == 1 && is_gv(src[i].b) {
      if src[i].long || src[i].isub {
        for k in 0..<cnt {
          if buf[k] != 17 {
            buf[k] = @kernel.g_attic_long(buf[k])
          }
        }
        lengthened = true
      }
      isub = src[i].isub
    } else if s == 2 &&
      adv == 1 &&
      cnt == 1 &&
      !is_gv(src[i].b) &&
      src[i].b != 'γ' &&
      ui + 1 < nu &&
      starts[ui + 1] == i + 1 &&
      i + 1 < n &&
      src[i + 1].b == src[i].b {
      gem = true
      skip = true
    }
    let cover = if gem { 2 } else { adv }
    let ph : Array[String] = []
    let h = push_phones(ph, buf, cnt, gem)
    if isub {
      ph.push("i")
    }
    let mut restored = false
    let mut hi = i + cover
    if hi > n {
      hi = n
    }
    for j in i..<hi {
      if relied_mark(src[j], typed[j], h, lengthened && j == i, isub && j == i) {
        restored = true
      }
    }
    let kind = if gem {
      "gem"
    } else if cover == 2 &&
      i + 1 < n &&
      is_gv(src[i].b) &&
      is_gv(src[i + 1].b) &&
      !src[i + 1].dia {
      "diph"
    } else if cover == 2 {
      "dig"
    } else if is_gv(src[i].b) {
      "v"
    } else {
      "c"
    }
    let mut ctx = ""
    if kind == "diph" && i + 1 < n && is_au_eu_hu(src[i].b, src[i + 1].b) {
      ctx = if i + 2 >= n { "word-end" } else { "next-letter" }
    } else if src[i].b == 'σ' && ph.length() == 1 && ph[0] == "z" {
      ctx = "next-letter"
    } else if src[i].b == 'γ' &&
      ph.length() == 1 &&
      (ph[0] == "ŋ" || ph[0] == "ʝ") {
      ctx = "next-letter"
    } else if src[i].b == 'χ' && ph.length() == 1 && ph[0] == "ç" {
      ctx = "next-letter"
    }
    let (from, to) = unit_bounds(text_len, typed, i, cover)
    let slice = text[from:to].to_owned()
    out.push({
      t: slice,
      k: kind,
      ph,
      from,
      to,
      restored,
      asp: h,
      ctx,
      alts: [],
    })
  }
  out
}

///|
fn flat_phones(us : Array[G2pUnit]) -> Array[String] {
  let out : Array[String] = []
  for u in us {
    for p in u.ph {
      out.push(p)
    }
  }
  out
}

///|
fn empty_word(text : String, form : String, used : String) -> G2pWord {
  { text, form, form_used: used, phones: [], units: [] }
}

///|
fn one_word(raw : String, s : Int32) -> G2pWord {
  let text = nfc(raw)
  let lex = lex_form(text)
  let (src0, used0) = phone_source(text, lex)
  let mut used = used0
  let typed_opt = span_clusters(text)
  match typed_opt {
    None => empty_word(text, lex, used)
    Some(typed) => {
      let src_opt = if src0 == text {
        Some(typed)
      } else {
        span_clusters(src0)
      }
      let src = match src_opt {
        Some(sc) =>
          if sc.length() == typed.length() && cl_bases(sc) == cl_bases(typed) {
            sc
          } else {
            used = "typed"
            typed
          }
        None => {
          used = "typed"
          typed
        }
      }
      let units = build_units(text, typed, src, s)
      { text, form: lex, form_used: used, phones: flat_phones(units), units, }
    }
  }
}

///|
/// Words of `text` (ASCII whitespace) in `scheme`, each tiled by grapheme units.
/// An unknown scheme yields an empty list. Default options: no alternates.
pub fn g2p_words(text : String, scheme : String) -> Array[G2pWord] {
  g2p_words_opts(text, scheme, G2pOpts::plain())
}

///|
pub fn g2p_words_opts(
  text : String,
  scheme : String,
  opts : G2pOpts,
) -> Array[G2pWord] {
  let s = scheme_index(scheme)
  if s < 0 {
    return []
  }
  let built : Array[G2pWord] = []
  for w in split_ws(text) {
    built.push(one_word(w, s))
  }
  let voiced = if opts.cross_word {
    apply_cross_word(built, s)
  } else {
    built
  }
  if !opts.alts {
    return voiced
  }
  let out : Array[G2pWord] = []
  for w in voiced {
    out.push(with_grapheme_alts(w, scheme))
  }
  out
}

///|
fn letter_voiceless(c : Char) -> Bool {
  // Same letters as kernel g_voiceless. ς is already folded to σ.
  match c {
    'π' | 'κ' | 'τ' | 'φ' | 'θ' | 'χ' | 'σ' | 'ξ' | 'ψ' => true
    _ => false
  }
}

///|
fn first_base(w : G2pWord) -> Char? {
  for u in w.units {
    for c in unit_key(u.t) {
      return Some(c)
    }
  }
  None
}

///|
fn with_coda(u : G2pUnit, coda : String) -> G2pUnit {
  let ph : Array[String] = []
  let last = u.ph.length() - 1
  for i, p in u.ph {
    if i == last {
      ph.push(coda)
    } else {
      ph.push(p)
    }
  }
  {
    t: u.t,
    k: u.k,
    ph,
    from: u.from,
    to: u.to,
    restored: u.restored,
    asp: u.asp,
    ctx: u.ctx,
    alts: [],
  }
}

///|
fn retarget_final_au(w : G2pWord, coda : String) -> G2pWord {
  let mut idx = -1
  for i, u in w.units {
    if u.ctx == "word-end" && u.ph.length() > 0 {
      let last = u.ph[u.ph.length() - 1]
      if last == "f" || last == "v" {
        idx = i
      }
    }
  }
  if idx < 0 {
    return w
  }
  let units : Array[G2pUnit] = []
  for i, u in w.units {
    if i == idx {
      units.push(with_coda(u, coda))
    } else {
      units.push(u)
    }
  }
  {
    text: w.text,
    form: w.form,
    form_used: w.form_used,
    phones: flat_phones(units),
    units,
  }
}

///|
/// Koine and Modern only. Phrase-final αυ/ευ/ηυ keeps the isolated target
/// (Koine v, Modern f). A following voiceless letter selects f; a vowel or
/// a voiced letter selects v. Attic and Erasmian are unchanged.
fn apply_cross_word(words : Array[G2pWord], s : Int32) -> Array[G2pWord] {
  if s != 0 && s != 1 {
    return words
  }
  let out : Array[G2pWord] = []
  for i, w in words {
    if i + 1 >= words.length() {
      out.push(w)
      continue
    }
    match first_base(words[i + 1]) {
      None => out.push(w)
      Some(c) => {
        let coda = if letter_voiceless(c) { "f" } else { "v" }
        out.push(retarget_final_au(w, coda))
      }
    }
  }
  out
}

///|
fn unit_key(t : String) -> String {
  let sb = StringBuilder()
  for c in t {
    for ch in nfd_char(c) {
      if ch == '\u{0345}' || ch == '\u{1FBE}' || is_comb(ch) {
        continue
      }
      let base = fold_lower(ch)
      if is_gv(base) || is_gc(base) {
        sb.write_char(base)
      }
    }
  }
  sb.to_string()
}

///|
fn diph_phones(ph : Array[String]) -> Array[String] {
  if ph.length() > 0 && ph[0] == "h" {
    let out : Array[String] = []
    for i in 1..<ph.length() {
      out.push(ph[i])
    }
    out
  } else {
    ph
  }
}

///|
fn with_grapheme_alts(w : G2pWord, scheme : String) -> G2pWord {
  let units : Array[G2pUnit] = []
  for u in w.units {
    let alts = grapheme_alts(scheme, unit_key(u.t), u.ctx, diph_phones(u.ph))
    units.push({
      t: u.t,
      k: u.k,
      ph: u.ph,
      from: u.from,
      to: u.to,
      restored: u.restored,
      asp: u.asp,
      ctx: u.ctx,
      alts,
    })
  }
  { text: w.text, form: w.form, form_used: w.form_used, phones: w.phones, units, }
}

///|
fn jbool(b : Bool) -> String {
  if b {
    "true"
  } else {
    "false"
  }
}

///|
fn unit_json(u : G2pUnit, alts : Bool) -> String {
  let sb = StringBuilder()
  sb.write_string("{\"t\":" + jstr(u.t) + ",\"k\":" + jstr(u.k) + ",\"ph\":" + jarr(u.ph))
  sb.write_string(",\"from\":" + u.from.to_string() + ",\"to\":" + u.to.to_string())
  sb.write_string(",\"restored\":" + jbool(u.restored))
  if u.asp {
    sb.write_string(",\"asp\":1")
  }
  if u.ctx != "" {
    sb.write_string(",\"ctx\":" + jstr(u.ctx))
  }
  if alts {
    sb.write_string(",\"alts\":" + alts_json(u.alts))
  }
  sb.write_char('}')
  sb.to_string()
}

///|
fn alts_json(xs : Array[G2pAlt]) -> String {
  let sb = StringBuilder()
  sb.write_char('[')
  for i, a in xs {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(
      "{\"heard\":" +
      jarr(a.heard) +
      ",\"tier\":" +
      jstr(a.tier) +
      ",\"d\":" +
      jdec3(a.d) +
      ",\"note\":" +
      jstr(a.note) +
      ",\"src\":" +
      jstr(a.src) +
      "}",
    )
  }
  sb.write_char(']')
  sb.to_string()
}

///|
fn jdec3(d : Double) -> String {
  let n0 = (d * 1000.0).round().to_int()
  let neg = n0 < 0
  let n = if neg { -n0 } else { n0 }
  let whole = n / 1000
  let frac = n % 1000
  let sign = if neg { "-" } else { "" }
  if frac == 0 {
    return sign + whole.to_string() + ".0"
  }
  let mut f = frac.to_string()
  while f.length() < 3 {
    f = "0" + f
  }
  while f.length() > 1 && f[f.length() - 1:].to_owned() == "0" {
    f = f[0:f.length() - 1].to_owned()
  }
  sign + whole.to_string() + "." + f
}

///|
fn word_json_g2p(w : G2pWord, alts : Bool) -> String {
  let sb = StringBuilder()
  sb.write_string(
    "{\"text\":" +
    jstr(w.text) +
    ",\"form\":" +
    jstr(w.form) +
    ",\"form_used\":" +
    jstr(w.form_used) +
    ",\"phones\":" +
    jarr(w.phones) +
    ",\"units\":[",
  )
  for i, u in w.units {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(unit_json(u, alts))
  }
  sb.write_string("]}")
  sb.to_string()
}

///|
fn opts_of(flags : String) -> G2pOpts {
  let mut alts = false
  let mut cross_word = false
  for part in flags.split(",") {
    let p = part.to_owned()
    if p == "alts" || p == "alts=1" {
      alts = true
    } else if p == "ctx" || p == "ctx=1" {
      cross_word = true
    }
  }
  { alts, cross_word, }
}

///|
/// JSON for `g2p_words`. `flags` is a comma list. `alts` adds an `alts` array on each unit.
/// `ctx` voices word-final αυ/ευ/ηυ from the next word. Default flags change nothing.
pub fn g2p_json_flags(text : String, scheme : String, flags : String) -> String {
  let opts = opts_of(flags)
  let sname = scheme
  let sb = StringBuilder()
  sb.write_string(
    "{\"v\":1,\"scheme\":" + jstr(sname) + ",\"lib\":" + jstr(lib_version) + ",\"words\":[",
  )
  if scheme_index(scheme) >= 0 {
    let ws = g2p_words_opts(text, scheme, opts)
    for i, w in ws {
      if i > 0 {
        sb.write_char(',')
      }
      sb.write_string(word_json_g2p(w, opts.alts))
    }
  }
  sb.write_string("]}")
  sb.to_string()
}

///|
pub fn g2p_json(text : String, scheme : String) -> String {
  g2p_json_flags(text, scheme, "")
}

///|
test "phone source keeps a mark-only lexicon form and rejects a base-letter change" {
  let (a, au) = phone_source("υιος", "υἱός")
  assert_eq(a, "υἱός")
  assert_eq(au, "lexicon")
  let (b, bu) = phone_source("λόγος", "λόγος")
  assert_eq(b, "λόγος")
  assert_eq(bu, "typed")
  let (c, cu) = phone_source("α", "αβ")
  assert_eq(c, "α")
  assert_eq(cu, "typed")
}
