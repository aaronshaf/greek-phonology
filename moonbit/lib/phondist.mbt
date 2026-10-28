// Phonetic distance table. Opt-in: ipa() never calls it.
// Port of the playground's phondist.js (hand-weighted articulatory features).
// A learner goal changes the tier and the credit only. d, note, and advice do not change.
// Unknown phones return d = 1 and tier "not-a-match"; they never throw.

///|
pub(all) struct PhoneLabel {
  say : String
  ex : String
  kind : String
}

///|
pub(all) struct PhoneDistance {
  d : Double
  sim : Double
  tier : String
  note : String
  advice : String
  said : PhoneLabel
  target : PhoneLabel
}

///|
pub(all) struct CreditHit {
  phone : String
  p : Double
  sim : Double
  d : Double
  tier : String
}

///|
pub(all) struct PhoneCredit {
  exact : Double
  near : Double
  combined : Double
  best : CreditHit?
}

///|
priv struct Feat {
  cls : String
  pl : Double
  nas : Double
  cont : Double
  son : Double
  stri : Double
  lat : Double
  rho : Double
  aff : Double
  voi : Double
  asp : Double
  gl : Double
  h : Double
  b : Double
  r : Double
  len : Double
  sym : String
}

///|
let accurate_max : Double = 0.02

///|
fn goal_of(goal : String) -> (Double, Double) {
  // Proved: strict <= gracious <= lenient on both tolerance and credit cap.
  // Strict acceptance implies the looser goals. Accurate is always accepted.
  // Distance 1 and an ungated 0.5 are never accepted. 0.25 is gracious-only.
  ignore(@kernel.goal_bounds_ordered())
  ignore(@kernel.strict_accepts_implies_looser(0))
  ignore(@kernel.strict_accepts_implies_looser(20))
  ignore(@kernel.strict_accepts_implies_looser(250))
  ignore(@kernel.strict_accepts_implies_looser(500))
  ignore(@kernel.strict_accepts_implies_looser(1000))
  ignore(@kernel.accurate_band_accepted())
  ignore(@kernel.full_miss_rejected())
  ignore(@kernel.tolerated_band(250))
  ignore(@kernel.ungated_rejected())
  if goal == "strict" {
    (0.20, 0.60)
  } else if goal == "lenient" {
    (0.42, 0.90)
  } else {
    (0.33, 0.75)
  }
}

///|
fn place_of(name : String) -> Double {
  match name {
    "bilabial" => 0.0
    "labiodental" => 0.12
    "dental" => 0.50
    "alveolar" => 0.58
    "postalveolar" => 0.68
    "palatal" => 0.76
    "velar" => 0.92
    _ => 1.0
  }
}

///|
fn flag(n : Int) -> Double {
  n.to_double()
}

///|
fn cons(
  sym : String,
  pl : String,
  voi : Int,
  cont : Int,
  nas : Int,
  son : Int,
  stri : Int,
  lat : Int,
  rho : Double,
  aff : Int,
  gl : Int,
) -> Feat {
  {
    cls: "c",
    pl: place_of(pl),
    nas: flag(nas),
    cont: flag(cont),
    son: flag(son),
    stri: flag(stri),
    lat: flag(lat),
    rho,
    aff: flag(aff),
    voi: flag(voi),
    asp: 0.0,
    gl: flag(gl),
    h: 0.0,
    b: 0.0,
    r: 0.0,
    len: 0.0,
    sym,
  }
}

///|
fn vfeat(sym : String, h : Double, b : Double, r : Double) -> Feat {
  {
    cls: "v",
    pl: 0.0,
    nas: 0.0,
    cont: 0.0,
    son: 0.0,
    stri: 0.0,
    lat: 0.0,
    rho: 0.0,
    aff: 0.0,
    voi: 0.0,
    asp: 0.0,
    gl: 0.0,
    h,
    b,
    r,
    len: 0.0,
    sym,
  }
}

///|
fn with_asp(f : Feat) -> Feat {
  {
    cls: f.cls,
    pl: f.pl,
    nas: f.nas,
    cont: f.cont,
    son: f.son,
    stri: f.stri,
    lat: f.lat,
    rho: f.rho,
    aff: f.aff,
    voi: f.voi,
    asp: 1.0,
    gl: f.gl,
    h: f.h,
    b: f.b,
    r: f.r,
    len: f.len,
    sym: f.sym + "ʰ",
  }
}

///|
fn with_len(f : Feat, len : Double) -> Feat {
  {
    cls: f.cls,
    pl: f.pl,
    nas: f.nas,
    cont: f.cont,
    son: f.son,
    stri: f.stri,
    lat: f.lat,
    rho: f.rho,
    aff: f.aff,
    voi: f.voi,
    asp: f.asp,
    gl: f.gl,
    h: f.h,
    b: f.b,
    r: f.r,
    len,
    sym: f.sym,
  }
}

///|
fn base_feat(sym : String) -> Feat? {
  match sym {
    "p" => Some(cons(sym, "bilabial", 0, 0, 0, 0, 0, 0, 0.0, 0, 0))
    "b" => Some(cons(sym, "bilabial", 1, 0, 0, 0, 0, 0, 0.0, 0, 0))
    "m" => Some(cons(sym, "bilabial", 1, 0, 1, 1, 0, 0, 0.0, 0, 0))
    "ɸ" => Some(cons(sym, "bilabial", 0, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "β" => Some(cons(sym, "bilabial", 1, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "f" => Some(cons(sym, "labiodental", 0, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "v" => Some(cons(sym, "labiodental", 1, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "w" => Some(cons(sym, "velar", 1, 1, 0, 1, 0, 0, 0.0, 0, 1))
    "t" => Some(cons(sym, "alveolar", 0, 0, 0, 0, 0, 0, 0.0, 0, 0))
    "d" => Some(cons(sym, "alveolar", 1, 0, 0, 0, 0, 0, 0.0, 0, 0))
    "n" => Some(cons(sym, "alveolar", 1, 0, 1, 1, 0, 0, 0.0, 0, 0))
    "s" => Some(cons(sym, "alveolar", 0, 1, 0, 0, 1, 0, 0.0, 0, 0))
    "z" => Some(cons(sym, "alveolar", 1, 1, 0, 0, 1, 0, 0.0, 0, 0))
    "θ" => Some(cons(sym, "dental", 0, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "ð" => Some(cons(sym, "dental", 1, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "l" => Some(cons(sym, "alveolar", 1, 1, 0, 1, 0, 1, 0.0, 0, 0))
    "r" => Some(cons(sym, "alveolar", 1, 1, 0, 1, 0, 0, 1.0, 0, 0))
    "ɾ" => Some(cons(sym, "alveolar", 1, 0, 0, 1, 0, 0, 0.7, 0, 0))
    "d͡z" => Some(cons(sym, "alveolar", 1, 0, 0, 0, 1, 0, 0.0, 1, 0))
    "ç" => Some(cons(sym, "palatal", 0, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "ʝ" => Some(cons(sym, "palatal", 1, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "j" => Some(cons(sym, "palatal", 1, 1, 0, 1, 0, 0, 0.0, 0, 1))
    "c" => Some(cons(sym, "palatal", 0, 0, 0, 0, 0, 0, 0.0, 0, 0))
    "ɲ" => Some(cons(sym, "palatal", 1, 0, 1, 1, 0, 0, 0.0, 0, 0))
    "ʎ" => Some(cons(sym, "palatal", 1, 1, 0, 1, 0, 1, 0.0, 0, 0))
    "ɟ" => Some(cons(sym, "palatal", 1, 0, 0, 0, 0, 0, 0.0, 0, 0))
    "k" => Some(cons(sym, "velar", 0, 0, 0, 0, 0, 0, 0.0, 0, 0))
    "g" => Some(cons(sym, "velar", 1, 0, 0, 0, 0, 0, 0.0, 0, 0))
    "x" => Some(cons(sym, "velar", 0, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "ɣ" => Some(cons(sym, "velar", 1, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "ŋ" => Some(cons(sym, "velar", 1, 0, 1, 1, 0, 0, 0.0, 0, 0))
    "h" => Some(cons(sym, "glottal", 0, 1, 0, 0, 0, 0, 0.0, 0, 0))
    "a" => Some(vfeat(sym, 1.0, 0.5, 0.0))
    "e" => Some(vfeat(sym, 0.5, 0.0, 0.0))
    "ɛ" => Some(vfeat(sym, 0.7, 0.0, 0.0))
    "i" => Some(vfeat(sym, 0.0, 0.0, 0.0))
    "ɪ" => Some(vfeat(sym, 0.2, 0.1, 0.0))
    "y" => Some(vfeat(sym, 0.0, 0.0, 1.0))
    "o" => Some(vfeat(sym, 0.5, 1.0, 1.0))
    "ɔ" => Some(vfeat(sym, 0.7, 1.0, 1.0))
    "u" => Some(vfeat(sym, 0.0, 1.0, 1.0))
    "ʊ" => Some(vfeat(sym, 0.2, 0.9, 1.0))
    _ => None
  }
}

///|
fn strip_len(p : String) -> (String, Double) {
  let mut s = ""
  let mut len = 0.0
  let chars = p.to_array()
  let mut i = 0
  while i < chars.length() {
    let c = chars[i]
    if c == 'ˑ' {
      i += 1
    } else if c == 'ː' && i == chars.length() - 1 {
      len = 1.0
      i += 1
    } else {
      s = s + c.to_string()
      i += 1
    }
  }
  (s, len)
}

///|
fn lookup_feat(sym : String) -> Feat? {
  match base_feat(sym) {
    Some(f) => Some(f)
    None =>
      if sym.has_suffix("ʰ") && sym.length() > 1 {
        let base = sym[0:sym.length() - 1].to_owned()
        match base_feat(base) {
          Some(f) => Some(with_asp(f))
          None => None
        }
      } else {
        None
      }
  }
}

///|
fn norm_phone(p : String) -> (String, Double)? {
  if p == "" {
    return None
  }
  let (s0, len) = strip_len(p)
  let mut s = s0
  if s == "ɡ" {
    s = "g"
  }
  match lookup_feat(s) {
    Some(_) => Some((s, len))
    None => None
  }
}

///|
fn dabs(x : Double) -> Double {
  if x < 0.0 {
    -x
  } else {
    x
  }
}

///|
fn dmin(a : Double, b : Double) -> Double {
  if a < b { a } else { b }
}

///|
fn feat_dist(a : Feat, b : Feat) -> Double {
  if a.cls == "c" && b.cls == "c" {
    let s = 1.0 * dabs(a.pl - b.pl) +
      0.55 * dabs(a.nas - b.nas) +
      0.22 * dabs(a.cont - b.cont) +
      0.30 * dabs(a.son - b.son) +
      0.12 * dabs(a.stri - b.stri) +
      0.45 * dabs(a.lat - b.lat) +
      0.30 * dabs(a.rho - b.rho) +
      0.15 * dabs(a.aff - b.aff) +
      0.28 * dabs(a.voi - b.voi) +
      0.12 * dabs(a.asp - b.asp) +
      0.05 * dabs(a.len - b.len)
    dmin(1.0, s)
  } else if a.cls == "v" && b.cls == "v" {
    let s = 0.80 * dabs(a.h - b.h) +
      0.30 * dabs(a.b - b.b) +
      0.30 * dabs(a.r - b.r) +
      0.05 * dabs(a.len - b.len)
    dmin(1.0, s)
  } else {
    let (g, v) = if a.cls == "c" { (a, b) } else { (b, a) }
    if g.gl > 0.0 {
      let mate = if g.sym == "j" {
        vfeat("i", 0.0, 0.0, 0.0)
      } else {
        vfeat("u", 0.0, 1.0, 1.0)
      }
      dmin(1.0, 0.18 + feat_dist(mate, v))
    } else {
      1.0
    }
  }
}

///|
fn round3(d : Double) -> Double {
  (d * 1000.0).round() / 1000.0
}

///|
fn sim_of(d : Double, tol : Double) -> Double {
  if d <= accurate_max {
    return 1.0
  }
  if d > tol {
    return 0.0
  }
  let ratio = 1.0 - d / (tol + 0.12)
  let base = if ratio < 0.0 { 0.0 } else { ratio }
  let s = 0.9 * @math.pow(base, 1.2)
  let fade_raw = (tol - d) / 0.04
  let fade = if fade_raw < 1.0 { fade_raw } else { 1.0 }
  round3(s * fade)
}

///|
fn scheme_short(s : String) -> String {
  let x = s.to_lower()
  if x.contains("koine") {
    "koine"
  } else if x.contains("attic") {
    "attic"
  } else if x.contains("modern") {
    "modern"
  } else if x.contains("erasm") {
    "erasmian"
  } else {
    ""
  }
}

///|
fn beta_v(t : String, h : String) -> Bool {
  (t == "β" && h == "v") || (t == "v" && h == "β")
}

///|
fn equivalent(sc : String, t : String, h : String) -> Bool {
  let vowel = (sc == "koine" || sc == "modern") &&
    ((t == "o" && h == "ɔ") || (t == "ɔ" && h == "o"))
  // Koine writes the letter β as [v] and the voiced αυ/ευ/ηυ coda as [β] or [v].
  // Aaron, 2026-10-27: those two symbols are one sound in this reconstruction.
  // [f] stays a tolerated hearing, not an equivalent. Other schemes keep the
  // feature-table distance (bilabial versus labiodental).
  let fricative = sc == "koine" && beta_v(t, h)
  vowel || fricative
}

///|
fn sch_note(sc : String, sym : String) -> String {
  if sc == "koine" {
    match sym {
      "ð" => "In Koine reading δ is a soft “th” as in this, air flowing"
      "β" => "In Koine reading β is a soft “v” as in van, air flowing"
      "ɣ" => "In Koine reading γ is a soft “gh”, as in loch but with the voice on, air flowing"
      "ɛ" => "In Koine reading ε is an open “eh” as in bed"
      "y" => "In Koine reading υ is “ü” (lips rounded, tongue forward)"
      "tʰ" => "In Koine reading θ is t with a puff of air"
      "pʰ" => "In Koine reading φ is p with a puff of air"
      "kʰ" => "In Koine reading χ is k with a puff of air"
      _ => ""
    }
  } else if sc == "attic" {
    match sym {
      "ɔ" => "In restored Attic ω is a long open “aw” as in thought"
      "y" => "In restored Attic υ is “ü” (lips rounded, tongue forward)"
      "tʰ" => "In restored Attic θ is t with a puff of air"
      "pʰ" => "In restored Attic φ is p with a puff of air"
      "kʰ" => "In restored Attic χ is k with a puff of air"
      _ => ""
    }
  } else if sc == "modern" {
    match sym {
      "ð" => "In Modern Greek δ is a soft “th” as in this, air flowing"
      "ɣ" => "In Modern Greek γ is a soft “gh”, as in loch but with the voice on, air flowing"
      "θ" => "In Modern Greek θ is “th” as in think"
      "v" => "In Modern Greek β is “v” as in van"
      _ => ""
    }
  } else if sc == "erasmian" {
    match sym {
      "ʊ" => "In the Erasmian reading, ο, ω, and ου can end in a short “oo” as in book"
      "x" => "In the Erasmian reading χ is a “ch” as in loch"
      _ => ""
    }
  } else {
    ""
  }
}

///|
fn label_of(sym : String) -> (String, String, String) {
  match sym {
    "a" => ("ah", "father", "an open “ah”")
    "e" => ("ay", "say", "a closed “ay”")
    "ɛ" => ("eh", "bed", "an open “eh”")
    "i" => ("ee", "machine", "a closed “ee”")
    "ɪ" => ("ih", "bit", "a short “ih”")
    "o" => ("oh", "go", "a closed “oh”")
    "ɔ" => ("aw", "thought", "an open “aw”")
    "u" => ("oo", "food", "a closed “oo”")
    "ʊ" => ("oo", "book", "a short “oo”")
    "y" => ("ü", "German über", "“ee” said with rounded lips")
    "p" => ("p", "spin", "a stop with no puff")
    "pʰ" => ("p + puff", "pin", "a stop with a puff of air")
    "b" => ("b", "bed", "a voiced stop")
    "t" => ("t", "stop", "a stop with no puff")
    "tʰ" => ("t + puff", "tin", "a stop with a puff of air")
    "d" => ("d", "dog", "a voiced stop")
    "k" => ("k", "skin", "a stop with no puff")
    "kʰ" => ("k + puff", "kin", "a stop with a puff of air")
    "g" => ("g", "go", "a voiced stop")
    "θ" => ("th", "think", "a soft, voiceless sound with air flowing")
    "ð" => ("th", "this", "a soft, voiced sound with air flowing")
    "f" => ("f", "fan", "a voiceless hiss through lip and teeth")
    "v" => ("v", "van", "a voiced buzz through lip and teeth")
    "s" => ("s", "sun", "a voiceless hiss")
    "z" => ("z", "zoo", "a voiced buzz")
    "x" => ("ch", "Scottish loch", "a rough, voiceless “ch” with air flowing")
    "ɣ" => ("gh", "loch, but with voice", "a soft, voiced “gh” with air flowing")
    "ç" => ("h", "hue", "a light “h” as in hue")
    "ʝ" => ("y", "soft yes", "a soft, buzzing “y”")
    "h" => ("h", "hat", "a breathy “h”")
    "m" => ("m", "man", "a nasal hum, lips closed")
    "n" => ("n", "net", "a nasal hum, tongue up")
    "ŋ" => ("ng", "sing", "a nasal hum, back of the tongue")
    "l" => ("l", "let", "a side-flowing “l”")
    "r" => ("rolled r", "Spanish perro", "a rolled “r”")
    "ɾ" => ("tapped r", "Spanish pero", "a quick tapped “r”")
    "j" => ("y", "yes", "a gliding “y”")
    "c" => ("ky", "cue", "a stop made further forward, as in cue")
    "ɲ" => ("ny", "canyon", "an “n” made further forward, as in canyon")
    "ʎ" => ("ly", "million", "an “l” made further forward, as in million")
    "ɟ" => ("gy", "argue", "a voiced stop made further forward")
    "w" => ("w", "we", "a gliding “w”")
    "β" => ("v", "van, but with both lips", "a soft, voiced “v” with both lips and air flowing")
    "ɸ" => ("f", "fan, but with both lips", "a soft “f” with both lips")
    "d͡z" => ("dz", "adze", "a “d” released into a “z”")
    _ => (sym, "", "the sound " + sym)
  }
}

///|
pub fn phone_label(p : String) -> PhoneLabel {
  match norm_phone(p) {
    None => { say: p, ex: "", kind: "a sound outside this table" }
    Some((sym, len)) => {
      let (say, ex, kind0) = label_of(sym)
      let kind = if len > 0.0 { kind0 + ", held long" } else { kind0 }
      { say, ex, kind }
    }
  }
}

///|
fn manner_word(f : Feat) -> String {
  if f.cls == "v" {
    "a vowel"
  } else if f.nas > 0.0 {
    "a nasal"
  } else if f.lat > 0.0 {
    "an “l”"
  } else if f.rho > 0.0 {
    "an “r”"
  } else if f.gl > 0.0 {
    "a glide"
  } else if f.aff > 0.0 {
    "a stop released into a hiss"
  } else if f.stri > 0.0 {
    "a hiss"
  } else if f.cont > 0.0 {
    "a sound with air flowing"
  } else {
    "a stop"
  }
}

///|
fn place_name(x : Double) -> String {
  let names = ["bilabial", "labiodental", "dental", "alveolar", "postalveolar", "palatal", "velar", "glottal"]
  let mut best = "bilabial"
  let mut bd = 9.0
  for name in names {
    let d = dabs(place_of(name) - x)
    if d < bd {
      bd = d
      best = name
    }
  }
  best
}

///|
fn place_tip(name : String) -> String {
  match name {
    "bilabial" => "use both lips, not the teeth"
    "labiodental" => "touch your top teeth to your lower lip"
    "dental" => "put the tongue tip lightly against the teeth"
    "alveolar" => "put the tongue tip on the ridge just behind the teeth"
    "postalveolar" => "raise the middle of the tongue toward the hard palate"
    "palatal" => "raise the middle of the tongue toward the hard palate"
    "velar" => "raise the back of the tongue toward the soft palate"
    _ => "let it come from the throat, no tongue contact"
  }
}

///|
fn advise(heard : Feat, target : Feat) -> String {
  let out : Array[String] = []
  if target.cls == "c" && heard.cls == "c" {
    let dcont = target.cont - heard.cont
    if dcont > 0.0 && target.aff == 0.0 {
      out.push("let the air keep flowing instead of stopping it")
    } else if dcont < 0.0 {
      out.push("close off the air completely for a moment")
    }
    let dnas = target.nas - heard.nas
    if dnas != 0.0 {
      if dnas > 0.0 {
        out.push("let the sound come through the nose")
      } else {
        out.push("keep the air out of the nose")
      }
    }
    let dstr = target.stri - heard.stri
    if dstr < 0.0 {
      out.push("keep it soft, without the hiss")
    } else if dstr > 0.0 {
      out.push("add a hiss")
    }
    let dvoi = target.voi - heard.voi
    if dvoi > 0.0 {
      out.push("add voice (a buzz in your throat)")
    } else if dvoi < 0.0 {
      out.push("drop the voice (no buzz)")
    }
    if dabs(target.pl - heard.pl) > 0.05 && out.length() < 2 {
      out.push(place_tip(place_name(target.pl)))
    }
    let dasp = target.asp - heard.asp
    if dasp > 0.0 {
      out.push("add a small puff of air")
    } else if dasp < 0.0 {
      out.push("drop the puff of air")
    }
  } else if target.cls == "v" && heard.cls == "v" {
    let dh = target.h - heard.h
    if dabs(dh) > 0.1 {
      if dh > 0.0 {
        out.push("open your mouth a little more")
      } else {
        out.push("close your mouth a little more")
      }
    }
    let db = target.b - heard.b
    if dabs(db) > 0.2 {
      if db > 0.0 {
        out.push("pull the tongue further back")
      } else {
        out.push("move the tongue further forward")
      }
    }
    let dr = target.r - heard.r
    if dr > 0.0 {
      out.push("round your lips")
    } else if dr < 0.0 {
      out.push("relax your lips (no rounding)")
    }
  }
  if target.len > heard.len {
    out.push("hold it a little longer")
  } else if target.len < heard.len {
    out.push("keep it short")
  }
  if out.length() == 0 {
    return ""
  }
  let n = if out.length() < 2 { out.length() } else { 2 }
  let sb = StringBuilder()
  for i in 0..<n {
    if i > 0 {
      sb.write_string(", then ")
    }
    sb.write_string(out[i])
  }
  sb.to_string()
}

///|
fn unknown_distance(target : String, heard : String) -> PhoneDistance {
  {
    d: 1.0,
    sim: 0.0,
    tier: "not-a-match",
    note: "No comparison available for this sound.",
    advice: "",
    said: phone_label(heard),
    target: phone_label(target),
  }
}

///|
pub fn phone_distance(
  target : String,
  heard : String,
  scheme : String,
  goal : String,
) -> PhoneDistance {
  phone_distance_in(target, heard, scheme, goal, PhoneSituation::absent())
}

///|
/// Same as `phone_distance`, plus neighbors and an optional target posterior.
/// `sit.posterior` below 0 means no confidence gate. A gated Koine row is then
/// not-a-match. Neighbors select palatal, velar, postnasal, and diphthong rows.
/// `ipa()` does not call this.
pub fn phone_distance_in(
  target : String,
  heard : String,
  scheme : String,
  goal : String,
  sit : PhoneSituation,
) -> PhoneDistance {
  match (norm_phone(target), norm_phone(heard)) {
    (Some((ts, tlen)), Some((hs, hlen))) => {
      let tf = with_len(lookup_feat(ts).unwrap(), tlen)
      let hf = with_len(lookup_feat(hs).unwrap(), hlen)
      let mut d = feat_dist(tf, hf)
      let sc = scheme_short(scheme)
      let same = ts == hs
      let eq = same || equivalent(sc, ts, hs)
      if eq {
        let capped = dmin(d, accurate_max)
        d = if same { capped } else { 0.0 }
      }
      let kept_equiv = !same && d == 0.0
      let (d2, row_note) = apply_sourced_distance(
        target,
        heard,
        ts,
        hs,
        scheme,
        d,
        same,
        kept_equiv,
        sit,
      )
      d = d2
      let (tol, _) = goal_of(goal)
      let tier = if d <= accurate_max {
        "accurate"
      } else if d <= tol {
        "tolerated"
      } else {
        "not-a-match"
      }
      let dt = phone_label(target)
      let dh = phone_label(heard)
      let sch = sch_note(sc, ts)
      let how = advise(hf, tf)
      let note = if tier == "accurate" {
        if same {
          "That is the target sound."
        } else if sc == "koine" && beta_v(ts, hs) {
          "“v” (as in van) and β are the same sound here. Nothing needs fixing."
        } else {
          "Either sound is correct in this reading."
        }
      } else {
        let said_ex = if dh.ex == "" { "" } else { " (as in " + dh.ex + ")" }
        let tgt_ex = if dt.ex == "" { "" } else { " (as in " + dt.ex + ")" }
        let manner = if hf.cls == "v" { "" } else { ", " + manner_word(hf) }
        "You said “" +
        dh.say +
        "”" +
        said_ex +
        manner +
        ". The target “" +
        dt.say +
        "”" +
        tgt_ex +
        " is " +
        dt.kind +
        "."
      }
      let advice0 = if tier == "accurate" {
        ""
      } else if sch != "" {
        if how == "" {
          sch + "."
        } else {
          sch + ". To be exact: " + how + "."
        }
      } else if how != "" {
        "To be exact: " + how + "."
      } else {
        ""
      }
      // A sourced note replaces the feature-table sentence. It does not change with the goal.
      let note_out = if row_note != "" { row_note } else { note }
      let advice = if row_note != "" { "" } else { advice0 }
      {
        d: round3(d),
        sim: sim_of(d, tol),
        tier,
        note: note_out,
        advice,
        said: dh,
        target: dt,
      }
    }
    _ => unknown_distance(target, heard)
  }
}

///|
pub fn phone_credit(
  target : String,
  phones : Array[String],
  weights : Array[Double],
  scheme : String,
  goal : String,
) -> PhoneCredit {
  phone_credit_in(target, phones, weights, scheme, goal, PhoneSituation::absent())
}

///|
/// Same numbers as `phone_credit`. `base` supplies neighbors and, when its
/// posterior is at least 0, the confidence gate. A negative posterior means
/// "read the gate from the target phone's weight in `weights`".
pub fn phone_credit_in(
  target : String,
  phones : Array[String],
  weights : Array[Double],
  scheme : String,
  goal : String,
  base : PhoneSituation,
) -> PhoneCredit {
  let (_, cap0) = goal_of(goal)
  let tn = norm_phone(target)
  let mut exact = 0.0
  let mut near = 0.0
  let mut best : CreditHit? = None
  let n = if phones.length() < weights.length() {
    phones.length()
  } else {
    weights.length()
  }
  // Gate on the target phone's own posterior. No target in the list means no gate.
  let mut target_p = -1.0
  for i in 0..<n {
    if weights[i] <= 0.0 {
      continue
    }
    match (tn, norm_phone(phones[i])) {
      (Some((ts, _)), Some((hs, _))) =>
        if hs == ts && weights[i] > target_p {
          target_p = weights[i]
        }
      _ => ()
    }
  }
  let posterior = if base.posterior >= 0.0 { base.posterior } else { target_p }
  let sit : PhoneSituation = {
    left: base.left,
    right: base.right,
    right2: base.right2,
    place: base.place,
    posterior,
  }
  for i in 0..<n {
    let p = weights[i]
    if p <= 0.0 {
      continue
    }
    match (tn, norm_phone(phones[i])) {
      (Some((ts, _)), Some((hs, _))) => {
        if hs == ts {
          exact += p
        } else {
          let x = phone_distance_in(target, phones[i], scheme, goal, sit)
          if x.tier == "accurate" {
            exact += p
          } else if x.sim > 0.0 {
            near += cap0 * p * x.sim
            let score = p * x.sim
            let replace = match best {
              None => true
              Some(b) => score > b.p * b.sim
            }
            if replace {
              best = Some({
                phone: phones[i],
                p,
                sim: x.sim,
                d: x.d,
                tier: x.tier,
              })
            }
          }
        }
      }
      _ => ()
    }
  }
  if exact > 1.0 {
    exact = 1.0
  }
  let room = 1.0 - exact
  if near > room {
    near = room
  }
  let mut combined = exact + near
  if combined > 1.0 {
    combined = 1.0
  }
  { exact, near, combined, best, }
}

///|
fn phones_eq(a : Array[String], b : Array[String]) -> Bool {
  if a.length() != b.length() {
    return false
  }
  for i in 0..<a.length() {
    if a[i] != b[i] {
      return false
    }
  }
  true
}

///|
fn seq_d(scheme : String, target : Array[String], heard : Array[String]) -> Double {
  if target.length() == 0 || heard.length() == 0 {
    return 1.0
  }
  let n = if target.length() < heard.length() {
    target.length()
  } else {
    heard.length()
  }
  let mut s = 0.0
  for i in 0..<n {
    s += phone_distance(target[i], heard[i], scheme, "gracious").d
  }
  let extra = if target.length() > heard.length() {
    target.length() - heard.length()
  } else {
    heard.length() - target.length()
  }
  let mean = s / n.to_double() + 0.25 * extra.to_double()
  dmin(1.0, mean)
}

///|
priv struct AltRow {
  key : String
  when : String
  target : Array[String]
  heard : Array[String]
  tier : String
  note : String
  src : String
  fixed : Double
}

///|
fn alt_row(
  key : String,
  when : String,
  target : Array[String],
  heard : Array[String],
  tier : String,
  note : String,
  src : String,
) -> AltRow {
  { key, when, target, heard, tier, note, src, fixed: -1.0 }
}

///|
fn alt_fixed(
  key : String,
  when : String,
  target : Array[String],
  heard : Array[String],
  tier : String,
  note : String,
  src : String,
  fixed : Double,
) -> AltRow {
  { key, when, target, heard, tier, note, src, fixed, }
}

///|
let src_final : String = "Aaron 2026-10-27. Readable descriptions do not settle word-final αυ/ευ/ηυ. The target symbol is v. β is the same sound in this reconstruction. f is tolerated."

///|
let src_yi : String = "Erasmian υι stays w i, the US seminary classroom value (RESEARCH.md). y i is the reconstructed hearing and is accepted."

///|
fn alt_rows(scheme : String) -> Array[AltRow] {
  let sc = scheme_short(scheme)
  let out : Array[AltRow] = []
  if sc == "koine" {
    let note = "“f” (as in fan) is accepted at the end of a word, but “v” (as in van) is more accurate. It is the same sound as the letter β."
    out.push(alt_row("αυ", "word-end", ["a", "v"], ["a", "f"], "tolerated", note, src_final))
    out.push(alt_row("ευ", "word-end", ["ɛ", "v"], ["ɛ", "f"], "tolerated", note, src_final))
    out.push(alt_row("ηυ", "word-end", ["e", "v"], ["e", "f"], "tolerated", note, src_final))
    let beta = "“v” (as in van) and β are the same sound here. Nothing needs fixing."
    out.push(alt_row("αυ", "word-end", ["a", "v"], ["a", "β"], "accurate", beta, src_final))
    out.push(alt_row("ευ", "word-end", ["ɛ", "v"], ["ɛ", "β"], "accurate", beta, src_final))
    out.push(alt_row("ηυ", "word-end", ["e", "v"], ["e", "β"], "accurate", beta, src_final))
    let off = note_e19 + " “eh” (as in bed) is more accurate for Koine than “ah” (as in father) then “ee” (as in machine)."
    let src_k = "Horrocks, Koine vowels: αι = [e], ει = [i], οι and υ = [y] [V]. The offglide hearing is tolerated."
    out.push(alt_fixed("αι", "any", ["ɛ"], ["a", "i"], "tolerated", off, src_k, 0.25))
    out.push(alt_fixed("ει", "any", ["i"], ["e", "i"], "tolerated", off, src_k, 0.25))
    out.push(alt_fixed("οι", "any", ["y"], ["o", "i"], "tolerated", off, src_k, 0.25))
  } else if sc == "attic" {
    let off = note_e19 + " The diphthong is the target. “eh” (as in bed) for αι, and “ü” (as in German über) for οι, is accepted."
    let src_a = "Policy. Allen treats οι as a diphthong [V]. Horrocks gives the Koine monophthong values [V]. αυ and ευ have no single monophthong phone in that note."
    out.push(alt_fixed("αι", "any", ["a", "i"], ["e"], "tolerated", off, src_a, 0.25))
    out.push(alt_fixed("αι", "any", ["a", "i"], ["ɛ"], "tolerated", off, src_a, 0.25))
    out.push(alt_fixed("οι", "any", ["o", "i"], ["y"], "tolerated", off, src_a, 0.25))
  } else if sc == "erasmian" {
    out.push(
      alt_row(
        "υι",
        "any",
        ["w", "i"],
        ["y", "i"],
        "tolerated",
        "The classroom sound is “w” as in we, then “ee” as in machine. “ü” as in German über, then “ee”, is also accepted, and it is closer to the reconstructed pronunciation.",
        src_yi,
      ),
    )
  }
  out
}

///|
fn when_matches(when : String, ctx : String) -> Bool {
  if when == "any" {
    true
  } else if when == "word-end" {
    ctx == "word-end"
  } else {
    false
  }
}

///|
fn grapheme_alts(
  scheme : String,
  key : String,
  ctx : String,
  phones : Array[String],
) -> Array[G2pAlt] {
  let out : Array[G2pAlt] = []
  for row in alt_rows(scheme) {
    if row.key == key &&
      when_matches(row.when, ctx) &&
      phones_eq(row.target, phones) &&
      !phones_eq(row.heard, phones) {
      out.push({
        heard: row.heard,
        tier: row.tier,
        d: if row.fixed >= 0.0 { row.fixed } else { seq_d(scheme, phones, row.heard) },
        note: row.note,
        src: row.src,
      })
    }
  }
  out
}

///|
fn jlabel(l : PhoneLabel) -> String {
  "{\"say\":" + jstr(l.say) + ",\"ex\":" + jstr(l.ex) + ",\"kind\":" + jstr(l.kind) + "}"
}

///|
fn distance_json(r : PhoneDistance) -> String {
  "{\"d\":" +
  jdec3(r.d) +
  ",\"sim\":" +
  jdec3(r.sim) +
  ",\"tier\":" +
  jstr(r.tier) +
  ",\"note\":" +
  jstr(r.note) +
  ",\"advice\":" +
  jstr(r.advice) +
  ",\"said\":" +
  jlabel(r.said) +
  ",\"target\":" +
  jlabel(r.target) +
  "}"
}

///|
pub fn phone_distance_json(
  target : String,
  heard : String,
  scheme : String,
  goal : String,
) -> String {
  distance_json(phone_distance(target, heard, scheme, goal))
}

///|
/// `situation` is `left,right,right2,place,posterior`. Empty posterior means no gate.
pub fn phone_distance_in_json(
  target : String,
  heard : String,
  scheme : String,
  goal : String,
  situation : String,
) -> String {
  distance_json(phone_distance_in(target, heard, scheme, goal, situation_of(situation)))
}

///|
fn parse_weight(s : String) -> Double {
  try {
    @string.parse_double(s)
  } catch {
    _ => 0.0
  }
}

///|
fn parse_posterior(s : String) -> (Array[String], Array[Double]) {
  let phones : Array[String] = []
  let weights : Array[Double] = []
  if s == "" {
    return (phones, weights)
  }
  for part in s.split(",") {
    let p = part.to_owned()
    match p.split_once("=") {
      Some((phone, w)) => {
        phones.push(phone.to_owned())
        weights.push(parse_weight(w.to_owned()))
      }
      None => ()
    }
  }
  (phones, weights)
}

///|
pub fn phone_credit_json(
  target : String,
  scheme : String,
  goal : String,
  posterior : String,
) -> String {
  let (phones, weights) = parse_posterior(posterior)
  let c = phone_credit(target, phones, weights, scheme, goal)
  let best = match c.best {
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
  jdec3(c.exact) +
  ",\"near\":" +
  jdec3(c.near) +
  ",\"combined\":" +
  jdec3(c.combined) +
  ",\"best\":" +
  best +
  "}"
}

///|
fn sch_pairs(sc : String) -> Array[(String, String)] {
  if sc == "koine" {
    [
      ("ð", sch_note(sc, "ð")),
      ("β", sch_note(sc, "β")),
      ("ɣ", sch_note(sc, "ɣ")),
      ("ɛ", sch_note(sc, "ɛ")),
      ("y", sch_note(sc, "y")),
      ("tʰ", sch_note(sc, "tʰ")),
      ("pʰ", sch_note(sc, "pʰ")),
      ("kʰ", sch_note(sc, "kʰ")),
    ]
  } else if sc == "attic" {
    [
      ("ɔ", sch_note(sc, "ɔ")),
      ("y", sch_note(sc, "y")),
      ("tʰ", sch_note(sc, "tʰ")),
      ("pʰ", sch_note(sc, "pʰ")),
      ("kʰ", sch_note(sc, "kʰ")),
    ]
  } else if sc == "modern" {
    [
      ("ð", sch_note(sc, "ð")),
      ("ɣ", sch_note(sc, "ɣ")),
      ("θ", sch_note(sc, "θ")),
      ("v", sch_note(sc, "v")),
    ]
  } else if sc == "erasmian" {
    [("ʊ", sch_note(sc, "ʊ")), ("x", sch_note(sc, "x"))]
  } else {
    []
  }
}

///|
pub fn dist_table_json(scheme : String) -> String {
  let sc = scheme_short(scheme)
  let sb = StringBuilder()
  sb.write_string(
    "{\"v\":1,\"scheme\":" +
    jstr(if sc == "" { scheme } else { sc }) +
    ",\"model\":\"hand-weighted articulatory features (phondist 0.1)\",\"accurate_max\":0.02,\"goal_default\":\"gracious\",\"goals\":{\"strict\":{\"tol\":0.2,\"cap\":0.6},\"gracious\":{\"tol\":0.33,\"cap\":0.75},\"lenient\":{\"tol\":0.42,\"cap\":0.9}},\"equiv\":[",
  )
  if sc == "koine" {
    sb.write_string("[\"o\",\"ɔ\"],[\"β\",\"v\"]")
  } else if sc == "modern" {
    sb.write_string("[\"o\",\"ɔ\"]")
  }
  sb.write_string("],\"notes\":{")
  for i, pair in sch_pairs(sc) {
    if i > 0 {
      sb.write_char(',')
    }
    let (sym, note) = pair
    sb.write_string(jstr(sym) + ":" + jstr(note))
  }
  sb.write_string("},\"units\":[")
  let mut n = 0
  for row in alt_rows(scheme) {
    if n > 0 {
      sb.write_char(',')
    }
    n += 1
    sb.write_string(
      "{\"unit\":" +
      jstr(row.key) +
      ",\"when\":" +
      jstr(row.when) +
      ",\"target\":" +
      jarr(row.target) +
      ",\"heard\":" +
      jarr(row.heard) +
      ",\"tier\":" +
      jstr(row.tier) +
      ",\"d\":" +
      jdec3(if row.fixed >= 0.0 { row.fixed } else { seq_d(scheme, row.target, row.heard) }) +
      ",\"note\":" +
      jstr(row.note) +
      ",\"src\":" +
      jstr(row.src) +
      "}",
    )
  }
  sb.write_string("],\"sourced\":")
  sb.write_string(sourced_rows_json(scheme))
  sb.write_string("}")
  sb.to_string()
}

///|
pub fn phone_known(p : String) -> Bool {
  norm_phone(p) is Some(_)
}
