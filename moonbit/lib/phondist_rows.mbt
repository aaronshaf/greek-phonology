// Sourced phonetic-distance rows. Opt-in: ipa() never calls this.
// A row replaces the feature distance for that scheme and context.
// An existing equivalence at distance 0 (Koine/Modern o/ɔ, Koine β/v) stays:
// it is stricter than the 0.02 notation row. Policy rows are marked policy
// in the table JSON. They are design choices, not historical claims.
// Citations live in docs/DISTANCE_TABLE.md. Nothing marked [U] is quoted.

///|
pub(all) struct PhoneSituation {
  left : String
  right : String
  right2 : String
  place : String
  posterior : Double
}

///|
pub fn PhoneSituation::absent() -> PhoneSituation {
  { left: "", right: "", right2: "", place: "", posterior: -1.0 }
}

///|
/// `posterior` is the recognizer's probability of the target phone.
/// Below 0 means the caller passed no gate.
pub fn PhoneSituation::with_posterior(p : Double) -> PhoneSituation {
  { left: "", right: "", right2: "", place: "", posterior: p }
}

///|
/// `left,right,right2,place,posterior`. An empty posterior means no gate.
fn situation_of(s : String) -> PhoneSituation {
  if s == "" {
    return PhoneSituation::absent()
  }
  let parts = s.split(",").map(fn(v) { v.to_owned() }).collect()
  fn at(i : Int) -> String {
    if i < parts.length() { parts[i] } else { "" }
  }
  let posterior = if parts.length() < 5 || parts[4] == "" {
    -1.0
  } else {
    try {
      @string.parse_double(parts[4])
    } catch {
      _ => -1.0
    }
  }
  { left: at(0), right: at(1), right2: at(2), place: at(3), posterior, }
}

///|
priv struct SrcHit {
  id : String
  d : Double
  note : String
}

///|
fn src_hit(id : String, d : Double, note : String) -> SrcHit {
  { id, d, note }
}

///|
let note_e01 : String = "γ before ι/ε is a palatal buzz [ʝ], like a soft y."

///|
let note_e02 : String = "ντ is a voiced [d], often with a light [n] before it inside a word."

///|
let note_e03 : String = "Koine ντ, μπ, γκ are [nd mb ŋg] after Horrocks; Egyptian papyri also show voiceless [nt mp ŋk]."

///|
let note_e06_modern : String = "a double letter is one consonant [alá]."

///|
let note_e06_koine : String = "doubled letters were already simplified in the Koine."

///|
let note_e07 : String = "A double letter is a long consonant: hold it a beat longer."

///|
let note_e09 : String = "ν before κ/γ/χ is [ŋ]."

///|
let note_e12 : String = "χ is [ç] before ι/ε."

///|
let note_e13 : String = "κ, λ, ν before ι/ε are slightly palatalized."

///|
let note_e14 : String = "γιά is [ja]: the ι is part of the ʝ."

///|
let note_e15 : String = "Keep ι a vowel in careful speech; in running speech it is a glide."

///|
let note_e17 : String = "αυ/ευ = [av/ev] or [af/ef] by what follows."

///|
let note_e19 : String = "αι = [ai] in Attic, [ɛ] in Koine."

///|
let note_e21 : String = "Add the puff of breath: θ/φ/χ are aspirated stops in early Koine."

///|
let note_e22 : String = "θ φ χ: aspirated stops in early Koine, and later the air keeps flowing."

///|
let note_e23 : String = "Attic θ φ χ are aspirated; the puff is the difference from τ π κ."

///|
let note_e24 : String = "Voice the consonant: κ is [k], γ is [ɣ]/[g]."

///|
let note_e25 : String = "ζ is [z] in Koine."

///|
let note_e28 : String = "γ: let the air keep flowing, no full closure."

///|
let gate_min : Double = 0.15

///|
fn sym_of(p : String) -> String {
  bare_phone(p)
}

///|
fn pair(a : String, b : String, x : String, y : String) -> Bool {
  (a == x && b == y) || (a == y && b == x)
}

///|
fn is_front_vowel(p : String) -> Bool {
  p == "i" || p == "e" || p == "ɛ" || p == "ɪ"
}

///|
fn is_back_vowel(p : String) -> Bool {
  p == "a" || p == "o" || p == "u" || p == "ɔ"
}

///|
fn is_vowel_sym(p : String) -> Bool {
  is_front_vowel(p) || is_back_vowel(p) || p == "y" || p == "ʊ"
}

///|
fn is_voiceless_sym(p : String) -> Bool {
  p == "p" ||
  p == "t" ||
  p == "k" ||
  p == "s" ||
  p == "f" ||
  p == "θ" ||
  p == "x" ||
  p == "ç" ||
  p == "ɸ" ||
  p == "h" ||
  p == "pʰ" ||
  p == "tʰ" ||
  p == "kʰ"
}

///|
fn geminate_sym(p : String) -> Bool {
  // σσ λλ ρρ ττ κκ μμ νν ππ ββ. Modern/Koine β is [v].
  p == "s" ||
  p == "l" ||
  p == "r" ||
  p == "t" ||
  p == "k" ||
  p == "m" ||
  p == "n" ||
  p == "p" ||
  p == "b" ||
  p == "v"
}

///|
fn has_length_mark(p : String) -> Bool {
  p.contains("ː") || p.contains("ˑ")
}

///|
fn gate_open(sit : PhoneSituation) -> Bool {
  sit.posterior + 0.000000001 >= gate_min
}

///|
fn palatal_env(sit : PhoneSituation) -> Bool {
  let r = sym_of(sit.right)
  let r2 = sym_of(sit.right2)
  is_front_vowel(r) || ((r == "i" || r == "j") && is_back_vowel(r2))
}

///|
fn velar_env(sit : PhoneSituation) -> Bool {
  let r = sym_of(sit.right)
  r == "k" || r == "g" || r == "x" || r == "ɣ" || r == "kʰ"
}

///|
fn voiced_labial(p : String) -> Bool {
  p == "v" || p == "β"
}

///|
fn diph_left(sit : PhoneSituation) -> Bool {
  let left = sym_of(sit.left)
  left == "a" || left == "e" || left == "ɛ" || left == "i"
}

///|
fn heard_follows_voicing(heard : String, sc : String, sit : PhoneSituation) -> Bool {
  // Koine word-final αυ/ευ/ηυ keeps the existing tolerated [f], not an accurate one.
  if sc == "koine" && sit.place == "final" {
    return false
  }
  let right = sym_of(sit.right)
  let voiceless_env = is_voiceless_sym(right) || (sc == "modern" && sit.place == "final")
  if voiceless_env {
    heard == "f"
  } else {
    voiced_labial(heard)
  }
}

///|
fn e17_distance(heard : String, sc : String, sit : PhoneSituation) -> Double {
  if heard_follows_voicing(heard, sc, sit) {
    0.02
  } else {
    0.25
  }
}

///|
fn voicing_pair(a : String, b : String) -> Bool {
  pair(a, b, "t", "d") ||
  pair(a, b, "k", "g") ||
  pair(a, b, "p", "b") ||
  pair(a, b, "z", "s") ||
  pair(a, b, "f", "v") ||
  pair(a, b, "ð", "θ")
}

///|
fn contrast_pair(a : String, b : String) -> Bool {
  pair(a, b, "k", "t") ||
  pair(a, b, "r", "l") ||
  pair(a, b, "a", "e") ||
  pair(a, b, "a", "o") ||
  pair(a, b, "u", "i") ||
  pair(a, b, "s", "θ") ||
  pair(a, b, "n", "l")
}

///|
fn e13_pair(a : String, b : String) -> Bool {
  pair(a, b, "k", "c") ||
  pair(a, b, "n", "ɲ") ||
  pair(a, b, "l", "ʎ") ||
  pair(a, b, "ɣ", "ɟ") ||
  pair(a, b, "ɣ", "ʝ")
}

///|
fn postnasal_stop(a : String, b : String, sit : PhoneSituation) -> Bool {
  let left = sym_of(sit.left)
  (left == "n" && pair(a, b, "t", "d")) ||
  (left == "m" && pair(a, b, "p", "b")) ||
  (left == "ŋ" && pair(a, b, "k", "g"))
}

///|
/// Attic consonant length is the geminate (policy E07). Vowel length stays
/// the feature-table accurate band. Returns the distance to use.
fn attic_geminate_distance(
  target : String,
  heard : String,
  base : String,
  scheme : String,
  feature_d : Double,
) -> Double {
  if scheme_short(scheme) != "attic" {
    return feature_d
  }
  if is_vowel_sym(base) {
    return feature_d
  }
  let tl = has_length_mark(target)
  let hl = has_length_mark(heard)
  if tl == hl {
    feature_d
  } else {
    0.25
  }
}

///|
fn sourced_hit(ts : String, hs : String, sc : String, sit : PhoneSituation) -> SrcHit? {
  if sc == "" || ts == hs {
    return None
  }
  if (sc == "modern" || sc == "koine") && pair(ts, hs, "ʝ", "j") {
    return Some(src_hit("E01", 0.02, note_e01))
  }
  if pair(ts, hs, "r", "ɾ") {
    return Some(src_hit("E10", 0.02, ""))
  }
  if pair(ts, hs, "e", "ɛ") || pair(ts, hs, "u", "ʊ") {
    return Some(src_hit("E11", 0.02, ""))
  }
  if pair(ts, hs, "i", "ɪ") || pair(ts, hs, "o", "ɔ") {
    if sc == "erasmian" {
      return Some(src_hit("E11", 0.25, ""))
    }
    return Some(src_hit("E11", 0.02, ""))
  }
  if sc == "koine" &&
    (pair(ts, hs, "θ", "tʰ") ||
    pair(ts, hs, "x", "kʰ") ||
    pair(ts, hs, "f", "pʰ") ||
    pair(ts, hs, "f", "ɸ") ||
    pair(ts, hs, "pʰ", "ɸ")) {
    return Some(src_hit("E22", 0.02, note_e22))
  }
  if sc == "koine" &&
    (pair(ts, hs, "tʰ", "t") || pair(ts, hs, "kʰ", "k") || pair(ts, hs, "pʰ", "p")) {
    return Some(src_hit("E21", 0.25, note_e21))
  }
  if sc == "attic" &&
    (pair(ts, hs, "tʰ", "t") || pair(ts, hs, "kʰ", "k") || pair(ts, hs, "pʰ", "p")) {
    return Some(src_hit("E23", 0.25, note_e23))
  }
  if sc == "koine" && postnasal_stop(ts, hs, sit) {
    return Some(src_hit("E03", 0.02, note_e03))
  }
  if (sc == "modern" || sc == "koine") &&
    diph_left(sit) &&
    ((voiced_labial(ts) && hs == "f") || (voiced_labial(hs) && ts == "f")) {
    return Some(src_hit("E17", e17_distance(hs, sc, sit), note_e17))
  }
  if (sc == "modern" || sc == "koine" || sc == "attic") && pair(ts, hs, "n", "ŋ") {
    if velar_env(sit) {
      return Some(src_hit("E09", 0.02, note_e09))
    }
    return Some(src_hit("E09", 1.0, ""))
  }
  if (sc == "modern" || sc == "koine") && pair(ts, hs, "x", "ç") {
    if is_front_vowel(sym_of(sit.right)) {
      return Some(src_hit("E12", 0.02, note_e12))
    }
    return Some(src_hit("E12", 0.25, note_e12))
  }
  if sc == "modern" && e13_pair(ts, hs) {
    if palatal_env(sit) {
      return Some(src_hit("E13", 0.02, note_e13))
    }
    return Some(src_hit("E13", 1.0, note_e13))
  }
  if sc == "modern" && pair(ts, hs, "i", "j") {
    if is_vowel_sym(sym_of(sit.right)) {
      return Some(src_hit("E15", 0.02, note_e15))
    }
    return Some(src_hit("E15", 1.0, note_e15))
  }
  if sc == "modern" && pair(ts, hs, "ɣ", "g") {
    return Some(src_hit("E28", 0.25, note_e28))
  }
  if sc == "koine" && (pair(ts, hs, "k", "g") || pair(ts, hs, "t", "d")) {
    let d = if gate_open(sit) { 0.25 } else { 0.5 }
    return Some(src_hit("E24", d, note_e24))
  }
  if sc == "koine" && pair(ts, hs, "z", "s") {
    let d = if gate_open(sit) { 0.25 } else { 0.5 }
    return Some(src_hit("E25", d, note_e25))
  }
  if sc == "modern" && voicing_pair(ts, hs) {
    return Some(src_hit("E27", 1.0, ""))
  }
  if contrast_pair(ts, hs) {
    return Some(src_hit("E34", 1.0, ""))
  }
  None
}

///|
/// Curated note for this pair with no neighbor context, or "" when the
/// feature table still writes the note.
pub fn sourced_curated_note(target : String, heard : String, scheme : String) -> String {
  match (norm_phone(target), norm_phone(heard)) {
    (Some((ts, _)), Some((hs, _))) => {
      let sc = scheme_short(scheme)
      if ts == hs {
        let d0 = attic_geminate_distance(target, heard, ts, sc, 0.0)
        if d0 > 0.0 {
          return note_e07
        }
        return ""
      }
      match sourced_hit(ts, hs, sc, PhoneSituation::absent()) {
        Some(row) => row.note
        None => ""
      }
    }
    _ => ""
  }
}

///|
fn apply_sourced_distance(
  target : String,
  heard : String,
  ts : String,
  hs : String,
  scheme : String,
  feature_d : Double,
  same : Bool,
  kept_equiv : Bool,
  sit : PhoneSituation,
) -> (Double, String) {
  let sc = scheme_short(scheme)
  let mut d = feature_d
  let mut note = ""
  if same {
    let gem = attic_geminate_distance(target, heard, ts, sc, feature_d)
    if gem > feature_d {
      d = gem
      note = note_e07
    }
  }
  if kept_equiv {
    return (d, note)
  }
  match sourced_hit(ts, hs, sc, sit) {
    None => (d, note)
    Some(row) =>
      // ɔː versus o is length plus quality, not the notation twin.
      if row.id == "E11" && has_length_mark(target) != has_length_mark(heard) {
        (d, note)
      } else {
        (row.d, row.note)
      }
  }
}

///|
fn tier_of_distance(d : Double, tol : Double) -> String {
  if d <= accurate_max {
    "accurate"
  } else if d <= tol {
    "tolerated"
  } else {
    "not-a-match"
  }
}

///|
fn row_distance(
  d : Double,
  note : String,
  goal : String,
  target : String,
  heard : String,
) -> PhoneDistance {
  let (tol, _) = goal_of(goal)
  let tier = tier_of_distance(d, tol)
  let text = if note != "" {
    note
  } else if tier == "accurate" {
    "Either sound is correct in this reading."
  } else {
    "No comparison available for this sound."
  }
  {
    d: round3(d),
    sim: sim_of(d, tol),
    tier,
    note: text,
    advice: "",
    said: phone_label(heard),
    target: phone_label(target),
  }
}

///|
fn seq_eq(xs : Array[String], ys : Array[String]) -> Bool {
  if xs.length() != ys.length() {
    return false
  }
  for i in 0..<xs.length() {
    if sym_of(xs[i]) != sym_of(ys[i]) {
      return false
    }
  }
  true
}

///|
fn drop_at(xs : Array[String], k : Int) -> Array[String] {
  let out : Array[String] = []
  for i, x in xs {
    if i != k {
      out.push(x)
    }
  }
  out
}

///|
fn nasal_before_stop(nasal : String, stop : String) -> Bool {
  (nasal == "n" && stop == "d") ||
  (nasal == "m" && stop == "b") ||
  (nasal == "ŋ" && stop == "g")
}

///|
fn cheap_nasal_index(xs : Array[String], i : Int) -> Bool {
  if i < 0 || i + 1 >= xs.length() {
    return false
  }
  nasal_before_stop(sym_of(xs[i]), sym_of(xs[i + 1]))
}

///|
fn cheap_geminate_index(xs : Array[String], i : Int) -> Bool {
  if i < 0 || i >= xs.length() {
    return false
  }
  let p = sym_of(xs[i])
  if !geminate_sym(p) {
    return false
  }
  let prev = if i > 0 { sym_of(xs[i - 1]) } else { "" }
  let next = if i + 1 < xs.length() { sym_of(xs[i + 1]) } else { "" }
  p == prev || p == next
}

///|
fn cheap_glide_index(xs : Array[String], i : Int) -> Bool {
  if i <= 0 || i + 1 >= xs.length() {
    return false
  }
  if sym_of(xs[i]) != "i" {
    return false
  }
  let prev = sym_of(xs[i - 1])
  (prev == "ʝ" || prev == "j") && is_vowel_sym(sym_of(xs[i + 1]))
}

///|
fn one_drop_matches(
  longer : Array[String],
  shorter : Array[String],
  modern_nasal : Bool,
  geminate : Bool,
  glide : Bool,
) -> Bool {
  if longer.length() != shorter.length() + 1 {
    return false
  }
  for i in 0..<longer.length() {
    let ok = (modern_nasal && cheap_nasal_index(longer, i)) ||
      (geminate && cheap_geminate_index(longer, i)) ||
      (glide && cheap_glide_index(longer, i))
    if ok && seq_eq(drop_at(longer, i), shorter) {
      return true
    }
  }
  false
}

///|
fn e19_span(target : Array[String], heard : Array[String], sc : String) -> SrcHit? {
  let t0 = if target.length() > 0 { sym_of(target[0]) } else { "" }
  let t1 = if target.length() > 1 { sym_of(target[1]) } else { "" }
  let h0 = if heard.length() > 0 { sym_of(heard[0]) } else { "" }
  let h1 = if heard.length() > 1 { sym_of(heard[1]) } else { "" }
  if sc == "koine" && heard.length() == 2 && target.length() == 1 {
    if h0 == "a" && h1 == "i" && (t0 == "ɛ" || t0 == "e") {
      return Some(src_hit("E19", 0.25, note_e19))
    }
    if h0 == "e" && h1 == "i" && t0 == "i" {
      return Some(src_hit("E19", 0.25, note_e19))
    }
    if h0 == "o" && h1 == "i" && t0 == "y" {
      return Some(src_hit("E19", 0.25, note_e19))
    }
  }
  if sc == "attic" && target.length() == 2 && heard.length() == 1 {
    if t0 == "a" && t1 == "i" && (h0 == "e" || h0 == "ɛ") {
      return Some(src_hit("E19", 0.25, note_e19))
    }
    if t0 == "o" && t1 == "i" && h0 == "y" {
      return Some(src_hit("E19", 0.25, note_e19))
    }
  }
  None
}

///|
fn pairwise_accurate(
  target : Array[String],
  heard : Array[String],
  scheme : String,
) -> SrcHit? {
  if target.length() == 0 || target.length() != heard.length() {
    return None
  }
  let mut worst = 0.0
  let mut note = ""
  let mut diff = false
  for i in 0..<target.length() {
    if sym_of(target[i]) == sym_of(heard[i]) {
      continue
    }
    diff = true
    let right = if i + 1 < target.length() { target[i + 1] } else { "" }
    let right2 = if i + 2 < target.length() { target[i + 2] } else { "" }
    let sit : PhoneSituation = {
      left: if i > 0 { target[i - 1] } else { "" },
      right,
      right2,
      place: if i + 1 == target.length() { "final" } else { "medial" },
      posterior: -1.0,
    }
    let row = phone_distance_in(target[i], heard[i], scheme, "gracious", sit)
    if row.tier != "accurate" {
      return None
    }
    if row.d > worst {
      worst = row.d
      note = row.note
    }
  }
  if !diff {
    return Some(src_hit("same", 0.0, ""))
  }
  Some(src_hit("seq", worst, note))
}

///|
/// Distance for a short phone sequence. Identical phones are 0.
/// One optional nasal, one geminate copy, or one absorbed ι costs 0.02.
/// Koine postnasal voicing is the accurate phone row inside the sequence.
/// Diphthong spans are 0.25. Anything else is not a sourced span.
pub fn sequence_distance(
  target : Array[String],
  heard : Array[String],
  scheme : String,
  goal : String,
) -> PhoneDistance {
  let sc = scheme_short(scheme)
  let shown_t = if target.length() > 0 { target[0] } else { "" }
  let shown_h = if heard.length() > 0 { heard[0] } else { "" }
  match e19_span(target, heard, sc) {
    Some(row) => return row_distance(row.d, row.note, goal, shown_t, shown_h)
    None => ()
  }
  match pairwise_accurate(target, heard, scheme) {
    Some(row) =>
      if row.id != "same" || target.length() == heard.length() {
        let note = if row.d <= accurate_max && row.note == "" {
          ""
        } else {
          row.note
        }
        if row.id == "same" {
          return phone_distance(shown_t, shown_h, scheme, goal)
        }
        return row_distance(row.d, note, goal, shown_t, shown_h)
      }
    None => ()
  }
  let modern = sc == "modern"
  let gem = sc == "modern" || sc == "koine"
  if one_drop_matches(target, heard, modern, gem, modern) {
    let note = if modern && target.length() == heard.length() + 1 {
      let mut nasal = false
      for i in 0..<target.length() {
        if cheap_nasal_index(target, i) && seq_eq(drop_at(target, i), heard) {
          nasal = true
        }
      }
      if nasal {
        note_e02
      } else if modern {
        let mut glide = false
        for i in 0..<target.length() {
          if cheap_glide_index(target, i) && seq_eq(drop_at(target, i), heard) {
            glide = true
          }
        }
        if glide { note_e14 } else { note_e06_modern }
      } else {
        note_e06_koine
      }
    } else if sc == "koine" {
      note_e06_koine
    } else {
      note_e06_modern
    }
    return row_distance(0.02, note, goal, shown_t, shown_h)
  }
  if one_drop_matches(heard, target, modern, false, modern) {
    // Nasal insertion, or an extra ι. A doubled hearing is not the collapse.
    let mut nasal = false
    let mut glide = false
    for i in 0..<heard.length() {
      if cheap_nasal_index(heard, i) && seq_eq(drop_at(heard, i), target) {
        nasal = true
      }
      if cheap_glide_index(heard, i) && seq_eq(drop_at(heard, i), target) {
        glide = true
      }
    }
    if nasal {
      return row_distance(0.02, note_e02, goal, shown_t, shown_h)
    }
    if glide {
      return row_distance(0.02, note_e14, goal, shown_t, shown_h)
    }
  }
  if target.length() == 1 && heard.length() == 1 {
    return phone_distance(target[0], heard[0], scheme, goal)
  }
  row_distance(1.0, "", goal, shown_t, shown_h)
}

///|
fn catalog_row(
  id : String,
  policy : Bool,
  a : String,
  b : String,
  d : String,
  tier : String,
  note : String,
  ctx : String,
  src : String,
) -> String {
  "{\"id\":" +
  jstr(id) +
  ",\"policy\":" +
  (if policy { "true" } else { "false" }) +
  ",\"pair\":[" +
  jstr(a) +
  "," +
  jstr(b) +
  "],\"d\":" +
  d +
  ",\"tier\":" +
  jstr(tier) +
  ",\"note\":" +
  jstr(note) +
  ",\"ctx\":" +
  jstr(ctx) +
  ",\"src\":" +
  jstr(src) +
  "}"
}

///|
fn push_row(rows : Array[String], row : String) -> Unit {
  rows.push(row)
}

///|
/// JSON array of sourced rows for one short scheme. Policy rows set `"policy":true`.
fn sourced_rows_json(scheme : String) -> String {
  let sc = scheme_short(scheme)
  let rows : Array[String] = []
  let src_holton_arvaniti = "Holton ch. 1 §1.4 [V]; Arvaniti 2007 pp. 112–113, 124 [V]"
  if sc == "modern" || sc == "koine" {
    push_row(
      rows,
      catalog_row(
        "E01",
        false,
        "ʝ",
        "j",
        "0.02",
        "accurate",
        note_e01,
        "γ before a front vowel",
        if sc == "koine" {
          "Holton ch. 1 §1.4 [V]; Arvaniti 2007 pp. 112–113, 124 [V]; Horrocks §6.4 (19) [j] before front vowels [V]"
        } else {
          src_holton_arvaniti
        },
      ),
    )
  }
  if sc == "modern" {
    push_row(
      rows,
      catalog_row(
        "E02",
        false,
        "n d",
        "d",
        "0.02",
        "accurate",
        note_e02,
        "medial ντ, μπ, γκ, γγ; nasal deletion or insertion",
        "Holton §1.4 [V]; Arvaniti 2007 p. 104 [V]",
      ),
    )
  }
  if sc == "koine" {
    push_row(
      rows,
      catalog_row(
        "E03",
        false,
        "n t",
        "n d",
        "0.02",
        "accurate",
        note_e03,
        "after n, m, or ŋ; voiceless remains the ipa() target",
        "Horrocks §6.4 (18) [V]; Gignac §C pp. 76–86 [V]",
      ),
    )
  }
  if sc == "modern" || sc == "koine" {
    push_row(
      rows,
      catalog_row(
        "E06",
        false,
        "C C",
        "C",
        "0.02",
        "accurate",
        if sc == "koine" { note_e06_koine } else { note_e06_modern },
        "σσ λλ ρρ ττ κκ μμ νν ππ ββ heard as one phone",
        if sc == "koine" {
          "Horrocks §6.4 (22) [V]; Gignac §F p. 154 [V]"
        } else {
          "Holton §1.4 [V]"
        },
      ),
    )
  }
  if sc == "attic" {
    push_row(
      rows,
      catalog_row(
        "E07",
        true,
        "Cː",
        "C",
        "0.25",
        "tolerated",
        note_e07,
        "Attic consonant geminate written with length",
        "Policy. Allen, double consonants, pp. 10–12: a double letter is a lengthened sound [V]",
      ),
    )
  }
  if sc == "modern" || sc == "koine" || sc == "attic" {
    push_row(
      rows,
      catalog_row(
        "E09",
        false,
        "n",
        "ŋ",
        "0.02",
        "accurate",
        note_e09,
        "before k, g, x, ɣ; outside that context not-a-match",
        "Allen, γ before a velar is [ŋ] [V]; Holton, [ŋ] before /g/ [V]",
      ),
    )
  }
  push_row(
    rows,
    catalog_row(
      "E10",
      false,
      "r",
      "ɾ",
      "0.02",
      "accurate",
      "",
      "any position",
      "Arvaniti 2007 pp. 109–110 [V]; Allen, a rolled r [V]",
    ),
  )
  push_row(
    rows,
    catalog_row(
      "E11",
      true,
      "e/i/o/u",
      "ɛ/ɪ/ɔ/ʊ",
      if sc == "erasmian" { "0.02" } else { "0.02" },
      "accurate",
      "",
      if sc == "erasmian" {
        "Erasmian i/ɪ and o/ɔ stay 0.25"
      } else {
        "notation twins"
      },
      "Policy. Notation twins; no historical claim. Holton writes plain [e i o u] for Modern [V]",
    ),
  )
  if sc == "modern" || sc == "koine" {
    push_row(
      rows,
      catalog_row(
        "E12",
        false,
        "x",
        "ç",
        "0.02",
        "accurate",
        note_e12,
        "before a front vowel; 0.25 outside that context",
        "Arvaniti 2007 p. 112 [V]; Holton, palatalized x before a front vowel [V]",
      ),
    )
  }
  if sc == "modern" {
    push_row(
      rows,
      catalog_row(
        "E13",
        false,
        "k/n/l",
        "c/ɲ/ʎ",
        "0.02",
        "accurate",
        note_e13,
        "before ι/ε, and before ι plus a back vowel; the 41-phone set has no c, ɲ, ʎ",
        "Arvaniti 2007 pp. 112–113 [V]; Holton [kʲ gʲ] [V]",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E14",
        false,
        "ʝ i V",
        "ʝ V",
        "0.02",
        "accurate",
        note_e14,
        "ι between ʝ or j and a vowel",
        "Holton §1.4 [V]",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E15",
        false,
        "i",
        "j",
        "0.02",
        "accurate",
        note_e15,
        "unstressed ι before a vowel; stress is not in the phone string, so any ι before a vowel",
        "Holton §1.2 [V]; Arvaniti 2007 p. 124 [V]",
      ),
    )
  }
  if sc == "modern" || sc == "koine" {
    push_row(
      rows,
      catalog_row(
        "E17",
        false,
        "v",
        "f",
        "0.02",
        "accurate",
        note_e17,
        "αυ/ευ/ηυ coda; 0.02 when the hearing follows the voicing rule, otherwise 0.25. Koine word-final [f] stays the existing tolerated row",
        "Holton §1.3 [V]; Horrocks §6.4 [V]; Buth [V]",
      ),
    )
  }
  if sc == "koine" {
    push_row(
      rows,
      catalog_row(
        "E18",
        false,
        "β",
        "v",
        "0",
        "accurate",
        "",
        "existing equivalence",
        "Buth [V]; existing library equivalence",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E19",
        false,
        "ɛ/i/y/u",
        "a i / e i / o i",
        "0.25",
        "tolerated",
        note_e19,
        "offglide hearing of a Koine monophthong; the monophthong itself is accurate",
        "Horrocks, Koine vowels: αι = [e], ει = [i], οι/υ = [y] [V]",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E21",
        false,
        "tʰ/kʰ/pʰ",
        "t/k/p",
        "0.25",
        "tolerated",
        note_e21,
        "aspiration dropped",
        "Gignac §D pp. 86–98 [V]; Gignac §E pp. 98–102 [V]; Horrocks §6.4 (20) [V]",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E22",
        false,
        "tʰ/kʰ/pʰ",
        "θ/x/f",
        "0.02",
        "accurate",
        note_e22,
        "fricative and aspirate are both published values; ipa() still emits the aspirate",
        "Horrocks §6.4 (20d) [V]; Buth [V]",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E24",
        true,
        "k/t",
        "g/d",
        "0.25",
        "tolerated",
        note_e24,
        "Koine only; gracious only when the target posterior is at least 0.15; otherwise distance 0.5 and not-a-match",
        "Policy. Gignac §C pp. 76–86 [V]. The tolerance is a design choice",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E25",
        true,
        "z",
        "s",
        "0.25",
        "tolerated",
        note_e25,
        "Koine only; same confidence gate as E24. Gignac and Horrocks disagree on whether /z/ is phonemic",
        "Policy. Gignac: no phonemic voiced/voiceless sibilant distinction [V]; Horrocks §6.4 (21): /z/ became a phoneme [V]",
      ),
    )
  }
  if sc == "attic" {
    push_row(
      rows,
      catalog_row(
        "E19",
        true,
        "a i / o i",
        "e / y",
        "0.25",
        "tolerated",
        note_e19,
        "Attic αι and οι stay diphthongs; the monophthong is tolerated. αυ/ευ have no single monophthong phone in the verified note",
        "Policy. Allen treats οι as a diphthong [V]. Horrocks gives the Koine monophthong values [V]",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E23",
        true,
        "tʰ/kʰ/pʰ",
        "t/k/p",
        "0.25",
        "tolerated",
        note_e23,
        "gracious only; aspiration is phonemic, so the tolerance is policy",
        "Policy. Allen pp. 16 ff. [V]",
      ),
    )
  }
  if sc == "modern" {
    push_row(
      rows,
      catalog_row(
        "E27",
        false,
        "t/k/p/s/f/θ",
        "d/g/b/z/v/ð",
        "1",
        "not-a-match",
        "",
        "phonemic voicing; not the αυ/ευ coda, which is E17",
        "Holton §1.4, phonemic voicing contrast [V]",
      ),
    )
    push_row(
      rows,
      catalog_row(
        "E28",
        true,
        "ɣ",
        "g",
        "0.25",
        "tolerated",
        note_e28,
        "manner, not the γκ stop",
        "Policy. Holton §1.4: [ɣ] is the fricative and [g] is for γκ/γγ [V]",
      ),
    )
  }
  push_row(
    rows,
    catalog_row(
      "E34",
      false,
      "k/r/a/u/s/n",
      "t/l/e/i/θ/l",
      "1",
      "not-a-match",
      "",
      "phonemic contrasts; no onset-phantom exception in this library",
      "Holton §1.4 consonant chart [V]; Allen, consonant tables [V]",
    ),
  )
  let sb = StringBuilder()
  sb.write_char('[')
  for i, row in rows {
    if i > 0 {
      sb.write_char(',')
    }
    sb.write_string(row)
  }
  sb.write_char(']')
  sb.to_string()
}
