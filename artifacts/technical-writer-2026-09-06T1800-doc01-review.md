# Session note — technical-writer (Maya Lindqvist) — 2026-09-06T18:00

```
Role:          technical-writer
Capacity:      NEUTRAL REVIEWER (document-review skill), NOT document owner this session
Assignment:    artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md
Reviewed:      docs/01-press-release-prfaq.md v2.1.0, business mode, cycle 1
Report:        artifacts/reviews/01-press-release-prfaq-v2.1.0-business-cycle1.md
Verdict:       FAIL — Score 87%, Critical 1 / High 2 / Medium 3 / Low 0
```

## What I did

Read CLAUDE.md, the `document-review` skill (`.claude/skills/document-review/SKILL.md`), the
review report template, and `docs/01-press-release-prfaq.md` v2.1.0 in full. Cross-checked every
factual claim in the new §0 banner and the six inline `(v2 target — see §0.)` markers against:
`docs/02-requirements-srs.md` §4.45 (FR-131 full text incl. clause (e), v2.17.0), §16.3/§16.4
(honesty register H-01–H-19)/§16.5 (contradiction surface); `docs/14-user-guide.md` §0.1, §2.2,
§2.6; `docs/09-release-notes.md` §0 (release-gate status, "merged to trunk and deployed nowhere");
`docs/06-coding-and-ut.md` §2.1/§7 (`IS_INSECURE_MOCK` discipline). Also read the product-owner's
anchored spec (`artifacts/product-owner-2026-09-06T1530-doc01-spec.md`, 8 OPs) and posture note
(`artifacts/product-owner-2026-09-06T1530-doc01-posture.md`) to understand the intended change and
the PO's own stated inline-marker judgement/exclusions.

## Finding (why this failed)

The §0 banner's own wording is accurate and well-sourced — no issue there. The six markers (OPs
3–8) are correctly placed and worded. But the assignment specifically asked me to judge whether
the banner+markers are **sufficient for a reader landing on any section in isolation** — and they
are not. I found **five unmarked, present-tense, unqualified "anonymous" / "no identity link"
claims** about v1 participation acts (Supporter/party-membership) that restate exactly the claim
class Doc 02 §4.45 FR-131 clause (e) prohibits, most prominently the **very first customer FAQ
answer** ("Who is this for?", line 352: "you are a Supporter by default — anonymous, full voting
rights") — which is at least as isolation-prone as the marked passages. Two more sit in §E3 "the
hard questions" (lines 567, 577), one in §D (line 338), and one (weaker, sourcing-unclear) appears
twice about recovery staff not seeing vote direction (lines 366, 665). A sixth, lower-severity
issue: the header's own `Status:` field says "adds four" markers while the change-log entry two
lines below, and the document body, show six — a self-contradiction within the same header block.

No transcription residue found at any of the 8 OP boundaries (no orphaned `FIND:`/backtick
fences, no duplicated `## A.`/`## B.` headings). Tenet count (9), §C/§D/§E question sets, and
Classification are internally consistent and unchanged as the change-log claims.

## IDs touched

- **Reviewed:** `01-press-release-prfaq.md` v2.1.0 (business mode). **Verdict: FAIL**, routed to
  **product-owner** for a new version (≥2.2.0).
- **Cited, not modified:** `FR-131` (clauses a–e), `FR-132`, Doc 02 §16.4 `H-01`, `H-02`, `H-03`,
  `H-04`; Doc 14 §0.1, §2.2, §2.6; Doc 09 §0; Doc 06 §2.1/§7.
- I wrote **only** the review report and this note. I did not edit Doc 01 (read-only per the
  document-review skill's independence rule).

## Open items / handoff

1. **Owed by product-owner:** rework Doc 01 to v2.2.0 addressing ISS-01..ISS-06 in the report,
   then route back for cycle 2.
2. I did **not** self-appoint to any other blocked document this session (Docs 02/04/06/07/08
   being mid-review is expected per the assignment's standing note) and made no changes to
   README/CONTRIBUTING (another technical-writer instance's work, untouched).
3. Per instructions, I did **not** open or edit `artifacts/memory-index.json` — this note is
   pre-registered by the assigning agent.
