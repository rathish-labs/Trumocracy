# Tester session note — 2026-09-08T19:30Z — neutral review of Doc 06 v2.8.1 + the code drop (technical, cycle 2)

```
Role:      tester (Ji-woo Park — Test Lead)
Dispatch:  project-manager (Ana-Maria Petrescu)
Assignment: artifacts/status/REVIEW-ASSIGNMENT-2026-09-08-VERIFY-PAGE.md — same assigned neutral
           reviewer as cycle 1 (Doc 06 + the code drop, technical, tester). Excluded: engineer
           (owner), product-owner (chose the remedy).
Cycle 1:   artifacts/reviews/06-coding-and-ut-v2.8.0-technical-cycle1.md — FAIL 95%, 0C/0H/1M/3L
Rework:    artifacts/engineer-2026-09-08T1900-doc06-rework.md (engineer, Samuel Oyelaran)
Scope:     SCORE AND LIST ONLY. No product code, no test code, no Doc 06, no Doc 07, no Doc 08
           written or edited. artifacts/memory-index.json NOT opened (path pre-registered).
```

## What I did

Ran the `document-review` skill in **technical** mode against `docs/06-coding-and-ut.md` **v2.8.1
(In Review)** and the code drop it registers. Wrote exactly one artifact:

- **`artifacts/reviews/06-coding-and-ut-v2.8.1-technical-cycle2.md`**

**Verdict: PASS · Score 97% · Critical 0 · High 0 · Medium 0 · Low 3 · Cycle 2 of 5.**
The Doc 06 review loop closes at cycle 2, no escalation.

## Cycle-1 findings — all four closed, verified at source

| Cycle-1 ID | Sev | Status | Where I checked |
|---|---|---|---|
| ISS-01 | Medium | **CLOSED** | §3 line 881 restricted to **UT-0890** with the v2.7.0 annotation preserved verbatim and a dated `(v2.8.1, ISS-01 correction: …)` appended (888–895); §7 item 26(c) line 1263 **preserved verbatim** with the correction appended (1264–1269) — exactly the annotate-don't-delete form the cycle-1 fix specified |
| ISS-02 | Low | **CLOSED** | Change history v2.8.0 entry, lines 107–113 — qualified to format/RTM unchanged + py_compile clean + exit-0 observed at v2.7.0 before the bump + exits 1 at v2.8.0 by design (report, not hook decision) |
| ISS-03 | Low | **CLOSED** | §6 lines 1069–1072 — flag stays **out of** `permanentFlags()` "(which returns only flags with no `removeBy`)"; matches `flags.js:121-123` and UT-0890's `toEqual([])` |
| ISS-04 | Low | **CLOSED** | §3 lines 834–835 — "as of **v2.8.1 (2026-09-08)**", version-relative so it cannot go stale again |

**Independent verification of the facts the ISS-01 fix asserts** (not taken from the engineer's
note): Doc 07 header **v2.8.1 Approved**; each of `TC-3570`,`TC-3571`,`TC-3572`,`TC-3573`,`TC-3574`,
`TC-3575`,`TC-3576` grepped individually and present; Doc 08 header **v2.11.3 Approved** ("closed ON
the cap, cycle 5 of 5, no escalation"); Doc 08 line 530 read in full, quote exact; §3.2 NFR-023 row
carries the `TC-3576` link. **Doc 07/08 untouched**: `git diff HEAD --stat -- docs/07-* docs/08-*`
→ 0 lines. Residue sweep: every surviving "UT-0889 … owed" co-occurrence is inside a correctly
dated historical entry (v2.6.0 change entry line 279; §5.0 log line 973) or the corrections
themselves.

## Evidence I ran

| Command | Result |
|---|---|
| MD5 of all nine reviewed code/test files | **Byte-identical** to my cycle-1 values — no product, test or hook code changed by the rework |
| `npm test` | **640/640 green** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 116 (unchanged) |
| `node hooks/run_gates.cjs --audit` (before my report) | exit 1 — **Doc 06 v2.8.1 the only blocker**; all others PASS incl. Doc 02 v2.17.3 |
| `node hooks/run_gates.cjs --audit` (after my report) | **exit 0 — "Documents blocking the review loop: 0"**. Review-loop invariant (c) now closed for all ten documents |
| `git diff HEAD --stat` | Doc 06 delta 135 → 221 lines (the +86 of rework); code files unchanged |

`npm run typecheck` / `lint:deps` deliberately **not** re-run: the code is byte-identical to the
state where I ran both clean at cycle 1. I recorded that as an explicit scope statement in the
report rather than repeating a stale result — the same discipline ISS-02 asked of the engineer.

## Decisions I made (as reviewer)

- **PASS.** Score 97%, zero C/H/M. The patch bump v2.8.0 → v2.8.1 was correct (my cycle-1 routing
  instruction and the Doc 07 v2.8.1 / Doc 08 v2.11.3 precedent); the engineer took it and justified
  it in the entry itself.
- **Three new Lows, carried, non-blocking** — recorded in the report as ISS-C2-01/02/03:
  1. **§5.0 review-history is two cycles stale** — missing the v2.7.0 cycle-2 PASS and the v2.8.0
     cycle-1 FAIL entries. Third recurrence of a stale-§5.0 finding on this document. Low because
     the authoritative records (`artifacts/reviews/`, the header, the change entry) are all correct.
  2. **The v2.8.1 "Not done in this session, unchanged from v2.8.0" list is stale at HEAD** — Doc 02
     reached **v2.17.3 Approved** and the README/CONTRIBUTING `/verify` delta **PASSED at cycle 2,
     97%** (`PUBLIC-FILES-REVIEW-2026-09-08-verify-cycle2.md`, 20:21Z), both **after** the 19:00Z
     rework. Largely defensible as a scope statement; what tips it is the header phrase "unchanged
     from v2.8.0".
  3. **§3's repaired sentence still cross-references `§7 item 26`** where **item 28** now registers
     UT-0890's owed row; item 26(c) now records the opposite (UT-0889 closed). Cosmetic — the
     correct pointer exists once, inside item 26(c)'s own correction.
- **Calibration held constant across both cycles:** a live misdirection of downstream work with an
  ID-collision hazard = Medium; a stale log, a concurrency-stale scope list and a section pointer
  that did not follow its sentence = Low. I did not inflate a cycle-2 finding to justify a second
  FAIL, and I did not suppress three real ones to deliver a clean PASS.

## Open items

- **Doc 06 v2.8.1 → engineer:** set `Status: Approved` citing this report. The three Lows fold at
  the next touch (priority: ISS-C2-01, then ISS-C2-03, then ISS-C2-02). Do not reopen Doc 07/08.
- **`UT-0890` still has no `TC` row — OWED to me** at the next Doc 07/08 touch (~15 cases on the
  UT-0889 one-per-defeatable-assertion pattern). Blocks no Must row: `enrolment_ui` ships dark.
- **Gate 2 is not affected by this PASS.** The RTM criterion remains **NOT MET** (16 of 138 Must
  rows COMPLETE) — a Gate-2 readiness condition certified with `--gate2`, not a per-stop condition.
- Not mine, recorded for the next reader: the engineer's note records "Did not commit" while
  DECISIONS §4 says "Commit; do not push" — a PM sequencing question, not a review finding.

## Stop-hook state at exit

`node hooks/run_gates.cjs --audit` → **exit 0**, "Documents blocking the review loop: **0**". The
hook matched my report canonically (`06-coding-and-ut.md v2.8.1 … PASS`), so no filename fallback
was needed. Unlike cycle 1, I expect no review-loop block on this stop. I did not self-appoint on
any other document: Doc 02 v2.17.3 (reviewer-qa's loop) and the README/CONTRIBUTING delta
(product-owner's review) both closed independently and neither was mine to touch.

## IDs touched

- **Read / verified, not modified:** `UT-0890`, `UT-0889`, `UT-0887`, `UT-0888`, `UT-0759`,
  `UT-0055`, `TC-3570`..`TC-3576`, `FR-131`, `FR-132`, `NFR-023`, `DES-085`, `DES-098`, `DES-100`,
  `ADR-003`, `ADR-011`, `CON-015`.
- **Minted:** none. **Renumbered:** none. **Edited in any document:** none.
