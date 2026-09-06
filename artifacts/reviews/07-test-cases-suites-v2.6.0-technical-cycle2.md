# Document Review Report — Doc 07 Test Cases & Suites v2.6.0 (technical, cycle 2)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (2026-09-06).

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.6.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 07)
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 2 of 5
Verdict: PASS
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

Doc 07 v2.6.0 **PASSES**. All three cycle-1 Mediums and all four Lows are closed, and each was
verified **at source rather than against the document**. The decisive check is ISS-01: I read
`packages/ui/test/PrivacyStatus.test.tsx` UT-0759 assertion by assertion and the new TC-3568
expected result now matches it **exactly, path by path** — path (a) carries all four assertions
(title present, "Verified — private" absent, `aria-label` exactly "Verified", `textContent`
matching no banned word); paths (b) and (d) assert **title selection only**; path (c) asserts the
title and its `aria-label` and makes no banned-word assertion. The document states that limit in
terms ("**Neither (b) nor (d) asserts the `aria-label`, and neither asserts the banned-word
regex**") and routes the wider guarantee to the engineer as **owed UT scope** rather than recording
it as covered. That is the correct fix for the defect class this document set has now corrected
twice (TC-2614 at v2.5.0, TC-3568 here): **state less, do not claim more**.

I re-ran the suite myself: `npm test` from the repo root — **619 passed / 619, 0 failed, exit 0**;
contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95, matching §0.2, §9's R-17 row
and the run-log entry package for package. `apps/web/tsconfig.tsbuildinfo` was **not** dirtied.
I re-summed §2's suite table row-wise from the file: **471 cases / 239 automated / 232
blocked-or-no-mechanism** across 28 rows, with the identity `cases = automated + blocked` holding
on **every** row, and §10's `88 + 136 + 15 = 239` holds. No count moved, exactly as the version
claims. **There is no transcription residue**: no leaked FIND / REPLACE-WITH / four-backtick
markers, no duplicated line tails, no eaten boundary words, and a mechanical table sweep across all
**69** tables in the file found exactly one cell-count mismatch — a **v2.3.0 row this version never
touched** (ISS-C2-01, Low).

The three remaining findings are Lows: two are pre-existing and untouched by this version, and the
third is a citation that is **correctly dated** and has merely been overtaken by events since it was
written this morning. None blocks the bar.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | The fabricated NFR-013 link is gone from TC-3567 and the row now states **what it does not verify** ("**NFR-013 is NOT verified by this case**… it exercises neither the eight-locale coverage nor the RTL rendering NFR-013 requires"). Doc 07 and Doc 08 now agree on that link — I checked Doc 08 §3.2's NFR-013 row and it correctly declines to carry TC-3567. The §8 orphan sweep still maps all nine new assertions. |
| T2 Soundness | 20 | 98 | 19.6 | The ISS-03 retraction is exactly right: "approved design element" → "the **current corrected text** of DES-094 clause 9", and "DISCHARGED" → "**discharged CONDITIONALLY — on Doc 03 reaching Approved**". I confirmed clause 9 exists in `docs/03-architecture-design-sdd.md` §10.12.3's normative binding list, so the citation resolves. Scope limits (TC-3567 guards the claim not the fluency; TC-3565 says why a word ban alone would have passed the retired body) remain the strongest writing in the file. |
| T3 Traceability & IDs | 20 | 96 | 19.2 | `DES-094` removed from TC-3564 (which renders `ReceiptFreedomBanner` = DES-098); both stale suite headings extended — §4.3 now "(TC-1600–TC-1614, TC-3569)" and §5 now "(TC-2600–TC-2752, TC-3564–TC-3567)". No TC minted, retired, reused or renumbered; ids still continue from TC-3563. Docked only for the pre-existing TC-3519 rendering defect (ISS-C2-01). |
| T4 Security & failure modes | 15 | 98 | 14.7 | Unchanged and still the document's strongest area. TC-3567's recorded safety caveat — the Arabic strings are an engineer draft, native-speaker review owed, "a mistranslated coercion warning is a safety defect that a passing TC-3567 would not catch" — survived the rework intact. |
| T5 Completeness & testability | 15 | 96 | 14.4 | Every count re-derived independently from the file and every one reconciles (471/239/232, per-row identity on all 28 rows; 88+136+15=239). §6's Accessibility row now reads "**were executed green at file granularity** in run R-17… no case-by-case accessibility pass has been made… (**TD-07-03**)" with the verdict correctly still **No**. §10's overlap prose moved 187 → 193 with the arithmetic untouched. Docked for ISS-C2-02. |
| T6 Convention compliance | 10 | 97 | 9.7 | Correct minor bump (2.5.0 → **2.6.0**), `Status: In Review`, `Last updated: 2026-09-06`, ISO-8601 throughout, named owner on every debt row. The "**Sources as read at this version**" block dates every cross-document citation instead of asserting a bare status — the right discipline (see ISS-C2-03). §9's R-17 row records the rework re-run and correctly **mints no new run id**. |
| **Total** | **100** | — | **97.2% → 97%** | — |

## 4. Cycle-1 closure table (`artifacts/reviews/07-test-cases-suites-v2.5.0-technical-cycle1.md`)

| Cycle-1 ID | Sev | Status | Evidence verified at source |
|---|---|---|---|
| ISS-01 | Medium | **CLOSED** | TC-3568's expected result now reads path by path and matches UT-0759 exactly: "(a) … the full four-assertion path… (b) `{ unlinkable: false }` and (d) `{ onePersonOneVote: false }` … **title selection only** … **Neither (b) nor (d) asserts the `aria-label`, and neither asserts the banned-word regex**. (c) `{ unlinkable: true }` — **alone** renders 'Verified — private' with a matching `aria-label` … it makes no banned-word assertion". Checked against `packages/ui/test/PrivacyStatus.test.tsx` lines 209–239: correct in all four paths. The wider guarantee is routed as "**owed UT scope for the engineer (Samuel Oyelaran)** … not recorded here as covered". |
| ISS-02 | Medium | **CLOSED** | TC-3567's Verifies cell now reads "US-0134 · FR-131 · DES-098" — `NFR-013` removed — and the row adds "**NFR-013 is NOT verified by this case**". Doc 08 §3.2's NFR-013 row carries no TC-3567 link, so the two documents now agree. |
| ISS-03 | Medium | **CLOSED** | All three sites retracted. Changelog: "the 'approved design element' claim is retracted in all three places". TC-3568 Verifies cell: "**DES-094 clause 9** … minted Doc 03 v2.12.0 and carried into **v2.13.0** — **In Review**". Status cell: "**discharged CONDITIONALLY — on Doc 03 reaching Approved** _(v2.6.0, ISS-03: v2.5.0 wrote 'DISCHARGED, 2026-09-06' unqualified, on a source that is In Review)_". |
| ISS-04 | Low | **CLOSED** | TC-3564 Verifies now reads "US-0134 · FR-131 closing sentence · DES-098" — `DES-094` gone. |
| ISS-05 | Low | **CLOSED** | Line 779: "### 4.3 `TS-ABSENCE` — Capability-absence (TC-1600–TC-1614, TC-3569)". Line 921: "## 5. `TS-ADV-01…16` — Adversarial suites, one per RISK (TC-2600–TC-2752, TC-3564–TC-3567)". |
| ISS-06 | Low | **CLOSED** | §10: "Four cases appear in both the **193**-case 'implementing automated test' count (**187 before v2.5.0**) and the 175-case 'Blocked' count". Arithmetic unchanged and still correct: 193 + 171 + 48 + 12 = 424. |
| ISS-07 | Low | **CLOSED** | §6 Accessibility row now reads "…**were executed green at file granularity** in run R-17 (`apps/web` 95/95, 2026-09-06); no case-by-case accessibility pass has been made, so neither is promoted (**TD-07-03**). The verdict is unchanged". |

**7 of 7 closed. No cycle-1 finding was closed by assertion; each was re-checked against the test
file, the suite run, or the document text quoted above.**

## 5. New issues (cycle 2)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C2-01 | Low | T3 / T6 | §5 `TS-MEMBERSHIP` — **TC-3519** row, line **1598** | A mechanical sweep of all **69** tables in this file found exactly one row whose cell count does not match its header: TC-3519 carries **10** cells against a **7**-column header, because the inline-code regex in its expected result contains three **unescaped pipe characters**. GFM splits a table row on unescaped pipes **before** inline parsing, so pipes inside a code span are still treated as cell separators and the trailing cells are discarded — the rendered row loses its **Automation** cell (`apps/web/test/join-membership.test.tsx` · UT-0858) and its **Status** cell (Pass (inh.)). **This is not a v2.6.0 defect and it is not charged against this version**: the row dates from the v2.3.0 join/membership drop, no operation in this rework touched it, and cycle 1 passed over it (cycle 1 checked trailing pipes, not cell counts). It is recorded under the same **carried-Low** convention Doc 08 uses for its twelve accepted Lows, so the next touch of Doc 07 pays it. | Escape the three pipes inside the TC-3519 expected-result regex, then re-verify the row renders with 7 cells. Consider running a cell-count sweep over the whole file at the next version. |
| ISS-C2-02 | Low | T5 | §10, prose beneath the counts table ("**Forty-eight cases are 'No mechanism'**") vs the §10 table row three lines above ("Cases **No mechanism** … **49**") | The prose says forty-eight; the table says 49 (the +1 was `TC-3541` at v2.3.2). The overlap formula also computes on 48 (`193 + 171 + 48 + 12 = 424`). The disagreement **is** disclosed — Doc 08 §10 `TD-RTM-02` names it precisely as the third denominator base, "on v2.1.0-era base figures that already disagree with §2's 239 automated and **49** No mechanism" — but Doc 07's own paragraph carries no pointer to it, so a reader of Doc 07 alone meets an unexplained 48/49 split. Pre-existing; not raised at cycle 1 and not touched by v2.6.0. | Either bring the prose and the formula to 49, or add the `TD-RTM-02` pointer beside the overlap paragraph as §10's "Cases designed" row already does for the 471/478 split. Belongs with the `TD-RTM-02` recount, not with a rework version. |
| ISS-C2-03 | Low | T6 | Changelog, "**Sources as read at this version**" block | The block reads "Doc 03 **v2.13.0 (In Review)**, Doc 04 **v1.4.0 (In Review)**, Doc 09 **v1.6.0 (In Review)**". As of **now**, Doc 03 v2.13.0 is **Approved** (cycle-2 PASS 97%), Doc 04 v1.4.0 is **Approved** (cycle-2 PASS 96%) and Doc 09 has moved to v1.7.0 (In Review, cycle 3). **This is explicitly NOT scored as a correctness defect.** The block is **dated by its own heading** ("as read at this version"), each statement was true when written, and every one errs in the **conservative** direction — under-claiming an approval closes nothing and misleads no one. The only live consequence is that TC-3568's *conditional* discharge ("on Doc 03 reaching Approved") is now **satisfiable** and should be converted at the next touch. | At the next version, refresh the sources block and convert TC-3568's conditional discharge to an unconditional one, citing `artifacts/reviews/03-architecture-design-sdd-v2.13.0-technical-cycle2.md`. This rides with the pin-sync the tester already records as owed. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL. There are none.

## 6. Verified sound (recorded so a later version does not disturb it)

- **Suite verified at source, independently.** My own `npm test` from the repo root: **619 passed /
  619, 0 failed, exit 0** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95.
  §0.2, §9's R-17 summary row and §9's run-log entry all match package for package.
  `apps/web/tsconfig.tsbuildinfo` was **not** dirtied by the run, exactly as §9 states.
- **The no-new-run-id decision is right.** An identical re-run of the same commit confirms R-17
  rather than adding an observation; §9's run-log row records the re-confirmation inline and **no
  case is promoted on it**. Holding Pass (obs.) at 88 on a file-granularity run remains the harder
  and the correct call.
- **Counts re-derived from the file, not read from the summary.** §2's suite table sums row-wise to
  **471 / 239 / 232** over 28 rows, and the identity `cases = automated + blocked` holds on **every
  row** with no exception. §10's `88 + 136 + 15 = 239` holds. Blocked 175, No mechanism 49, Manual
  12, observed failures 0 — all correctly unchanged, and stated in the changelog rather than left
  to inference.
- **No transcription residue.** No leaked FIND / REPLACE-WITH / four-backtick markers; no duplicated
  line tails; no eaten boundary words; no doubled emphasis markers. The one table anomaly found
  (ISS-C2-01) predates this session by three drops.
- **The FR-131 posture in this document is unchanged and correct.** TC-3481 stays **Blocked** on the
  unbuilt SCR-13/SCR-14 ballot surfaces; TC-3476 and TC-3487 stay Blocked; TC-2614's v2.5.0
  correction is untouched. A whole-document search for the retired framing finds it only inside
  correction records, per the annotate-don't-delete convention.
- **Debt is owned honestly.** TD-07-01 (engineer), TD-07-02, TD-07-03 (raised against the tester
  itself), and the `TD-RTM-01` caveat on the orphan check are all carried, none silently dropped.

## 7. Routing instruction (to the owning role)

**PASS → the tester (Ji-woo Park) sets `Status: Approved` for Doc 07 v2.6.0 and the SOP advances.**
The three Lows above do **not** require a new version; carry them to the next touch of Doc 07,
where ISS-C2-03 rides with the pin-sync already recorded as owed and ISS-C2-02 rides with the
`TD-RTM-02` recount. **No product code change is requested and none is authorised by this report.**
The one code-adjacent item — extending UT-0759's `aria-label` and banned-word assertions to paths
(b) and (d) — is **engineer** scope (Samuel Oyelaran), optional, and correctly recorded by the
document as owed rather than as coverage.
