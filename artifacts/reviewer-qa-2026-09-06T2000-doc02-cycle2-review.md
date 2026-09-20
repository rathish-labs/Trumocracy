# Session memory — reviewer-qa (Rafael Duarte) — 2026-09-06T20:00

**Role:** reviewer-qa, PM-assigned **neutral document reviewer** (not the Gate-2 merge signer in
this session).
**Assignment:** `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md` — Doc 02
`docs/02-requirements-srs.md` **v2.17.1**, **business** mode, **cycle 2 of 5**. Owner
(product-owner, Priya Raghunathan) excluded as author. I reviewed **only Doc 02**; I did not
self-appoint for any other blocking document.

## Verdict

**PASS — 96%, Critical 0 / High 0 / Medium 0 / Low 7.** Cycle 2 of 5. All three cycle-1 Mediums
closed and independently verified; the product-owner sets `Status: Approved` and the SOP advances.
Report: `artifacts/reviews/02-requirements-srs-v2.17.1-business-cycle2.md`.
Audit line: `PASS   02-requirements-srs.md v2.17.1 (business) <- 02-requirements-srs-v2.17.1-business-cycle2.md`.

## What I did

- Read the rework spec `artifacts/product-owner-2026-09-06T2030-doc02-v2171-spec.md` (12 ops) and
  my own cycle-1 report, then verified every declared closure **against the document text**, not
  against the owner's claim.
- **The decisive check — a byte-for-byte reconstruction.** I took the committed baseline
  (`git show HEAD:docs/02-requirements-srs.md` = **v2.16.3**; neither v2.17.0 nor v2.17.1 is
  committed), applied the **4** v2.17.0 ops then the **12** v2.17.1 ops, requiring each `FIND` to
  match **exactly once** at its step, and compared with the file on disk:
  `reconstructed 470132 == actual 470132`, **BYTE-IDENTICAL: true**.
  This single result proves all 16 ops applied exactly as specified, **zero collateral edits**, and
  **zero transcription residue at all 16 boundaries** — any orphan, duplication or truncation would
  have broken byte-identity. **I recommend this as the standard check for anchored-spec
  applications; it subsumes the residue/duplication/truncation/collateral checks in one assertion.**
- Ran a token-level LCS diff of the FR-131 row's `FIND` vs `REPLACE` (OP 5): the 31 token hunks
  cluster into **exactly the six declared change points C1-C6**; clauses (a)-(d), the FAILS test,
  the public-by-design rule, the widened closing sentence, the quoted SUPERSEDED wording and
  `BR-005, BR-009 | Must | Nadia Hassan | T, I` are re-emitted verbatim. Same check on OP 10 (1
  change point), OP 11 (1), OP 12 (1) — all as declared.
- Read §4.45 (lines 1185-1205), the §8 FR-131 block end to end (2464-2519), §12's new entries
  (3043, 3045), §13 (j) and its header (3103), and the two §16.3 rows.

## Closures verified (cycle-1 issue -> disposition)

| Cycle-1 | Sev | Disposition |
|---|---|---|
| ISS-01 no §8 Gherkin criterion for clause (e) | **M** | **CLOSED** — block header de-scoped; **Scenarios 8 and 9** added (9 is the absence test in the UT-0700/UT-0869 pattern). The tester now has an executable criterion. |
| ISS-02 §4.45 ballot-scoped | **M** | **CLOSED** — heading widened; ballot rationale retained verbatim; new "Scope, from v2.17.0 (do not read this section as ballot-only)" paragraph that also records the causal mechanism. Better than the fix I asked for. |
| ISS-03 RFC 2119 negated-subject MUST | **M** | **CLOSED** — `"no public-facing string"` = 0; `"MUST NOT assert that a **participation act** is unknowable"` = 1. |
| ISS-04 stale confirmation framing | L | **CLOSED** — recorded as fact at all five live sites (28, 67, 1220 ×2, 3103); the old phrase survives once only as a quoted-and-corrected reference. |
| ISS-05 safe-harbour vs reader test | L | **CLOSED** — qualifier added plus an explicit precedence sentence, echoed in Scenario 8. |
| ISS-06 "governed by" overstated | L | **CLOSED** — "addressed by FR-132 §(d)"; §13 (j) named as the open question. |
| ISS-07 no §12 entry | L | **CLOSED** — entries for v2.17.0 and v2.17.1. |
| ISS-08 / ISS-10 §16.3 rows | L | **CLOSED** — both rows corrected, one change point each. |
| ISS-09 bare "§2.5" | L | **CLOSED** — "**Doc 06 §2.5**". |
| ISS-11 / ISS-12 / ISS-13 | L×3 | **CARRIED correctly** — v2.17.1 touches none of their sites; all three disclosed in the `Status:` block. |

## New Lows raised at cycle 2 (none blocking)

1. **ISS-01** — the FR-131 §8 block now numbers scenarios **1,2,3,4,5,8,9** (gap at 6/7). **Caused
   by my own cycle-1 wording**: I wrote "Add a Scenario 8", having mis-read the "Scenario 7" in the
   **FR-132** block as belonging to FR-131. No ID rule is broken (scenario numbers are block-local
   labels). **Do not renumber once Doc 07/08 have cited 8 and 9** — add a comment line instead.
2. **ISS-02** — three pointers cite "Scenario 8" alone (FR-131 Source annotation line 1220; §4.45
   scope paragraph line 1202; `Status:` line 20) while §12 and §16.3 correctly cite both. **The
   Source annotation is the tester's natural path and it omits Scenario 9 — the absence test.**
   This is the one to fix now, while Doc 07/08 are being cut.
3. **ISS-03** — two Scenario-8 steps restate rules ("…passes"; "the reader test governs") rather
   than assert outcomes; a tester will find them non-executable.
4. **ISS-04 (record-only)** — one "Grade-8" survives at line 83 in v2.17.0 changelog narration. The
   applier checklist demanded zero, but the **document is right and the checklist over-strict**:
   dated narration is not rewritten (the same convention that keeps ISS-06 below at Low).

## Correction to my own cycle-1 report (recorded for accuracy)

Cycle-1 ISS-07 said "every prior version from v2.12.0 onward has a §12 session-scope entry". That
was imprecise — **v2.16.0 through v2.16.3 have none**; §12 runs v2.13.0, v2.14.0, v2.14.1, v2.15.0
then jumps to the new v2.17.0 entry. The requested fix was still correct and is now applied; only my
justification overstated the pattern. The v2.16.x gap pre-dates this version and I did not raise it.

## IDs touched (read/verified only — I wrote no document and no code)

FR-014, FR-015, FR-023, FR-064, FR-068, FR-082, FR-090, FR-091, FR-123, FR-130, **FR-131**, FR-132,
NFR-023, BR-005, BR-009, ADR-024, ADR-025, DES-063, DES-098, US-0134, UT-0869, UT-0870, UT-0887,
§8 FR-131 Scenarios 1-5 + **8, 9**, §12 v2.17.0/v2.17.1 entries, §13 (h)(i)(j), §16.3 FR-131/FR-132
rows, §16.4 H-16/H-17/H-18, §16.5.

## Open items handed on

| # | Item | Owner | Status |
|---|---|---|---|
| 1 | Set Doc 02 `Status: Approved` (PASS at cycle 2) | product-owner | OPEN — routed by this review |
| 2 | **ISS-02** — cite "Scenarios 8 and 9" at the FR-131 Source annotation (priority), §4.45 and `Status:`; do while Doc 07/08 are being cut | product-owner | OPEN — Low, but time-sensitive |
| 3 | ISS-01 scenario-number gap — comment line, **not** a renumber, if Doc 07/08 have already cited 8/9 | product-owner | OPEN — Low |
| 4 | ISS-03 (Gherkin rule-steps), ISS-04 (record-only), ISS-05/06/07 (the three long-carried Lows) | product-owner | OPEN — non-blocking, routed to the versions that next touch those sections |
| 5 | Docs 01 v2.2.0, 04 v1.5.0, 06 v2.7.0 still blocking the review loop | project-manager | OPEN — expected mid-session; **I did not self-appoint** |

## Note for later agents (selective recall)

Read this if you are the **tester** cutting Doc 07 v2.7.0 / Doc 08 v2.10.0 for FR-131 clause (e):
the acceptance criterion now exists as **§8 FR-131 Scenarios 8 and 9** (lines 2504 and 2514) — trace
**both**; the FR-131 Source annotation currently names only Scenario 8 (ISS-02), and Scenario 9 is
the absence test that encodes the amendment's central holding. Read it if you are the
**project-manager** looking for a clean instance of the review loop working, or the **product-owner**
picking up the four open Lows. The **byte-identical reconstruction technique** described above is
the reusable artefact from this session.

**Report:** `artifacts/reviews/02-requirements-srs-v2.17.1-business-cycle2.md`
**Memory index:** pre-registered by the PM before dispatch — I did **not** open or edit
`artifacts/memory-index.json`.
