#!/usr/bin/env python3
"""Cross-check finite G2P metadata: phone ids in kernel/spec.mbtp match lib/g2p.mbt phone_names."""
from __future__ import annotations

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SPEC = ROOT / "kernel" / "spec.mbtp"
G2P = ROOT / "lib" / "g2p.mbt"
VERIFY = ROOT / "lib" / "verify.mbt"


def phone_ids_from_spec(text: str) -> dict[str, set[int]]:
    """Parse id lists from common_inv / *_extra predicates."""
    blocks = {
        "common": re.search(r"predicate common_inv\(id : Int\) \{(.*?)\}", text, re.S),
        "modern_inv": re.search(r"predicate modern_inv\(id : Int\) \{(.*?)\}", text, re.S),
        "koine_extra": re.search(r"predicate koine_extra\(id : Int\) \{(.*?)\}", text, re.S),
        "attic_extra": re.search(r"predicate attic_extra\(id : Int\) \{(.*?)\}", text, re.S),
        "erasmian_extra": re.search(
            r"predicate erasmian_extra\(id : Int\) \{(.*?)\}", text, re.S
        ),
    }
    out: dict[str, set[int]] = {}
    for name, m in blocks.items():
        if not m:
            sys.exit(f"could not parse {name} in spec.mbtp")
        ids = {int(x) for x in re.findall(r"id == (\d+)", m.group(1))}
        out[name] = ids
    return out


def phone_names_from_g2p(text: str) -> list[str]:
    m = re.search(r"let phone_names : Array\[String\] = \[(.*?)\]", text, re.S)
    if not m:
        sys.exit("phone_names not found in g2p.mbt")
    raw = m.group(1)
    parts = re.findall(r'"([^"]*)"', raw)
    return parts


def ids_from_verify(text: str, var: str) -> set[int]:
    m = re.search(rf"let {var} : Array\[Int\] = \[(.*?)\]", text, re.S)
    if not m:
        sys.exit(f"{var} not found in verify.mbt")
    return {int(x) for x in re.findall(r"\d+", m.group(1))}


def scheme_ids(spec: dict[str, set[int]], scheme: str) -> set[int]:
    if scheme == "modern":
        return spec["modern_inv"]
    return spec["common"] | spec[f"{scheme}_extra"]


def main() -> None:
    spec_text = SPEC.read_text(encoding="utf-8")
    g2p_text = G2P.read_text(encoding="utf-8")
    verify_text = VERIFY.read_text(encoding="utf-8")

    spec = phone_ids_from_spec(spec_text)
    names = phone_names_from_g2p(g2p_text)

    if len(names) != 48 or names[0] != "":
        sys.exit(f"expected 48 phone_names entries (id 0 unused), got {len(names)}")

    comment = re.search(
        r"Phone ids \(see lib/g2p_tables\.mbt\): (.*?)\n",
        spec_text,
    )
    if comment:
        for mid, label in re.findall(r"(\d+) ([^\s]+)", comment.group(1)):
            i = int(mid)
            if i < len(names) and names[i] != label:
                sys.exit(f"phone_names[{i}]={names[i]!r} but spec comment says {label!r}")

    for i in range(1, len(names)):
        if not names[i]:
            sys.exit(f"empty phone_names[{i}]")

    # verify.mbt mirrors spec inventories
    common = ids_from_verify(verify_text, "common_ids")
    if common != spec["common"]:
        sys.exit(f"common_ids mismatch: verify {common} spec {spec['common']}")

    modern_extra_spec = spec["modern_inv"] - spec["common"]
    pairs = [
        ("modern_extra", modern_extra_spec),
        ("koine_extra", spec["koine_extra"]),
        ("attic_extra", spec["attic_extra"]),
        ("erasmian_extra", spec["erasmian_extra"]),
    ]
    for vname, want in pairs:
        got = ids_from_verify(verify_text, vname)
        if got != want:
            sys.exit(f"{vname} mismatch: verify {got} spec {want}")
    for scheme in ("modern", "koine", "attic", "erasmian"):
        inv = scheme_ids(spec, scheme)
        for pid in inv:
            if pid >= len(names):
                sys.exit(f"scheme {scheme}: id {pid} out of range")

    print("verify_spec: phone table and scheme inventories agree with kernel/spec.mbtp")


if __name__ == "__main__":
    main()
