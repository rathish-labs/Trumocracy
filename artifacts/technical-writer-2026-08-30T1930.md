# Session memory — technical-writer (neutral reviewer role) — 2026-08-30T19:30

## What this session did

Acted as the **neutral document-review reviewer** (business mode) for **Doc 02 Requirements
Specification v2.16.3**, cycle 4 of the v2.16.x lineage. This is a role-swap use of the
technical-writer subagent to load the shared `document-review` skill — **not** technical-writer's
own Doc 14 work. No Doc 14 changes were made in this session.

**Verdict: PASS — 96%, 0 Critical / 0 High / 0 Medium / 3 Low, cycle 4 of 5.**
Report written to `artifacts/reviews/02-requirements-srs-v2.16.3-business-cycle4.md`.

## What v2.16.3 changed

A single-line factual correction to §13 tracked routing **(h)**, routed in from the **Doc 03
v2.11.1 technical review (cycle 3)** — not found by this reviewer's own prior business-mode
passes (v2.16.0/1/2, cycles 1–3, all PASSED without catching it). (h) previously read "v1 holds
no vote (ADR-024 §(b))" — a mis-citation: ADR-024 §(b) removes on-chain **execution** in v1 and
puts votes in Postgres; it does not remove the ballot, and **DES-096** (Doc 03 §10.13.3) specifies
a v1 ballot backing outright (`castBallot`, `computeTally`). Corrected to the narrower, accurate
claim: **the proposals and debate layer** (not "v1" broadly) holds no vote — it stops at
`admitToBallot()` and hands off to `IBallotService`.

## Verification performed (independent, against primary sources — not taken on the changelog's word)

- Read **ADR-024 §(a)/(b)** directly (`docs/adr/ADR-024-v1v2-delivery-split-voting-identity-seams.md`)
  — confirmed §(b) is about execution location (chain vs Postgres), not ballot existence; §(a)'s
  `IBallotService` method table already fully specifies the v1 DB-backed ballot.
- Read **Doc 03 §10.13.3 DES-096** directly — confirmed v1 `castBallot`/`computeTally` backing
  matches what the corrected Doc 02 text claims.
- Read **`packages/sdk/src/proposals.js`** header comment directly — confirmed the "stops at
  `admitToBallot()` and hands off" claim is verbatim accurate to the shipped code.
- Cross-checked the **quoted superseded wording** against an independent record —
  `artifacts/reviews/03-architecture-design-sdd-v2.11.1-technical-cycle3.md` (the report that
  first flagged this), which itself quotes the original Doc 02 sentence verbatim. Quote matches
  (partial but non-misleading — drops the trailing clause, which is semantically preserved in the
  new text).
- Swept the **whole document** for surviving instances of the same defect class (grep for
  `ADR-024`, "holds no vote", "holds no ballot", `admitToBallot`).

## Findings (all Low, none blocking)

- **ISS-01** (carried, unchanged): §4.6 FR-064 "v2 (deferred):" clause still lacks a cross-reference
  to FR-023/FR-068. Re-confirmed present and unchanged at line 656.
- **ISS-02** (NEW this cycle): the **v2.16.0 changelog entry itself** (header block, line 81) still
  carries an unscoped, unquoted echo of the same imprecision — "not a defect in v1, which holds no
  vote" — one paragraph before its own addendum (line 91) which already uses the correct scoped
  phrase. Not escalated past Low: it sits in historical changelog narration (the document's own
  established convention, per the v2.14.1 ISS-01 precedent, does not require amending historical
  changelog entries), and it does not contradict any live §13 row, RTM status, or requirement text.
  Recorded as a genuine surviving instance of the sweep target, per the task's explicit ask to look
  hard — this project's pattern (Doc 08 v2.5.3 ISS-01, Doc 07 v2.4.3 ISS-01, both High) is "the
  correction reaches all locations but one." This instance is materially lower-risk than those two
  because it is narration, not a live status field, so Low (not Medium/High) is the calibrated call.
- **ISS-03** (NEW this cycle): the new (h) annotation's closing clause "so v1 does hold a vote"
  omits the design-vs-built distinction Doc 03's own v2.11.0 correction carefully preserves
  ("DES-096 specifies... outright" vs. "nothing in the shipped code derives anything yet"). Read
  beside adjacent §13 row (g) ("the layer **built** holds no vote; the ballot layer is **owed**"),
  this could momentarily read as claiming v1's ballot-casting is already shipped. Read in its own
  full sentence, the meaning is not actually wrong. Low, wording-precision nit.

## IDs touched (read-only — this review edits nothing)

`FR-064`, `FR-090`, `FR-091`, `FR-092`, `ADR-024`, `DES-096`, §13 tracked-routing items (f)–(i),
`ISS-01` (carried Low), `ISS-02`/`ISS-03` (new Lows, this cycle).

## Open items for the product-owner (non-blocking, optional next-touch cleanup)

1. §13 changelog line 81: reword "v1, which holds no vote" → "the proposals layer, which holds
   no vote" for consistency with the corrected (h) row.
2. §13 (h)'s new clause: consider qualifying "so v1 does hold a vote" → "so v1's design does hold
   a vote (the ballot layer itself is tracked separately as OPEN at §13 (g))".
3. ISS-01 (FR-064 cross-reference) — still open, unchanged, ride with next FR-064 touch.

## Status

Doc 02 v2.16.3 **PASSED cycle 4** — product-owner sets `Status: Approved`; SOP advances. No rework
required. This closes the loop the Doc 03 v2.11.1 review opened.

---

**Register this note in `artifacts/memory-index.json` with an entry of the form (coordinator to
add):**

```json
"technical-writer-2026-08-30T1930": {
  "role": "technical-writer (acting as neutral document-review reviewer)",
  "timestamp": "2026-08-30T19:30",
  "path": "artifacts/technical-writer-2026-08-30T1930.md",
  "summary": "Reviewed Doc 02 Requirements Specification v2.16.3 in business mode, cycle 4 of 5. PASS — 96%, 0C/0H/0M/3L (ISS-01 carried; ISS-02, ISS-03 new). Verified the routed-in ADR-024 §(b)/DES-096 mis-citation fix at §13 (h) against ADR-024, Doc 03 §10.13.3, and packages/sdk/src/proposals.js directly. Found two new Low residuals of the same imprecision (changelog line 81; (h)'s own new clause) on sweep — neither blocking.",
  "ids_touched": ["FR-064", "FR-090", "FR-091", "FR-092", "ADR-024", "DES-096", "ISS-01", "ISS-02", "ISS-03"],
  "artifact": "artifacts/reviews/02-requirements-srs-v2.16.3-business-cycle4.md"
}
```
