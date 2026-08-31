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
        # encoding is explicit: on Windows the default is cp1252, and this index
        # carries UTF-8 (em-dashes in summaries), which raises UnicodeDecodeError
        # and crashes the hook instead of gating. utf-8-sig also tolerates a BOM.
        index = json.loads(index_path.read_text(encoding="utf-8-sig") or "{}")
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
    # encoding is explicit for the same reason as in check_memory_protocol: the RTM
    # is UTF-8 (em-dashes, checkboxes) and a cp1252 default read crashes the hook.
    text = rtm.read_text(encoding="utf-8", errors="replace")
    for lineno, line in enumerate(text.splitlines(), start=1):
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


# Canonical metadata keys the template mandates.
WANTED_FIELDS = {
    "reviewed document", "document version", "review mode",
    "score", "critical", "high", "medium", "low", "verdict",
    "human decision", "approved by",
}

# Tolerated spellings for the two identity fields. Reports are authored by agents
# from a template; these two keys drifted in 10 reports across 4 documents and
# several reviewer roles even though the template AND the document-review skill
# both spell them correctly with a filename example. An alias is only consulted
# when the canonical key is absent, so a correct report is never reinterpreted.
FIELD_ALIASES = {
    "document": "reviewed document",
    "doc": "reviewed document",
    "reviewed doc": "reviewed document",
    "version": "document version",
    "doc version": "document version",
    "reviewed version": "document version",
}

# artifacts/reviews/<NN>-<slug>-v<version>-<mode>-cycle<k>.md — the naming
# convention the template mandates under "Save as:".
REPORT_NAME_RE = re.compile(
    r"^(?P<prefix>\d{2})-.*-v(?P<version>\d+\.\d+\.\d+)-(?P<mode>business|technical)-cycle\d+\.md$",
    re.IGNORECASE,
)


def parse_review_report(report: Path) -> dict:
    """Extract the machine-parseable metadata fields from a review report.

    Canonical keys win; a tolerated alias fills a canonical key only when that key
    is absent. Rationale in FIELD_ALIASES."""
    fields: dict[str, str] = {}
    aliased: dict[str, str] = {}
    try:
        text = report.read_text(encoding="utf-8", errors="ignore")
    except OSError:
        return fields
    for line in text.splitlines():
        m = re.match(r"\s*([A-Za-z ]+?):\s*(.+?)\s*$", line)
        if not m:
            continue
        key = m.group(1).strip().lower()
        val = m.group(2).strip()
        if key in WANTED_FIELDS:
            fields.setdefault(key, val)
        elif key in FIELD_ALIASES:
            aliased.setdefault(FIELD_ALIASES[key], val)
    for key, val in aliased.items():
        if key not in fields:
            fields[key] = val
            fields.setdefault("_used_alias", "")
            fields["_used_alias"] = (fields["_used_alias"] + " " + key).strip()
    return fields


def identity_from_filename(report: Path) -> tuple[str, str] | None:
    """Derive (doc-number prefix, version) from a report's own filename.

    The filename convention is mandated by the template and is the most reliable
    identity signal available: it is visible in the path, is what the reviewer
    types deliberately, and cannot drift without the file also being misfiled."""
    m = REPORT_NAME_RE.match(report.name)
    if not m:
        return None
    return m.group("prefix"), m.group("version")


def _int(val: str | None) -> int:
    if not val:
        return 0
    m = re.search(r"-?\d+", val)
    return int(m.group(0)) if m else 0


def report_identifies(fields: dict, doc_name: str, version: str,
                      report: Path | None = None) -> bool:
    """True if this report claims to be a review of (doc_name, version).

    Identity is established by the canonical fields when they resolve, and
    otherwise by the report's own mandated filename. Identity is deliberately
    separated from the pass bar so a report that names the right document can be
    reported as a NEAR MISS rather than vanishing into 'no report found'."""
    reviewed = Path(fields.get("reviewed document", "")).name.lower()
    rep_ver = fields.get("document version", "").strip().lstrip("vV").lower()
    if reviewed == doc_name.lower() and rep_ver == version.lower():
        return True
    # Fallback: the filename convention. Used when the fields are absent or carry
    # a document title/ID instead of the filename.
    if report is not None:
        ident = identity_from_filename(report)
        if ident is not None:
            prefix, fname_ver = ident
            if doc_name.startswith(prefix + "-") and fname_ver.lower() == version.lower():
                return True
    return False


def report_satisfies(fields: dict, doc_name: str, version: str,
                     report: Path | None = None) -> bool:
    """True if this report is a passing/escalated review of (doc_name, version)."""
    if not report_identifies(fields, doc_name, version, report):
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
    report_paths = sorted(reviews_dir.glob("*.md")) if reviews_dir.is_dir() else []
    reports = [(p, parse_review_report(p)) for p in report_paths]

    missing: list[str] = []
    for prefix, mode in sorted(REVIEW_REQUIRED_DOCS.items()):
        docs = sorted(docs_dir.glob(f"{prefix}-*.md"))
        if not docs:
            continue  # phase not reached yet — nothing to review
        doc = docs[0]
        version = doc_current_version(doc)
        if version is None:
            continue  # not a real version yet (placeholder/blank header)
        if any(report_satisfies(f, doc.name, version, p) for p, f in reports):
            continue
        # No satisfying report. Distinguish "nothing was written" from "a report
        # exists for exactly this version but does not clear the bar" — the second
        # is a different problem with a different fix, and saying so here is what
        # turns a mystifying block into a one-line diagnosis.
        near = [
            (p, f) for p, f in reports
            if report_identifies(f, doc.name, version, p)
        ]
        if not near:
            missing.append(f"{doc.name} v{version} ({mode} review) — NO report found for this version")
            continue
        for p, f in near:
            verdict = f.get("verdict", "").strip().upper() or "(no Verdict field)"
            detail = (
                f"score={f.get('score', '?')} C={f.get('critical', '?')} "
                f"H={f.get('high', '?')} M={f.get('medium', '?')}"
            )
            note = ""
            if f.get("_used_alias"):
                note = (
                    f"  [identity read via a NON-CANONICAL field name or the filename fallback; "
                    f"fix the metadata block to use 'Reviewed document:' / 'Document version:']"
                )
            missing.append(
                f"{doc.name} v{version} ({mode} review) — report EXISTS "
                f"({p.name}) but does not satisfy the gate: Verdict={verdict}, {detail}{note}"
            )

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


def audit(root: Path) -> int:
    """Print gate state without blocking. `python3 hooks/check_gates.py --audit`.

    Exists because a SubagentStop hook is silent when it passes and invisible when
    it cannot run at all (a missing interpreter exits 127 and enforces nothing).
    This makes the gate's verdict inspectable on demand rather than only at a stop."""
    docs_dir = root / "docs"
    reviews_dir = root / "artifacts" / "reviews"
    reports = [(p, parse_review_report(p)) for p in sorted(reviews_dir.glob("*.md"))] \
        if reviews_dir.is_dir() else []

    print("VEKTOR gate audit - review-and-rework loop\n")
    blocked = 0
    for prefix, mode in sorted(REVIEW_REQUIRED_DOCS.items()):
        docs = sorted(docs_dir.glob(f"{prefix}-*.md"))
        if not docs:
            continue
        doc = docs[0]
        version = doc_current_version(doc)
        if version is None:
            print(f"  SKIP   {doc.name} (no real version yet)")
            continue
        hits = [p for p, f in reports if report_satisfies(f, doc.name, version, p)]
        if hits:
            aliased = any(
                parse_review_report(h).get("_used_alias") for h in hits
            )
            flag = "  [via alias/filename fallback - canonicalise the metadata block]" if aliased else ""
            print(f"  PASS   {doc.name} v{version} ({mode}) <- {hits[0].name}{flag}")
        else:
            blocked += 1
            near = [p.name for p, f in reports if report_identifies(f, doc.name, version, p)]
            why = f"report exists but fails the bar: {near}" if near else "no report for this version"
            print(f"  BLOCK  {doc.name} v{version} ({mode}) - {why}")

    rtm = find_rtm(root)
    if rtm is not None:
        gaps = scan_rtm_for_gaps(rtm)
        print(f"\n  RTM Must-row gaps: {len(gaps)}"
              + ("  (Gate-2 condition, not a merge condition - ruling 2026-08-25)" if gaps else ""))
    print(f"\n  Documents blocking the review loop: {blocked}")
    return 1 if blocked else 0


def main() -> None:
    if "--audit" in sys.argv:
        sys.exit(audit(project_dir()))

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
