# Document Review Report — Doc 08 Traceability Matrix v2.8.0 (technical, cycle 1)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-FR131-CASCADE.md` (2026-09-06). Under CLAUDE.md
> RACI, reviewer-qa is **A** for "RTM complete (zero gaps)", so the FR-131 Must-row ruling was
> re-derived here from the requirement text and the code, not accepted from the document.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.8.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 08)
Score: 85%
Critical: 0
High: 2
Medium: 3
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

**The central ruling of this version is correct, and I concur with it independently.** FR-131 stays
**OPEN**; Must rows COMPLETE stays **16 of 138**; open Must rows stay **122**; US-0134 does **not**
meet the Definition of Done; stories meeting DoD stay **17 of 134**. I verified that against the
requirement text and the shipped code rather than against the document:
`apps/web/src/components/ReceiptFreedomBanner.tsx` renders an `aside role="note"` with a title and a
body and **no interactive element of any kind** — there is nothing for a voter to acknowledge and
nothing gating "proceed", so FR-131's "**the voter MUST acknowledge the notice to proceed**" is
unbuilt; the banner is mounted at exactly one site,
`apps/web/src/components/ProposalsAndDebate.tsx:489`, and SCR-13 / SCR-14 do not exist. Refusing to
close a Must row on a banned-words fix is the right call and the reasoning recorded in the changelog,
in the §3.1 row, in §7 entry 117 and in the §6 addendum is sound. Every count I could re-derive
reconciles: 469 anchors − 1 + 10 = **478**; 217 + 6 + 1 = **224**; 129 + 7 = **136**; 136 + 88 = 224;
478 − 224 = **254**; and §9's 224 + 15 + 232 = **471**. The suite figure is real — I ran `npm test`
myself and got **619/619, 0 failed, exit 0** with the exact package split the document states.

It nevertheless **FAILS** on two Highs and three Mediums. The first High is mechanical and severe:
**four of this version's additions are written as extra table cells beyond their table's header
width, so a Markdown renderer silently discards them** — including the entire FR-131 rule-by-rule
ruling in §3.1, which is the headline content of v2.8.0. A reader of the rendered RTM sees the
v2.7.0 row, unchanged. The second High is substantive and is squarely in the RTM's own remit:
**`DES-098` — the design element Doc 02 §4.45 names for the FR-131 honesty notice, and the element
six of this version's own new TCs cite — does not appear anywhere in Doc 08**, whose FR-131 row
instead states the requirement as an `IBallotService` seam capability and lists `DES-096 · ADR-024`
alone. The row's clause count ("eleven obligations") is a symptom of the same conflation.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`85%`)
- Critical = 0? **yes** · High = 0? **no** (2) · Medium = 0? **no** (3)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 82 | 16.4 | The FR-131 clause-by-clause ruling is rigorous and, on my independent check, correct; the DoD check is done story by story rather than assumed. Docked because the FR-131 row does not carry DES-098 and restates the requirement as a seam capability (ISS-02). |
| T2 Soundness | 20 | 90 | 18.0 | The closure ruling, the refusal to promote Pass (inh.) to Pass (obs.), and the "a good fix can close no row" reasoning are all sound. Docked for the "approved design element" claim built on an In-Review, now-failed source (ISS-05). |
| T3 Traceability & IDs | 20 | 80 | 16.0 | Ids stable, no reuse or renumber; TD-RTM-01 correctly held open and engineer-owned. Docked for DES-098 absent document-wide and the SCR cell reading "none" against a requirement that names SCR-13/SCR-14 (ISS-02), and for §6 misattributing content to §10's TD-RTM-02 entry (ISS-04). |
| T4 Security & failure modes | 15 | 95 | 14.3 | The Gate-2 verdict remains blunt and correct: rollback FAIL, audit FAIL, 122 open Must rows. RISK-02's verdict is correctly held at "not mitigated" while acknowledging the disclosure is now regression-guarded. No safety claim is inflated. |
| T5 Completeness & testability | 15 | 78 | 11.7 | All arithmetic reconciles and the suite figure matches my own run. Heavily docked because four of the version's own additions are invisible in rendered output (ISS-01) and the document's headline Gate-2 sentence is split mid-clause (ISS-03). |
| T6 Convention compliance | 10 | 85 | 8.5 | ISO-8601 dates, named owners, correct minor bump (2.7.0 to 2.8.0) and `Status: In Review`, honest pin annotations. Docked for four rows that violate Markdown table syntax and for two residue artefacts (ISS-06, ISS-07). |
| **Total** | **100** | — | **84.9% → 85%** | — |

## 4. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **High** | T5 / T6 | §3.1 line **818** (FR-124) and line **825** (FR-131); §3.2 line **844** (NFR-011); §4 line **926** | **Every v2.8.0 addition to these four rows is written as an extra table cell beyond the header width, and a GFM renderer discards cells past the header count.** §3.1 header (line 694) has 8 columns (BR / FR / DES (+ADR) / SCR / EP-FE-US / TC (Doc 07) / UT evidence / Status); rows 818 and 825 carry **9** cells and end **without a trailing pipe** — line 825 terminates "…so it is not closed.**" with no closing pipe at all. §3.2 header has 7 columns; line 844 carries 8. §4 header (line 922) is "Check / Result" = 2 columns; line 926 carries 3. The discarded cells are, in order: the FR-124 evidence note, **the entire FR-131 rule-by-rule ruling** (the headline content of this version), the NFR-011 citation-correction note, and the §4 orphan-sweep annotation. Rendered, a reader sees the v2.7.0 rows unchanged. This is transcription residue against v2.8.0 and it defeats the version's own purpose. | Fold each note **into the existing final cell** of its row (as the v2.3.0 FR-131 text already is), or place it as a paragraph beneath the table (as the §6 and §4 sweep notes are). Then re-verify: every row must have the same cell count as its header and must end with a pipe. |
| ISS-02 | **High** | T1 / T3 | §3.1 line **825** — FR-131 row (requirement summary, DES cell, SCR cell); document-wide | **`DES-098` does not appear anywhere in Doc 08** (zero occurrences), yet Doc 02 §4.45 states the notice is "**designed as DES-098**" and that "DES-098 was minted by the architect… and awaited its backing FR — that FR is FR-131", and **six of this version's own new TCs cite DES-098** as what they verify (Doc 07 TC-3564..TC-3569). The FR-131 row DES cell reads `DES-096 · ADR-024` only — the ballot seam — and its requirement summary restates FR-131 as "ballot seam with honest pre-action notices: cast records ballot… deterministic tally-hash… results embargo… audit-contract publication", which is `IBallotService` behaviour, not FR-131's normative text. The same conflation produces the ruling's "**FR-131 has eleven obligations**": obligation (11) is described in the changelog as "the seam half **this row also tracks**" — it is not an FR-131 obligation, and §4.45 has ten. The SCR cell reads `none` although FR-131 requires the notice "on **SCR-13** (ballot booth) and **SCR-14** (post-vote confirmation)". For the one Must row this entire version is about, the matrix records neither the design element, nor the screens, nor the requirement as written. **No count is wrong and the row is correctly OPEN, so this is not Critical — but the chain link is missing from the document whose only job is to hold it.** | Add `DES-098` to the FR-131 DES cell alongside DES-096; record `SCR-13, SCR-14` in the SCR cell with an explicit **unbuilt** marker so the gap is visible rather than absent; restate the row summary from Doc 02 §4.45 (the honesty notice) with the seam clauses labelled as the DES-096 half; and correct "eleven obligations" to "**ten FR-131 obligations, plus the DES-096 seam half this row also tracks**". |
| ISS-03 | **Medium** | T5 | §6 "Gate-2 verdict — one paragraph, blunt", lines **643–646** | The v2.8.0 addendum was inserted **into the middle of a sentence**. Line 643 ends "**Gate 2 cannot be approved today.** Of 138 gating Must rows, **16 close and 122"; the addendum occupies lines 644–645; line 646 begins "do not** — an 11.6% completion rate…". The bold marker opens on line 643 and closes on line 646 with an entire paragraph between them, so the document's single most load-bearing sentence renders broken, with literal asterisks. | Restore "…**16 close and 122 do not** — an 11.6% completion rate…" as one continuous sentence and place the v2.8.0 addendum **after** the closing paragraph of the verdict. |
| ISS-04 | **Medium** | T3 | §6 line **986** and changelog line 137, against the §10 `TD-RTM-02` entry (line **1233**) | §6 asserts: "`TD-RTM-02` (§10) **records** that Doc 07 §2 counts **471**, this dashboard counts **478**, and Doc 07 §10's overlap paragraph counts on a third base again", and the changelog calls it "the **465 / 471 / 478** denominator disagreement". The §10 entry records none of that: it names only "Doc 07 v2.4.4 §2 gives **465**… implies **456** anchors… Doc 08 §6 gives **463** anchors and derives **472**", cites "**217** cases with passing evidence and the **610/610** suite", and closes on "§6's **255** (= 472 − 217) and §9's **232**". Every figure in the entry is superseded, it describes a two-way disagreement rather than the three-way one, and two other sections now quote it for content it does not contain. | Update the §10 TD-RTM-02 entry to the v2.8.0 figures (471 / 478 / the §10 overlap base; 224 with passing evidence; 619/619; §6's 254 against §9's 232) and to the three-way framing that §6 and the changelog already attribute to it, keeping the original v2.6.1 raising date. |
| ISS-05 | **Medium** | T2 | §3.1 line **818** — FR-124 row, v2.8.0 note | "Doc 03 **v2.12.0** (2026-09-06) minted **DES-094 clause 9** to state that title rule normatively — so the chain link this evidence hangs on is **an approved design element**, not a test standing in for one." `docs/03-architecture-design-sdd.md` line 5 reads `Status: In Review`, and it has since **FAILED** cycle 1 of its neutral technical review (`artifacts/reviews/03-architecture-design-sdd-v2.12.0-technical-cycle1.md` — 89%, 0C/1H/2M/2L), so clause 9's text may still move under rework. The same document's changelog states the opposite discipline explicitly: "all three of those versions are **In Review, not Approved** — none has a passing neutral technical review yet — … this row cites them as current corrected text rather than as approved sources." The FR-124 note breaks the rule the changelog sets for the whole version. | Restate as "the current corrected text of DES-094 clause 9 (Doc 03 v2.12.0, **In Review** — not yet an approved source)", matching the §3.1 FR-131 row and the changelog. |
| ISS-06 | Low | T6 | §7 gap-log **entry 117** (FR-131) | The v2.8.0 text was appended to the v2.3.0 text with only a space and no sentence terminator: "…TC-3476 and TC-3487 still Blocked; **production ZK ballot pending v2.8.0 (FR-131 honesty drop, Doc 06 v2.5.1, commit `0a5c542`)**: the closing sentence is CLOSED…". Read literally, the entry now says the production ZK ballot is "pending v2.8.0". | Insert a sentence break: "…production ZK ballot pending. **v2.8.0 (FR-131 honesty drop…)**: …". |
| ISS-07 | Low | T6 | §9 sign-off table, tester row (line **1216**) | Wrapping the prior v2.5.0 record produced a doubled italic close: "…Must 15/123; stories 16/134.**)_)_** _(Prior v2.4.1:". | Drop the duplicated close so the nested record closes once. |
| ISS-08 | Low | T1 | §3.2 **NFR-013** row | Still reads "☐ **G-UI** — **no locale files**, no string-coverage gate". `apps/web/src/i18n/en.ts` and `ar.ts` exist and are shipped, and TC-3567 — minted for this very version — asserts against `ar.banner.*`. The gap verdict (G-UI, no coverage gate) is still right; its stated reason is not. | Restate as "locale files exist (`en.ts`, `ar.ts`) but there is no locale-coverage or string-coverage gate and no RTL rendering evidence", and settle the TC-3567 link question raised as ISS-02 of the Doc 07 review report. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. The FR-131 closure ruling — independently re-derived (reviewer-qa is A for "RTM complete")

**I concur: FR-131 stays OPEN. 16 does not become 17.** Ruled against Doc 02 §4.45 and the code at
`HEAD` (`84e2203`), not against the document:

| FR-131 obligation (Doc 02 §4.45) | My finding | Evidence |
|---|---|---|
| Notice displayed **wherever a vote is cast**, before the ballot is confirmed | **NOT MET** | The banner is mounted at exactly one site, `apps/web/src/components/ProposalsAndDebate.tsx:489`. No binding-vote surface exists. |
| (a) not anonymous / not receipt-free / not coercion-resistant | **MET at the copy layer** | `UT-0887` it #2 asserts all three strings in the rendered banner. |
| (b) the platform database CAN see vote direction and party membership | **MET at the copy layer** | `UT-0887` it #2: "can see how you voted", "which party you belong to". |
| (c) the v2 private ballot arrives with the Definition-B upgrade | **MET at the copy layer** | `UT-0887` it #2: "not switched on yet". |
| (d) open-tier non-counting disclosure, non-dismissable, before refusal | **MET at two surfaces, NOT at the ballot** | TC-3534/UT-0864 (parties directory), UT-0881/0882 (proposals admission). Clause (d) names "casting a binding vote"; that surface does not exist. TC-3481 correctly stays Blocked. |
| Visible **before confirmation** | **NOT VERIFIABLE** | There is no confirmation step for it to precede. |
| Non-dismissable — **"the voter MUST acknowledge the notice to proceed"** | **NOT MET** | `apps/web/src/components/ReceiptFreedomBanner.tsx` renders an `aside role="note"` containing a decorative `span`, an `h2` and a `p` — **no button, no checkbox, no form control, nothing gating navigation**. Non-dismissable is satisfied by having no dismiss control; acknowledge-to-proceed is not built at all. **This clause alone keeps the row open even if every surface existed.** |
| WCAG 2.2 AA (DES-081) + screen-reader accessible | **NOT EVIDENCED** | `role="note"` plus `aria-labelledby` is not AA conformance. No automated a11y gate, no screen-reader pass; NFR-011 is correctly still G-UI. |
| Appears on **SCR-13** and **SCR-14** | **NOT MET** | Neither screen exists (Doc 06 §7 #21). |
| Closing sentence: four banned words, no v2 guarantees | **MET and GUARDED for the swept code; NOT covered for README / public-facing materials** | I read all three guard blocks: `UT-0887` (4 assertions), `UT-0759` (4), `UT-0888` (1). They do what the TCs say. No test covers README or public materials. |

**Conclusion.** Six obligations are unmet or unevidenced and two of them are unmet by absence of the
control itself, not absence of a test. **Must COMPLETE 16 / 138 · OPEN 122 · G-PHASE3 47 · stories
meeting DoD 17 / 134 — all correctly unchanged**, and I verified each is stated unchanged in the
Must FR subtotal line (114 · 16 · 98), the §6 dashboard, the §9 gate-verdict table and the §9
sign-off row. **US-0134 does not meet the Definition of Done.** Closing this row on the banned-words
clause would have been the most misleading thing this matrix could do about FR-131, and the document
declines to do it — that judgement is the strongest thing in v2.8.0 and none of the issues above
disturbs it.

## 6. Other checks made (recorded so the rework does not disturb them)

- **Suite figure verified at source.** My own `npm test` from the repo root: **619 passed / 619, 0
  failed, exit 0** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web 95. §9's row and
  the §6 update state exactly this.
- **All arithmetic reconciles.** 463 to **469** anchors (+6); 469 − 1 + 10 = **478**; 217 + 6 + 1 =
  **224**; 129 + 7 = **136**; 136 + 88 = 224; 478 − 224 = **254**; §9's 224 + 15 + 232 = **471**. The
  16 to 15 move is correctly attributed to TC-2614's re-status. I also re-summed Doc 07 §2's suite
  table row-wise and it gives 471 / 239 / 232 with no per-row mismatch.
- **The Pass (obs.) figure was correctly held at 88** rather than promoted on a tester-executed but
  file-granular run. That is the conservative reading and it is applied consistently with the v2.3.0
  corroboration convention.
- **`TD-RTM-01` (duplicate `UT-0841`..`UT-0848`) is still recorded, still OPEN, still engineer-owned**
  — §10 line 1234 and the §4 blockquote both carry it, and the v2.8.0 sweep states correctly that none
  of the six new cases cites one of those eight ids, so this drop's zero is unaffected. It has not
  been silently dropped.
- **The 14 formally accepted Lows.** **Paid: L-13** (the §6 `TD-RTM-02` pointer is now in the line —
  verified present at line 986) and **L-2** (the §4 caveat blockquote now sits below a contiguous
  table — verified: the three previously-orphaned rows, including the `TD-07-01` record, are now above
  it at lines 926–928). **Carried, accepted, and not counted against this version: the remaining
  twelve**, including **L-3** (§7 entry 82's owner naming only Priya Raghunathan where Tomás Ferreira
  should also appear) and the eleven wording / cross-reference nits, none of which falls in a line
  v2.8.0 touched. One caveat on the L-2 fix: the very row it un-orphaned, line 926, is where ISS-01's
  third overflow cell was introduced — the fix and the defect are in the same edit.
- **Docs 03 / 04 / 09 citation posture.** With the single exception recorded as ISS-05, the version
  does what it says: the changelog states plainly that Doc 03 v2.12.0, Doc 04 v1.3.0 and Doc 09
  v1.5.0 are **In Review, not Approved**, that none has a passing neutral review, and that they are
  cited as current corrected text rather than as approved sources — and it states that the posture
  changes no ruling. That is the correct treatment and it should survive the rework.
- **Pins.** `CODE-TRUMOCRACY v2.5.1 (Approved)` and `TC-TRUMOCRACY v2.5.0 (In Review — this version
  syncs to it)` are both correct and both carry their status. The refusal to advance the BKLG and MTP
  pins without reading their deltas, while naming the current versions in the pin note so no reader is
  misled, is the right call.
- **Changelog accuracy.** Every claim I sampled holds: four rows had evidence extended (FR-131,
  FR-124, NFR-011, RISK-02) and no status moved on any of them; no gap-log entry was added or retired;
  entry 117 was updated in place; RISK-02's verdict is still "not mitigated at v1".

## 7. Routing instruction (to the owning role)

**FAIL → route to the tester (Ji-woo Park), the owning role for Doc 08.** ISS-01 and ISS-02 (Highs)
and ISS-03, ISS-04, ISS-05 (Mediums) are mandatory; ISS-06..ISS-08 should be taken in the same pass.
The rework MUST produce a **new version** — a High/Medium FAIL requires at least a **minor** bump
(v2.8.0 to **v2.9.0**) with `Status: In Review` — after which this loop re-reviews as cycle 2 of 5.
**The FR-131 OPEN ruling and every count in it must be preserved unchanged**; nothing in this report
asks for a status, a count or a verdict to move. **No product code is to be changed**; ISS-02 is a
matrix-recording fix, not a design change — if the architect must confirm the DES-098 / SCR-13 /
SCR-14 bindings for FR-131, that is an architect referral, not a tester edit.

---

**Gate-2 note (reviewer-qa, separate from this review cycle).** Doc 08 v2.8.0 records **122 open Must
rows**, rollback never drilled, and no independent security audit. **Gate 2 cannot be approved and no
merge sign-off is offered on this basis.** That conclusion is the document's own and it is correct.
