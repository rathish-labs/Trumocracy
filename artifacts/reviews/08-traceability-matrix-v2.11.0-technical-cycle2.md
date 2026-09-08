# Document Review Report — Doc 08 Traceability Matrix v2.11.0 (technical, cycle 2)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. Cycle 2 of 5 against
> `artifacts/reviews/08-traceability-matrix-v2.10.0-technical-cycle1.md` (FAIL 95%, 0C/0H/1M/2L).
> Under CLAUDE.md RACI, reviewer-qa is **A** for "RTM complete (zero gaps)", so the FR-131 Must-row
> ruling and the Must count were re-derived again at this cycle rather than carried forward.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.11.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 08)
Score: 96%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 2 of 5
Verdict: FAIL
```

Review date: 2026-09-07 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

**All three cycle-1 issues are closed and I verified each at source.** **ISS-01** (the Medium): the
v2.10.0 pin note now states what Doc 04 **v1.5.0** actually said — "§14 reserved TC-3564–TC-3699,
annotated *none minted*, and contained neither TC-3569 nor TC-3570" — and re-attributes the
register claim to **Doc 04 v1.6.0 (Approved)**, which I read myself and which does carry it
(§14 line 2399, §0.4 line 702). The original sentence is quoted rather than written over, so the
trail survives the correction. **ISS-02**: §4 and §3.1 both read **6** `it`s, the mapping is
`UT-0889` → TC-3570..TC-3574 **+ TC-3576**, and the sweep states that the orphan count "between
v2.10.0 and this version" was **1**. **ISS-03**: the CODE pin reads v2.7.0 (Approved) and the MTP
pin v1.6.0 (Approved).

**The new work is disciplined in the way that matters most for an RTM: TC-3576 is kept out of the
chain it does not belong to.** It enters at §3.2 **NFR-023**, the row stays **`G-UI`** with
Complete **0**, and both the row and the FR-131 cell say why — an enumerated scan over two strings
is not the jargon scanner and readability check NFR-023 has awaited since v1.1.0, the same
instrument-versus-enumeration distinction TC-3575 draws for Scenario 9. Raising **`TD-RTM-03`**
(Doc 07 credits TC-3538 and TC-3561 to NFR-023; this matrix cites neither) is a defect found while
fixing another and recorded rather than quietly absorbed — the behaviour this loop exists to
reward.

**The FR-131 ruling is unchanged and I re-derived it again, not carried it.** No acknowledge
affordance exists in `apps/` or `packages/` product source; `apps/web/src/app` still has no ballot
route, so SCR-13/SCR-14 remain unbuilt; no FR-131 denylist scan exists anywhere in the repository,
so **TC-3575 stays correctly Blocked — instrument absent**. **FR-131 stays OPEN (G-PHASE3).**
**Must: 138 · 16 COMPLETE · 122 OPEN**, confirmed by two independent signals — the hook's
derivation from row status markers and my own recomputation from §6 (FR-Must 114/16/98 + NFR-Must
24/23/0/24) — with stories at **17 of 134**, US-0134 still not done, and the **Gate-2 traceability
criterion NOT MET**. I also re-ran the suite: **625 / 625, 0 failed, exit 0**, web 101, corroborating
R-19, and the UT-0889 block case by case (**6 passed, 20 skipped of 26**).

**The version nevertheless FAILS cycle 2 on one Medium, in the same instrument as cycle 1 — the pin
note.** It asserts, twice, "**Every source this matrix now pins is Approved**". The `Source:` block
three lines above pins **BKLG-TRUMOCRACY v2.3.0 (In Review)**, and the sentence's own list names
SDD **v2.13.0**, BKLG **v2.5.0** and TC **v2.8.0** — three versions this matrix does **not** pin
(it pins SDD v2.11.2, BKLG v2.3.0 and TC v2.7.0). It also contradicts the sentence three lines
earlier — "SDD and BKLG still do not advance" — and contradicts itself, closing with "TC (Doc 07)
at v2.8.0 **In Review**". The direction is the harmful one: it tells a Gate-2 reader the evidence
base is more settled than it is, and it is asserted as a finding ("the first time that has been
true since the FR-131 cascade opened") rather than in passing.

Everything mechanical is clean: **zero transcription residue** across the 14 Doc 08 OP boundaries;
**17 tables, zero cell-count mismatches, zero missing trailing pipes**; §6 arithmetic holds
(485 − 230 = **255**; 136 + 94 = 230) and its derivation from Doc 07's 476 anchors (476 − 1 + 10 =
485) matches the anchor count I measured in Doc 07 independently; §9's identity holds
(230 + 15 + 233 = **478**, matching Doc 07 §2).

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the score clears the bar; the Medium does not. PASS requires both.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | The FR-131 chain is unchanged and correct; TC-3576 is routed to the requirement it actually verifies (NFR-023 · DES-085) and explicitly excluded from clause (e). Naming it in the FR-131 cell only so a reader comparing the six-`it` block to the row finds no unexplained assertion is exactly right. |
| T2 Soundness | 20 | 98 | 19.6 | NFR-023 stays `G-UI` with Complete 0 on stated reasoning; `TD-RTM-03` is raised, scoped and owned rather than repaired in passing; the two runs against one unmerged tree are called "one piece of evidence, not two". Each of those is the harder and more honest call. |
| T3 Traceability & IDs | 20 | 92 | 18.4 | Every id cited exists and every chain link I followed closes as far as the evidence allows; the NFR-023 row now carries its TC-3576 link with the disagreement it exposes named as `TD-RTM-03`. Docked for **ISS-01** and **ISS-02** — the pin block and its note disagree about what this matrix rests on. |
| T4 Security & failure modes | 15 | 98 | 14.7 | The Scenario 9 gap remains a named Blocked case rather than prose; the §8 change-impact trigger is intact; the post-merge re-run is still recorded as owed rather than treated as done. "A green suite is not a closed matrix" continues to be the correct posture. |
| T5 Completeness & testability | 15 | 98 | 14.7 | Every figure re-derived and reconciled (§6 485 / 230 / 255 from 476 anchors; §9 230 + 15 + 233 = 478; §6 Must lines 114/16/98 and 24/23/0/24 summing to the audit's 138/16/122). The three-way denominator warning is repeated against the new figures rather than dropped. |
| T6 Convention compliance | 10 | 86 | 8.6 | Correct minor bump (2.10.0 → **2.11.0**), `Status: In Review`, cycle 2 of 5 named, prior records retained, sign-off row dated 2026-09-07. Docked for **ISS-01** and **ISS-03** (`Last updated` a day behind the version's own date). |
| **Total** | **100** | — | **95.6 → 96%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T3 / T6 | v2.11.0 pin note, line **164**, and the v2.11.0 changelog, line **218** — "**Every source this matrix now pins is Approved** — SRS v2.17.1, SDD v2.13.0, BKLG v2.5.0, CODE v2.7.0, MTP v1.6.0, TC (Doc 07) at v2.8.0 In Review as this version's sibling" | **False as written, of this document's own pin block.** The `Source:` block (lines 93–95) pins **SDD v2.11.2**, **BKLG v2.3.0 — labelled In Review by that block itself** — and **TC v2.7.0**. So (i) at least one pinned source is *not* Approved, which is the claim's whole point; (ii) three of the six versions listed are not the versions pinned; (iii) it contradicts its own neighbouring sentence, "SDD and BKLG still do not advance … advancing a pin asserts the delta was read, and neither was"; and (iv) it contradicts itself, ending "at v2.8.0 **In Review**". The claim is made **twice** and asserted as a finding — "the first time that has been true since the FR-131 cascade opened" — so a Gate-2 reader takes the evidence base to be settled when one pinned source is not. This is the same instrument and the same over-claim class as the cycle-1 Medium; grading it lower here would move the bar between cycles. **No count, status or ruling is affected.** | Say the true thing, which is nearly as good: "every source document has now reached an **Approved version** — SRS v2.17.1, SDD v2.13.0, BKLG v2.5.0, CODE v2.7.0, MTP v1.6.0 — **although this matrix still pins SDD v2.11.2 and BKLG v2.3.0**; the SDD/BKLG pin-sync is still owed." Correct both sites, and drop or qualify "for the first time" accordingly. |
| ISS-02 | Low | T3 | `Source:` block line **95** — "TC-TRUMOCRACY **v2.7.0** (**In Review** — **this version syncs to it**; v2.6.0 at the previous version)" | This version demonstrably syncs to Doc 07 **v2.8.0**, and says so four times: §6's convention note derives the dashboard from "Doc 07 at **v2.8.0** … anchor count 475 → 476"; §3.1, §4 and the changelog all cite Doc 07 v2.8.0 for TC-3576 and the TC-3573 re-cut; and the pin note lists "TC (Doc 07) at v2.8.0". The Source line was simply not advanced with the rest. A verifier reconciling §6's **485** against the pinned v2.7.0 (476 − 1 + 10 needs v2.8.0's anchor count) cannot reproduce it from the pinned version. **Low, not Medium:** the authoritative line under-states rather than over-states the sync, and the body supplies the correct version repeatedly. | Advance the pin to **TC-TRUMOCRACY v2.8.0 (In Review — this version syncs to it; v2.7.0 at the previous version)**, matching the note. It fixes with ISS-01 in the same block. |
| ISS-03 | Low | T6 | Header, line **173** — `Last updated:  2026-09-06` | This version is dated **2026-09-07** everywhere else — the v2.11.0 changelog entry, run R-19, §9's tests-green row and the tester's own sign-off row all carry 2026-09-07. It is the field a reader uses to tell whether the document predates a run it cites. | Set `Last updated: 2026-09-07`. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Cycle-1 issues — closure verified at source, one by one

| Cycle-1 id | Severity | Status | How I verified it |
|---|---|---|---|
| ISS-01 | Medium | **CLOSED** | The v2.10.0 pin note now quotes what Doc 04 v1.5.0 said ("§14 reserved TC-3564–TC-3699, annotated **none minted**, and contained neither TC-3569 nor TC-3570") and re-attributes the register claim to **Doc 04 v1.6.0 (Approved)**. I read v1.6.0 §14 (line 2399) and §0.4 (line 702) directly: the six ids are recorded in `TS-ADV-01…16`, `TS-SCAFFOLD` and `TS-ABSENCE`, and the `TS-V1-*` reservation is narrowed to TC-3570–TC-3699. The original sentence is retained, not overwritten. |
| ISS-02 | Low | **CLOSED** | §4's v2.11.0 re-sweep and §3.1's evidence cell both read **6** `it`s and map `UT-0889` → TC-3570..TC-3574 + TC-3576; the sweep states the interim orphan count was **1**. I counted the `it`s in `apps/web/test/safety-surfaces.test.tsx`: six. TC-3576 is correctly routed to NFR-023, not to the FR-131 chain. |
| ISS-03 | Low | **CLOSED** | The `Source:` block reads CODE **v2.7.0 (Approved — PASS 96%, 0C/0H/0M/3L)** and MTP **v1.6.0 (Approved — PASS 96%; §0.5 S4/S5 and §14 read)**, both matching the live headers, with the FAIL annotation correctly dropped. |

### Independent verification performed for this review

| Check | Method | Result |
|---|---|---|
| Must-row state, signal 1 | `node hooks/run_gates.cjs --audit` | **138 Must rows, 16 COMPLETE, 122 OPEN**; the two independent signals AGREE; Gate-2 traceability criterion **NOT MET** |
| Must-row state, signal 2 | §6 recomputed by hand | FR-Must 114 / 16 / 98 + NFR-Must 24 / 23 / 0 / 24 = **138 / 16 / 122**; stories **17 of 134** |
| FR-131 ruling premises | re-checked at source, not carried | No acknowledge affordance in `apps/` or `packages/` product source; `apps/web/src/app` has no ballot route (SCR-13/SCR-14 unbuilt); no FR-131 denylist scan in the repository — **TC-3575 stays correctly Blocked** and **FR-131 stays OPEN (G-PHASE3)** |
| Suite green | `npm test` from the repo root | **625 / 625, 0 failed, exit 0** — contracts 95 · protocol 151 · sdk 244 · ui 18 · indexer 16 · web **101**, matching R-19 package for package |
| UT-0889 block | `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web` | **6 passed, 20 skipped (26)** — six `it`s, six mapped cases, all green individually |
| §6 derivation | recomputed against Doc 07 measured independently | Doc 07 anchors **476** (I swept them), so 476 − 1 + 10 = **485** ✓; 136 + 94 = **230** ✓; 485 − 230 = **255** ✓ |
| §9 identity | recomputed | 230 + 15 + 233 = **478**, matching Doc 07 §2's designed total ✓; the §6-versus-§9 denominator split is still disclosed and still owed as `TD-RTM-02` |
| Pins | each checked against the live document header | CODE **v2.7.0 Approved** ✓ · MTP **v1.6.0** ✓ · SRS **v2.17.1 Approved** ✓ · current SDD **v2.13.0 Approved**, BKLG **v2.5.0 Approved**, Doc 01 **v2.3.0 Approved**, Doc 09 **v1.9.0 Approved** — all as described; **the pinned SDD/BKLG/TC versions are not the ones the note lists (ISS-01, ISS-02)** |
| `TD-RTM-03` | checked the claim it rests on | Doc 07 does record **TC-3538** and **TC-3561** as verifying `NFR-023 · DES-085` while this matrix's NFR-023 row cites neither — the debt is real, correctly scoped and correctly owned |
| Residue over the 14 OP boundaries | scan for FIND / REPLACE-WITH / four-backtick fences / OP headers / adjacent duplicate lines | **zero** hits |
| Table integrity | cell-count and trailing-pipe sweep, all **17** tables | **zero** mismatches, **zero** missing trailing pipes |

## 5. Routing instruction (to the owning role)

**FAIL → route to the tester (Ji-woo Park), the owning role, for cycle 3 of 5.** The rework MUST
produce a **new version** (**v2.11.1** is the right bump — one sentence at two sites, one pin line
and one date; nothing normative moves) with `Status: In Review`, after which this loop re-reviews.
Fix **ISS-01** at both sites; ISS-02 and ISS-03 ride with it in the same header block. The
identical pin-block correction is owed in Doc 07 v2.8.0 (its ISS-01), so one pass over both headers
closes both cycles.

**Nothing in this review moves a row, a count or the ruling.** FR-131 stays **OPEN (G-PHASE3)**;
**Must COMPLETE stays 16 of 138, open Must stays 122**; US-0134 still does not meet the Definition
of Done; NFR-023 stays `G-UI` with Complete 0. As the role Accountable for "RTM complete (zero
gaps)" I record again for the Gate-2 packet that the **traceability criterion is NOT MET** and that
**no merge sign-off is offered** at this version.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5 and the verdict is FAIL, not ESCALATED. Three cycles of
headroom remain, and the surviving defect is one sentence written twice.
