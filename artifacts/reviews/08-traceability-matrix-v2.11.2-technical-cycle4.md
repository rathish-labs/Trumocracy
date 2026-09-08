# Document Review Report — Doc 08 Traceability Matrix v2.11.2 (technical, cycle 4)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework as a
> new version. Reviewer assigned by
> `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. Cycle 4 of 5 against
> `artifacts/reviews/08-traceability-matrix-v2.11.1-technical-cycle3.md` (FAIL 96%, 0C/0H/1M/1L).
> Under CLAUDE.md RACI, reviewer-qa is **A** for "RTM complete (zero gaps)". Doc 07 v2.8.1 is
> Approved and out of the loop; this is the only document in it.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.11.2
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 08)
Score: 96%
Critical: 0
High: 0
Medium: 1
Low: 1
Cycle: 4 of 5
Verdict: FAIL
```

Review date: 2026-09-07 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

**The cycle-3 Medium is substantively closed, and closed well.** The disclose-and-register route
was taken in full and independently: §6's Stories row now reads **142 | 134 (all 134 carry Gherkin
AC; 8 untraced — see below) | 17 | 125** — and 142 − 17 = 125 follows the table's own convention; a
**story-census disclosure** sits directly beneath the dashboard naming all eight ids with the
requirement each was minted for; **`TD-RTM-04`** is raised with owner, effect, a "closes when" and a
"does NOT close by" clause; and the BKLG pin annotation now carries the census consequence, so the
pin can no longer be quieter than the denominator that rests on it. **I re-ran the id diff that
produced the finding: this matrix now cites all 142 `US` ids and Doc 05 v2.5.0 holds none it does
not name — the gap I measured at cycle 3 (eight ids absent) is closed as a disclosure.** I also
verified the eight FR attributions against Doc 05's own v2.4.0 mint line rather than accepting
them: **US-0135 (FR-121) · US-0136 (FR-125) · US-0137 (FR-133) · US-0138 (FR-126) · US-0139
(FR-127) · US-0140 (FR-128) · US-0141 (FR-129) · US-0142 (FR-050)** — all eight correct, including
the two that are easy to transpose. **Disclosed, not traced** is the right call and the reasoning
for it is exactly right: deriving eight chains from a backlog not re-read would repeat the original
error in the opposite direction.

**The cycle-3 Low is closed too** — the SRS and SDD pins now separate **scoped read:** from
**sections this matrix cites:**, so one pin names one scope.

**It nevertheless FAILS cycle 4 on one Medium, and it is a single cell.** The version states twice
that "every **live** '17 of 134' becomes '**17 of 142**' — the §6 DoD lead-in **and the §9
sign-off**". The §6 lead-in was converted and the §9 sign-off's **Notes** cell was converted
("Stories meeting the Definition of Done: **17 of 142**"). The **Decision cell of that same
sign-off row was not**: it still reads "Must 16/138 · **stories 17/134** · both UNCHANGED". That is
the live Gate-2 sign-off statement for this version, dated 2026-09-07 — the cell a Gate-2 packet
quotes — and it re-publishes the exact denominator this version exists to retire, contradicting
§6 and its own row two cells later. A whole-file sweep confirms it is the **only** live instance:
`17/134` survives at three sites, two of which are historical changelog entries covered by the
blanket denominator note, and there is **no** `17/142` in slash form anywhere. The claim to have
converted the sign-off is therefore false as written — the same "a statement that outran the
artefact" pattern the version's own changelog names.

**Everything else is verified clean and nothing normative moved.** §6's other rows are untouched
(FR-Must 114/16/98, NFR-Must 24/23/0/24, Test cases 485/230/255); the audit derives **138 Must / 16
COMPLETE / 122 OPEN** and agrees with §9; **FR-131 stays OPEN (G-PHASE3)**; **zero** transcription
residue at the 10 OP boundaries; **17 tables, zero cell-count mismatches** — including the sign-off
row, whose escaped pipes render correctly, the defect class the owner caught in their own
pre-flight. **Gate-2 traceability criterion NOT MET; no merge sign-off offered.**

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`96%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL` — the score clears the bar; the Medium does not. PASS requires both.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.4 | The population is now stated at 142, the eight untraced stories are named with their FRs (all eight verified against Doc 05's mint line), and the reasoning that no Must row can move on them is correct and checkable. Docked lightly for **ISS-02** — the row-level residue is mis-sized. |
| T2 Soundness | 20 | 98 | 19.6 | "Disclosed, NOT traced" is the right judgement and the argument for it is the strongest thing in this version: deriving eight chains from a backlog not re-read would repeat the original error inverted. The generalisation drawn — "a pin advance is a change to a denominator" — is more actionable than a resolution, and it is written where the next reader will hit it. |
| T3 Traceability & IDs | 20 | 94 | 18.8 | All 142 `US` ids now appear; the eight FR attributions are exact; `TD-RTM-04` is well formed, with an explicit "does NOT close by editing the eight rows in isolation". Docked for **ISS-02** (seven §3.1 rows carry the same stale "none" story cell that the debt entry describes as "one concrete cell"). |
| T4 Security & failure modes | 15 | 98 | 14.7 | Unchanged and intact: TC-3575 still carries Scenario 9 as a named Blocked case, FR-131's ruling is untouched, the post-merge re-run is still recorded as owed, and the version correctly declines to re-run a suite when nothing testable changed. |
| T5 Completeness & testability | 15 | 93 | 13.95 | Every unchanged figure re-derived and confirmed identical (485 / 230 / 255; 138 / 16 / 122; 230 + 15 + 233 = 478). Docked for **ISS-01**: the Gate-2 sign-off row still publishes the retired denominator, so the one section a packet quotes is the one the correction missed. |
| T6 Convention compliance | 10 | 92 | 9.2 | Correct **patch** bump (2.11.1 → **2.11.2**), `Status: In Review`, cycle 4 of 5 named with the cap stated, `Last updated: 2026-09-07`, historical records annotated as a class rather than rewritten — a good instinct, correctly applied. Docked because the changelog's "every live … and the §9 sign-off" is not true of the artefact as applied (**ISS-01**). |
| **Total** | **100** | — | **95.65 → 96%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | **Medium** | T5 / T6 | §9 sign-off table, tester row (line **1774**), **Decision cell** — "Submitted — 122 open Must rows recorded; 0 Must rows CLOSED, 0 reclassified, 0 opened. **Must 16/138 · stories 17/134** · both UNCHANGED." | **The live Gate-2 sign-off still publishes the denominator this version retired.** The changelog states twice that "every **live** '17 of 134' becomes '17 of 142' — the §6 DoD lead-in **and the §9 sign-off**"; the lead-in was converted and this row's **Notes** cell was converted ("Stories meeting the Definition of Done: **17 of 142**"), but the **Decision** cell — the cell a Gate-2 packet quotes, dated 2026-09-07 for **this** version — was not. It therefore contradicts §6's Stories row, contradicts its own row two cells later, and re-publishes the fraction whose correction is this version's entire subject. A whole-file sweep confirms this is the **only** live survivor: `17/134` appears at three sites, the other two being historical changelog entries covered by the blanket denominator note, and **no** `17/142` exists in slash form anywhere in the file. It is one cell — but it is the wrong one, and the claim to have converted it is false as written, which is the same "statement that outran the artefact" pattern the version's own changelog names. | In the Decision cell write **stories 17/142** (the numerator is unchanged; only the denominator moves) — or, if the phrase "both UNCHANGED" is meant to carry the pre-correction figure deliberately, say so in the cell. One cell edit. Nothing normative moves. |
| ISS-02 | Low | T1 / T3 | `TD-RTM-04` (§10, line **1791**) — "**The live residue is one concrete cell:** §3.2's FR-050 row reads 'none' for its story while US-0142 exists"; and the §6 census disclosure's "**Sharpest instance**" framing | The residue is **eight** cells, not one. I extracted the story cells of every FR named in the disclosure: **FR-121, FR-125, FR-126, FR-127, FR-128 and FR-129 all read "none"**, and **FR-133** reads DES-099 with "none" for its story — while Doc 05 v2.5.0 has minted US-0135…US-0141 for exactly those requirements — plus FR-050/US-0142, the one the entry names. The substance is not misstated (the disclosure names all eight ids immediately above, and the debt's "closes when" clause already scopes the fix to all of them), so no reader is misled about coverage; what is mis-sized is how much stale text the next backlog sync must repair, which is what a debt entry exists to tell them. FR-050 is fairly called the sharpest — §9 separately assigns the Product Owner a "FR-050 story gap" — but "sharpest of eight" and "the only one" are different claims. | Change "one concrete cell" to the true count: all eight FR rows carry a "none" story cell against the pinned backlog — FR-121, FR-125…FR-129 and FR-133 in §3.1, FR-050 in §3.2 — with FR-050 named as the sharpest because §9 also assigns a story gap on it. One clause in `TD-RTM-04` and one in the §6 disclosure. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

### Cycle-3 issues — closure verified at source

| Cycle-3 id | Severity | Status | How I verified it |
|---|---|---|---|
| ISS-01 | Medium | **CLOSED (substantively)** | §6's Stories row reads **142 \| 134 (all 134 carry Gherkin AC; 8 untraced — see below) \| 17 \| 125**, with 142 − 17 = 125 following the table's own convention. A story-census disclosure sits beneath the dashboard naming all eight ids and their FRs; `TD-RTM-04` registers the owed re-read; the BKLG pin annotation now carries the census clause. **I re-ran the id diff: the matrix now cites all 142 `US` ids and Doc 05 v2.5.0 holds none it does not name.** The residual is the single un-converted Decision cell — raised as this cycle's ISS-01, not as a failure of the disclosure. |
| ISS-02 | Low | **CLOSED** | The SRS and SDD pins now read "**scoped read:** …" followed by a labelled "**sections this matrix cites:** …", so one pin names one scope. The unlabelled trailing list is gone. |

### Independent verification performed for this review

| Check | Method | Result |
|---|---|---|
| Story population | re-ran the cycle-3 id diff — every `US-####` in Doc 05 v2.5.0 against every `US-####` in this matrix | Matrix now cites **142**; **zero** Doc 05 ids uncited (was 8) — the disclosure closes the population gap |
| The eight FR attributions | checked each against Doc 05's own v2.4.0 mint line and its §12 coverage assertion | **All eight exact**: US-0135 (FR-121) · US-0136 (FR-125) · US-0137 (FR-133) · US-0138 (FR-126) · US-0139 (FR-127) · US-0140 (FR-128) · US-0141 (FR-129) · US-0142 (FR-050) |
| Doc 05 census | read Doc 05 v2.5.0's own totals | "Total (v2.5.0): **142 stories**, 875 points — an exact sum"; "12 epics · 62 features · **142 stories**" — the 142 is Doc 05's figure, correctly quoted |
| "No Must row can move on it" | opened each of the eight FR rows in this matrix | FR-121, FR-125, FR-126, FR-127, FR-128, FR-129 = `G-TRACE + G-PHASE3`; FR-133 = `G-PHASE3` (DES-099); FR-050 = a **Should** row — the reasoning holds: a missing `US` cannot close a row blocked on a missing `DES` and a missing implementation |
| Denominator sweep | every `of 134` / `of 142` / `17/134` / `17/142` occurrence located and classified | 26 `of 134`: all either this version's own description of the defect, or historical entries covered by the blanket note. `17/134`: three sites — two historical, **one live (ISS-01)**. **No `17/142` in slash form anywhere** |
| Nothing normative moved | §6 and §9 recomputed | FR-Must **114 / 16 / 98**, NFR-Must **24 / 23 / 0 / 24**, Test cases **485 / 230 / 255**, §9 **230 + 15 + 233 = 478** — all identical to v2.11.1 |
| Must-row state, two signals | `node hooks/run_gates.cjs --audit`, then §6 by hand | **138 / 16 / 122** from row markers, agreeing with §9; by hand 114/16/98 + 24/23/0/24 = **138 / 16 / 122**; Gate-2 criterion **NOT MET** |
| FR-131 ruling | unchanged and not re-opened by this version | **OPEN (G-PHASE3)** — no acknowledge control, no ballot route, no S5 scan; TC-3575 correctly Blocked |
| Table integrity | escape-aware cell-count and trailing-pipe sweep, all **17** tables | **zero** mismatches — including the sign-off row, whose escaped pipes render correctly (the defect class the owner caught in their own pre-flight) |
| Residue over the 10 OP boundaries | scan for FIND / REPLACE-WITH / four-backtick fences / OP headers / adjacent duplicate lines | **zero** hits |
| Cross-document observation (not an issue against this version) | grep Doc 05 and Doc 07 for the dashboard figure | Doc 05 v2.5.0 (**Approved**) line 95 quotes this matrix as "17 of 134 … dashboard row reads 134/134/17/117" — now superseded. Doc 07 carries the story figure **nowhere**, so its Approved status is unaffected. Route the Doc 05 staleness to the product-owner at its next touch |

## 5. Routing instruction (to the owning role)

**FAIL → route to the tester (Ji-woo Park), the owning role, for cycle 5 — the cap.** The rework
MUST produce a **new version** (**v2.11.3**; nothing normative moves) with `Status: In Review`.
**ISS-01 is a single cell**: write `stories 17/142` in the §9 sign-off Decision cell, or state in
the cell that the pre-correction figure is deliberate. **ISS-02 is one clause** in `TD-RTM-04` and
one in the §6 disclosure, correcting "one concrete cell" to the true eight. Neither touches a Must
row, a count, a gap code or the ruling.

**Cap warning, stated plainly because it is now one cycle away.** Cycle 5 is the last cycle. If a
cycle-5 version still fails the bar, the verdict becomes **ESCALATED** and the document requires a
**recorded human decision** — approve-as-is (with the open issues accepted, by name and date),
rework, or reject — presented by the project-manager. **That should not be necessary here.** Both
surviving issues are text edits with no derivation behind them, and every substantive finding of
cycles 1–4 is closed: the FR-131 chain, the Must count, the pins, the census and the debts are all
in the state a Gate-2 verifier needs them. I record that assessment now so the human, if it comes
to that, can see that what survives is copy-editing rather than disagreement about the matrix.

**Nothing in this review moves a Must row, a count or the ruling.** FR-131 stays **OPEN
(G-PHASE3)**; **Must COMPLETE stays 16 of 138, open Must stays 122**; stories meeting the DoD stay
**17**, now correctly stated against **142**. As the role Accountable for "RTM complete (zero
gaps)" I record again that the **Gate-2 traceability criterion is NOT MET** and that **no merge
sign-off is offered**.

## 6. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 4 of 5 and the verdict is FAIL, not ESCALATED. The next cycle is the
cap; if it fails, this section is where the recorded human decision must be written.
