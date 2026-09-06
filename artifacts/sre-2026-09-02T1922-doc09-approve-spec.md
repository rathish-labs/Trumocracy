# Doc 09 — approval edit (v1.4.0, Status flip): anchored FIND/REPLACE transcription spec

```
Spec ID:       SPEC-DOC09-APPROVE-2026-09-02
Author:        Chen Wei — Reliability Lead (sre)  — owning role
Date:          2026-09-02
Target:        docs/09-release-notes.md  (current: v1.4.0, Status: In Review, 817 lines, LF, UTF-8)
Result:        docs/09-release-notes.md  v1.4.0, Status: Approved
Basis:         artifacts/reviews/09-release-notes-v1.4.0-business-cycle4.md
               (business, cycle 4 — PASS 97%, 0C / 0H / 0M / 2L; reviewer: tester, PM-assigned)
Transcriber:   project-manager (mechanical applier). Authorship stays with the sre.
Ops:           2 (CH-01, CH-02)
```

## No version bump

`Version:` stays **1.4.0**. The Status flip is not a content change and does not bump the semver —
the Doc 14 precedent (`v2.3.0`, `In Review` → `Approved` in place) and the same pattern in Docs
06/07/08. `Last updated:` stays **2026-09-02**. The only content edit is CH-02, which the reviewer
required *in this same edit* precisely so that it would not need a version of its own.

## What the two ops do

- **CH-01** — sets `Status: Approved`, citing the report, the score, the severity counts, the
  four-cycle trajectory, and the fact that this closes the **review loop only**. The last clause is
  load-bearing: a reader who sees "Approved" on a release-notes document must not take it for a
  release authorisation. **§0 and §7 still say HALTED, and nothing in this spec touches either.**
- **CH-02** — the reviewer's `ISS-02`. §0's precondition row currently says *"Docs 09–12, this
  document included, carry none"*. That is true as this spec is written and **becomes false the
  moment CH-01 lands**, because Doc 09 will then carry a passing report. The row's verdict stays
  **"Partially met"** — Docs 10, 11 and 12 still carry none, and that is what keeps the precondition
  unmet.

## Verification performed

| Check | Result |
|---|---|
| CH-01 anchor | L7 is `Status:        In Review`, a single whole line; L8 is `Owner:` — a structurally new field, not a continuation |
| CH-02 anchor | L192 is the whole precondition row on one line; L193 is blank |
| Header continuation style | Value column is **16**; continuations indent **15 spaces**. Matches Doc 09's own `Source:` block (L10–14) and the Doc 14 `Status:` precedent (L6–10). CH-01 follows it exactly |
| Docs 10–12 review reports | `ls artifacts/reviews/` — **no** report exists for `10-`, `11-` or `12-`. The "Docs 10–12 still carry none" half of CH-02 is verified true, not assumed |
| Docs 01–08, 13, 14 | Each carries a passing report as of 2026-09-01 — the first half of the row is unchanged and still true |
| Scope | Neither op touches §0's other eight rows, the Gate row, §7, the `REL-LIM` register, or the Approvals row. The HALT is untouched by construction |

## Both FIND blocks are whole lines

Per the rule this document's own history forced: each FIND begins at a line start and ends at the
end of a full line, and neither stops mid-sentence. Each occurs exactly once and they do not
overlap. Machine-verified.

---
## CH-01 Header — Status: In Review to Approved (line 7)

Column alignment preserved: value at column 16, continuation lines indented 15 spaces, matching the
`Source:` block below it and the Doc 14 `Status:` precedent.

FIND:
````
Status:        In Review
````
REPLACE WITH:
````
Status:        Approved — 09-release-notes-v1.4.0-business-cycle4.md (PASS 97%, 0C/0H/0M/2L;
               reviewer: tester, neutral, PM-assigned). Loop closed INSIDE the 5-cycle cap at
               cycle 4: 77% → 89% → 94% → 97%. Two Lows survive and are accepted on this
               version: the unresolvable `REF-##` citations (PM-accepted across all four
               cycles, owed by the sre at the next Operate cycle) and the §0 staleness fixed
               in this same edit. **This PASS closes the document-review loop only — it is
               NOT a Gate-2 sign-off, and it is NOT a release authorisation. This document's
               own verdict on release 0.1.0 remains HALTED (§0, §7).**
````

## CH-02 §0 precondition row — true after approval  [reviewer ISS-02, Low] (line 192)

Whole line; L193 is blank. **The row keeps its "Partially met" verdict** — Docs 10, 11 and 12 carry
no report, verified by listing `artifacts/reviews/` (zero files matching `10-`, `11-`, `12-`), and
that is what leaves the precondition unmet. No other precondition row is touched and the HALT is
unaffected.

FIND:
````
| Passing `document-review` reports | **Partially met** — Docs 01–08, 13 and 14 each carry a passing report in `artifacts/reviews/` as of 2026-09-01. **Docs 09–12, this document included, carry none** |
````
REPLACE WITH:
````
| Passing `document-review` reports | **Partially met** — Docs 01–08, 13 and 14 each carry a passing report in `artifacts/reviews/` as of 2026-09-01, and **this document now carries one for its current version** (`09-release-notes-v1.4.0-business-cycle4.md`, PASS 97%, cycle 4 of 5; the three earlier cycles failed). **Docs 10, 11 and 12 carry none** — which is why this precondition is still not met |
````

---

## Op index

| Op | Line | Basis | What it does |
|---|---|---|---|
| CH-01 | 7 | cycle-4 PASS | `Status: In Review` → **`Approved`**, with the loop record and the explicit non-authorisation clause |
| CH-02 | 192 | reviewer `ISS-02` (Low) | §0 precondition row made true at approval; verdict stays "Partially met" |

`Version:` unchanged at **1.4.0**. `Last updated:` unchanged at **2026-09-02**.

## Post-transcription checks

1. Header reads `Status:        Approved — 09-release-notes-v1.4.0-business-cycle4.md …`, with
   continuation lines indented **15 spaces** so every value starts at column 16, and
   `Version:       1.4.0` and `Last updated:  2026-09-02` **unchanged**.
2. Search `Docs 09–12, this document included, carry none` — must return **nothing**.
3. §0's precondition table still has **nine** rows, and the eight rows other than L192 are
   byte-identical to before this edit.
4. **The HALT is untouched.** Confirm all four still read as before: §0's
   *"This release has NOT been approved and MUST NOT be promoted to production"*; the Gate row
   (*"NOT approved"*); *"Approvals (Gate 2): **None.**"*; and §7 opening **HALTED** on two reasons
   each *"Sufficient alone"*.
5. Run the suffix-duplicate scan from the cycle-4 spec once more — expected **clean**. Two ops, two
   lines; the scan costs nothing and this is the last edit before the SOP advances.
6. `grep -c Approved` over the header block returns **2**, and both are correct: the new `Status:`
   line, and the pre-existing `Source:` reference to `docs/14-user-guide.md, Approved`, which
   describes **Doc 14's** status, not this document's. A count of 1 means CH-01 did not apply; a
   count above 2 means something else changed. Confirm the sentence denying Gate-2 authority is
   present and unqualified.
