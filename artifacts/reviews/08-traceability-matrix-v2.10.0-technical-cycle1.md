# Document Review Report — Doc 08 Traceability Matrix v2.10.0 (technical, cycle 1)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md` (2026-09-06). Under CLAUDE.md
> RACI, reviewer-qa is **A** for "RTM complete (zero gaps)", so the FR-131 Must-row ruling was
> **re-derived from the requirement text and the shipped code** for this cycle — not carried over
> from v2.9.0 and not accepted from the document. Cycle counter restarts at 1: v2.10.0 is a new
> minor version (v2.9.0 closed PASS at cycle 2).

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.10.0
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 08)
Score: 95%
Critical: 0
High: 0
Medium: 1
Low: 2
Cycle: 1 of 5
Verdict: FAIL
```

Review date: 2026-09-06 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

Doc 08 v2.10.0 **FAILS cycle 1 on a single Medium**, and it is a citation defect in the pin note,
not a defect in the ruling. **The ruling itself is correct and I re-derived it independently
rather than reading it.** FR-131 stays **OPEN (G-PHASE3)**, and I confirmed each of the three
load-bearing premises at source:

- **The DES-098 acknowledge-to-proceed control does not exist.** A repository-wide search for any
  acknowledge affordance across `apps/` and `packages/` (excluding `node_modules`) returns nothing
  in product source. The banner is non-dismissable, which is a different property.
- **SCR-13 and SCR-14 are unbuilt.** `apps/web/src/app` contains `parties/`, `petitions/`,
  `proposals/` and `verify/` — there is no ballot-booth or post-vote-confirmation route, so a
  notice cannot be shown "wherever a vote is cast".
- **The Doc 04 §0.5 S5 population scan is specified and not built.** There is no FR-131 denylist
  script anywhere in the repository (`scripts/` holds only `contribute-learning`), which is
  precisely why **TC-3575 is Blocked — instrument absent** rather than covered by
  TC-3570..TC-3574. I agree with that call without reservation: recording five guarded strings as
  satisfying "every surface in every language" would have been the easiest false pass available at
  this version, and minting the criterion as a **named, traceable Blocked case** is the honest
  form of the same information.

**The Must count is right and two independent signals say so.** `node hooks/run_gates.cjs --audit`
derives **138 Must rows, 16 COMPLETE, 122 OPEN** from the row status markers and reports that this
**agrees** with the figure §9 publishes. I also re-derived it from §6 by hand: FR-Must 114 traced
114, complete **16**, gaps **98**; NFR-Must 24 traced 23, complete **0**, gaps **24** — 114 + 24 =
**138**, 98 + 24 = **122**. Stories meeting DoD stay **17 of 134**, **US-0134 does not meet the
Definition of Done**, and the Gate-2 traceability criterion is **NOT MET**. Nothing closed, and the
document says so in every place a reader might hope otherwise.

The obligation arithmetic also survives inspection. Moving ten → **eleven** is not a reversion of
the v2.9.0 correction: v2.9.0 removed the **DES-096 seam half** from the count, the seam half is
still excluded and still labelled, and the count moves because §4.45 gained a genuinely new
lettered clause. I counted the §4.45 obligations myself and the v2.10.0 verdict adds up — 4 met at
the copy layer (a, b, c and the widened closing sentence) + clause (e) partially evidenced + 6
unmet or unevidenced = **11**, consistent with the v2.8.0 item-by-item enumeration this version
leaves intact.

**The Medium.** The v2.10.0 pin note justifies advancing the MTP pin by saying §14's "register
**records TC-3564..TC-3569 as minted and reserves TC-3570–TC-3699**". Doc 04 v1.5.0 says neither:
§14 reserves **TC-3564–TC-3699** for the six unminted `TS-V1-*` suites and annotates it "none
minted"; the strings TC-3569 and TC-3570 do not occur anywhere in Doc 04. Because that sentence is
offered as evidence that the delta was read, a false statement about the register is a defect in
the one area this document exists to be trusted on. The identical sentence appears in Doc 07
v2.7.0 and is raised there as its ISS-01; one correction serves both.

Everything mechanical is clean: a cell-count sweep over **all 17 tables** finds **zero** rows
disagreeing with their header and **zero** rows missing a trailing pipe — so the v2.9.0 High stays
closed through this drop's edits to the §3.1 FR-131 row, the §4 sweep, §6, §7, §8 and §9; there
are no leaked transcription markers, duplicate lines or truncated tails at any of the 13 Doc 08 OP
boundaries; §6 arithmetic holds (484 − 229 = **255**; 136 inh. + 93 obs. = 229); §9's identity
holds (229 + 15 + 233 = **477**); and the §6-versus-§9 denominator mismatch is disclosed in terms
rather than smoothed, still owed as `TD-RTM-02`. The v2.9.0 Low (ISS-C2-01, stale In-Review pins)
is **discharged**: SRS v2.17.1 **Approved**, SDD v2.13.0 **Approved** (annotated in place rather
than rewritten, which is the correct treatment), MTP v1.5.0 **In Review**, BKLG v2.5.0
**Approved**, Doc 09 v1.9.0 **Approved** — every one matches the live header.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`95%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the score clears the bar; the Medium does not. PASS requires both.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | The FR-131 row now carries clause (e), both acceptance criteria, **UT-0889** and **TC-3570..TC-3575** in the chain and the evidence cell, with Scenario 8 and Scenario 9 tracked separately — which is what makes "PARTIALLY EVIDENCED" a finding rather than a hedge. Gap-log entry 117, the §4 sweep, §6, §8 and §9 move with it; no other row is touched, and the document says so. |
| T2 Soundness | 20 | 98 | 19.6 | The OPEN ruling is correct and I confirmed its premises at source (no acknowledge control; no ballot route; no S5 scan). The ten → eleven arithmetic is explained and consistent with the v2.8.0 enumeration. OPEN-27 and ENROL-COPY (j) are named as live questions and explicitly counted as neither coverage nor new gaps — the right treatment for questions that are not this role's to answer. |
| T3 Traceability & IDs | 20 | 88 | 17.6 | The chain BR-005/BR-009 → FR-131 → DES-098/DES-094/DES-096 → SCR-13/SCR-14 (UNBUILT) → EP-06 ▸ FE-058 ▸ US-0134 → TC list closes as far as the evidence allows, and every id cited exists in its source document or test file. Docked for **ISS-01** (the MTP §14 register asserted to say what it does not) and **ISS-02** (the "5 `it`s" statement in §4 and §3.1). |
| T4 Security & failure modes | 15 | 98 | 14.7 | The failure mode is stated as a mechanism, not a mood: with S5 unbuilt "there is no mechanical detector for this row", the residual rests on inspection (I) which is "point-in-time and unable to hold a Must row against silent regression", and the §8 change-impact row converts that into an editorial trigger for the next copy change. "A green suite is not a closed matrix" remains the correct posture for a Gate-2 evidence document. |
| T5 Completeness & testability | 15 | 95 | 14.25 | Every figure re-derived and reconciled (§6 484 / 229 / 255; §9 229 + 15 + 233 = 477; §6 Must 138 / 16 / 122 matching the audit's independent derivation). The §6-versus-§9 denominator gap is disclosed, quantified and owned as `TD-RTM-02` rather than papered over. Docked for **ISS-02**. |
| T6 Convention compliance | 10 | 95 | 9.5 | Correct minor bump (2.9.0 → **2.10.0**), `Status: In Review`, `Last updated: 2026-09-06`, ISO-8601 dates, named owners, the v2.9.0 record retained rather than overwritten, pins annotated rather than silently advanced. Docked for **ISS-03** (the CODE pin overtaken within the day). |
| **Total** | **100** | — | **95.25 → 95%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T3 | `Source:` v2.10.0 pin note, line **113** — "MTP v1.0.2 → v1.5.0 (In Review) — §0.5 S4/S5 were read as re-cut for clause (e), together with §14, **whose register records TC-3564..TC-3569 as minted and reserves TC-3570–TC-3699**" | **Doc 04 v1.5.0 says neither half of this.** §14 (line 2166) reserves **TC-3564–TC-3699** for the six unminted `TS-V1-*` suites, annotated "reserved at v1.1.0; **none minted** — each is blocked on unbuilt capability or on CON-015. OPEN-18", and §0.4 (line 505) repeats the same range; TC-3569 and TC-3570 appear nowhere in the file. The sentence is load-bearing because it is the stated justification for advancing the MTP pin ("the delta was read"), and the direction of the error is the harmful one: it reads as though the architect's register has already ratified the mint and narrowed the band. The **mint itself is sound** — ids continue from TC-3569, none reused, the band otherwise unminted — so no id or count changes. | Say what Doc 04 v1.5.0 actually reserves (**TC-3564–TC-3699**, "none minted"), record the register as **stale and the narrowing owed to the architect** (already in flight for v1.6.0), and keep the pin advance on the S4/S5 reading, which is genuine. The identical sentence in Doc 07 v2.7.0 (its ISS-01) must be corrected in the same touch. |
| ISS-02 | Low | T5 / T3 | §4 v2.10.0 sweep, line **1197** — "**UT-0889** (`apps/web/test/safety-surfaces.test.tsx`, **5** `it`s) … Material orphan count for this drop: 0"; the same "five `it`s green individually" phrasing in the §3.1 FR-131 evidence cell (line **1076**) | The block now has **6** `it`s: Doc 06 v2.7.0 added a DES-085 jargon scan ahead of the five mapped ones and records it ("UT-0889 row and Total updated (5 -> 6; 624 -> 625)"). The sixth maps to no `TC`, so "one TC per independently defeatable assertion" no longer describes the block and the sweep's zero is no longer true of the file. **Scored Low, not Medium:** the statement is scoped and dated to the Doc 06 **v2.6.0** drop that this version pins, and the direction is conservative — an unmapped guard credits no row with evidence it has not earned, and no count in this matrix moves. | At the next touch re-read the settled UT-0889, correct 5 → 6 in §4 and §3.1, and either record the jargon `it` against a `TC` or state that it is deliberately unmapped. Rides with the Doc 07 rework of the same fact. |
| ISS-03 | Low | T6 | `Source:` CODE pin (line **74**) and the v2.10.0 pin note — "CODE-TRUMOCRACY **v2.6.0** (In Review — cycle-1 FAIL 94%, v2.7.0 rework in progress)" | Doc 06 is now **v2.7.0, In Review** on disk, with its own cycle-2 technical review running. The pin is **correctly dated and annotated** — it names the FAIL, the score and the rework, which is the right discipline for pinning to a failing version — and it under-claims rather than over-claims. **Explicitly not scored as a correctness defect**, on the same ground as the v2.9.0 ISS-C2-01 Low. | Refresh the CODE pin when Doc 06 v2.7.0 clears its review; it rides with the SDD/BKLG pin-sync already recorded as owed. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Carried Low from cycle 2 of v2.9.0 — DISCHARGED

**ISS-C2-01** (every DES-094 / DES-098 citation qualified "Doc 03 v2.13.0, In Review, cycle 2
under way"; stale In-Review pins) — **discharged**. The pin block is re-cut, four pins advance on
deltas the version states were read, and Doc 03 v2.13.0's move to **Approved** is **annotated in
place** at the v2.9.0 text rather than rewritten — which preserves the trail and is the treatment
the cycle-2 report asked for. I checked all five current versions against their live headers and
each is stated correctly.

### Independent verification performed for this review (evidence, not assertion)

| Check | Method | Result |
|---|---|---|
| Must-row state, signal 1 | `node hooks/run_gates.cjs --audit` (derives from row status markers) | **138 Must rows, 16 COMPLETE, 122 OPEN** |
| Must-row state, signal 2 | §9 as published, and §6 recomputed by hand (114 + 24 = 138; 98 + 24 = 122) | **Agrees** with signal 1; the audit reports the two signals AGREE and the Gate-2 traceability criterion **NOT MET** |
| FR-131 ruling premise 1 | repository search for any acknowledge affordance in `apps/` and `packages/` product source | **None exists** — the DES-098 acknowledge-to-proceed control is unbuilt, as the row states |
| FR-131 ruling premise 2 | `apps/web/src/app` route inventory | `parties`, `petitions`, `proposals`, `verify` only — **SCR-13 / SCR-14 unbuilt** |
| FR-131 ruling premise 3 | search for an FR-131 denylist / S5 scan across the repository | **None exists** (`scripts/` holds only `contribute-learning`) — TC-3575 is correctly **Blocked, instrument absent** |
| Scenario text | Doc 02 v2.17.1 §8 Scenarios 8 and 9 read line by line (lines 2505–2519) | The requirement summary and every clause-(e) quotation in this matrix match the approved text, including "the reader test governs" and "a claim that contains none of the four banned words still FAILS" |
| Suite figure | `npm test` from the repo root, re-run by me | **625 / 625 pass, exit 0** — web **101**. §9's **624/624 (R-18)** is honest **as dated**: it names its tree (uncommitted, 40 dirty paths), states that a post-merge re-run is owed, and the +1 is the sixth UT-0889 `it` added afterwards by Doc 06 v2.7.0. The row needs re-deriving at merge, which it already says |
| UT-0889 case by case | `npx vitest run test/safety-surfaces.test.tsx --reporter=verbose -t "UT-0889"` in `apps/web` | **6 passed, 20 skipped (26)** — the five assertions this matrix credits to TC-3570..TC-3574 are all present and green |
| Table integrity | cell-count and trailing-pipe sweep over all **17** tables | **zero** mismatched rows, **zero** missing trailing pipes — the v2.9.0 High stays closed |
| Transcription residue over the 13 Doc 08 OP boundaries | scan for FIND / REPLACE-WITH / four-backtick fences / OP headers / adjacent duplicate lines | **zero** hits |
| §6 and §9 arithmetic | recomputed from the file | §6: 484 − 229 = **255**; 136 + 93 = 229. §9: 229 + 15 + 233 = **477**. The 484-versus-477 denominator split is disclosed and owned as `TD-RTM-02` |
| Pins | each checked against the live document header | SRS **v2.17.1 Approved**, SDD **v2.13.0 Approved**, MTP **v1.5.0 In Review**, BKLG **v2.5.0 Approved**, Doc 09 **v1.9.0 Approved** — all correct; CODE has since moved (**ISS-03**) |

## 5. Routing instruction (to the owning role)

**FAIL → route to the tester (Ji-woo Park), the owning role.** Fix **ISS-01** (state what Doc 04
v1.5.0 §14 actually reserves and record the narrowing as owed to the architect); ISS-02 and ISS-03
ride with the same touch. The rework MUST produce a **new version** — a Medium-level FAIL means at
least a minor bump, to **v2.11.0**, with `Status: In Review` — after which this loop re-reviews at
cycle 2.

**Nothing in this review changes a status, a count or the ruling.** FR-131 stays **OPEN
(G-PHASE3)** on the acknowledge-to-proceed control, SCR-13/SCR-14 and Scenario 9's absent
instrument; **Must COMPLETE stays 16 of 138 and open Must stays 122**; US-0134 still does not meet
the Definition of Done; TC-3575 stays correctly Blocked. As the role Accountable for "RTM complete
(zero gaps)", I record for the project-manager's Gate-2 packet that the **Gate-2 traceability
criterion is NOT MET** and that no merge sign-off is offered at this version.

**Sequencing recommendation to the project-manager (not a finding):** ISS-02 here and ISS-02/ISS-03
in the Doc 07 report all originate in Doc 06 **v2.7.0**, which is itself In Review with its cycle-2
review running. Hold both reworks until that review closes, so the tester re-reads a settled
UT-0889 once instead of twice.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5 and the verdict is FAIL, not ESCALATED.
