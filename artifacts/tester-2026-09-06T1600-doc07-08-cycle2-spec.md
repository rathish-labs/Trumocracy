# Anchored FIND/REPLACE spec — Doc 07 v2.6.0 and Doc 08 v2.9.0 (cycle-2 rework)

Author: Ji-woo Park (tester) · Date: 2026-09-06 · Session: tester-2026-09-06T1600

Applies the cycle-1 FAIL reports:
- `artifacts/reviews/07-test-cases-suites-v2.5.0-technical-cycle1.md` (FAIL 92%, 0C/0H/3M/4L) → **docs/07-test-cases-suites.md v2.5.0 → v2.6.0**
- `artifacts/reviews/08-traceability-matrix-v2.8.0-technical-cycle1.md` (FAIL 85%, 0C/2H/3M/3L) → **docs/08-traceability-matrix.md v2.8.0 → v2.9.0**

**Applier rules.** Each op below replaces its FIND text with its REPLACE text **once**. Every FIND
was generated directly from the file on disk at 2026-09-06 and verified to match **exactly once**
(`grep -c -F`), so it is byte-exact including em dashes, curly apostrophes and non-breaking
punctuation. FIND blocks start at a line start and end at the end of a whole line. **No op anchors
on line 1** (both files begin with a BOM). If any FIND fails to match exactly once, the applier
MUST refuse to write the file — do not fuzzy-match, do not re-wrap, do not normalise whitespace.
Apply the ops **in order**. Fences below are FOUR backticks; the contents are literal.

**Scope.** Only these two files are touched. Docs 03 / 04 / 09, product code, and
`artifacts/memory-index.json` are NOT touched by this spec.

**Invariants that MUST hold after application** (checked in simulation before this spec was
written): Doc 07 — cases designed 471 · automated 239 · observed 88 · inherited 136 · automated
not executed 15 · Blocked 175 · No mechanism 49 · Manual 12 · failures 0, all unchanged; no TC id
minted, retired or renumbered. Doc 08 — Must 138 · COMPLETE 16 · OPEN 122 · G-PHASE3 47 · stories
meeting DoD 17/134 · test cases 478 designed · 224 with passing evidence (136 inh. · 88 obs.) ·
254 not executed · suite 619/619 (run R-17), all unchanged; FR-131 stays **OPEN**. Every table row
touched keeps (or regains) the cell count of its header and ends with a trailing pipe.

---
### OP 1 — docs/07-test-cases-suites.md — version 2.5.0 → 2.6.0, Status rewritten for rework cycle 2 (the v2.4.4 record line is reproduced unchanged)
FIND:
````
Version:       2.5.0
Status:        In Review — v2.5.0 (FR-131 honesty-drop traceability; Doc 06 v2.5.1 sync).
               Awaiting a technical-mode document review.
               _(v2.4.4 record, retained:)_ Approved — 07-test-cases-suites-v2.4.4-technical-cycle2.md (PASS 99%, 0C/0H/0M/1L; ISS-01 Low **DISCHARGED at v2.5.0** — §9 now carries the confirmatory full-suite re-run row it lacked, as R-17)
````
REPLACE WITH:
````
Version:       2.6.0
Status:        In Review — v2.6.0 (rework cycle 2 against
               artifacts/reviews/07-test-cases-suites-v2.5.0-technical-cycle1.md, FAIL 92%,
               0C/0H/3M/4L). Minor bump per the review-loop rule: a Medium-or-worse FAIL earns at
               least a minor bump. **No TC is minted, retired, reused, renumbered or re-statused at
               this version and NO count moves.** All three Mediums are the same defect — a claim
               that outruns the evidence under it — so the fix is to state less, not to test more.
               _(v2.5.0 record, retained:)_ In Review — v2.5.0 (FR-131 honesty-drop traceability;
               Doc 06 v2.5.1 sync).
               _(v2.4.4 record, retained:)_ Approved — 07-test-cases-suites-v2.4.4-technical-cycle2.md (PASS 99%, 0C/0H/0M/1L; ISS-01 Low **DISCHARGED at v2.5.0** — §9 now carries the confirmatory full-suite re-run row it lacked, as R-17)
````

### OP 2 — docs/07-test-cases-suites.md — append a v2.6.0 pin note (no pin advanced; names the current Doc 03 / Doc 04 / Doc 09 versions)
FIND:
````
               at **SRS v2.16.3 §4.45**, the current Approved text. A full pin-sync of
               SRS/SDD/BKLG/MTP is owed at the next version.)_
````
REPLACE WITH:
````
               at **SRS v2.16.3 §4.45**, the current Approved text. A full pin-sync of
               SRS/SDD/BKLG/MTP is owed at the next version.)_
               _(v2.6.0 pin note — **no pin is advanced at this version**; this is a wording
               rework and no source document was re-read end to end. Two of the "current versions"
               named above have themselves moved since the morning of 2026-09-06: SDD is now
               **v2.13.0** and MTP **v1.4.0**, both **In Review** and both in cycle 2 of their
               neutral technical review; Doc 09 is now **v1.6.0 (In Review)**. SRS **v2.16.3
               (Approved)**, BKLG **v2.5.0 (Approved)** and CODE **v2.5.1 (Approved)** are
               unchanged. Named so the citations in the changelog and §5.3 can be read against the
               right versions. The full pin-sync is still owed.)_
````

### OP 3 — docs/07-test-cases-suites.md — insert the v2.6.0 changelog entry above the v2.5.0 entry (v2.5.0 entry text unchanged)
FIND:
````
Changelog:     v2.5.0 (2026-09-06) — **FR-131 honesty-drop traceability. Suite re-run, 6 TC minted,
````
REPLACE WITH:
````
Changelog:     v2.6.0 (2026-09-06) — **Rework cycle 2 against
               artifacts/reviews/07-test-cases-suites-v2.5.0-technical-cycle1.md (FAIL 92%,
               0C/0H/3M/4L). All seven issues addressed. No TC minted, retired, re-statused or
               re-scoped; NO count moves.** Cases designed **471** · with an implementing automated
               test **239** · observed **88** · inherited green **136** · automated but not executed
               **15** · Blocked **175** · No mechanism **49** · Manual **12** · observed failures
               **0** — every figure unchanged from v2.5.0, and stated here rather than left to
               inference.
               **ISS-01 (Medium) FIXED — TC-3568's expected result claimed evidence UT-0759 does
               not produce.** It read that paths (a), (b) and (d) render the title "with a matching
               `aria-label` and no FR-131 banned word anywhere in the rendered text". Read against
               the four `it`s of UT-0759 in `packages/ui/test/PrivacyStatus.test.tsx`: only path
               (a) asserts the `aria-label` **and** the banned-word regex; paths (b)
               (`unlinkable: false`) and (d) (malformed prop) assert **title selection only** —
               "Verified" present, "Verified — private" absent; path (c) asserts the title and its
               `aria-label`. The cell now states, path by path, exactly what is asserted. This is
               the defect class this document corrected on TC-2614 at v2.5.0 — an expected result
               no regression could falsify — and it is corrected the same way, by narrowing the
               claim. Extending the banned-word and accessible-name assertions to paths (b) and (d)
               is **owed UT scope routed to the engineer (Samuel Oyelaran)** if the wider guarantee
               is wanted; it is not recorded here as already covered.
               **ISS-02 (Medium) FIXED — fabricated NFR-013 coverage removed.** TC-3567's Verifies
               cell read "US-0134 · FR-131 · DES-098 · **NFR-013**". What UT-0887 asserts is the
               content of two `ar.banner.*` string constants; NFR-013's guarantee is "8 locales
               incl. RTL", and neither locale coverage nor RTL rendering is exercised — nor does
               Doc 08 §3.2 carry any NFR-013 → TC-3567 link. `NFR-013` is dropped from the cell
               (FR-131 and DES-098 already carry the case) and the row now states in terms what it
               does **not** verify. The two documents no longer disagree about a requirement link.
               **ISS-03 (Medium) FIXED — the "approved design element" claim is retracted in all
               three places** (this changelog, and both halves of the TC-3568 row). Doc 03 is
               `Status: In Review`: **v2.12.0** minted DES-094 clause 9 and then FAILED cycle 1 of
               its neutral technical review (89%, 0C/1H/2M/2L), and **v2.13.0** (2026-09-06) is the
               rework, itself under cycle-2 review — clause 9's text may still move. TC-3568 is now
               recorded as verifying the **current corrected text** of DES-094 clause 9, and the
               Doc 06 §4a recorded deviation is **discharged CONDITIONALLY, on Doc 03 reaching
               Approved**, not "DISCHARGED". This is the discipline the v2.5.0 changelog stated for
               itself three paragraphs earlier and then broke in one place.
               **ISS-04 (Low) FIXED:** `DES-094` removed from TC-3564's Verifies cell. TC-3564
               renders `ReceiptFreedomBanner` (DES-098); DES-094 is the `PrivacyStatus` component
               and has no part in that case, as TC-3565..TC-3567 already record by citing DES-098
               alone.
               **ISS-05 (Low) FIXED:** the §4.3 and §5 suite headings now name the cases they
               actually contain — "(TC-1600–TC-1614, TC-3569)" and "(TC-2600–TC-2752,
               TC-3564–TC-3567)" — as §5.3's heading and the §2 suite table already did. v2.5.0
               applied that fix in one place of three.
               **ISS-06 (Low) FIXED:** §10's overlap paragraph introduced its formula as "the
               187-case 'implementing automated test' count" and then computed with **193**;
               v2.5.0 moved the figure in the formula and left the label in the prose. The prose now
               reads 193 (187 before v2.5.0). No arithmetic changes: 193 + 171 + 48 + 12 = 424, and
               equivalently 193 + 175 + 48 + 12 − 4 = 424.
               **ISS-07 (Low) FIXED:** §6's Accessibility row still said the two component-level
               cases "were not executed". Run R-17 executed `apps/web` **95/95** green, which
               covers both; what has **not** been made is a case-by-case accessibility pass. The row
               now says exactly that and points at TD-07-03 — the same distinction §0.1's v2.5.0
               amendment exists to protect. The verdict is unchanged: still **No**.
               **Suite re-executed during this rework, and nothing moved.** `npm test` from the
               repo root, 2026-09-06: **619 / 619 pass, 0 failed**, exit 0 — contracts 95 ·
               protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95, identical to **R-17** package
               for package. **No new run id is minted:** an identical re-run of the same commit
               confirms R-17 rather than adding an observation, so §9 records the re-confirmation
               inside the R-17 row and no case is promoted on it.
               **Sources as read at this version:** Doc 06 **v2.5.1 (Approved)**, Doc 02 **v2.16.3
               (Approved)**, Doc 05 **v2.5.0 (Approved)**, Doc 03 **v2.13.0 (In Review)**, Doc 04
               **v1.4.0 (In Review)**, Doc 09 **v1.6.0 (In Review)**. The three In-Review documents
               are cited as current corrected text and never as approved sources.
               Changelog:     v2.5.0 (2026-09-06) — **FR-131 honesty-drop traceability. Suite re-run, 6 TC minted,
````

### OP 4 — docs/07-test-cases-suites.md — ISS-03 site 1 — the v2.5.0 changelog called DES-094 clause 9 an approved design element; retracted to current corrected text (Doc 03 In Review)
FIND:
````
               the same backing-aware rule (Doc 03 v2.12.0 minted **DES-094 clause 9** for the title
               the same day, so this case verifies an approved design element). **TC-3569** maps **UT-0888**
````
REPLACE WITH:
````
               the same backing-aware rule (Doc 03 minted **DES-094 clause 9** for the title the
               same day, at v2.12.0, and carried it into **v2.13.0** — both **In Review**, so this
               case verifies the current corrected text of a design element, **not an approved
               one**; corrected at v2.6.0, ISS-03). **TC-3569** maps **UT-0888**
````

### OP 5 — docs/07-test-cases-suites.md — ISS-05 — §4.3 heading extended for TC-3569
FIND:
````
### 4.3 `TS-ABSENCE` — Capability-absence (TC-1600–TC-1614)
````
REPLACE WITH:
````
### 4.3 `TS-ABSENCE` — Capability-absence (TC-1600–TC-1614, TC-3569)
````

### OP 6 — docs/07-test-cases-suites.md — ISS-05 — §5 heading extended for TC-3564..TC-3567
FIND:
````
## 5. `TS-ADV-01…16` — Adversarial suites, one per RISK (TC-2600–TC-2752)
````
REPLACE WITH:
````
## 5. `TS-ADV-01…16` — Adversarial suites, one per RISK (TC-2600–TC-2752, TC-3564–TC-3567)
````

### OP 7 — docs/07-test-cases-suites.md — ISS-04 — DES-094 removed from TC-3564 (it renders ReceiptFreedomBanner = DES-098)
FIND:
````
| TC-3564 | ADV-02 · RISK-02 | **Regression: a banned word returns to the rendered vote-surface banner.** Render `ReceiptFreedomBanner` with MACI off and scan the banner’s rendered text for "private", "anonymous", "receipt-free", "secure" | Every occurrence is **immediately negated** ("not anonymous", "not receipt-free"); "private" and "secure" do not appear at all, negated or otherwise — neither has a mandated use in this notice. Verifies US-0134 · FR-131 closing sentence · DES-098/DES-094 | `apps/web` · UT-0887 (`test/safety-surfaces.test.tsx`) | **Pass (inh.)** — Doc 06 v2.5.1; `apps/web` 95/95 green in R-17 (2026-09-06) |
````
REPLACE WITH:
````
| TC-3564 | ADV-02 · RISK-02 | **Regression: a banned word returns to the rendered vote-surface banner.** Render `ReceiptFreedomBanner` with MACI off and scan the banner’s rendered text for "private", "anonymous", "receipt-free", "secure" | Every occurrence is **immediately negated** ("not anonymous", "not receipt-free"); "private" and "secure" do not appear at all, negated or otherwise — neither has a mandated use in this notice. Verifies US-0134 · FR-131 closing sentence · DES-098 | `apps/web` · UT-0887 (`test/safety-surfaces.test.tsx`) | **Pass (inh.)** — Doc 06 v2.5.1; `apps/web` 95/95 green in R-17 (2026-09-06) |
````

### OP 8 — docs/07-test-cases-suites.md — ISS-02 — NFR-013 dropped from TC-3567 and the scope limit stated in terms
FIND:
````
| TC-3567 | ADV-02 · RISK-02 | **The Arabic locale is not left telling the retired lie.** Read `ar.banner.notReceiptFreeTitle` / `notReceiptFreeBody` | The retired Arabic claims "صوتك سري" (your vote is secret) and "لا يستطيع أحد أن يرى أن هذا الصوت صوتك" are absent; the mandated "ليس مجهول الهوية" (not anonymous) and "تستطيع أن ترى كيف صوّتّ" (can see how you voted) are present. Verifies US-0134 · FR-131 · DES-098 · NFR-013 | `apps/web` · UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; R-17. **Scope limit stated:** this case guards the *claim*, not the *fluency*. The Arabic strings are an engineer draft and native-speaker review is owed before any Arabic-locale deployment (Doc 06 §7 item 17) — a mistranslated coercion warning is a safety defect that a passing TC-3567 would not catch |
````
REPLACE WITH:
````
| TC-3567 | ADV-02 · RISK-02 | **The Arabic locale is not left telling the retired lie.** Read `ar.banner.notReceiptFreeTitle` / `notReceiptFreeBody` | The retired Arabic claims "صوتك سري" (your vote is secret) and "لا يستطيع أحد أن يرى أن هذا الصوت صوتك" are absent; the mandated "ليس مجهول الهوية" (not anonymous) and "تستطيع أن ترى كيف صوّتّ" (can see how you voted) are present. Verifies US-0134 · FR-131 · DES-098 | `apps/web` · UT-0887 | **Pass (inh.)** — Doc 06 v2.5.1; R-17. **Scope limit stated:** this case guards the *claim*, not the *fluency*. The Arabic strings are an engineer draft and native-speaker review is owed before any Arabic-locale deployment (Doc 06 §7 item 17) — a mistranslated coercion warning is a safety defect that a passing TC-3567 would not catch. **NFR-013 is NOT verified by this case** _(v2.6.0, ISS-02: the Verifies cell claimed it, and the claim was not supported)_ — UT-0887 reads the content of two `ar.banner.*` constants; it exercises neither the eight-locale coverage nor the RTL rendering NFR-013 requires, and Doc 08 §3.2 carries no NFR-013 → TC-3567 link. What this case is evidence of is FR-131 copy content in the Arabic locale, and nothing wider |
````

### OP 9 — docs/07-test-cases-suites.md — ISS-07 — Accessibility row aligned with run R-17 (verdict unchanged: still No)
FIND:
````
| Accessibility: automated scan + screen-reader/focus | **No** — TC-2250/2251/2252/2255 all Blocked or Manual-not-run. Two component-level cases exist and were not executed. |
````
REPLACE WITH:
````
| Accessibility: automated scan + screen-reader/focus | **No** — TC-2250/2251/2252/2255 all Blocked or Manual-not-run. Two component-level cases exist and **were executed green at file granularity** in run R-17 (`apps/web` 95/95, 2026-09-06); no case-by-case accessibility pass has been made, so neither is promoted (**TD-07-03**). The verdict is unchanged — there is still no automated a11y scan and no screen-reader/focus pass. _(v2.6.0, ISS-07: this row read "were not executed", which is exactly the reading §0.1’s v2.5.0 amendment exists to prevent.)_ |
````

### OP 10 — docs/07-test-cases-suites.md — record the cycle-2 re-run inside the R-17 row (no new run id, no count moved)
FIND:
````
| **R-17** | 2026-09-06 | Doc 06 v2.5.1 Approved · commit `0a5c542` (PR #19, merged to `main`; repo `HEAD` `84e2203`) | **whole repository — `npm test` from the repo root** | **619 / 619 pass, 0 failed**, process exit 0 — contracts 95 · protocol **151** · sdk 244 · ui **18** · indexer 16 · web **95**. Suite total 610 → **619** (+9: UT-0887 4 web, UT-0759 4 ui, UT-0888 1 protocol). Per-package duration: contracts 34.29 s · protocol 505 ms · sdk 1.10 s · ui 767 ms · indexer 571 ms · web 2.81 s. **Executed by the tester** while authoring the FR-131 honesty TC rows; this is the confirmatory full-suite re-run the v2.4.2/v2.4.4 reviews recorded as missing (ISS-01 Low, now discharged). Working tree clean apart from `artifacts/memory-index.json`; `apps/web/tsconfig.tsbuildinfo` is untracked as of the Doc 06 v2.5.1 `chore(infra)` commit and was **not** dirtied by this run | none |
````
REPLACE WITH:
````
| **R-17** | 2026-09-06 | Doc 06 v2.5.1 Approved · commit `0a5c542` (PR #19, merged to `main`; repo `HEAD` `84e2203`) | **whole repository — `npm test` from the repo root** | **619 / 619 pass, 0 failed**, process exit 0 — contracts 95 · protocol **151** · sdk 244 · ui **18** · indexer 16 · web **95**. Suite total 610 → **619** (+9: UT-0887 4 web, UT-0759 4 ui, UT-0888 1 protocol). Per-package duration: contracts 34.29 s · protocol 505 ms · sdk 1.10 s · ui 767 ms · indexer 571 ms · web 2.81 s. **Executed by the tester** while authoring the FR-131 honesty TC rows; this is the confirmatory full-suite re-run the v2.4.2/v2.4.4 reviews recorded as missing (ISS-01 Low, now discharged). Working tree clean apart from `artifacts/memory-index.json`; `apps/web/tsconfig.tsbuildinfo` is untracked as of the Doc 06 v2.5.1 `chore(infra)` commit and was **not** dirtied by this run. **Re-confirmed at v2.6.0 (2026-09-06, cycle-2 rework):** the tester re-ran `npm test` from the repo root and got the identical result — **619 / 619 pass, 0 failed**, exit 0, same package split. **No new run id is minted** — an identical re-run of the same commit confirms R-17 rather than adding an observation — and no case is promoted on it | none |
````

### OP 11 — docs/07-test-cases-suites.md — ISS-06 — overlap prose figure brought into line with its own formula (193)
FIND:
````
**Counting convention — four-case automated-and-Blocked overlap (v2.1.0 fix; cycle-2 ISS-01 Low).** Four cases appear in both the 187-case 'implementing automated test' count and the 175-case 'Blocked' count: an implementing test harness exists for these cases but the required contracts or environment are not deployed in this drop, so they cannot execute. These 4 overlap cases are not individually identifiable by inspection of the suite-table summary (automated-test attribution and Blocked-status are not cross-referenced at case level in this document). Convention: **Distinct total = 193 (automated) + 171 (Blocked-only, i.e. 175 minus the 4 also in automated) + 48 (No mechanism) + 12 (Manual) = 424.** Equivalently: 193 + 175 + 48 + 12 − 4 = 424. _(v2.5.0: the +6 from TC-3564..TC-3569 is applied to the automated term (187 → 193, total 418 → 424) so the paragraph stays internally consistent, and **the pre-existing staleness is named rather than inherited silently**: this paragraph’s base figures (187 automated, 48 No mechanism) are v2.1.0-era and already disagree with §2’s 239 and §10’s 49. It is a *third* convention alongside Doc 07 §2’s 471 and Doc 08 §6’s 478. Reconciling all three to one stated definition is the tester’s own owed work, tracked as **`TD-RTM-02`** in Doc 08 §10; it is not attempted in this version because it is a document-wide recount, not a side-effect of an FR-131 drop.)_
````
REPLACE WITH:
````
**Counting convention — four-case automated-and-Blocked overlap (v2.1.0 fix; cycle-2 ISS-01 Low).** Four cases appear in both the 193-case 'implementing automated test' count (187 before v2.5.0) and the 175-case 'Blocked' count: an implementing test harness exists for these cases but the required contracts or environment are not deployed in this drop, so they cannot execute. These 4 overlap cases are not individually identifiable by inspection of the suite-table summary (automated-test attribution and Blocked-status are not cross-referenced at case level in this document). Convention: **Distinct total = 193 (automated) + 171 (Blocked-only, i.e. 175 minus the 4 also in automated) + 48 (No mechanism) + 12 (Manual) = 424.** Equivalently: 193 + 175 + 48 + 12 − 4 = 424. _(v2.5.0: the +6 from TC-3564..TC-3569 is applied to the automated term (187 → 193, total 418 → 424) so the paragraph stays internally consistent, and **the pre-existing staleness is named rather than inherited silently**: this paragraph’s base figures (187 automated, 48 No mechanism) are v2.1.0-era and already disagree with §2’s 239 and §10’s 49. It is a *third* convention alongside Doc 07 §2’s 471 and Doc 08 §6’s 478. Reconciling all three to one stated definition is the tester’s own owed work, tracked as **`TD-RTM-02`** in Doc 08 §10; it is not attempted in this version because it is a document-wide recount, not a side-effect of an FR-131 drop.)_
````

### OP 12 — docs/07-test-cases-suites.md — ISS-01 + ISS-03 — TC-3568 expected result restated to what UT-0759 asserts on each path; the approved/DISCHARGED claims retracted
FIND:
````
| TC-3568 | Backing-aware `ver` **title**: four-path coverage (absent / `false` / `true` / malformed `backingProperties.unlinkable`), with no FR-131 banned word on the v1 default | US-0134 · FR-131 closing sentence, FR-124 · **DES-094 clause 9** (the title rule, Doc 03 v2.12.0; clause 7 governs the subtitle) | `state = "ver"`, valid self-view; (a) no `backingProperties`; (b) `{ unlinkable: false }`; (c) `{ unlinkable: true }`; (d) `{ onePersonOneVote: false }` — a partial prop with no `unlinkable` field | (a), (b) and (d) render the title **"Verified"** with a matching `aria-label` and **no** FR-131 banned word anywhere in the rendered text — the fail-honest v1 default, malformed treated as absent; (c) **alone** renders **"Verified — private"** with the matching `aria-label`, the one case in which the word is true of the ballot | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0759 | **Pass (inh.)** — Doc 06 v2.5.1; `packages/ui` **18/18** green in run R-17 (2026-09-06). **The Doc 06 §4a recorded deviation is DISCHARGED, 2026-09-06.** It read: the Doc 03 §10.12.3 sub-table listed "Verified — private" for the **v1** row, FR-131 was normative over that copy table (Doc 09 v1.3.0 ISS-03; approver, 2026-09-05), and the SDD cascade was owed — so UT-0759 was standing in as the only record of the intended copy. Doc 03 **v2.12.0** landed that cascade the same day: the v1 row now reads "Verified", the v2.7.0 banned-words analysis is **overruled**, and §10.12.3 gained **clause 9** stating the title rule normatively. This case now verifies an approved design element instead of substituting for one |
````
REPLACE WITH:
````
| TC-3568 | Backing-aware `ver` **title**: four-path coverage (absent / `false` / `true` / malformed `backingProperties.unlinkable`), with no FR-131 banned word on the v1 default | US-0134 · FR-131 closing sentence, FR-124 · **DES-094 clause 9** (the title rule, minted Doc 03 v2.12.0 and carried into **v2.13.0** — **In Review**; clause 7 governs the subtitle) | `state = "ver"`, valid self-view; (a) no `backingProperties`; (b) `{ unlinkable: false }`; (c) `{ unlinkable: true }`; (d) `{ onePersonOneVote: false }` — a partial prop with no `unlinkable` field | **Stated path by path, because this cell previously claimed more than the test asserts (v2.6.0, ISS-01).** **(a)** absent `backingProperties` — the full four-assertion path: title **"Verified"** present, "Verified — private" absent, the `status` element’s `aria-label` exactly **"Verified"**, and the rendered `textContent` matching **no** FR-131 banned word (the test’s case-insensitive `BANNED` regex covers "private", "anonymous", "receipt-free" and "secure"). **(b)** `{ unlinkable: false }` and **(d)** `{ onePersonOneVote: false }` (a partial prop with no `unlinkable` field) — **title selection only**: "Verified" present and "Verified — private" absent, the fail-honest v1 default with malformed treated as absent. **Neither (b) nor (d) asserts the `aria-label`, and neither asserts the banned-word regex.** **(c)** `{ unlinkable: true }` — **alone** renders **"Verified — private"** with a matching `aria-label`, the one case in which the word is true of the ballot; it makes no banned-word assertion, correctly, since "private" is present and true there. **Scope limit:** the accessible-name and banned-word guarantees are evidence on path (a) only; extending them to (b) and (d) is owed UT scope for the engineer (Samuel Oyelaran) if the wider guarantee is wanted, and is not recorded here as covered | Automated — `packages/ui/test/PrivacyStatus.test.tsx` · UT-0759 | **Pass (inh.)** — Doc 06 v2.5.1; `packages/ui` **18/18** green in run R-17 (2026-09-06). **The Doc 06 §4a recorded deviation is discharged CONDITIONALLY — on Doc 03 reaching Approved** _(v2.6.0, ISS-03: v2.5.0 wrote "DISCHARGED, 2026-09-06" unqualified, on a source that is In Review)_. It read: the Doc 03 §10.12.3 sub-table listed "Verified — private" for the **v1** row, FR-131 was normative over that copy table (Doc 09 v1.3.0 ISS-03; approver, 2026-09-05), and the SDD cascade was owed — so UT-0759 was standing in as the only record of the intended copy. Doc 03 **v2.12.0** landed that cascade the same day: the v1 row now reads "Verified", the v2.7.0 banned-words analysis is **overruled**, and §10.12.3 gained **clause 9** stating the title rule normatively. This case therefore verifies **the current corrected text** of DES-094 clause 9 rather than substituting for a design element — but **not an approved one**: Doc 03 reads `Status: In Review`, v2.12.0 FAILED cycle 1 of its neutral technical review (89%, 0C/1H/2M/2L) and **v2.13.0** (2026-09-06) is the rework, itself under cycle-2 review, so clause 9 may still move. Until Doc 03 is Approved, UT-0759 and this case remain the operative record of the intended copy |
````

### OP 13 — docs/08-traceability-matrix.md — version 2.8.0 → 2.9.0, Status rewritten for rework cycle 2 (the v2.8.0 status text is retained as a record)
FIND:
````
Version:       2.8.0
Status:        In Review — v2.8.0 (FR-131 honesty-drop traceability; Doc 06 v2.5.1 / Doc 07
               v2.5.0 sync). Awaiting a technical-mode document review. **No Must row closes at
               this version and no authoritative count moves — see the FR-131 ruling in the
               changelog, §3.1, §7 entry 117 and §9.**
````
REPLACE WITH:
````
Version:       2.9.0
Status:        In Review — v2.9.0 (rework cycle 2 against
               artifacts/reviews/08-traceability-matrix-v2.8.0-technical-cycle1.md, FAIL 85%,
               0C/2H/3M/3L). Minor bump per the review-loop rule. **No Must row closes, no gap code
               changes and no authoritative count moves: Must 138 · COMPLETE 16 · OPEN 122 (11.6%)
               · stories meeting DoD 17 of 134 — all unchanged. FR-131 stays OPEN (G-PHASE3),
               exactly as v2.8.0 ruled and the neutral reviewer independently re-derived and
               concurred.** The two Highs were a rendering defect that hid this version's own
               additions and a missing chain link (`DES-098`); neither asked a status to move, and
               none moved.
               _(v2.8.0 record, retained:)_ In Review — v2.8.0 (FR-131 honesty-drop traceability;
               Doc 06 v2.5.1 / Doc 07 v2.5.0 sync). **No Must row closes at that version and no
               authoritative count moves — see the FR-131 ruling in the changelog, §3.1, §7 entry
               117 and §9.**
````

### OP 14 — docs/08-traceability-matrix.md — advance the TC pin to Doc 07 v2.6.0 (the same tester authored both on 2026-09-06 and read the delta)
FIND:
````
               TC-TRUMOCRACY v2.5.0 (In Review — this version syncs to it)
````
REPLACE WITH:
````
               TC-TRUMOCRACY v2.6.0 (In Review — this version syncs to it; v2.5.0 at the previous version)
````

### OP 15 — docs/08-traceability-matrix.md — append a v2.9.0 pin note (TC pin advanced; the current Doc 03 / Doc 04 / Doc 09 versions named)
FIND:
````
               BKLG/MTP pin-sync is owed at the next version, together with the identical debt in
               Doc 07 §Source.)_
````
REPLACE WITH:
````
               BKLG/MTP pin-sync is owed at the next version, together with the identical debt in
               Doc 07 §Source.)_
               _(v2.9.0: the **TC** pin is advanced v2.5.0 → **v2.6.0** — the same tester authored
               both on 2026-09-06 and read the delta, and it changes no id, status or count this
               matrix cites (Doc 07 v2.6.0 is a wording rework: three over-claims narrowed, four
               nits fixed, no TC minted or re-statused). **No other pin is advanced.** The
               "current versions" named in the v2.8.0 note have themselves moved since that note
               was written: **SDD is now v2.13.0** and **MTP v1.4.0**, both **In Review** and both
               in cycle 2 of their neutral technical review, and Doc 09 is now **v1.6.0 (In
               Review)**; SRS **v2.16.3** and BKLG **v2.5.0** are both **Approved** and unchanged.
               The SRS/SDD/BKLG/MTP pin-sync is still owed, and is still owed in Doc 07 §Source.)_
````

### OP 16 — docs/08-traceability-matrix.md — insert the v2.9.0 changelog entry above the v2.8.0 entry (v2.8.0 entry text unchanged)
FIND:
````
Changelog:     v2.8.0 (2026-09-06) — **FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved;
````
REPLACE WITH:
````
Changelog:     v2.9.0 (2026-09-06) — **Rework cycle 2 against
               artifacts/reviews/08-traceability-matrix-v2.8.0-technical-cycle1.md (FAIL 85%,
               0C/2H/3M/3L). All eight issues addressed. NOTHING MOVES: Must **138** ·
               COMPLETE **16** · OPEN **122** (11.6%) · G-PHASE3 **47** · stories meeting DoD
               **17 of 134** · test cases **478** designed and **224** with passing evidence
               (**136** inh. · **88** obs.) · **254** not executed or not executable · suite
               **619/619** on run R-17 — every figure unchanged from v2.8.0. FR-131 stays **OPEN
               (G-PHASE3)** and US-0134 still does not meet the Definition of Done.** The reviewer
               re-derived that ruling independently from Doc 02 §4.45 and the shipped code and
               concurred with it; nothing in this version disturbs it.
               **ISS-01 (High) FIXED — four of v2.8.0's own additions were invisible when
               rendered.** The v2.8.0 notes on §3.1 **FR-124**, §3.1 **FR-131**, §3.2 **NFR-011**
               and the §4 orphan-sweep row were each written as an EXTRA cell beyond their table's
               header width — 9 cells against an 8-column header in §3.1, 8 against 7 in §3.2, 3
               against 2 in §4 — and not one of the four rows ended with a pipe, so a GFM renderer
               discarded them: a reader of the rendered matrix saw the v2.7.0 rows unchanged,
               including the entire FR-131 rule-by-rule ruling, which was the headline content of
               the version. Each note is folded into its row's existing final cell and each row now
               ends with `|`; cell counts were re-verified against every header. **No text was
               lost in the fold**, and no wording changed except where an issue below required it.
               **ISS-02 (High) FIXED — `DES-098` now appears in this matrix.** It appeared **zero**
               times in Doc 08 before this version, although Doc 02 §4.45 designs the honesty notice
               **as DES-098** and six of the cases this matrix cites for FR-131 (TC-3564..TC-3569)
               name it. Four corrections to the FR-131 row: **(i)** the DES cell now reads
               **DES-098** (the notice — primary) · **DES-094** (the status-badge reach TC-3568
               verifies) · DES-096 · ADR-024; **(ii)** the SCR cell reads **SCR-13, SCR-14 — both
               UNBUILT** instead of "none", so the gap is visible rather than absent; **(iii)** the
               requirement summary is restated from Doc 02 §4.45 — it had described the DES-096
               `IBallotService` seam and not the notice — with the seam clauses kept and labelled
               as the DES-096 half this row also tracks; **(iv)** "FR-131 has eleven obligations"
               is corrected to Doc 02 §4.45's **ten**, plus that seam half, which is not one of
               them. **The DES assignment is taken from Doc 03 v2.13.0 §15** (2026-09-06, **In
               Review**, cycle 2 of its neutral review under way), where the architect states the
               intended FR-131 assignment — DES-098 primary, DES-094 for the status-badge reach,
               DES-096 retained as the ballot seam — and routes it to the tester because Doc 08 is
               the tester's document. It is cited as **current corrected text, not as an approved
               source**, and it closes nothing: FR-131 stays OPEN on unbuilt controls and unbuilt
               surfaces. Naming two unbuilt screens in a trace cell moves no count either — §6's
               Screens row still reads 23 mapped / 0 verified.
               **ISS-03 (Medium) FIXED — the Gate-2 verdict's opening sentence is whole again.**
               v2.8.0 inserted its addendum **into the middle** of "…**16 close and 122 do not** —
               an 11.6% completion rate…", so the document's most load-bearing sentence rendered
               broken, with literal asterisks and a paragraph between the bold markers. The sentence
               is restored as one continuous sentence and the addendum now sits **below** the
               verdict, its text otherwise unchanged.
               **ISS-04 (Medium) FIXED — §10's `TD-RTM-02` entry now records what §6 and the
               changelog say it records.** The entry was still written on its v2.6.1 figures (Doc 07
               v2.4.4's **465**, the implied **456** anchors, §6's then-**463**/**472**, **217** with
               passing evidence, the **610/610** suite) and described a **two-way** disagreement,
               while §6 and the v2.8.0 changelog quoted it for a **three-way** one. Updated to the
               current figures — Doc 07 §2's **471**, this dashboard's **478**, and Doc 07 §10's
               overlap base (193 + 171 + 48 + 12 = **424**) — and to the three-way framing, with
               **224** cases carrying passing evidence and the **619/619** suite. **The raising
               date stays 2026-08-30 and the debt stays OPEN**: this is a truthful restatement of
               the defect, not a payment of it.
               **ISS-05 (Medium) FIXED — the FR-124 row's "approved design element" claim is
               retracted.** Doc 03 reads `Status: In Review`; v2.12.0 FAILED cycle 1 of its neutral
               technical review (89%, 0C/1H/2M/2L) and v2.13.0 is the rework, itself under cycle-2
               review, so DES-094 clause 9 may still move. The row now cites it as the **current
               corrected text of a design element, not an approved source** — the discipline this
               document's own changelog set for the whole version and then broke in that one line.
               **ISS-06 (Low) FIXED:** §7 entry 117's missing sentence break. It read "production ZK
               ballot pending **v2.8.0 (FR-131 honesty drop…)**", which literally says the
               production ZK ballot is pending v2.8.0. The break is inserted.
               **ISS-07 (Low) FIXED:** the §9 tester row's doubled italic close (`)_)_`) after the
               retained v2.5.0 record now closes once.
               **ISS-08 (Low) FIXED:** the NFR-013 row's stated reason read "no locale files";
               `apps/web/src/i18n/en.ts` and `ar.ts` exist and are shipped. Restated as "locale
               files exist but there is no locale-coverage or string-coverage gate and no RTL
               rendering evidence". **The G-UI verdict is unchanged** — only its reason was wrong.
               TC-3567 is deliberately **not** linked into the row: Doc 07 **v2.6.0** removed the
               NFR-013 claim from that case for the same reason (it reads two Arabic copy constants
               and exercises neither locale coverage nor RTL). The two documents now agree, which
               was the point of the finding.
               **Suite re-executed at rework time:** `npm test` from the repo root, 2026-09-06 —
               **619 / 619 pass, 0 failed**, exit 0 — contracts 95 · protocol 151 · sdk 244 · ui 18
               · indexer 16 · web 95, identical to **R-17** package for package. No new run id is
               minted and no case is promoted; §9's suite figure is unchanged.
               **What this version does NOT do.** It does not close a row, reconcile
               `TD-RTM-02`, or advance `TD-RTM-01` (still engineer scope). It does not re-derive
               the §4 sweep's **288** observed/inherited population — that belongs with the
               `TD-RTM-02` recount and is still annotated rather than advanced. It does not treat
               Doc 03 v2.13.0, Doc 04 v1.4.0 or Doc 09 v1.6.0 as approved sources; all three are
               **In Review** and are cited as current corrected text only.
               Changelog:     v2.8.0 (2026-09-06) — **FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved;
````

### OP 17 — docs/08-traceability-matrix.md — ISS-02 — the obligation count in the v2.8.0 ruling preamble corrected from eleven to Doc 02 §4.45’s ten
FIND:
````
               **The FR-131 ruling, asked plainly and answered plainly: does 16 become 17? No.**
               FR-131 (SRS v2.16.3 §4.45) imposes eleven distinct obligations. Ruled one at a time
               against the evidence that now exists:
````
REPLACE WITH:
````
               **The FR-131 ruling, asked plainly and answered plainly: does 16 become 17? No.**
               FR-131 (SRS v2.16.3 §4.45) imposes **ten** distinct obligations. Ruled one at a time
               against the evidence that now exists: _(v2.9.0 correction — v2.8.0 wrote "eleven",
               counting the DES-096 seam half ruled as item (11) below as an eleventh FR-131
               obligation. It is not one; Doc 02 §4.45 has ten. The ruling itself is untouched —
               same items, same findings, same verdict.)_
````

### OP 18 — docs/08-traceability-matrix.md — ISS-02 — ruling item (11) relabelled as the DES-096 seam half rather than an FR-131 obligation
FIND:
````
               surfaces, which no document review can alter. **(11) the seam half this row also tracks** (cast / silent change /
````
REPLACE WITH:
````
               surfaces, which no document review can alter. **(11) — NOT an FR-131 obligation, and labelled as what it is (v2.9.0): the DES-096 seam half this row also tracks** (cast / silent change /
````

### OP 19 — docs/08-traceability-matrix.md — ISS-02 — verdict restated over ten FR-131 obligations (finding unchanged: six unmet or unevidenced)
FIND:
````
               **Verdict: FR-131 stays OPEN — G-PHASE3. Six of eleven obligations are unmet or
````
REPLACE WITH:
````
               **Verdict: FR-131 stays OPEN — G-PHASE3. Six of the ten FR-131 obligations are unmet or
````

### OP 20 — docs/08-traceability-matrix.md — ISS-04 — the changelog’s TD-RTM-02 label brought into line with the §10 entry as rewritten
FIND:
````
               unaffected by it. **`TD-RTM-02` (the 465 / 471 / 478 denominator disagreement) also
````
REPLACE WITH:
````
               unaffected by it. **`TD-RTM-02` (the three-way test-case denominator disagreement — Doc 07 §2’s 471, this document’s 478 and Doc 07 §10’s overlap base; 465 was Doc 07 v2.4.4’s superseded figure) also
````

### OP 21 — docs/08-traceability-matrix.md — ISS-03 — restore "…16 close and 122 do not — an 11.6% completion rate…" as ONE sentence. The v2.8.0 addendum that had been inserted mid-sentence is DELETED here and re-placed verbatim below the verdict by the next OP
FIND:
````
**Gate 2 cannot be approved today.** Of 138 gating Must rows, **16 close and 122

**v2.8.0 addendum (2026-09-06) — the FR-131 honesty drop, and why the numbers above did not move.** Doc 06 v2.5.1 (commit `0a5c542`) removed the retired "votes are anonymous but not receipt-free" framing from five shipped strings and one component title, and added three regression blocks (UT-0887, UT-0759, UT-0888) so it cannot return. Six new test cases (TC-3564..TC-3569) carry that evidence, and the suite runs **619/619 green**. **FR-131 nevertheless stays OPEN, and the Must count stays 16 of 138.** The clause the drop closed is FR-131’s *closing sentence* — the ban on four words. The clauses that keep the row open are structural: the notice must appear **wherever a vote is cast**, on **SCR-13 and SCR-14**, and the voter **must acknowledge it to proceed**. None of those three exists — the ballot surfaces are unbuilt (Doc 06 §7 #21) and the banner has **no acknowledge control at all** (Doc 06 §7 item 26(d)). This is the clearest example in the matrix of a genuinely good fix that closes no row, and it is recorded that way on purpose: a row that closes on the easy clause of a requirement teaches everyone downstream to read the hard clauses as optional. The full rule-by-rule ruling is in the changelog, in §3.1’s FR-131 row and in §7 entry 117.
do not** — an 11.6% completion rate against a gate criterion that requires **zero** open Must rows. **v2.4.0 records the first Must row to close since v1.1.0**: FR-130, closed by the DES-102 design paydown over tests that were already passing. That is what a chain gap looks like when it is paid: no new code, one design element, one row. It also records the opposite lesson — DES-101 paid FR-077's chain gap and the row **still** did not close, because applying completion rule 4 surfaced that half its guarantee (refusal at every subsequent amendment) has no mechanism at either tier. Two DES elements, one closure.
````
REPLACE WITH:
````
**Gate 2 cannot be approved today.** Of 138 gating Must rows, **16 close and 122 do not** — an 11.6% completion rate against a gate criterion that requires **zero** open Must rows. **v2.4.0 records the first Must row to close since v1.1.0**: FR-130, closed by the DES-102 design paydown over tests that were already passing. That is what a chain gap looks like when it is paid: no new code, one design element, one row. It also records the opposite lesson — DES-101 paid FR-077's chain gap and the row **still** did not close, because applying completion rule 4 surfaced that half its guarantee (refusal at every subsequent amendment) has no mechanism at either tier. Two DES elements, one closure.
````

### OP 22 — docs/08-traceability-matrix.md — ISS-03 — the v2.8.0 addendum re-placed verbatim after the verdict’s closing paragraph, with a note recording the move
FIND:
````

---

## 1. Purpose & how to read
````
REPLACE WITH:
````

**v2.8.0 addendum (2026-09-06) — the FR-131 honesty drop, and why the numbers above did not move.** Doc 06 v2.5.1 (commit `0a5c542`) removed the retired "votes are anonymous but not receipt-free" framing from five shipped strings and one component title, and added three regression blocks (UT-0887, UT-0759, UT-0888) so it cannot return. Six new test cases (TC-3564..TC-3569) carry that evidence, and the suite runs **619/619 green**. **FR-131 nevertheless stays OPEN, and the Must count stays 16 of 138.** The clause the drop closed is FR-131’s *closing sentence* — the ban on four words. The clauses that keep the row open are structural: the notice must appear **wherever a vote is cast**, on **SCR-13 and SCR-14**, and the voter **must acknowledge it to proceed**. None of those three exists — the ballot surfaces are unbuilt (Doc 06 §7 #21) and the banner has **no acknowledge control at all** (Doc 06 §7 item 26(d)). This is the clearest example in the matrix of a genuinely good fix that closes no row, and it is recorded that way on purpose: a row that closes on the easy clause of a requirement teaches everyone downstream to read the hard clauses as optional. The full rule-by-rule ruling is in the changelog, in §3.1’s FR-131 row and in §7 entry 117. _(v2.9.0, ISS-03: this addendum was inserted **into the middle** of the verdict’s opening sentence at v2.8.0, splitting "16 close and 122" from "do not" and leaving literal asterisks in the rendered output. The sentence is restored and the addendum now sits below the verdict, where an addendum belongs. Its text is otherwise unchanged.)_

---

## 1. Purpose & how to read
````

### OP 23 — docs/08-traceability-matrix.md — ISS-01 + ISS-05 — FR-124 row: ninth cell folded into Status, row closed with a pipe, "approved design element" retracted
FIND:
````
| BR-009, BR-017, BR-006 | **FR-124** verified-status property is private to the holder; PrivacyStatus component refuses self-view; backing-aware 'ver' copy (absent/false/true/malformed `backing.isVerified` four-path coverage) | DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0132 | TC-3473, TC-3474, TC-3475, **TC-3568** | TC-3473 Pass (obs.) · UT-0754..UT-0756; TC-3474 Pass (obs.) · UT-0757; TC-3475 Pass (obs.) · UT-0758; **TC-3568 Pass (inh.) · UT-0759** (**inh.** ui Doc 06 v2.5.1, green in R-17) | ☐ **G-PHASE3** — DES-094 assigned; component passes for the UI layer; verified-status backend enforcement and full privacy guarantee pending | **v2.8.0 — evidence extended, status unchanged.** Until this drop only the **subtitle** half of the backing-aware `ver` copy was tested (UT-0758/TC-3475) while the **title** was hardcoded "Verified — private". UT-0759/TC-3568 gives the title the same four-path treatment (absent / `false` / `true` / malformed), with "Verified" as the fail-honest v1 default, and Doc 03 **v2.12.0** (2026-09-06) minted **DES-094 clause 9** to state that title rule normatively — so the chain link this evidence hangs on is an approved design element, not a test standing in for one. **The row stays OPEN for the reason it was already open** — the component passes at the UI layer; verified-status backend enforcement and the full privacy guarantee are unbuilt. A copy fix does not make a property private.
````
REPLACE WITH:
````
| BR-009, BR-017, BR-006 | **FR-124** verified-status property is private to the holder; PrivacyStatus component refuses self-view; backing-aware 'ver' copy (absent/false/true/malformed `backing.isVerified` four-path coverage) | DES-094 · ADR-023 | none | EP-09 ▸ FE-040 ▸ US-0132 | TC-3473, TC-3474, TC-3475, **TC-3568** | TC-3473 Pass (obs.) · UT-0754..UT-0756; TC-3474 Pass (obs.) · UT-0757; TC-3475 Pass (obs.) · UT-0758; **TC-3568 Pass (inh.) · UT-0759** (**inh.** ui Doc 06 v2.5.1, green in R-17) | ☐ **G-PHASE3** — DES-094 assigned; component passes for the UI layer; verified-status backend enforcement and full privacy guarantee pending. **v2.8.0 — evidence extended, status unchanged.** Until this drop only the **subtitle** half of the backing-aware `ver` copy was tested (UT-0758/TC-3475) while the **title** was hardcoded "Verified — private". UT-0759/TC-3568 gives the title the same four-path treatment (absent / `false` / `true` / malformed), with "Verified" as the fail-honest v1 default, and Doc 03 minted **DES-094 clause 9** at **v2.12.0** (2026-09-06) to state that title rule normatively, and carried it into **v2.13.0** — so the chain link this evidence hangs on is **the current corrected text of a design element (Doc 03 v2.13.0, In Review — not yet an approved source: v2.12.0 FAILED cycle 1 of its neutral technical review at 89%, and v2.13.0 is under cycle-2 review)**, rather than a test standing in for one. _(v2.9.0, ISS-05: v2.8.0 called it "an approved design element", which broke the citation discipline its own changelog set for the whole version.)_ **The row stays OPEN for the reason it was already open** — the component passes at the UI layer; verified-status backend enforcement and the full privacy guarantee are unbuilt. A copy fix does not make a property private. _(v2.9.0, ISS-01: this note was written as a NINTH cell in an eight-column table and ended without a pipe, so it was discarded when rendered; it is folded into this Status cell unchanged and the row now closes with a pipe.)_ |
````

### OP 24 — docs/08-traceability-matrix.md — ISS-01 + ISS-02 — FR-131 row: DES-098/DES-094 and SCR-13/SCR-14 recorded, summary restated from Doc 02 §4.45, obligation count corrected, ninth cell folded, row closed
FIND:
````
| BR-005, BR-009 | **FR-131** ballot seam with honest pre-action notices: cast records ballot without revealing direction; silent ballot-change (last cast counts); deterministic tally-hash for audit; cast refused without eligibilityRef; results embargo while ballot open; audit-contract publication | DES-096 · ADR-024 | none | EP-06 ▸ FE-058 ▸ US-0134 | TC-3476, TC-3481, TC-3482, TC-3483, TC-3484, TC-3485, TC-3486, TC-3487, TC-3534, TC-3535, **TC-3564, TC-3565, TC-3566, TC-3567, TC-3568, TC-3569** | TC-3482..TC-3486 Pass (obs.) · UT-0770..UT-0776; TC-3534, TC-3535 Pass (inh.) · UT-0864, UT-0869 (**inh.** web Doc 06 v2.3.2); TC-3476/TC-3481/TC-3487 Blocked; **TC-3564..TC-3567 Pass (inh.) · UT-0887** (web), **TC-3568 Pass (inh.) · UT-0759** (ui), **TC-3569 Pass (inh.) · UT-0888** (protocol) — all three **inh.** Doc 06 v2.5.1, observed green at file granularity in run R-17 (619/619, 2026-09-06) | ☐ **G-PHASE3** — DES-096 assigned; IS_INSECURE_MOCK=true; seam passes for cast/change/tally/refusal/embargo (5 TCs obs.); production ZK ballot pending Phase 3. **v2.3.0 — clause (d) is now BUILT, but only at one surface.** The four-clause non-dismissable open-tier notice is implemented and tested at the **parties-directory counting surface**: all four clauses (i)–(iv) render, the refusal comes **after** them inside the notice, `queryAllByRole('button')` within the notice is the **empty list** (no dismiss control), and the refused action changes nothing (UT-0864, TC-3534). Clause (b) is also closed as an honesty fix: the join copy no longer carries the v2-only claim "Nobody gets that list" and instead discloses that "our own records can link your account", rendered on every join panel (UT-0869, TC-3535). **TC-3481 stays Blocked and the row stays OPEN** — TC-3481 is written against the **ballot** surfaces SCR-13/SCR-14, which are not built in this drop (Doc 06 §7 #21), and TC-3487 (audit-contract endpoint) is still unwired. Partial delivery is recorded, not promoted to a close | **v2.8.0 — the closing sentence is now CLOSED and GUARDED; the row still does not close, and the reason is not a missing test.** Doc 06 v2.5.1 (commit `0a5c542`) removed the retired "anonymous but not receipt-free" framing from five shipped strings and one component title, and three regression blocks now hold the line: the rendered vote-surface banner carries no banned word except immediately negated and never "private"/"secure" (TC-3564), states (a), (b) and (c) positively with the retired claims absent (TC-3565), is bound to the shipped `en.ts` strings rather than a test copy (TC-3566), and the Arabic mirror carries the same truth (TC-3567); the `ver` badge title is backing-aware four-path with "Verified" as the fail-honest v1 default (TC-3568); the `maci_voting` flag description states the v1 truth (TC-3569). **Ruled rule by rule, FR-131 has eleven obligations and six are unmet or unevidenced.** Unmet **by absence of the thing itself, not by absence of a test**: (i) the notice must appear **wherever a vote is cast** and on **SCR-13/SCR-14** — neither surface is built (Doc 06 §7 #21), so TC-3481 stays Blocked; (ii) **"the voter MUST acknowledge the notice to proceed"** — the banner is non-dismissable but has **no acknowledge control at all**, recorded as owed SCR-13 story scope in Doc 06 §7 item 26(d). **Clause (7) alone keeps this row open even if every surface existed.** Unevidenced: "visible before confirmation" (no confirmation step to precede) and WCAG 2.2 AA + screen-reader (no a11y gate; NFR-011 is G-UI). Still Blocked in the seam half: TC-3487 (audit-contract publication) and TC-3476. **Closing this row on a banned-words fix would misrepresent the requirement, so it is not closed.**
````
REPLACE WITH:
````
| BR-005, BR-009 | **FR-131** v1 honesty notice (Doc 02 §4.45) — wherever a vote is cast, the UI MUST display a plain-language notice **before the ballot is confirmed**, stating **(a)** this ballot uses conventional authentication and is NOT anonymous, NOT receipt-free, NOT coercion-resistant; **(b)** the platform database CAN see vote direction and party membership in v1; **(c)** the cryptographic private ballot arrives with the Definition-B (v2) upgrade; **(d)** open-tier non-counting disclosure, shown before the action is refused. The notice MUST be visible before confirmation; **non-dismissable — the voter MUST acknowledge it to proceed**; WCAG 2.2 AA (DES-081) and screen-reader accessible; and MUST appear on **SCR-13** (ballot booth) and **SCR-14** (post-vote confirmation). The v1 product — UI, README and all public-facing materials — MUST NOT use "private", "anonymous", "receipt-free" or "secure" of v1 voting, nor claim the v2 guarantees. **This row ALSO tracks the DES-096 `IBallotService` seam half** — cast records ballot without revealing direction; silent ballot-change (last cast counts); deterministic tally-hash for audit; cast refused without `eligibilityRef`; results embargo while the ballot is open; audit-contract publication — which is design this row carries, **not** an FR-131 obligation | **DES-098** (the honesty notice — primary) · **DES-094** (status-badge reach, clause 9) · DES-096 · ADR-024 | **SCR-13, SCR-14 — both UNBUILT** (Doc 06 §7 #21) | EP-06 ▸ FE-058 ▸ US-0134 | TC-3476, TC-3481, TC-3482, TC-3483, TC-3484, TC-3485, TC-3486, TC-3487, TC-3534, TC-3535, **TC-3564, TC-3565, TC-3566, TC-3567, TC-3568, TC-3569** | TC-3482..TC-3486 Pass (obs.) · UT-0770..UT-0776; TC-3534, TC-3535 Pass (inh.) · UT-0864, UT-0869 (**inh.** web Doc 06 v2.3.2); TC-3476/TC-3481/TC-3487 Blocked; **TC-3564..TC-3567 Pass (inh.) · UT-0887** (web), **TC-3568 Pass (inh.) · UT-0759** (ui), **TC-3569 Pass (inh.) · UT-0888** (protocol) — all three **inh.** Doc 06 v2.5.1, observed green at file granularity in run R-17 (619/619, 2026-09-06) | ☐ **G-PHASE3** — DES-096 assigned; IS_INSECURE_MOCK=true; seam passes for cast/change/tally/refusal/embargo (5 TCs obs.); production ZK ballot pending Phase 3. **v2.3.0 — clause (d) is now BUILT, but only at one surface.** The four-clause non-dismissable open-tier notice is implemented and tested at the **parties-directory counting surface**: all four clauses (i)–(iv) render, the refusal comes **after** them inside the notice, `queryAllByRole('button')` within the notice is the **empty list** (no dismiss control), and the refused action changes nothing (UT-0864, TC-3534). Clause (b) is also closed as an honesty fix: the join copy no longer carries the v2-only claim "Nobody gets that list" and instead discloses that "our own records can link your account", rendered on every join panel (UT-0869, TC-3535). **TC-3481 stays Blocked and the row stays OPEN** — TC-3481 is written against the **ballot** surfaces SCR-13/SCR-14, which are not built in this drop (Doc 06 §7 #21), and TC-3487 (audit-contract endpoint) is still unwired. Partial delivery is recorded, not promoted to a close. **v2.8.0 — the closing sentence is now CLOSED and GUARDED; the row still does not close, and the reason is not a missing test.** Doc 06 v2.5.1 (commit `0a5c542`) removed the retired "anonymous but not receipt-free" framing from five shipped strings and one component title, and three regression blocks now hold the line: the rendered vote-surface banner carries no banned word except immediately negated and never "private"/"secure" (TC-3564), states (a), (b) and (c) positively with the retired claims absent (TC-3565), is bound to the shipped `en.ts` strings rather than a test copy (TC-3566), and the Arabic mirror carries the same truth (TC-3567); the `ver` badge title is backing-aware four-path with "Verified" as the fail-honest v1 default (TC-3568); the `maci_voting` flag description states the v1 truth (TC-3569). **Ruled rule by rule, FR-131 has ten obligations (Doc 02 §4.45) — plus the DES-096 seam half this row also tracks, which is not one of them — and six of the ten are unmet or unevidenced.** Unmet **by absence of the thing itself, not by absence of a test**: (i) the notice must appear **wherever a vote is cast** and on **SCR-13/SCR-14** — neither surface is built (Doc 06 §7 #21), so TC-3481 stays Blocked; (ii) **"the voter MUST acknowledge the notice to proceed"** — the banner is non-dismissable but has **no acknowledge control at all**, recorded as owed SCR-13 story scope in Doc 06 §7 item 26(d). **Clause (7) alone keeps this row open even if every surface existed.** Unevidenced: "visible before confirmation" (no confirmation step to precede) and WCAG 2.2 AA + screen-reader (no a11y gate; NFR-011 is G-UI). Still Blocked in the seam half: TC-3487 (audit-contract publication) and TC-3476. **Closing this row on a banned-words fix would misrepresent the requirement, so it is not closed.** **v2.9.0 — recording corrections only; no ruling, status or count changes (ISS-01, ISS-02).** Three things this row should always have carried are now in it: **DES-098**, the design element Doc 02 §4.45 names for this notice and the element TC-3564..TC-3569 cite, which appeared **nowhere in Doc 08** before this version; **DES-094**, for the status-badge reach TC-3568 verifies; and **SCR-13 / SCR-14**, recorded UNBUILT in the SCR cell instead of "none" so the gap is visible rather than absent. The requirement summary is restated from Doc 02 §4.45 — it had described the DES-096 seam and not the notice — and "eleven obligations" is corrected to **ten**, plus the seam half. The DES assignment follows **Doc 03 v2.13.0 §15** (2026-09-06, **In Review**, cycle 2 under way), where the architect states DES-098 primary, DES-094 for the status-badge reach, DES-096 retained as the ballot seam, and routes the recording to the tester; it is cited as **current corrected text, not an approved source**, and it closes nothing. **The row stays OPEN (G-PHASE3), Must COMPLETE stays 16 of 138, and §6’s Screens row still reads 23 mapped / 0 verified** — naming two unbuilt screens in a trace cell is not a screen becoming traced. The v2.8.0 ruling above was itself written as a NINTH cell in an eight-column table and ended without a pipe, so a renderer discarded it; it is folded into this Status cell unchanged and the row now closes with a pipe. |
````

### OP 25 — docs/08-traceability-matrix.md — ISS-02 — the subtotal note’s obligation framing corrected (the 114 · 16 · 98 subtotal itself is unchanged)
FIND:
````
**Must FR subtotal (v2.5.4): 114 rows · 16 complete · 98 open.** _(Corrected v2.5.4 — the line had been left at its v2.2.2 values, "12 complete · 102 open", through four drops that closed rows. The 16 complete are the 15 rows marked ✅ **COMPLETE** plus FR-051, marked ✅ **COMPLETE (conditional)**. Reconciles with §6: 98 open FRs + 24 open NFRs (§3.2 has no complete row) = **122 open** of **138** Must.)_ _(**v2.8.0: UNCHANGED — 114 · 16 · 98 — and stated rather than left to inference.** The FR-131 honesty drop extended the evidence on FR-131 and FR-124 and closed neither, so no row moved in either direction. The check was made row by row, not assumed: FR-131 fails six of its eleven obligations (see its row and §7 entry 117); FR-124 gains the title half of its DES-094 clause-7 coverage but its backend enforcement is still unbuilt. No other Must FR row cites `UT-0887`, `UT-0759` or `UT-0888`.)_
````
REPLACE WITH:
````
**Must FR subtotal (v2.5.4): 114 rows · 16 complete · 98 open.** _(Corrected v2.5.4 — the line had been left at its v2.2.2 values, "12 complete · 102 open", through four drops that closed rows. The 16 complete are the 15 rows marked ✅ **COMPLETE** plus FR-051, marked ✅ **COMPLETE (conditional)**. Reconciles with §6: 98 open FRs + 24 open NFRs (§3.2 has no complete row) = **122 open** of **138** Must.)_ _(**v2.8.0: UNCHANGED — 114 · 16 · 98 — and stated rather than left to inference.** The FR-131 honesty drop extended the evidence on FR-131 and FR-124 and closed neither, so no row moved in either direction. The check was made row by row, not assumed: FR-131 fails six of its ten obligations (Doc 02 §4.45 — see its row and §7 entry 117); FR-124 gains the title half of its DES-094 clause-7 coverage but its backend enforcement is still unbuilt. No other Must FR row cites `UT-0887`, `UT-0759` or `UT-0888`.)_
````

### OP 26 — docs/08-traceability-matrix.md — ISS-01 — NFR-011 row: eighth cell folded into Status, row closed with a pipe
FIND:
````
| BR-007 | **NFR-011** WCAG 2.2 AA | DES-081 | US-0045, US-0070, US-0132 | TC-2250–TC-2255, TC-3488 | UT-0704, UT-0721 (two components, not executed); TC-3488 Pass (obs.) · UT-0753 (accessible-name aria-label, `packages/ui/test/PrivacyStatus.test.tsx` line **51** — line 46 at v2.7.0; the file moved at Doc 06 v2.5.1) | ☐ **G-UI** — no automated a11y gate; no manual screen-reader pass has been performed (DES-081 assigned in v1.1.0, closing G-TRACE); TC-3488/UT-0753 (TS-SCAFFOLD accessible-name check) pass; full WCAG 2.2 AA automation gate and screen-reader pass remain pending | _(**v2.8.0 — citation corrected, status unchanged.** UT-0753’s expected `aria-label` changed from "Verified — private" to **"Verified"** at Doc 06 v2.5.1, because FR-131 bans "private" as a description of v1 voting; the accessible name still matches the displayed state title, so what TC-3488 verifies is untouched — only the string it lands on changed. Re-confirmed green in run R-17 (`packages/ui` 18/18). The row stays **G-UI**: one component-level accessible-name check is not a WCAG 2.2 AA gate, and no screen-reader pass has been performed.)_
````
REPLACE WITH:
````
| BR-007 | **NFR-011** WCAG 2.2 AA | DES-081 | US-0045, US-0070, US-0132 | TC-2250–TC-2255, TC-3488 | UT-0704, UT-0721 (two components, not executed); TC-3488 Pass (obs.) · UT-0753 (accessible-name aria-label, `packages/ui/test/PrivacyStatus.test.tsx` line **51** — line 46 at v2.7.0; the file moved at Doc 06 v2.5.1) | ☐ **G-UI** — no automated a11y gate; no manual screen-reader pass has been performed (DES-081 assigned in v1.1.0, closing G-TRACE); TC-3488/UT-0753 (TS-SCAFFOLD accessible-name check) pass; full WCAG 2.2 AA automation gate and screen-reader pass remain pending. _(**v2.8.0 — citation corrected, status unchanged.** UT-0753’s expected `aria-label` changed from "Verified — private" to **"Verified"** at Doc 06 v2.5.1, because FR-131 bans "private" as a description of v1 voting; the accessible name still matches the displayed state title, so what TC-3488 verifies is untouched — only the string it lands on changed. Re-confirmed green in run R-17 (`packages/ui` 18/18). The row stays **G-UI**: one component-level accessible-name check is not a WCAG 2.2 AA gate, and no screen-reader pass has been performed.)_ _(v2.9.0, ISS-01: the v2.8.0 note was written as an EIGHTH cell in a seven-column table and ended without a pipe, so it was discarded when rendered; it is folded into this Status cell unchanged and the row now closes with a pipe.)_ |
````

### OP 27 — docs/08-traceability-matrix.md — ISS-08 — NFR-013 row: the "no locale files" reason corrected; G-UI verdict and TC cell unchanged
FIND:
````
| BR-007 | **NFR-013** 8 locales incl. RTL | DES-083 | US-0070 | TC-2330, TC-2333 | none | ☐ **G-UI** — no locale files, no string-coverage gate (DES-083 assigned in v1.1.0, closing G-TRACE) |
````
REPLACE WITH:
````
| BR-007 | **NFR-013** 8 locales incl. RTL | DES-083 | US-0070 | TC-2330, TC-2333 | none | ☐ **G-UI** — locale files exist (`apps/web/src/i18n/en.ts`, `ar.ts`) but there is **no locale-coverage or string-coverage gate and no RTL rendering evidence**, and the 8-locale guarantee is unbuilt (DES-083 assigned in v1.1.0, closing G-TRACE). _(v2.9.0, ISS-08: this row read "no locale files"; two exist and are shipped, and TC-3567 asserts against `ar.banner.*`. **The G-UI verdict is unchanged — only its stated reason was wrong.** TC-3567 is deliberately NOT linked into the TC cell: it reads two Arabic copy constants and exercises neither locale coverage nor RTL, and Doc 07 v2.6.0 removed the same NFR-013 claim from that case for the same reason.)_ |
````

### OP 28 — docs/08-traceability-matrix.md — ISS-01 — §4 orphan-check row: third cell folded into Result, row closed with a pipe
FIND:
````
| `UT` in the repository with no `TC` mapping | **0 material** — all 288 observed/inherited tests fall inside a mapped group. ⚠ Same caveat | _(v2.8.0: the FR-131 honesty drop’s three blocks — `UT-0887` (web, 4), `UT-0759` (ui, 4), `UT-0888` (protocol, 1) — are mapped to TC-3564..TC-3569 in Doc 07 §8 and are inside the sweep. The **288** figure is the v2.7.0 observed/inherited population and has **not** been re-derived at this version, so it is annotated rather than advanced; re-deriving it belongs with the `TD-RTM-02` recount.)_
````
REPLACE WITH:
````
| `UT` in the repository with no `TC` mapping | **0 material** — all 288 observed/inherited tests fall inside a mapped group. ⚠ Same caveat. _(v2.8.0: the FR-131 honesty drop’s three blocks — `UT-0887` (web, 4), `UT-0759` (ui, 4), `UT-0888` (protocol, 1) — are mapped to TC-3564..TC-3569 in Doc 07 §8 and are inside the sweep. The **288** figure is the v2.7.0 observed/inherited population and has **not** been re-derived at this version, so it is annotated rather than advanced; re-deriving it belongs with the `TD-RTM-02` recount.)_ _(v2.9.0, ISS-01: the v2.8.0 annotation was written as a THIRD cell in a two-column table and ended without a pipe, so it was discarded when rendered; it is folded into this Result cell unchanged and the row now closes with a pipe. Note the irony recorded by the reviewer: v2.8.0 un-orphaned this table from its blockquote and introduced this defect in the same edit.)_ |
````

### OP 29 — docs/08-traceability-matrix.md — ISS-04 — §6’s TD-RTM-02 pointer reconciled with the §10 entry as rewritten
FIND:
````
**v2.8.0 update to the convention note, and `TD-RTM-02` is the point of it.** Doc 07 at **v2.5.0** mints six cases (TC-3564..TC-3569), so its anchor count moves 463 → **469** and this dashboard’s expanded figure 472 → **478** (469 − 1 + 10). Passing evidence moves 217 → **224**: +6 for the new cases and +1 for TC-2614, re-statused *Not run* → Pass (inh.) in Doc 07 v2.5.0 on the R-17 result. The inherited bucket therefore moves 129 → **136** and the observed bucket stays **88** — run R-17 (2026-09-06, 619/619, tester-executed) was observed at **file** granularity, and Doc 07 §2’s corroboration convention records such cases as Pass (inh.) rather than promoting them. Gaps: 478 − 224 = **254**. ⚠ **These figures are stated in ONE of three live conventions and must not be quoted across sections.** `TD-RTM-02` (§10) records that Doc 07 §2 counts **471**, this dashboard counts **478**, and Doc 07 §10’s overlap paragraph counts on a third base again; the three disagree by construction and the disagreement is **unresolved**. _(v2.8.0: **L-13 paid.** v2.7.0 published "472 / 255" and asserted Doc 07’s anchor count unqualified, with no pointer to `TD-RTM-02` — the mirror image of the §4→§10 defect v2.7.0 itself closed. It was formally accepted and flagged "fix first on any future touch"; this version was editing the line, so the pointer is now in it. What is **not** fixed is the underlying disagreement — widening it by 6 on both sides is what a sync version can honestly do; reconciling it is a document-wide recount the tester owes.)_
````
REPLACE WITH:
````
**v2.8.0 update to the convention note, and `TD-RTM-02` is the point of it.** Doc 07 at **v2.5.0** mints six cases (TC-3564..TC-3569), so its anchor count moves 463 → **469** and this dashboard’s expanded figure 472 → **478** (469 − 1 + 10). Passing evidence moves 217 → **224**: +6 for the new cases and +1 for TC-2614, re-statused *Not run* → Pass (inh.) in Doc 07 v2.5.0 on the R-17 result. The inherited bucket therefore moves 129 → **136** and the observed bucket stays **88** — run R-17 (2026-09-06, 619/619, tester-executed) was observed at **file** granularity, and Doc 07 §2’s corroboration convention records such cases as Pass (inh.) rather than promoting them. Gaps: 478 − 224 = **254**. ⚠ **These figures are stated in ONE of three live conventions and must not be quoted across sections.** `TD-RTM-02` (§10) records that Doc 07 §2 counts **471**, this dashboard counts **478**, and Doc 07 §10’s overlap paragraph counts on a third base again; the three disagree by construction and the disagreement is **unresolved**. _(v2.9.0, ISS-04: the §10 `TD-RTM-02` entry now records exactly these figures and this three-way framing. Until v2.9.0 it still carried its superseded v2.6.1 figures — 465 / 456 / 463 / 472, 217 with passing evidence, the 610/610 suite — and a two-way framing, so this sentence and the changelog were attributing to it content it did not contain. The attribution is now true; the debt is still OPEN.)_ _(v2.8.0: **L-13 paid.** v2.7.0 published "472 / 255" and asserted Doc 07’s anchor count unqualified, with no pointer to `TD-RTM-02` — the mirror image of the §4→§10 defect v2.7.0 itself closed. It was formally accepted and flagged "fix first on any future touch"; this version was editing the line, so the pointer is now in it. What is **not** fixed is the underlying disagreement — widening it by 6 on both sides is what a sync version can honestly do; reconciling it is a document-wide recount the tester owes.)_
````

### OP 30 — docs/08-traceability-matrix.md — ISS-02 — the v2.8.0 DoD check’s obligation framing corrected (17 of 134 unchanged)
FIND:
````
**v2.8.0 DoD check (FR-131 honesty drop) — no story newly meets the bar; the count stays 17 of 134.** Checked story by story rather than assumed, because this drop shipped visible user-facing correctness and it would be easy to reward it with a status it has not earned. **US-0134** (ballot seam and honest pre-action notices) is the story the drop was built under and it is **NOT done**: CLAUDE.md makes a story done only when its RTM row completes, and FR-131 stays OPEN on six of its eleven obligations — most sharply the acknowledge-to-proceed control, which does not exist, and the SCR-13/SCR-14 ballot surfaces, which are unbuilt. US-0134 moves from *not done* to *not done with materially better evidence*, which is not a DoD state. **US-0132** (PrivacyStatus) is **not done** — FR-124 stays OPEN; TC-3568 closes the title half of DES-094 clause 7, not the backend enforcement the row waits on. **US-0133** is **not done** — FR-122/FR-123 remain stub-gated at `IS_INSECURE_MOCK=true` and are untouched by this drop. No other story cites `UT-0887`, `UT-0759` or `UT-0888`. **Stories meeting DoD: 17 of 134 — unchanged.**
````
REPLACE WITH:
````
**v2.8.0 DoD check (FR-131 honesty drop) — no story newly meets the bar; the count stays 17 of 134.** Checked story by story rather than assumed, because this drop shipped visible user-facing correctness and it would be easy to reward it with a status it has not earned. **US-0134** (ballot seam and honest pre-action notices) is the story the drop was built under and it is **NOT done**: CLAUDE.md makes a story done only when its RTM row completes, and FR-131 stays OPEN on six of its ten obligations (Doc 02 §4.45) — most sharply the acknowledge-to-proceed control, which does not exist, and the SCR-13/SCR-14 ballot surfaces, which are unbuilt. US-0134 moves from *not done* to *not done with materially better evidence*, which is not a DoD state. **US-0132** (PrivacyStatus) is **not done** — FR-124 stays OPEN; TC-3568 closes the title half of DES-094 clause 7, not the backend enforcement the row waits on. **US-0133** is **not done** — FR-122/FR-123 remain stub-gated at `IS_INSECURE_MOCK=true` and are untouched by this drop. No other story cites `UT-0887`, `UT-0759` or `UT-0888`. **Stories meeting DoD: 17 of 134 — unchanged.**
````

### OP 31 — docs/08-traceability-matrix.md — ISS-02 + ISS-06 — gap-log entry 117: DES-098/DES-094 recorded, sentence break inserted, obligation framing corrected
FIND:
````
| 117 | FR-131 | G-PHASE3 | DES-096/ADR-024 assigned; IS_INSECURE_MOCK=true; TC-3482..TC-3486 Pass (obs.) at seam level. **v2.3.0: clause (d) is BUILT and tested at the parties-directory counting surface** (TC-3534/UT-0864 — four clauses, refusal after them, no dismiss control) and **clause (b) honesty copy is fixed** (TC-3535/UT-0869). **TC-3481 stays Blocked** because it is written against the **SCR-13/SCR-14 ballot** surfaces, unbuilt in this drop (Doc 06 §7 #21); TC-3476 and TC-3487 still Blocked; production ZK ballot pending **v2.8.0 (FR-131 honesty drop, Doc 06 v2.5.1, commit `0a5c542`): the closing sentence is CLOSED and regression-guarded — TC-3564..TC-3567/UT-0887 (rendered banner: banned words only when negated, never "private"/"secure"; (a)/(b)/(c) stated; guard bound to the shipped `en.ts` strings; Arabic mirror honest), TC-3568/UT-0759 (`ver` title backing-aware four-path, "Verified" as the fail-honest v1 default), TC-3569/UT-0888 (`maci_voting` description). Suite 619/619 green in R-17. THE ROW STILL DOES NOT CLOSE, ruled clause by clause: of FR-131’s eleven obligations, (a), (b), (c) and the closing sentence are met at the copy layer, and six are not — the notice cannot be shown "wherever a vote is cast" or on SCR-13/SCR-14 (unbuilt, Doc 06 §7 #21); "visible before confirmation" has no confirmation step to precede; WCAG 2.2 AA and screen-reader access are unevidenced (NFR-011 is G-UI); clause (d) is built at the parties-directory and proposals-admission surfaces but not at the binding-vote surface (TC-3481 Blocked); TC-3487 audit-contract publication and TC-3476 stay Blocked. **The blocking cause in one line, unchanged in substance and sharpened in fact: "the voter MUST acknowledge the notice to proceed" has no acknowledge control at all — the banner is non-dismissable but nothing gates proceeding (Doc 06 §7 item 26(d), owed SCR-13 story scope) — and the ballot surfaces the notice must appear on are unbuilt.** | Samuel Oyelaran (acknowledge control + ballot surfaces, SCR-13 story scope) · Nadia Hassan (FR-131 owner) | Phase 3 |
````
REPLACE WITH:
````
| 117 | FR-131 | G-PHASE3 | **DES-098** (the v1 honesty notice — primary, Doc 02 §4.45) · **DES-094** (status-badge reach, clause 9) · DES-096/ADR-024 assigned; IS_INSECURE_MOCK=true; TC-3482..TC-3486 Pass (obs.) at seam level. **v2.3.0: clause (d) is BUILT and tested at the parties-directory counting surface** (TC-3534/UT-0864 — four clauses, refusal after them, no dismiss control) and **clause (b) honesty copy is fixed** (TC-3535/UT-0869). **TC-3481 stays Blocked** because it is written against the **SCR-13/SCR-14 ballot** surfaces, unbuilt in this drop (Doc 06 §7 #21); TC-3476 and TC-3487 still Blocked; production ZK ballot pending. **v2.8.0 (FR-131 honesty drop, Doc 06 v2.5.1, commit `0a5c542`): the closing sentence is CLOSED and regression-guarded — TC-3564..TC-3567/UT-0887 (rendered banner: banned words only when negated, never "private"/"secure"; (a)/(b)/(c) stated; guard bound to the shipped `en.ts` strings; Arabic mirror honest), TC-3568/UT-0759 (`ver` title backing-aware four-path, "Verified" as the fail-honest v1 default), TC-3569/UT-0888 (`maci_voting` description). Suite 619/619 green in R-17. THE ROW STILL DOES NOT CLOSE, ruled clause by clause: of FR-131’s ten obligations (Doc 02 §4.45; the DES-096 seam half this row also tracks is not one of them), (a), (b), (c) and the closing sentence are met at the copy layer, and six are not — the notice cannot be shown "wherever a vote is cast" or on SCR-13/SCR-14 (unbuilt, Doc 06 §7 #21); "visible before confirmation" has no confirmation step to precede; WCAG 2.2 AA and screen-reader access are unevidenced (NFR-011 is G-UI); clause (d) is built at the parties-directory and proposals-admission surfaces but not at the binding-vote surface (TC-3481 Blocked); TC-3487 audit-contract publication and TC-3476 stay Blocked. **The blocking cause in one line, unchanged in substance and sharpened in fact: "the voter MUST acknowledge the notice to proceed" has no acknowledge control at all — the banner is non-dismissable but nothing gates proceeding (Doc 06 §7 item 26(d), owed SCR-13 story scope) — and the ballot surfaces the notice must appear on are unbuilt.** **v2.9.0 (ISS-02, ISS-06): `DES-098` is recorded against this entry for the first time** — the design element Doc 02 §4.45 names for this notice appeared nowhere in Doc 08 before v2.9.0, though six of the cases above cite it; DES-094 is named for the status-badge reach TC-3568 verifies. The assignment follows Doc 03 v2.13.0 §15 (**In Review**, cited as current corrected text, not an approved source), and SCR-13/SCR-14 are now recorded UNBUILT in the §3.1 SCR cell rather than "none". The missing sentence break before "v2.8.0" is also fixed — the entry had read "production ZK ballot pending v2.8.0". **No status, gap code, owner, phase or count changes; the entry stays live.** | Samuel Oyelaran (acknowledge control + ballot surfaces, SCR-13 story scope) · Nadia Hassan (FR-131 owner) | Phase 3 |
````

### OP 32 — docs/08-traceability-matrix.md — ISS-07 + ISS-02 — §9 tester row: v2.9.0 record added, doubled italic close repaired, obligation framing corrected
FIND:
````
| Tester (author, **R**) | Ji-woo Park | **Submitted — 122 open Must rows recorded; 0 Must rows CLOSED, 0 reclassified, 0 opened. Must 16/138 · stories 17/134 · both UNCHANGED.** | 2026-09-06 | **v2.8.0, Status In Review. FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved; Doc 07 v2.5.0 sync; commit `0a5c542`, PR #19).** Suite re-run by the tester: **619/619 green, exit 0** (run R-17). Evidence extended on four rows — FR-131 (+TC-3564..TC-3569), FR-124 (+TC-3568), NFR-011 (citation corrected), RISK-02 (+TC-3564..TC-3567) — and **not one status moved**. **The FR-131 Must row was ruled clause by clause and does NOT close: six of its eleven obligations are unmet or unevidenced, and the two that matter most are unmet because the thing itself does not exist — there is no acknowledge-to-proceed control (Doc 06 §7 item 26(d)) and SCR-13/SCR-14 are unbuilt (Doc 06 §7 #21).** 16 does not become 17. **US-0134 does not meet DoD.** The drop is good work and closes FR-131’s banned-words clause properly; recording that as a row closure would teach every downstream reader that the hard clauses of a requirement are optional. Two accepted Lows paid in passing (L-13 §6 `TD-RTM-02` pointer; L-2 §4 blockquote moved out of the table); the other twelve, including L-3, sit in lines this version does not touch and remain accepted-and-carried. `TD-RTM-01` (duplicate `UT-0841`..`UT-0848`) stays OPEN — engineer scope. `TD-RTM-02` stays OPEN and is widened by 6 on both sides. _(Prior v2.5.0: **v2.5.0, Status In Review. Proposals & debate drop (Doc 06 v2.4.1; Doc 03 v2.9.1 DES-103..DES-106; TC v2.4.0 sync).** Five chain gaps paid; **two** rows close on rule 4 and three do not: FR-080 (informed-consent disclosure states permanence nowhere, and no confirm step exists; DES-103 binds no SCR though FR-080 has a UI obligation), FR-091 (`schedule()` unwired — the "per published timelines" clause), FR-092 (four of seven enumerated trail elements unrecorded + third-party reconstruction unbuilt). FR-024 evidence extended, status unchanged. FR-122/FR-123 evidence extended, both stay G-PHASE3. Suite 542 → **608** green. Must 15/123; stories 16/134.)_)_ _(Prior v2.4.1: **v2.4.0, Status In Review. DES paydown traceability (Doc 03 v2.8.1 Approved; TC v2.3.1 sync).** FR-130 **CLOSES** on DES-102 + SCR-09/SCR-11 — all four rules hold, every clause separately tested, v1 tamper-evidence residual disclosed in the row and the row flagged for revisit when on-chain membership goes live. FR-077 does **NOT** close despite DES-101: rule 4 fails because its amendment-refusal clause has no mechanism at either tier (`Party.amendCharter` never sees the charter text) — reclassified G-NOMECH and routed to the architect. DES-097(b) closes nothing by design. Must 13/125; stories 14/134 (US-0131 newly done; US-0087 stays Partial). _(Prior v2.3.0: **v2.3.1, Status In Review (cycle-1 rework of v2.3.0). Join/membership drop traceability (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%, since v2.3.3 Approved; TC v2.3.0 sync).** Evidence extended on 7 forward-trace rows with TS-MEMBERSHIP (TC-3517..TC-3540, 24 cases): FR-020 and FR-022 (already COMPLETE — strengthened, incl. the *structural* no-verifier guarantee); FR-064, FR-122, FR-123, FR-130, FR-131 (all **stay OPEN**); FR-013 Should row evidence strengthened with the two DES-097 seam guards. **FR-021 deliberately NOT extended** — this drop produces no vote-weight or tally evidence, and claiming it would be fabricated coverage. **FR-064's semantics blocker was RESOLVED after v2.3.0 was authored** by the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, 2026-08-29; Doc 02 v2.15.0 Approved; Doc 06 v2.3.3 Approved) — gap-log entry 55 now records a **SPLIT** (semantics resolved / DES-065 open), and the row stays OPEN on DES-065 alone. Summary counts unchanged (12/126 Must; 16/145 total); **no story newly meets DoD** (13/134, checked story by story). Dashboard TC 425→449; passing evidence 171→195 (107 inh. + 88 obs.).)_ _(Prior v2.2.4:_ Party-creation drop traceability (Doc 06 v2.2.0 Approved; TC v2.2.2 sync): FR-010/011/018/020/077/130 forward-trace rows updated with TC-3489..TC-3516 and UT evidence (all pass inh.); FR-012/013 Should rows updated — FR-013 **CLOSED** — cooldown tested; US-0021 met DoD; dashboard TC 397→425.)_ |
````
REPLACE WITH:
````
| Tester (author, **R**) | Ji-woo Park | **Submitted — 122 open Must rows recorded; 0 Must rows CLOSED, 0 reclassified, 0 opened. Must 16/138 · stories 17/134 · both UNCHANGED.** | 2026-09-06 | **v2.9.0, Status In Review — rework cycle 2 against the v2.8.0 neutral technical review (FAIL 85%, 0C/2H/3M/3L).** Nothing in that report asked a status, a count or a verdict to move, and nothing moved: **Must 138 · COMPLETE 16 · OPEN 122 · stories 17/134, all unchanged; FR-131 stays OPEN.** Fixed: four rows whose v2.8.0 additions were written as extra cells beyond their table header — invisible when rendered, including the whole FR-131 ruling — folded into their final cells and closed with pipes; **`DES-098` recorded against FR-131 for the first time**, with DES-094 for the status-badge reach and SCR-13/SCR-14 marked UNBUILT instead of "none"; the FR-131 summary restated from Doc 02 §4.45 and its obligation count corrected from eleven to **ten** plus the DES-096 seam half; the split Gate-2 sentence restored and the addendum moved below the verdict; §10’s `TD-RTM-02` entry updated to the figures §6 already attributed to it; the FR-124 "approved design element" claim retracted to current corrected text (Doc 03 v2.13.0, **In Review**); NFR-013’s "no locale files" reason corrected (`en.ts`/`ar.ts` exist — the G-UI verdict stands); gap-log entry 117’s sentence break and this row’s doubled italic close repaired. Suite re-executed at rework time: **619/619, exit 0**, identical to R-17. _(v2.8.0 record, retained:)_ **v2.8.0, Status In Review. FR-131 honesty-drop traceability (Doc 06 v2.5.1 Approved; Doc 07 v2.5.0 sync; commit `0a5c542`, PR #19).** Suite re-run by the tester: **619/619 green, exit 0** (run R-17). Evidence extended on four rows — FR-131 (+TC-3564..TC-3569), FR-124 (+TC-3568), NFR-011 (citation corrected), RISK-02 (+TC-3564..TC-3567) — and **not one status moved**. **The FR-131 Must row was ruled clause by clause and does NOT close: six of its ten obligations (Doc 02 §4.45) are unmet or unevidenced, and the two that matter most are unmet because the thing itself does not exist — there is no acknowledge-to-proceed control (Doc 06 §7 item 26(d)) and SCR-13/SCR-14 are unbuilt (Doc 06 §7 #21).** 16 does not become 17. **US-0134 does not meet DoD.** The drop is good work and closes FR-131’s banned-words clause properly; recording that as a row closure would teach every downstream reader that the hard clauses of a requirement are optional. Two accepted Lows paid in passing (L-13 §6 `TD-RTM-02` pointer; L-2 §4 blockquote moved out of the table); the other twelve, including L-3, sit in lines this version does not touch and remain accepted-and-carried. `TD-RTM-01` (duplicate `UT-0841`..`UT-0848`) stays OPEN — engineer scope. `TD-RTM-02` stays OPEN and is widened by 6 on both sides. _(Prior v2.5.0: **v2.5.0, Status In Review. Proposals & debate drop (Doc 06 v2.4.1; Doc 03 v2.9.1 DES-103..DES-106; TC v2.4.0 sync).** Five chain gaps paid; **two** rows close on rule 4 and three do not: FR-080 (informed-consent disclosure states permanence nowhere, and no confirm step exists; DES-103 binds no SCR though FR-080 has a UI obligation), FR-091 (`schedule()` unwired — the "per published timelines" clause), FR-092 (four of seven enumerated trail elements unrecorded + third-party reconstruction unbuilt). FR-024 evidence extended, status unchanged. FR-122/FR-123 evidence extended, both stay G-PHASE3. Suite 542 → **608** green. Must 15/123; stories 16/134.)_ _(Prior v2.4.1: **v2.4.0, Status In Review. DES paydown traceability (Doc 03 v2.8.1 Approved; TC v2.3.1 sync).** FR-130 **CLOSES** on DES-102 + SCR-09/SCR-11 — all four rules hold, every clause separately tested, v1 tamper-evidence residual disclosed in the row and the row flagged for revisit when on-chain membership goes live. FR-077 does **NOT** close despite DES-101: rule 4 fails because its amendment-refusal clause has no mechanism at either tier (`Party.amendCharter` never sees the charter text) — reclassified G-NOMECH and routed to the architect. DES-097(b) closes nothing by design. Must 13/125; stories 14/134 (US-0131 newly done; US-0087 stays Partial). _(Prior v2.3.0: **v2.3.1, Status In Review (cycle-1 rework of v2.3.0). Join/membership drop traceability (Doc 06 v2.3.2 Approved, cycle-3 PASS 97%, since v2.3.3 Approved; TC v2.3.0 sync).** Evidence extended on 7 forward-trace rows with TS-MEMBERSHIP (TC-3517..TC-3540, 24 cases): FR-020 and FR-022 (already COMPLETE — strengthened, incl. the *structural* no-verifier guarantee); FR-064, FR-122, FR-123, FR-130, FR-131 (all **stay OPEN**); FR-013 Should row evidence strengthened with the two DES-097 seam guards. **FR-021 deliberately NOT extended** — this drop produces no vote-weight or tally evidence, and claiming it would be fabricated coverage. **FR-064's semantics blocker was RESOLVED after v2.3.0 was authored** by the `FR-064-SEMANTICS` ruling (option (a) EXPLICIT-LEAVE; Rathish, 2026-08-29; Doc 02 v2.15.0 Approved; Doc 06 v2.3.3 Approved) — gap-log entry 55 now records a **SPLIT** (semantics resolved / DES-065 open), and the row stays OPEN on DES-065 alone. Summary counts unchanged (12/126 Must; 16/145 total); **no story newly meets DoD** (13/134, checked story by story). Dashboard TC 425→449; passing evidence 171→195 (107 inh. + 88 obs.).)_ _(Prior v2.2.4:_ Party-creation drop traceability (Doc 06 v2.2.0 Approved; TC v2.2.2 sync): FR-010/011/018/020/077/130 forward-trace rows updated with TC-3489..TC-3516 and UT evidence (all pass inh.); FR-012/013 Should rows updated — FR-013 **CLOSED** — cooldown tested; US-0021 met DoD; dashboard TC 397→425.)_ |
````

### OP 33 — docs/08-traceability-matrix.md — ISS-04 — §10 TD-RTM-02 entry restated to the v2.8.0/v2.9.0 figures and the three-way framing (raising date and OPEN status unchanged)
FIND:
````
| **TD-RTM-02** | **Doc 07 and Doc 08 do not agree on the test-case denominator.** Doc 07 v2.4.4 §2 gives **465** and describes it as the *expanded* count with `TC-3200`-`TC-3209` already listed as 10 individual cases — which implies **456** anchors. Doc 08 §6 gives **463** anchors and derives **472** expanded (463 − 1 + 10). The two documents therefore disagree on both figures, by **7**. Raised at the v2.6.1 review as a carried Low ("§6 and §9 use different denominators with no bridge"); stating that each is "correct in its own convention" would have closed it comfortably and is **not supportable**, because 456 ≠ 463 | **No status, gap or count is affected, and the load-bearing figures are sound**: 217 cases with passing evidence and the 610/610 suite were each re-derived independently at three separate reviews. What is unusable is any statement of the form "N of M cases" that crosses between §6 and §9, and any future reconciliation attempt between §6's **255** (= 472 − 217) and §9's **232** — different measures over different denominators | **tester** (Ji-woo Park) — owns both Doc 07 and Doc 08, so this is one owner's reconciliation, not a cross-role negotiation | **OPEN — raised 2026-08-30.** Does not block the current merge. Reconcile to ONE stated definition before Gate 2, since a Gate-2 verifier reading both documents will otherwise meet two totals for one suite |
````
REPLACE WITH:
````
| **TD-RTM-02** | **Doc 07 and Doc 08 do not agree on the test-case denominator, and there are THREE live conventions, not two.** **(1) Doc 07 §2** counts **471** designed cases — the suite-table anchor total at Doc 07 v2.5.0/v2.6.0. **(2) Doc 08 §6** counts **478** — Doc 07’s **469** row anchors expanded (469 − 1 + 10, with `TC-3200`-`TC-3209` counted as ten individual cases). **(3) Doc 07 §10**’s automated-and-Blocked overlap paragraph counts on a **third base again**: 193 automated + 171 Blocked-only + 48 No mechanism + 12 Manual = **424** distinct, on v2.1.0-era base figures that already disagree with §2’s 239 automated and 49 No mechanism. Raised at the v2.6.1 review as a carried Low ("§6 and §9 use different denominators with no bridge"); stating that each is "correct in its own convention" would have closed it comfortably and is **not supportable**, because the three bases are not reconcilable by inspection | **No requirement-row status, Must-row count or gap classification is affected, and the load-bearing figures are sound**: the **224** cases with passing evidence and the **619/619** suite (run **R-17**, 2026-09-06, tester-executed, exit 0) have each been re-derived independently, most recently by the neutral reviewer at the v2.8.0 cycle-1 review. What is unusable is any statement of the form "N of M cases" that crosses between §6, §9 and Doc 07 §10 — including any reconciliation of §6’s **254** (= 478 − 224) with §9’s **232**, which are different measures over different denominators | **tester** (Ji-woo Park) — owns both Doc 07 and Doc 08, so this is one owner's reconciliation, not a cross-role negotiation | **OPEN — raised 2026-08-30.** Does not block the current merge. Reconcile to ONE stated definition before Gate 2, since a Gate-2 verifier reading these documents will otherwise meet three totals for one suite. _(v2.9.0, ISS-04: this entry was still written on its v2.6.1 figures — Doc 07 v2.4.4’s 465, the implied 456 anchors, §6’s then-463/472, 217 with passing evidence, the 610/610 suite — and on a two-way framing, while §6 and the v2.8.0 changelog had already begun quoting it for the three-way v2.8.0 framing it did not contain. Restated to the current figures and the three-way framing; **the raising date is deliberately unchanged and the debt is no closer to paid** — the reconciliation is a document-wide recount the tester owes, not a side-effect of a sync version.)_ |
````

