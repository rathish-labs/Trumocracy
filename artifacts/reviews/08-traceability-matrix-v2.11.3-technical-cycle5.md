# Document Review Report — Doc 08 Traceability Matrix v2.11.3 (technical, cycle 5 — the cap)

> Produced by the **document-review** skill (a shared capability — **not** a ninth agent). One
> report **per review cycle**. The reviewer **scores and lists issues only — it never edits the
> reviewed document**; the document's **owning role** (tester, Ji-woo Park) does every rework.
> Reviewer assigned by `artifacts/status/REVIEW-ASSIGNMENT-2026-09-06-RELEASE-PREP.md`. Cycle 5 of
> 5 — **the cap** — against `artifacts/reviews/08-traceability-matrix-v2.11.2-technical-cycle4.md`
> (FAIL 96%, 0C/0H/1M/1L). Under CLAUDE.md RACI, reviewer-qa is **A** for "RTM complete (zero
> gaps)". Doc 07 v2.8.1 is Approved; this is the only document in the loop.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.11.3
Review mode: technical
Reviewer role: reviewer-qa (neutral — tester Ji-woo Park owns Doc 08)
Score: 98%
Critical: 0
High: 0
Medium: 0
Low: 1
Cycle: 5 of 5
Verdict: PASS
```

Review date: 2026-09-08 · Reviewer: Rafael Duarte (reviewer-qa)

---

## 1. Summary (BLUF)

**Doc 08 v2.11.3 PASSES at the cap.** Both cycle-4 issues are closed, and I verified each by
re-running my own sweeps rather than reading the changelog.

**ISS-01 (the Medium) is closed at the site it was raised.** The §9 tester row's **Decision cell**
now reads "Must 16/138 · **stories 17/142** · both UNCHANGED" — numerator untouched, denominator
corrected — and "both UNCHANGED" is now true on its own terms, since the figure did not move
between v2.11.2 and this version. The false claim is fixed **where it was made**: the v2.11.2
changelog sentence carries an in-place annotation reading "**that claim was not true when
written** — §9's tester row has two cells; v2.11.2 converted the Notes cell and left the Decision
cell". I re-ran the whole-file sweep myself: **`17/134` survives at six sites and every one is
either this version's own description of the defect, the published sweep, the annotated v2.11.2
claim, or a dated historical entry covered by the blanket denominator note — zero live.** That
matches the count the document publishes, which is the second good thing here: **the sweep is
published inside the document**, hit by hit, classified live or historical. A reader no longer has
to take the claim on trust, and a future editor inherits the method rather than the conclusion.

**ISS-02 (the Low) is closed and correctly re-sized.** `TD-RTM-04` and the §6 census disclosure now
read "the residue is **EIGHT story cells**, one per untraced story", enumerating **FR-121, FR-125,
FR-126, FR-127, FR-128, FR-129 and FR-133** in §3.1 and **FR-050** in §3.2, with "sharpest of the
eight: FR-050, because §9 assigns the Product Owner a story gap on it by name". I re-extracted
every one of those story cells mechanically: all eight read "none", exactly as now stated. The
correction records why it matters — the earlier wording "understated a systematic gap as a single
typo" — which is the right lesson to leave for whoever runs the backlog sync.

**Nothing normative moved, and I verified it rather than assuming it.** §6 is untouched apart from
the disclosure text — Stories **142 | 134 | 17 | 125**, FR-Must **114 / 16 / 98**, NFR-Must **24 /
23 / 0 / 24**, Test cases **485 / 230 / 255**; §9's identity still holds (230 + 15 + 233 = 478);
the id diff still returns **142 cited, zero uncited**; the audit derives **138 Must / 16 COMPLETE /
122 OPEN** and agrees with §9. **Zero** transcription residue at the 7 OP boundaries; **17 tables,
zero cell-count mismatches**. **FR-131 stays OPEN (G-PHASE3)** and TC-3575 stays Blocked — neither
was touched by this version, and neither could be by a text patch.

**The single Low is a recurrence, not a new class:** `Last updated: 2026-09-07` while this version
is dated **2026-09-08** in its Status line, its changelog entry and its sign-off row. I raised the
identical defect at cycle 2 (its ISS-03); it was fixed at cycle 3 and has come back with the new
date. It blocks nothing.

**This PASS is about the document, not the product.** The matrix is now an honest instrument — its
pins, its census, its debts and its ruling all say what they can support — but what it honestly
records is a system that is **not** ready for Gate 2: **122 open Must rows**, FR-131 among them.
**No merge sign-off is offered.**

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`98%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS` — both conditions met, so this is a PASS and **not** an ESCALATION. The cap
  was reached but not triggered: escalation is the sanctioned exit *below* the bar, and this
  version is above it.

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 98 | 19.6 | The FR/NFR side is complete and untouched: 138 Must rows, the FR-131 chain intact with clause (e) traced to TC-3570..TC-3575, NFR-023 carrying TC-3576 without closing. The story side now states its population (142), its coverage (134) and its eight named gaps. |
| T2 Soundness | 20 | 99 | 19.8 | Publishing the sweep — every hit classified live or historical — is better practice than the fix it supports, because it hands the next editor a method instead of a conclusion. "Disclosed, not traced" still holds and is still argued correctly, and the version resists the temptation to close anything. |
| T3 Traceability & IDs | 20 | 98 | 19.6 | All 142 `US` ids cited, zero uncited; the eight untraced stories and their eight stale story cells enumerated exactly, and I re-extracted every one to confirm; pins unchanged and still matching live headers; `TD-RTM-01/02/03/04` all correctly scoped and owned. |
| T4 Security & failure modes | 15 | 98 | 14.7 | Unchanged and intact: TC-3575 carries Scenario 9 as a named Blocked case, FR-131's OPEN ruling is untouched, the post-merge suite re-run is still recorded as owed, and the version correctly re-runs no suite because nothing testable changed. |
| T5 Completeness & testability | 15 | 98 | 14.7 | Every figure re-derived and identical to v2.11.2 (§6 142/134/17/125 and 485/230/255; §9 230 + 15 + 233 = 478; Must 138/16/122 by two independent signals). The one live figure that was wrong at cycle 4 is now right, and the sweep that proves it is in the document. |
| T6 Convention compliance | 10 | 94 | 9.4 | Correct **patch** bump (2.11.2 → **2.11.3**), `Status: In Review`, cycle 5 of 5 named **with the cap and its consequence stated in the header**, historical records annotated rather than rewritten, corrections made at the site of the original claim. Docked for **ISS-01** — `Last updated` a day behind the version's own date, a recurrence of the cycle-2 Low. |
| **Total** | **100** | — | **97.8 → 98%** | — |

## 4. Issues (every issue severity-classified and located)

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| ISS-01 | Low | T6 | Header, line **323** — `Last updated:  2026-09-07` | This version is dated **2026-09-08** in its Status line ("In Review — v2.11.3 (2026-09-08)"), in its changelog entry ("v2.11.3 (2026-09-08)") and in the §9 sign-off row's date cell. `Last updated` is the field a reader uses to tell whether a document predates a run or a review it cites, and it is a day behind. **This is a recurrence:** the identical defect was raised at cycle 2 (Doc 08 ISS-03) and fixed at cycle 3, then reappeared with the new date. Nothing substantive rests on it and it blocks nothing. | Set `Last updated: 2026-09-08`. Worth a one-line habit at the top of any future rework spec: the date field moves with the version, in the same operation. |

> **Low** issues do not block the pass bar. This version has **no Critical, High or Medium issue**,
> so the cap is reached without being triggered.

### Cycle-4 issues — closure verified by re-running my own sweeps

| Cycle-4 id | Severity | Status | How I verified it |
|---|---|---|---|
| ISS-01 | Medium | **CLOSED** | The §9 tester row's **Decision cell** now reads "Must 16/138 · **stories 17/142** · both UNCHANGED". I re-ran the whole-file `17/134` sweep: **six hits, zero live** — this version's Status-block and changelog descriptions of the defect, the published sweep, the in-place annotation on the v2.11.2 claim, and one dated historical changelog entry covered by the blanket denominator note. The false claim is corrected **where it was made**, not silently: "that claim was not true when written — §9's tester row has two cells; v2.11.2 converted the Notes cell and left the Decision cell". |
| ISS-02 | Low | **CLOSED** | `TD-RTM-04` and the §6 disclosure now read "the residue is **EIGHT story cells**, one per untraced story", naming FR-121, FR-125, FR-126, FR-127, FR-128, FR-129, FR-133 (§3.1) and FR-050 (§3.2), with FR-050 kept as "sharpest of the eight" for the right reason. **I re-extracted all eight story cells mechanically: every one reads "none"**, exactly as stated. |

### Independent verification performed for this review

| Check | Method | Result |
|---|---|---|
| Denominator sweep | my own whole-file grep for `17/134`, `17/142`, `of 134`, `of 142`, classified hit by hit | **`17/134`: six hits, zero live** — matching the count the document publishes; every live statement of the figure now reads **17 of 142** or **17/142** |
| The eight stale story cells | escape-aware cell extraction from §3.1 and §3.2 for each FR named | FR-121, FR-125, FR-126, FR-127, FR-128, FR-129 = "none"; FR-133 = DES-099 with "none" for its story; FR-050 = "none" — **eight**, as now stated |
| Story population | re-ran the id diff, Doc 05 v2.5.0 against this matrix | **142 cited, zero uncited** — unchanged from v2.11.2 and still closed |
| Nothing normative moved | §6 and §9 recomputed from the file | Stories **142 / 134 / 17 / 125**; FR-Must **114 / 16 / 98**; NFR-Must **24 / 23 / 0 / 24**; Test cases **485 / 230 / 255**; §9 **230 + 15 + 233 = 478** — all identical to v2.11.2 |
| Must-row state, two signals | `node hooks/run_gates.cjs --audit`, then §6 by hand | **138 / 16 / 122** from the row status markers, agreeing with §9; by hand 114/16/98 + 24/23/0/24 = **138 / 16 / 122**; Gate-2 criterion **NOT MET** |
| FR-131 ruling | untouched by this version; premises unchanged since cycle 4 | **OPEN (G-PHASE3)** — the DES-098 acknowledge-to-proceed control, the SCR-13/SCR-14 ballot surfaces and the Scenario 9 instrument still do not exist; **TC-3575 correctly Blocked** |
| Suite | not re-run by the owner, correctly — nothing testable changed | R-19 stands (**625/625**, exit 0), which I reproduced independently at an earlier cycle; the **post-merge re-run is still owed** and still recorded as owed |
| Residue over the 7 OP boundaries | scan for FIND / REPLACE-WITH / four-backtick fences / OP headers / adjacent duplicate lines | **zero** hits |
| Table integrity | escape-aware cell-count and trailing-pipe sweep, all **17** tables | **zero** mismatches, **zero** missing trailing pipes |
| Dating | Status line, changelog entry, sign-off row versus the header field | 2026-09-08 in all three; `Last updated` **2026-09-07** → **ISS-01** |

## 5. Routing instruction (to the owning role)

**PASS → the tester (Ji-woo Park) sets `Status: Approved` on Doc 08 v2.11.3.** The review loop for
both Verify-phase documents is now closed: Doc 07 v2.8.1 Approved at cycle 3, Doc 08 v2.11.3
Approved here at cycle 5. The single **Low** (ISS-01, the `Last updated` date) does not block and
should be folded at the next touch, together with Doc 07's own carried Low.

**What this PASS does and does not mean, stated because the two are easy to conflate.** It means
the RTM is now a **trustworthy instrument**: its pins name the versions it was written against, its
census states its population and its eight gaps, its debts (`TD-RTM-01`…`TD-RTM-04`) are registered
with owners, and its FR-131 ruling is derived from the code rather than from prose. It does **not**
mean the matrix is complete or that the product is ready: **122 Must rows are open**, US-0134 does
not meet the Definition of Done, TC-3575 remains Blocked on an instrument nobody has built, and the
**Gate-2 traceability criterion is NOT MET**. As the role Accountable for "RTM complete (zero
gaps)" I record that plainly here so no downstream reader mistakes an approved document for a
closed matrix. **No merge sign-off is offered at this version.**

**Owed next, and none of it mine:** `TD-RTM-04`'s backlog re-read (tester); the Doc 04 §0.5 S5 scan
that unblocks TC-3575 (engineer) — still the cheapest available strengthening of the FR-131 row;
the post-merge suite re-run (tester, after the merge); `OPEN-27` (architect) and `ENROL-COPY (j)`
(product-owner); and Doc 05 v2.5.0's stale quotation of this dashboard (product-owner).

## 6. Human decision at the cap (ESCALATED only)

**Not applicable — and deliberately so.** Cycle 5 is the cap, but the cap triggers escalation only
when a version still **fails** the bar. This version clears it (98%, zero Critical/High/Medium), so
the verdict is **PASS**, no human decision is required, and none is recorded here. Had it failed I
would have written `Verdict: ESCALATED` with the surviving issues listed exactly as found, for the
approver's recorded decision; that was not needed.
