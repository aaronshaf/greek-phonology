// Ports of the original koine-lexer (TypeScript) functions. Where the old code had a bug that we
// fixed, the doc comment says so; tools/kl_parity.py compares every function against the TS build.

///|
fn kl_is_vowel(c : Char) -> Bool {
  let b = first_char(nfd_char(c))
  is_vowel(b)
}

///|
fn chars(s : String) -> Array[Char] {
  let out : Array[Char] = []
  for c in s {
    out.push(c)
  }
  out
}

///|
fn join_chars(cs : ArrayView[Char]) -> String {
  let sb = StringBuilder()
  for c in cs {
    sb.write_char(c)
  }
  sb.to_string()
}

///|
/// Expand a tiny regex ("x[ab](c|d)y") into its literal alternatives.
fn expand(pat : String) -> Array[String] {
  let cs = chars(pat)
  let mut acc : Array[String] = [""]
  let mut i = 0
  while i < cs.length() {
    let opts : Array[String] = []
    if cs[i] == '[' {
      i += 1
      while cs[i] != ']' {
        opts.push(cs[i].to_string())
        i += 1
      }
    } else if cs[i] == '(' {
      i += 1
      let cur = StringBuilder()
      while cs[i] != ')' {
        if cs[i] == '|' {
          opts.push(cur.to_string())
          cur.reset()
        } else {
          cur.write_char(cs[i])
        }
        i += 1
      }
      opts.push(cur.to_string())
    } else {
      opts.push(cs[i].to_string())
    }
    i += 1
    let next : Array[String] = []
    for a in acc {
      for o in opts {
        next.push(a + o)
      }
    }
    acc = next
  }
  acc
}

///|
/// Consonant + σ amalgamation (Black): π β φ + σ → ψ; κ γ χ + σ → ξ; τ δ θ drop before σ.
pub fn amalgamate(s : String) -> String {
  // one left-to-right pass on code points; proved never longer than the input
  let cs = FixedArray::from_array(chars(s).map(fn(c) { c.to_int() }))
  let out = FixedArray::make(cs.length(), 0)
  let n = @kernel.amalgamate_core(cs, out)
  let sb = StringBuilder()
  for i in 0..<n {
    sb.write_char(Int32::unsafe_to_char(out[i]))
  }
  sb.to_string()
}

///|
let contract_rules : Array[(String, String)] = [
  ("α(α|ε|η)", "α"),
  ("αο", "ω"),
  ("αω", "ω"),
  ("εα", "η"),
  ("εε", "[ει]"),
  ("εη", "η"),
  ("εο", "[ου]"),
  ("εω", "ω"),
  ("η(α|ε|η)", "η"),
  ("ηι", "ῃ"),
  ("η(ο|ω)", "ω"),
  ("οα", "ω"),
  ("οε", "[ου]"),
  ("οη", "ω"),
  ("οο", "[ου]"),
  ("οω", "ω"),
  ("ω(α|ε|η)", "ω"),
  ("ωι", "ῳ"),
  ("ωο", "ω"),
  ("ωω", "ω"),
  ("αᾳαι", "ᾳ"),
  ("αει", "ᾳ"),
  ("α[ει]", "α"),
  ("αῃ", "ᾳ"),
  ("αοι", "ῳ"),
  ("α[ου]", "ω"),
  ("αῳ", "ῳ"),
  ("εᾳαι", "ῃ"),
  ("εει", "[ει]"),
  ("ε[ει]", "[ει]"),
  ("εῃ", "ῃ"),
  ("εοι", "οι"),
  ("ε[ου]", "ου"),
  ("εῳ", "ῳ"),
  ("ηᾳαι", "ῃ"),
  ("ηει", "ῃ"),
  ("η[ει]", "η"),
  ("ηῃ", "ῃ"),
  ("ηοι", "ῳ"),
  ("η[ου]", ""),
  ("ηῳ", "ῳ"),
  ("οᾳαι", "ῳ"),
  ("οει", "οι"),
  ("ο[ει]", "ου"),
  ("οῃ", "οι"),
  ("οοι", "οι"),
  ("ο[ου]", "ου"),
  ("οῳ", "ῳ"),
]

///|
let marker_ei : Int32 = 0x110000

///|
let marker_ou : Int32 = 0x110001

///|
/// contract_rules as token tables: (alternatives flattened, pattern length, replacement tokens).
/// The proved kernel needs replacement length <= pattern length <= ... and at most 2 tokens.
let contract_tables : Array[(FixedArray[Int32], Int32, FixedArray[Int32])] = contract_rules.map(fn(
    r,
  ) {
    let alts = expand(r.0)
    let flat : Array[Int32] = []
    for a in alts {
      for c in a {
        flat.push(c.to_int())
      }
    }
    let rep : Array[Int32] = if r.1 == "[ει]" {
      [marker_ei]
    } else if r.1 == "[ου]" {
      [marker_ou]
    } else {
      chars(r.1).map(fn(c) { c.to_int() })
    }
    (
      FixedArray::from_array(flat),
      char_count(alts[0]),
      FixedArray::from_array(rep),
    )
  },
)

///|
/// Vowel contraction, same table and behaviour as the TS: the first rule that matches anywhere is
/// applied to the whole string. Kept as-is, including its quirks ("[ει]"/"[ου]" mark spurious diphthongs).
pub fn contract(s : String) -> String {
  let cs = FixedArray::from_array(chars(s).map(fn(c) { c.to_int() }))
  let out = FixedArray::make(cs.length(), 0)
  for r in contract_tables {
    let (alts, plen, rep) = r
    let res = @kernel.contract_core(cs, alts, plen, rep, rep.length(), out)
    if res % 2 == 1 {
      let sb = StringBuilder()
      for i in 0..<(res / 2) {
        let t = out[i]
        if t == marker_ei {
          sb.write_string("[ει]")
        } else if t == marker_ou {
          sb.write_string("[ου]")
        } else {
          sb.write_char(Int32::unsafe_to_char(t))
        }
      }
      return sb.to_string()
    }
  }
  s
}

///|
/// Put the recessive verb accent on a word (acute, or circumflex on a long penult before a short
/// ultima; the TS left those unaccented). Existing acutes/graves are removed first; a word whose
/// ultima already has a circumflex is returned unchanged, as in the TS.
pub fn accentuate_verb(word : String) -> String {
  let w = remove_acutes(remove_graves(word))
  let sm = syl_marks(w)
  let n = sm.length()
  if n == 0 {
    return nfc(w)
  }
  if sm[n - 1].0.contains(circ) {
    return w
  }
  guard recessive_accent(w) is Some((pos, kind)) else { return nfc(w) }
  // base-letter index of the last vowel of the target syllable
  let us = units(w)
  let sy = syllabify(w)
  let mut base_i = 0
  let mut target = -1
  let mut k = 0
  for si, s in sy {
    for _ in s {
      let u = us[k].u
      for c in u {
        if si == n - pos && is_vowel(c) {
          target = base_i
        }
        base_i += 1
      }
      k += 1
    }
  }
  let mark = if kind == "circumflex" { circ } else { acute }
  let sb = StringBuilder()
  let mut bi = -1
  let mut pending = false
  for c0 in w {
    for c in nfd_char(c0) {
      let greek_base = !is_comb(c) && c.to_int() >= 0x370 && c.to_int() <= 0x3FF
      if greek_base || !is_comb(c) {
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
let primary_suffixes : Array[String] = [
  "ω", "εις", "ει", "ομεν", "ετε", "ουσι",
]

///|
let middle_passive_endings : Array[String] = [
  "ομαι", "ῃ", "εται", "όμεθα", "εσθε", "ονται",
]

///|
let imperfect_endings : Array[String] = [
  "ον", "ες", "ε", "ομεν", "ετε", "ον",
]

///|
let subjunctive_endings : Array[String] = [
  "ω", "ῃς", "ῃ", "ωμεν", "ητε", "ωσι",
]

///|
/// Verb stem from the lexical form (first principal part minus its last letter), e.g. λύω → λυ.
pub fn verb_stem(lexical_form : String) -> String {
  let cs = chars(lexical_form)
  if cs.length() == 0 {
    ""
  } else {
    join_chars(cs[0:cs.length() - 1])
  }
}

///|
/// Past-time morpheme (simple ἐ- prefix, as in the TS; no temporal/syllabic augment yet).
pub fn augmentize(word : String) -> String {
  "ἐ" + word
}

///|
/// Six forms (1s 2s 3s 1p 2p 3p). paradigm: "present-active-indicative", "imperfect-active-indicative",
/// "future-active-indicative", "future-middle-indicative", "middle-passive-indicative",
/// "present-active-subjunctive", "middle-passive-subjunctive".
pub fn conjugate(stem : String, paradigm : String) -> Array[String] {
  match paradigm {
    "present-active-indicative" =>
      primary_suffixes.map(fn(e) { accentuate_verb(stem + e) })
    "imperfect-active-indicative" =>
      imperfect_endings.map(fn(e) { accentuate_verb(augmentize(stem) + e) })
    "future-active-indicative" =>
      primary_suffixes.map(fn(e) {
        accentuate_verb(amalgamate(stem + "σ" + e))
      })
    "future-middle-indicative" =>
      middle_passive_endings.map(fn(e) { stem + "σ" + e })
    "middle-passive-indicative" =>
      middle_passive_endings.map(fn(e) { stem + e })
    "present-active-subjunctive" | "middle-passive-subjunctive" =>
      subjunctive_endings.map(fn(e) { stem + e })
    _ => []
  }
}
