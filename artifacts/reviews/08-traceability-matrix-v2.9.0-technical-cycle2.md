# Document Review Report — Doc 08 Traceability Matrix v2.9.0 (technical, cycle 2)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (2026-09-06). Under CLAUDE.md
> RACI, reviewer-qa is **A** for "RTM complete (zero gaps)", so the FR-131 Must-row ruling was
> re-derived again at this cycle from the requirement text and the shipped code, not carried over
> from cycle 1 and not accepted from the document.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.9.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 08)
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 2 of 5
Verdict: PASS
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

Doc 08 v2.9.0 **PASSES**. Both cycle-1 Highs, all three Mediums and all three Lows are closed, and
each was verified mechanically or against source.

**ISS-01 (High) is closed and I proved it rather than read it.** I ran a cell-count sweep over
**every one of the 17 tables** in the file: **zero** rows disagree with their header and **zero**
rows are missing a trailing pipe. The four specific rows named at cycle 1 now measure §3.1 FR-124
= **8 cells** against an 8-column header, §3.1 FR-131 = **8**, §3.2 NFR-011 = **7** against a
7-column header, §3.2 NFR-013 = **7**, and the §4 orphan-check rows = **2** against a 2-column
header — each ending in a pipe. Every discarded note was folded into its row's existing final cell
with its text unchanged, and each row records that it was, so the trail survives the fix.

**ISS-02 (High) is closed and the chain link is real.** `DES-098` now appears in Doc 08 for the
first time: the §3.1 FR-131 DES cell reads "**DES-098** (the honesty notice — primary) · **DES-094**
(status-badge reach, clause 9) · DES-096 · ADR-024"; the SCR cell reads "**SCR-13, SCR-14 — both
UNBUILT**" instead of "none"; §7 gap-log entry 117 carries DES-098 too. The requirement summary is
restated from Doc 02 §4.45 — it had described the DES-096 seam and not the notice — with the seam
clauses explicitly labelled "design this row carries, **not** an FR-131 obligation". I counted the
obligations in §4.45 myself and there are **ten**; the corrected "ten, plus the seam half" is right
and "eleven" now survives only inside correction records. I checked the DES assignment against Doc
03 §15 and §10.13.6 at HEAD and it is stated there exactly as the RTM reports it, including the
architect's explicit routing of the recording to the tester ("Doc 08 is the tester's document and is
**not edited from here**").

**The FR-131 Must-row ruling is unchanged and I concur again, independently.** FR-131 stays **OPEN
(G-PHASE3)**; Must COMPLETE stays **16 of 138**; open Must rows stay **122**; stories meeting DoD
stay **17 of 134**; US-0134 does **not** meet the Definition of Done. Recording DES-098, DES-094 and
SCR-13/SCR-14 closed nothing and the document says so in the row itself. I also got an independent
mechanical confirmation: `node hooks/run_gates.cjs --audit` derives the Must-row state from the row
status markers and reports **138 Must rows, 16 COMPLETE, 122 OPEN**, agreeing with §9's published
figures. The suite figure is real — my own `npm test` gave **619/619, 0 failed, exit 0** with the
stated package split — and §7's gap log contains exactly **122** entries for 122 open Must rows.

The single remaining finding is a Low, and it is a citation that the document **correctly dates**
and that has merely been overtaken by events in the hours since it was written.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`98%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | The FR-131 row now states the requirement Doc 02 §4.45 actually imposes, with the DES-096 seam clauses labelled as the half the row also tracks. Ruled clause by clause against §4.45: ten obligations, four met at the copy layer, six unmet or unevidenced — I re-derived this and it holds exactly. The DoD check is still done story by story rather than assumed. |
| T2 Soundness | 20 | 98 | 19.6 | The "a good fix can close no row" reasoning survives the rework intact and is now visible when rendered. The FR-124 "approved design element" claim is retracted to "the **current corrected text** of a design element (Doc 03 v2.13.0, **In Review** — not yet an approved source)", which was the right call at write time. `TD-RTM-02` is restated **without** pretending it is any closer to paid, with the raising date deliberately preserved. |
| T3 Traceability & IDs | 20 | 98 | 19.6 | `DES-098` present for the first time (§3.1 FR-131 DES cell, §7 entry 117, changelog); SCR-13/SCR-14 recorded **UNBUILT** rather than absent, which makes the gap visible instead of invisible. §7's gap log holds exactly **122** numbered entries against 122 open Must rows. `TD-RTM-01` still OPEN and still engineer-owned. No id reused or renumbered. |
| T4 Security & failure modes | 15 | 98 | 14.7 | The §9 gate verdict stays blunt and correct — five FAIL rows (16/138 chains, 122 open, rollback never drilled, four Doc 04 Gate-2 blockers open, no independent audit) and the tester's recorded verdict "Gate 2 is NOT ready. Do not present this drop as launch-ready." RISK-02 still "not mitigated at v1". Nothing is inflated. |
| T5 Completeness & testability | 15 | 98 | 14.7 | The rendering defect is gone: **0 mismatches across all 17 tables**, verified mechanically. The Gate-2 verdict's opening sentence is one continuous sentence again ("**16 close and 122 do not** — an 11.6% completion rate…") with the addendum re-placed below it. All arithmetic re-derived independently: 469 − 1 + 10 = 478; 136 + 88 = 224; 478 − 224 = 254; 224 + 15 + 232 = 471; 98 open FRs + 24 open NFRs = 122 of 138. |
| T6 Convention compliance | 10 | 96 | 9.6 | Correct minor bump (2.8.0 → **2.9.0**), `Status: In Review`, `Last updated: 2026-09-06`, ISO-8601 dates, named owners. The TC pin advance to Doc 07 v2.6.0 is legitimate (same author, delta read) and every other pin is annotated rather than advanced. Docked only for the now-superseded In-Review pins (ISS-C2-01). |
| **Total** | **100** | — | **97.8% → 98%** | — |

## 4. Cycle-1 closure table (`artifacts/reviews/08-traceability-matrix-v2.8.0-technical-cycle1.md`)

| Cycle-1 ID | Sev | Status | Evidence verified at source |
|---|---|---|---|
| ISS-01 | **High** | **CLOSED** | Mechanical sweep of all **17** tables: **0** cell-count mismatches, **0** missing trailing pipes. Measured directly: §3.1 FR-124 **8/8**, §3.1 FR-131 **8/8**, §3.2 NFR-011 **7/7**, §3.2 NFR-013 **7/7**, §4 rows **2/2**. Each fold is recorded in place, e.g. FR-131: "The v2.8.0 ruling above was itself written as a NINTH cell in an eight-column table and ended without a pipe, so a renderer discarded it; it is folded into this Status cell **unchanged** and the row now closes with a pipe." |
| ISS-02 | **High** | **CLOSED** | FR-131 DES cell: "**DES-098** (the honesty notice — primary) · **DES-094** (status-badge reach, clause 9) · DES-096 · ADR-024". SCR cell: "**SCR-13, SCR-14 — both UNBUILT** (Doc 06 §7 #21)". Summary restated from Doc 02 §4.45 with the seam clauses marked "design this row carries, **not** an FR-131 obligation". "eleven obligations" → "**ten** … plus the seam half". I counted §4.45's obligations independently: ten. Assignment checked against Doc 03 v2.13.0 §15 and §10.13.6 at HEAD — stated there as reported, and cited as "**current corrected text, not an approved source**", closing nothing. |
| ISS-03 | Medium | **CLOSED** | §6 verdict line reads as one sentence: "**Gate 2 cannot be approved today.** Of 138 gating Must rows, **16 close and 122 do not** — an 11.6% completion rate against a gate criterion that requires **zero** open Must rows." The v2.8.0 addendum now sits below the verdict's closing paragraph and records the move. |
| ISS-04 | Medium | **CLOSED** | §10's `TD-RTM-02` entry now carries the three-way framing and the current figures: "(1) Doc 07 §2 counts **471** … (2) Doc 08 §6 counts **478** … (3) Doc 07 §10 … 193 + 171 + 48 + 12 = **424**", plus "**224** cases with passing evidence and the **619/619** suite (run **R-17**)". Raising date preserved: "**OPEN — raised 2026-08-30.**" Status still OPEN, and the entry says plainly the debt "is no closer to paid". |
| ISS-05 | Medium | **CLOSED** | FR-124 row: "…so the chain link this evidence hangs on is **the current corrected text of a design element (Doc 03 v2.13.0, In Review — not yet an approved source: v2.12.0 FAILED cycle 1 … and v2.13.0 is under cycle-2 review)**, rather than a test standing in for one." Matches the discipline the changelog sets for the whole version. |
| ISS-06 | Low | **CLOSED** | §7 entry 117 now reads "…TC-3476 and TC-3487 still Blocked; production ZK ballot **pending. v2.8.0 (FR-131 honesty drop, Doc 06 v2.5.1, commit `0a5c542`): the closing sentence is CLOSED…**". |
| ISS-07 | Low | **CLOSED** | The doubled italic close is gone from the §9 tester row; the only surviving occurrence of that character sequence in the file is the changelog line **quoting** the defect it fixed. |
| ISS-08 | Low | **CLOSED** | NFR-013 row: "☐ **G-UI** — locale files exist (`apps/web/src/i18n/en.ts`, `ar.ts`) but there is **no locale-coverage or string-coverage gate and no RTL rendering evidence**". The G-UI verdict is explicitly unchanged, and TC-3567 is deliberately **not** linked — the right call, since linking it would re-create in Doc 08 the over-claim Doc 07 v2.6.0 removed. |

**8 of 8 closed, including both Highs. Nothing was closed by assertion.**

## 5. New issues (cycle 2)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-C2-01 | Low | T6 | Changelog, "**What this version does NOT do**" block; §3.1 FR-124 row; §3.1 FR-131 row; §7 entry 117 | Every DES-094 / DES-098 citation is qualified "Doc 03 v2.13.0, **In Review**, cycle 2 under way", and the changelog states "It does not treat Doc 03 v2.13.0, Doc 04 v1.4.0 or Doc 09 v1.6.0 as approved sources; all three are **In Review**". As of **now**, Doc 03 v2.13.0 is **Approved** (`artifacts/reviews/03-architecture-design-sdd-v2.13.0-technical-cycle2.md`, PASS 97%), Doc 04 v1.4.0 is **Approved** (PASS 96%) and Doc 09 has moved to v1.7.0. **This is explicitly NOT scored as a correctness defect and no Medium is manufactured from it.** The statements were true when written this morning, the document dates them, and each errs in the **conservative** direction: an under-claimed approval closes no row and inflates nothing. The live consequence is only that the DES-098 assignment now rests on an approved source and can be recorded as such. | At the next touch, refresh the citation qualifiers and the pin block, and cite the two cycle-2 PASS reports. This rides with the SRS/SDD/BKLG/MTP pin-sync the tester already records as owed; it does **not** justify a new version on its own. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL. There are none.

## 6. The FR-131 Must-row ruling — re-derived again at cycle 2 (reviewer-qa is A for "RTM complete")

**I concur, unchanged: FR-131 stays OPEN. 16 does not become 17.** Ruled rule by rule against Doc 02
§4.45 and the code at `HEAD` (`84e2203`), not against the document. §4.45 imposes **ten** obligations
and I enumerate them here so a later reader can check the count that the version corrected from
eleven:

| # | FR-131 obligation (Doc 02 §4.45) | My finding | Evidence |
|---|---|---|---|
| 1 | Notice displayed **wherever a vote is cast**, before the ballot is confirmed | **NOT MET** | The banner is mounted at exactly one site, `apps/web/src/components/ProposalsAndDebate.tsx:489`. No binding-vote surface exists. |
| 2 | (a) not anonymous / not receipt-free / not coercion-resistant | **MET at the copy layer** | `UT-0887` asserts all three strings in the rendered banner. |
| 3 | (b) the platform database CAN see vote direction and party membership | **MET at the copy layer** | `UT-0887`: "can see how you voted", "which party you belong to". |
| 4 | (c) the v2 private ballot arrives with the Definition-B upgrade | **MET at the copy layer** | `UT-0887`: "not switched on yet". |
| 5 | (d) open-tier non-counting disclosure, non-dismissable, before refusal | **MET at two surfaces, NOT at the ballot** | TC-3534/UT-0864 (parties directory), UT-0881/0882 (proposals admission). Clause (d) names "casting a binding vote"; that surface does not exist. TC-3481 correctly stays Blocked. |
| 6 | Visible **before confirmation** | **NOT VERIFIABLE** | There is no confirmation step for it to precede. |
| 7 | Non-dismissable — **"the voter MUST acknowledge the notice to proceed"** | **NOT MET** | `apps/web/src/components/ReceiptFreedomBanner.tsx` renders an `aside role="note"` containing a decorative `span`, an `h2` and a `p` — **no button, no checkbox, no form control, nothing gating navigation**. Non-dismissable is satisfied by having no dismiss control; acknowledge-to-proceed is **not built at all**. Corroborated by Doc 06 §7 item 26(d). **This clause alone keeps the row open even if every surface existed.** |
| 8 | WCAG 2.2 AA (DES-081) + screen-reader accessible | **NOT EVIDENCED** | `role="note"` plus `aria-labelledby` is not AA conformance. No automated a11y gate, no screen-reader pass; NFR-011 is correctly still G-UI. |
| 9 | Appears on **SCR-13** and **SCR-14** | **NOT MET** | Neither screen is built (Doc 06 §7 #21). `VoteConfirmation.tsx` exists as a DES-063 component but is mounted on no route and carries no FR-131 notice; Doc 03 §10.12.5 records SCR-14 as wireframe-partial, which is design coverage, not a shipped screen. The UNBUILT marker is accurate. |
| 10 | Closing sentence: four banned words, no v2 guarantees | **MET and GUARDED for the swept code; NOT covered for README / public-facing materials** | `UT-0887` (4 assertions), `UT-0759` (4), `UT-0888` (1) — I read all nine again. No test covers README or public materials. |

**Conclusion — unchanged from cycle 1 and independently re-confirmed.** Four obligations met at the
copy layer, **six unmet or unevidenced**, and two of those six are unmet by **absence of the control
itself**, not absence of a test. **Must COMPLETE 16 / 138 · OPEN 122 (11.6%) · G-PHASE3 47 · Must FR
subtotal 114 · 16 · 98 · stories meeting DoD 17 / 134 — all correctly unchanged**, and I verified
each is stated unchanged in the §3.1 subtotal line, the §6 dashboard, the §9 gate-verdict table and
the §9 sign-off row. `node hooks/run_gates.cjs --audit` independently derives **138 / 16 COMPLETE /
122 OPEN** from the row status markers and reports that the derived and published signals **AGREE**.
**US-0134 does not meet the Definition of Done.** Adding DES-098, DES-094 and SCR-13/SCR-14 to the
trace cells **closed nothing**, and the row says so itself — "naming two unbuilt screens in a trace
cell is not a screen becoming traced", with §6's Screens row correctly still 23 mapped / 0 verified.

## 7. Other checks made (recorded so a later version does not disturb them)

- **Suite verified at source.** My own `npm test` from the repo root: **619 passed / 619, 0 failed,
  exit 0** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95. §9's row and the
  §6 update state exactly this. `apps/web/tsconfig.tsbuildinfo` was not dirtied.
- **All arithmetic reconciles, re-derived rather than read.** 469 − 1 + 10 = **478**; 136 + 88 =
  **224**; 478 − 224 = **254**; 224 + 15 + 232 = **471**; 98 open FRs + 24 open NFRs = **122** of
  **138**. Doc 07 §2's suite table re-summed row-wise gives 471 / 239 / 232 with per-row identity
  holding on all 28 rows.
- **§7's gap log holds exactly 122 numbered entries**, matching "all 122 open Must rows" in its own
  heading and the §6 dashboard.
- **`TD-RTM-01` is still recorded, still OPEN, still engineer-owned**, and the §4 caveat blockquote
  still qualifies both orphan-check zeroes. Not silently dropped.
- **The Pass (obs.) figure is still held at 88** rather than promoted on a file-granular run —
  consistent with the v2.3.0 corroboration convention and with Doc 07 v2.6.0.
- **The twelve carried Lows** remain carried and accepted; none falls in a line this version touched.
  The L-2 fix from v2.8.0 survives, and the defect it introduced in the same edit (the §4 third
  overflow cell) is now repaired, with the irony recorded in the row itself.
- **Changelog accuracy.** Every claim I sampled holds: no row status moved, no gap-log entry was
  added or retired, entry 117 was updated in place, RISK-02's verdict is still "not mitigated at
  v1", and the only numeric change in the document is the obligation framing eleven to ten, which
  moves no count.
- **No transcription residue.** No leaked FIND / REPLACE-WITH / four-backtick markers, no duplicated
  line tails, no eaten boundary words, and no malformed table row anywhere in the file.

## 8. Routing instruction (to the owning role)

**PASS → the tester (Ji-woo Park) sets `Status: Approved` for Doc 08 v2.9.0 and the SOP advances.**
The single Low does **not** require a new version; carry it into the pin-sync already recorded as
owed. **No product code is to be changed by this report**, and **no Must row status, count or gap
classification is asked to move.**

---

**Gate-2 note (reviewer-qa, separate from this review cycle — this is a document PASS, not a gate
sign-off).** Passing the review loop means Doc 08 v2.9.0 is an **accurate** matrix, not a **closed**
one. It records **122 open Must rows** (16 of 138 complete, 11.6%), rollback never drilled, four
Doc 04 Gate-2 blockers open, and no independent security audit. The CLAUDE.md Gate-2 traceability
criterion — **zero gaps in Must rows** — is **NOT MET**, and `node hooks/run_gates.cjs --audit`
says so mechanically. **Gate 2 cannot be approved and no merge sign-off is offered on this basis.**
That conclusion is the document's own and it is correct.
