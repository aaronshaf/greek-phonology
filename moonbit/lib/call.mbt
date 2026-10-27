// String dispatch used by the JavaScript and wasm call export.

///|
fn jarr(xs : Array[String]) -> String {
  "[" + xs.map(jstr).join(",") + "]"
}

///|
/// Call a library function by name on one string argument; result as JSON. arg2 is used by
/// "conjugate" (paradigm) and "ipa" (scheme). Unknown name -> null.
pub fn call_json(name : String, arg : String, arg2 : String) -> String {
  match name {
    "amalgamate" => jstr(amalgamate(arg))
    "contract" => jstr(contract(arg))
    "remove_acutes" => jstr(remove_acutes(arg))
    "remove_graves" => jstr(remove_graves(arg))
    "remove_circumflexes" => jstr(remove_circumflexes(arg))
    "contains_circumflex" => contains_circumflex(arg).to_string()
    "add_acute" => jstr(add_acute(arg))
    "add_circumflex" => jstr(add_circumflex(arg))
    "without_accents" => jstr(without_accents(arg))
    "accentuate_last_vowel" => jstr(accentuate_last_vowel(arg))
    "is_long_syllable" => is_long_syllable(arg).to_string()
    "remove_punctuation" => jstr(remove_punctuation(arg))
    "remove_numbers" => jstr(remove_numbers(arg))
    "extract_consonant_clusters" => jarr(extract_consonant_clusters(arg))
    "accentuate_verb" => jstr(accentuate_verb(arg))
    "accentuate_phrase" => jstr(accentuate_phrase(arg))
    "lexical_phrase" => jstr(lexical_phrase(arg))
    "check_phrase_accents" => check_phrase_accents(arg)
    "is_enclitic" => is_enclitic(arg).to_string()
    "is_proclitic" => is_proclitic(arg).to_string()
    "verb_stem" => jstr(verb_stem(arg))
    "augmentize" => jstr(augmentize(arg))
    "conjugate" => jarr(conjugate(arg, arg2))
    "syllabify" => syllabify_json(arg)
    "word" => word_json(arg)
    "ipa" => jstr(ipa(arg, arg2))
    "g2p_json" => {
      let parts = arg2.split("\u{1}").map(fn(v) { v.to_owned() }).collect()
      let scheme = if parts.length() > 0 && parts[0] != "" { parts[0] } else { "" }
      let flags = if parts.length() > 1 { parts[1] } else { "" }
      g2p_json_flags(arg, scheme, flags)
    }
    "phone_distance" => {
      let parts = arg2.split("\u{1}").map(fn(v) { v.to_owned() }).collect()
      let heard = if parts.length() > 0 { parts[0] } else { "" }
      let scheme = if parts.length() > 1 { parts[1] } else { "" }
      let goal = if parts.length() > 2 { parts[2] } else { "" }
      phone_distance_json(arg, heard, scheme, goal)
    }
    "phone_credit" => {
      let parts = arg2.split("\u{1}").map(fn(v) { v.to_owned() }).collect()
      let scheme = if parts.length() > 0 { parts[0] } else { "" }
      let goal = if parts.length() > 1 { parts[1] } else { "" }
      let posterior = if parts.length() > 2 { parts[2] } else { "" }
      phone_credit_json(arg, scheme, goal, posterior)
    }
    "dist_table" => dist_table_json(arg)
    "hearing_credit" => {
      let parts = arg2.split("\u{1}").map(fn(v) { v.to_owned() }).collect()
      let scheme = if parts.length() > 0 { parts[0] } else { "" }
      let goal = if parts.length() > 1 { parts[1] } else { "" }
      let posterior = if parts.length() > 2 { parts[2] } else { "" }
      hearing_credit_json(arg, posterior, scheme, goal)
    }
    "unit_hearing_credit" => {
      let parts = arg2.split("\u{1}").map(fn(v) { v.to_owned() }).collect()
      let scheme = if parts.length() > 0 { parts[0] } else { "" }
      let goal = if parts.length() > 1 { parts[1] } else { "" }
      let posterior = if parts.length() > 2 { parts[2] } else { "" }
      let at = if parts.length() > 3 { parts[3] } else { "-1" }
      unit_hearing_credit_json(arg, posterior, scheme, goal, at)
    }
    "credit_level" => {
      let combined = if arg == "" {
        0.0
      } else {
        try {
          @string.parse_double(arg)
        } catch {
          _ => 0.0
        }
      }
      credit_level_json(combined, arg2)
    }
    "scheme_id" => jstr(scheme_id(arg))
    "align_phones" => align_phones_json(arg)
    "lookup" => lookup_json(arg)
    "detect" => detect(arg, greek_text=arg2).to_json_string()
    _ => "null"
  }
}
