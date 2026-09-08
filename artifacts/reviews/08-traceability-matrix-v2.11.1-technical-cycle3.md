# Document Review Report — Doc 08 Traceability Matrix v2.11.1 (technical, cycle 3)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. Cycle 3 of 5 against
> `artifacts/reviews/08-traceability-matrix-v2.11.0-technical-cycle2.md` (FAIL 96%, 0C/0H/1M/2L).
> Under CLAUDE.md RACI, reviewer-qa is **A** for "RTM complete (zero gaps)", so the Must-row state
> and the FR-131 ruling were re-derived again at this cycle.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.11.1
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 08)
Score: 96%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 3 of 5
Verdict: FAIL
```

Review date: 2026-09-07 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

**Both cycle-2 issues are closed, and closed the harder way.** The Medium is fixed by **advancing
the pins** (SDD v2.11.2 → **v2.13.0 Approved**, BKLG v2.3.0 → **v2.5.0 Approved**, TC v2.7.0 →
**v2.8.1**) rather than by softening the sentence, so "every source this matrix pins is Approved"
is now true of the block; both sites of the old claim are annotated in place rather than rewritten;
`Last updated` reads **2026-09-07**. I verified every pin against its live header and all six are
exactly as stated. Nothing normative moved, as a patch requires: §6 still reads **485 / 230 / 255**,
§9's identity still holds (**230 + 15 + 233 = 478**), the FR-131 row is untouched, and **zero**
transcription residue and **zero** cell-count mismatches across all **17** tables.

**But the pin advance has a consequence this version does not disclose, and it is the finding of
this cycle.** The BKLG pin now points at **Doc 05 v2.5.0**, whose own census is explicit — "Total
(v2.5.0): **142 stories**, 875 points — an exact sum, not an approximation". This matrix's §6
dashboard still reports **Stories | 134 | 134 (all carry Gherkin AC) | 17 meet the Definition of
Done | 117**, and "17 of 134" recurs throughout. I resolved it mechanically rather than by
inference: **this matrix cites 134 distinct `US` ids; all 134 resolve in Doc 05 v2.5.0; and Doc 05
v2.5.0 contains 8 more that appear nowhere in this document — `US-0135` … `US-0142`.** So the
matrix traces **134 of 142** stories while publishing 134 as the population, and a reader of §6
would conclude every backlog story is traced.

**That is why the answer to the question I was asked — is "version-only, NOT re-read" an honest
basis for the sentence it supports? — differs between the two documents.** In Doc 07 it is honest,
and I passed that document: it cites stories without counting them, and I confirmed all 116 of its
cited ids resolve in v2.5.0. Here the same annotation sits under a **published census**. The note
is candid about the *reading* — "it does **not** claim a story-by-story read, and the `US-####`
chains in §3.1/§3.2 are **not** re-verified against v2.5.0 by it… that re-read is still owed" — but
that sentence covers the *quality of the chains for stories already present*. It does not cover the
*population*, and the population is precisely what moved between v2.3.0 (134) and the newly pinned
v2.5.0 (142). **The disclosure is real but partial, and the missing half is the one a Gate-2 reader
would act on.**

**I considered High and did not go there**, deliberately: no Must row, gap code, owner, phase or
ruling changes; the Gate-2 criterion is Must-row-based (FR/NFR) and is unaffected; and the
underlying gap predates this version — it dates from Doc 05 v2.4.0, while this matrix pinned v2.3.0
until today. **I also considered treating it as a carried Low and did not**, for the reason that
decides it: **this version's own edit is what turns a stale pin into a false alignment.** Until
v2.11.1 the matrix said "written against a 134-story backlog" and was right; from v2.11.1 it says
"written against v2.5.0" and publishes a 134-story census. The fix is cheap and non-normative —
state the population gap and raise it as a numbered debt in the §10 pattern this document already
uses well (`TD-RTM-01/02/03`), or add the eight rows.

**The ruling is unchanged and I re-derived it again rather than carrying it.** No acknowledge
affordance exists in `apps/` or `packages/` product source; `apps/web/src/app` has no ballot route,
so SCR-13/SCR-14 remain unbuilt; no FR-131 denylist scan exists anywhere in the repository, so
TC-3575 stays correctly Blocked. **FR-131 stays OPEN (G-PHASE3). Must: 138 · 16 COMPLETE · 122
OPEN**, both independent signals agreeing, stories meeting DoD **17**, US-0134 not done, **Gate-2
traceability criterion NOT MET**, and **no merge sign-off is offered**.

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the score clears the bar; the Medium does not. PASS requires both.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 96 | 19.2 | The FR/NFR side is complete and unchanged — 138 Must rows, the FR-131 chain intact, NFR-023 carrying TC-3576 without closing. Docked because the **Stories** dimension now under-covers the backlog this version pins: 134 rows against 142 stories (**ISS-01**). |
| T2 Soundness | 20 | 98 | 19.6 | Fixing the Medium by advancing pins rather than weakening the sentence is the right call and is defended correctly; the SDD advance is scoped to the two sections this matrix actually cites; the spent "not an approved source" caveat is annotated as spent rather than deleted, with the correct observation that a settled source and a built control are different things and only the second closes a Must row. |
| T3 Traceability & IDs | 20 | 92 | 18.4 | All six pins match their live headers; all 134 cited `US` ids resolve; the FR-131 chain, gap codes and owners are untouched. Docked for **ISS-01** — eight backlog stories (US-0135…US-0142) have no row and no disclosure — and for **ISS-02**. |
| T4 Security & failure modes | 15 | 98 | 14.7 | Unchanged and intact: TC-3575 still carries the Scenario 9 gap as a named Blocked case, the §8 change-impact trigger stands, the post-merge re-run is still recorded as owed, and "a green suite is not a closed matrix" remains the posture. |
| T5 Completeness & testability | 15 | 93 | 13.95 | Every test-case figure re-derived and identical to v2.11.0 (485 / 230 / 255; 230 + 15 + 233 = 478), and the Must lines still sum to 138 / 16 / 122. Docked because the coverage dashboard's story census is incomplete against its own newly pinned source (**ISS-01**). |
| T6 Convention compliance | 10 | 98 | 9.8 | Correct **patch** bump (2.11.0 → **2.11.1**) with the reason stated, `Status: In Review`, cycle 3 of 5 named, `Last updated: 2026-09-07`, both sites of the corrected claim annotated in place, sign-off row dated. |
| **Total** | **100** | — | **95.65 → 96%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T1 / T3 / T5 | §6 coverage dashboard, **Stories** row (line **1422**) — "134 \| 134 (all carry Gherkin AC) \| 17 meet the Definition of Done \| 117" — read against the newly advanced `Source:` pin **BKLG-TRUMOCRACY v2.5.0** (line 93); and every "17 of 134" elsewhere | **The matrix now pins a 142-story backlog and publishes a 134-story census.** Doc 05 v2.5.0 states "Total (v2.5.0): **142 stories**, 875 points — an exact sum" and "Counts unchanged at v2.5.0: 12 epics · 62 features · **142 stories**". I extracted every `US` id from this matrix and resolved it against Doc 05 v2.5.0: **134 cited, all 134 resolve, and 8 ids in v2.5.0 appear nowhere here — `US-0135`, `US-0136`, `US-0137`, `US-0138`, `US-0139`, `US-0140`, `US-0141`, `US-0142`.** So the Stories row reports the *traced* count as if it were the *population*, "134 traced of 134" reads as complete coverage of a backlog that has 142, and the DoD ratio is stated against the smaller denominator (17/134 = 12.7% rather than 17/142 = 12.0%). §10 carries no debt entry for it — `TD-RTM-01/02/03` are about `UT` double-definitions, TC denominators and NFR-023 links, none of them this. **The v2.11.1 pin note discloses the adjacent fact but not this one:** it says the advance "does not claim a story-by-story read" and that the `US-####` chains are "not re-verified against v2.5.0", which covers the *quality of the chains for stories already present*; the *population* gap is what the advance newly asserts alignment with, and it is unstated. **Not scored High** — no Must row, gap code, owner, phase or ruling changes, the Gate-2 criterion is Must-row-based and unaffected, and the substantive gap predates this version (Doc 05 v2.4.0). **Not scored as a carried Low** — this version's own pin advance is what converts a stale pin into a false alignment. | Either add the eight rows, or — better for a patch — **disclose and register**: state in the §6 Stories row that the census is measured against the backlog as of BKLG **v2.3.0** and that Doc 05 v2.5.0 carries **142** stories, of which **US-0135…US-0142 are not yet traced here**; raise it as a numbered `TD-RTM-04` in §10 with the tester as owner; and note it in the pin note beside the "version-only" annotation, so the pin advance carries its own consequence. Nothing normative needs to move to fix this. |
| ISS-02 | Low | T3 | `Source:` block, line **93** — "SDD-TRUMOCRACY v2.13.0 (**Approved** — **scoped read**: §15 …, and §10.12.3 / DES-094 clause 9) **§5.2, §10.13.10.1, §10.13.13, §15, §16**" | The new scoped-read annotation and the **legacy section list** now sit on the same pin, naming two different section sets, so a reader can take the trailing list as the scope that was read — the opposite of what the annotation says. Not contradictory in fact (the trailing list records the sections this matrix historically cites) but adjacent and unlabelled, on the line the cycle-2 Medium was about. The identical shape is raised as Doc 07 v2.8.1's own ISS-01, so one convention fixes both. | Label the trailing list ("sections this matrix cites: …") or fold it inside the annotation, so one pin names one scope. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Cycle-2 issues — closure verified at source

| Cycle-2 id | Severity | Status | How I verified it |
|---|---|---|---|
| ISS-01 | Medium | **CLOSED** | The `Source:` block now pins **SDD v2.13.0 (Approved)**, **BKLG v2.5.0 (Approved)** and **TC v2.8.1**, so the sentence "every source this matrix pins is Approved" is true of the block. Both sites of the old claim — the pin note and the v2.11.0 changelog — are annotated in place: "that sentence was false of the block it sat above… corrected at v2.11.1 by advancing the pins". The file no longer contains `SDD-TRUMOCRACY v2.11.2` or `BKLG-TRUMOCRACY v2.3.0` as a pin. |
| ISS-02 | Low | **CLOSED** | The TC pin reads **v2.8.1 (In Review — this version's sibling, reworked in the same cycle-3 touch)**, matching the body, which has cited Doc 07 v2.8.x since v2.11.0. |
| ISS-03 | Low | **CLOSED** | `Last updated: 2026-09-07`, matching the v2.11.1 entry, R-19 and the tester's sign-off row. |

### Independent verification performed for this review

| Check | Method | Result |
|---|---|---|
| Story population | extracted every `US-####` id from this matrix and from Doc 05 v2.5.0 and diffed them | Matrix cites **134**, all **134 resolve**; Doc 05 v2.5.0 holds **8 more** — US-0135…US-0142 — cited nowhere here → **ISS-01** |
| Doc 05 census | read Doc 05 v2.5.0's own totals | "Total (v2.5.0): **142 stories**, 875 points — an exact sum"; "Counts unchanged at v2.5.0: 12 epics · 62 features · **142 stories**"; the move 134 → 142 is recorded in its own changelog |
| Pins | each checked against the live document header | SRS **v2.17.1 Approved** ✓ · SDD **v2.13.0 Approved** ✓ · BKLG **v2.5.0 Approved** ✓ · CODE **v2.7.0 Approved** ✓ · MTP **v1.6.0 Approved** ✓ · TC **v2.8.1** (In Review, correctly labelled as the sibling) ✓ |
| Must-row state, two signals | `node hooks/run_gates.cjs --audit`, then §6 recomputed by hand | **138 / 16 / 122** from the row markers, agreeing with §9; by hand, FR-Must 114/16/98 + NFR-Must 24/23/0/24 = **138 / 16 / 122**; Gate-2 criterion **NOT MET** |
| FR-131 ruling premises | re-checked at source, not carried | No acknowledge affordance in `apps/` or `packages/` product source; no ballot route in `apps/web/src/app`; no FR-131 denylist scan in the repository — **TC-3575 correctly Blocked**, **FR-131 OPEN (G-PHASE3)** |
| Nothing normative moved | §6 and §9 recomputed | §6 **485 / 230 / 255** (136 inh. + 94 obs. = 230; 485 − 230 = 255); §9 **230 + 15 + 233 = 478**, matching Doc 07 §2 — every figure identical to v2.11.0, as the patch claims |
| Suite | R-19 not re-run, by design | Correct: nothing testable changed. R-19 (625/625, exit 0) stands, and I independently reproduced **625 / 625, exit 0** at cycle 2; the post-merge re-run is still owed and still recorded as owed |
| Residue over the 7 Doc 08 OP boundaries | scan for FIND / REPLACE-WITH / four-backtick fences / OP headers / adjacent duplicate lines | **zero** hits |
| Table integrity | cell-count and trailing-pipe sweep, all **17** tables | **zero** mismatches, **zero** missing trailing pipes |
| §10 debts | read the debt table | `TD-RTM-01/02/03` present and correctly scoped; **none of them covers the story-population gap** → ISS-01's "register it" fix |

## 5. Routing instruction (to the owning role)

**FAIL → route to the tester (Ji-woo Park), the owning role, for cycle 4 of 5.** The rework MUST
produce a **new version** — **v2.11.2** if the fix is the disclosure-and-register route (a §6 row
note, a `TD-RTM-04` entry and a clause in the pin note; nothing normative moves), or **v2.12.0** if
the owner chooses to add the eight story rows, which would move the dashboard. ISS-02 rides with
either, and the same convention fixes Doc 07 v2.8.1's ISS-01.

**Doc 07 v2.8.1 PASSED at this cycle** and its owner should set `Status: Approved`; this document is
now the only one in the review loop. **One cycle of headroom remains after cycle 4** before the cap
forces a recorded human decision — worth stating plainly, because the surviving defect is a
disclosure and a debt entry, not a recount, and should not consume the remaining cycles.

**Nothing in this review moves a Must row, a count or the ruling.** FR-131 stays **OPEN
(G-PHASE3)**; **Must COMPLETE stays 16 of 138, open Must stays 122**; US-0134 still does not meet
the Definition of Done. As the role Accountable for "RTM complete (zero gaps)" I record again that
the **Gate-2 traceability criterion is NOT MET** and that **no merge sign-off is offered**.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 3 of 5 and the verdict is FAIL, not ESCALATED.
