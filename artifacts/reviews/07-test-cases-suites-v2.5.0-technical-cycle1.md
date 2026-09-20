# Document Review Report — Doc 07 Test Cases & Suites v2.5.0 (technical, cycle 1)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (2026-09-06).

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.5.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 07)
Score: 92%
Critical: 0
High: 0
Medium: 3
Low: 4
Cycle: 1 of 5
Verdict: FAIL
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

Doc 07 v2.5.0 was read end to end and its load-bearing claims were verified **against source, not
against the document**: I executed `npm test` from the repo root myself and observed **619 passed /
619, 0 failed, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95**, which
matches the §0.2 and §9 **R-17** rows exactly, package for package. I read `UT-0887`
(`apps/web/test/safety-surfaces.test.tsx:112`), `UT-0759`
(`packages/ui/test/PrivacyStatus.test.tsx:198`) and `UT-0888`
(`packages/protocol/test/party-and-regions.test.js:302`) assertion by assertion, and I re-derived
every count the version moves: the §2 suite table sums to **471 / 239 / 232** with no per-row
mismatch, §10's identity **88 + 136 + 15 = 239** holds, and the automated-plus-blocked convention
paragraph adds up (193 + 171 + 48 + 12 = 424). The **TC-2614 correction is right and materially
important** — the retired "votes are anonymous but not receipt-free" framing is gone from its
expected result, the "disclosure, not a satisfaction of FR-031/FR-032/NFR-003" note is kept, and a
whole-document grep for `anonymous but` returns only quotations inside correction records. The
orphan check covers all nine new assertions. Ids continue cleanly from TC-3563; nothing is reused or
renumbered. There is **no transcription residue** in this file — no leaked `FIND:` / `REPLACE WITH:`
markers, no four-backtick fences, no malformed table rows, no eaten boundary words.

It nevertheless **FAILS**, on three Mediums, and the first two are the same class of defect this
version was written to correct on TC-2614: **an expected result that outruns what its test actually
asserts**. TC-3568 credits UT-0759 with `aria-label` and banned-word checks on two of four paths
where the test makes neither; TC-3567 claims to verify **NFR-013**, which it does not and which the
RTM does not carry. The third is a **factual claim about an unapproved source**: the document three
times calls DES-094 clause 9 an "approved design element" and declares the Doc 06 §4a deviation
"DISCHARGED" on that basis, while Doc 03 v2.12.0 is `Status: In Review` — and its own changelog says
exactly that three paragraphs later.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`92%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (3)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 93 | 18.6 | All nine new assertions across UT-0887/0759/0888 are mapped; the §8 orphan sweep is genuine (I re-checked each id in its file). Docked for the unsupported NFR-013 claim on TC-3567 (ISS-02). |
| T2 Soundness | 20 | 90 | 18.0 | Suite placements are argued, not asserted; the Pass (obs.) / Pass (inh.) discipline is held correctly against a tester-executed run; the TC-2614 correction is exactly right. Docked for the "approved design element" / "DISCHARGED" claim built on an In-Review source (ISS-03). |
| T3 Traceability & IDs | 20 | 88 | 17.6 | Ids continue from TC-3563 with no reuse or renumber; TD-07-01/02 preserved, TD-07-03 raised honestly; the TD-RTM-01 caveat is carried, not dropped. Docked for the TC-3568 evidence over-claim (ISS-01), the DES-094 mis-citation on TC-3564 (ISS-04) and two stale suite headings (ISS-05). |
| T4 Security & failure modes | 15 | 97 | 14.6 | The scope limits are the strongest writing in the version: TC-3567 states it guards the claim not the fluency; TC-3565 states why a word ban alone would have passed the retired body. Nothing is over-claimed on the safety surface itself. |
| T5 Completeness & testability | 15 | 92 | 13.8 | Every count re-derived independently and every one reconciles; §9 R-17 matches my own run exactly. Docked for the self-inconsistent §10 overlap paragraph (ISS-06) and the stale §6 accessibility checklist row (ISS-07). |
| T6 Convention compliance | 10 | 97 | 9.7 | ISO-8601 throughout, named owner on every debt row, version/status/date discipline correct (2.4.4 to 2.5.0 minor bump, `Status: In Review`, `Last updated: 2026-09-06`), CODE pin correctly advanced to v2.5.1 with an explicit, honest note on the four pins deliberately not advanced. |
| **Total** | **100** | — | **92.3% → 92%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T3 | §5.3, line 1392 — **TC-3568** expected-result cell | The cell states: "**(a), (b) and (d) render the title 'Verified' with a matching `aria-label` and no FR-131 banned word anywhere in the rendered text**". `UT-0759` (`packages/ui/test/PrivacyStatus.test.tsx:198`) asserts the `aria-label` and the `BANNED` regex **only on path (a)** (lines 210–217); path (b) (`unlinkable: false`, lines 219–224) and path (d) (malformed prop, lines 233–238) assert only `getByText('Verified')` and that `queryByText('Verified — private')` is null. The row therefore records Pass (inh.) evidence for four sub-assertions the test does not make. This is the identical defect class this version corrected on TC-2614 — an expected result a regression cannot falsify. | Restate the expected result to match the assertions: aria-label and banned-word absence on path (a); title selection only on (b) and (d); aria-label on (c). If the wider guarantee is wanted, route the extra assertions to the **engineer** as owed UT scope rather than recording them as already covered. |
| ISS-02 | **Medium** | T1 | §5, line 862 — **TC-3567** "Verifies" cell | The cell reads "Verifies US-0134 · FR-131 · DES-098 · **NFR-013**". UT-0887's Arabic assertion (`apps/web/test/safety-surfaces.test.tsx:161–166`) checks the content of two `ar.banner.*` string constants. NFR-013's guarantee is "**8 locales incl. RTL**" — neither locale coverage nor RTL rendering is exercised. Doc 08 v2.8.0's NFR-013 row carries only TC-2330/TC-2333 and still reads "no locale files", so the claimed NFR-to-TC link exists in Doc 07 and **nowhere in the RTM**. | Drop `NFR-013` from TC-3567's Verifies cell (FR-131 + DES-098 already carry the case), **or** add the link to Doc 08 §3.2 with an explicit scope note that it is copy-content evidence only, not locale coverage. The two documents must not disagree about a requirement link. |
| ISS-03 | **Medium** | T2 | Changelog line 44; §5.3 context block (line 1385); §5.3 TC-3568 status cell (line 1392) | All three assert that Doc 03 v2.12.0's **DES-094 clause 9** makes TC-3568 verify "**an approved design element**", and the status cell declares "**The Doc 06 §4a recorded deviation is DISCHARGED, 2026-09-06**" on that basis. `docs/03-architecture-design-sdd.md` line 5 reads `Status: In Review`, and it has since **FAILED** cycle 1 of its neutral technical review (`artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md` — 89%, 0C/1H/2M/2L), so clause 9's text may still move under rework. The document contradicts itself: its own changelog (lines 103–108) says Doc 03 v2.12.0 "is **In Review**, not Approved… This document cites them as the current corrected text, **not as approved sources**". | Replace "approved design element" with "the current corrected text of DES-094 clause 9 (Doc 03 v2.12.0, **In Review**)", and downgrade "DISCHARGED" to "discharged **conditionally**, on Doc 03 v2.12.0 reaching Approved" — the same discipline the changelog states for itself. |
| ISS-04 | Low | T3 | §5, line 859 — **TC-3564** "Verifies" cell | Reads "DES-098/**DES-094**". TC-3564 renders `ReceiptFreedomBanner` (`apps/web/src/components/ReceiptFreedomBanner.tsx`), which is DES-098; DES-094 is the `PrivacyStatus` component and has no part in this case. TC-3565/3566/3567 correctly cite DES-098 alone. | Remove `DES-094` from TC-3564's Verifies cell. |
| ISS-05 | Low | T3 | §4.3 heading (line 698); §5 heading (line 840) | §4.3 still reads "`TS-ABSENCE` — Capability-absence (**TC-1600–TC-1614**)" although it now contains TC-3569, and §5 still reads "Adversarial suites, one per RISK (**TC-2600–TC-2752**)" although it now contains TC-3564..TC-3567. §5.3's heading **was** updated to "TC-3470–TC-3488, **TC-3568**" and §2's suite table was updated for all three — the same version applied the fix in one place of three. | Extend both headings as §5.3's was: "(TC-1600–TC-1614, TC-3569)" and "(TC-2600–TC-2752, TC-3564–TC-3567)". |
| ISS-06 | Low | T5 | §10, overlap-convention paragraph | The paragraph disagrees with itself in consecutive sentences: it opens "Four cases appear in both the **187-case** 'implementing automated test' count and the 175-case 'Blocked' count", then states "Distinct total = **193** (automated) + 171 + 48 + 12 = **424**". The version moved 187 to 193 in the formula and left 187 in the prose introducing it. (Both arithmetic forms check out; only the label is stale.) | Change the prose figure to 193, or write "the 193-case count (187 before v2.5.0)". |
| ISS-07 | Low | T5 | §6 Coverage checklist, "Accessibility" row | Reads "Two component-level cases exist and were **not executed**." Run R-17 executed `apps/web` **95/95** and `packages/ui` **18/18** green, and §0.1's own v2.5.0 amendment exists precisely to stop *Not run* being read as "never executed". This row was not brought into line with it. | Restate as "…exist and were executed green at file granularity in R-17; no case-by-case a11y pass has been made (TD-07-03)". |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Verified sound (recorded so the rework does not disturb it)

- **Run R-17 is real and exact.** My own `npm test` from the repo root: 619/619, 0 failed, exit 0;
  contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95. §0.2 and §9 R-17 match on
  every package. `apps/web/tsconfig.tsbuildinfo` was **not** dirtied by the run, exactly as §9 states.
- **TC-2614 is correctly corrected.** Its expected result no longer states "votes are anonymous but
  **not** receipt-free"; it now states the FR-131 v1 truth; the "**this is a disclosure, not a
  satisfaction of FR-031/FR-032/NFR-003**" note is retained; the status move *Not run* to Pass (inh.)
  is justified by R-17. A grep of the whole document for `anonymous but` returns four hits (lines 29,
  49, 858 and TC-2614's correction note) — **every one is a quotation of superseded text inside a
  correction record**, which is this document set's own annotate-don't-delete convention. No live
  assertion of the retired framing survives.
- **Counts.** I summed the §2 suite table row-wise: **471** cases / **239** automated / **232**
  blocked-or-no-mechanism, with **no per-row mismatch** (every row satisfies cases = automated +
  blocked). TS-ABSENCE 15 to 16 / 12 to 13, TS-ADV 43 to 47 / 24 to 28, TS-SCAFFOLD 19 to 20 / 16 to
  17 are each correct. §10: 88 + 136 + 15 = 239; 136 = 55 + 28 + 24 + 22 + 7; 16 to 15 on the TC-2614
  re-status. Blocked 175, No mechanism 49, Manual 12, observed failures 0 — all correctly unchanged.
- **The Pass (obs.) discipline was held against the tester's own run.** Holding 88 rather than
  promoting the six new cases on a file-granularity run is the harder and the right call, and §2's
  extension of the v2.3.0 corroboration note says why in terms a later reader can check.
- **Orphan check.** UT-0887 to TC-3564/3565/3566/3567 (one per `it`), UT-0759 to TC-3568 (one per
  block, on the TC-3475/UT-0758 precedent), UT-0888 to TC-3569. I read all nine assertions; the
  mapping is accurate. The re-checks of UT-0751 to TC-3471 and UT-0753 to TC-3488 are correct: both
  rows are written above the level the changed title assertion could falsify.
- **`TD-RTM-01` is carried, not dropped** — the §8 orphan-check paragraph names it explicitly and
  states why this drop's zero is unaffected by it. **`TD-07-03`** is raised against the tester itself
  rather than pushed to the engineer, which is the honest attribution.
- **No transcription residue.** No table row in this file is missing its trailing pipe; no `FIND:` /
  `REPLACE WITH:` / four-backtick marker leaked; no boundary word was eaten.

## 6. Routing instruction (to the owning role)

**FAIL → route to the tester (Ji-woo Park), the owning role for Doc 07.** Fix ISS-01, ISS-02 and
ISS-03 (Mediums, mandatory) and, since the lines are already being touched, ISS-04..ISS-07. The
rework MUST produce a **new version** — a Medium-or-worse FAIL requires at least a **minor** bump
(v2.5.0 to **v2.6.0**) with `Status: In Review` — after which this loop re-reviews as cycle 2 of 5.
**No code change is requested and none is authorised by this report.** ISS-01's optional wider
guarantee, if wanted, is **engineer** scope (Samuel Oyelaran) as new UT assertions, not a document
edit.
