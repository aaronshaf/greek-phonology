#!/usr/bin/env python3
"""Gate CI on moon prove: no invalid goals; allow a single solver timeout on share/."""
import json
import sys
from pathlib import Path

report = Path(__file__).resolve().parents[1] / "_build" / "verif" / "kernel" / "kernel.proof.json"
if not report.is_file():
    sys.exit("missing proof report: run `moon prove` in moonbit/ first")

data = json.loads(report.read_text())
summary = data.get("summary", {})
valid = int(summary.get("valid", 0))
invalid = int(summary.get("invalid", 0))
timeout = int(summary.get("timeout", 0))
failure = int(summary.get("failure", 0))

if invalid or failure:
    sys.exit(f"proof failures: invalid={invalid} failure={failure}")

if valid < 183:
    sys.exit(f"too few proved goals: {valid} < 183")

if timeout > 1:
    sys.exit(f"too many timeouts: {timeout}")

if timeout == 1:
    goals = [f.get("full_name", "") for f in data.get("failures", [])]
    if not any("share" in g for g in goals):
        sys.exit(f"unexpected timeout goals: {goals}")

print(f"check_prove_report: ok ({valid} valid, {timeout} timeout)")
