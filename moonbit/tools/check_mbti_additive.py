#!/usr/bin/env python3
"""Fail if a public .mbti line disappeared relative to HEAD.

A line is protected when it is a `pub fn`, a `pub let`, a struct header, or a
struct field. New lines are allowed. This is the additive-only check the
pre-commit hook runs after `moon info`.
"""
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
FILES = [
    "moonbit/kernel/pkg.generated.mbti",
    "moonbit/lib/pkg.generated.mbti",
    "moonbit/api/pkg.generated.mbti",
]


def head_lines(rel):
    run = subprocess.run(
        ["git", "show", "HEAD:" + rel],
        cwd=ROOT,
        capture_output=True,
        text=True,
    )
    if run.returncode != 0:
        return None
    return run.stdout.splitlines()


def protected(line):
    stripped = line.strip()
    if stripped.startswith("pub fn ") or stripped.startswith("pub let "):
        return True
    if stripped.startswith("pub(all) struct ") or stripped.startswith("pub struct "):
        return True
    if line.startswith("  ") and " : " in line and not stripped.startswith("//"):
        return True
    return False


def main():
    failed = False
    for rel in FILES:
        old = head_lines(rel)
        if old is None:
            print("mbti additive: " + rel + " is new")
            continue
        new = set((ROOT / rel).read_text().splitlines())
        for line in old:
            if protected(line) and line not in new:
                print("mbti additive: removed from " + rel + ": " + line)
                failed = True
    if failed:
        return 1
    print("mbti additive: public signatures and struct fields are still present")
    return 0


if __name__ == "__main__":
    sys.exit(main())
