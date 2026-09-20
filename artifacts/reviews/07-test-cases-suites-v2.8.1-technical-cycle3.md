# Document Review Report — Doc 07 Test Cases & Suites v2.8.1 (technical, cycle 3)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. Cycle 3 of 5 against
> `artifacts/reviews/07-test-cases-suites-v2.8.0-technical-cycle2.md` (FAIL 95%, 0C/0H/1M/3L).

```
Reviewed document: 07-test-cases-suites.md
Document version: 2.8.1
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 07)
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 3 of 5
Verdict: PASS
```

Review date: 2026-09-07 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

**Doc 07 v2.8.1 PASSES.** All four cycle-2 issues are closed, and the Medium is closed the harder
way: rather than softening the sentence, the owner **advanced every stale pin** so the `Source:`
block now says what the pin note always claimed. I checked each pin against the live header —
**MTP v1.6.0 Approved**, **SRS v2.17.1 Approved**, **SDD v2.13.0 Approved**, **BKLG v2.5.0
Approved**, **CODE v2.7.0 Approved** — and every one is correct. The pin-sync debt this document
has carried since v2.5.0 is genuinely discharged, and "**A pin note is a plan; the `Source:` block
is the pin**" is exactly the right reading of the defect.

**The question I was asked to settle — is a "version-only, NOT re-read" annotation an honest basis
for the sentence it supports? For this document, yes, and I verified it rather than accepting it.**
The BKLG advance claims three things and no more: that it removes a false *In Review* status on a
document Approved four versions ago; that it does **not** claim a story-by-story read; and that
"the `US-####` ids cited here resolve in v2.5.0 — `US-0134` was checked". I checked **all of them,
not one**: this document cites **116 distinct `US` ids and every single one resolves in Doc 05
v2.5.0**. So the sentence the annotation supports is true, the annotation states precisely what it
does not buy, and the residual — a story-by-story re-read — is recorded as owed. That is the right
shape for a pin advance made without a full read, and it is the shape I would want every such
advance to take. It also matters that this document publishes **no story census**: it cites stories,
it does not count them, so a version-only pin cannot silently change a figure here. (**That is not
true of Doc 08**, where the same annotation supports a published Stories dimension — raised there
as its ISS-01, and the difference between the two documents is exactly why this one passes.)

The three "scoped read" labels are also honest. Each names the sections actually read — MTP §0.5
S4/S5 and the §14 register; SRS §4.45 and §8 Scenarios 8 and 9; SDD §10.12.3 / DES-094 clause 9 —
and each of those is a section this document demonstrably cites. The note's defence of the label
is correct on its own terms: claiming an end-to-end read of three source documents **in order to
clear a Low** would trade a cosmetic defect for a substantive one.

The Lows are closed too: the free `TS-V1-*` band is restated as **TC-3577–TC-3699** where TC-3576
is minted, with the superseded v2.7.0 sentence annotated in place rather than rewritten (Doc 04
v1.6.0 §14 reserves TC-3570–TC-3699 and this document has drawn TC-3570..TC-3576, so 123 of 130
ids remain free — I re-derived that); `Last updated` reads **2026-09-07**, matching every other
line of the version; and the "leans on / pins" sentence is qualified in place.

**Nothing normative moved and I confirmed that mechanically**, which is what a patch bump has to
earn: §2 re-sums row-wise to **478 / 245 / 233** across 28 rows with the identity holding on every
row; §10's **94 + 136 + 15 = 245**; **476** unique TC anchors with **zero** duplicates; **zero**
transcription residue at the 7 Doc 07 OP boundaries; **69 tables, zero cell-count mismatches**. The
Must count is untouched — the audit derives **138 / 16 / 122** and agrees with what Doc 08
publishes.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`98%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | Unchanged from v2.8.0 and still correct: clause (e) covered at Scenario 8 by TC-3570..TC-3574, Scenario 9 carried as the Blocked TC-3575, NFR-023/DES-085 by TC-3576 without any claim to close it. A patch that touches no case cannot damage coverage, and this one does not. |
| T2 Soundness | 20 | 99 | 19.8 | The Medium was fixed by advancing the pins instead of weakening the claim — the harder and more useful remedy — and the note says why the alternative would have been an over-claim. The "scoped read" and "version-only, NOT re-read" labels are distinct, defined and used for different things, which is what makes them worth having. |
| T3 Traceability & IDs | 20 | 98 | 19.6 | Every pin matches its live header; the free band is restated correctly at both sites; ids continue from TC-3576 with no mint, retirement, reuse or renumber. **476 anchors, zero duplicates**, and all **116** cited `US` ids resolve in the newly pinned Doc 05 v2.5.0. Docked only for ISS-01. |
| T4 Security & failure modes | 15 | 97 | 14.55 | Unchanged and intact: TC-3575's instrument-absent reasoning, TC-3573's stated residual risk, TC-3576's refusal to close NFR-023. The post-merge re-run is still recorded as owed rather than quietly dropped. |
| T5 Completeness & testability | 15 | 98 | 14.7 | Every figure re-derived and identical to v2.8.0, as a patch requires: 478 / 245 / 233 with per-row identity; 94 + 136 + 15 = 245; Blocked 176; No mechanism 49. No suite re-run and no new run id, correctly justified — nothing testable changed, so R-19 stands. |
| T6 Convention compliance | 10 | 98 | 9.8 | Correct **patch** bump (2.8.0 → **2.8.1**) with the reason stated, `Status: In Review`, cycle 3 of 5 named, `Last updated: 2026-09-07`, prior records annotated in place rather than overwritten, named owners throughout. |
| **Total** | **100** | — | **98.05 → 98%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | T3 | `Source:` block, line **98** — "SDD-TRUMOCRACY v2.13.0 (**Approved** — **scoped read**: §10.12.3 / DES-094 clause 9) **§5.2, §10.13.10, §10.13.10.1, §10.13.13, §11, §14**" (and the same shape on the SRS pin, line 98, trailing "§8 Gherkin") | The new scoped-read annotation and the **legacy section list** now sit on the same pin, naming two different section sets. A reader can take the trailing list as the scope that was read, which is the opposite of what the annotation says — the note is explicit that only §10.12.3 / DES-094 clause 9 was read at this version. The two lists are not contradictory in fact (the legacy list records the sections this document has historically cited), but they are adjacent and unlabelled, on the very line the cycle-2 Medium was about. Cosmetic, and it under-claims nothing. | Label the trailing list for what it is — e.g. "sections this document cites: §5.2, §10.13.10, …" — or fold it inside the annotation so a single pin names a single scope. Same for the SRS pin's trailing "§8 Gherkin". |

> **Low** issues do not block the pass bar. This version has no Critical, High or Medium issue.

### Cycle-2 issues — closure verified at source, one by one

| Cycle-2 id | Severity | Status | How I verified it |
|---|---|---|---|
| ISS-01 | Medium | **CLOSED** | The `Source:` block now reads **MTP-TRUMOCRACY v1.6.0 (Approved — scoped read: §0.5 S4/S5 and the §14 register)**, so block and note agree. Three further pins advanced with it (SRS v2.16.0 → v2.17.1, SDD v2.10.0 → v2.13.0, BKLG v2.3.0 → v2.5.0). I checked all five pins against the live headers: every one matches, and the file no longer contains the strings `MTP-TRUMOCRACY v1.0.1`, `SRS-TRUMOCRACY v2.16.0` or `SDD-TRUMOCRACY v2.10.0`. |
| ISS-02 | Low | **CLOSED** | The "leans on / pins" sentence is qualified in place — "true of the **documents** and false of the **block**… corrected at v2.8.1 by advancing the pins" — and, with the advance, it is now true of the block as well. |
| ISS-03 | Low | **CLOSED** | The v2.8.0 entry now states "the free `TS-V1-*` band after this mint is **TC-3577–TC-3699**" where TC-3576 is minted, and the superseded v2.7.0 sentence is annotated in place as "superseded, not wrong when written". I re-derived the band from Doc 04 v1.6.0 §14 (TC-3570–TC-3699, minus TC-3570..TC-3576 drawn) — 123 ids free, as claimed. |
| ISS-04 | Low | **CLOSED** | `Last updated: 2026-09-07`, matching the v2.8.1 entry, R-19 and every dated row of this version. |

### Independent verification performed for this review

| Check | Method | Result |
|---|---|---|
| The "version-only, NOT re-read" claim | extracted **every** `US-####` id cited in this document and resolved each against Doc 05 v2.5.0 | **116 cited, 116 resolve, zero unresolved** — the pin note's justification holds for all of them, not only the `US-0134` it spot-checked |
| Pins | each checked against the live document header | MTP **v1.6.0 Approved** ✓ · SRS **v2.17.1 Approved** ✓ · SDD **v2.13.0 Approved** ✓ · BKLG **v2.5.0 Approved** ✓ · CODE **v2.7.0 Approved** ✓ — the block is now fully current, so the standing pin-sync debt is genuinely discharged |
| Scoped-read labels | each named section opened in its source | MTP §0.5 S4/S5 and §14 ✓ · SRS §4.45 and §8 Scenarios 8/9 ✓ · SDD §10.12.3 / DES-094 clause 9 ✓ — all exist and are sections this document cites |
| Free band | re-derived from Doc 04 v1.6.0 §14 | Reserved **TC-3570–TC-3699**; drawn TC-3570..TC-3576; free band **TC-3577–TC-3699** ✓ |
| Nothing normative moved | §2 re-summed row-wise; §10 identities recomputed | **478 / 245 / 233** over 28 rows, per-row identity on every row, Total matching; **94 + 136 + 15 = 245**; Blocked **176**; No mechanism **49** — every figure identical to v2.8.0, as the patch claims |
| Id hygiene | duplicate-anchor sweep | **476** unique TC anchors, **zero** duplicates; no id minted, retired, reused or renumbered |
| Residue over the 7 Doc 07 OP boundaries | scan for FIND / REPLACE-WITH / four-backtick fences / OP headers / adjacent duplicate lines | **zero** hits |
| Table integrity | cell-count and trailing-pipe sweep, all **69** tables | **zero** mismatches, **zero** missing trailing pipes |
| Must count | `node hooks/run_gates.cjs --audit` | **138 Must / 16 COMPLETE / 122 OPEN**; the two independent signals AGREE; Gate-2 traceability criterion **NOT MET** (unchanged, and not this document's to move) |

## 5. Routing instruction (to the owning role)

**PASS → the tester (Ji-woo Park) sets `Status: Approved` on Doc 07 v2.8.1** and the SOP advances
for this document. The single **Low** (ISS-01) does not block; it should be folded at the next
touch of the header block — which the Doc 08 rework will produce anyway, since **Doc 08 v2.11.1
FAILs cycle 3** on a finding of its own (its Stories dimension counts 134 against the 142-story
Doc 05 v2.5.0 it now pins). Nothing in that finding reaches back into this document: Doc 07 cites
stories, it does not count them, and all 116 it cites resolve.

**This PASS is about the document, not about the product.** FR-131 remains **OPEN (G-PHASE3)**,
Must COMPLETE stays **16 of 138**, TC-3575 stays Blocked, and **no merge sign-off is offered**.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — the verdict is PASS at cycle 3 of 5.
