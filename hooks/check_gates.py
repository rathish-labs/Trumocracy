#!/usr/bin/env python3
"""VEKTOR SubagentStop gate-keeper.

Wired as a SubagentStop hook in .claude/settings.json. Enforces two invariants
from CLAUDE.md (the org handbook) every time a subagent finishes:

  (a) MEMORY PROTOCOL — the subagent must have written a session-memory note to
      artifacts/<role>-<timestamp>.md AND registered it in
      artifacts/memory-index.json. We detect this by requiring a *fresh* note
      (recently modified) that is referenced by the index.

  (b) GATE PROGRESSION — progression past a gate is blocked until the RTM
      (docs/08-*.md) shows ZERO gaps in its Must rows. If the RTM exists and any
      gap is found, the stop is blocked.

  (c) REVIEW-AND-REWORK LOOP — progression is blocked until every major document
      that exists has a PASSING (or ESCALATED) document-review report in
      artifacts/reviews/ for the document's CURRENT version. A passing report
      requires score >= 95% AND zero critical/high/medium issues. The review loop
      is run by the shared `document-review` skill (a neutral, non-owner reviewer);
      its loop cap (max 5 rework cycles, then ESCALATE to a human) still applies.
      An ESCALATED report satisfies the hook ONLY when it records a human
      "approve-as-is" decision (who approved + date) — escalation alone, or a
      "rework"/"reject" decision, does NOT satisfy the gate.

Blocking contract (Claude Code hooks): emit JSON {"decision": "block",
"reason": ...} on stdout. The reason is fed back to the model so it can fix the
omission and stop again. A clean stop emits nothing and exits 0.

Stdlib only — no third-party dependencies.
"""

import json
import os
import re
import sys
import time
from pathlib import Path

# A note counts as "fresh" (written by the subagent that is now stopping) if it
# was modified within this many seconds. Override via VEKTOR_NOTE_MAX_AGE_SEC.
DEFAULT_NOTE_MAX_AGE_SEC = 900  # 15 minutes

# Tokens that mark an explicit gap anywhere in the RTM.
GAP_TOKENS = re.compile(r"(\bGAP\b|\bMISSING\b|\bTODO\b|\bTBD\b|❌|:x:|no\s+coverage)", re.IGNORECASE)

# Cell values that count as "empty" for a Must row's required trace columns.
EMPTY_CELLS = {"", "-", "–", "—", "n/a", "na", "none", "tbd", "?", "todo", "gap"}

# Major documents that MUST carry a passing (or escalated) document-review report
# before progression. Keyed by the numbered doc prefix → review mode. Mirrors the
# routing in CLAUDE.md ("Review-and-rework loop") and the document-review skill.
# Only docs that actually exist in docs/ are enforced (the loop phases in naturally).
REVIEW_REQUIRED_DOCS = {
    "01": "business",   # PR-FAQ
    "02": "business",   # Requirements (SRS)
    "05": "business",   # Backlog
    "13": "business",   # Project Plan
    "14": "business",   # User Guide
    "03": "technical",  # Architecture (SDD)
    "04": "technical",  # Test Strategy
    "06": "technical",  # Coding & UT (+ the code drop)
    "07": "technical",  # Test Cases
    "08": "technical",  # Traceability Matrix
}

# A document's Version field is "unset" (template not yet filled) if it is blank or
# still a placeholder — such a doc is not yet a real version to gate on.
PLACEHOLDER_VERSIONS = {"", "<semver>", "<version>", "x.y.z", "0.0.0", "n/a", "tbd", "draft"}

# Verdicts in a review report that satisfy the gate (case-insensitive).
SATISFYING_VERDICTS = {"pass", "escalated"}


def block(reason: str) -> None:
    """Emit a block decision and exit. Stops the subagent and feeds back reason."""
    print(json.dumps({"decision": "block", "reason": reason}))
    sys.exit(0)


def allow() -> None:
    """Clean stop — let the subagent finish."""
    sys.exit(0)


def project_dir() -> Path:
    # Claude Code exports CLAUDE_PROJECT_DIR for hooks; fall back to CWD.
    return Path(os.environ.get("CLAUDE_PROJECT_DIR", os.getcwd()))


def read_hook_input() -> dict:
    try:
        raw = sys.stdin.read()
        return json.loads(raw) if raw.strip() else {}
    except (json.JSONDecodeError, ValueError):
        return {}


def check_memory_protocol(root: Path) -> None:
    """Invariant (a): a fresh memory note exists and the index registers it."""
    artifacts = root / "artifacts"
    index_path = artifacts / "memory-index.json"

    if not index_path.exists():
        block(
            "Memory protocol violated: artifacts/memory-index.json is missing. "
            "Write your session-memory note to artifacts/<role>-<timestamp>.md and "
            "register it in artifacts/memory-index.json before stopping."
        )

    try:
        index = json.loads(index_path.read_text() or "{}")
    except (json.JSONDecodeError, ValueError):
        block(
            "Memory protocol violated: artifacts/memory-index.json is not valid JSON. "
            "Fix it and register your session-memory note before stopping."
        )

    # Session-memory notes are markdown files in artifacts/ (exclude the index).
    notes = [p for p in artifacts.glob("*.md")]
    if not notes:
        block(
            "Memory protocol violated: no session-memory note found in artifacts/. "
            "Write artifacts/<role>-<timestamp>.md (what you did, decisions, open items, "
            "IDs touched) and register it in artifacts/memory-index.json before stopping."
        )

    max_age = float(os.environ.get("VEKTOR_NOTE_MAX_AGE_SEC", DEFAULT_NOTE_MAX_AGE_SEC))
    now = time.time()
    fresh = [p for p in notes if (now - p.stat().st_mtime) <= max_age]
    if not fresh:
        block(
            "Memory protocol violated: no fresh session-memory note was written this "
            "session. Append a new artifacts/<role>-<timestamp>.md note recording what "
            "you did, decisions, open items, and IDs touched — then register it in "
            "artifacts/memory-index.json before stopping."
        )

    # The index must reference the fresh note(s) — i.e., the index was updated.
    index_blob = json.dumps(index)
    unregistered = [p.name for p in fresh if p.name not in index_blob and p.stem not in index_blob]
    if unregistered:
        block(
            "Memory protocol violated: your session-memory note(s) "
            f"{unregistered} are not registered in artifacts/memory-index.json. "
            "Add an index entry for each note before stopping."
        )


def find_rtm(root: Path) -> Path | None:
    matches = sorted((root / "docs").glob("08-*.md"))
    return matches[0] if matches else None


def scan_rtm_for_gaps(rtm: Path) -> list[str]:
    """Return human-readable gap descriptions found in the RTM (empty list = clean)."""
    gaps: list[str] = []
    for lineno, line in enumerate(rtm.read_text().splitlines(), start=1):
        # Explicit gap markers anywhere in the matrix.
        if GAP_TOKENS.search(line):
            gaps.append(f"line {lineno}: explicit gap marker → {line.strip()}")
            continue
        # Empty required trace cell in a Must row of a markdown table.
        if line.lstrip().startswith("|") and re.search(r"\bMust\b", line, re.IGNORECASE):
            cells = [c.strip() for c in line.strip().strip("|").split("|")]
            # Skip separator rows like | --- | --- |
            if all(set(c) <= {"-", ":", " "} for c in cells):
                continue
            if any(c.lower() in EMPTY_CELLS for c in cells):
                gaps.append(f"line {lineno}: Must row has an empty trace cell → {line.strip()}")
    return gaps


def check_gate_progression(root: Path) -> None:
    """Invariant (b): block while the RTM has any Must-row gap."""
    rtm = find_rtm(root)
    if rtm is None:
        # No RTM yet (pre-Coding phases) — nothing to gate on here.
        return
    gaps = scan_rtm_for_gaps(rtm)
    if gaps:
        listed = "\n  - ".join(gaps[:20])
        block(
            "Gate blocked: the RTM (docs/08) has gaps in Must rows — a gap in any Must "
            "row is a defect that blocks the gate. Close every gap (each FR/NFR must "
            "trace up to a BR and down to a DES, a US, and a TC), then stop:\n  - "
            + listed
        )


def doc_current_version(doc: Path) -> str | None:
    """Parse a document's current Version from its header block.

    Returns the semver string, or None if the doc has no real version yet
    (blank or a template placeholder like '<semver>')."""
    try:
        text = doc.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return None
    for line in text.splitlines()[:40]:  # version lives in the header block
        m = re.match(r"\s*Version:\s*(.+?)\s*$", line, re.IGNORECASE)
        if m:
            ver = m.group(1).strip().lstrip("vV")
            if ver.lower() in PLACEHOLDER_VERSIONS:
                return None
            return ver
    return None


def parse_review_report(report: Path) -> dict:
    """Extract the machine-parseable metadata fields from a review report."""
    fields: dict[str, str] = {}
    try:
        text = report.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return fields
    wanted = {
        "reviewed document", "document version", "review mode",
        "score", "critical", "high", "medium", "low", "verdict",
        "human decision", "approved by",
    }
    for line in text.splitlines():
        m = re.match(r"\s*([A-Za-z ]+?):\s*(.+?)\s*$", line)
        if not m:
            continue
        key = m.group(1).strip().lower()
        if key in wanted and key not in fields:
            fields[key] = m.group(2).strip()
    return fields


def _int(val: str | None) -> int:
    if not val:
        return 0
    m = re.search(r"-?\d+", val)
    return int(m.group(0)) if m else 0


def report_satisfies(fields: dict, doc_name: str, version: str) -> bool:
    """True if this report is a passing/escalated review of (doc_name, version)."""
    reviewed = fields.get("reviewed document", "")
    if Path(reviewed).name.lower() != doc_name.lower():
        return False
    rep_ver = fields.get("document version", "").strip().lstrip("vV").lower()
    if rep_ver != version.lower():
        return False
    verdict = fields.get("verdict", "").strip().lower()
    if verdict not in SATISFYING_VERDICTS:
        return False
    # ESCALATED (the loop hit its 5-cycle cap) requires a RECORDED human decision
    # to approve-as-is, with a named approver. Escalation alone, or a decision of
    # "rework"/"reject", does NOT satisfy the gate.
    if verdict == "escalated":
        decision = fields.get("human decision", "").strip().lower()
        approver = fields.get("approved by", "").strip()
        approver_set = bool(approver) and approver.lower() not in EMPTY_CELLS
        return decision in {"approve-as-is", "approve as-is", "approved"} and approver_set
    # PASS must independently satisfy the bar: score >= 95 and zero C/H/M.
    if _int(fields.get("score")) < 95:
        return False
    if _int(fields.get("critical")) or _int(fields.get("high")) or _int(fields.get("medium")):
        return False
    return True


def check_review_reports(root: Path) -> None:
    """Invariant (c): each existing major doc needs a passing/escalated review of its current version."""
    docs_dir = root / "docs"
    if not docs_dir.is_dir():
        return

    reviews_dir = root / "artifacts" / "reviews"
    reports = [parse_review_report(p) for p in reviews_dir.glob("*.md")] if reviews_dir.is_dir() else []

    missing: list[str] = []
    for prefix, mode in sorted(REVIEW_REQUIRED_DOCS.items()):
        docs = sorted(docs_dir.glob(f"{prefix}-*.md"))
        if not docs:
            continue  # phase not reached yet — nothing to review
        doc = docs[0]
        version = doc_current_version(doc)
        if version is None:
            continue  # not a real version yet (placeholder/blank header)
        if not any(report_satisfies(r, doc.name, version) for r in reports):
            missing.append(f"{doc.name} v{version} ({mode} review)")

    if missing:
        listed = "\n  - ".join(missing)
        block(
            "Review loop blocked: the following major document version(s) have no PASSING (or "
            "human-approved ESCALATED) document-review report in artifacts/reviews/. Run the "
            "`document-review` skill with a NEUTRAL (non-owner) reviewer in the correct mode; a "
            "version passes only at score >= 95% AND zero critical/high/medium issues. On FAIL, the "
            "OWNING ROLE reworks a new version and it is re-reviewed (cap 5 cycles, then ESCALATE to "
            "a human, who must record an 'approve-as-is' decision with their name to clear it). Then "
            "stop:\n  - " + listed
        )


def main() -> None:
    data = read_hook_input()
    # Avoid infinite stop loops: if we already blocked once and the model is
    # re-stopping under an active stop hook, let it through.
    if data.get("stop_hook_active"):
        allow()

    root = project_dir()
    check_memory_protocol(root)
    check_gate_progression(root)
    check_review_reports(root)
    allow()


if __name__ == "__main__":
    main()
