# reviewer-qa session note — 2026-09-06T19:00 — neutral technical review of Doc 07 v2.7.0 and Doc 08 v2.10.0

```
Role:    reviewer-qa (Rafael Duarte) — neutral reviewer under the document-review skill;
         also A for "RTM complete (zero gaps)" under the CLAUDE.md RACI
Assigned: artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md (PM, Ana-Maria Petrescu)
Scope:   ONLY docs/07-test-cases-suites.md v2.7.0 and docs/08-traceability-matrix.md v2.10.0,
         technical mode, cycle 1 each (both are new minor versions; the counter restarts).
Wrote:   artifacts/reviews/07-test-cases-suites-v2.7.0-technical-cycle1.md
         artifacts/reviews/08-traceability-matrix-v2.10.0-technical-cycle1.md
         (this note). I edited NO document, NO test and NO product code, and I did not open
         artifacts/memory-index.json — the PM pre-registered this note's path.
Branch:  build/v1-cascade-and-release-prep, working tree at d526910 + uncommitted change sets.
```

## Verdicts

| Document | Version | Mode / cycle | Score | C / H / M / L | Verdict |
|---|---|---|---|---|---|
| `docs/07-test-cases-suites.md` | 2.7.0 | technical, cycle 1 of 5 | **94%** | 0 / 0 / **2** / 3 | **FAIL** |
| `docs/08-traceability-matrix.md` | 2.10.0 | technical, cycle 1 of 5 | **95%** | 0 / 0 / **1** / 2 | **FAIL** |

Doc 07's Mediums: **ISS-01** — the changelog states "Doc 04 §14 records TC-3564..TC-3569 as minted
and reserves TC-3570–TC-3699"; Doc 04 **v1.5.0**, the version this document pins, says neither —
§14 reserved TC-3564–TC-3699 and annotated it "none minted", and TC-3569/TC-3570 appear nowhere in
it. **ISS-02** — TC-3573's expected result claims the Arabic guard bans both "سريًا" and "سري";
the shipped assertion is the exact retired phrase only (narrowed on purpose at Doc 06 v2.7.0,
ISS-06, because a bare ban false-positives on "سريعًا" and "تسري"). Lows: the 5-versus-6 `it` count
for UT-0889 and the orphan zero; the CODE pin; §0.2 gaining no R-18 row.

Doc 08's Medium: **ISS-01** — the same Doc 04 §14 register sentence, here load-bearing because it
is the stated justification for advancing the MTP pin. Lows: the "5 `it`s" statement in §4/§3.1;
the CODE pin.

## The FR-131 Must-row ruling — re-derived independently, and I CONCUR

**FR-131 stays OPEN (G-PHASE3).** I did not accept the ruling from the document; I checked its
three load-bearing premises at source:

1. **The DES-098 acknowledge-to-proceed control does not exist** — no acknowledge affordance
   anywhere in `apps/` or `packages/` product source. The banner is non-dismissable, which is a
   different property. This clause alone keeps the row open even if every surface existed.
2. **SCR-13 / SCR-14 are unbuilt** — `apps/web/src/app` holds `parties/`, `petitions/`,
   `proposals/`, `verify/` and no ballot route, so the notice cannot appear "wherever a vote is
   cast"; TC-3481 stays Blocked.
3. **The Doc 04 §0.5 S5 population scan is specified and not built** — no FR-131 denylist exists in
   the repository (`scripts/` holds only `contribute-learning`), and UT-0857/UT-0868/UT-0884 are
   DES-085 jargon lists that would have caught neither string this drop fixed. So **TC-3575 minted
   Blocked — instrument absent** is the correct and honest call; recording five guarded strings as
   satisfying Scenario 9's "every surface in every language" would have been the easiest false pass
   available at this version.

Clause (e) is therefore **PARTIALLY EVIDENCED**: Scenario 8 guarded at eleven strings, its
governing grade-8 reader test unautomated; Scenario 9 Blocked. The ten → **eleven** obligation
count is not a reversion of the v2.9.0 correction (the DES-096 seam half is still excluded and
still labelled), and the verdict arithmetic adds up: 4 met at the copy layer + clause (e) partial +
6 unmet or unevidenced = 11.

## Must count

**138 Must rows · 16 COMPLETE · 122 OPEN (11.6%) · stories meeting DoD 17 of 134 · US-0134 NOT
done.** Two independent signals agree: `node hooks/run_gates.cjs --audit` derives 138/16/122 from
the row status markers and matches what §9 publishes; I also recomputed it from §6 by hand
(FR-Must 114/16/98 + NFR-Must 24/0/24 = 138/16/122). **Gate-2 traceability criterion: NOT MET.**
Nothing closed at this version, and both documents say so in every place a reader might hope
otherwise.

## Independent verification I ran (evidence, not assertion)

- `npm test` from the repo root: **625 / 625 pass, 0 failed, exit 0** — contracts 95 · protocol 151
  · sdk 244 · ui 18 · indexer 16 · web **101**.
- `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web`:
  **6 passed, 20 skipped (26)** — every `it` green individually. All five assertions credited to
  TC-3570..TC-3574 exist and pass, so **no case status changes on my findings**.
- **Run R-18 is honest as dated** (624/624 against a named uncommitted tree, with the post-merge
  re-run recorded as owed). The suite reads 625 now only because Doc 06 v2.7.0 added a sixth
  UT-0889 `it` after R-18 executed. A run log is a historical record; I did not score it.
- Every Scenario 8 / Scenario 9 line citation checked against Doc 02 v2.17.1 §8 — **all correct**.
- Doc 07 §2 re-summed row-wise: **477 / 244 / 233** over 28 rows, per-row identity holding on every
  row; §10's 93 + 136 + 15 = 244; Doc 08 §6 484 − 229 = 255 and §9 229 + 15 + 233 = 477.
- Table sweeps: **69 tables in Doc 07 and 17 in Doc 08 — zero cell-count mismatches, zero missing
  trailing pipes**; zero transcription residue at any of the 31 OP boundaries; 475 unique TC row
  anchors with zero duplicates.
- Stale-string sweep: no live TC in either document asserts "kept private", "never learn" or
  "Supporters are anonymous"; every survivor is a quotation inside a correction record. TC-3543 is
  correctly re-cut to "non-publication".
- Carried Lows: Doc 07's ISS-C2-01/02/03 and Doc 08's ISS-C2-01 are all **discharged**, verified
  mechanically or against live headers.

## Routing

- **Both documents route back to the tester (Ji-woo Park), the owning role**, for a new version
  each — **Doc 07 → v2.8.0** and **Doc 08 → v2.11.0**, `Status: In Review` — then cycle 2 of this
  loop. I score and list; the owner reworks; I never edit either document.
- Cross-document: the Doc 04 §14 register sentence appears in **both** documents (Doc 07 ISS-01,
  Doc 08 ISS-01) and one correction serves both.
- **Recorded for the cycle-2 reviewer (me, when dispatched):** after these reports were written,
  **Doc 04 reached v1.6.0** with a passing cycle-2 report — its §14 now records TC-3564..TC-3569
  where they actually live and narrows the `TS-V1-*` reservation to **TC-3570–TC-3699**, i.e. the
  substance of Doc 07/08's claim is now confirmed by the architect's own register — and **Doc 06
  reached v2.7.0 Approved** (PASS 96%), which settles the narrowed Arabic assertion behind
  ISS-02 and the sixth UT-0889 `it`. The cycle-1 verdicts stand as dated verdicts on the versions
  as they were; the rework is where that new state lands.
- **No merge sign-off is offered at this version**, and no gate advances: 122 open Must rows,
  FR-131 among them.

## Gate-2 readiness (my standing position, unchanged by this review)

**NOT READY.** Suites are green (625/625, exit 0, verified by me), but the RTM has **122 open Must
rows** and the Gate-2 traceability criterion is **NOT MET**. Rollback/flag evidence is the sre's to
present and is not in scope here. As the role Accountable for "RTM complete (zero gaps)" I record
that the single cheapest structural improvement to the FR-131 row is building the **Doc 04 §0.5 S5**
build-failing FR-131 claims scan — it is what unblocks TC-3575 and it is the only mechanical
detector this requirement class would have.

## IDs touched

Referenced, none minted (nothing here is mine to mint): `FR-131` (clause (e), Scenarios 8 and 9),
`FR-082`, `NFR-011`, `NFR-013`, `NFR-023`, `BR-005`, `BR-009`, `DES-098`, `DES-094`, `DES-096`,
`DES-085`, `SCR-13`, `SCR-14`, `US-0134`, `US-0132`, `US-0133`, `UT-0889`, `UT-0887`, `UT-0888`,
`UT-0869`, `UT-0759`, `UT-0089`, `UT-0832`, `UT-0857`, `UT-0868`, `UT-0884`, `TC-3535`,
`TC-3543`, `TC-3564`..`TC-3569`, `TC-3570`..`TC-3575`, `TC-3519`, `TC-3541`, `TC-3476`, `TC-3481`,
`TC-3487`, run `R-18`, `TD-07-01/02/03`, `TD-RTM-01/02`, `OPEN-27`, `OPEN-18`.

## Open items (not mine to close)

- **Doc 07 v2.8.0 / Doc 08 v2.11.0 reworks** — tester. Both FAILs are citation defects; no ruling,
  status or count moves on them.
- **TC-3575 unblocks only when the engineer builds the Doc 04 §0.5 S5 scan** — until then the
  remainder of clause (e) rests on inspection (I): legitimate under FR-131's own Verify-by, but
  point-in-time and unable to hold a Must row against silent regression.
- **OPEN-27** (architect) — the S5 `anon`-badge carve-out was reasoned against a voting-scoped
  FR-131. **ENROL-COPY (j)** (product-owner) — enrolment claims are expressly outside clause (e)
  and unruled. Both sit inside clause (e)'s scope; neither is counted as coverage or as a new gap.
- **`packages/protocol/test/proposals.test.js`** still carries "…because authorship is public and
  Supporters are anonymous" as an `it()` **title**; it asserts nothing and does not fail. Engineer
  scope; I do not edit test code.
- **A post-merge re-run of the suite** should confirm the figure both documents cite; R-18 already
  records that as owed.

## Hook state at exit (recorded, not acted on)

The review-loop gate blocks on **Doc 07 v2.7.0 and Doc 08 v2.10.0 only** — because my two reports
exist and correctly FAIL, which is the loop working, not a defect. Every other governed document
passes. I did not self-appoint to any other document's review and reworked nothing: the reviewer is
assigned by the project-manager and MUST NOT be the owning role (AL-CANDIDATE-3).
