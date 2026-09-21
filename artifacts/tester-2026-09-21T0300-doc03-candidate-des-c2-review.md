# Session memory — tester (Ji-woo Park), 2026-09-21T03:00

**Role in this session:** NEUTRAL REVIEWER for Doc 03 (owner: architect). `document-review` skill,
**technical** mode, **cycle 2 of 5**. Assignment recorded before dispatch by the PM:
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`. I wrote **no document text and
no product code** — one review report and this note.

## What I did

- Read the assignment (incl. its Outcomes table) and the cycle-1 report
  (`artifacts/reviews/03-architecture-design-sdd-v2.15.0-technical-cycle1.md`, FAIL 88%, 0C/2H/4M/5L)
  in full, using its "Verification performed" section so I did not re-verify the v2.15.0 facts
  (refusal codes, seam table, order-of-checks, UT-089x citations, Definition-B sweep).
- Reviewed `docs/03-architecture-design-sdd.md` **v2.16.0** (In Review) — every v2.16.0 site, against
  the code and the tests, not against the change entry.
- Verdict: **PASS — 97%, 0 Critical / 0 High / 0 Medium / 2 Low.**
  Report: `artifacts/reviews/03-architecture-design-sdd-v2.16.0-technical-cycle2.md`.

## Rulings (per cycle-1 ISS)

| ISS | Was | Now |
|---|---|---|
| ISS-01 | High — DES-066 r4 claimed the FR-131(b) feedback disclosure renders before the controls | **FIXED** — describes what ships (`feedbackVisibility`, presence by UT-0906); placement recorded as **owed** with a §13 row and a named owner |
| ISS-02 | High — DES-108 r3(a) grounded a v1 rule on FR-082 (DEFERRED-v2) | **FIXED** — FR-082 stated DEFERRED-v2 and NOT claimed; v1 property = non-publication; FR-131(b)-equivalent disclosure is an obligation of the owed question surface; §5.2 cell agrees |
| ISS-03 | Medium — FR-065's "same nullifier mechanism" clause unaddressed | **FIXED** — recorded as a v1 **divergence**; Postgres UNIQUE (candidacyId, member) required of the DES-097(b) backing; convergent `FEEDBACK:<candidacyId>` via `isUniqueInScope` named; "is the v1 nullifier" withdrawn; **ruling left to me** |
| ISS-04 | Medium — FR-081 active/inactive listed as a code fact | **FIXED** — design-level derivation from the recorded stage; architect's view marked as a view; §5.2 cell and §15 row re-phrased |
| ISS-05 | Medium — §5.2 provisional SCR note unannotated | **FIXED** — annotated in place, not swapped |
| ISS-06 | Medium — §5.6 CANDIDACY sketch stale | **FIXED** — annotated with the stage set + legal edges, verified edge-for-edge against `TRANSITIONS` (one Low on the count word) |
| ISS-07/08/09/11 | Low | **FIXED** — `NOMINATION_MATURATION_SECONDS`; "and the store" re-scoped to unasserted-by-inspection; decisions record §3/§4 Q18 lettering now (a) durations / (b) waiver matching §10.11/§16; "one row per requirement group" |
| ISS-10 | Low — non-dismissability cited to UT-0906 | **NOT FIXED → ISS-C2-01 (Low)** — moved to **UT-0887**, which asserts the banner's copy (banned words, clauses a/b/c, en/ar strings), **not** non-dismissability. The property is asserted on another surface by **UT-0881** (`apps/web/test/proposals.test.tsx:342-350`); on SCR-23 it is unasserted |

**New this cycle:** **ISS-C2-02 (Low)** — §5.6's annotation and the change entry say "nine stages";
`CANDIDACY_STAGE` (`packages/protocol/src/candidates.js:37-54`) has **eight**, and the annotation's
own edge list names exactly eight. The wrong number originated in my cycle-1 required-fix text and
was transcribed rather than checked.

## Evidence

- Suite re-run: **739/739 green** (contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138).
- `git diff -U0 HEAD -- docs/03-architecture-design-sdd.md` → 18 hunks; every v2.16.0 mark maps to a
  claimed site; **"Sites changed at v2.16.0" is true and complete**; no residue; §13 column counts intact.
- `node hooks/run_gates.cjs --audit`: before writing the report, Doc 03 v2.16.0 `BLOCK — no report for
  this version` (expected mid-loop). After: **0 blocking**, matched canonically (no filename fallback).
  RTM unchanged at **138 Must / 16 COMPLETE / 122 OPEN**, both signals agreeing — correct, since this
  version closes no row.

## Open items carried into MY next session (Doc 07 v2.10.0 / Doc 08 v2.13.0)

Doc 03 v2.16.0 correctly leaves five rulings to me; they are the substance of the next tester session:

1. **FR-065** — (a) "unlinkable to its caster" is Definition-B, not claimed for v1; (b) "enforced by the
   same nullifier mechanism as scope-action limits" is a recorded v1 divergence (store-local
   check-then-write vs `isUniqueInScope`). Does the row close on Doc 02 §16.3.1's own v1 mechanism
   ("DB aggregate; aggregate public"), or stay OPEN pending the convergent form?
2. **FR-067** — "refused **and logged**": refusal is by construction, with no refusal-trail event in v1.
3. **FR-081** — does derivation of active/inactive from the recorded stage satisfy "recorded … with its
   state", or is a UT (and possibly a field) required?
4. **FR-085** — whether TC-3476 (Blocked, FR-131 clause-8) belongs on that row.
5. **FR-039 / FR-066 / FR-093** stay OPEN with named blockers (office ballot + tie-break; DES-097
   anchoring; question phase + election) — do not close them.

Also for me: TC rows for **UT-0891..UT-0907**; Doc 04 §14 `TS-V1-*` band re-narrowing is routed to the
architect if Doc 07 draws ids from TC-3592+ (OPEN-30 pattern).

## Lane discipline

Reviewer role only this session: no edit to Doc 03, no product code, no test, no Doc 07/08 touch, no
self-appointment to any other blocked review. `artifacts/memory-index.json` NOT opened — the PM
pre-registered this note.

## IDs touched (read/ruled on, none minted)

DES-027, DES-028, DES-066, DES-067, DES-076, DES-095, DES-096, DES-097(b), DES-098, DES-103,
DES-106, DES-107, DES-108 · FR-023, FR-036, FR-037, FR-038, FR-039, FR-065, FR-066, FR-067, FR-081,
FR-082, FR-085, FR-093, FR-107, FR-122, FR-123, FR-131 · UT-0881, UT-0887, UT-0891, UT-0893, UT-0894,
UT-0895, UT-0896, UT-0897, UT-0899, UT-0900, UT-0901, UT-0902, UT-0904, UT-0905, UT-0906, UT-0907 ·
TC-3476 · SCR-15, SCR-16, SCR-22, SCR-23 · Q18.
