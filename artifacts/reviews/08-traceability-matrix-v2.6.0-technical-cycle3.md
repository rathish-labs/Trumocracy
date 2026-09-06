# Document Review — Doc 08 Traceability Matrix v2.6.0 (technical, cycle 3)

> Produced by the **document-review** skill (a shared capability — not a ninth agent). The reviewer
> **scores and lists issues only — it never edits the reviewed document**. Doc 08 is owned by the
> **tester** (Ji-woo Park); this review was run by the **architect** as a neutral, non-owning role.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.6.0
Review mode: technical
Reviewer role: architect
Score: 86%
Critical: 0
High: 1
Medium: 3
Low: 12
Cycle: 3 of 5
Verdict: FAIL
```

> **Independence disclosure.** ISS-02, ISS-03 and ISS-04 turn on the content of Doc 03, which the
> architect owns. All three are stated as *Doc 08 is internally inconsistent, or out of sync with the
> source it pins* and are evidenced by quoting Doc 03's own text and changelog and by quoting Doc 08
> against itself — not by reviewer assertion. **ISS-01 removes an item from the architect's own
> sign-off cell**, i.e. it reduces the architect's assigned workload; it is raised anyway because the
> item belongs to the tester and the engineering lead by name. The PM should weigh both facts when
> routing. No other finding touches an architect-owned artifact.

---

## 1. Summary (BLUF)

**v2.6.0 fixes both Highs, and it fixes them properly — I re-derived every replacement figure from
this matrix's own tables and from Doc 07 and each one is now exactly right.** It also fixes two of
the four Mediums, records Q16 against FR-090 correctly and for the right reasons, and takes the
minor bump the loop requires. This is the strongest rework in the sequence. It still **FAILS**,
because the fix to the fourth Medium was applied **in one location out of three** — leaving the
document now **asserting and denying the same normative rule in three places** — and because the
corrections again minted a new ownership defect in the sign-off register.

**What is genuinely fixed, verified at the cited location.** **ISS-01 (the G-TRACE count):** §7
entries 68 and 69 are now on separate physical lines (855, 856), and §9's reviewer-qa cell (979)
reads **34** with a full enumeration. **I recounted the live G-TRACE Must rows from §7 myself —
NFR-007 (823) + FR-074/075/076 (852–854) + FR-078 (856) + FR-081 (860) + FR-087/088/089 (866–868) +
FR-093..FR-111 (873–891, 19 rows) + FR-121 (908) + FR-125..FR-129 (909–913) = 34** — and the §9
enumeration matches my recount **name for name, with no name in either list absent from the other**.
The correction note no longer claims FR-078 is closed; it states plainly that FR-078 **is not**
closed and names the concatenated line as the mechanical cause. **ISS-02 (the evidence figures):**
§9 (961) now reads **217 with passing evidence + 16 automated-but-unexecuted + 232 cannot execute =
465**, and every term checks against Doc 07 v2.4.4 — §2/§10 give 465 designed, **233** with an
implementing automated test and **232** Blocked-or-no-mechanism; §2 (442–445) records **16 `apps/web`
cases that exist but were not executed**, so 233 − 16 = **217**, which is exactly §6's figure.
217 + 16 + 232 = 465 ✓, and 217 = 88 obs. + 129 inh. ✓. The optimistic drift is gone and the number
now understates rather than flatters. **ISS-05/ISS-06 (the two carried cells):** the gate verdict row
reads **16 / 138** (959) and the Principal Architect cell has retired "the 15 missing DES links" with
a struck-through correction (980). **Q16** is recorded against FR-090 (563) as a forward revisit flag
that keeps the row **✅ COMPLETE**, states in terms that it is not a gap, and cites **TC-3548/TC-3549**
— which I checked in Doc 07 and which are precisely the "one decision window" and capability-absence
cases whose meaning a resolution rule could move. That is the right flag on the right cases.
**Every authoritative count held:** Must **138** · COMPLETE **16** · OPEN **122** · **11.6%**,
confirmed by a mechanical recount of the ✅ rows in §3.1 (16) and of the live §7 entries (122).

**Why it still fails.** **ISS-02 (High)** — cycle-2 ISS-05 required the derivation-rule language be
re-scoped from "v2 seam only" to "binds the ballot layer in **both** versions", in **three** places.
It was done in **one**: §8's row (949) now states the both-versions rule correctly and cites Doc 03
v2.11.0 by name. The other two survive verbatim — §3.1's FR-091 row (565) still says "*a normative
seam rule is recorded **for v2**: **the chain** becomes the sole authority on ballot state … a
**v2-seam obligation, not a v1 test obligation***", and §7 entry 82 (871) still says "*a **v2-seam**
derivation obligation … a build obligation **at the v2 swap, not a v1 gap***". So one document now
carries the same normative MUST at two incompatible scopes, **and the changelog states "All three
instances corrected"** (49–50), which tells the next reader not to check. Before this rework the
three were uniformly wrong; they are now mutually contradictory, and the wrong two are the two an
implementer reads. **ISS-01 (Medium)** — the Principal Architect cell, repaired in this pass, now
assigns the architect "**Doc 03 §16 Q17**". Doc 03 §16 Q17's named owners are **Ji-woo Park (tester)
+ Samuel Oyelaran (Engineering Lead)** (Doc 03 line 2836) — the first of them is this document's own
author. This is the third consecutive cycle in which a correction to the sign-off register has
misassigned an owner. **ISS-03/ISS-04 (Medium)** — entry 82 still states "*it terminates at
`DECISION`*" as fact where the pinned SDD records it as "*a design intention, not a property of the
built code*"; and the SDD pin is stale at **v2.11.0** while Doc 03 is at **v2.11.1** — a version whose
§15 sub-table *stopped contradicting this matrix on FR-107*, and which mints a new DES-096 item.

**Verdict: FAIL.** Route to the tester for **v2.7.0** (minor bump). **No finding here implies a
status change or a count change.**

## 2. Pass-bar check

- Score ≥ 95%? **no** (`86%`)
- Critical = 0? **yes** · High = 0? **no** (1) · Medium = 0? **no** (3)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **T1** Requirement coverage | 20 | 90 | 18.0 | Every Must FR/NFR and every RISK still carries a row. **Q16 is now recorded** — the cycle-2 omission is closed, and closed the right way (flag, not gap). FR-107 independently confirmed correct against Doc 03 v2.11.1, which now defers to this matrix. Deductions: Doc 03 v2.11.1's new DES-096 "no ballot-state accessor" item names FR-131's DES and is unrecorded; §8's forward-impact set still omits FR-130, FR-131 and the window-resolution trigger. |
| **T2** Soundness | 20 | 85 | 17.0 | Every adjudication re-derived and correct; the 217/16/232 = 465 decomposition is exactly right and now understates rather than flatters; the Q16 reasoning and its TC-3548/TC-3549 anchoring are both sound. Deductions: §3.1 and §7 state a normative rule at a scope the pinned SDD explicitly corrected, contradicting §8 of the same document (ISS-02); "terminates at `DECISION`" stated as built behaviour (ISS-03). |
| **T3** Traceability & IDs | 20 | 82 | 16.4 | **Both count Highs are genuinely gone** — 34 verified name-for-name from a repaired §7, 16/138 verified four ways. Deductions: Q17 misassigned in the ownership register (ISS-01); the 34-row set is characterised as "chains broken for want of a `DES`", which is untrue of NFR-007; the UT-0834/UT-0090 citation Lows are on their third cycle; §7 entries 125/126 are still one physical line. |
| **T4** Security & failure modes | 15 | 95 | 14.25 | §5 risk→control→test intact; §7.1's "four gaps that will not close by building harder" intact; every gate-row verdict stays **FAIL** and the Gate-2 paragraph still refuses a false green light. **Improved on cycle 2:** the evidence figures no longer drift optimistic — the correction was made in the conservative direction and reconciles to §6. |
| **T5** Completeness & testability | 15 | 85 | 12.75 | Q16 recorded; §10 TD-RTM-01 intact and correctly routed; §9's evidence row is now fully decomposed and sums. Deductions: §4 still reports a clean ID sweep with no pointer to §10; three §8 additions required across two cycles are still absent and unrecorded as deferred; the v2.11.1 delta is unswept. |
| **T6** Convention compliance | 10 | 78 | 7.8 | **The minor bump was taken** — a real fix, and the changelog is far more informative than v2.5.4's. Deductions: the changelog asserts a fix was made in three places when it was made in one; required fixes are again dropped without being recorded as deferred; the §3.1/§3.2 table fractures and the 125/126 concatenation persist; pins are stale (SDD) and their `In Review` status is still unannotated; "REVIST" typo. |
| **Total** | **100** | — | **86%** | — |

---

## 4. Verification performed (against the eight items in the review brief)

### (1) ISS-01 — the G-TRACE count. **FIXED, and correct in every particular.**

**The line break is fixed.** §7 line 855 is entry 68 (FR-077) and line 856 is entry 69 (FR-078),
each rendering as its own row. **I recounted from §7 rather than accepting the figure:**

| Source | Enumeration | Count |
|---|---|---|
| **My recount from §7 gap-log rows** | NFR-007 (823) · FR-074, FR-075, FR-076 (852–854) · **FR-078 (856)** · FR-081 (860) · FR-087, FR-088, FR-089 (866–868) · FR-093..FR-111 (873–891, 19 rows) · FR-121 (908) · FR-125..FR-129 (909–913) | **34** |
| **§9 reviewer-qa cell (979)** | NFR-007, FR-074, FR-075, FR-076, **FR-078**, FR-081, FR-087, FR-088, FR-089, FR-093..FR-111, FR-121, FR-125..FR-129 | **34** |
| **SUMMARY by-reason table (412)** | 1 NFR-007 + 33 FRs, same names | **34** |

**The enumeration matches my recount exactly, name for name — no name in either list is absent from
the other**, and 1 + 3 + 1 + 1 + 3 + 19 + 1 + 5 = 34 ✓. Entries 68 (FR-077), 82 (FR-091) and 83
(FR-092) are correctly excluded — all three are **G-NOMECH** with their chain gaps closed (855, 871,
872), and entries 81 (FR-090) and 125 (FR-130) are struck through as retired. The correction note no
longer says FR-078 is closed; it says the opposite, cites §3.1 and entry 69, and names the
concatenated line as the cause. The SUMMARY reconciliation still depends on 34 and still closes:
47+13+9+5+6+4+5+34 = 123 against 122 distinct ✓.

**A cross-check that the register itself is sound:** a row-wise scan of §7 returns **121** gap-log
rows plus **4** struck-through retired rows. 121 + the one row still hidden by a concatenation
(entry 126, on line 914) = **122**, matching §7's heading and every other authoritative location.
The count is right; the rendering hazard that produced the cycle-2 High survives in one place — see
ISS-06.

### (2) ISS-02 — the evidence figures. **FIXED, and every figure verified against Doc 07 v2.4.4.**

§9 (961) now reads: "**217 of 465 carry passing evidence**; **16** have an implementing automated
test that was **not executed** this session; **232 cannot execute** at all. 217 + 16 + 232 = 465."

| Figure | Doc 07 v2.4.4 source | Result |
|---|---|---|
| 465 designed (row anchors) | §2 suite table footer (440) and §10 | ✅ |
| 233 with an implementing automated test | §2 (440, 442) — "233 of 465 cases have an implementing automated test" | ✅ (correctly **not** relabelled as evidence) |
| **16** automated but unexecuted | §2 (444–445) — "**16** are `apps/web` component cases that exist but were not executed this session" | ✅ |
| **217** with passing evidence | 233 − 16 = 217; cross-checks to Doc 08 §6 (748) "217 with passing evidence (129 inh. · 88 obs.)"; 88 + 129 = 217 ✅ | ✅ **the two documents now agree** |
| **232** cannot execute | §2 (440) Blocked-or-no-mechanism column total | ✅ |
| The sum | 217 + 16 + 232 = **465** | ✅ |

The mislabel is gone, the flattering direction is gone, and the figure now reconciles to §6 rather
than contradicting it. **This is the correction done properly:** re-derived from the matrix and
labelled with what it actually is. One residual only — §9 uses the 465 anchor denominator while §6
uses the 472 expanded one, so §9's "232 cannot execute" still reads 23 below §6's "255 not executed
or not executable" with no bridge in the document. The two *do* reconcile (232 + 16 + the 7-row
convention difference recorded in Doc 07 §2 line 449 = 255), and I verified it, but the reader has to
do that themselves → **ISS-16 (Low)**.

### (3) ISS-05 / ISS-06 — the two carried cells. **Both FIXED. One of the two fixes introduced a new defect.**

**§9 verdict row (959): `16 / 138`.** ✅ Correct. Confirmed against four independent locations — the
SUMMARY (395), §6 (742), the §3.1 subtotal (611) and a mechanical count of `✅` rows in §3.1, which
returns exactly **16** (lines 487, 489, 491, 492, 493, 495, 497, 498, 499, 500, 505, 514, 550, 552,
563, 606, of which 514 is FR-051's conditional completion). Verdict correctly stays **FAIL**.

**§9 Principal Architect cell (980): the 15 DES links are retired.** ✅ The clause is struck through
and replaced with "**Those 15 closed at Doc 03 v1.1.0 (DES-064..DES-086); see the `G-TRACE` legend
row in §3**", which is consistent with the legend (412) and with the chain-integrity findings
(419–420). OPEN-02/03/11 correctly retained.

**But the replacement outstanding set is wrong on two counts.** The cell now says the architect
"*Now owns the **34 live `G-TRACE` rows** … chains still broken for want of a `DES` … plus
OPEN-02/03/11, and Doc 03 §16 **Q17***".

- **Q17 is not the architect's.** Doc 03 §16 Q17 (line 2836) names its owners as "**Ji-woo Park
  (tester) + Samuel Oyelaran (Engineering Lead)**", and Doc 03 §10.13.13(a) (2458) calls closing it
  "an **engineer/tester obligation** recorded in §16 Q17". Doc 03 v2.11.1's changelog records fixing
  exactly this: v2.11.0 "left Q17's owner as an unnamed '**engineer**'" — so under **either** the
  pinned version or the current one, Q17 is not the Principal Architect's. → **ISS-01 (Medium)**.
- **The 34-row characterisation over-reaches by one row.** "Chains still broken for want of a `DES`"
  is true of the 33 FRs and **untrue of NFR-007**, which *has* DES-051 (§3.2 line 623); its G-TRACE
  aspect is "**no story and no backlog item**" — a backlog gap, owner Chen Wei per §7 entry 37, not a
  design gap. → **ISS-14 (Low)**.

### (4) ISS-03 / ISS-04 — the SDD delta sweep. **§8 is fixed and is now the best statement of the rule in the document. The other two places were not swept, and the changelog says they were.**

I swept the whole document for the superseded framing rather than checking the three named
locations. Results:

| Location | Text at v2.6.0 | Verdict |
|---|---|---|
| **§8 row (949)** | "Doc 03 **v2.11.0** §10.13.13(a) makes this normative: **the ballot layer is the sole authority on ballot state in BOTH versions** — the DES-096 database backing in v1, `Governor.State` at the v2 seam … It is a **build obligation, not a v1 test obligation today**, because the layer built so far derives nothing", with the mis-citation explained | ✅ **FIXED, and correct.** Matches Doc 03 lines 2502–2534 clause for clause. The `discussion` name-collision caveat it adds is also genuine (Doc 03 2465, 2473) |
| **§3.1 FR-091 row (565)** | "A normative seam rule is recorded **for v2**: **the chain** becomes the sole authority on ballot state and the `VOTE`/`DECISION`/`IMPLEMENTATION` stages MUST derive from it … — **a v2-seam obligation, not a v1 test obligation**" | ❌ **UNSWEPT** — the exact scope Doc 03 v2.11.0 corrected |
| **§7 entry 82 (871)** | "A **v2-seam** derivation obligation is recorded in Doc 03 (chain owns ballot state) — **a build obligation at the v2 swap, not a v1 gap**" | ❌ **UNSWEPT** |

What **was** changed in the two unswept places is the *other* phrase: "v1 holds no vote" became "the
proposals layer holds no vote" (565, 871). That correction is right and I verified it against Doc 03
§16 Q15 (2834), which uses the same narrow form. But the **scope of the derivation rule** is a
separate claim, and it was the one cycle-2 ISS-05 named in its required fix ("*the rule binds the
ballot layer in **both** versions*"). The changelog (49–50) states "**All three instances corrected**
to the narrow true claim", conflating the two. → **ISS-02 (High)**.

**"Terminates at `DECISION`" was not marked.** Entry 82 (871) still reads "*FR-091's text does not say
what becomes of a DEFEATED or CANCELLED decision (**it terminates at `DECISION`**; terminating is not
skipping)*". Doc 03 (pinned v2.11.0, unchanged at v2.11.1) carries a warning box on exactly this
phrase: "*⚠ **"Terminates at `DECISION`" is a design intention, not a property of the built code.**
`advanceStage(windowId)` consults no outcome and **would advance a defeated window** straight on to
`IMPLEMENTATION`*" (2548–2554). §8's row states it correctly ("FR-091's text does not **yet say**
that a … window terminates at `DECISION`"), so the document knows the right form. Required at cycle
2; not done; not recorded as deferred. → **ISS-03 (Medium)**.

**Doc 03 has moved to v2.11.1 — the pin needs advancing, and one v2.11.1 change matters.**

| v2.11.1 change | Bears on this matrix? |
|---|---|
| **FR-107 is NOT assigned to DES-106** (§15, 2814) | **Yes — favourably, and it argues for advancing the pin.** v2.11.0's §15 sub-table mapped FR-107 → DES-106 and marked it "OPEN (G-NOMECH)", which **contradicts this matrix's FR-107 row** (§3.1 line 583: DES = none, `G-TRACE + G-PHASE3`; §7 entry 98). v2.11.1 removes the claim and defers to Doc 08 by name: "**Doc 08 correctly records FR-107 as `G-TRACE` with DES = none**". **Doc 08's row is right and needs no change** — but as pinned, Doc 08 points at a version that disagrees with it on a Must row's chain link, and records nothing about it |
| **DES-096 lacks a ballot-state accessor** (2515–2523, added v2.11.1) | **Yes — a new unrecorded forward item.** "DES-096 **MUST gain a state accessor before the v1 ballot layer is built**", otherwise the derivation rule is unsatisfiable. DES-096 is **FR-131's** DES (§3.1 line 607). **No status changes** — FR-131 is already `☐ G-PHASE3` — but this is the same class of item as Q15/Q16 (an owed design change naming a Must row before the ballot layer), and it strengthens the case for adding FR-131 to §8's seam row |
| **A third representation, `PROPOSAL_STATE_ENUM`** (v2.11.1 ISS-03) | **Only through §9.** No row status turns on it. But §9's new cell describes Q17 as covering "**the three** ballot-state representations" — which is **v2.11.1** content; at the pinned v2.11.0, Q17 named two enums. The cell therefore cites content ahead of its own pin |

→ **ISS-04 (Medium).** **No row status and no count moves** on any of it, and the delta runs in this
matrix's favour.

### (5) The Q16 revisit flag. **Correctly placed, correctly scoped, and anchored on the right test cases.**

The flag (563) is added inside the FR-090 row, after the discharged 2026-08-30 flag, and the status
cell remains **✅ COMPLETE**. Checked against the three questions the brief asks:

- **Does it avoid implying FR-090 is incomplete?** **Yes, explicitly.** "**This row stays ✅ COMPLETE
  and that is the correct call** — Q16 concerns *post-vote window resolution*, which FR-090's stated
  guarantee … does not require, and which this layer does not hold; **all four completion rules still
  close**." That is the right adjudication and it matches my own independent re-derivation at cycle
  2, and it matches both upstream sources (Doc 03 §16 Q16, 2835: "*not a v1 defect*"; Doc 02 §13 (i)).
- **Does it forbid answering Q16 with a window-closing capability?** **Yes — and the substance is
  right, but it overstates its own authority.** Doc 08 writes "**The answer MUST NOT be a
  window-closing capability**". Doc 03's own wording is narrower: that absence "*is a first-class
  anti-capture control and **MUST NOT be quietly removed** to answer this*". Per CLAUDE.md RACI the
  Q16 answer is a **requirement decision** the product-owner is **A** for (Doc 03 names PO +
  architect as owners); the tester records the consequence, it does not bind the decision. The
  correct RTM form is the consequential one, which the flag already has one sentence earlier: *if the
  answer introduces such a capability, this row's closure no longer holds and MUST be re-derived.*
  → **ISS-15 (Low)**.
- **Is it in the FR-051/FR-130 pattern?** **Nearly.** Both of those fire on an **event** ("when the
  `treasury` flag ships", "when on-chain membership goes live"). FR-090's fires on a **judgement**
  ("*if the resolution rule that answers Q16 **alters what "the same decision window" guarantees***"),
  which lets a future reader decide the trigger did not fire. Doc 03 says Q16 **MUST be answered
  before the ballot layer is built** — an event. → **ISS-15 (Low)**.

**The TC anchoring is right and I checked it.** The flag names **TC-3548/TC-3549**; Doc 07 v2.4.4
records TC-3548 as "*FR-090 competing proposals joining **ONE decision window** incl.
differently-phrased grouping*" and TC-3549 as "*the capability-absence set — first author holds no
power, `isOriginal` is provenance only*" (Doc 07 lines 114–117). Those are exactly the two cases a
window-resolution rule would move. (v2.5.3's discharged flag named TC-3545, the authoring-gate case —
the right case for *that* question and the wrong one for this. Changing the citation was correct.)

**One half of the cycle-2 required fix was not done:** the §8 trigger ("*the ballot layer /
window-resolution rule being specified → FR-090, FR-091, FR-092, FR-131*") is absent, and the
changelog does not record it as deferred. → **ISS-08 (Low)**.

### (6) The ten cycle-2 Lows — **one fixed, one half-fixed, eight carried. Carried Lows are permitted by the pass bar; they are listed so the permission is explicit.**

| Cycle-2 Low | Status at v2.6.0 |
|---|---|
| **ISS-14** version bump | ✅ **FIXED** — v2.6.0 is a minor bump, as the loop requires |
| **ISS-08** formatting | ◐ **HALF-FIXED** — §7 entries 68/69 are split (the instance that caused the High). **Entries 125/126 are still one physical line (914)**, and the blank lines still fracture the §3.1/§3.2 tables (496, 521, 551, 553, 564, 566, 568, 639). Same defect, one location short → **ISS-06** |
| **ISS-07** §6 TC-note duplicated clause | ❌ **CARRIED — fourth cycle.** Line 751 still ends "…all **20** TS-PROPOSALS cases carry passing evidence … — **unchanged**, because all **24** new cases carry passing evidence and none is Blocked", with 22 stated twice in the same sentence → **ISS-05** |
| **ISS-09** UT-0834 / UT-0090 citations | ❌ **CARRIED — third cycle.** FR-090 (563) still attributes "not a verification gate" to UT-0089/UT-0832; FR-091 (565) still cites "(UT-0091, UT-0092)" for the no-op/unknown-stage assertions → **ISS-07** |
| **ISS-10** §8 omits FR-130 | ❌ **CARRIED**, and FR-131 was not added either, though the scoping it was conditional on is now corrected in §8 → **ISS-08** |
| **ISS-11** §8 row 950 citation precision | ❌ **CARRIED** — ratification date and the FR-024/FR-090 vs FR-123 naming unchanged → **ISS-09** |
| **ISS-12** 610/610 uncited | ❌ **CARRIED** (961) → **ISS-10** |
| **ISS-13** In-Review pins + changelog completeness | ❌ **CARRIED**, and recurs in a new form: the changelog now *claims* a fix it made in one of three places → **ISS-11** |
| **ISS-15** entry-82 owner / §10 merge phrasing | ❌ **CARRIED** (871, 994) → **ISS-12** |
| **ISS-16** §4 has no pointer to §10 | ❌ **CARRIED** (704–711) → **ISS-13** |

### (7) Did the rework introduce anything NEW that is wrong? — **Yes: ISS-01 and ISS-02, and once again both were made BY the corrections.**

This is now the pattern of three consecutive cycles, and it is worth naming plainly: **v2.5.3's
corrections minted a High, v2.5.4's corrections minted two Highs, and v2.6.0's corrections minted one
High and one Medium.** The new defects are, again, in **§9 and the sweep** — the two places the
rework touched:

- **§9's new Principal Architect cell** correctly retires a nine-version-old error and then assigns
  the architect an item owned by the tester and the Engineering Lead (ISS-01), describing it in terms
  that exist only in a Doc 03 version this document does not pin.
- **The partial sweep** turned a uniform inaccuracy into an internal contradiction (ISS-02) — the
  strictly worse state, because a uniform error is visible to one sweep and a contradiction requires
  the reader to know which of the two statements is the corrected one. The changelog closes that door
  by asserting the sweep was complete.

**The new §8 row (949) is clean** — I checked every clause of it against Doc 03 §10.13.13(a) and
found no error. **The new FR-090 flag is substantively right** — the adjudication, the "not a gap"
scoping, and the TC anchoring all hold; only its trigger form and its MUST NOT are imprecise (Low).
**The new §9 evidence decomposition is exactly right** and is the model for how a corrected number
should be produced.

### (8) No status changed; no authoritative count moved; the bump is a minor. **All three CONFIRMED.**

| Location | Figures | Result |
|---|---|---|
| Header `Version:` (5) | **2.6.0**, `Status: In Review` | ✅ minor bump — cycle-2 ISS-14 discharged |
| SUMMARY table (393–399) | 161 (138 Must + 23) · Must **138** · COMPLETE **16** · OPEN **122** · **11.6%** · non-Must 4/19 · total 20/141 | ✅ 138+23=161; 16+4=20; 122+19=141 |
| Must-row gaps by reason (405–413) | 47+13+9+5+6+4+5+**34** = **123** vs 122 distinct (NFR-007 compound) | ✅ |
| Gate-2 verdict (427–430) | "16 close and 122 do not — 11.6%" | ✅ |
| §3.1 subtotal (611) · §3.2 subtotal (643) · non-Must (673) | 114 · 16 · 98 / 24 · 0 · 24 / 23 · 4 · 19 | ✅ |
| §6 dashboard (742–748) | FR-Must 114/16/98 · NFR-Must 24/0/24 · Stories 134/17/117 · TC 472/217/255 | ✅ |
| §7 heading (769) · §9 open-Must (960) · Gate rule (998) | 122 | ✅ |
| §3.1 `✅` row count (mechanical) | **16** | ✅ |
| §7 live gap-log entries (mechanical) | 121 rendered + 1 concatenated = **122** | ✅ |

**No row status changed.** FR-079/FR-080/FR-090/FR-130/FR-051 remain COMPLETE; FR-091/FR-092 remain
OPEN (G-NOMECH) on unchanged grounds; FR-077 remains G-NOMECH; FR-078 remains `☐ G-TRACE +
G-PHASE3`; no `✅`/`☐` marker moved anywhere in §3.1 or §3.2. **§10 TD-RTM-01 is unchanged** and its
three judgement calls still stand as I verified them at cycle 2.

---

## 5. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-01** | Medium | T3 / T1 | **§9 sign-off, Principal Architect row, line 980** | The cell — repaired in this pass, correctly, to retire "the 15 missing `DES` links" — now assigns the Principal Architect "**Doc 03 §16 Q17** (no differential test pins the three ballot-state representations to one another)". **Q17 is not the architect's item.** Doc 03 §16 Q17 (line 2836) names its owners as "**Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead)**", and Doc 03 §10.13.13(a) (2458) calls closing it "an **engineer/tester obligation** recorded in §16 Q17". Under the **pinned** v2.11.0 it was also not the architect's — Doc 03 v2.11.1's changelog records that v2.11.0 "left Q17's owner as an unnamed '**engineer**'". So the sign-off register, which is where this document **assigns Accountable owners**, points an architect at an item whose first-named owner is **this document's own author**. This is the third consecutive cycle in which a correction to this block has misassigned an owner (cycle-1 ISS-H: the architect assigned a discharged reconciliation; cycle-2 ISS-04: the architect assigned a debt closed at v1.1.0). **Separately, the cell's description of Q17 is ahead of its own pin:** "the **three** ballot-state representations" is Doc 03 **v2.11.1** content — `PROPOSAL_STATE_ENUM` was identified as the third representation at the v2.11.0 cycle-2 review and added at v2.11.1; at v2.11.0 Q17 named two enums. | Remove **Q17** from the Principal Architect row. If the tester wants Q17 visible in §9 — which is reasonable, since it names a differential-test debt — record it in the **tester's own** row (or a new engineer row) with its Doc 03 owners named: **Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead)**, "before the v2 seam swap". If the "three representations" description is kept, advance the SDD pin to **v2.11.1** first (see ISS-04). |
| **ISS-02** | **High** | T2 / T1 / T6 | **§3.1 FR-091 row, line 565; §7 entry 82, line 871 — against §8 row, line 949; changelog lines 43–50** | Cycle-2 ISS-05 required the derivation-rule language be re-scoped in **three** places from "v2 seam only" to "**binds the ballot layer in both versions**". It was done in **one**. §8 (949) now states it correctly: "*Doc 03 **v2.11.0** §10.13.13(a) makes this normative: **the ballot layer is the sole authority on ballot state in BOTH versions** — the DES-096 database backing in v1, `Governor.State` at the v2 seam*". The other two still publish the superseded scope verbatim: §3.1 FR-091 — "*A normative seam rule is recorded **for v2**: **the chain** becomes the sole authority on ballot state … — **a v2-seam obligation, not a v1 test obligation***"; §7 entry 82 — "*A **v2-seam** derivation obligation … a build obligation **at the v2 swap, not a v1 gap***". **The document therefore now asserts and denies the same normative MUST**, which is the defect class that made cycle-1's ISS-H a High — and it is **worse than the state it replaced**, because before this rework all three were uniformly wrong and one sweep would have found them, whereas a contradiction requires the reader to know which statement is the corrected one. The **changelog (49–50) states "All three instances corrected to the narrow true claim"**, which tells the next reader and the PM not to re-check; what was actually corrected in those two places is the *different* phrase "v1 holds no vote" → "the proposals layer holds no vote" (that correction is right, and I verified it against Doc 03 §16 Q15). The misdirection is actionable: Doc 03 records that the v2-only scope "*left the drift failure mode unbound at exactly the point where v1 first holds a vote*", and v2.11.1 adds that **DES-096 must gain a state accessor before the v1 ballot layer is built** — an implementer reading §3.1 or §7 concludes none of that binds v1. | Re-scope **both** surviving places to §8's wording, which is already correct in this document: the rule binds the ballot layer in **both** versions — authority is whatever backing `IBallotService` is bound to (v1 **DES-096 database**, v2 `Governor.State`) — and the true narrow v1 claim is that **the layer built in this drop derives nothing because it holds no vote**. It is a **build obligation, not a v1 test obligation today**. Correct the changelog to say the fix reached §8 only at v2.6.0, so the record of what was and was not swept is accurate. |
| **ISS-03** | Medium | T2 / T5 | **§7 entry 82, line 871** | Entry 82 still states an unbuilt design intention as fact: "*FR-091's text does not say what becomes of a DEFEATED or CANCELLED decision (**it terminates at `DECISION`**; terminating is not skipping)*". The pinned SDD contradicts this in a dedicated warning box (Doc 03 2548–2554): "*⚠ **"Terminates at `DECISION`" is a design intention, not a property of the built code.** `advanceStage(windowId)` consults no outcome and **would advance a defeated window** straight on to `IMPLEMENTATION`. Nothing today prevents it*". Marking this was an explicit cycle-2 required fix; it was not done and was not recorded as deferred. It matters here more than it would elsewhere: **§7 is the register of what is and is not built**, this document says of itself that "a design is not an implementation" (FR-077 row, entry 68) and applies that principle rigorously everywhere else, and §8's own row already uses the correct form ("*FR-091's text does not **yet say** that a … window terminates at `DECISION`*"). **No status turns on it** — the layer holds no vote, so nothing can reach a defeated state today. | Add the caveat to entry 82: the termination is **a design intention, not built behaviour** — `advanceStage()` consults no outcome and would advance a defeated window — **not yet a live defect** because this layer holds no vote, but it must be built together with the ballot layer (Doc 03 §10.13.13(a)). |
| **ISS-04** | Medium | T1 / T6 | **Header `Source:` line 9; §9 line 980; §3.1 FR-131 row line 607** | **The SDD pin is stale: this document pins `SDD-TRUMOCRACY v2.11.0`; `docs/03-architecture-design-sdd.md` is at **v2.11.1** (2026-08-30).** The tester evidently read v2.11.1 — §9's new cell cites "**the three** ballot-state representations", which exists only there (ISS-01) — so the document cites one version and pins another. The delta is small, favourable, and worth recording rather than skipping: **(i) FR-107.** v2.11.0's §15 sub-table mapped **FR-107 → DES-106** and marked its row "OPEN (G-NOMECH)", **contradicting this matrix** (§3.1 line 583 and §7 entry 98 both record DES = **none**, `G-TRACE`). v2.11.1 withdrew the claim and now defers to this matrix by name: "*Do not read this as a DES assignment … **Doc 08 correctly records FR-107 as `G-TRACE` with DES = none***". **Doc 08's row is right and must not change** — but as pinned, this matrix points at a version that disagrees with it about a Must row's chain link. Advancing the pin removes the contradiction. **(ii) A new forward item, unrecorded.** v2.11.1 adds (2515–2523): "*The v1 half of this rule has nothing to derive FROM yet … **DES-096 MUST gain a state accessor before the v1 ballot layer is built***". **DES-096 is FR-131's DES.** No status changes — FR-131 is already `☐ G-PHASE3` — but this is the same class as Q15/Q16 (an owed design change naming a Must row before the ballot layer) and this matrix now records those. **(iii)** The third ballot-state representation `PROPOSAL_STATE_ENUM` and Q17's ordinal-indexing hazard bear on §8's seam row and on §9 only. **No row status and no count moves on any of it.** | Advance the pin to **SDD-TRUMOCRACY v2.11.1** and record the delta in the changelog with a one-line statement of what it bears on: FR-107 **confirmed unchanged** (Doc 03 now agrees with this matrix), the DES-096 state-accessor item recorded against **FR-131** as a forward note (not a gap; the row is already OPEN), and Q17's scope now covering three representations. Apply this matrix's own v2.5.2 convention — read the delta against every row decided, and state the result. |
| **ISS-05** | Low | T3 | **§6 TC-count convention note, line 751** | **Fourth cycle** (cycle-1 ISS-09(iii), cycle-2 ISS-07). Every sum in the note now checks — I re-verified 463 = 299+70+19+29+24+22, 463−1+10 = 472, 217 = 129+88, and 129 = 55+28+22+24 — but the paragraph still ends with two conflicting trailing clauses: "…because all **20** TS-PROPOSALS cases carry passing evidence and none is Blocked (TC-3541 is No mechanism…) — **unchanged**, because all **24** new cases carry passing evidence and none is Blocked." TS-PROPOSALS is **22** twice in the same sentence. Also "22 TS-PROPOSALS (Doc 06 **v2.4.2**)" — 20 came from Doc 06 v2.4.1, TC-3562/TC-3563 from v2.4.2. Stays **Low**: the dashboard is authoritative and correct. | Delete the duplicated trailing clause; state "all **22** TS-PROPOSALS cases carry passing evidence and none is Blocked (TC-3541 is No mechanism and adds to the gap bucket)". Attribute "20 from Doc 06 v2.4.1 + TC-3562/TC-3563 from v2.4.2". |
| **ISS-06** | Low | T6 | **§7 line 914 (entries 125/126); §3.1 blank lines 496, 521, 551, 553, 564, 566, 568; §3.2 line 639** | **Half-fixed, and the surviving half is the same defect that caused the cycle-2 High.** Entries 68/69 are correctly split (855/856) — that was the load-bearing instance and fixing it was right. But **entries 125 and 126 are still two records on one physical line (914)**, so entry 126 (FR-133, G-PHASE3) is invisible to any row-wise scan of §7: a mechanical scan returns **121** live rows where there are **122**. No number is wrong today — I verified 121 + 1 hidden = 122 and the G-PHASE3 47 is derived from §3.1, not §7 — but this is precisely the latent condition that produced ISS-01 last cycle, now sitting under the largest gap class. The blank lines inside the §3.1/§3.2 tables also still fracture them into fragments that render without a header row, and they still sit around the FR-024/FR-079/FR-080/FR-090/FR-091/FR-092 rows this loop keeps editing. | Split line 914 so entries 125 and 126 each render as a row, and remove the blank lines inside the §3.1/§3.2 tables. Then re-run a row-wise scan of §7 and confirm it returns 122. |
| **ISS-07** | Low | T3 | **§3.1 FR-090 (563), FR-091 (565)** | **Third cycle** (cycle-1 ISS-11, cycle-2 ISS-09), unfixed and unmentioned in the changelog. (i) FR-090: "…is self-declared with no approver, and **is not a verification gate**" is still attributed to `UT-0089`/`UT-0832`; the test that asserts it is **`UT-0834`** (`packages/sdk/test/proposals.test.js` — `verifyEligibility` not called, `service._verifier` undefined, `fileProposal` takes no verifier), and the 2026-08-30 decision record cites UT-0834 for exactly this guarantee (§1.6). (ii) FR-091: "a **no-op** is refused, and an **unknown stage** is rejected rather than treated as position zero" is still cited to `(UT-0091, UT-0092)`; both assertions are unlabelled `it` blocks inside the **`UT-0090`** describe. Both cited ranges contain the asserting tests, so nothing is fabricated. | Cite `UT-0834` at the FR-090 clause; add `UT-0090` to the FR-091 citation. |
| **ISS-08** | Low | T5 | **§8 (939–950) — three omissions** | §8 is described by this document as "the RTM's designated home for forward-looking impact", and three required additions across two cycles are absent, none recorded as deferred. (i) **FR-130** — carried cycle-2 ISS-10; its §3.1 row still carries "**MUST be revisited when on-chain membership goes live**", the only forward flag in the matrix with no §8 home. (ii) **FR-131** — cycle-2 ISS-10 made this conditional on the v1/v2 scoping being corrected; §8 has now corrected it, and Doc 03 v2.11.1 adds that **DES-096 (FR-131's DES) must gain a state accessor before the v1 ballot layer is built**, so the condition is met twice over. (iii) **The Q16 / window-resolution trigger** — cycle-2 ISS-06's required fix had two parts; the FR-090 flag (part 1) was made well, the §8 trigger (part 2) was not, so the new flag has no forward-impact row even though §8 exists for exactly that. | Add "**the ballot layer / window-resolution rule being specified**" → FR-090, FR-091, FR-092, FR-131; add "**on-chain membership goes live**" → FR-130. Record in the changelog anything consciously deferred. |
| **ISS-09** | Low | T3 | **§8, row 950** | Carried cycle-2 ISS-11, unchanged. (i) "The set is confirmed closed at three values (Rathish, **2026-08-30**)" — the `COUNTING_ACTION` allowlist was approver-**ratified 2026-08-24**; 2026-08-30 *confirmed* it (`DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md` §1.4 item 2). (ii) "adding a fourth requires an amendment to **FR-123** and DES-100" — that record's §1.5 names "a **DES-100** allowlist amendment and an **FR-024/FR-090** amendment". Both FRs are already in the row's impacted set, so the substance is right. | Date the ratification 2026-08-24 (confirmed 2026-08-30); name FR-024/FR-090 per the decision record. |
| **ISS-10** | Low | T3 | **§9 gate verdict table, line 961** | Carried cycle-2 ISS-12. "**610/610 green repo-wide (2026-08-30)**" remains **true** — corroborated by three 2026-08-30 root `npm test` runs (`artifacts/engineer-2026-08-30T0930.md`, `artifacts/engineer-2026-08-30T1130.md`, and the Doc 07 v2.4.4 cycle-2 review) with this exact per-package split — but it is still **uncited**, and the register a reader would check has no such entry: Doc 07 v2.4.4 §9 records R-15 (2026-08-29, repo-wide, **608**/608) and R-16 (2026-08-29, `apps/web` only), and Doc 07 carries "§9 lacks an R-17 confirmatory re-run row" as its own accepted Low. | Cite the run, or note that Doc 07's execution log has no R-17 row yet and this figure is corroborated in `artifacts/`. |
| **ISS-11** | Low | T6 | **Header `Source:` (9–10); changelog (12–58)** | (i) Carried cycle-2 ISS-13(i): **SRS v2.16.0 and SDD v2.11.0 are both `Status: In Review`** and the header states no approval status, so a reader cannot see that the sync rests on unapproved upstream versions. (The TC pin remains **Approved** — verified again this cycle: Doc 07 is at v2.4.4, Approved.) (ii) The changelog is much better than v2.5.4's — the root-cause account of the concatenated line is genuinely useful — but it still misreports the delta in two ways: it **claims "All three instances corrected"** when one was (ISS-02), and it records **nothing** about the three §8 additions that were required and not made (ISS-08). A deferral recorded is reviewable; a deferral omitted is not, and a deferral *asserted as done* is worse than either. (iii) "**REVIST** FLAG" (line 51) — typo for REVISIT. | Annotate the In-Review pins. Correct the "all three instances" claim. List anything consciously deferred. Fix the typo. |
| **ISS-12** | Low | T3 / T6 | **§7 entry 82 Owner cell (871); §10 Status cell (994)** | Carried cycle-2 ISS-15, unchanged. (i) The Owner cell reads "**Tomas Ferreira** (requirement text — **Q15**)". Doc 02 §13 **(h)** assigns the clarification to the **product-owner** and Doc 03 §16 Q15 (2834) names **Priya Raghunathan (PO)**; the same entry's own cause cell says the clarification is "owed to **the product-owner**". Tomás Ferreira does own FR-091's text in Doc 02, so the cell is defensible — but a PM working the register routes Q15 to the wrong person, which is the failure mode this block keeps reproducing (see ISS-01). Also the spelling in Doc 02 is "**Tomás** Ferreira". (ii) §10 states "**Does not block the current merge**"; per CLAUDE.md RACI "Merge to trunk" is **A = reviewer-qa**, so this is the tester's recommendation, not a determination. | Name Priya Raghunathan (PO) as Q15's owner alongside the FR-091 requirement owner; correct the accent. Rephrase §10 as "the tester's assessment is that this need not block the current merge; the merge decision is reviewer-qa's". |
| **ISS-13** | Low | T5 | **§4 orphan check (704–711) vs §10 (994)** | Carried cycle-2 ISS-16, unchanged. §4 still reports "`TC` citing a non-existent `UT`: **0**" and "`UT` … with no `TC` mapping: **0 material**" with **no pointer to §10**, while §10 itself warns that the `UT-0841..UT-0848` collision "will silently corrupt the next orphan check". A reader auditing ID integrity starts at §4. | Add one row to §4: "`UT` ids defined twice in different files → **1 range (`UT-0841..UT-0848`) — see §10, TD-RTM-01**". |
| **ISS-14** | Low | T3 | **§9 sign-off, Principal Architect row, line 980** | New, in the same newly-written cell as ISS-01. The 34 G-TRACE rows are described as ones whose "**chains [are] still broken for want of a `DES`**". That is true of the 33 FRs and **untrue of NFR-007**, the 34th: NFR-007 **has** DES-051 (§3.2 line 623), and its G-TRACE aspect is "**no story and no backlog item implements this NFR**" — a backlog gap owned by **Chen Wei** per §7 entry 37, and recorded as such in the chain-integrity findings (421) and §6 (744). The set of 34 is right; only its characterisation over-reaches, and it over-reaches into another role's lane. | Qualify: "the **33** live FR `G-TRACE` chains awaiting a `DES`, plus **NFR-007**, whose `G-TRACE` aspect is a missing story/backlog item (owner Chen Wei), not a design gap". |
| **ISS-15** | Low | T2 / T6 | **§3.1 FR-090 row, line 563 — the new Q16 flag** | The flag is substantively right (see §4 item 5) and the row correctly stays **✅ COMPLETE**. Two imprecisions. (i) **The trigger is weaker than the pattern it invokes.** FR-051 and FR-130 fire on an **event** ("when the `treasury` flag ships"; "when on-chain membership goes live"); this one fires on a **judgement** — "*if the resolution rule that answers Q16 **alters what "the same decision window" guarantees***" — which allows a future reader to decide it did not fire. Doc 03 §16 Q16 gives an event: it "**MUST be answered before the ballot layer is built**". (ii) **"The answer MUST NOT be a window-closing capability"** is a prohibition on a decision the tester does not own. Per CLAUDE.md RACI the Q16 answer is a **requirement decision** (Doc 03 names PO + architect as owners; Doc 02 §13 (i) routes it to the PO). Doc 03's own wording is narrower and is the right form: that absence "*MUST NOT be **quietly removed** to answer this*". The consequential form the flag already uses one sentence earlier is the correct one. | Restate the trigger as an event: "**MUST be revisited when the Q16 window-resolution rule is decided** (Doc 03 §16 Q16: before the ballot layer is built)". Restate the prohibition consequentially: "if the answer introduces a window-closing, merging or ranking capability, this row's closure no longer holds and MUST be re-derived — that absence is the anti-capture control this row certifies". |
| **ISS-16** | Low | T3 | **§9 gate verdict table (961) vs §6 dashboard (748)** | The correction is right and the sum closes, but the two sections still use different denominators with no bridge: §9 reports "**232 cannot execute**" against **465** row anchors, §6 reports "**255** not executed or not executable" against **472** expanded cases. They *do* reconcile — 232 + 16 unexecuted + the 7-row convention difference recorded in Doc 07 §2 (line 449) = 255, and I verified it — but the reader is left to derive that, and a 23-case discrepancy between two tables in one document is exactly the sort of thing that generated the last two cycles of findings. | Add one clause to §9: "(against Doc 07's **465** row anchors; §6 uses the **472** expanded convention, where 232 + 16 + the 7-row convention difference = **255**)". |

> **Low** issues do not block the pass bar and are explicitly permitted. **Critical/High/Medium** each
> force a FAIL — **ISS-02 (High)** and **ISS-01 / ISS-03 / ISS-04 (Medium)** are why this cycle is a
> FAIL. Eight of the twelve Lows are carried from cycle 2; three (ISS-05, ISS-07, ISS-12) are on their
> third or fourth cycle. Carrying them is allowed; carrying them **silently** is what makes each next
> cycle harder to review.

---

## 6. Routing instruction (to the owning role)

**FAIL → route to the `tester` (Ji-woo Park), the owner of Doc 08.** The reviewer has edited nothing.

Rework into a **new version — v2.7.0** (minor bump; the loop requires at least a minor after a
Medium+ FAIL), `Status: In Review`, after which this loop re-reviews as **cycle 4 of 5**. Two cycles
remain before the cap.

Priority order:

1. **ISS-02 first — it is the only High and it is a two-sentence edit.** Copy §8's wording (line 949,
   which is correct) into §3.1's FR-091 row and §7 entry 82. Then correct the changelog claim. **The
   lesson worth taking is the one Doc 03 wrote about itself at v2.11.1: "the corrections stopped at
   the section boundary."** Both documents hit it in the same week. The counter-measure is mechanical:
   after making a correction, **grep the document for the phrase you just replaced** and confirm the
   hit count is zero before writing the changelog entry that says you did.
2. **ISS-01 — remove Q17 from the Principal Architect row** and, if it is kept in §9 at all, record
   it under its Doc 03 owners (Ji-woo Park + Samuel Oyelaran). Fix ISS-14 in the same cell while
   there.
3. **ISS-03 and ISS-04 — finish the SDD sweep.** Mark "terminates at `DECISION`" as a design
   intention in entry 82, advance the pin to **v2.11.1**, and state the delta (FR-107 **confirmed
   unchanged and now agreed by Doc 03**; DES-096's owed state accessor noted against FR-131).
4. **ISS-06 — split line 914** while the §7 formatting is fresh, and remove the §3.1/§3.2 blank
   lines. This is the only Low I would treat as urgent: it is the same latent defect that produced a
   High last cycle, and it is now the last one left.
5. **ISS-05, ISS-07..ISS-16 — the remaining Lows.** Fix them in the same pass or record explicitly,
   in the changelog, that they are deferred and why. Three are on their third or fourth cycle.

**A note on fairness in routing.** This is the best rework of the three, and it should be read that
way. **Both Highs are genuinely and correctly fixed** — the G-TRACE enumeration matches an
independent recount name for name, and the evidence decomposition (217 + 16 + 232 = 465) is not just
consistent but *right*, derived from the matrix and reconciled to Doc 07 rather than imported from
it. That is exactly the lesson cycle 2 asked the tester to take, and the tester took it. The Q16 flag
is a good piece of judgement: it records a live open item against a **COMPLETE** row without opening
the row, gives the right reason, and cites the two test cases that would actually move. The root-cause
account of the concatenated line in the changelog is the kind of thing that makes the next reviewer's
job cheaper. **The remaining High is a sweep that stopped one section short, not a misjudgement** —
and the fix is a copy-paste of wording this document already contains.

**Explicitly affirmed, so the rework does not disturb it:** Must **138** · COMPLETE **16** · OPEN
**122** · **11.6%** are correct and must be preserved. The **34** live G-TRACE rows and their
enumeration are correct — do not re-derive them. **217 / 16 / 232 = 465** is correct — do not
re-derive it. FR-090 remains **✅ COMPLETE** (Q16 is a revisit flag, not a gap, and the flag belongs
where it now is); FR-091 and FR-092 remain **☐ OPEN (G-NOMECH)** on their stated grounds; FR-078
remains **☐ OPEN (G-TRACE + G-PHASE3)**; **FR-107 remains `G-TRACE`, DES = none — Doc 03 v2.11.1 now
agrees with this matrix and withdrew its contrary claim.** §10 TD-RTM-01 stands as written.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 3 of 5.

---

## 8. Memory-index registration (blocked — recorded here)

`artifacts/memory-index.json` is **333.4 KB**, above the 256 KB read limit, so it cannot be read in
full and therefore cannot be safely rewritten with the `Write` tool (no `Edit` tool is available to
this reviewer). The session-memory note **was written** to
`artifacts/architect-2026-08-30T1830.md`. The exact object to append to the `notes` array is:

```json
{
  "id": "architect-2026-08-30T1830",
  "role": "architect",
  "file": "artifacts/architect-2026-08-30T1830.md",
  "timestamp": "2026-08-30T18:30:00Z",
  "phase": "Verify (document-review loop — neutral reviewer)",
  "product": "Trumocracy",
  "summary": "Neutral technical review of Doc 08 RTM v2.6.0, cycle 3 of 5. Verdict FAIL at 86% (0C/1H/3M/12L). Both cycle-2 Highs verified genuinely fixed: G-TRACE count recounted independently from a repaired §7 and confirmed 34, matching §9's enumeration name for name; the §9 evidence row now decomposes 217 passing + 16 automated-but-unexecuted + 232 unexecutable = 465, every term verified against Doc 07 v2.4.4 §2/§10 and agreeing with §6's 217. Two cycle-2 Mediums fixed (16/138; the 15-DES-links clause retired) and Q16 recorded against FR-090 as a correctly-scoped revisit flag keeping the row COMPLETE. New High: the SDD delta sweep reached §8 only, so §3.1 FR-091 and §7 entry 82 still publish the superseded v2-only scope of the ballot-layer derivation rule, contradicting §8 in the same document, while the changelog claims all three were corrected. New Medium: the repaired Principal Architect sign-off cell assigns Doc 03 §16 Q17 to the architect, whose named owners are Ji-woo Park (tester) and Samuel Oyelaran (Engineering Lead). Carried Mediums: 'terminates at DECISION' still stated as built behaviour; SDD pin stale at v2.11.0 while Doc 03 is v2.11.1 (v2.11.1 withdrew its contrary FR-107 -> DES-106 claim and now defers to this matrix, and mints an owed DES-096 ballot-state accessor touching FR-131). Confirmed no row status changed and no authoritative count moved: Must 138, COMPLETE 16, OPEN 122, 11.6%; version is a minor bump as required. Routed to the tester for v2.7.0. Reviewer edited nothing.",
  "artifacts_written": [
    "artifacts/reviews/08-traceability-matrix-v2.6.0-technical-cycle3.md",
    "artifacts/architect-2026-08-30T1830.md"
  ],
  "ids_touched": {
    "FR": "FR-051, FR-077, FR-078, FR-090, FR-091, FR-092, FR-107, FR-130, FR-131, FR-133",
    "NFR": "NFR-007",
    "DES": "DES-051, DES-096, DES-100, DES-102, DES-104, DES-105, DES-106",
    "TC": "TC-3541, TC-3545, TC-3548, TC-3549",
    "UT": "UT-0090, UT-0834, UT-0841..UT-0848",
    "docs": "Doc 08 v2.6.0 (reviewed), Doc 03 v2.11.0/v2.11.1, Doc 07 v2.4.4, Doc 02 v2.16.0"
  },
  "counts": {
    "score": 86,
    "critical": 0,
    "high": 1,
    "medium": 3,
    "low": 12,
    "cycle": 3,
    "cap": 5
  },
  "verdict": "FAIL",
  "open_items": [
    "ISS-02 (High) — re-scope the derivation rule in Doc 08 §3.1 FR-091 and §7 entry 82 to match §8; correct the changelog's 'all three instances corrected' claim",
    "ISS-01 (Medium) — remove Doc 03 §16 Q17 from the Principal Architect sign-off cell; its owners are Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead)",
    "ISS-03 (Medium) — mark 'terminates at DECISION' in §7 entry 82 as a design intention, not built behaviour",
    "ISS-04 (Medium) — advance the SDD pin to v2.11.1 and record the delta (FR-107 confirmed unchanged; DES-096 owed state accessor noted against FR-131)",
    "ISS-06 (Low, urgent) — split Doc 08 §7 line 914 (entries 125/126 concatenated); remove the §3.1/§3.2 blank lines",
    "memory-index.json is 333 KB and could not be updated by this reviewer — this entry needs appending by a role with an Edit tool"
  ]
}
```
