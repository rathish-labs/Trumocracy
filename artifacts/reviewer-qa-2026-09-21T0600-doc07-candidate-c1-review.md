# reviewer-qa session note — 2026-09-21T06:00 — Doc 07 v2.10.0, technical review, cycle 1 of 5

Role: reviewer-qa (Rafael Duarte, new instance) acting as the **neutral reviewer** under the shared
`document-review` skill, technical mode. Assignment recorded BEFORE dispatch:
`artifacts/status/REVIEW-ASSIGNMENT-2026-09-21-CANDIDATE-DES.md`.
Branch `design/candidate-des-definition-a`, `HEAD` `12fe4a6`.

## What I did

- Reviewed **`docs/07-test-cases-suites.md` v2.10.0** (owner: tester) against its spec
  `artifacts/status/SPEC-2026-09-21-doc07-v2.10.0.md` (30 OPs), Doc 02 §4/§8/§16.3.1 for the ten
  candidate FRs, Doc 03 v2.16.0 §10.13.14 + §10.12.4 + §15, Doc 06 v2.11.1 §3/§7, Doc 04 v1.7.1 §14.
- **Re-ran the evidence myself.** `npm test` at the repo root: **739/739 pass, 0 failed, exit 0** —
  contracts 95 · protocol 178 · sdk 287 · ui 25 · indexer 16 · web 138. Four case-by-case runs:
  protocol `test/candidates.test.js` **27/27**, sdk `test/candidates.test.js` **43/43**, ui
  `test/PrivacyStatus.test.tsx -t "UT-0903"` **7 passed / 18 skipped (25)**, web
  `test/candidates.test.tsx` **20/20**. All identical to what §0.2 and §9 record for run **R-21**.
- **Machine-checked every `it` name.** Extracted the quoted `it` names from all 28 automation cells and
  matched them against the four test files: **97 cited, 97 verbatim matches, 0 missing, 0 near-miss,
  0 cited twice, 0 orphan inside the seventeen blocks.** Verified every per-block split.
- **Re-derived every figure.** §2 sums to 521 / 290 / 231 with every row internally consistent; §10's
  identities hold (139+136+15=290; 290+177+46+12−4=521; Blocked 177; No mechanism 46; the
  counting-convention base 199→229 / 176→177 / 48→45 / total 459).
- Checked transcription: all 30 OPs applied exactly once, no marker residue, diff hunks match the
  Changelog's fourteen-site enumeration exactly.
- Ran `node hooks/run_gates.cjs --audit`: Docs 01–06, 13, 14 PASS; 07 and 08 BLOCK for want of a
  passing report at their current versions (expected — both In Review). RTM structured check:
  **138 Must, 19 COMPLETE, 119 OPEN**, and the two independent signals **AGREE**.

## Verdict

**FAIL — 91%, 0 Critical / 0 High / 2 Medium / 6 Low.** Report written at
`artifacts/reviews/07-test-cases-suites-v2.10.0-technical-cycle1.md`.

- **ISS-01 (Medium)** — the drop's `UT` footprint is **eighteen** blocks, not the seventeen the sweep
  covers. 640 + 97 = 737, not 739; the missing 2 `it`s are `UT-0871` extended to `IProposalStore` and
  **`ICandidateStore`** at Doc 06 **v2.10.0** in `apps/web/test/sdk-types-sync.test.ts`, not the
  v2.11.0 pair "inside" the candidate blocks as §9 states. They are cased by nothing and §8 still calls
  that file "1 test, green".
- **ISS-02 (Medium)** — the reverse sweep's FR-039 carrier is wrong twice: `TC-3612` has no FR-039
  note, `TC-3611` (which does) is Pass (obs.) not Blocked, and `TC-3320` is an FR-067 case. FR-039's
  voter-scope and tie-break clauses are carried by **no case at all**.
- Lows: ISS-03 "Ten cases" vs twelve enumerated (§10); ISS-04 §8 maps neither `TC-3407` nor `TC-3411`
  though §2/§10 now count them automated; ISS-05 `TC-3470` not annotated for the flipped `UT-0750`
  `it`; ISS-06 `TC-3407`'s automation cell omits the eligibility blocks; ISS-07 §0.1's Pass (obs.)
  definition still names only the 2026-08-09 / 2026-08-25 runs; ISS-08 `TC-3612` states as asserted an
  inference the `it` does not establish.

## Decisions made

- The **band collision is NOT an issue against Doc 07** — it is disclosed four times, the required
  Doc 04 §14 re-narrowing to `TC-3620` is named, and the architect is routed. Honest handling.
- **No case whose expected result states an on-chain / Definition-B property was promoted on a v1
  test** — `TC-3313`..`TC-3322` are held Blocked on exactly that ground. The `TC-3407` / `TC-3411`
  promotions and the `TC-3419` and `TC-3476` rulings each survive checking.
- ISS-01 and ISS-02 are **Medium, not High**: neither falsifies a Must-row ruling or a §2/§10 count.

## Open items (routed, not closed by me)

1. **tester** — rework Doc 07 into a new version; re-enter as cycle 2 of 5.
2. **tester / Doc 08's reviewer** — confirm Doc 08 v2.13.0's FR-039 row did not inherit ISS-02's
   citation (`TC-3612` / `TC-3320`).
3. **architect** — Doc 04 §14 must re-narrow the `TS-V1-*` floor to `TC-3620` (OPEN-30 pattern).
4. **tester** — v2.9.0 ISS-02 and ISS-04 are on their second explicit deferral.
5. **Gate 2 remains NOT MET** — 119 open Must rows. No merge sign-off is at issue in this cycle; the
   code is already merged at `12fe4a6` under the Doc 06 v2.11.1 review.

## IDs touched (read-only)

Docs 02, 03 v2.16.0, 04 v1.7.1, 05, 06 v2.11.1, 07 v2.10.0, 08 v2.13.0 (audit only).
`TC-0028`, `TC-0029`, `TC-1024`, `TC-3313`..`TC-3322`, `TC-3407`, `TC-3411`, `TC-3419`, `TC-3470`,
`TC-3471`, `TC-3476`, `TC-3540`, `TC-3592`..`TC-3619`. `UT-0750`, `UT-0751`, `UT-0871`,
`UT-0891`..`UT-0907`. `FR-023`, `FR-036`..`FR-039`, `FR-065`..`FR-067`, `FR-081`, `FR-085`, `FR-093`,
`FR-107`, `FR-122`, `FR-123`, `FR-124`, `FR-131`. `DES-027`, `DES-028`, `DES-066`, `DES-067`,
`DES-076`, `DES-095`..`DES-098`, `DES-107`, `DES-108`. `SCR-15`, `SCR-22`, `SCR-23`.
Run id referenced: **R-21**.

## Artifacts written

- `artifacts/reviews/07-test-cases-suites-v2.10.0-technical-cycle1.md` (the scored report)
- this note

I wrote nothing to `docs/`, edited no code or test, and did **not** touch
`artifacts/memory-index.json` (this note's path was pre-registered by the project-manager).

## Stop-hook block — recorded, as the hook requires, and NOT cleared by me

At the end of this session the SubagentStop hook (`hooks/run_gates.cjs`) blocked with:

- `07-test-cases-suites.md` v2.10.0 (technical) — report EXISTS
  (`07-test-cases-suites-v2.10.0-technical-cycle1.md`) but does not satisfy the gate:
  **Verdict=FAIL, score=91%, C=0 H=0 M=2**
- `08-traceability-matrix.md` v2.13.0 (technical) — report EXISTS
  (`08-traceability-matrix-v2.13.0-technical-cycle1.md`) but does not satisfy the gate:
  **Verdict=FAIL, score=87%, C=0 H=2 M=3**

**This block is the expected and correct state, and I am deliberately not clearing it.**

- The Doc 07 block is the direct consequence of **my own cycle-1 verdict**. The bar is score ≥ 95%
  AND zero critical/high/medium; v2.10.0 scores 91% with two Mediums (ISS-01, ISS-02 above). It
  clears only when the **owning role — the tester (Ji-woo Park)** — reworks a **new version**
  (bump the semver, `Status: In Review`) and the project-manager dispatches **cycle 2 of 5**.
- I **MUST NOT** author a passing report to clear my own stop: a report written to clear a stop is
  not a cycle, and reviewer assignment is the project-manager's decision recorded in
  `artifacts/status/REVIEW-ASSIGNMENT-*.md` BEFORE dispatch. I also hold no Write/Edit right over
  `docs/` — I am the independent approver and read-only on the document and on product code.
- The Doc 08 v2.13.0 block belongs to **another reviewer's cycle**, not mine. I did not write, read
  for review, or score that report, and I do not self-appoint to it. Its 2 Highs / 3 Mediums route
  to the **tester** as Doc 08's owning role. My one interest in it stands and is already routed:
  confirm the FR-039 row did not inherit ISS-02's `TC-3612` / `TC-3320` citation.

**Next actor: the project-manager** — sequence the tester's rework of Doc 07 v2.10.0 → new version →
cycle 2 of 5, and the same for Doc 08 v2.13.0. Nothing in this session is owed by reviewer-qa.
No merge sign-off was at issue in this cycle; Gate 2 remains **NOT MET** at 119 open Must rows.
