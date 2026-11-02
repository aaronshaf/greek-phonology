#!/usr/bin/env python3
"""Build lib/tol_data.mbt from data/reliability-v1.json.

The MoonBit file is a compact table: Wilson lower bounds in thousandths,
per-position and per-stress counts, and the confusions worth accepting.
Run from moonbit/: python3 tools/gen_tol.py
"""
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "data" / "reliability-v1.json"
OUT = ROOT / "lib" / "tol_data.mbt"

# Same z that reproduces the file's wilson_lo from round(acc * n).
Z = 1.959963984540054
UNRELIABLE = 0.55
MIN_COUNT = 2
MIN_SHARE = 0.10
MAX_CONF = 3

# 1 vowel, 2 aspirate, 3 stop, 4 fricative, 5 nasal, 6 liquid, 7 glide, 8 breath.
VOWELS = {
    "a", "e", "i", "o", "u", "y", "ɛ", "ɔ", "ɪ", "ʊ",
    "aː", "eː", "iː", "oː", "uː", "yː", "ɛː", "ɔː",
    "ai", "ei", "oi", "yi", "au", "eu", "ou", "hu",
}
ASPIRATES = {"pʰ", "tʰ", "kʰ"}
STOPS = {"p", "t", "k", "b", "d", "g"}
FRICATIVES = {"f", "v", "θ", "ð", "s", "z", "x", "ɣ", "ç", "ʝ", "β", "ɸ"}
NASALS = {"m", "n", "ŋ"}
LIQUIDS = {"l", "r", "ɾ"}
GLIDES = {"j", "w"}
BREATH = {"h"}


def wilson(k, n):
    if n <= 0:
        return 0.0
    phat = k / n
    z2 = Z * Z
    denom = 1 + z2 / n
    centre = phat + z2 / (2 * n)
    margin = Z * math.sqrt((phat * (1 - phat) + z2 / (4 * n)) / n)
    return max(0.0, (centre - margin) / denom)


def milli(x):
    return int(round(x * 1000.0))


def phone_class(phone):
    if phone in VOWELS or phone.endswith("ː") and phone[:-1] in VOWELS:
        return 1
    if phone in ASPIRATES:
        return 2
    base = phone[:-1] if phone.endswith("ː") else phone
    if base in VOWELS:
        return 1
    if base in ASPIRATES:
        return 2
    if base in STOPS:
        return 3
    if base in FRICATIVES:
        return 4
    if base in NASALS:
        return 5
    if base in LIQUIDS:
        return 6
    if base in GLIDES:
        return 7
    if base in BREATH:
        return 8
    return 0


def is_long(phone):
    return phone.endswith("ː")


def forced_accept(phone):
    out = []
    if is_long(phone):
        short = phone[:-1]
        out.append(short)
    # Attic ω is ɔː. The model writes o, which is this library's ο and the
    # notation twin of ɔ. A length miss heard as o is accepted either way.
    if phone == "ɔː" and "o" not in out:
        out.append("o")
    return out


def accept_of(phone, rec):
    items = []
    for tok in forced_accept(phone):
        if tok not in items:
            items.append(tok)
    gate = wilson_of(phone, rec)
    if gate < UNRELIABLE:
        conf = sorted(rec["confusions"].items(), key=lambda kv: (-kv[1], kv[0]))
        taken = 0
        n = rec["n"]
        for heard, count in conf:
            if taken >= MAX_CONF:
                break
            if count < MIN_COUNT or n <= 0 or count / n < MIN_SHARE:
                continue
            if heard not in items:
                items.append(heard)
                taken += 1
    return "|".join(items)


def wilson_of(phone, rec):
    n = rec["n"]
    if is_long(phone):
        k = int(round(rec["acc_ignoring_length"] * n))
        return wilson(k, n)
    return rec["wilson_lo"]


def slice_of(block, key):
    cell = block.get(key) if block else None
    if not cell:
        return 0, 0
    return cell["n"], milli(cell["wilson_lo"])


def row_from(phone, rec, set_id, nucleus_fallback):
    pos = rec.get("by_position") or {}
    stress = rec.get("by_stress") or {}
    if nucleus_fallback and "nucleus" not in pos:
        pos = dict(pos)
        pos["nucleus"] = {"n": rec["n"], "wilson_lo": rec["wilson_lo"]}
    return {
        "phone": phone,
        "set": set_id,
        "cls": phone_class(phone),
        "n": rec["n"],
        "w": milli(wilson_of(phone, rec)),
        "long": is_long(phone),
        "onset": slice_of(pos, "onset"),
        "nucleus": slice_of(pos, "nucleus"),
        "coda": slice_of(pos, "coda"),
        "stressed": slice_of(stress, "stressed"),
        "unstressed": slice_of(stress, "unstressed"),
        "accept": accept_of(phone, rec),
        "k": int(round((rec["acc_ignoring_length"] if is_long(phone) else rec["acc"]) * rec["n"])),
    }


def moon_str(s):
    return '"' + s.replace("\\", "\\\\").replace('"', '\\"') + '"'


def emit_slice(pair):
    n, w = pair
    return "{ n: " + str(n) + ", w: " + str(w) + " }"


def emit_row(r):
    return (
        "  { phone: " + moon_str(r["phone"])
        + ", set: " + str(r["set"])
        + ", cls: " + str(r["cls"])
        + ", n: " + str(r["n"])
        + ", w: " + str(r["w"])
        + ", long: " + ("true" if r["long"] else "false")
        + ", onset: " + emit_slice(r["onset"])
        + ", nucleus: " + emit_slice(r["nucleus"])
        + ", coda: " + emit_slice(r["coda"])
        + ", stressed: " + emit_slice(r["stressed"])
        + ", unstressed: " + emit_slice(r["unstressed"])
        + ", accept: " + moon_str(r["accept"])
        + " },"
    )


def pool(rows):
    by = {}
    for r in rows:
        key = (r["set"], r["cls"])
        n, k = by.get(key, (0, 0))
        by[key] = (n + r["n"], k + r["k"])
    out = []
    for (set_id, cls), (n, k) in sorted(by.items()):
        if cls == 0 or n <= 0:
            continue
        out.append({"set": set_id, "cls": cls, "n": n, "w": milli(wilson(k, n))})
    return out


def main():
    data = json.loads(SRC.read_text())
    rows = []
    for set_id, key in ((0, "attic"), (1, "fleurs")):
        block = data["sets"][key]
        for phone, rec in block["phones"].items():
            rows.append(row_from(phone, rec, set_id, False))
        for phone, rec in block.get("diphthongs", {}).items():
            # Diphthongs are nuclei. The file has no by_position for them.
            fake = dict(rec)
            fake["acc_ignoring_length"] = rec["acc"]
            rows.append(row_from(phone, fake, set_id, True))
    rows.sort(key=lambda r: (r["set"], r["phone"]))
    classes = pool(rows)
    model = data["model"]
    lines = [
        "// Generated by tools/gen_tol.py from data/reliability-v1.json. Do not edit.",
        "// reliability-v1. Model " + model["id"] + ", sha256 " + model["sha256"] + ".",
        "// Generated " + data["generated"] + ". Attic is the ancient set. There is no Koine set.",
        "",
        "///|",
        "priv struct TolSlice {",
        "  n : Int",
        "  w : Int",
        "}",
        "",
        "///|",
        "priv struct TolRec {",
        "  phone : String",
        "  set : Int",
        "  cls : Int",
        "  n : Int",
        "  w : Int",
        "  long : Bool",
        "  onset : TolSlice",
        "  nucleus : TolSlice",
        "  coda : TolSlice",
        "  stressed : TolSlice",
        "  unstressed : TolSlice",
        "  accept : String",
        "}",
        "",
        "///|",
        "priv struct TolClass {",
        "  set : Int",
        "  cls : Int",
        "  n : Int",
        "  w : Int",
        "}",
        "",
        "///|",
        "let tol_data_name : String = \"reliability-v1\"",
        "",
        "///|",
        "let tol_data_version : Int = " + str(data["version"]),
        "",
        "///|",
        "let tol_data_generated : String = " + moon_str(data["generated"]),
        "",
        "///|",
        "let tol_data_model : String = " + moon_str(model["id"]),
        "",
        "///|",
        "let tol_data_sha : String = " + moon_str(model["sha256"]),
        "",
        "///|",
        "let tol_rows : Array[TolRec] = [",
    ]
    for r in rows:
        lines.append(emit_row(r))
    lines.append("]")
    lines.append("")
    lines.append("///|")
    lines.append("let tol_classes : Array[TolClass] = [")
    for c in classes:
        lines.append(
            "  { set: " + str(c["set"])
            + ", cls: " + str(c["cls"])
            + ", n: " + str(c["n"])
            + ", w: " + str(c["w"])
            + " },"
        )
    lines.append("]")
    lines.append("")
    OUT.write_text("\n".join(lines))
    print("wrote", OUT, "rows", len(rows), "classes", len(classes))
    print("sha", model["sha256"])
    print("generated", data["generated"])
    for c in classes:
        print("class", c)


if __name__ == "__main__":
    main()
