// Host-neutral ABI. Strings cross as UTF-8 bytes, one byte per call, so any wasm host works
// (wasmtime, browsers, node) without a shared allocator. JS gets plain string functions too.

///|
let inbuf : Array[Int32] = []

///|
let outbuf : Array[Int32] = []

///|
pub fn in_clear() -> Unit {
  inbuf.clear()
}

///|
pub fn in_push(b : Int32) -> Unit {
  inbuf.push(b)
}

///|
pub fn out_len() -> Int32 {
  outbuf.length()
}

///|
pub fn out_get(i : Int32) -> Int32 {
  outbuf[i]
}

///|
fn utf8_decode(bs : Array[Int32], lo : Int32, hi : Int32) -> String {
  let sb = StringBuilder()
  let mut i = lo
  while i < hi {
    let b = bs[i]
    let (cp, n) = if b < 0x80 {
      (b, 1)
    } else if b < 0xE0 {
      (((b & 0x1F) << 6) | (bs[i + 1] & 0x3F), 2)
    } else if b < 0xF0 {
      (((b & 0x0F) << 12) | ((bs[i + 1] & 0x3F) << 6) | (bs[i + 2] & 0x3F), 3)
    } else {
      (
        ((b & 0x07) << 18) |
        ((bs[i + 1] & 0x3F) << 12) |
        ((bs[i + 2] & 0x3F) << 6) |
        (bs[i + 3] & 0x3F),
        4,
      )
    }
    sb.write_char(Int32::unsafe_to_char(cp))
    i += n
  }
  sb.to_string()
}

///|
fn utf8_encode(s : String) -> Unit {
  outbuf.clear()
  for c in s {
    let cp = c.to_int()
    if cp < 0x80 {
      outbuf.push(cp)
    } else if cp < 0x800 {
      outbuf.push(0xC0 | (cp >> 6))
      outbuf.push(0x80 | (cp & 0x3F))
    } else if cp < 0x10000 {
      outbuf.push(0xE0 | (cp >> 12))
      outbuf.push(0x80 | ((cp >> 6) & 0x3F))
      outbuf.push(0x80 | (cp & 0x3F))
    } else {
      outbuf.push(0xF0 | (cp >> 18))
      outbuf.push(0x80 | ((cp >> 12) & 0x3F))
      outbuf.push(0x80 | ((cp >> 6) & 0x3F))
      outbuf.push(0x80 | (cp & 0x3F))
    }
  }
}

///|
/// cmd 0 detect(arg0 = ipa, arg1 = greek text, may be empty); 1 ipa(arg0 = text, arg1 = scheme); 2 word_json(arg0);
/// 3 load_lexicon (raw bytes, via run only); 4 lookup_json(arg0); 5 call(name = arg0, arg1 = arg [\u{1} arg2]);
/// 6 g2p_json(arg0 = text, arg1 = scheme [\u{1} flags]). Flags are a comma list; `alts` is opt-in.
pub fn run_str(cmd : Int32, a0 : String, a1 : String) -> String {
  match cmd {
    0 => @lib.detect(a0, greek_text=a1).to_json_string()
    1 => @lib.ipa(a0, a1)
    4 => @lib.lookup_json(a0)
    5 => {
      // a1 = "argument\u{1}second argument"
      let parts = a1.split("\u{1}").map(fn(v) { v.to_owned() }).collect()
      @lib.call_json(
        a0,
        parts[0],
        if parts.length() > 1 {
          parts[1]
        } else {
          ""
        },
      )
    }
    6 => {
      let parts = a1.split("\u{1}").map(fn(v) { v.to_owned() }).collect()
      let scheme = if parts.length() > 0 { parts[0] } else { "" }
      let flags = if parts.length() > 1 { parts[1] } else { "" }
      @lib.g2p_json_flags(a0, scheme, flags)
    }
    _ => @lib.word_json(a0)
  }
}

///|
/// Run a command on the input buffer (args separated by a 0 byte); returns output byte length.
pub fn run(cmd : Int32) -> Int32 {
  if cmd == 3 {
    // load_lexicon: input buffer holds the raw lexicon bytes
    utf8_encode(@lib.load_lexicon(inbuf).to_string())
    return outbuf.length()
  }
  let mut sep = inbuf.length()
  for i, b in inbuf {
    if b == 0 {
      sep = i
      break
    }
  }
  let a0 = utf8_decode(inbuf, 0, sep)
  let a1 = if sep < inbuf.length() {
    utf8_decode(inbuf, sep + 1, inbuf.length())
  } else {
    ""
  }
  utf8_encode(run_str(cmd, a0, a1))
  outbuf.length()
}

///|
pub fn detect_json(ipa : String, greek_text : String) -> String {
  run_str(0, ipa, greek_text)
}

///|
pub fn ipa(text : String, scheme : String) -> String {
  run_str(1, text, scheme)
}

///|
/// Grapheme units for `text` in `scheme`.
pub fn g2p_json(text : String, scheme : String) -> String {
  run_str(6, text, scheme)
}

///|
/// Same as `g2p_json`, with a comma list of flags. `alts` attaches alternate hearings.
pub fn g2p_json_flags(text : String, scheme : String, flags : String) -> String {
  @lib.g2p_json_flags(text, scheme, flags)
}

///|
/// Graded distance between one target phone and one heard phone. `goal` is strict, gracious, or lenient.
pub fn phone_distance_json(
  target : String,
  heard : String,
  scheme : String,
  goal : String,
) -> String {
  @lib.phone_distance_json(target, heard, scheme, goal)
}

///|
/// Credit for a recognizer posterior. `posterior` is `phone=weight` pairs separated by commas.
pub fn phone_credit_json(
  target : String,
  scheme : String,
  goal : String,
  posterior : String,
) -> String {
  @lib.phone_credit_json(target, scheme, goal, posterior)
}

///|
/// Scheme notes, learner-goal thresholds, and curated grapheme alternates.
pub fn dist_table_json(scheme : String) -> String {
  @lib.dist_table_json(scheme)
}

///|
pub fn word_json(word : String) -> String {
  run_str(2, word, "")
}

///|
pub fn lookup_json(word : String) -> String {
  run_str(4, word, "")
}

///|
/// Call any library function by name (see lib.call_json); returns JSON.
pub fn call(name : String, arg : String, arg2 : String) -> String {
  @lib.call_json(name, arg, arg2)
}
