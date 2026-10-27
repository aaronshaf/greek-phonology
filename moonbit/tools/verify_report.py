#!/usr/bin/env python3
"""Markdown summary of an informational verification run. No third-party dependencies.

Reads the kernel proof report and optional moon check/test/prove logs. Prints to stdout
so CI can append it to the job summary. Never decides whether a merge may proceed.
"""
import argparse
import json
import re
import shutil
import subprocess
import sys


def version_of(cmd):
    path = shutil.which(cmd[0])
    if path is None:
        return "(not on PATH)"
    try:
        out = subprocess.run(cmd, check=False, capture_output=True, text=True)
    except OSError as exc:
        return f"(failed to run: {exc})"
    text = (out.stdout or out.stderr or "").strip()
    return text.splitlines()[0] if text else "(no output)"


def warning_count(text):
    if not text:
        return None
    finished = re.findall(r"\((\d+) warnings?,", text)
    if finished:
        return int(finished[-1])
    return len(re.findall(r"Warning \(", text))


def test_counts(text):
    if not text:
        return None
    match = re.search(r"Total tests: (\d+), passed: (\d+), failed: (\d+)", text)
    if not match:
        return None
    return tuple(int(x) for x in match.groups())


def read_text(path):
    if not path:
        return ""
    try:
        with open(path, encoding="utf-8", errors="replace") as fh:
            return fh.read()
    except OSError:
        return ""


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--proof", default="")
    parser.add_argument("--check-log", default="")
    parser.add_argument("--test-log", default="")
    parser.add_argument("--prove-log", default="")
    parser.add_argument("--outcome", action="append", default=[])
    args = parser.parse_args()

    lines = ["## greek-phonology verification (informational)", ""]
    lines.append("This report does not block merges.")
    lines.append("")
    lines.append(f"- MoonBit: `{version_of(['moon', 'version'])}`")
    lines.append(f"- Z3: `{version_of(['z3', '--version'])}`")
    for item in args.outcome:
        lines.append(f"- {item}")

    check = read_text(args.check_log)
    warnings = warning_count(check)
    if warnings is not None:
        lines.append(f"- `moon check` warnings: {warnings}")

    tests = test_counts(read_text(args.test_log))
    if tests is not None:
        total, passed, failed = tests
        lines.append(f"- `moon test`: {passed} passed, {failed} failed, {total} total")

    proof_path = args.proof
    summary = None
    result = None
    if proof_path:
        try:
            with open(proof_path, encoding="utf-8") as fh:
                proof = json.load(fh)
            summary = proof.get("summary")
            result = proof.get("result")
        except (OSError, json.JSONDecodeError) as exc:
            lines.append(f"- proof report: not read ({exc})")
    if summary is not None:
        lines.append(
            "- `moon prove` goals: "
            + ", ".join(f"{key}={summary.get(key, 0)}" for key in (
                "valid", "invalid", "timeout", "oom", "step_limit", "unknown", "failure"
            ))
            + f" (result={result})"
        )
    else:
        prove = read_text(args.prove_log)
        proved = re.search(r"(\d+) goals proved", prove)
        if proved:
            lines.append(f"- `moon prove`: {proved.group(1)} goals proved (no proof.json summary)")

    lines.append("")
    lines.append(
        "The proved-goal count depends on the MoonBit and Z3 versions. "
        "Treat the number above as what this run's toolchain reported."
    )
    sys.stdout.write("\n".join(lines) + "\n")


if __name__ == "__main__":
    main()
