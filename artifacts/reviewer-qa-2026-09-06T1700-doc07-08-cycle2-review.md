# reviewer-qa session note — 2026-09-06T1700 — Doc 07 v2.6.0 / Doc 08 v2.9.0 cycle-2 review

Role: reviewer-qa (Rafael Duarte) · Session: `reviewer-qa-2026-09-06T1700`
Assignment: `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` — neutral technical
reviewer for the two tester-owned documents, cycle 2 of 5. I did not self-appoint; I reviewed
nothing outside the two assigned documents.

**Read-only session.** No `docs/` file, no product code and no test artifact was edited.
`artifacts/memory-index.json` was **not** opened for writing (this note was pre-registered by the
project-manager). Nothing was committed.

## 1. Verdicts

| Document | Version | Mode | Score | C/H/M/L | Cycle | Verdict | Report |
|---|---|---|---|---|---|---|---|
| `docs/07-test-cases-suites.md` | 2.6.0 | technical | **97%** | 0/0/0/3 | 2 of 5 | **PASS** | `artifacts/reviews/07-test-cases-suites-v2.6.0-technical-cycle2.md` |
| `docs/08-traceability-matrix.md` | 2.9.0 | technical | **98%** | 0/0/0/1 | 2 of 5 | **PASS** | `artifacts/reviews/08-traceability-matrix-v2.9.0-technical-cycle2.md` |

Both meet the bar (score ≥ 95 AND Critical = High = Medium = 0). **15 of 15 cycle-1 issues closed**
(Doc 07: 3 Medium + 4 Low; Doc 08: 2 High + 3 Medium + 3 Low). Four new findings, all **Low**.

## 2. Verification done at source (not against the documents)

- **`npm test` from the repo root, executed by me:** **619 passed / 619, 0 failed, exit 0** —
  contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95. Matches Doc 07 §0.2, §9's
  R-17 summary row and §9's run-log entry package for package, and Doc 08 §9's suite row.
  `apps/web/tsconfig.tsbuildinfo` was **not** dirtied — nothing to revert.
- **Mechanical table sweep** (cell count vs header, trailing pipe) over both files: Doc 08 —
  **17 tables, 0 mismatches** (cycle-1 ISS-01 High provably closed; FR-124 8/8, FR-131 8/8,
  NFR-011 7/7, NFR-013 7/7, §4 rows 2/2). Doc 07 — 69 tables, 1 mismatch, on a **v2.3.0 row this
  version never touched** (recorded as a carried Low, not charged).
- **Residue sweep** on both files: no leaked FIND / REPLACE-WITH / four-backtick markers, no
  duplicated line tails, no eaten boundary words, no doubled emphasis markers.
- **UT-0759 read assertion by assertion** (`packages/ui/test/PrivacyStatus.test.tsx`): TC-3568's
  new path-by-path expected result matches all four `it` blocks exactly.
- **Counts re-derived from the files:** Doc 07 §2 sums row-wise to 471 / 239 / 232 with the identity
  holding on all 28 rows; 88 + 136 + 15 = 239. Doc 08: 469 − 1 + 10 = 478; 136 + 88 = 224;
  478 − 224 = 254; 224 + 15 + 232 = 471; 98 + 24 = 122 of 138. §7 holds exactly 122 gap entries.
- **`node hooks/run_gates.cjs --audit`** — before my reports: 07 and 08 BLOCK ("no report for this
  version"), everything else PASS. After: **all 10 documents PASS, 0 blocking**, both new reports
  matched by their canonical `Reviewed document:` / `Document version:` fields (no filename
  fallback needed). RTM structured check both times: derived 138 Must / 16 COMPLETE / 122 OPEN,
  **agreeing** with §9's published figures.

## 3. Decisions made

1. **The FR-131 Must-row ruling is CONFIRMED, unchanged, rule by rule against Doc 02 §4.45 and the
   code at `HEAD` (`84e2203`).** FR-131 stays **OPEN (G-PHASE3)**. Must COMPLETE **16 of 138**;
   OPEN **122** (11.6%); G-PHASE3 47; Must FR subtotal 114 · 16 · 98; stories meeting DoD **17 of
   134**; **US-0134 does not meet the Definition of Done**. §4.45 imposes **ten** obligations (I
   counted them; the v2.8.0 "eleven" wrongly counted the DES-096 seam half). Four are met at the
   copy layer; **six are unmet or unevidenced**, two of them by absence of the control itself:
   `apps/web/src/components/ReceiptFreedomBanner.tsx` renders an `aside role="note"` with a
   decorative span, an `h2` and a `p` and **no interactive element at all**, so
   "the voter MUST acknowledge the notice to proceed" is unbuilt; SCR-13/SCR-14 do not exist.
   (`VoteConfirmation.tsx` exists as a DES-063 component but is mounted on no route and carries no
   FR-131 notice; Doc 03 §10.12.5's "SCR-14 (partial)" is wireframe coverage, not a shipped screen —
   so Doc 08's "UNBUILT" marker is accurate.) Recording DES-098 / DES-094 / SCR-13 / SCR-14 in the
   trace cells **closed nothing**, and both documents say so.
2. **The timing question was judged, not converted into a Medium.** Both documents cite Doc 03
   v2.13.0 (and Doc 04 v1.4.0, Doc 09 v1.6.0) as **In Review**. Those statements were true when
   written this morning; both documents **date** them (Doc 07 heads the block "Sources as read at
   this version", Doc 08 writes "cycle 2 under way"), and both err in the **conservative**
   direction. Doc 03 v2.13.0 and Doc 04 v1.4.0 have since reached **Approved**. Recorded as a
   **Low** in each report — refresh at the next touch, riding with the pin-sync already owed. No
   Medium was manufactured from it.
3. **Pre-existing, untouched defects are carried Lows, not charges against the version.** Doc 07's
   TC-3519 row (unescaped pipes inside an inline-code regex, so the rendered row drops its
   Automation and Status cells) and the §10 "forty-eight" vs table "49" split both predate v2.6.0
   and were not raised at cycle 1. This follows the convention already established in this chain
   (Doc 08's twelve accepted-and-carried Lows). Had either been introduced by v2.6.0 it would have
   been charged.
4. **Doc 07 ISS-01's optional wider guarantee stays engineer scope, not coverage.** Extending
   UT-0759's `aria-label` and banned-word assertions to paths (b) and (d) is owed **engineer**
   (Samuel Oyelaran) work if wanted; the document correctly records it as owed rather than covered.
   No new debt id demanded.
5. **No merge sign-off is offered.** Passing the review loop makes Doc 08 an *accurate* matrix, not
   a *closed* one.

## 4. New issues raised (all Low; none blocks)

| ID | Doc | Finding | Route |
|---|---|---|---|
| ISS-C2-01 | 07 | TC-3519 (line 1598) carries 10 cells against a 7-column header — three unescaped pipes inside an inline-code regex; the rendered row drops its Automation (UT-0858) and Status cells. Pre-existing since v2.3.0, untouched by v2.6.0. | tester, next touch |
| ISS-C2-02 | 07 | §10 prose "Forty-eight cases are No mechanism" vs the §10 table's 49 three lines above; disclosed only in Doc 08's `TD-RTM-02`, with no pointer in Doc 07's own paragraph. Pre-existing. | tester, with the `TD-RTM-02` recount |
| ISS-C2-03 | 07 | "Sources as read at this version" block now superseded (Doc 03 v2.13.0 and Doc 04 v1.4.0 Approved; Doc 09 at v1.7.0). Correctly dated; conservative direction. TC-3568's *conditional* discharge is now satisfiable. | tester, with the pin-sync |
| ISS-C2-01 | 08 | Same superseded In-Review citations (changelog "What this version does NOT do"; FR-124 row; FR-131 row; entry 117). Correctly dated; conservative direction. | tester, with the pin-sync |

## 5. Open items (routed, not closed)

- **Gate 2 remains shut.** Doc 08 v2.9.0 records **122 open Must rows**, rollback **never drilled**
  (TC-2425), four Doc 04 Gate-2 blockers open (OPEN-01/02/03/11), and **no independent
  security/crypto audit**. The CLAUDE.md Gate-2 traceability criterion (zero gaps in Must rows) is
  **NOT MET** and `--audit` reports it mechanically. **No merge sign-off is given.**
- **`TD-RTM-01`** (duplicate `UT-0841`..`UT-0848`) — still OPEN, **engineer** scope; renumbering is
  product code. It still qualifies both §4 orphan-check zeroes.
- **`TD-RTM-02`** — still OPEN, tester-owed document-wide denominator recount before Gate 2.
- **`TD-07-01`** (engineer) · **`TD-07-03`** (tester, 15 rows still *Not run*).
- **Owed UT scope (engineer, Samuel Oyelaran):** the DES-098 acknowledge-to-proceed control and the
  SCR-13/SCR-14 ballot surfaces — the two clauses that keep FR-131 open — plus, optionally,
  UT-0759 paths (b)/(d).
- **Pin-sync** owed in both documents (SRS/SDD/BKLG/MTP + the now-Approved Doc 03/Doc 04).
- **Doc 09 v1.7.0** is In Review (cycle 3) and outside this assignment.

## 6. IDs touched (read/verified only — nothing authored)

- **Documents reviewed:** TC-TRUMOCRACY **v2.6.0**; RTM-TRUMOCRACY **v2.9.0**.
- **Sources read at HEAD:** Doc 02 v2.16.3 (Approved) §4.45 · Doc 03 v2.13.0 (Approved) §15,
  §10.12.3 clause 9, §10.13.6, §10.12.5 · Doc 04 v1.4.0 (Approved) · Doc 05 v2.5.0 (Approved) ·
  Doc 06 v2.5.1 (Approved) §7 items 21 and 26(d) · Doc 09 v1.7.0 (In Review).
- **FR/NFR:** FR-131, FR-124, FR-122, FR-123, FR-130, NFR-011, NFR-013, NFR-003.
- **DES:** DES-098, DES-094 (clause 9), DES-096, DES-081, DES-063. **ADR:** ADR-023, ADR-024.
- **SCR:** SCR-13, SCR-14 (both confirmed UNBUILT). **US:** US-0134, US-0132. **RISK:** RISK-02.
- **TC:** TC-3564..TC-3569, TC-3488, TC-3475, TC-3481, TC-3476, TC-3487, TC-2614, TC-3534, TC-3535,
  TC-3519. **UT:** UT-0759, UT-0887, UT-0888, UT-0753, UT-0758, UT-0864, UT-0869, UT-0858.
- **Debt:** TD-RTM-01, TD-RTM-02, TD-07-01, TD-07-03. **Run:** R-17 (re-confirmed by me).

## 7. Files written by this session

- `artifacts/reviews/07-test-cases-suites-v2.6.0-technical-cycle2.md`
- `artifacts/reviews/08-traceability-matrix-v2.9.0-technical-cycle2.md`
- `artifacts/reviewer-qa-2026-09-06T1700-doc07-08-cycle2-review.md` (this note)

Handed to the **project-manager**: both documents PASS cycle 2; the owning role (tester) may set
`Status: Approved` on each. **Gate 2 is not ready and no merge is signed.**
