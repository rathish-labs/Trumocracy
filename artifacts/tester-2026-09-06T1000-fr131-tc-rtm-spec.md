# Anchored FIND/REPLACE spec — Doc 07 v2.5.0 + Doc 08 v2.8.0 (FR-131 honesty drop)

**Author:** Ji-woo Park — Test Lead (tester) · **Date:** 2026-09-06
**Applies to:** `docs/07-test-cases-suites.md` (v2.4.4 → v2.5.0, Status In Review) and
`docs/08-traceability-matrix.md` (v2.7.0 → v2.8.0, Status In Review).

**Transcribe mechanically.** Every `FIND` block below is verbatim existing text and matches
**exactly once** in its named file (verified by exact-substring count at generation time).
Apply the ops **in the order given, per file**. Fences are four backticks. Do not reflow, do
not re-wrap, do not "tidy" whitespace: several FIND blocks are single very long table rows.
Neither file's first line is used as an anchor (both begin with a BOM).

**Op count:** 38 (21 in Doc 07, 17 in Doc 08).

---

### OP 1 — docs/07-test-cases-suites.md — header — v2.4.4 → v2.5.0, Status In Review, CODE pin → v2.5.1, Last updated 2026-09-06, v2.5.0 changelog entry
FIND:
````
Document ID:   TC-TRUMOCRACY
Version:       2.4.4
Status:        Approved — 07-test-cases-suites-v2.4.4-technical-cycle2.md (PASS 99%, 0C/0H/0M/1L; ISS-01 Low carried — §9 lacks an R-17 confirmatory re-run row, per the R-14 precedent, accepted at the v2.4.2 PASS)
Owner:         Ji-woo Park — Test Lead (tester)
Source:        MTP-TRUMOCRACY v1.0.1 (docs/04-test-strategy-master-plan.md) · BKLG-TRUMOCRACY v2.3.0 (docs/05-product-backlog.md)
               SRS-TRUMOCRACY v2.16.0 §8 Gherkin (docs/02-requirements-srs.md) · SDD-TRUMOCRACY v2.10.0 §5.2, §10.13.10, §10.13.10.1, §10.13.13, §11, §14 (docs/03-architecture-design-sdd.md)
               CODE-TRUMOCRACY v2.4.3 (docs/06-coding-and-ut.md) · SECURITY-RESCAN-SC15-21-2026-08-11.md
Last updated:  2026-08-30
Changelog:     v2.4.4 (2026-08-30) — **Rework cycle 1 against
````
REPLACE WITH:
````
Document ID:   TC-TRUMOCRACY
Version:       2.5.0
Status:        In Review — v2.5.0 (FR-131 honesty-drop traceability; Doc 06 v2.5.1 sync).
               Awaiting a technical-mode document review.
               _(v2.4.4 record, retained:)_ Approved — 07-test-cases-suites-v2.4.4-technical-cycle2.md (PASS 99%, 0C/0H/0M/1L; ISS-01 Low **DISCHARGED at v2.5.0** — §9 now carries the confirmatory full-suite re-run row it lacked, as R-17)
Owner:         Ji-woo Park — Test Lead (tester)
Source:        MTP-TRUMOCRACY v1.0.1 (docs/04-test-strategy-master-plan.md) · BKLG-TRUMOCRACY v2.3.0 (docs/05-product-backlog.md)
               SRS-TRUMOCRACY v2.16.0 §8 Gherkin (docs/02-requirements-srs.md) · SDD-TRUMOCRACY v2.10.0 §5.2, §10.13.10, §10.13.10.1, §10.13.13, §11, §14 (docs/03-architecture-design-sdd.md)
               CODE-TRUMOCRACY v2.5.1 (docs/06-coding-and-ut.md) · SECURITY-RESCAN-SC15-21-2026-08-11.md
               _(v2.5.0 pin note — read this before trusting a pin. Only the CODE pin was advanced
               (v2.4.3 → **v2.5.1**), because only Doc 06 was re-read for this version. The other
               four pins are **stale against the current versions** — SRS is now **v2.16.3**
               (Approved), SDD **v2.12.0** and MTP **v1.3.0** (both **In Review**, both bumped on
               2026-09-06 by the same FR-131 cascade that produced this version), BKLG **v2.5.0**
               (Approved) — and are deliberately
               NOT advanced here: a pin asserts "this document was written against that version",
               and advancing one without reading its delta would be a false claim of review.
               **One exception, stated so it is not ambiguous:** FR-131 was read for this version
               at **SRS v2.16.3 §4.45**, the current Approved text. A full pin-sync of
               SRS/SDD/BKLG/MTP is owed at the next version.)_
Last updated:  2026-09-06
Changelog:     v2.5.0 (2026-09-06) — **FR-131 honesty-drop traceability. Suite re-run, 6 TC minted,
               1 TC corrected; no TC retired, reused or renumbered.** Doc 06 **v2.5.1** (Approved)
               closed Doc 09 `REL-LIM-18` in code at commit `0a5c542` (PR #19, merged to `main`)
               under **US-0134**: five shipped strings and one component title that asserted the
               retired "votes are anonymous but not receipt-free" framing now state the **FR-131**
               (SRS v2.16.3 §4.45) v1 truth, and three new UT blocks guard them against regression.
               **Run R-17 (2026-09-06) — executed by the tester, not inherited:** `npm test` from
               the repo root, **619 / 619 pass, 0 failed**, exit 0 (contracts 95 · protocol 151 ·
               sdk 244 · ui 18 · indexer 16 · web 95). Recorded in §0.2 and §9.
               **Six TC minted — TC-3564..TC-3569**, continuing from the last minted id TC-3563.
               **TC-3564..TC-3567** map **UT-0887** (`apps/web/test/safety-surfaces.test.tsx`, four
               assertions) into `TS-ADV-02`, beside TC-2614, the disclosure case they defend:
               banned words only where immediately negated and never "private"/"secure"; FR-131
               (a)/(b)/(c) positively stated and the retired claims absent; the guard bound to the
               shipped `en.ts` strings rather than a test-local copy; the Arabic mirror carrying
               the same truth. **TC-3568** maps **UT-0759** (`packages/ui/test/PrivacyStatus.test.tsx`,
               the `ver` TITLE four-path) into `TS-SCAFFOLD` beside TC-3488/UT-0753, as **one** TC,
               following the TC-3475/UT-0758 precedent that already covers the **subtitle** half of
               the same backing-aware rule (Doc 03 v2.12.0 minted **DES-094 clause 9** for the title
               the same day, so this case verifies an approved design element). **TC-3569** maps **UT-0888**
               (`packages/protocol/test/party-and-regions.test.js`) into `TS-ABSENCE` with the other
               protocol flag cases TC-1611/TC-1612, because what it asserts is the **absence of a
               claim** from a shipped string.
               **TC-2614 CORRECTED — its expected result was false.** It read "The UI states votes
               are anonymous but **not** receipt-free", which is the exact framing FR-131’s closing
               sentence bans and which the code stopped asserting at Doc 06 v2.5.0. What the case
               exercises is unchanged (UT-0710/0711/0712, now joined by UT-0887); the sentence
               describing it was wrong. Its note that this is **a disclosure, not a satisfaction of
               FR-031/FR-032/NFR-003** is kept, and its status moves **Not run → Pass (inh.)** on
               the R-17 `apps/web` 95/95 result.
               **Counts moved (arithmetic stated, not asserted).** Cases designed 465 → **471**
               (+6). With an implementing automated test 233 → **239** (+6). Inherited green
               129 → **136** (+6 new, +1 TC-2614 re-statused; 55 + 28 + 24 + 22 + 7 = 136).
               Automated but not executed 16 → **15** (−1, TC-2614). **Observed 88 — UNCHANGED**,
               and deliberately so: R-17 is a full-suite run observed at **file** granularity, so
               under the v2.3.0 corroboration convention its cases are recorded Pass (inh.), not
               promoted to Pass (obs.). Identity holds: 88 + 136 + 15 = **239**. Blocked **175**,
               No mechanism **49**, Manual **12**, observed failures **0** — all unchanged, because
               none of the six new cases is blocked and no blocked case was re-statused. §2 suite
               table: `TS-ABSENCE` 15 → **16** cases / 12 → **13** automated; `TS-ADV-01…16`
               43 → **47** / 24 → **28**; `TS-SCAFFOLD` 19 → **20** / 16 → **17**; totals
               465 → **471** / 233 → **239** / Blocked-or-no-mechanism **232** unchanged.
               **Two stale figures fixed while passing through them, both pre-existing:** §2’s
               post-table paragraph read "Of those 211 … **107** are inherited-green cases" against
               its own "233 of 465" headline (v2.4.0-era leftovers); §5.3’s heading and context
               read "(TC-3470–TC-3487)" and "15 of 18 cases", both pre-TC-3488.
               **TD-07-03 RAISED (Low).** R-17 executed the `apps/web` suite green, so the 15 rows
               still marked *Not run* in the `UT-0700…UT-0742` group are now corroborated at file
               granularity. They are **not** promoted, because no case-by-case pass was made; the
               §0.1 vocabulary row is amended to say exactly that, so *Not run* is not read as
               "never executed" for a suite the tester just ran green.
               **Sweep for the retired wording across `docs/`, run 2026-09-06, whitespace-normalised
               so that line-broken occurrences are caught — a plain `grep` misses those and would
               have reported a clean sweep that was not clean. Result: ZERO live assertions of the
               retired framing survive anywhere in the document set.** Every remaining occurrence is
               a **quotation of superseded text inside a correction record**, which is the v2.4.4
               precedent this document set for itself: quote the superseded sentence rather than
               delete it, so the trail survives. Occurrence counts and dispositions — **Doc 03** (4):
               corrected the same day at **v2.12.0** (In Review); §13’s "Public tallies in Phase 1"
               repayment cell now states the FR-131 truth, and §10.12.3 gained **clause 9**, the
               backing-aware `ver` **title** rule, overruling the v2.7.0 "Verified — private is
               compliant" analysis. **Doc 04** (6): corrected the same day at **v1.3.0** (In Review);
               `TS-ADV-02` case **A-02.6** and **OPEN-01** both restated off the retired framing —
               A-02.6 is the strategy-level source of TC-2614, which is why that correction and this
               one agree rather than one lagging the other. **Doc 09** (3): historical defect record,
               and `REL-LIM-18` is now **CLOSED** at Doc 09 **v1.5.0** against commit `0a5c542`.
               **Doc 06** (2): its own change history, describing the defect it fixed. **Doc 07** (1):
               TC-2614’s correction note below, quoted for the record. **Doc 02, Doc 05, Doc 08:
               zero.** **Nothing is owed to another role on the retired wording as of 2026-09-06 —
               but read the cascade as MADE, not SETTLED:** Doc 03 v2.12.0, Doc 04 v1.3.0 and Doc 09
               v1.5.0 are all **In Review**, not Approved. None has a passing neutral technical review
               yet (the assigned reviewer is reviewer-qa per
               `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md`), so any of the three
               may still move under rework. This document cites them as the current corrected text,
               not as approved sources, and the pin note above says the same. FR-131’s ban binds the
               v1 **product** (UI, README, public-facing
               materials); a test document recording that a false sentence was corrected is not a
               product surface, and deleting the quotation would destroy the only evidence that the
               correction happened.
               v2.4.4 (2026-08-30) — **Rework cycle 1 against
````

### OP 2 — docs/07-test-cases-suites.md — §0.1 — amend the "Not run" vocabulary row so it cannot be read as "never executed" after R-17
FIND:
````
| **Not run** | An automated test exists but was not executed by the tester this session (`apps/web`, `UT-0700…UT-0742`). |
````
REPLACE WITH:
````
| **Not run** | An automated test exists and has **not** been executed case-by-case by the tester (`apps/web`, `UT-0700…UT-0742`). **v2.5.0 amendment — read this before treating the label as "never run".** Run **R-17** (2026-09-06, full-repo `npm test`, 619/619 green) executed the `apps/web` suite **95/95 green**, so every row still marked *Not run* in the `UT-0700…UT-0742` group is corroborated green at **file** granularity. Those rows are deliberately **not** promoted here, because no case-by-case pass against each `TC` was made; the promotion is owed and is recorded as **TD-07-03** in §0.3. *Not run* therefore means "no case-level observation recorded", **not** "the test did not run and may be failing". |
````

### OP 3 — docs/07-test-cases-suites.md — §0.2 — add the R-17 full-repository execution-evidence row (619/619)
FIND:
````
| **Whole repository (2026-08-29, Doc 06 cycle-3 review run)** | `npm test` from the repo root | **542 passed / 542, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71 |
````
REPLACE WITH:
````
| **Whole repository (2026-08-29, Doc 06 cycle-3 review run)** | `npm test` from the repo root | **542 passed / 542, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71 |
| **Whole repository (2026-09-06, run R-17 — FR-131 honesty drop)** | `npm test` from the repo root | **619 passed / 619, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95. Per-package durations: contracts 34.29 s, protocol 505 ms, sdk 1.10 s, ui 767 ms, indexer 571 ms, web 2.81 s. Includes the three FR-131 guard blocks UT-0887 (web), UT-0759 (ui) and UT-0888 (protocol). Observed at **file** granularity, so the cases it covers are recorded **Pass (inh.)** against the Doc 06 v2.5.1 pin rather than promoted to Pass (obs.) — see the §2 corroboration note |
````

### OP 4 — docs/07-test-cases-suites.md — §0.3 — retitle to three defects and raise TD-07-03 (Not-run rows corroborated by R-17 but not promoted)
FIND:
````
### 0.3 Two inventory defects found while writing this document

Recorded here, routed to the engineer; neither is fabricated coverage and neither is closed by me.

| # | Finding | Severity | Owner |
|---|---|---|---|
| TD-07-01 | **Doc 06 §3's `UT-####` inventory omits two real test groups.** `packages/contracts/test/deployment-safety.test.mjs` uses `UT-0600…UT-0612` (13 tests) and `apps/web/test/safety-surfaces.test.tsx` uses `UT-0700…UT-0742` (16 tests). Neither range appears in the Doc 06 §3 table, and the table's stated counts (e.g. "UT-0100..0125 … 25") therefore under-report the drop. | Medium — the RTM cites tests the inventory does not list | Engineer (Doc 06) |
| TD-07-02 | **Doc 06 §3 declares "UT-0001..0028 … 41" and "UT-0030..0055 … 41"**, i.e. 82 tests over two ranges of 28 and 26 identifiers. The identifiers are `describe`/`it` group anchors, not one-per-test. The count is right (82 observed); the range labelling implies a 1:1 mapping that does not hold. | Low — cosmetic, but it makes ID-level traceability ambiguous | Engineer (Doc 06) |
````
REPLACE WITH:
````
### 0.3 Three inventory / evidence defects found while writing this document

Recorded here and routed to the owning role; none is fabricated coverage and none is closed by me. _(v2.5.0: TD-07-03 added — it is the tester’s own debt, not the engineer’s.)_

| # | Finding | Severity | Owner |
|---|---|---|---|
| TD-07-01 | **Doc 06 §3's `UT-####` inventory omits two real test groups.** `packages/contracts/test/deployment-safety.test.mjs` uses `UT-0600…UT-0612` (13 tests) and `apps/web/test/safety-surfaces.test.tsx` uses `UT-0700…UT-0742` (16 tests). Neither range appears in the Doc 06 §3 table, and the table's stated counts (e.g. "UT-0100..0125 … 25") therefore under-report the drop. | Medium — the RTM cites tests the inventory does not list | Engineer (Doc 06) |
| TD-07-02 | **Doc 06 §3 declares "UT-0001..0028 … 41" and "UT-0030..0055 … 41"**, i.e. 82 tests over two ranges of 28 and 26 identifiers. The identifiers are `describe`/`it` group anchors, not one-per-test. The count is right (82 observed); the range labelling implies a 1:1 mapping that does not hold. | Low — cosmetic, but it makes ID-level traceability ambiguous | Engineer (Doc 06) |
| TD-07-03 | **15 rows still read *Not run* for a suite the tester has now run green.** Run R-17 (2026-09-06) executed `apps/web` **95/95**, covering every `UT-0700…UT-0742` row (TC-1209, TC-1959, TC-2253, TC-2254, TC-2612, TC-2613 and the rest of the group). Only TC-2614 is re-statused in this version, because only TC-2614 was independently re-derived against its assertions while correcting its expected result. The remaining 15 are corroborated at **file** granularity and are held at *Not run* rather than promoted on a run that was not case-by-case — the same discipline the v2.3.0 corroboration note applied to TS-PARTY/TS-MEMBERSHIP. | Low — the label understates real evidence; it never overstates it | **Tester** (Ji-woo Park, Doc 07) — clear by a case-by-case pass over `UT-0700…UT-0742` at the next version |
````

### OP 5 — docs/07-test-cases-suites.md — §2 suite table — TS-ABSENCE gains TC-3569 (15→16 cases, 12→13 automated)
FIND:
````
| `TS-ABSENCE` | **Capability-absence** | L1/L2 + artifact scan | CON-003, CON-006, FR-021/035/047/051/056, NFR-017 | TC-1600–TC-1614 | 15 | 12 | 3 |
````
REPLACE WITH:
````
| `TS-ABSENCE` | **Capability-absence** | L1/L2 + artifact scan | CON-003, CON-006, FR-021/035/047/051/056, FR-131 closing sentence, NFR-017 | TC-1600–TC-1614, TC-3569 | 16 | 13 | 3 |
````

### OP 6 — docs/07-test-cases-suites.md — §2 suite table — TS-ADV-01…16 gains TC-3564–TC-3567 (43→47 cases, 24→28 automated)
FIND:
````
| `TS-ADV-01…16` | **Adversarial, one per RISK** | mixed | RISK-01…RISK-16 | TC-2600–TC-2752 | 43 | 24 | 19 |
````
REPLACE WITH:
````
| `TS-ADV-01…16` | **Adversarial, one per RISK** | mixed | RISK-01…RISK-16 | TC-2600–TC-2752, TC-3564–TC-3567 | 47 | 28 | 19 |
````

### OP 7 — docs/07-test-cases-suites.md — §2 suite table — TS-SCAFFOLD gains TC-3568 (19→20 cases, 16→17 automated)
FIND:
````
| `TS-SCAFFOLD` | Scaffold seam & design-system seed | L1–L5 | FR-082..086 · FR-122..124 · FR-131..132 · DES-093..096 · DES-100 · ADR-023..025 | TC-3470–TC-3488 | 19 | 16 | 3 |
````
REPLACE WITH:
````
| `TS-SCAFFOLD` | Scaffold seam & design-system seed | L1–L5 | FR-082..086 · FR-122..124 · FR-131..132 · DES-093..096 · DES-100 · ADR-023..025 | TC-3470–TC-3488, TC-3568 | 20 | 17 | 3 |
````

### OP 8 — docs/07-test-cases-suites.md — §2 — total row 465/233 → 471/239 and rebuild the post-table accounting paragraph as a checkable identity
FIND:
````
| | | | **Total** | | **465** | **233** | **232** |

**233 of 465 cases have an implementing automated test.** (43 new TC-3300..TC-3342 are all Blocked; 70 new TC-3400..TC-3469 are all Blocked or No mechanism — no implementing contracts for TS-GOV2 exist in this drop; 16 of 19 new TC-3470..TC-3488 have passing automated tests — see §9 R-04/R-05 and TC-3488 v2.2.1; 3 are Blocked; all 28 new TC-3489..TC-3516 TS-PARTY cases are inherited Pass from Doc 06 v2.2.0; all 24 new TC-3517..TC-3540 TS-MEMBERSHIP cases are inherited Pass from Doc 06 v2.3.2.) Of those 211, **88 were executed and
observed passing by the tester this session** under the Pass (obs.) convention; **107** are inherited-green cases (55 contract suite
+ 28 TS-PARTY + 24 TS-MEMBERSHIP); **16** are `apps/web` component
cases that exist but were not executed this session.
````
REPLACE WITH:
````
| | | | **Total** | | **471** | **239** | **232** |

**239 of 471 cases have an implementing automated test.** (43 new TC-3300..TC-3342 are all Blocked; 70 new TC-3400..TC-3469 are all Blocked or No mechanism — no implementing contracts for TS-GOV2 exist in this drop; 17 of 20 TC-3470..TC-3488 plus TC-3568 have passing automated tests — see §9 R-04/R-05, TC-3488 v2.2.1 and TC-3568 v2.5.0; 3 are Blocked; all 28 new TC-3489..TC-3516 TS-PARTY cases are inherited Pass from Doc 06 v2.2.0; all 24 new TC-3517..TC-3540 TS-MEMBERSHIP cases are inherited Pass from Doc 06 v2.3.2; the 6 new TC-3564..TC-3569 FR-131 honesty cases are inherited Pass from Doc 06 v2.5.1 and were observed green at file granularity in R-17.) Of those 239, **88 were executed and
observed passing by the tester in the 2026-08-09 / 2026-08-25 sessions** under the Pass (obs.) convention; **136** are inherited-green cases (55 contract suite
+ 28 TS-PARTY + 24 TS-MEMBERSHIP + 22 TS-PROPOSALS + 7 from the FR-131 honesty drop); **15** are `apps/web` component
cases that exist but were not executed case-by-case (TD-07-03). Identity: 88 + 136 + 15 = **239**.

_(v2.5.0 correction, pre-existing and load-bearing enough to name: this paragraph opened "Of those 211 … **107** are inherited-green cases … **16**" — 211 + 107 are v2.4.0-era figures left standing under a "233 of 465" headline in the same sentence, and 88 + 107 + 16 = 211 ≠ 233. The bucket totals in §10 were right throughout; only this paragraph was stale. It is now stated as an identity so it cannot drift again.)_
````

### OP 9 — docs/07-test-cases-suites.md — §2 — extend the corroboration note to cover run R-17 and explain why obs. stays at 88
FIND:
````
**Corroboration note (v2.3.0, and it cuts against the accounting above).** The tester executed `npm test` from the repo root on 2026-08-29 while running the Doc 06 v2.3.2 cycle-3 document review, and observed **542/542 green** including every file behind TS-PARTY and TS-MEMBERSHIP. Those 24 TS-MEMBERSHIP cases are therefore stronger than a bare inheritance — the tester saw the files pass. They are nevertheless recorded **Pass (inh.)** against the Doc 06 v2.3.2 pin, because the observation was made at file granularity during a review run rather than case-by-case against each TC, and because it keeps the TS-PARTY precedent and the Doc 08 dashboard buckets consistent. The stronger evidence is recorded in §0.2 and §9 (R-12) rather than used to upgrade the status.
````
REPLACE WITH:
````
**Corroboration note (v2.3.0, and it cuts against the accounting above).** The tester executed `npm test` from the repo root on 2026-08-29 while running the Doc 06 v2.3.2 cycle-3 document review, and observed **542/542 green** including every file behind TS-PARTY and TS-MEMBERSHIP. Those 24 TS-MEMBERSHIP cases are therefore stronger than a bare inheritance — the tester saw the files pass. They are nevertheless recorded **Pass (inh.)** against the Doc 06 v2.3.2 pin, because the observation was made at file granularity during a review run rather than case-by-case against each TC, and because it keeps the TS-PARTY precedent and the Doc 08 dashboard buckets consistent. The stronger evidence is recorded in §0.2 and §9 (R-12) rather than used to upgrade the status. **v2.5.0 extension — the same discipline, applied to the tester’s own run.** On 2026-09-06 the tester executed `npm test` from the repo root and observed **619/619 green** (run R-17), which covers every file behind the six new FR-131 honesty cases (TC-3564..TC-3569) and the whole `apps/web` suite. Those six cases are nevertheless recorded **Pass (inh.)** against the Doc 06 v2.5.1 pin, and the Pass (obs.) count is held at **88**, for the identical reason: the observation was at **file** granularity, not case-by-case against each `TC`. Promoting a tester-executed run to Pass (obs.) on that basis would make the strongest status in this document mean two different things depending on which drop minted the row.
````

### OP 10 — docs/07-test-cases-suites.md — §4.3 TS-ABSENCE — mint TC-3569 (UT-0888, maci_voting description) beside the protocol flag cases
FIND:
````
| TC-1612 | The censorship escape hatch and gas sponsorship cannot be switched off | NFR-014, FR-061 | Permanently on | protocol · UT-0054 | **Pass (obs.)** |
````
REPLACE WITH:
````
| TC-1612 | The censorship escape hatch and gas sponsorship cannot be switched off | NFR-014, FR-061 | Permanently on | protocol · UT-0054 | **Pass (obs.)** |
| TC-3569 | The `maci_voting` flag description carries no affirmative FR-131 banned claim | FR-131 closing sentence · US-0134 · DES-098 | `FLAGS.MACI_VOTING.description` matches neither `/votes are anonymous/i` nor `/\bis anonymous\b/i`; it does contain "NOT anonymous", "CAN see vote direction", and a citation of `FR-131` as the normative wording, so the flag ledger cannot drift back to the retired framing | protocol · UT-0888 (`packages/protocol/test/party-and-regions.test.js`) | **Pass (inh.)** — Doc 06 v2.5.1, REL-LIM-18 site 1; `packages/protocol` **151/151** green in run R-17 (2026-09-06). _Placed in `TS-ABSENCE` deliberately: what it guarantees is the **absence of a claim** from a shipped string — the same shape as TC-1600..TC-1614 — and it sits with the other protocol flag cases TC-1611/TC-1612. It does **not** test flag behaviour; a passing TC-3569 says nothing about whether MACI works._ |
````

### OP 11 — docs/07-test-cases-suites.md — §5 TS-ADV-02 — correct TC-2614’s false expected result and mint TC-3564..TC-3567 (UT-0887)
FIND:
````
| TC-2614 | ADV-02 · RISK-02 | Flag-state disclosure while MACI is off | The UI states votes are anonymous but **not** receipt-free, and defaults to the warning when the flag is unknown | `apps/web` · UT-0710, UT-0711, UT-0712 | Not run — **this is a disclosure, not a satisfaction of FR-031/032/NFR-003** |
````
REPLACE WITH:
````
| TC-2614 | ADV-02 · RISK-02 | Flag-state disclosure while MACI is off | The vote-surface banner states the **FR-131 v1 truth** — this ballot uses conventional authentication and is **not** anonymous, **not** receipt-free and **not** coercion-resistant; the platform database **can** see how you voted and which party you belong to; the ballot the platform cannot see arrives with the v2 privacy layer and is **not switched on yet** — and the banner appears whenever coercion-resistant voting is off, disappears only once it is on, and **defaults to showing the warning when the flag is unknown** | `apps/web` · UT-0710, UT-0711, UT-0712, UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; `apps/web` 95/95 green in R-17 (2026-09-06). **This is a disclosure, not a satisfaction of FR-031/FR-032/NFR-003.** _(v2.5.0 correction: this cell read "The UI states votes are anonymous but **not** receipt-free" — the retired framing FR-131’s closing sentence bans, and which the code stopped asserting at Doc 06 v2.5.0 / commit `0a5c542`. What the case exercises never changed; the sentence describing it was false, and a false expected result is a test that cannot fail when the product regresses. Status also moves Not run → Pass (inh.) on R-17. The same false clause was corrected at the strategy layer the same day: **Doc 04 v1.3.0** restated `TS-ADV-02` case **A-02.6** and **OPEN-01** off the retired framing, A-02.6 being the pass criterion this case implements — so the case and its source now agree.)_ |
| TC-3564 | ADV-02 · RISK-02 | **Regression: a banned word returns to the rendered vote-surface banner.** Render `ReceiptFreedomBanner` with MACI off and scan the banner’s rendered text for "private", "anonymous", "receipt-free", "secure" | Every occurrence is **immediately negated** ("not anonymous", "not receipt-free"); "private" and "secure" do not appear at all, negated or otherwise — neither has a mandated use in this notice. Verifies US-0134 · FR-131 closing sentence · DES-098/DES-094 | `apps/web` · UT-0887 (`test/safety-surfaces.test.tsx`) | **Pass (inh.)** — Doc 06 v2.5.1; `apps/web` 95/95 green in R-17 (2026-09-06) |
| TC-3565 | ADV-02 · RISK-02 | **Regression: the retired framing returns as positive copy.** Read the rendered banner for the three facts FR-131 mandates | (a) "not anonymous", "not receipt-free" and "not coercion-resistant" are all present; (b) "can see how you voted" and "which party you belong to" are present; (c) "not switched on yet" is present; and the retired claims "your vote is private" and "nobody can see that a vote was yours" are **absent**. Verifies US-0134 · FR-131 (a)(b)(c) · DES-098 | `apps/web` · UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; R-17. **TC-3564 and TC-3565 are the guard together and neither is the guard alone:** the retired body ("Nobody can see that a vote was yours") carried **no** banned word, so a word ban would have passed it — only TC-3565’s positive assertions catch it (Doc 06 v2.5.1, decision 2) |
| TC-3566 | ADV-02 · RISK-02 | **The guard is on the shipped copy, not on a test-local string.** Assert the rendered banner contains `en.banner.notReceiptFreeTitle` and `en.banner.notReceiptFreeBody` imported from `apps/web/src/i18n/en.ts` | Both source strings appear verbatim in the rendered output, so editing the shipped en copy back toward a banned claim **fails** TC-3564/TC-3565 instead of passing them against a copy of the text that lives only in the test. Verifies US-0134 · FR-131 · DES-098 | `apps/web` · UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; R-17 |
| TC-3567 | ADV-02 · RISK-02 | **The Arabic locale is not left telling the retired lie.** Read `ar.banner.notReceiptFreeTitle` / `notReceiptFreeBody` | The retired Arabic claims "صوتك سري" (your vote is secret) and "لا يستطيع أحد أن يرى أن هذا الصوت صوتك" are absent; the mandated "ليس مجهول الهوية" (not anonymous) and "تستطيع أن ترى كيف صوّتّ" (can see how you voted) are present. Verifies US-0134 · FR-131 · DES-098 · NFR-013 | `apps/web` · UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; R-17. **Scope limit stated:** this case guards the *claim*, not the *fluency*. The Arabic strings are an engineer draft and native-speaker review is owed before any Arabic-locale deployment (Doc 06 §7 item 17) — a mistranslated coercion warning is a safety defect that a passing TC-3567 would not catch |
````

### OP 12 — docs/07-test-cases-suites.md — §5.3 — heading range, the stale "15 of 18" figure, and a pointer to TC-3568
FIND:
````
## 5.3 `TS-SCAFFOLD` — scaffold seam & design-system seed (TC-3470–TC-3487)

**Context.** This suite covers the three user stories minted in Doc 05 v2.2.0 that complete the v1 scaffold seam and design-system seed (DES-093 token set, DES-094 PrivacyStatus, DES-095 IEligibilityVerifier, DES-096 IBallotService, DES-100 allowlist-only shape; ADR-023/024/025). **15 of 18 cases are automated and observed passing** — `npm test -w @trumocracy/ui` (14/14, packages/ui, UT-0750..UT-0758) and `npm test -w @trumocracy/sdk` (160/160 including 36 seam tests, UT-0760..UT-0779) both green 2026-08-25. 3 cases are Blocked: screen wiring is pending for the enrolment disclosure affordance (TC-3476), the FR-131 clause (d) notice surface (TC-3481), and the audit-contract publication endpoint (TC-3487). The seam contracts are IS_INSECURE_MOCK=true in this drop (ADR-024 §3); the seam interface and its guard behaviour are real; the ZK-backed production implementation is Phase 3.
````
REPLACE WITH:
````
## 5.3 `TS-SCAFFOLD` — scaffold seam & design-system seed (TC-3470–TC-3488, TC-3568)

**Context.** This suite covers the three user stories minted in Doc 05 v2.2.0 that complete the v1 scaffold seam and design-system seed (DES-093 token set, DES-094 PrivacyStatus, DES-095 IEligibilityVerifier, DES-096 IBallotService, DES-100 allowlist-only shape; ADR-023/024/025). **17 of 20 cases are automated and green** _(v2.5.0: this read "15 of 18", a pre-TC-3488 figure left standing after TC-3488 was minted at v2.2.1 and now stale again after TC-3568; §2 has said 16 of 19 since v2.2.1 and 17 of 20 since v2.5.0)_ — `npm test -w @trumocracy/ui` (14/14, packages/ui, UT-0750..UT-0758) and `npm test -w @trumocracy/sdk` (160/160 including 36 seam tests, UT-0760..UT-0779) both green 2026-08-25. The suite now also carries **TC-3568** (UT-0759, the backing-aware `ver` **title** four-path, Doc 06 v2.5.1), green in run R-17. 3 cases are Blocked: screen wiring is pending for the enrolment disclosure affordance (TC-3476), the FR-131 clause (d) notice surface (TC-3481), and the audit-contract publication endpoint (TC-3487). The seam contracts are IS_INSECURE_MOCK=true in this drop (ADR-024 §3); the seam interface and its guard behaviour are real; the ZK-backed production implementation is Phase 3.
````

### OP 13 — docs/07-test-cases-suites.md — §5.3 TC-3471 — record the UT-0751 expectation change and the R-17 re-confirmation
FIND:
````
| TC-3471 | Worker-tier: component renders public-from-consent copy | US-0132 · FR-083 · DES-093/DES-094 | `tier = 'WORKER'` | Component renders Worker-tier copy indicating participation record is public from consent event; ballot direction copy absent | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0751 | **Pass (obs.)** |
````
REPLACE WITH:
````
| TC-3471 | Worker-tier: component renders public-from-consent copy | US-0132 · FR-083 · DES-093/DES-094 | `tier = 'WORKER'` | Component renders Worker-tier copy indicating participation record is public from consent event; ballot direction copy absent | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0751 | **Pass (obs.)** — re-confirmed green in R-17 (`packages/ui` 18/18, 2026-09-06). _(v2.5.0 note: **UT-0751’s expectation changed** at Doc 06 v2.5.1 — the `ver`-state default title it asserts moved from "Verified — private" to **"Verified"** so the v1 default carries no FR-131 banned word. This row’s expected result is written at the level of *which copy block renders*, not the exact title string, so it stands unaltered; the title assertion itself is now covered explicitly by **TC-3568**. Recorded rather than left silent, because a reader who follows TC-3471 to UT-0751 will find an assertion this cell does not quote.)_ |
````

### OP 14 — docs/07-test-cases-suites.md — §5.3 — retitle the TC-3488 subsection, record the UT-0753 change, and mint TC-3568 (UT-0759)
FIND:
````
### TC-3488 — US-0132 PrivacyStatus accessible name (NFR-011 · DES-094)

**Context (v2.2.1 rework — 07-test-cases-suites-v2.2.0-technical-cycle1.md ISS-01).** UT-0753 (`it('UT-0753 the component carries an accessible name matching the state title', ...)` in `packages/ui/test/PrivacyStatus.test.tsx`) existed in the repository and executed in the 14-test UI suite at v2.2.0 but was not mapped to any TC, making it a material orphan. This row closes that gap. Type: a11y.

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3488 | Accessible name: component root carries an accessible name matching the displayed tier state title | US-0132 · NFR-011 · DES-094 | `PrivacyStatus` rendered at each tier (Supporter, Worker, Candidate, and refused/null states); accessibility tree inspected | Component root element carries an accessible name that matches the displayed tier state title; assistive technology can identify the component's current tier state without visual inspection | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0753 | **Pass (obs.)** — npm test -w @trumocracy/ui 14/14, 2026-08-25 (UT-0753 was already in the 14/14 run at v2.2.0; TC mapping added v2.2.1) |
````
REPLACE WITH:
````
### TC-3488, TC-3568 — US-0132 / US-0134 PrivacyStatus accessible name and backing-aware `ver` title (NFR-011 · FR-131 · FR-124 · DES-094)

**Context (v2.2.1 rework — 07-test-cases-suites-v2.2.0-technical-cycle1.md ISS-01).** UT-0753 (`it('UT-0753 the component carries an accessible name matching the state title', ...)` in `packages/ui/test/PrivacyStatus.test.tsx`) existed in the repository and executed in the 14-test UI suite at v2.2.0 but was not mapped to any TC, making it a material orphan. This row closes that gap. Type: a11y.

**Context (v2.5.0 — FR-131 honesty drop, Doc 06 v2.5.1).** `UT-0759` was added to the same file at commit `0a5c542`, giving the `ver`-state **title** the four-path backing-aware treatment `UT-0758`/TC-3475 already gave the **subtitle**. The v1 default title moved from "Verified — private" to "Verified", because FR-131’s closing sentence bans "private" as a description of v1 voting and the v1 backing is conventional. `UT-0753`’s assertion changed with it (it now expects `aria-label` "Verified"), which is why TC-3488’s status carries an R-17 re-confirmation below. **TC-3568 is one TC for the whole four-path block**, following the TC-3475/UT-0758 precedent rather than minting four rows for four `it`s.

| TC | Title | Verifies (US · FR · DES) | Preconditions | Expected result | Automation | Status |
|---|---|---|---|---|---|---|
| TC-3488 | Accessible name: component root carries an accessible name matching the displayed tier state title | US-0132 · NFR-011 · DES-094 | `PrivacyStatus` rendered at each tier (Supporter, Worker, Candidate, and refused/null states); accessibility tree inspected | Component root element carries an accessible name that matches the displayed tier state title; assistive technology can identify the component's current tier state without visual inspection | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0753 | **Pass (obs.)** — npm test -w @trumocracy/ui 14/14, 2026-08-25 (UT-0753 was already in the 14/14 run at v2.2.0; TC mapping added v2.2.1); **re-confirmed green in R-17** (`packages/ui` 18/18, 2026-09-06) after UT-0753’s expected `aria-label` changed from "Verified — private" to "Verified" at Doc 06 v2.5.1. The case is unchanged — the accessible name still matches the displayed state title; what the title *is* changed |
| TC-3568 | Backing-aware `ver` **title**: four-path coverage (absent / `false` / `true` / malformed `backingProperties.unlinkable`), with no FR-131 banned word on the v1 default | US-0134 · FR-131 closing sentence, FR-124 · **DES-094 clause 9** (the title rule, Doc 03 v2.12.0; clause 7 governs the subtitle) | `state = "ver"`, valid self-view; (a) no `backingProperties`; (b) `{ unlinkable: false }`; (c) `{ unlinkable: true }`; (d) `{ onePersonOneVote: false }` — a partial prop with no `unlinkable` field | (a), (b) and (d) render the title **"Verified"** with a matching `aria-label` and **no** FR-131 banned word anywhere in the rendered text — the fail-honest v1 default, malformed treated as absent; (c) **alone** renders **"Verified — private"** with the matching `aria-label`, the one case in which the word is true of the ballot | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0759 | **Pass (inh.)** — Doc 06 v2.5.1; `packages/ui` **18/18** green in run R-17 (2026-09-06). **The Doc 06 §4a recorded deviation is DISCHARGED, 2026-09-06.** It read: the Doc 03 §10.12.3 sub-table listed "Verified — private" for the **v1** row, FR-131 was normative over that copy table (Doc 09 v1.3.0 ISS-03; approver, 2026-09-05), and the SDD cascade was owed — so UT-0759 was standing in as the only record of the intended copy. Doc 03 **v2.12.0** landed that cascade the same day: the v1 row now reads "Verified", the v2.7.0 banned-words analysis is **overruled**, and §10.12.3 gained **clause 9** stating the title rule normatively. This case now verifies an approved design element instead of substituting for one |
````

### OP 15 — docs/07-test-cases-suites.md — §8 — protocol row gains UT-0888 and the R-17 result
FIND:
````
| `packages/protocol` | `test/governance.test.js`, `test/party-and-regions.test.js` | UT-0001…UT-0055 | 38 | **Yes — 82/82 pass** |
````
REPLACE WITH:
````
| `packages/protocol` | `test/governance.test.js`, `test/party-and-regions.test.js` | UT-0001…UT-0055, **UT-0888** | 39 | **Yes — 82/82 pass** (2026-08-09); **151/151 protocol pass in R-17** (2026-09-06), including UT-0888 |
````

### OP 16 — docs/07-test-cases-suites.md — §8 — apps/web safety-surfaces row gains UT-0887 and the R-17 result
FIND:
````
| `apps/web` | `test/safety-surfaces.test.tsx` | UT-0700…UT-0742 | 10 | No — not executed (**absent from the Doc 06 §3 inventory — TD-07-01**) |
````
REPLACE WITH:
````
| `apps/web` | `test/safety-surfaces.test.tsx` | UT-0700…UT-0742, **UT-0887** | 14 | **Yes at file granularity — `apps/web` 95/95 pass in R-17** (2026-09-06), which is the first tester-executed run of this file. UT-0887 → TC-3564..TC-3567 recorded **Pass (inh.)**; the 15 pre-existing rows stay *Not run* pending a case-by-case pass (**TD-07-03**). (**Range absent from the Doc 06 §3 inventory until v2.5.0 — TD-07-01**; UT-0887 IS listed there) |
````

### OP 17 — docs/07-test-cases-suites.md — §8 — packages/ui row gains UT-0759 and the R-17 result
FIND:
````
| `packages/ui` | `test/PrivacyStatus.test.tsx` | UT-0750…UT-0758 | 7 | **Yes — 14/14 pass** (2026-08-25) |
````
REPLACE WITH:
````
| `packages/ui` | `test/PrivacyStatus.test.tsx` | UT-0750…**UT-0759** | 8 | **Yes — 14/14 pass** (2026-08-25); **18/18 pass in R-17** (2026-09-06) after UT-0759 added 4 tests at Doc 06 v2.5.1 |
````

### OP 18 — docs/07-test-cases-suites.md — §8 — add the v2.5.0 orphan check for UT-0887 / UT-0759 / UT-0888 and re-check UT-0751 / UT-0753
FIND:
````
**Orphan check (v2.3.0 — join/membership drop).** Sweep over the drop's full UT set. Every one is mapped: UT-0819→TC-3517, UT-0820→TC-3518, UT-0821→TC-3523, UT-0822→TC-3524, UT-0823→TC-3521, UT-0824→TC-3526, UT-0825→TC-3528, UT-0826→TC-3530, UT-0827→TC-3531, UT-0828→TC-3532, UT-0829→TC-3536, UT-0830→TC-3532, UT-0831→TC-3539, UT-0858→TC-3519, UT-0859→TC-3525, UT-0860→TC-3522, UT-0861→TC-3527, UT-0862→TC-3529, UT-0863→TC-3533, UT-0864→TC-3534, UT-0865→TC-3533, UT-0866→TC-3520, UT-0867→TC-3537, UT-0868→TC-3538, UT-0869→TC-3535, UT-0870→TC-3538, UT-0871→TC-3540. **Material orphan count for the join/membership drop: 0.** Every UT id above was read in its test file and its assertions checked against the TC text — none was taken from a summary. No `TC` in this document cites a `UT-####` that does not exist in the repository; every `UT` cited above was located by identifier in a real test file. Conversely, the `UT` inventory in Doc 06 §3 omits two real ranges — recorded as TD-07-01, not silently absorbed.
````
REPLACE WITH:
````
**Orphan check (v2.3.0 — join/membership drop).** Sweep over the drop's full UT set. Every one is mapped: UT-0819→TC-3517, UT-0820→TC-3518, UT-0821→TC-3523, UT-0822→TC-3524, UT-0823→TC-3521, UT-0824→TC-3526, UT-0825→TC-3528, UT-0826→TC-3530, UT-0827→TC-3531, UT-0828→TC-3532, UT-0829→TC-3536, UT-0830→TC-3532, UT-0831→TC-3539, UT-0858→TC-3519, UT-0859→TC-3525, UT-0860→TC-3522, UT-0861→TC-3527, UT-0862→TC-3529, UT-0863→TC-3533, UT-0864→TC-3534, UT-0865→TC-3533, UT-0866→TC-3520, UT-0867→TC-3537, UT-0868→TC-3538, UT-0869→TC-3535, UT-0870→TC-3538, UT-0871→TC-3540. **Material orphan count for the join/membership drop: 0.** Every UT id above was read in its test file and its assertions checked against the TC text — none was taken from a summary. No `TC` in this document cites a `UT-####` that does not exist in the repository; every `UT` cited above was located by identifier in a real test file. Conversely, the `UT` inventory in Doc 06 §3 omits two real ranges — recorded as TD-07-01, not silently absorbed.

**Orphan check (v2.5.0 — FR-131 honesty drop, Doc 06 v2.5.1 / commit `0a5c542`).** Sweep over the drop’s full UT set, every id read in its test file rather than taken from a summary. **`UT-0887`** (`apps/web/test/safety-surfaces.test.tsx`, 4 assertions) → **TC-3564** (banned words only when negated; never "private"/"secure"), **TC-3565** (FR-131 (a)/(b)/(c) stated; retired claims absent), **TC-3566** (the guard is bound to the shipped `en.ts` strings), **TC-3567** (the Arabic mirror carries the same truth) — one TC per assertion, because each is an independently defeatable guard. **`UT-0759`** (`packages/ui/test/PrivacyStatus.test.tsx`, 4 assertions over the `ver` **title** four-path) → **TC-3568**, one TC for the block, matching the TC-3475/UT-0758 treatment of the **subtitle** four-path in the same component. **`UT-0888`** (`packages/protocol/test/party-and-regions.test.js`, 1 assertion) → **TC-3569**. **Material orphan count for this drop: 0.** Two pre-existing mappings were also re-checked because the drop changed what their tests assert, and neither became stale: **`UT-0751`** → TC-3471 and **`UT-0753`** → TC-3488 both changed their expected `ver` title from "Verified — private" to "Verified"; both TC rows are written at a level the change does not falsify, and both now carry a v2.5.0 note saying so rather than relying on a reader to notice. No `TC` in this document cites a `UT-####` that does not exist in the repository. **Caveat inherited, not resolved here:** Doc 08 §10 `TD-RTM-01` records that `UT-0841`..`UT-0848` are each **defined twice** (`apps/web/test/party-creation.test.tsx` and `packages/sdk/test/proposals.test.js`), so any id-matching sweep is unsound for those eight. None of the six new cases cites one of them, so this drop’s zero is unaffected; renumbering is **engineer** scope and the defect stays open.
````

### OP 19 — docs/07-test-cases-suites.md — §9 — add run R-17 (619/619, 2026-09-06), discharging the carried "no confirmatory re-run" Low
FIND:
````
| **R-14** | 2026-08-29 | Doc 03 v2.8.1 Approved · Doc 07 v2.3.1 rework | **whole repository — `npm test` from the repo root** | **542 / 542 pass, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71. Re-run to confirm the v2.3.1 documentation corrections changed no behaviour: the FR-077 rows were misdescribed, not mis-tested | none |
````
REPLACE WITH:
````
| **R-14** | 2026-08-29 | Doc 03 v2.8.1 Approved · Doc 07 v2.3.1 rework | **whole repository — `npm test` from the repo root** | **542 / 542 pass, 0 failed** — contracts 95 · protocol 126 · sdk 220 · ui 14 · indexer 16 · web 71. Re-run to confirm the v2.3.1 documentation corrections changed no behaviour: the FR-077 rows were misdescribed, not mis-tested | none |
| **R-17** | 2026-09-06 | Doc 06 v2.5.1 Approved · commit `0a5c542` (PR #19, merged to `main`; repo `HEAD` `84e2203`) | **whole repository — `npm test` from the repo root** | **619 / 619 pass, 0 failed**, process exit 0 — contracts 95 · protocol **151** · sdk 244 · ui **18** · indexer 16 · web **95**. Suite total 610 → **619** (+9: UT-0887 4 web, UT-0759 4 ui, UT-0888 1 protocol). Per-package duration: contracts 34.29 s · protocol 505 ms · sdk 1.10 s · ui 767 ms · indexer 571 ms · web 2.81 s. **Executed by the tester** while authoring the FR-131 honesty TC rows; this is the confirmatory full-suite re-run the v2.4.2/v2.4.4 reviews recorded as missing (ISS-01 Low, now discharged). Working tree clean apart from `artifacts/memory-index.json`; `apps/web/tsconfig.tsbuildinfo` is untracked as of the Doc 06 v2.5.1 `chore(infra)` commit and was **not** dirtied by this run | none |
````

### OP 20 — docs/07-test-cases-suites.md — §10 exit summary — designed 465→471, automated 233→239, inherited 129→136, not-executed 16→15, defects 2→3; obs./Blocked/No-mech/Manual unchanged
FIND:
````
| Cases designed | **465** (row-anchor count; see §2 convention note for the 472 expanded total) |
| Cases with an implementing automated test | **233** (50%) — TS-CR1 and TS-GOV2 add zero automated tests; TS-SCAFFOLD adds 16 (R-04/R-05; TC-3488 added v2.2.1); TS-PARTY adds 28 (R-06/R-07/R-08; inherited from Doc 06 v2.2.0 Approved); TS-MEMBERSHIP adds 24 (R-09..R-12; inherited from Doc 06 v2.3.2 Approved, files observed green in R-12) |
| Cases executed and observed passing this session | **88** (72 from 2026-08-09 + 16 from TS-SCAFFOLD on 2026-08-25; TC-3488 maps UT-0753 already in the 14/14 run). TS-PARTY and TS-MEMBERSHIP are **not** counted here — see the §2 corroboration note: their files were observed green in R-12 (2026-08-29, 542/542) but their status is held at Pass (inh.) against the Doc 06 pin. |
| Cases inherited green from Doc 06 (contract suite, party-creation, membership and proposals suites) | **129** (55 from Doc 06 contract suite + 28 from TS-PARTY Doc 06 v2.2.0 Approved + 24 from TS-MEMBERSHIP Doc 06 v2.3.2 Approved + **22 from TS-PROPOSALS Doc 06 v2.4.1/v2.4.2**) |
| Cases automated but not executed this session (`apps/web` non-party-creation suite) | **16** |
| Cases **Blocked** (code, circuit, environment or instrument absent) | **175** (140 pre-TS-GOV2 + 32 from TS-GOV2 + 3 from TS-SCAFFOLD: TC-3476 enrolment disclosure affordance, TC-3481 FR-131 clause (d) notice — **now partially delivered at the parties-directory surface (TC-3534) but still Blocked for the SCR-13/SCR-14 ballot surfaces**, TC-3487 audit-contract publication). TS-MEMBERSHIP adds **0** Blocked cases. |
| Cases **No mechanism** (the product has nothing to test) | **49** (10 pre-TS-GOV2 + 38 from TS-GOV2: FR-074..FR-111 have no DES, Doc 03 §16 deliberate phasing; **+1 at v2.3.2: TC-3541**, the FR-077 adversarial amendment case — designed in Doc 03 §10.13.10.1, unbuilt, and the `PREREQ-01` closing evidence) |
| Cases **Manual — not run** | **12** |
| Observed test failures | **0** |
| Open defects raised by this document | **2** (TD-07-01 Medium, TD-07-02 Low — both documentation) |
````
REPLACE WITH:
````
| Cases designed | **471** (row-anchor count; see §2 convention note and Doc 08 §10 `TD-RTM-02` for the 478 expanded total. +6 at v2.5.0: TC-3564..TC-3569) |
| Cases with an implementing automated test | **239** (51%) — TS-CR1 and TS-GOV2 add zero automated tests; TS-SCAFFOLD adds 16 (R-04/R-05; TC-3488 added v2.2.1); TS-PARTY adds 28 (R-06/R-07/R-08; inherited from Doc 06 v2.2.0 Approved); TS-MEMBERSHIP adds 24 (R-09..R-12; inherited from Doc 06 v2.3.2 Approved, files observed green in R-12); the FR-131 honesty drop adds 6 (TC-3564..TC-3569; inherited from Doc 06 v2.5.1, files observed green in R-17) |
| Cases executed and observed passing this session | **88 — unchanged at v2.5.0** (72 from 2026-08-09 + 16 from TS-SCAFFOLD on 2026-08-25; TC-3488 maps UT-0753 already in the 14/14 run). TS-PARTY and TS-MEMBERSHIP are **not** counted here — see the §2 corroboration note: their files were observed green in R-12 (2026-08-29, 542/542) but their status is held at Pass (inh.) against the Doc 06 pin. **The same rule is applied to run R-17 (2026-09-06, 619/619 green, tester-executed): file granularity, so the six new TC-3564..TC-3569 are Pass (inh.) and this figure does not move.** Promoting it would make Pass (obs.) mean two different things. |
| Cases inherited green from Doc 06 (contract suite, party-creation, membership, proposals and FR-131 honesty suites) | **136** (55 from Doc 06 contract suite + 28 from TS-PARTY Doc 06 v2.2.0 Approved + 24 from TS-MEMBERSHIP Doc 06 v2.3.2 Approved + **22 from TS-PROPOSALS Doc 06 v2.4.1/v2.4.2** + **7 from the FR-131 honesty drop, Doc 06 v2.5.1** — the 6 new TC-3564..TC-3569 plus TC-2614, re-statused Not run → Pass (inh.) on R-17). 55 + 28 + 24 + 22 + 7 = 136 |
| Cases automated but not executed case-by-case (`apps/web` non-party-creation suite) | **15** (was 16; TC-2614 re-statused Pass (inh.) at v2.5.0). All 15 were executed **green** at file granularity in R-17 and are held at *Not run* pending a case-by-case pass — **TD-07-03** |
| Cases **Blocked** (code, circuit, environment or instrument absent) | **175** (140 pre-TS-GOV2 + 32 from TS-GOV2 + 3 from TS-SCAFFOLD: TC-3476 enrolment disclosure affordance, TC-3481 FR-131 clause (d) notice — **now partially delivered at the parties-directory surface (TC-3534) but still Blocked for the SCR-13/SCR-14 ballot surfaces**, TC-3487 audit-contract publication). TS-MEMBERSHIP adds **0** Blocked cases. |
| Cases **No mechanism** (the product has nothing to test) | **49** (10 pre-TS-GOV2 + 38 from TS-GOV2: FR-074..FR-111 have no DES, Doc 03 §16 deliberate phasing; **+1 at v2.3.2: TC-3541**, the FR-077 adversarial amendment case — designed in Doc 03 §10.13.10.1, unbuilt, and the `PREREQ-01` closing evidence) |
| Cases **Manual — not run** | **12** |
| Observed test failures | **0** |
| Open defects raised by this document | **3** (TD-07-01 Medium, TD-07-02 Low, TD-07-03 Low — all documentation / evidence-labelling; none is a product defect) |
````

### OP 21 — docs/07-test-cases-suites.md — §10 — counting-convention paragraph: apply the +6 delta and name its pre-existing staleness against TD-RTM-02
FIND:
````
**Counting convention — four-case automated-and-Blocked overlap (v2.1.0 fix; cycle-2 ISS-01 Low).** Four cases appear in both the 187-case 'implementing automated test' count and the 175-case 'Blocked' count: an implementing test harness exists for these cases but the required contracts or environment are not deployed in this drop, so they cannot execute. These 4 overlap cases are not individually identifiable by inspection of the suite-table summary (automated-test attribution and Blocked-status are not cross-referenced at case level in this document). Convention: **Distinct total = 187 (automated) + 171 (Blocked-only, i.e. 175 minus the 4 also in automated) + 48 (No mechanism) + 12 (Manual) = 418.** Equivalently: 187 + 175 + 48 + 12 − 4 = 418.
````
REPLACE WITH:
````
**Counting convention — four-case automated-and-Blocked overlap (v2.1.0 fix; cycle-2 ISS-01 Low).** Four cases appear in both the 187-case 'implementing automated test' count and the 175-case 'Blocked' count: an implementing test harness exists for these cases but the required contracts or environment are not deployed in this drop, so they cannot execute. These 4 overlap cases are not individually identifiable by inspection of the suite-table summary (automated-test attribution and Blocked-status are not cross-referenced at case level in this document). Convention: **Distinct total = 193 (automated) + 171 (Blocked-only, i.e. 175 minus the 4 also in automated) + 48 (No mechanism) + 12 (Manual) = 424.** Equivalently: 193 + 175 + 48 + 12 − 4 = 424. _(v2.5.0: the +6 from TC-3564..TC-3569 is applied to the automated term (187 → 193, total 418 → 424) so the paragraph stays internally consistent, and **the pre-existing staleness is named rather than inherited silently**: this paragraph’s base figures (187 automated, 48 No mechanism) are v2.1.0-era and already disagree with §2’s 239 and §10’s 49. It is a *third* convention alongside Doc 07 §2’s 471 and Doc 08 §6’s 478. Reconciling all three to one stated definition is the tester’s own owed work, tracked as **`TD-RTM-02`** in Doc 08 §10; it is not attempted in this version because it is a document-wide recount, not a side-effect of an FR-131 drop.)_
````

### OP 22 — docs/08-traceability-matrix.md — header — v2.7.0 → v2.8.0, Status In Review
FIND:
````
Version:       2.7.0
Status:        Approved — 08-traceability-matrix-v2.7.0-technical-cycle5.md (PASS 95%,
````
REPLACE WITH:
````
Version:       2.8.0
Status:        In Review — v2.8.0 (FR-131 honesty-drop traceability; Doc 06 v2.5.1 / Doc 07
               v2.5.0 sync). Awaiting a technical-mode document review. **No Must row closes at
               this version and no authoritative count moves — see the FR-131 ruling in the
               changelog, §3.1, §7 entry 117 and §9.**
               _(v2.7.0 record, retained:)_ Approved — 08-traceability-matrix-v2.7.0-technical-cycle5.md (PASS 95%,
````

### OP 23 — docs/08-traceability-matrix.md — header Source — CODE → v2.5.1, TC → v2.5.0, and an explicit note that the BKLG/MTP pins are stale
FIND:
````
Source:        SRS-TRUMOCRACY v2.16.3 (**Approved**) · SDD-TRUMOCRACY v2.11.2 (**Approved**) §5.2, §10.13.10.1, §10.13.13, §15, §16 · BKLG-TRUMOCRACY v2.3.0 (In Review) ·
               CODE-TRUMOCRACY v2.4.3 (**Approved**) · MTP-TRUMOCRACY v1.0.2 (In Review) ·
               TC-TRUMOCRACY v2.4.4 (**Approved**)
               _(v2.7.0: every pin now carries its status. Four of six are Approved; BKLG v2.3.0
               and MTP v1.0.2 are In Review — an unannotated pin to an unapproved source reads as
               settled evidence when it is not.)_
````
REPLACE WITH:
````
Source:        SRS-TRUMOCRACY v2.16.3 (**Approved**) · SDD-TRUMOCRACY v2.11.2 (**Approved**) §5.2, §10.13.10.1, §10.13.13, §15, §16 · BKLG-TRUMOCRACY v2.3.0 (In Review) ·
               CODE-TRUMOCRACY v2.5.1 (**Approved**) · MTP-TRUMOCRACY v1.0.2 (In Review) ·
               TC-TRUMOCRACY v2.5.0 (In Review — this version syncs to it)
               _(v2.7.0: every pin now carries its status. Four of six are Approved; BKLG v2.3.0
               and MTP v1.0.2 are In Review — an unannotated pin to an unapproved source reads as
               settled evidence when it is not.)_
               _(v2.8.0: CODE advanced v2.4.3 → **v2.5.1** and TC v2.4.4 → **v2.5.0**, both read for
               this version. The BKLG and MTP pins are **not** advanced and are now doubly stale —
               BKLG is at **v2.5.0 (Approved)** and MTP at **v1.3.0 (In Review as of 2026-09-06, its
               own FR-131 cascade)**, so the "In Review" annotation beside BKLG and the version beside
               MTP are both out of date. Note also that the SRS and SDD pins moved under this
               document today: **SDD is now v2.12.0 (In Review)**, carrying the §13 and §10.12.3
               FR-131 corrections and the new DES-094 **clause 9** title rule that TC-3568 verifies.
               All four are left as written rather
               than corrected in passing, because advancing a pin asserts the delta was read and it
               was not; the correct versions are named here so no reader is misled either way. A
               BKLG/MTP pin-sync is owed at the next version, together with the identical debt in
               Doc 07 §Source.)_
````

### OP 24 — docs/08-traceability-matrix.md — header — Last updated 2026-09-06 and the v2.8.0 changelog entry carrying the rule-by-rule FR-131 ruling
FIND:
````
Last updated:  2026-08-30
Changelog:     v2.7.0 (2026-08-30) — **Rework cycle 4 against
````
REPLACE WITH:
````
Last updated:  2026-09-06
Changelog:     v2.8.0 (2026-09-06) — **FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved;
               Doc 07 v2.5.0 sync; commit `0a5c542`, PR #19, merged to `main`). Evidence extended
               on four rows. NO Must row closes and NO authoritative count moves: Must **138** ·
               COMPLETE **16** · OPEN **122** (11.6%) — unchanged; stories meeting DoD **17 of 134**
               — unchanged.**
               **The FR-131 ruling, asked plainly and answered plainly: does 16 become 17? No.**
               FR-131 (SRS v2.16.3 §4.45) imposes eleven distinct obligations. Ruled one at a time
               against the evidence that now exists:
               **(1) notice displayed wherever a vote is cast, before the ballot is confirmed —
               NOT MET.** SCR-13 (ballot booth) and SCR-14 (post-vote confirmation) are not built
               (Doc 06 §7 #21). A notice cannot be shown wherever a vote is cast in a product where
               no vote can yet be cast. **(2) content clause (a) — MET at the copy layer**
               (UT-0887 → TC-3565): "not anonymous", "not receipt-free", "not coercion-resistant",
               en and ar. **(3) clause (b) — MET at the copy layer** (TC-3565; also TC-3535/UT-0869
               for the join copy). **(4) clause (c) — MET at the copy layer** (TC-3565).
               **(5) clause (d), the open-tier non-counting disclosure — MET AT TWO SURFACES, NOT AT
               THE BALLOT.** All four sub-clauses render non-dismissably before the refusal at the
               parties-directory counting surface (TC-3534/UT-0864) and at the proposals
               ballot-admission surface (UT-0881/UT-0882) — but clause (d) names "casting a binding
               vote", and that surface does not exist. **TC-3481 stays Blocked.** **(6) visible
               before confirmation — NOT VERIFIABLE.** There is no confirmation step for it to
               precede. **(7) non-dismissable, "the voter MUST acknowledge the notice to proceed" —
               NOT MET, and this one alone keeps the row open.** The banner is non-dismissable (no
               dismiss control, asserted), but it has **no acknowledge control at all**: there is
               nothing for the voter to acknowledge and nothing gating "proceed". Doc 06 §7 item
               26(d) records this explicitly as owed SCR-13 story scope, not as part of the defect
               fix. Even if every surface existed, this clause would still be unbuilt.
               **(8) WCAG 2.2 AA (DES-081) and screen-reader accessible — NOT EVIDENCED.** No
               automated a11y gate and no screen-reader pass exists; NFR-011 is G-UI. `role="note"`
               and UT-0704’s accessible name are not AA conformance. **(9) appears on SCR-13 and
               SCR-14 — NOT MET** (both unbuilt). **(10) closing sentence, the four banned words and
               the no-v2-guarantees claim — NOW MET for the swept code and GUARDED against
               regression**, which is what this drop actually bought: TC-3564..TC-3567 (rendered
               banner + en/ar source), TC-3568 (the `ver` title), TC-3569 (the flag description),
               over the engineer’s sweep of `packages/*/src` and `apps/web/src`. **Not** met as
               stated for "README and all public-facing materials" — no test covers those. The
               **document set** is now clean: Doc 03 §13 and Doc 04 A-02.6 both carried the retired
               framing and both were corrected on 2026-09-06 (Doc 03 v2.12.0, Doc 04 v1.3.0), and
               Doc 09 v1.5.0 moved `REL-LIM-18` to CLOSED. A whitespace-normalised sweep of `docs/`
               finds **zero live assertions** of the retired framing; every survivor is a quotation
               inside a correction record. **Stated precisely, because it bears on how much weight
               this evidence carries: all three of those versions are In Review, not Approved** — none
               has a passing neutral technical review yet — so the document-set cleanup is MADE but
               not SETTLED, and this row cites them as current corrected text rather than as approved
               sources. It changes no ruling above: FR-131 stays open on unbuilt controls and unbuilt
               surfaces, which no document review can alter. **(11) the seam half this row also tracks** (cast / silent change /
               deterministic tally-hash / refusal without `eligibilityRef` / embargo / audit-contract
               publication) — 5 of 6 pass at `IS_INSECURE_MOCK=true`; **TC-3487 is still Blocked**,
               as is TC-3476.
               **Verdict: FR-131 stays OPEN — G-PHASE3. Six of eleven obligations are unmet or
               unevidenced, and two of them are unmet by absence of the thing itself, not absence of
               a test.** Closing this row on a banned-words fix would be the single most misleading
               thing this matrix could do about FR-131, because the clause that most protects a
               voter — you must acknowledge before you proceed — is exactly the one still missing.
               **Must rows COMPLETE stays 16; OPEN stays 122; gap-log entry 117 stays live.**
               **Definition of Done — US-0134: NOT met, unchanged.** Its RTM row (FR-131) does not
               close, so by CLAUDE.md the story is not done. **Stories meeting DoD: 17 of 134 —
               unchanged.** US-0132 and US-0133 are likewise unaffected (FR-124, FR-122/FR-123 all
               stay OPEN).
               **Rows whose EVIDENCE changed (status unchanged in every case):** §3.1 **FR-131** —
               TC-3564..TC-3569 and UT-0887/UT-0759/UT-0888 added, ruling recorded in the row;
               §3.1 **FR-124** — TC-3568 added (the title half of the DES-094 clause-7 rule whose
               subtitle half TC-3475/UT-0758 already covered); §3.2 **NFR-011** — the UT-0753
               citation corrected (the file moved and its expected `aria-label` changed from
               "Verified — private" to "Verified"); §5 **RISK-02** — TC-3564..TC-3567 added, verdict
               still "not mitigated at v1".
               **Counts that moved, and only these:** §6 dashboard Test cases 472 → **478**
               designed, 217 → **224** with passing evidence (129 → **136** inh. · 88 obs.
               unchanged), 255 → **254** not executed or not executable; §9 suite figure
               610/610 → **619/619** on run **R-17** (2026-09-06, tester-executed, exit 0 —
               contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95) with its case
               split 224 + 15 + 232 = **471**. Every requirement-row count, gap code tally, DoD
               figure and gate verdict is **unchanged**, and is stated as unchanged rather than
               left to inference.
               **Two of the 14 formally accepted Lows are PAID, because this version was editing
               their lines anyway.** **L-13** — §6 published "472 / 255" and asserted Doc 07’s
               anchor count unqualified with no pointer to `TD-RTM-02`; the pointer is now in the
               line. **L-2** — the §4 ⚠ caveat was a blockquote placed *inside* the §4 table,
               splitting its last three rows (including the `TD-07-01` record) from their header;
               the table is now contiguous and the blockquote sits below it. **L-3** (§7 entry 82’s
               owner naming only Priya Raghunathan where it should name Tomás Ferreira as well) and
               the remaining eleven wording and cross-reference nits are **not** in any line this
               version touches and remain accepted-and-carried, unchanged.
               **`TD-RTM-01` (the duplicate `UT-0841`..`UT-0848` definitions) stays OPEN and
               untouched** — renumbering is product code and therefore engineer scope; none of the
               six new cases cites one of those eight ids, so this version’s orphan sweep is
               unaffected by it. **`TD-RTM-02` (the 465 / 471 / 478 denominator disagreement) also
               stays open**, and this version widens it by 6 on both sides rather than resolving it;
               the reconciliation is the tester’s owed work and is a document-wide recount, not a
               side-effect of an FR-131 drop.
               v2.7.0 (2026-08-30) — **Rework cycle 4 against
````

### OP 25 — docs/08-traceability-matrix.md — SUMMARY §Gate-2 verdict — record the FR-131 ruling and state explicitly that the counts did not move
FIND:
````
**Gate 2 cannot be approved today.** Of 138 gating Must rows, **16 close and 122
````
REPLACE WITH:
````
**Gate 2 cannot be approved today.** Of 138 gating Must rows, **16 close and 122

**v2.8.0 addendum (2026-09-06) — the FR-131 honesty drop, and why the numbers above did not move.** Doc 06 v2.5.1 (commit `0a5c542`) removed the retired "votes are anonymous but not receipt-free" framing from five shipped strings and one component title, and added three regression blocks (UT-0887, UT-0759, UT-0888) so it cannot return. Six new test cases (TC-3564..TC-3569) carry that evidence, and the suite runs **619/619 green**. **FR-131 nevertheless stays OPEN, and the Must count stays 16 of 138.** The clause the drop closed is FR-131’s *closing sentence* — the ban on four words. The clauses that keep the row open are structural: the notice must appear **wherever a vote is cast**, on **SCR-13 and SCR-14**, and the voter **must acknowledge it to proceed**. None of those three exists — the ballot surfaces are unbuilt (Doc 06 §7 #21) and the banner has **no acknowledge control at all** (Doc 06 §7 item 26(d)). This is the clearest example in the matrix of a genuinely good fix that closes no row, and it is recorded that way on purpose: a row that closes on the easy clause of a requirement teaches everyone downstream to read the hard clauses as optional. The full rule-by-rule ruling is in the changelog, in §3.1’s FR-131 row and in §7 entry 117.
````

### OP 26 — docs/08-traceability-matrix.md — §3.1 FR-131 — add TC-3564..TC-3569 and UT evidence, and record the rule-by-rule ruling that the row stays OPEN
FIND:
````
| BR-005, BR-009 | **FR-131** ballot seam with honest pre-action notices: cast records ballot without revealing direction; silent ballot-change (last cast counts); deterministic tally-hash for audit; cast refused without eligibilityRef; results embargo while ballot open; audit-contract publication | DES-096 · ADR-024 | none | EP-06 ▸ FE-058 ▸ US-0134 | TC-3476, TC-3481, TC-3482, TC-3483, TC-3484, TC-3485, TC-3486, TC-3487, TC-3534, TC-3535 | TC-3482..TC-3486 Pass (obs.) · UT-0770..UT-0776; TC-3534, TC-3535 Pass (inh.) · UT-0864, UT-0869 (**inh.** web Doc 06 v2.3.2); TC-3476/TC-3481/TC-3487 Blocked | ☐ **G-PHASE3** — DES-096 assigned; IS_INSECURE_MOCK=true; seam passes for cast/change/tally/refusal/embargo (5 TCs obs.); production ZK ballot pending Phase 3. **v2.3.0 — clause (d) is now BUILT, but only at one surface.** The four-clause non-dismissable open-tier notice is implemented and tested at the **parties-directory counting surface**: all four clauses (i)–(iv) render, the refusal comes **after** them inside the notice, `queryAllByRole('button')` within the notice is the **empty list** (no dismiss control), and the refused action changes nothing (UT-0864, TC-3534). Clause (b) is also closed as an honesty fix: the join copy no longer carries the v2-only claim "Nobody gets that list" and instead discloses that "our own records can link your account", rendered on every join panel (UT-0869, TC-3535). **TC-3481 stays Blocked and the row stays OPEN** — TC-3481 is written against the **ballot** surfaces SCR-13/SCR-14, which are not built in this drop (Doc 06 §7 #21), and TC-3487 (audit-contract endpoint) is still unwired. Partial delivery is recorded, not promoted to a close |
````
REPLACE WITH:
````
| BR-005, BR-009 | **FR-131** ballot seam with honest pre-action notices: cast records ballot without revealing direction; silent ballot-change (last cast counts); deterministic tally-hash for audit; cast refused without eligibilityRef; results embargo while ballot open; audit-contract publication | DES-096 · ADR-024 | none | EP-06 ▸ FE-058 ▸ US-0134 | TC-3476, TC-3481, TC-3482, TC-3483, TC-3484, TC-3485, TC-3486, TC-3487, TC-3534, TC-3535, **TC-3564, TC-3565, TC-3566, TC-3567, TC-3568, TC-3569** | TC-3482..TC-3486 Pass (obs.) · UT-0770..UT-0776; TC-3534, TC-3535 Pass (inh.) · UT-0864, UT-0869 (**inh.** web Doc 06 v2.3.2); TC-3476/TC-3481/TC-3487 Blocked; **TC-3564..TC-3567 Pass (inh.) · UT-0887** (web), **TC-3568 Pass (inh.) · UT-0759** (ui), **TC-3569 Pass (inh.) · UT-0888** (protocol) — all three **inh.** Doc 06 v2.5.1, observed green at file granularity in run R-17 (619/619, 2026-09-06) | ☐ **G-PHASE3** — DES-096 assigned; IS_INSECURE_MOCK=true; seam passes for cast/change/tally/refusal/embargo (5 TCs obs.); production ZK ballot pending Phase 3. **v2.3.0 — clause (d) is now BUILT, but only at one surface.** The four-clause non-dismissable open-tier notice is implemented and tested at the **parties-directory counting surface**: all four clauses (i)–(iv) render, the refusal comes **after** them inside the notice, `queryAllByRole('button')` within the notice is the **empty list** (no dismiss control), and the refused action changes nothing (UT-0864, TC-3534). Clause (b) is also closed as an honesty fix: the join copy no longer carries the v2-only claim "Nobody gets that list" and instead discloses that "our own records can link your account", rendered on every join panel (UT-0869, TC-3535). **TC-3481 stays Blocked and the row stays OPEN** — TC-3481 is written against the **ballot** surfaces SCR-13/SCR-14, which are not built in this drop (Doc 06 §7 #21), and TC-3487 (audit-contract endpoint) is still unwired. Partial delivery is recorded, not promoted to a close | **v2.8.0 — the closing sentence is now CLOSED and GUARDED; the row still does not close, and the reason is not a missing test.** Doc 06 v2.5.1 (commit `0a5c542`) removed the retired "anonymous but not receipt-free" framing from five shipped strings and one component title, and three regression blocks now hold the line: the rendered vote-surface banner carries no banned word except immediately negated and never "private"/"secure" (TC-3564), states (a), (b) and (c) positively with the retired claims absent (TC-3565), is bound to the shipped `en.ts` strings rather than a test copy (TC-3566), and the Arabic mirror carries the same truth (TC-3567); the `ver` badge title is backing-aware four-path with "Verified" as the fail-honest v1 default (TC-3568); the `maci_voting` flag description states the v1 truth (TC-3569). **Ruled rule by rule, FR-131 has eleven obligations and six are unmet or unevidenced.** Unmet **by absence of the thing itself, not by absence of a test**: (i) the notice must appear **wherever a vote is cast** and on **SCR-13/SCR-14** — neither surface is built (Doc 06 §7 #21), so TC-3481 stays Blocked; (ii) **"the voter MUST acknowledge the notice to proceed"** — the banner is non-dismissable but has **no acknowledge control at all**, recorded as owed SCR-13 story scope in Doc 06 §7 item 26(d). **Clause (7) alone keeps this row open even if every surface existed.** Unevidenced: "visible before confirmation" (no confirmation step to precede) and WCAG 2.2 AA + screen-reader (no a11y gate; NFR-011 is G-UI). Still Blocked in the seam half: TC-3487 (audit-contract publication) and TC-3476. **Closing this row on a banned-words fix would misrepresent the requirement, so it is not closed.**
````

### OP 27 — docs/08-traceability-matrix.md — §3.1 FR-124 — add TC-3568/UT-0759 (the title half of DES-094 clause 7); status unchanged
FIND:
````
| BR-009, BR-017, BR-006 | **FR-124** verified-status property is private to the holder; PrivacyStatus component refuses self-view; backing-aware 'ver' copy (absent/false/true/malformed `backing.isVerified` four-path coverage) | DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0132 | TC-3473, TC-3474, TC-3475 | TC-3473 Pass (obs.) · UT-0754..UT-0756; TC-3474 Pass (obs.) · UT-0757; TC-3475 Pass (obs.) · UT-0758 | ☐ **G-PHASE3** — DES-094 assigned; component passes for the UI layer; verified-status backend enforcement and full privacy guarantee pending |
````
REPLACE WITH:
````
| BR-009, BR-017, BR-006 | **FR-124** verified-status property is private to the holder; PrivacyStatus component refuses self-view; backing-aware 'ver' copy (absent/false/true/malformed `backing.isVerified` four-path coverage) | DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0132 | TC-3473, TC-3474, TC-3475, **TC-3568** | TC-3473 Pass (obs.) · UT-0754..UT-0756; TC-3474 Pass (obs.) · UT-0757; TC-3475 Pass (obs.) · UT-0758; **TC-3568 Pass (inh.) · UT-0759** (**inh.** ui Doc 06 v2.5.1, green in R-17) | ☐ **G-PHASE3** — DES-094 assigned; component passes for the UI layer; verified-status backend enforcement and full privacy guarantee pending | **v2.8.0 — evidence extended, status unchanged.** Until this drop only the **subtitle** half of the backing-aware `ver` copy was tested (UT-0758/TC-3475) while the **title** was hardcoded "Verified — private". UT-0759/TC-3568 gives the title the same four-path treatment (absent / `false` / `true` / malformed), with "Verified" as the fail-honest v1 default, and Doc 03 **v2.12.0** (2026-09-06) minted **DES-094 clause 9** to state that title rule normatively — so the chain link this evidence hangs on is an approved design element, not a test standing in for one. **The row stays OPEN for the reason it was already open** — the component passes at the UI layer; verified-status backend enforcement and the full privacy guarantee are unbuilt. A copy fix does not make a property private.
````

### OP 28 — docs/08-traceability-matrix.md — §3.1 Must FR subtotal — record explicitly that the subtotal is unchanged, and why
FIND:
````
**Must FR subtotal (v2.5.4): 114 rows · 16 complete · 98 open.** _(Corrected v2.5.4 — the line had been left at its v2.2.2 values, "12 complete · 102 open", through four drops that closed rows. The 16 complete are the 15 rows marked ✅ **COMPLETE** plus FR-051, marked ✅ **COMPLETE (conditional)**. Reconciles with §6: 98 open FRs + 24 open NFRs (§3.2 has no complete row) = **122 open** of **138** Must.)_
````
REPLACE WITH:
````
**Must FR subtotal (v2.5.4): 114 rows · 16 complete · 98 open.** _(Corrected v2.5.4 — the line had been left at its v2.2.2 values, "12 complete · 102 open", through four drops that closed rows. The 16 complete are the 15 rows marked ✅ **COMPLETE** plus FR-051, marked ✅ **COMPLETE (conditional)**. Reconciles with §6: 98 open FRs + 24 open NFRs (§3.2 has no complete row) = **122 open** of **138** Must.)_ _(**v2.8.0: UNCHANGED — 114 · 16 · 98 — and stated rather than left to inference.** The FR-131 honesty drop extended the evidence on FR-131 and FR-124 and closed neither, so no row moved in either direction. The check was made row by row, not assumed: FR-131 fails six of its eleven obligations (see its row and §7 entry 117); FR-124 gains the title half of its DES-094 clause-7 coverage but its backend enforcement is still unbuilt. No other Must FR row cites `UT-0887`, `UT-0759` or `UT-0888`.)_
````

### OP 29 — docs/08-traceability-matrix.md — §3.2 NFR-011 — correct the stale UT-0753 line citation and record its changed expectation; status unchanged
FIND:
````
| BR-007 | **NFR-011** WCAG 2.2 AA | DES-081 | US-0045, US-0070, US-0132 | TC-2250–TC-2255, TC-3488 | UT-0704, UT-0721 (two components, not executed); TC-3488 Pass (obs.) · UT-0753 (accessible-name aria-label, packages/ui/test/PrivacyStatus.test.tsx line 46) | ☐ **G-UI** — no automated a11y gate; no manual screen-reader pass has been performed (DES-081 assigned in v1.1.0, closing G-TRACE); TC-3488/UT-0753 (TS-SCAFFOLD accessible-name check) pass; full WCAG 2.2 AA automation gate and screen-reader pass remain pending |
````
REPLACE WITH:
````
| BR-007 | **NFR-011** WCAG 2.2 AA | DES-081 | US-0045, US-0070, US-0132 | TC-2250–TC-2255, TC-3488 | UT-0704, UT-0721 (two components, not executed); TC-3488 Pass (obs.) · UT-0753 (accessible-name aria-label, `packages/ui/test/PrivacyStatus.test.tsx` line **51** — line 46 at v2.7.0; the file moved at Doc 06 v2.5.1) | ☐ **G-UI** — no automated a11y gate; no manual screen-reader pass has been performed (DES-081 assigned in v1.1.0, closing G-TRACE); TC-3488/UT-0753 (TS-SCAFFOLD accessible-name check) pass; full WCAG 2.2 AA automation gate and screen-reader pass remain pending | _(**v2.8.0 — citation corrected, status unchanged.** UT-0753’s expected `aria-label` changed from "Verified — private" to **"Verified"** at Doc 06 v2.5.1, because FR-131 bans "private" as a description of v1 voting; the accessible name still matches the displayed state title, so what TC-3488 verifies is untouched — only the string it lands on changed. Re-confirmed green in run R-17 (`packages/ui` 18/18). The row stays **G-UI**: one component-level accessible-name check is not a WCAG 2.2 AA gate, and no screen-reader pass has been performed.)_
````

### OP 30 — docs/08-traceability-matrix.md — §4 — pay L-2 (move the ⚠ blockquote out of the table) and add the v2.8.0 orphan sweep for UT-0887/0759/0888
FIND:
````
| `UT` in the repository with no `TC` mapping | **0 material** — all 288 observed/inherited tests fall inside a mapped group. ⚠ Same caveat |

> ⚠ **This check is not currently sound for `UT-0841`..`UT-0848` — see §10 `TD-RTM-01`.** Those
> eight ids are each **defined twice**, in `apps/web/test/party-creation.test.tsx` and
> `packages/sdk/test/proposals.test.js`. Every check in this table matches ids across files, so an
> id with two definitions resolves to whichever the checker happened to find: a "citing a
> non-existent `UT`" test cannot fail on a duplicate, and an orphan check cannot see one. **Both
> zeroes above are therefore correct for every id except those eight, and undetermined for those.**
> No RTM row's status is affected — both files exist and pass, and each citing row's evidence is
> real — but a Gate-2 verifier who starts at §4, as they are meant to, would otherwise take these
> zeroes as unconditional. **The check regains its soundness when the engineer renumbers the
> collision.** _(v2.7.0: added. §10 had warned since v2.5.4 that the collision corrupts exactly
> this check, and §4 carried no pointer to it for four review cycles.)_
| `UT` ranges present in code but **missing from the Doc 06 §3 inventory** | **2** — `UT-0600…0612` (deployment safety, 13 tests) and `UT-0700…0742` (`apps/web`, 16 tests). Raised as **TD-07-01** (Medium), owner engineer |
| `UT` ranges reserved but empty | `UT-2000…2499` circuits — **no suite exists**, circuits uncompiled |
| Regression tests for the four Doc 06 §5 defects, all carried as first-class cases | **Yes** — TC-2603 (`UT-0325/0326`), TC-2600 (`UT-0109/0109b`), TC-2641 (`UT-0109c`), TC-1610 (`UT-0360/0361`) |
````
REPLACE WITH:
````
| `UT` in the repository with no `TC` mapping | **0 material** — all 288 observed/inherited tests fall inside a mapped group. ⚠ Same caveat | _(v2.8.0: the FR-131 honesty drop’s three blocks — `UT-0887` (web, 4), `UT-0759` (ui, 4), `UT-0888` (protocol, 1) — are mapped to TC-3564..TC-3569 in Doc 07 §8 and are inside the sweep. The **288** figure is the v2.7.0 observed/inherited population and has **not** been re-derived at this version, so it is annotated rather than advanced; re-deriving it belongs with the `TD-RTM-02` recount.)_
| `UT` ranges present in code but **missing from the Doc 06 §3 inventory** | **2** — `UT-0600…0612` (deployment safety, 13 tests) and `UT-0700…0742` (`apps/web`, 16 tests). Raised as **TD-07-01** (Medium), owner engineer |
| `UT` ranges reserved but empty | `UT-2000…2499` circuits — **no suite exists**, circuits uncompiled |
| Regression tests for the four Doc 06 §5 defects, all carried as first-class cases | **Yes** — TC-2603 (`UT-0325/0326`), TC-2600 (`UT-0109/0109b`), TC-2641 (`UT-0109c`), TC-1610 (`UT-0360/0361`) |

> ⚠ **This check is not currently sound for `UT-0841`..`UT-0848` — see §10 `TD-RTM-01`.** Those
> eight ids are each **defined twice**, in `apps/web/test/party-creation.test.tsx` and
> `packages/sdk/test/proposals.test.js`. Every check in this table matches ids across files, so an
> id with two definitions resolves to whichever the checker happened to find: a "citing a
> non-existent `UT`" test cannot fail on a duplicate, and an orphan check cannot see one. **Both
> zeroes above are therefore correct for every id except those eight, and undetermined for those.**
> No RTM row's status is affected — both files exist and pass, and each citing row's evidence is
> real — but a Gate-2 verifier who starts at §4, as they are meant to, would otherwise take these
> zeroes as unconditional. **The check regains its soundness when the engineer renumbers the
> collision.** _(v2.7.0: added. §10 had warned since v2.5.4 that the collision corrupts exactly
> this check, and §4 carried no pointer to it for four review cycles.)_
> _(v2.8.0: **L-2 paid.** This blockquote was placed **inside** the §4 table, between the third and fourth rows, so the last three rows — including the `TD-07-01` record — rendered detached from their header. It now sits below a contiguous table. It was one of the 14 Lows formally accepted at v2.7.0 and marked "fix first on any future touch"; this version was editing these lines, so it is fixed here rather than carried a sixth cycle.)_

**v2.8.0 sweep — FR-131 honesty drop (Doc 06 v2.5.1, commit `0a5c542`).** Every id was read in its test file. `UT-0887` → TC-3564, TC-3565, TC-3566, TC-3567 (one TC per independently defeatable assertion); `UT-0759` → TC-3568 (one TC for the four-path block, matching TC-3475/UT-0758 for the subtitle half of the same rule); `UT-0888` → TC-3569. **Material orphan count for this drop: 0.** Two existing mappings were re-checked because the drop changed what their tests assert — `UT-0751` → TC-3471 and `UT-0753` → TC-3488, both of which moved their expected `ver` title from "Verified — private" to "Verified" — and neither TC became false; both now carry a note in Doc 07 §5.3 saying so. **The `TD-RTM-01` caveat above does not touch this drop:** none of the six new cases cites `UT-0841`..`UT-0848`.
````

### OP 31 — docs/08-traceability-matrix.md — §5 RISK-02 — add TC-3564–TC-3567 to the control evidence; verdict unchanged
FIND:
````
| RISK-02 Coercion & vote-buying | DES-023, DES-024, DES-063 | TC-2610–TC-2614 | **Not mitigated at v1** — MACI is Phase 3 (OPEN-01); the client discloses the limitation |
````
REPLACE WITH:
````
| RISK-02 Coercion & vote-buying | DES-023, DES-024, DES-063 | TC-2610–TC-2614, **TC-3564–TC-3567** | **Not mitigated at v1** — MACI is Phase 3 (OPEN-01); the client discloses the limitation. **v2.8.0: the disclosure itself is now regression-guarded** (TC-3564..TC-3567 / UT-0887) after Doc 06 v2.5.1 found the shipped copy asserting the *opposite* of the disclosure — "Your vote is private" / "Nobody can see that a vote was yours". **This changes the verdict not at all:** an honest warning is still a warning, not a control. It does close a real hole in the control set, because a disclosure control whose text can silently regress is not a control |
````

### OP 32 — docs/08-traceability-matrix.md — §6 dashboard — Test cases 472 → 478 designed, 217 → 224 with passing evidence, 255 → 254 gaps
FIND:
````
| Test cases | 472 | 472 | 217 with passing evidence (129 inh. · 88 obs.) | 255 not executed or not executable |
````
REPLACE WITH:
````
| Test cases | 478 | 478 | 224 with passing evidence (136 inh. · 88 obs.) | 254 not executed or not executable |
````

### OP 33 — docs/08-traceability-matrix.md — §6 — add the v2.8.0 count derivation and pay L-13 (the missing TD-RTM-02 pointer)
FIND:
````
**TC count convention (Test cases row — v2.5.4 reconciliation; ISS-01 carried since v2.5.0 now FIXED, together with a second arithmetic error found at v2.5.3 review):** Doc 07 at **v2.4.4** uses **463 TC row anchors** = 299 original + 70 TS-GOV2 + 19 TS-SCAFFOLD + **29 TS-PARTY, incl. the newly minted TC-3541** + 24 TS-MEMBERSHIP + **22 TS-PROPOSALS** (TC-3542..TC-3563). _(Both errors corrected here. **(i)** The breakdown previously omitted the 22 TS-PROPOSALS anchors and summed to **441** while asserting 463 — the pre-proposals breakdown left standing under the post-proposals total. **(ii)** The evidence line previously opened "The 195 'with passing evidence' = 107 + 88", the pre-proposals figures, contradicting the authoritative dashboard beside it. Neither was ever load-bearing — the dashboard and §3 tables were right throughout — but a convention note that cannot be added up teaches a reader to distrust the table it explains, which is why it is not carried a third time.)_ This dashboard uses the **expanded** convention: 463 − 1 + 10 = **472 designed test cases** (one anchor TC-3200-TC-3209 expands to 10 exploratory charters; see Doc 07 §2 convention note). The **217** 'with passing evidence' = **129 Pass (inh.) + 88 Pass (obs.)** per Doc 07 §2 footer; the inherited bucket is 55 contract suite + 28 TS-PARTY (Doc 06 v2.2.0) + **22 TS-PROPOSALS** (Doc 06 v2.4.2) + **24 TS-MEMBERSHIP** (TC-3517..TC-3540; sdk/web membership suites inherited from Doc 06 v2.3.2 Approved, R-09..R-12 2026-08-29). The 255 'not executed or not executable' = 472 − 217 = 255, **unchanged across both recent drops**: every TS-MEMBERSHIP case (24) and every TS-PROPOSALS case (22) carries passing evidence and none is Blocked, so neither drop added to this bucket. `TC-3541` is the one exception — **No mechanism**, so it joins this bucket rather than the passing-evidence one. _(v2.7.0: this sentence had accumulated **two** conflicting trailing clauses across drops — "because all **20** TS-PROPOSALS cases…" followed by "**unchanged**, because all **24** new cases…", each a leftover from a different drop, giving two different reasons for one figure and two different counts. Carried five cycles as a Low. Merged into one statement covering both drops; the arithmetic was never in doubt.)_ **Honesty note:** the tester executed the full suite on 2026-08-29 during the Doc 06 v2.3.2 cycle-3 review and observed **542/542 green**, which covers every TS-PARTY and TS-MEMBERSHIP file; those cases are nevertheless counted in the **inh.** bucket, not promoted to **obs.**, because the observation was at file granularity during a review run rather than case-by-case (Doc 07 §2 corroboration note). The count understates the evidence rather than overstating it.
````
REPLACE WITH:
````
**TC count convention (Test cases row — v2.5.4 reconciliation; ISS-01 carried since v2.5.0 now FIXED, together with a second arithmetic error found at v2.5.3 review):** Doc 07 at **v2.4.4** uses **463 TC row anchors** = 299 original + 70 TS-GOV2 + 19 TS-SCAFFOLD + **29 TS-PARTY, incl. the newly minted TC-3541** + 24 TS-MEMBERSHIP + **22 TS-PROPOSALS** (TC-3542..TC-3563). _(Both errors corrected here. **(i)** The breakdown previously omitted the 22 TS-PROPOSALS anchors and summed to **441** while asserting 463 — the pre-proposals breakdown left standing under the post-proposals total. **(ii)** The evidence line previously opened "The 195 'with passing evidence' = 107 + 88", the pre-proposals figures, contradicting the authoritative dashboard beside it. Neither was ever load-bearing — the dashboard and §3 tables were right throughout — but a convention note that cannot be added up teaches a reader to distrust the table it explains, which is why it is not carried a third time.)_ This dashboard uses the **expanded** convention: 463 − 1 + 10 = **472 designed test cases** (one anchor TC-3200-TC-3209 expands to 10 exploratory charters; see Doc 07 §2 convention note). The **217** 'with passing evidence' = **129 Pass (inh.) + 88 Pass (obs.)** per Doc 07 §2 footer; the inherited bucket is 55 contract suite + 28 TS-PARTY (Doc 06 v2.2.0) + **22 TS-PROPOSALS** (Doc 06 v2.4.2) + **24 TS-MEMBERSHIP** (TC-3517..TC-3540; sdk/web membership suites inherited from Doc 06 v2.3.2 Approved, R-09..R-12 2026-08-29). The 255 'not executed or not executable' = 472 − 217 = 255, **unchanged across both recent drops**: every TS-MEMBERSHIP case (24) and every TS-PROPOSALS case (22) carries passing evidence and none is Blocked, so neither drop added to this bucket. `TC-3541` is the one exception — **No mechanism**, so it joins this bucket rather than the passing-evidence one. _(v2.7.0: this sentence had accumulated **two** conflicting trailing clauses across drops — "because all **20** TS-PROPOSALS cases…" followed by "**unchanged**, because all **24** new cases…", each a leftover from a different drop, giving two different reasons for one figure and two different counts. Carried five cycles as a Low. Merged into one statement covering both drops; the arithmetic was never in doubt.)_ **Honesty note:** the tester executed the full suite on 2026-08-29 during the Doc 06 v2.3.2 cycle-3 review and observed **542/542 green**, which covers every TS-PARTY and TS-MEMBERSHIP file; those cases are nevertheless counted in the **inh.** bucket, not promoted to **obs.**, because the observation was at file granularity during a review run rather than case-by-case (Doc 07 §2 corroboration note). The count understates the evidence rather than overstating it.

**v2.8.0 update to the convention note, and `TD-RTM-02` is the point of it.** Doc 07 at **v2.5.0** mints six cases (TC-3564..TC-3569), so its anchor count moves 463 → **469** and this dashboard’s expanded figure 472 → **478** (469 − 1 + 10). Passing evidence moves 217 → **224**: +6 for the new cases and +1 for TC-2614, re-statused *Not run* → Pass (inh.) in Doc 07 v2.5.0 on the R-17 result. The inherited bucket therefore moves 129 → **136** and the observed bucket stays **88** — run R-17 (2026-09-06, 619/619, tester-executed) was observed at **file** granularity, and Doc 07 §2’s corroboration convention records such cases as Pass (inh.) rather than promoting them. Gaps: 478 − 224 = **254**. ⚠ **These figures are stated in ONE of three live conventions and must not be quoted across sections.** `TD-RTM-02` (§10) records that Doc 07 §2 counts **471**, this dashboard counts **478**, and Doc 07 §10’s overlap paragraph counts on a third base again; the three disagree by construction and the disagreement is **unresolved**. _(v2.8.0: **L-13 paid.** v2.7.0 published "472 / 255" and asserted Doc 07’s anchor count unqualified, with no pointer to `TD-RTM-02` — the mirror image of the §4→§10 defect v2.7.0 itself closed. It was formally accepted and flagged "fix first on any future touch"; this version was editing the line, so the pointer is now in it. What is **not** fixed is the underlying disagreement — widening it by 6 on both sides is what a sync version can honestly do; reconciling it is a document-wide recount the tester owes.)_
````

### OP 34 — docs/08-traceability-matrix.md — §6 — add the v2.8.0 DoD check: US-0134 not done, stories stay 17 of 134
FIND:
````
**v2.4.0 DoD check (DES paydown) — one story newly qualifies.** **US-0131 (provisional membership cap) now meets DoD**: FR-130 closes at v2.4.0, so its chain `BR-002/BR-012 → FR-130 → DES-102 → SCR-09/SCR-11 → US-0131 → TC-3511..TC-3516/TC-3528/TC-3529` closes end to end. It moves from **Status: Partial** to **done**, taking the total from 13 to **14 of 134**. **US-0087 (non-violence clause) does NOT qualify** — FR-077 stays OPEN (G-NOMECH: the amendment half of its guarantee has no mechanism at either tier), so US-0087 remains **Partial**: its publication-half logic and UI are complete and tested, but its Must row does not close. No other story is affected by this increment.
````
REPLACE WITH:
````
**v2.4.0 DoD check (DES paydown) — one story newly qualifies.** **US-0131 (provisional membership cap) now meets DoD**: FR-130 closes at v2.4.0, so its chain `BR-002/BR-012 → FR-130 → DES-102 → SCR-09/SCR-11 → US-0131 → TC-3511..TC-3516/TC-3528/TC-3529` closes end to end. It moves from **Status: Partial** to **done**, taking the total from 13 to **14 of 134**. **US-0087 (non-violence clause) does NOT qualify** — FR-077 stays OPEN (G-NOMECH: the amendment half of its guarantee has no mechanism at either tier), so US-0087 remains **Partial**: its publication-half logic and UI are complete and tested, but its Must row does not close. No other story is affected by this increment.

**v2.8.0 DoD check (FR-131 honesty drop) — no story newly meets the bar; the count stays 17 of 134.** Checked story by story rather than assumed, because this drop shipped visible user-facing correctness and it would be easy to reward it with a status it has not earned. **US-0134** (ballot seam and honest pre-action notices) is the story the drop was built under and it is **NOT done**: CLAUDE.md makes a story done only when its RTM row completes, and FR-131 stays OPEN on six of its eleven obligations — most sharply the acknowledge-to-proceed control, which does not exist, and the SCR-13/SCR-14 ballot surfaces, which are unbuilt. US-0134 moves from *not done* to *not done with materially better evidence*, which is not a DoD state. **US-0132** (PrivacyStatus) is **not done** — FR-124 stays OPEN; TC-3568 closes the title half of DES-094 clause 7, not the backend enforcement the row waits on. **US-0133** is **not done** — FR-122/FR-123 remain stub-gated at `IS_INSECURE_MOCK=true` and are untouched by this drop. No other story cites `UT-0887`, `UT-0759` or `UT-0888`. **Stories meeting DoD: 17 of 134 — unchanged.**
````

### OP 35 — docs/08-traceability-matrix.md — §7 — add the v2.8.0 gap-log header update (entry 117 updated, nothing retired, counts unchanged)
FIND:
````
**v2.5.1 update (2026-08-29):** **Entry 71 (FR-080) RETIRED** — the row closes. The v2.5.0 finding was acted on rather than filed: the engineer built the two-step consent event and the architect bound SCR-15/SCR-12, so both the rule-4 and rule-1 failures are gone. Open Must rows 123 → **122**; G-NOMECH 14 → **13**. Worth recording as a pattern: of the five G-NOMECH reclassifications this matrix has made, this is the first to be **fixed within the same day it was raised** — the finding was specific enough to act on, which is what a gap note is for.
````
REPLACE WITH:
````
**v2.8.0 update (2026-09-06):** **Entry 117 (FR-131) updated; NO entry is retired and NO entry is added.** The FR-131 honesty drop (Doc 06 v2.5.1, commit `0a5c542`; Doc 07 v2.5.0 TC-3564..TC-3569) closes FR-131’s **closing sentence** — the ban on "private" / "anonymous" / "receipt-free" / "secure" as descriptions of v1 voting — and guards it with three regression blocks. **The row stays OPEN and the reason it stays open is not a missing test:** the notice must appear wherever a vote is cast and on SCR-13/SCR-14, neither of which is built, and "the voter MUST acknowledge the notice to proceed" has **no acknowledge control at all** (Doc 06 §7 item 26(d)). Open Must rows **122 — unchanged**; G-PHASE3 **47 — unchanged**. Recorded as a pattern worth naming beside the v2.4.0 and v2.5.0 ones: **a shipped fix can be entirely correct, materially improve the product, and close no row** — the test for closure is whether every clause of the stated guarantee holds, not whether the drop was good work.
**v2.5.1 update (2026-08-29):** **Entry 71 (FR-080) RETIRED** — the row closes. The v2.5.0 finding was acted on rather than filed: the engineer built the two-step consent event and the architect bound SCR-15/SCR-12, so both the rule-4 and rule-1 failures are gone. Open Must rows 123 → **122**; G-NOMECH 14 → **13**. Worth recording as a pattern: of the five G-NOMECH reclassifications this matrix has made, this is the first to be **fixed within the same day it was raised** — the finding was specific enough to act on, which is what a gap note is for.
````

### OP 36 — docs/08-traceability-matrix.md — §7 entry 117 — record the closed clause, the six unmet obligations, and the sharpened blocking cause
FIND:
````
| 117 | FR-131 | G-PHASE3 | DES-096/ADR-024 assigned; IS_INSECURE_MOCK=true; TC-3482..TC-3486 Pass (obs.) at seam level. **v2.3.0: clause (d) is BUILT and tested at the parties-directory counting surface** (TC-3534/UT-0864 — four clauses, refusal after them, no dismiss control) and **clause (b) honesty copy is fixed** (TC-3535/UT-0869). **TC-3481 stays Blocked** because it is written against the **SCR-13/SCR-14 ballot** surfaces, unbuilt in this drop (Doc 06 §7 #21); TC-3476 and TC-3487 still Blocked; production ZK ballot pending | Samuel Oyelaran | Phase 3 |
````
REPLACE WITH:
````
| 117 | FR-131 | G-PHASE3 | DES-096/ADR-024 assigned; IS_INSECURE_MOCK=true; TC-3482..TC-3486 Pass (obs.) at seam level. **v2.3.0: clause (d) is BUILT and tested at the parties-directory counting surface** (TC-3534/UT-0864 — four clauses, refusal after them, no dismiss control) and **clause (b) honesty copy is fixed** (TC-3535/UT-0869). **TC-3481 stays Blocked** because it is written against the **SCR-13/SCR-14 ballot** surfaces, unbuilt in this drop (Doc 06 §7 #21); TC-3476 and TC-3487 still Blocked; production ZK ballot pending **v2.8.0 (FR-131 honesty drop, Doc 06 v2.5.1, commit `0a5c542`): the closing sentence is CLOSED and regression-guarded — TC-3564..TC-3567/UT-0887 (rendered banner: banned words only when negated, never "private"/"secure"; (a)/(b)/(c) stated; guard bound to the shipped `en.ts` strings; Arabic mirror honest), TC-3568/UT-0759 (`ver` title backing-aware four-path, "Verified" as the fail-honest v1 default), TC-3569/UT-0888 (`maci_voting` description). Suite 619/619 green in R-17. THE ROW STILL DOES NOT CLOSE, ruled clause by clause: of FR-131’s eleven obligations, (a), (b), (c) and the closing sentence are met at the copy layer, and six are not — the notice cannot be shown "wherever a vote is cast" or on SCR-13/SCR-14 (unbuilt, Doc 06 §7 #21); "visible before confirmation" has no confirmation step to precede; WCAG 2.2 AA and screen-reader access are unevidenced (NFR-011 is G-UI); clause (d) is built at the parties-directory and proposals-admission surfaces but not at the binding-vote surface (TC-3481 Blocked); TC-3487 audit-contract publication and TC-3476 stay Blocked. **The blocking cause in one line, unchanged in substance and sharpened in fact: "the voter MUST acknowledge the notice to proceed" has no acknowledge control at all — the banner is non-dismissable but nothing gates proceeding (Doc 06 §7 item 26(d), owed SCR-13 story scope) — and the ballot surfaces the notice must appear on are unbuilt.** | Samuel Oyelaran (acknowledge control + ballot surfaces, SCR-13 story scope) · Nadia Hassan (FR-131 owner) | Phase 3 |
````

### OP 37 — docs/08-traceability-matrix.md — §9 — advance the tests-green row to run R-17 (619/619) and the 224 / 15 / 232 = 471 split
FIND:
````
| Tests green across the requirement set | all | **610/610 green repo-wide (2026-08-30)** — contracts 95 · protocol 150 · sdk 244 · ui 14 · indexer 16 · web 91; of the RTM's own cases, **217 of 465 carry passing evidence**; **16** have an implementing automated test that was **not executed** this session; **232 cannot execute** at all (Blocked or no mechanism). 217 + 16 + 232 = **465**. Seam tests are still IS_INSECURE_MOCK=true. **Denominator note (added v2.7.0) — the two sections do NOT share a denominator, and the gap is not yet explained.** This row counts against **465**, Doc 07 v2.4.4 §2's total. §6's dashboard counts against **472**, derived there as 463 anchors − 1 + 10 (the `TC-3200`-`TC-3209` range expanding to 10 charters). **These differ by 7 and the difference is UNRECONCILED.** Doc 07 describes its own 465 as the *expanded* count with that same range already listed as 10 individual cases, which would imply 456 anchors, not 463 — so the two documents do not agree on either figure. Consequently §6's "**255** not executed or not executable" (= 472 − 217) and this row's "**232** cannot execute" are **different measures over different denominators and must not be reconciled to each other**; the 16 automated-but-unexecuted cases also fall inside §6's 255 and outside this row's 232. **What is NOT in doubt:** 217 with passing evidence, and the 610/610 suite — both re-derived independently at three reviews. **Owed:** the tester owns Doc 07 and Doc 08 and must reconcile the two conventions to one stated definition, recorded as **TD-RTM-02** in §10. _(The §6/§9 denominator mismatch was raised as a carried Low across cycles; stating it as "both correct in their own convention" would have been the comfortable answer and is not supportable — 456 ≠ 463.)_ _(**v2.6.0 — corrected twice.** Before v2.5.4 this read "542/542 … 195 of 449 … 127 cannot execute", the figures from before the proposals & debate drop, stale on four of six packages. v2.5.4 fixed the suite total but then wrote "**233** of 465 carry passing evidence", **mislabelling Doc 07's figure**: Doc 07 §2 reports 233 as cases with an *implementing automated test*, of which **16 `apps/web` cases exist but were not executed**. Crediting all 233 with passing evidence claimed evidence for 16 cases that have none, and simultaneously reported 23 fewer unexecutable cases than this document's own §6 dashboard. 233 − 16 = **217**, which is exactly what §6 says — the two now agree.)_ **A green suite is not a closed matrix:** the suite proves the code does what it was built to do, not that every Must requirement has been built | **FAIL** |
````
REPLACE WITH:
````
| Tests green across the requirement set | all | **619/619 green repo-wide (2026-09-06, run R-17, tester-executed, exit 0)** — contracts 95 · protocol **151** · sdk 244 · ui **18** · indexer 16 · web **95**; of the RTM's own cases, **224 of 471 carry passing evidence**; **15** have an implementing automated test that was **not executed case-by-case** (all 15 ran green at file granularity in R-17 — Doc 07 `TD-07-03`); **232 cannot execute** at all (Blocked or no mechanism). 224 + 15 + 232 = **471**. _(v2.8.0: was 610/610 at 2026-08-30 with 217 + 16 + 232 = 465. The +9 tests are the FR-131 guard blocks UT-0887/UT-0759/UT-0888; the +6 cases are TC-3564..TC-3569; the 16 → 15 is TC-2614 re-statused Not run → Pass (inh.).)_ Seam tests are still IS_INSECURE_MOCK=true. **Denominator note (added v2.7.0) — the two sections do NOT share a denominator, and the gap is not yet explained.** This row counts against **471**, Doc 07 v2.5.0 §2's total (was 465 at v2.4.4). §6's dashboard counts against **478**, derived there as 469 anchors − 1 + 10 (was 472 from 463 anchors) (the `TC-3200`-`TC-3209` range expanding to 10 charters). **These differ by 7 and the difference is UNRECONCILED.** Doc 07 describes its own 465 as the *expanded* count with that same range already listed as 10 individual cases, which would imply 456 anchors, not 463 — so the two documents do not agree on either figure. Consequently §6's "**254** not executed or not executable" (= 478 − 224) and this row's "**232** cannot execute" are **different measures over different denominators and must not be reconciled to each other**; the 15 automated-but-unexecuted cases also fall inside §6's 254 and outside this row's 232. **What is NOT in doubt:** 224 with passing evidence, and the 619/619 suite — the suite figure was executed and read from the run output by the tester on 2026-09-06 (R-17), package by package. **Owed:** the tester owns Doc 07 and Doc 08 and must reconcile the two conventions to one stated definition, recorded as **TD-RTM-02** in §10. _(The §6/§9 denominator mismatch was raised as a carried Low across cycles; stating it as "both correct in their own convention" would have been the comfortable answer and is not supportable — 456 ≠ 463.)_ _(**v2.6.0 — corrected twice.** Before v2.5.4 this read "542/542 … 195 of 449 … 127 cannot execute", the figures from before the proposals & debate drop, stale on four of six packages. v2.5.4 fixed the suite total but then wrote "**233** of 465 carry passing evidence", **mislabelling Doc 07's figure**: Doc 07 §2 reports 233 as cases with an *implementing automated test*, of which **16 `apps/web` cases exist but were not executed**. Crediting all 233 with passing evidence claimed evidence for 16 cases that have none, and simultaneously reported 23 fewer unexecutable cases than this document's own §6 dashboard. 233 − 16 = **217**, which is exactly what §6 says — the two now agree.)_ **A green suite is not a closed matrix:** the suite proves the code does what it was built to do, not that every Must requirement has been built | **FAIL** |
````

### OP 38 — docs/08-traceability-matrix.md — §9 — tester sign-off row: v2.8.0 submission, the FR-131 ruling, unchanged counts, Lows paid/carried
FIND:
````
| Tester (author, **R**) | Ji-woo Park | **Submitted — 122 open Must rows recorded; 3 Must rows CLOSED (FR-079, FR-090, FR-080), 2 reclassified (FR-091/FR-092 G-TRACE → G-NOMECH), 0 opened** | 2026-08-29 | **v2.5.0, Status In Review. Proposals & debate drop (Doc 06 v2.4.1; Doc 03 v2.9.1 DES-103..DES-106; TC v2.4.0 sync).** Five chain gaps paid; **two** rows close on rule 4 and three do not: FR-080 (informed-consent disclosure states permanence nowhere, and no confirm step exists; DES-103 binds no SCR though FR-080 has a UI obligation), FR-091 (`schedule()` unwired — the "per published timelines" clause), FR-092 (four of seven enumerated trail elements unrecorded + third-party reconstruction unbuilt). FR-024 evidence extended, status unchanged. FR-122/FR-123 evidence extended, both stay G-PHASE3. Suite 542 → **608** green. Must 15/123; stories 16/134.)_ _(Prior v2.4.1: **v2.4.0, Status In Review. DES paydown traceability (Doc 03 v2.8.1 Approved; TC v2.3.1 sync).** FR-130 **CLOSES** on DES-102 + SCR-09/SCR-11 — all four rules hold, every clause separately tested, v1 tamper-evidence residual disclosed in the row and the row flagged for revisit when on-chain membership goes live. FR-077 does **NOT** close despite DES-101: rule 4 fails because its amendment-refusal clause has no mechanism at either tier (`Party.amendCharter` never sees the charter text) — reclassified G-NOMECH and routed to the architect. DES-097(b) closes nothing by design. Must 13/125; stories 14/134 (US-0131 newly done; US-0087 stays Partial). _(Prior v2.3.0: **v2.3.1, Status In Review (cycle-1 rework of v2.3.0). Join/membership drop traceability (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%, since v2.3.3 Approved; TC v2.3.0 sync).** Evidence extended on 7 forward-trace rows with TS-MEMBERSHIP (TC-3517..TC-3540, 24 cases): FR-020 and FR-022 (already COMPLETE — strengthened, incl. the *structural* no-verifier guarantee); FR-064, FR-122, FR-123, FR-130, FR-131 (all **stay OPEN**); FR-013 Should row evidence strengthened with the two DES-097 seam guards. **FR-021 deliberately NOT extended** — this drop produces no vote-weight or tally evidence, and claiming it would be fabricated coverage. **FR-064's semantics blocker was RESOLVED after v2.3.0 was authored** by the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, 2026-08-29; Doc 02 v2.15.0 Approved; Doc 06 v2.3.3 Approved) — gap-log entry 55 now records a **SPLIT** (semantics resolved / DES-065 open), and the row stays OPEN on DES-065 alone. Summary counts unchanged (12/126 Must; 16/145 total); **no story newly meets DoD** (13/134, checked story by story). Dashboard TC 425→449; passing evidence 171→195 (107 inh. + 88 obs.).)_ _(Prior v2.2.4:_ Party-creation drop traceability (Doc 06 v2.2.0 Approved; TC v2.2.2 sync): FR-010/011/018/020/077/130 forward-trace rows updated with TC-3489..TC-3516 and UT evidence (all pass inh.); FR-012/013 Should rows updated — FR-013 **CLOSED** — cooldown tested; US-0021 met DoD; dashboard TC 397→425.)_ |
````
REPLACE WITH:
````
| Tester (author, **R**) | Ji-woo Park | **Submitted — 122 open Must rows recorded; 0 Must rows CLOSED, 0 reclassified, 0 opened. Must 16/138 · stories 17/134 · both UNCHANGED.** | 2026-09-06 | **v2.8.0, Status In Review. FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved; Doc 07 v2.5.0 sync; commit `0a5c542`, PR #19).** Suite re-run by the tester: **619/619 green, exit 0** (run R-17). Evidence extended on four rows — FR-131 (+TC-3564..TC-3569), FR-124 (+TC-3568), NFR-011 (citation corrected), RISK-02 (+TC-3564..TC-3567) — and **not one status moved**. **The FR-131 Must row was ruled clause by clause and does NOT close: six of its eleven obligations are unmet or unevidenced, and the two that matter most are unmet because the thing itself does not exist — there is no acknowledge-to-proceed control (Doc 06 §7 item 26(d)) and SCR-13/SCR-14 are unbuilt (Doc 06 §7 #21).** 16 does not become 17. **US-0134 does not meet DoD.** The drop is good work and closes FR-131’s banned-words clause properly; recording that as a row closure would teach every downstream reader that the hard clauses of a requirement are optional. Two accepted Lows paid in passing (L-13 §6 `TD-RTM-02` pointer; L-2 §4 blockquote moved out of the table); the other twelve, including L-3, sit in lines this version does not touch and remain accepted-and-carried. `TD-RTM-01` (duplicate `UT-0841`..`UT-0848`) stays OPEN — engineer scope. `TD-RTM-02` stays OPEN and is widened by 6 on both sides. _(Prior v2.5.0: **v2.5.0, Status In Review. Proposals & debate drop (Doc 06 v2.4.1; Doc 03 v2.9.1 DES-103..DES-106; TC v2.4.0 sync).** Five chain gaps paid; **two** rows close on rule 4 and three do not: FR-080 (informed-consent disclosure states permanence nowhere, and no confirm step exists; DES-103 binds no SCR though FR-080 has a UI obligation), FR-091 (`schedule()` unwired — the "per published timelines" clause), FR-092 (four of seven enumerated trail elements unrecorded + third-party reconstruction unbuilt). FR-024 evidence extended, status unchanged. FR-122/FR-123 evidence extended, both stay G-PHASE3. Suite 542 → **608** green. Must 15/123; stories 16/134.)_)_ _(Prior v2.4.1: **v2.4.0, Status In Review. DES paydown traceability (Doc 03 v2.8.1 Approved; TC v2.3.1 sync).** FR-130 **CLOSES** on DES-102 + SCR-09/SCR-11 — all four rules hold, every clause separately tested, v1 tamper-evidence residual disclosed in the row and the row flagged for revisit when on-chain membership goes live. FR-077 does **NOT** close despite DES-101: rule 4 fails because its amendment-refusal clause has no mechanism at either tier (`Party.amendCharter` never sees the charter text) — reclassified G-NOMECH and routed to the architect. DES-097(b) closes nothing by design. Must 13/125; stories 14/134 (US-0131 newly done; US-0087 stays Partial). _(Prior v2.3.0: **v2.3.1, Status In Review (cycle-1 rework of v2.3.0). Join/membership drop traceability (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%, since v2.3.3 Approved; TC v2.3.0 sync).** Evidence extended on 7 forward-trace rows with TS-MEMBERSHIP (TC-3517..TC-3540, 24 cases): FR-020 and FR-022 (already COMPLETE — strengthened, incl. the *structural* no-verifier guarantee); FR-064, FR-122, FR-123, FR-130, FR-131 (all **stay OPEN**); FR-013 Should row evidence strengthened with the two DES-097 seam guards. **FR-021 deliberately NOT extended** — this drop produces no vote-weight or tally evidence, and claiming it would be fabricated coverage. **FR-064's semantics blocker was RESOLVED after v2.3.0 was authored** by the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, 2026-08-29; Doc 02 v2.15.0 Approved; Doc 06 v2.3.3 Approved) — gap-log entry 55 now records a **SPLIT** (semantics resolved / DES-065 open), and the row stays OPEN on DES-065 alone. Summary counts unchanged (12/126 Must; 16/145 total); **no story newly meets DoD** (13/134, checked story by story). Dashboard TC 425→449; passing evidence 171→195 (107 inh. + 88 obs.).)_ _(Prior v2.2.4:_ Party-creation drop traceability (Doc 06 v2.2.0 Approved; TC v2.2.2 sync): FR-010/011/018/020/077/130 forward-trace rows updated with TC-3489..TC-3516 and UT evidence (all pass inh.); FR-012/013 Should rows updated — FR-013 **CLOSED** — cooldown tested; US-0021 met DoD; dashboard TC 397→425.)_ |
````

---

## Applier self-check

Before writing, confirm each `FIND` resolves once. For single-line anchors:

```
grep -c -F -- '<first line of the FIND block>' <file>   # must print 1
```

For multi-line anchors, confirm the **first** and **last** lines each print `1`. If any op
fails, **write nothing** and return the failing op number.
