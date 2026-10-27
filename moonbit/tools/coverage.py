#!/usr/bin/env python3
"""Print the local verification coverage metric.

proved goals
    moon prove's valid count, from moonbit/_build/verif/kernel/kernel.proof.json
    when that file exists. Otherwise "not run".

public functions
    `pub fn` lines in the three pkg.generated.mbti snapshots (kernel, lib, api),
    including methods such as AlignParams::with_goal.

The ratio can be greater than 1 because one function has several goals.
It is not a fraction of functions that have a proof, and it is not a merge gate.
"""
import json
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
MBTI = [
    ROOT / "moonbit/kernel/pkg.generated.mbti",
    ROOT / "moonbit/lib/pkg.generated.mbti",
    ROOT / "moonbit/api/pkg.generated.mbti",
]
PROOF = ROOT / "moonbit/_build/verif/kernel/kernel.proof.json"


def pub_fns():
    total = 0
    for path in MBTI:
        count = 0
        for line in path.read_text().splitlines():
            if line.startswith("pub fn "):
                count += 1
        print(path.name + ": " + str(count) + " pub fn")
        total += count
    return total


def goals():
    if not PROOF.exists():
        return None
    data = json.loads(PROOF.read_text())
    summary = data.get("summary", {})
    return summary


def main():
    total = pub_fns()
    print("public functions: " + str(total))
    summary = goals()
    if summary is None:
        print("proved goals: not run (no kernel.proof.json)")
        return 0
    valid = int(summary.get("valid", 0))
    invalid = int(summary.get("invalid", 0))
    timeout = int(summary.get("timeout", 0))
    print("proved goals: " + str(valid) + " valid, " + str(invalid) + " invalid, " + str(timeout) + " timeout")
    if total:
        print("goals per public function: " + format(valid / total, ".3f"))
    if invalid or timeout:
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())
