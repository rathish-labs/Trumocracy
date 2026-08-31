# Document Review — Doc 08 Traceability Matrix v2.6.1 (technical, cycle 4)

> Produced by the **document-review** skill (a shared capability — not a ninth agent). The reviewer
> **scores and lists issues only — it never edits the reviewed document**. Doc 08 is owned by the
> **tester** (Ji-woo Park); this review was run by the **architect** as a neutral, non-owning role.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.6.1
Review mode: technical
Reviewer role: architect
Score: 93%
Critical: 0
High: 0
Medium: 0
Low: 20
Cycle: 4 of 5
Verdict: FAIL
```

> **Read the verdict correctly before routing.** This is a **soft FAIL**: **zero Critical, zero High,
> zero Medium**. Every substantive claim in this document is now verified correct — every count,
> every enumeration, every adjudication, every normative statement. It fails on the **numeric bar
> alone** (93% < 95%), because it carries **20 Low issues**, twelve of them carried across earlier
> cycles and three on their fourth or fifth. **No adjudication, no count, no status and no normative
> statement needs to change in v2.7.0.** This is one clean-up pass from a PASS.

> **Independence disclosure.** ISS-15, ISS-16, ISS-19 and ISS-20 turn on the content of Doc 03, which
> the architect owns. All four are stated as *Doc 08 is imprecise about, or trails, the source it
> pins* and are evidenced by quoting Doc 03's own text, changelog and debt register. **ISS-16 and
> ISS-20 both point at architect-owned obligations (advancing the pin creates work for nobody but
> the tester; the DES-096 accessor is the architect's own debt).** ISS-10 again reduces nothing and
> corrects a characterisation of the architect's own workload. No finding here advantages the
> reviewer's role. **I record explicitly that I graded ISS-15 and ISS-16 as Lows partly because my
> own cycle-3 report supplied the characterisation the tester repeated** — see §4 item 4.

---

## 1. Summary (BLUF)

**v2.6.1 fixes the High and all three Mediums, and it fixes every one of them properly.** I verified
each at its location against Doc 03 and against this matrix's own tables, and I re-derived every
figure the brief asked me to protect. **The scope sweep is genuinely complete this time — I swept
the whole document myself and all three normative locations now state the same rule identically.**
**The formatting Low that produced two Highs across cycles 2 and 3 is closed: I counted the §7
gap-log mechanically and it returns exactly 126 physical row lines with zero concatenations**, which
makes a row-wise count over §7 trustworthy for the first time in this document's life. And **the
rework introduced no substantive defect** — the first cycle in this sequence of which that is true.

It still **FAILS**, and only on the numeric bar. There are **no Critical, High or Medium issues**.
There are **20 Lows**: twelve carried (three on their fourth or fifth cycle), eight new — and the
new ones are all bookkeeping, not content. The two that matter most are that **the version took a
patch bump where the loop requires at least a minor after a Medium-or-worse FAIL** (a regression of
a defect v2.6.0 had already fixed), and that **the changelog again misstates its own delta in three
small ways** — undercounting the carried Lows, calling the formatting Low "fully closed" four lines
before listing it as carried, and describing an upstream withdrawal as complete when it reached one
section of Doc 03.

**What is fixed, verified at the cited location.**

- **ISS-02 (High) — the scope sweep. FIXED, and I swept the whole document rather than the three
  named places.** All three normative locations now state the identical rule: §3.1's FR-091 row
  (604), §7 entry 82 (910) and §8's row (989) each say the derivation rule **binds BOTH versions** —
  the DES-096 database backing in v1, `Governor.State` at the v2 seam — and each carries the correct
  narrow v1 claim (the proposals layer derives nothing because it stops at `admitToBallot()`). I
  checked all three clause-for-clause against Doc 03 §10.13.13(a) (lines 2546–2565) and found no
  divergence. Both corrected locations carry an inline `_(v2.6.1: this read …)_` supersession marker,
  which is the right convention. **A full-text sweep for `v2-seam` / `at the v2 swap` / `not a v1
  gap` / `for v2` returns hits at only two live-text locations, and both are inside those
  supersession markers, quoting the text they replaced.** The only surviving instances of the
  superseded framing are in the **historical v2.5.3 and v2.5.4 changelog blocks** (146, 173–175) —
  records of what those versions said, corrected twice above them → **ISS-19 (Low)**.
- **The changelog claim that produced the High is withdrawn, correctly.** Lines 16–27 name the
  conflation exactly ("the **phrase** was corrected in three places, but the **scope framing** in only
  ONE of three") and restate the rule. The false v2.6.0 sentence survives in its own historical block
  (88–89), which is right — you correct a changelog forward, you do not rewrite it.
- **ISS-01 (Medium) — the Principal Architect cell. FIXED, and the replacement item is genuinely
  architect-owned.** Q17 is gone from the cell; the only two occurrences of "Q17" left in the whole
  document (1020) are inside the correction note explaining that v2.6.0 misassigned it and naming its
  real owners. **I verified the ownership from source:** Doc 03 line 2489 — "Closing that is an
  **engineer/tester obligation** recorded in §16 **Q17**" — and §16's Q17 row (2868) names **Ji-woo
  Park (tester) + Samuel Oyelaran (Engineering Lead)**. The cell now names the **owed DES-096
  ballot-state accessor**, and **that item is architect-owned and independently confirmed**: Doc 03's
  §13 debt register (line 2735) carries it as a row owned by **Ravi Deshmukh (architect)**, due before
  the v1 ballot layer. The tester assigned it to the architect at v2.6.1; Doc 03 formalised the same
  assignment at v2.11.2. The tester got there first and got it right.
- **ISS-03 (Medium) — "terminates at DECISION". FIXED, and phrased better than my required fix
  asked.** Entry 82 (910) now reads "it **should** terminate at `DECISION`; terminating is not
  skipping — but note that **nothing enforces this today** … so the termination is a **design
  intention, not built behaviour**". That matches Doc 03's warning box (2579–2585) and uses Doc 03's
  own "**should terminate**" form from §10.13.13(a) (2574). §3.1's FR-091 row never carried the
  erroneous claim and §8's row already used the correct form, so **all three locations now agree**.
- **ISS-04 (Medium) — the pins. FIXED as instructed.** SRS advanced to **v2.16.2** and annotated
  "(Approved)" — **I verified it: Doc 02 is at v2.16.2, `Status: Approved`** (business cycle-3 PASS
  98%). SDD advanced **v2.11.0 → v2.11.1**. CODE v2.4.3 (Approved), TC v2.4.4 (Approved), BKLG v2.3.0
  and MTP v1.0.2 all verified current. The delta is recorded in the changelog. **Doc 03 has since
  moved to v2.11.2** — see ISS-16, and it is a Low, not a repeat Medium.
- **The formatting Low is closed where it counts, and I tested the claim mechanically rather than
  accepting it.** See §4 item 5: **126 gap-log row lines, zero concatenations, four retired, 122 live**.

**Both cycle-3 fixes hold.** The **34** G-TRACE rows re-derived mechanically from a now-fully-rendering
§7 (33 FR rows whose Reason cell is G-TRACE, plus NFR-007 whose cell is `G-NOENV + G-TRACE`) and
matching §9's enumeration name for name. **217 + 16 + 232 = 465**, every term re-checked against Doc
07 v2.4.4 §2 (line 440: 465 / 233 / 232; lines 444–445: the 16 unexecuted `apps/web` cases).

**No status changed and no authoritative count moved.** Must **138** · COMPLETE **16** · OPEN **122** ·
**11.6%**, each confirmed by an independent mechanical recount (§4 item 8).

**Why it still fails: the accumulation, not any one defect.** Twelve Lows are carried — the duplicated
§6 clause is on its **fifth** cycle, the UT-0834/UT-0090 citations and the §4→§10 pointer on their
**fourth**. Eight are new. None blocks; together they put the document at 93% against a 95% bar, and
they are the reason a sibling document that passes here (Doc 07 v2.4.4 at 99%, Doc 02 v2.16.2 at 98%,
Doc 06 v2.4.3 at 100%) carries **one or zero** Lows and this one carries twenty.

**Verdict: FAIL.** Route to the tester for **v2.7.0** (minor bump — see ISS-13). **This is a
Low-clearance pass only. Nothing substantive is to be touched.**

## 2. Pass-bar check

- Score ≥ 95%? **no** (`93%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes". **The severity row passes for the
  first time in this loop; the score row does not.**

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **T1** Requirement coverage | 20 | 95 | 19.0 | Every Must FR/NFR (114 + 24) and every RISK (19 in §5) carries a row. FR-107 verified correct and **now agreed by Doc 03 in every location** (v2.11.2 removed the last residual DES-106 link). The Q16 revisit flag on FR-090 is correct and is now independently corroborated — Doc 03 v2.11.2 §15 records it "while noting the row correctly stays COMPLETE". The owed DES-096 accessor is recorded and correctly owned. Deductions (all Low): the accessor is recorded in §9 but not on FR-131's own row or gap-log entry (ISS-20); §8's forward-impact set still omits FR-130, FR-131 and the window-resolution trigger (ISS-04); the SDD pin trails v2.11.2 (ISS-16). |
| **T2** Soundness | 20 | 95 | 19.0 | **The derivation rule is now stated identically and correctly in all three normative locations**, verified clause-for-clause against Doc 03 §10.13.13(a); the "terminates at `DECISION`" caveat matches Doc 03's warning box and adopts its own "should terminate" form. Every adjudication re-derived and correct; FR-090 correctly stays COMPLETE; FR-091/FR-092 correctly stay OPEN on unchanged grounds. Deductions (Low): the superseded v2-only framing survives unmarked in two historical changelog blocks (ISS-19); the Q16 flag's trigger is a judgement where the pattern it invokes uses an event, and its "MUST NOT" binds a decision the tester does not own (ISS-11, carried). |
| **T3** Traceability & IDs | 20 | 92 | 18.4 | **The strongest section of the document, and the one that improved most.** §7 now renders 126 individual row lines with **zero concatenations — verified mechanically** — so every row-wise count over §7 is trustworthy for the first time. 34 G-TRACE re-derived from §7 (33 + NFR-007) and matched to §9's enumeration name for name; 16 `✅` rows counted mechanically in §3.1; 122 live = 126 − 4 retired. Q17 correctly removed and DES-096 correctly assigned, both verified against Doc 03 source. Deductions (all Low, all carried): Q15's owner still misnamed in entry 82's Owner cell (4th cycle); the UT-0834/UT-0090 citations (4th cycle); the 34-row set still characterised as "chains broken for want of a `DES`", untrue of NFR-007; the §6 note's duplicated clause (5th cycle); "the reviewer-qa row **below**" points the wrong way. |
| **T4** Security & failure modes | 15 | 97 | 14.55 | §5's risk→control→test table intact across all 19 risks; §7.1's "four gaps that will not close by building harder" intact and correctly reasoned; every gate-row verdict stays **FAIL**; the Gate-2 paragraph still refuses a false green light; §10 TD-RTM-01 intact, correctly scoped and correctly routed to the engineer. The evidence figures remain conservative — 217, not 233 — and understate rather than flatter. No deduction of substance. |
| **T5** Completeness & testability | 15 | 92 | 13.8 | All sections present and filled; no placeholders; the §7 register is now fully countable. Deductions (all Low, all carried): §4's orphan check still reports "0" with **no pointer to §10**, which warns that the `UT-0841..UT-0848` collision "will silently corrupt the next orphan check" — the strongest of the twelve carried Lows, because a Gate-2 verifier starts at §4; §8's three required additions are still absent **and still not recorded as deferred**, now on their third cycle; the §9/§6 denominator bridge (232/465 vs 255/472) is still left for the reader to derive. |
| **T6** Convention compliance | 10 | 80 | 8.0 | **A patch bump was taken where the loop requires at least a minor after a Medium-or-worse FAIL** — a regression of exactly the defect cycle 2 raised and v2.6.0 fixed (ISS-13). The changelog is far better than v2.6.0's and its withdrawal of the false "all three instances" claim is exemplary, but it still misstates its own delta three ways: it undercounts the carried Lows as eight (≈12), calls the formatting Low "fully closed" four lines before listing it among the carried, and describes the v2.11.1 FR-107 withdrawal as complete when it reached §15 only. Three of six source pins are `In Review` and only the SRS carries a status annotation. "REVIST" typo survives. An unclosed parenthesis in entry 82's new sentence. Blank lines still fracture §3.1, §3.2 and §7 into fragments that render without a header row, and a stray double `---` sits at 716–719. |
| **Total** | **100** | — | **93%** | — |

---

## 4. Verification performed (against the nine items in the review brief)

### (1) ISS-02 (High) — the scope sweep. **FIXED. I swept the whole document; the sweep is clean where it counts.**

I did not check the three named locations. I ran a full-text sweep for every form of the superseded
framing and then read each hit in context.

| Search term | Hits | Disposition |
|---|---|---|
| `v2-seam` | 21, 146, 174, 604, 910 | 21 = v2.6.1 changelog quoting the error it fixed ✅ · **146 = v2.5.4 historical block, live superseded framing** ❌ → ISS-19 · **174 = v2.5.3 historical block** ❌ → ISS-19 · 604, 910 = inside the `_(v2.6.1: this read …)_` supersession markers ✅ |
| `at the v2 swap` | 22, 910 | Both quoting the replaced text ✅ |
| `not a v1 gap` | 22, 910 | 22 quotes the error; **910's live text reads "a build obligation, not a v1 gap _today_"**, immediately after "binds **BOTH versions**" ✅ correct |
| `not a v1 test obligation` | 21, 175, 604, 989 | 21 quotes the error ✅ · **175 = v2.5.3 historical block** ❌ → ISS-19 · 604, 989 = "a build obligation, **not a v1 test obligation today**" ✅ correct and matches Doc 03 |
| `for v2` | 580, 604, 940, 941 | 580 ("no screen assignments for v2.0.0 FRs"), 940/941 ("no inspection harness for v2 surfaces") — unrelated ✅ · 604 = inside the supersession marker ✅ |
| `sole authority` / `derivation rule` / `derive from` | 25, 85, 146, 174, 604, 910, 989, 1020 | Every live occurrence states the both-versions rule ✅ |

**The three normative locations, verified against Doc 03 §10.13.13(a) (2546–2565):**

| Location | Text at v2.6.1 | Verdict |
|---|---|---|
| **§3.1 FR-091 row (604)** | "A normative derivation rule is recorded and it binds **BOTH versions**: the **ballot layer** is the sole authority on ballot state — the DES-096 database backing in v1, `Governor.State` at the v2 seam — and the `VOTE`/`DECISION`/`IMPLEMENTATION` stages MUST derive from whatever backing `IBallotService` is bound to, never be tracked independently. It is a **build obligation, not a v1 test obligation today**, because the proposals layer built so far derives nothing — it stops at `admitToBallot()` and hands off." | ✅ **FIXED and exactly right.** Matches Doc 03 2560–2565 clause for clause, including the narrow true claim |
| **§7 entry 82 (910)** | "A derivation obligation is recorded in Doc 03 §10.13.13(a) and it binds **BOTH versions** — the **ballot layer** owns ballot state (DES-096 database backing in v1, `Governor.State` at the v2 seam) and the `VOTE`/`DECISION`/`IMPLEMENTATION` stages MUST derive from it. A **build obligation, not a v1 gap today**, because the proposals layer derives nothing." | ✅ **FIXED** |
| **§8 row (989)** | "the ballot layer is the sole authority on ballot state in BOTH versions — the DES-096 database backing in v1, `Governor.State` at the v2 seam" | ✅ unchanged and correct since v2.6.0 |

**The changelog withdrawal is handled correctly.** Lines 16–27 diagnose the conflation precisely
("two *different* errors were in play and v2.6.0 conflated them") rather than merely asserting a fix,
and the false v2.6.0 sentence is left standing in its own historical block where it belongs. That is
the right treatment of a version history and it is what my cycle-3 required fix asked for.

**The residue.** Two historical changelog blocks still describe the rule in the superseded scope
without an inline supersession marker: **line 146** (v2.5.4: "the **v2-seam** derivation obligation is
now mirrored in §8") and **lines 173–175** (v2.5.3: "The v2 seam rule … is recorded as a **v2-seam
obligation, not a v1 test obligation**"). These are records of what superseded versions said, they are
corrected twice above them, and every normative location now says the opposite — so **no implementer
is misled**. But this document's own convention is to mark superseded text *in place* (it does so at
604 and 910), and this is the last residue of a phrase this loop has chased for three cycles. →
**ISS-19 (Low)**. I record explicitly: **the sweep is complete in every location that carries
normative force.**

### (2) ISS-01 (Medium) — the Principal Architect cell. **FIXED, and the replacement item is genuinely the architect's — verified from Doc 03 source.**

**Q17 is gone.** A full-document search for `Q17` returns exactly two hits, both at line 1020 and both
inside the correction note: "*the v2.6.0 repair then assigned this cell Doc 03 §16 Q17, which is NOT
the architect's — Q17 is owned by Ji-woo Park (tester) + Samuel Oyelaran (Engineering Lead)*". The
document also no longer carries the "three ballot-state representations" phrasing or
`PROPOSAL_STATE_ENUM` anywhere — so the **cite-ahead-of-pin** half of cycle-3 ISS-01 is closed too.

**I verified Q17's ownership independently, not from my own prior report:**

- Doc 03 line **2489**: "*Closing that is an **engineer/tester obligation** recorded in §16 **Q17***".
- Doc 03 §16 **Q17** row (line **2868**), owner column: "**Ji-woo Park (tester) + Samuel Oyelaran
  (Engineering Lead)**", due "Before the v2 seam swap".

**I verified the replacement item is architect-owned, which is the question the brief asks.** The cell
now reads: the architect "*Now owns the 34 live `G-TRACE` rows … plus OPEN-02/03/11, and the **owed
DES-096 ballot-state accessor** (Doc 03 v2.11.1 §10.13.13(a): the v1 half of the derivation rule has
nothing to derive from until `IBallotService` reports ballot state)*".

| Check | Source | Result |
|---|---|---|
| Does the obligation exist at the **pinned** v2.11.1? | Doc 03 §10.13.13(a) warning box, 2546–2554: "*DES-096 MUST gain a state accessor before the v1 ballot layer is built*", marked "_(v2.11.1: added)_" | ✅ **Yes — and the citation is accurate to its pin**, unlike v2.6.0's Q17 description |
| Is it **architect-owned**? | Doc 03 §13 debt register, line **2735**: "*DES-096 exposes no ballot-state accessor …*" — owner column: "**Medium — Ravi Deshmukh (architect)**; owed before the v1 ballot layer" | ✅ **Yes, unambiguously** |
| Is the tester's summary of it accurate? | "the v1 half of the derivation rule has nothing to derive from until `IBallotService` reports ballot state" vs Doc 03 2546: "The v1 half of this rule has nothing to derive FROM yet" | ✅ Faithful |

**Worth recording as a positive.** At the pinned **v2.11.1** the accessor existed only as §10.13.13(a)
prose and was, in Doc 03's own words at v2.11.2, "**unowned and absent from every register**". The
tester assigned it to the architect anyway, from first principles — a `DES` is an architect artifact
— and **Doc 03 independently reached the same assignment one version later**. That is the sign-off
register working as intended, and it is the opposite of the failure mode this block produced for
three consecutive cycles.

**One carried imprecision survives in the same cell**: the 34 rows are still described as ones whose
"chains [are] still broken for want of a `DES`", which is true of the 33 FRs and untrue of NFR-007
(it **has** DES-051; its G-TRACE aspect is a missing story/backlog item, owner Chen Wei per §7 entry
37) → **ISS-10 (Low, carried)**. And the cell points at "the reviewer-qa row **below**" when that row
is immediately **above** it (1019 vs 1020) → **ISS-18 (Low)**.

### (3) ISS-03 (Medium) — "terminates at `DECISION`". **FIXED, and phrased more precisely than my required fix asked for.**

Entry 82 (910) now reads: "*FR-091's text does not say what becomes of a DEFEATED or CANCELLED
decision (it **should** terminate at `DECISION`; terminating is not skipping — but note that
**nothing enforces this today**: Doc 03 v2.11.1 records that `advanceStage()` consults no outcome and
would advance a defeated window straight to `IMPLEMENTATION`, so the termination is a **design
intention, not built behaviour**. _(v2.6.1: this entry stated the termination as fact, contradicting
the warning box in the SDD version it pins.)_*"

Checked against source:

- Doc 03 **2579–2585** (warning box): "*⚠ **"Terminates at `DECISION`" is a design intention, not a
  property of the built code.** `advanceStage(windowId)` consults no outcome and would advance a
  defeated window straight on to `IMPLEMENTATION`. Nothing today prevents it.*" → **the caveat matches
  clause for clause** ✅
- Doc 03 **2574** (§10.13.13(a) routing paragraph): "*such a window **should terminate at
  `DECISION`**. Terminating is not skipping*" → **the tester adopted Doc 03's own modal form
  ("should terminate") rather than my suggested wording**, which is a better fix: it states the design
  intention in the source's language and then denies that the code implements it ✅
- Doc 03 attributes the warning box to v2.11.0 ("_(v2.11.0: added)_"); Doc 08 says "Doc 03 **v2.11.1**
  records that …". That is a claim about what the **pinned** version records, and v2.11.1 does record
  it unchanged. Accurate ✅

**All three locations now agree.** §3.1's FR-091 row (604) never asserted the termination at all — it
names Q15 as a requirement clarification and stops. §8's row (989) already used the correct form
("does not **yet say** that a … window terminates at `DECISION`"). Entry 82 now matches both.

**One cosmetic defect in the new sentence:** the parenthesis opened after "*DEFEATED or CANCELLED
decision (*" is **never closed** — the inner `_(v2.6.1: …)_` is balanced, but the outer bracket runs
to the end of the cell, so "That is a requirement clarification owed to the product-owner…" reads as
still inside the aside. → **ISS-17 (Low)**.

### (4) ISS-04 (Medium) — the pins. **FIXED as instructed. Doc 03 has since moved again; that is a Low, and I say why.**

| Pin in Doc 08 (line 9–10) | Actual, verified from the document header | Result |
|---|---|---|
| `SRS-TRUMOCRACY v2.16.2 (Approved)` | Doc 02: `Version: 2.16.2`, `Status: Approved` (business cycle-3 PASS 98%, 0C/0H/0M/1L) | ✅ **correct, and correctly annotated** — the brief asked me to verify the Approved claim, and it holds |
| `SDD-TRUMOCRACY v2.11.1` | Doc 03: `Version: **2.11.2**`, `Status: In Review`, 2026-08-30 | ◐ **advanced as required (v2.11.0 → v2.11.1); now trails by one same-day patch** → ISS-16 |
| `BKLG-TRUMOCRACY v2.3.0` | Doc 05: v2.3.0, In Review | ✅ current (status unannotated → ISS-07) |
| `CODE-TRUMOCRACY v2.4.3` | Doc 06: v2.4.3, Approved | ✅ current |
| `MTP-TRUMOCRACY v1.0.2` | Doc 04: v1.0.2, In Review | ✅ current (status unannotated → ISS-07) |
| `TC-TRUMOCRACY v2.4.4` | Doc 07: v2.4.4, Approved | ✅ current |

**The v2.11.2 delta, read against every row this matrix decides — it is entirely favourable and moves
nothing:**

| v2.11.2 change (Doc 03 changelog 12–39) | Bears on this matrix? |
|---|---|
| **§5.2's DES-106 row no longer lists FR-107 in `Satisfies`; §10.13.13's DES-106 heading no longer reads "(FR-092, FR-107)"** | **Favourably, and it completes something v2.11.1 left half-done.** v2.11.1 withdrew the FR-107 → DES-106 claim in **§15 only**; §5.2 and §10.13.13 kept publishing the link until v2.11.2. **Doc 08's FR-107 row (622: DES = none, `G-TRACE + G-PHASE3`; §7 entry 98) has been right throughout and needs no change** — but it also means Doc 08's changelog overstates what v2.11.1 did → **ISS-15 (Low)** |
| **The owed DES-096 accessor becomes a §13 debt row owned by Ravi Deshmukh** (2735) | **Favourably — it confirms Doc 08 v2.6.1's own assignment.** No Doc 08 change needed |
| **FR-107's gap class in Doc 03 corrected to `G-TRACE + G-PHASE3`, "matching Doc 08"** | **Favourably — Doc 03 now mirrors this matrix exactly.** No change |
| **§15's DES-104 row records Doc 08 v2.6.0's Q16 revisit flag, "noting the row correctly stays COMPLETE"** | **Favourably — Doc 03 independently endorses this matrix's Q16 adjudication.** No change |
| **Q17 corrected to name three representations** | Nothing in Doc 08 turns on it (Q17 is no longer cited here) |

→ **ISS-16 (Low), and I want the reasoning on the record because I graded this same condition a
Medium at cycle 3.** The difference is real, not a softening:

1. **The required fix was executed.** The tester advanced the pin exactly as instructed and recorded
   the delta. Cycle 3's Medium was for a pin left stale; this is a pin that was advanced and then
   overtaken.
2. **Doc 03 moved to v2.11.2 on the same day, after this rework, and v2.11.2 is itself `In Review`.**
   Requiring Doc 08 to chase an unapproved upstream that changes between reviews makes the loop
   unbounded — every Doc 03 cycle would fail Doc 08 on principle.
3. **The v2.11.1 residual was not visible to the tester, because my own cycle-3 report told it
   otherwise.** I wrote that v2.11.1 "withdrew the claim and now defers to this matrix by name",
   quoting §15 and not checking §5.2. The tester restated my characterisation. Grading that a Medium
   would penalise the tester for my incompleteness.
4. **Nothing in Doc 08 is wrong.** Its FR-107 row is correct, and Doc 03 now agrees with it in every
   location. The FR-107 contradiction was a **Doc 03** defect, which Doc 03's own loop graded Medium
   and fixed at v2.11.2.

### (5) The formatting Low that caused two Highs. **CLOSED where it counts — and I tested the claim mechanically rather than accepting it.**

The changelog claims (44–47): "*All **126** gap-log rows now render as individual rows — verified
mechanically, zero concatenations remain — so row-wise counts over §7 are trustworthy for the first
time.*" **This is the claim that makes every row-wise count over §7 trustworthy, so I tested it four
ways:**

| Test | Method | Result |
|---|---|---|
| **Row lines present** | Count lines matching `^\| *(~~)?[0-9]+(~~)? *\|` across the document | **130** — of which **4** are §1's completion-rule table (rules 1–4). **§7 = 126** ✅ |
| **Row lines that are gap-log rows** | Count lines matching `^\| *(~~)?[0-9]+(~~)? *\| *(~~)?\**(FR\|NFR)-[0-9]+` | **126** ✅ — matches exactly, so all 126 are genuine gap-log rows and none is a stray |
| **Concatenations — form A** | Search for `\|\s*\|\s*(~~)?[0-9]+(~~)?\s*\|` (a row-number cell appearing after a cell boundary mid-line, with or without whitespace) | **0 matches** ✅ |
| **Concatenations — form B** | Search for a line that starts with a row-number cell **and** contains a second row-number-plus-`FR/NFR` cell later on the same line | **0 matches** ✅ |
| **Retired rows** | Search `^\| ~~[0-9]+~~ \|` | **4** — lines 896 (70/FR-079), 898 (71/FR-080), 908 (81/FR-090), 953 (125/FR-130) ✅ |
| **Live rows** | 126 − 4 | **122** ✅ — matches §7's heading (808), §9 (1000) and the gate rule (1038) |

**Entries 125 and 126 are split**: line **953** is entry ~~125~~ (FR-130, retired) and line **954** is
entry 126 (FR-133, `G-PHASE3`), each its own physical line. **The claim is TRUE.** For the first time
in this document's life, a mechanical row-wise scan of §7 returns the same number as every
authoritative location, with nothing hidden. That is the defect that produced the cycle-2 High and
survived the cycle-3 repair, and it is closed.

**One precision, and it is why ISS-02 stays open as a Low rather than closing entirely.** The word
"render" is doing more work than the verification supports. Each of the 126 rows occupies its own
**physical line** — that is what matters, and it is verified. But **blank lines still sit inside the
§7 table at 897 and 909**, and inside §3.1 at 535, 590, 592, 603, 605, 607 and §3.2 at 678. In
GitHub-flavoured markdown a blank line terminates a table, and the fragment that follows has no
delimiter row — so in a *rendered* view entries 71–126 do not display as a table at all. **No count in
this document is derived from rendering**, so nothing is wrong; but the changelog also calls this Low
"now fully closed" (44) and then lists "the table-fracturing blank lines" among the carried Lows four
lines later (49–50). → **ISS-02 (Low, carried — the concatenation half is fixed)** and **ISS-14 (Low)**.

### (6) The two cycle-3 fixes. **BOTH STILL HOLD — re-derived, not re-read.**

**The G-TRACE count of 34, re-derived mechanically from a now-fully-rendering §7:**

| Source | Method | Count |
|---|---|---|
| **My mechanical count from §7** | Lines whose Reason cell begins `G-TRACE` (33) **+ NFR-007** at entry 37 (862), whose cell reads `G-NOENV + G-TRACE` and therefore does not match a leading-`G-TRACE` pattern | **34** |
| **My enumeration from §7** | NFR-007 (862) · FR-074/075/076 (891–893) · **FR-078 (895)** · FR-081 (899) · FR-087/088/089 (905–907) · FR-093..FR-111 (912–930, 19 rows) · FR-121 (947) · FR-125..FR-129 (948–952) | 1+3+1+1+3+19+1+5 = **34** |
| **§9 reviewer-qa cell (1019)** | NFR-007, FR-074, FR-075, FR-076, **FR-078**, FR-081, FR-087, FR-088, FR-089, FR-093..FR-111, FR-121, FR-125..FR-129 | **34** |
| **SUMMARY by-reason table (451)** | 1 NFR-007 + 33 FRs, same names | **34** |

**The enumeration matches my recount name for name, with no name in either list absent from the
other.** Entries 68 (FR-077), 82 (FR-091) and 83 (FR-092) are correctly excluded — all three are
`G-NOMECH` with their chain gaps closed (894, 910, 911) — and entries 70, 71, 81, 125 are correctly
excluded as retired. The SUMMARY reconciliation still closes: 47+13+9+5+6+4+5+34 = **123** against
**122** distinct (NFR-007 compound) ✅.

**The evidence decomposition, re-verified against Doc 07 v2.4.4:**

| Figure | Doc 07 v2.4.4 source | Result |
|---|---|---|
| 465 designed row anchors | §2 suite-table footer, line **440**: "**465** \| **233** \| **232**" | ✅ |
| 233 with an implementing automated test | §2, line **442** | ✅ (still correctly **not** relabelled as evidence) |
| **16** automated but unexecuted | §2, lines **444–445**: "**16** are `apps/web` component cases that exist but were not executed this session" | ✅ |
| **217** with passing evidence | 233 − 16 = 217; agrees with §6 (787) "217 with passing evidence (129 inh. · 88 obs.)"; 129 + 88 = 217 | ✅ |
| **232** cannot execute | §2 line 440, Blocked-or-no-mechanism total | ✅ |
| The sum | **217 + 16 + 232 = 465** | ✅ |

The 23-case gap to §6's "255 not executed or not executable" still has no bridge in Doc 08 — it *does*
reconcile (232 + 16 + the 7-row TS-EXPL convention difference recorded in Doc 07 line 449 = 255, and I
verified it again) but the reader must derive it → **ISS-12 (Low, carried)**.

### (7) Did the rework introduce anything NEW that is wrong? — **Nothing substantive. This is the first cycle of which that is true.**

The pattern I named at cycle 3 — *v2.5.3's corrections minted a High, v2.5.4's minted two Highs,
v2.6.0's minted one High and one Medium* — **is broken.** I examined each of the four places the
rework touched:

- **The new §3.1 sentence (604).** Checked clause by clause against Doc 03 §10.13.13(a). No error. The
  supersession marker is accurate about what the text used to say and about which Doc 03 version
  corrected the scope (v2.11.0 — correct; the pin is v2.11.1, and citing the version that *made* the
  correction is the right citation).
- **The new entry-82 sentences (910).** Both correct. The derivation rule matches §8 and Doc 03; the
  termination caveat matches Doc 03's warning box and uses Doc 03's own modal form. **One cosmetic
  defect: an unclosed parenthesis** → ISS-17 (Low).
- **The rewritten architect cell (1020).** Q17 correctly removed; the DES-096 accessor correctly
  assigned and independently confirmed architect-owned in Doc 03's §13 debt register; the citation is
  accurate to its own pin. **Two carried/cosmetic defects: the "for want of a `DES`" over-reach on
  NFR-007 (ISS-10, carried) and the "reviewer-qa row below" direction error (ISS-18).**
- **The new changelog block (12–50).** Substantively the best in the sequence — it withdraws a false
  claim by name, diagnoses the root cause, and states plainly that two different errors were
  conflated. **Three bookkeeping imprecisions**, all Low: (i) "**Eight Lows carried**" — the true
  figure is about twelve, and the three it names are not the only ones on their third or fourth cycle
  (ISS-14); (ii) it calls the formatting Low "**now fully closed**" and then lists the blank lines
  among the carried four lines later (ISS-14); (iii) "**it WITHDREW the FR-107 → DES-106 claim**" of
  v2.11.1 — v2.11.1 withdrew it in §15 only, and §5.2's `Satisfies` column plus §10.13.13's DES-106
  heading carried it until **v2.11.2** (ISS-15).

**None of the three changelog imprecisions is of the class that became a High at cycle 3.** That
defect certified a *normative fix* as complete when it was not, and an implementer reading the
uncorrected text would have drawn the wrong conclusion about what binds v1. These three concern the
count of non-blocking items, a cosmetic item's closure state, and the extent of an upstream
withdrawal whose load-bearing conclusion — "*this document's FR-107 row was right and stands
unchanged*" — is **true**. No row, status, count, chain or implementer action turns on any of them.

### (8) No status changed; no authoritative count moved. **CONFIRMED by independent mechanical recount.**

| Location | Figures | Method | Result |
|---|---|---|---|
| Header `Version:` (5) | **2.6.1**, `Status: In Review` | read | ◐ patch bump — see ISS-13 |
| SUMMARY (432–438) | 161 (138 Must + 23) · Must **138** · COMPLETE **16** · OPEN **122** · **11.6%** · non-Must 4/19 · total 20/141 | arithmetic | ✅ 138+23=161; 16+4=20; 122+19=141; 16/138=11.59% |
| Must-row gaps by reason (444–452) | 47+13+9+5+6+4+5+**34** = **123** vs 122 distinct | arithmetic + §7 recount | ✅ |
| **§3.1 `✅` row count** | 16 | mechanical: `✅` occurs on 26 lines; 16 are §3.1 data rows (526, 528, 530, 531, 532, 534, 536, 537, 538, 539, 544, 553, 589, 591, 602, 645), 4 are §3.3 non-Must (689–692), 6 are legend/subtotal/changelog | ✅ **16**, and FR-051 (553) is the conditional completion |
| **§7 live gap-log entries** | 122 | mechanical: 126 row lines − 4 struck-through | ✅ **122** |
| **§3.3 `✅` count** | 4 | mechanical (689, 690, 691, 692) | ✅ matches "4 complete" |
| §3.1 subtotal (650) · §3.2 (682) · non-Must (712) | 114 · 16 · 98 / 24 · 0 · 24 / 23 · 4 · 19 | arithmetic | ✅ 98+24=122 |
| §6 dashboard (781–788) | FR-Must 114/16/98 · NFR-Must 24/0/24 · Stories 134/17/117 · TC 472/217/255 | arithmetic | ✅ 134−17=117; 472−217=255 |
| §7 heading (808) · §9 (1000) · Gate rule (1038) | 122 | read | ✅ |
| §9 gate verdict (999) | **16 / 138** | read | ✅ |

**No row status changed.** FR-011/016/020/021/022/024/025/026/027/028/035/051/079/080/090/130 remain
COMPLETE; FR-077/FR-091/FR-092 remain **OPEN (G-NOMECH)** on unchanged grounds; FR-078 remains `☐
G-TRACE + G-PHASE3`; **FR-107 remains `G-TRACE + G-PHASE3`, DES = none** — and Doc 03 v2.11.2 now
agrees with this matrix in every location. No `✅`/`☐` marker moved anywhere in §3.1 or §3.2. §10
TD-RTM-01 is unchanged and still correctly routed to the engineer.

### (9) Which Lows are carried, and does any warrant escalation in its own right?

**Twelve carried, eight new. No single Low warrants escalation as a defect** — none affects a row, a
status, a count, a chain, or an implementer's action, and the pass bar explicitly permits them.

**But the aggregate is now the reason this version fails, and that is itself the signal worth acting
on.** Three carried Lows are the ones to watch:

| Carried Low | Cycles | Why it is still only a Low | Why it should stop being carried |
|---|---|---|---|
| **ISS-01** §6 TC-note duplicated clause (790) | **5th** (cycle-1 ISS-09(iii) → cycle-2 ISS-07 → cycle-3 ISS-05 → here) | The dashboard beside it is authoritative and correct; every sum in the note checks | A convention note that states "20" and "24" in one sentence about **22** cases teaches a reader to distrust the table it explains — the exact reason it was raised the first time |
| **ISS-03** UT-0834 / UT-0090 citations (602, 604) | **4th** | Both cited ranges contain the asserting tests, so nothing is fabricated | It is a two-token edit, and Doc 08 is the document whose whole purpose is that an ID resolves to one thing |
| **ISS-09** §4 orphan check has no pointer to §10 (743–750) | **4th** | §4's figures are true today; §10 records the defect prominently | **The strongest of the twelve.** §4 reports "`TC` citing a non-existent `UT`: 0" while §10 warns the `UT-0841..UT-0848` collision "will silently corrupt the next orphan check", and a Gate-2 verifier starts at §4 |

**My recommendation on the carry, and it is the part I most want the PM to read.** A Low that survives
five cycles is either (i) not worth fixing — in which case it should be **formally accepted and
recorded**, not silently carried; or (ii) worth fixing — in which case five cycles of silence is
itself the defect. **Both of this document's sibling technical documents already use the right
convention**: Doc 07 v2.4.4's header reads "*Approved — … 0C/0H/0M/1L; ISS-01 Low carried — §9 lacks
an R-17 confirmatory re-run row, per the R-14 precedent, **accepted** at the v2.4.2 PASS*", and Doc 02
v2.16.2's does the same. **A recorded acceptance stops the clock on a Low; a silent carry does not**,
and it makes every subsequent review more expensive to run. I would treat that as the durable fix
here, alongside clearing the ones that are one-line edits.

---

## 5. Issues

> All twenty are **Low**. None blocks the pass bar; the pass bar is missed on **score alone**.
> Twelve are **carried** and explicitly permitted — they are listed so the permission is on the
> record and so the tester can clear or formally accept them in one pass.

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-01** | Low (**carried — 5th cycle**) | T3 | **§6 TC-count convention note, line 790** | Every sum in the note checks — I re-verified 463 = 299+70+19+29+24+22, 463−1+10 = 472, 217 = 129+88, and 129 = 55+28+22+24. But the paragraph still ends with two conflicting trailing clauses: "…because all **20** TS-PROPOSALS cases carry passing evidence and none is Blocked (TC-3541 is No mechanism…) — **unchanged**, because all **24** new cases carry passing evidence and none is Blocked." TS-PROPOSALS is **22**, and the sentence states two other numbers for it. Also "22 TS-PROPOSALS (Doc 06 **v2.4.2**)" — 20 came from Doc 06 v2.4.1, TC-3562/TC-3563 from v2.4.2. Stays Low: the §6 dashboard is authoritative and correct. | Delete the duplicated trailing clause; state "all **22** TS-PROPOSALS cases carry passing evidence and none is Blocked (TC-3541 is No mechanism and adds to the gap bucket)". Attribute "20 from Doc 06 v2.4.1 + TC-3562/TC-3563 from v2.4.2". |
| **ISS-02** | Low (**carried; the load-bearing half is FIXED**) | T6 | **§7 blank lines 897, 909; §3.1 blank lines 535, 590, 592, 603, 605, 607; §3.2 line 678; stray double `---` at 716–719** | **The concatenation half is closed and verified** — 126 gap-log rows, one record per physical line, zero concatenations (§4 item 5). What remains is the blank lines: in GitHub-flavoured markdown a blank line terminates a table and the fragment after it has no delimiter row, so in a rendered view §7 entries 71–126 and several §3.1 fragments do not display as tables at all. **No count is affected** — every count in this document is derived from source lines, and I verified all of them — which is why this stays Low. But it sits around exactly the rows this loop keeps editing (FR-024, FR-079/080/081, FR-090/091/092, NFR-025/027). | Remove the blank lines inside the §3.1, §3.2 and §7 tables and the duplicate `---` at 716–719. Then re-run the row-wise scan and confirm §7 still returns 126 / 122 live. |
| **ISS-03** | Low (**carried — 4th cycle**) | T3 | **§3.1 FR-090 (602), FR-091 (604)** | Unfixed and unmentioned in the changelog for a fourth cycle. (i) FR-090: "…is self-declared with no approver, and **is not a verification gate**" is still attributed to `UT-0089`/`UT-0832`; the test that asserts it is **`UT-0834`** (`packages/sdk/test/proposals.test.js` — `verifyEligibility` not called, `service._verifier` undefined, `fileProposal` takes no verifier), and the 2026-08-30 decision record cites UT-0834 for exactly this guarantee. (ii) FR-091: "a **no-op** is refused, and an **unknown stage** is rejected rather than treated as position zero" is still cited to `(UT-0091, UT-0092)`; both assertions are unlabelled `it` blocks inside the **`UT-0090`** describe. Both cited ranges contain the asserting tests, so nothing is fabricated. | Cite `UT-0834` at the FR-090 clause; add `UT-0090` to the FR-091 citation. |
| **ISS-04** | Low (**carried — 3rd cycle, still not recorded as deferred**) | T5 / T1 | **§8 (979–990) — three omissions** | §8 is described by this document as the RTM's designated home for forward-looking impact, and three additions required across three cycles are absent, **none recorded as deferred, and the v2.6.1 changelog does not mention them at all**. (i) **FR-130** — its §3.1 row (645) still carries "**MUST be revisited when on-chain membership goes live**", the only forward flag in the matrix with no §8 home. (ii) **FR-131** — the condition this was made contingent on (the v1/v2 scoping) is now corrected in all three locations, and Doc 03 v2.11.2 §13 records that **DES-096, FR-131's DES, must gain a state accessor before the v1 ballot layer is built**, so the condition is met twice over. (iii) **The Q16 / window-resolution trigger** — the FR-090 flag exists but has no forward-impact row, though §8 exists for exactly that. | Add "**the ballot layer / window-resolution rule being specified**" → FR-090, FR-091, FR-092, FR-131; add "**on-chain membership goes live**" → FR-130. If any is consciously deferred again, **say so in the changelog** — a deferral recorded is reviewable, a deferral omitted is not. |
| **ISS-05** | Low (**carried**) | T3 | **§8, row 990** | (i) "The set is **confirmed closed at three values** (Rathish, **2026-08-30**)" — the `COUNTING_ACTION` allowlist was approver-**ratified 2026-08-24**; 2026-08-30 *confirmed* it (`DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md` §1.4 item 2). The word "confirmed" makes this defensible; the ratification date is still absent. (ii) "adding a fourth requires an amendment to **FR-123** and DES-100" — that record's §1.5 names "a **DES-100** allowlist amendment and an **FR-024/FR-090** amendment". Both FRs are already in the row's impacted set, so the substance is right. | Date the ratification 2026-08-24 (confirmed 2026-08-30); name FR-024/FR-090 per the decision record. |
| **ISS-06** | Low (**carried**) | T3 | **§9 gate verdict table, line 1001** | "**610/610 green repo-wide (2026-08-30)**" remains **true** — corroborated by three 2026-08-30 root `npm test` runs (`artifacts/engineer-2026-08-30T0930.md`, `artifacts/engineer-2026-08-30T1130.md`, and the Doc 07 v2.4.4 cycle-2 review) with this exact per-package split — but it is still **uncited**, and the register a reader would check has no such entry: Doc 07 v2.4.4 §9 records R-15 (2026-08-29, repo-wide, **608**/608) and R-16 (2026-08-29, `apps/web` only), and Doc 07 carries "§9 lacks an R-17 confirmatory re-run row" as its own **accepted** Low. | Cite the run, or note that Doc 07's execution log has no R-17 row yet and this figure is corroborated in `artifacts/`. |
| **ISS-07** | Low (**carried; partially fixed**) | T6 | **Header `Source:` (9–10); changelog line 90** | (i) **Improved:** the SRS pin now reads "v2.16.2 **(Approved)**" and I verified it. But **three of the six pins are `In Review` and none of the three is annotated**: SDD v2.11.1 (and Doc 03 is at v2.11.2, also In Review), BKLG v2.3.0, MTP v1.0.2. A reader cannot see that part of the sync rests on unapproved upstream versions. (ii) "**REVIST** FLAG" (line 90) — typo for REVISIT, third cycle. | Annotate each pin with its upstream `Status:` — e.g. "SDD-TRUMOCRACY v2.11.2 (In Review)". Fix the typo. |
| **ISS-08** | Low (**carried**) | T3 / T6 | **§7 entry 82 Owner cell (910); §10 Status cell (1034)** | (i) The Owner cell reads "**Tomas Ferreira** (requirement text — **Q15**)". **I re-verified Q15's owner from source:** Doc 03 §16 Q15 (line **2866**) names **Priya Raghunathan (PO)**, due "Before the ballot layer is built"; Doc 02 §13 **(h)** routes the clarification to the product-owner; and the same entry's own text says the clarification is "**owed to the product-owner**". Tomás Ferreira does own FR-091's requirement text in Doc 02, so the cell is defensible as written — but a PM working the register routes Q15 to the wrong person. Also the spelling in Doc 02 is "**Tomás** Ferreira" (the accent is dropped in six §7 cells: entries 67, 69, 78, 82, 110 and the FR-119 row). (ii) §10 states "**Does not block the current merge**"; per CLAUDE.md RACI "Merge to trunk" is **A = reviewer-qa**, so this is the tester's recommendation, not a determination. | Name Priya Raghunathan (PO) as Q15's owner alongside the FR-091 requirement owner; correct the accent. Rephrase §10 as "the tester's assessment is that this need not block the current merge; the merge decision is reviewer-qa's". |
| **ISS-09** | Low (**carried — 4th cycle; the strongest of the carried set**) | T5 | **§4 orphan check (743–750) vs §10 (1034)** | §4 still reports "`TC` citing a non-existent `UT`: **0**" and "`UT` … with no `TC` mapping: **0 material**" with **no pointer to §10**, while §10 itself warns that the `UT-0841..UT-0848` collision "**will silently corrupt the next orphan check**". A reader auditing ID integrity — including the reviewer-qa doing the Gate-2 RTM verification — starts at §4 and has no reason to read on to §10. | Add one row to §4: "`UT` ids defined twice in different files → **1 range (`UT-0841..UT-0848`) — see §10, TD-RTM-01**". |
| **ISS-10** | Low (**carried**) | T3 | **§9 sign-off, Principal Architect row, line 1020** | The 34 G-TRACE rows are still described as ones whose "**chains [are] still broken for want of a `DES`**". That is true of the 33 FRs and **untrue of NFR-007**, the 34th: NFR-007 **has** DES-051 (§3.2 line 662), and its G-TRACE aspect is "**no story and no backlog item implements this NFR**" — a backlog gap owned by **Chen Wei** per §7 entry 37 (862), and recorded as such in the chain-integrity findings (460) and §6 (783). The set of 34 is right; only its characterisation over-reaches, and it over-reaches into another role's lane. | Qualify: "the **33** live FR `G-TRACE` chains awaiting a `DES`, plus **NFR-007**, whose `G-TRACE` aspect is a missing story/backlog item (owner Chen Wei), not a design gap". |
| **ISS-11** | Low (**carried**) | T2 / T6 | **§3.1 FR-090 row, line 602 — the Q16 flag** | The flag is substantively right, the row correctly stays **✅ COMPLETE**, and **Doc 03 v2.11.2 §15 now independently endorses exactly that reading**. Two imprecisions survive. (i) **The trigger is weaker than the pattern it invokes.** FR-051 (553) and FR-130 (645) fire on an **event** ("when the `treasury` flag ships"; "when on-chain membership goes live"); this one fires on a **judgement** — "*if the resolution rule that answers Q16 **alters what "the same decision window" guarantees***" — which lets a future reader decide it did not fire. Doc 03 §16 Q16 (2867) gives an event: it "**MUST be answered before the ballot layer is built**". (ii) "**The answer MUST NOT be a window-closing capability**" is a prohibition on a decision the tester does not own. Doc 03's own wording is narrower and is the right form: that absence "*is a first-class anti-capture control and **MUST NOT be quietly removed** to answer this*"; per CLAUDE.md RACI the Q16 answer is a requirement decision the PO is **A** for. The consequential form the flag already uses one sentence earlier is correct. | Restate the trigger as an event: "**MUST be revisited when the Q16 window-resolution rule is decided** (Doc 03 §16 Q16: before the ballot layer is built)". Restate the prohibition consequentially: "if the answer introduces a window-closing, merging or ranking capability, this row's closure no longer holds and MUST be re-derived — that absence is the anti-capture control this row certifies". |
| **ISS-12** | Low (**carried**) | T3 | **§9 gate verdict table (1001) vs §6 dashboard (787)** | The decomposition is right and sums, but the two sections still use different denominators with no bridge: §9 reports "**232 cannot execute**" against **465** row anchors, §6 reports "**255** not executed or not executable" against **472** expanded cases. They *do* reconcile — 232 + 16 unexecuted + the 7-row TS-EXPL convention difference recorded in **Doc 07 line 449** = 255, and I verified it again — but the reader must derive it, and a 23-case discrepancy between two tables in one document is exactly the class of thing that generated the last three cycles of findings. | Add one clause to §9: "(against Doc 07's **465** row anchors; §6 uses the **472** expanded convention, where 232 + 16 + the 7-row convention difference = **255**)". |
| **ISS-13** | Low (**NEW — a regression of a defect already raised and already fixed**) | T6 | **Header `Version:` line 5** | **v2.6.1 is a patch bump.** The `document-review` skill is explicit: "*FAIL on a Medium+ issue → at least a **minor** bump; Low-only polish → a patch bump*". Cycle 3 was a FAIL with **1 High + 3 Mediums**, and my cycle-3 routing instruction named the required version by number ("*Rework into a new version — **v2.7.0** (minor bump; the loop requires at least a minor after a Medium+ FAIL)*"). **This is the same defect cycle 2 raised against v2.5.4** ("*a patch bump it was not entitled to*") and which **v2.6.0 fixed by taking a minor** — so it is a regression, not a first occurrence. It has no mechanical consequence (the review-report filename tracks the actual version string, so the SubagentStop hook still matches), but the version number is how a reader judges the magnitude of a change without reading it, and this one repaired a High and three Mediums while labelled as polish. | Bump the next version to **v2.7.0**, not v2.6.2. Apply the rule mechanically from here: **any Medium-or-worse FAIL → minor bump**. |
| **ISS-14** | Low (**NEW**) | T6 | **Changelog lines 44–50** | The v2.6.1 block misstates its own delta twice. (i) "**Eight Lows carried (permitted by the pass bar), three of them on their third or fourth cycle**" — the true carried figure is about **twelve** (cycle-3 ISS-05, ISS-07..ISS-16, plus the blank-line half of ISS-06), and more than three are on their third or fourth. (ii) It states "**The Low that caused two Highs is now fully closed**" (44) and then lists "**the table-fracturing blank lines**" among the carried Lows four lines later (49–50) — two statements about the same cycle-3 ISS-06, one of which is wrong. **This is the same class as the claim that became a High at cycle 3, at a far lower stake:** nothing normative is certified as done, and the direction of the error is to understate rather than overstate what was fixed. | State the carried count accurately, or drop the count and list them. Say "**the concatenation half** of the formatting Low is fully closed; the blank lines are carried". |
| **ISS-15** | Low (**NEW**) | T1 / T6 | **Changelog lines 39–43** | "*The v2.11.1 delta is **favourable and moves nothing here**: it **WITHDREW** the FR-107 → DES-106 claim that had contradicted this matrix*". **v2.11.1 withdrew it in §15 only.** Doc 03 v2.11.2's own changelog (16–25) records that at v2.11.1 "**§5.2's DES-106 row still listed FR-107 in its `Satisfies` column**" and "**§10.13.13's DES-106 heading still read '(FR-092, FR-107)'**", and that §15's lead-in "*declares §5.2 to be the register that provides the `FR/NFR → DES` half, so a link in §5.2 **is** a link claimed*". Both were removed only at **v2.11.2**. **The load-bearing conclusion is true** — this matrix's FR-107 row was right and stands unchanged — and **the characterisation the tester repeated came from my own cycle-3 report**, which quoted §15 and did not check §5.2. Recorded so the record is accurate, not as a fault of judgement. | When the pin advances (ISS-16), restate: v2.11.1 withdrew the claim in **§15**; §5.2's `Satisfies` column and §10.13.13's heading carried it until **v2.11.2**, which removed both. Doc 08's FR-107 row was right throughout and is unchanged. |
| **ISS-16** | Low (**NEW; graded Low deliberately — see §4 item 4**) | T1 / T6 | **Header `Source:` line 9** | **Doc 03 is at `Version: 2.11.2` (In Review, 2026-08-30); this document pins `SDD-TRUMOCRACY v2.11.1`.** The cycle-3 required fix *was* executed (v2.11.0 → v2.11.1) and the delta *was* recorded; Doc 03 then moved again the same day. **The v2.11.2 delta is entirely favourable and moves nothing here:** §5.2's DES-106 row and §10.13.13's heading drop FR-107, completing the withdrawal (ISS-15); the owed **DES-096 accessor becomes a §13 debt row owned by Ravi Deshmukh**, confirming this matrix's own §9 assignment; FR-107's gap class in Doc 03 is corrected to `G-TRACE + G-PHASE3`, "**matching Doc 08**"; and §15's DES-104 row now records **Doc 08's Q16 flag** while noting the row "correctly stays COMPLETE". **No row status, no count and no chain link moves.** | Advance the pin to **SDD-TRUMOCRACY v2.11.2 (In Review)** and record the four-item delta in one line, stating that **all four run in this matrix's favour and change nothing here**. |
| **ISS-17** | Low (**NEW**) | T6 | **§7 entry 82, line 910** | The new Q15 sentence opens a parenthesis it never closes: "*…what becomes of a DEFEATED or CANCELLED decision **(** it **should** terminate at `DECISION`; … a **design intention, not built behaviour**. _(v2.6.1: …)_ That is a **requirement clarification owed to the product-owner**, raised 2026-08-30, and it does **not** affect this row's status…*". The inner marker is balanced; the outer bracket runs to the end of the cell, so the whole Q15 disposition reads as parenthetical when it is the entry's substantive routing statement. | Close the parenthesis after "**not built behaviour**", before the `_(v2.6.1: …)_` marker. |
| **ISS-18** | Low (**NEW**) | T3 | **§9 sign-off, Principal Architect row, line 1020** | The cell says the architect "*Now owns the **34 live `G-TRACE` rows** enumerated in the reviewer-qa row **below***". The reviewer-qa row is at line **1019**, immediately **above** the Principal Architect row at 1020. A cross-reference in the register that assigns owners should point the right way. | "…enumerated in the reviewer-qa row **above**". |
| **ISS-19** | Low (**NEW — the last residue of the cycle-2/3/4 sweep**) | T2 / T6 | **Changelog lines 146 and 173–175** | I swept the whole document (§4 item 1). **All three normative locations are correct.** The superseded v2-only framing survives only in two historical changelog blocks, without the inline supersession marker this document uses everywhere else: line **146** (v2.5.4 block) "*the **v2-seam** derivation obligation is now mirrored in §8*"; lines **173–175** (v2.5.3 block) "*The **v2 seam rule** (chain owns ballot state; VOTE/DECISION/IMPLEMENTATION derive from it) is recorded as a **v2-seam obligation, not a v1 test obligation***". These are records of what superseded versions said and are corrected twice above them, so **no implementer is misled** — which is why this is a Low and not a repeat of ISS-02. But §3.1 and §7 both got a `_(v2.6.1: this read …)_` marker and these did not. | Append one marker to each: "_(superseded — the rule binds **both** versions; see the v2.6.0 and v2.6.1 entries above and Doc 03 §10.13.13(a).)_". Do **not** rewrite the historical text. Then the sweep is closed in every location and can be declared so. |
| **ISS-20** | Low (**NEW — residual of cycle-3 ISS-04**) | T1 | **§3.1 FR-131 row (646); §7 entry 117 (945)** | The owed **DES-096 ballot-state accessor** is recorded in §9's Principal Architect cell (1020) — a defensible and arguably better location, since §9 is where architect obligations are assigned, and Doc 03 v2.11.2 has since put it in its own §13 debt register with the same owner. But **DES-096 is FR-131's DES**, and neither FR-131's §3.1 row nor its gap-log entry 117 mentions it. A reader working the FR-131 row — the row that will carry the ballot seam — does not see that its design element is incomplete. **No status moves**: FR-131 is already `☐ G-PHASE3`. | Add one clause to FR-131's row and to gap-log entry 117: "**Forward note (not a gap):** Doc 03 §13 records that DES-096 **MUST gain a ballot-state accessor before the v1 ballot layer is built** (owner Ravi Deshmukh); without it the FR-091 derivation rule is unsatisfiable in v1." Pair this with the FR-131 addition to §8 (ISS-04(ii)). |

> **Low** issues do not block the pass bar and are explicitly permitted. **This version has zero
> Critical, zero High and zero Medium — the severity row of the pass bar is satisfied.** It fails on
> **score alone**: twenty open Lows across every section put it at 93% against a 95% bar, where the
> sibling technical documents that pass here (Doc 06 v2.4.3 at 100%, Doc 07 v2.4.4 at 99%, Doc 02
> v2.16.2 at 98%) each carry **one or zero**.

---

## 6. Routing instruction (to the owning role)

**FAIL → route to the `tester` (Ji-woo Park), the owner of Doc 08.** The reviewer has edited nothing.

Rework into a **new version — `v2.7.0`** (minor bump; see ISS-13 — the previous FAIL carried a High
and three Mediums, and the loop requires at least a minor after a Medium-or-worse FAIL), `Status: In
Review`, after which this loop re-reviews as **cycle 5 of 5 — the last before escalation**.

**Read this before starting: v2.7.0 is a Low-clearance pass and nothing else.**

> **Explicitly affirmed, so the rework does not disturb it. Do not re-derive, re-adjudicate or
> re-word any of the following — every one is verified correct at v2.6.1:**
>
> - Must **138** · COMPLETE **16** · OPEN **122** · **11.6%** · non-Must 4/19 · total 20/141.
> - The **34** live G-TRACE rows and their §9 enumeration — re-derived mechanically this cycle.
> - **217 + 16 + 232 = 465**, and §6's 472 / 217 / 255.
> - Gaps by reason 47+13+9+5+6+4+5+34 = 123 against 122 distinct.
> - **Every row status.** FR-090 stays **✅ COMPLETE** (the Q16 flag is correct and Doc 03 v2.11.2 §15
>   now says so independently); FR-091 and FR-092 stay **☐ OPEN (G-NOMECH)**; FR-077 stays G-NOMECH;
>   FR-078 stays `☐ G-TRACE + G-PHASE3`; **FR-107 stays `G-TRACE`, DES = none** — Doc 03 v2.11.2 now
>   agrees in every location.
> - **The derivation rule's wording in §3.1 (604), §7 entry 82 (910) and §8 (989)** — all three are
>   correct and identical. Do not touch them except to close ISS-17's parenthesis.
> - **The "design intention, not built behaviour" caveat** in entry 82 — correct, and better phrased
>   than my cycle-3 required fix asked for.
> - **The §9 Principal Architect cell's DES-096 assignment** — correct, and independently confirmed by
>   Doc 03's §13 debt register.
> - **§10 TD-RTM-01** stands as written.

Priority order:

1. **ISS-13 first, because it is the version string: bump to `v2.7.0`, not v2.6.2.**
2. **The three long-carried Lows — ISS-09, ISS-01, ISS-03.** ISS-09 (the §4 → §10 pointer) is the one
   I would fix first of the three: it is one table row, and it is the only carried Low that a Gate-2
   verifier could be actively misled by. ISS-01 and ISS-03 are a deleted clause and two token edits.
3. **The four §9 / §7 cell corrections — ISS-10, ISS-17, ISS-18, ISS-08.** All are single-clause edits
   in cells this loop has already been editing. ISS-08 finally routes Q15 to Priya Raghunathan.
4. **The pin and the changelog — ISS-16, ISS-15, ISS-14, ISS-07, ISS-19.** Advance to v2.11.2 and
   state the four-item delta; correct the FR-107 withdrawal description; state the carried-Low count
   accurately; annotate the three In-Review pins; add the two supersession markers that close the
   derivation-rule sweep for good.
5. **The remaining Lows — ISS-02, ISS-04, ISS-05, ISS-06, ISS-11, ISS-12, ISS-20.** Fix them, **or
   record each explicitly in the changelog as deferred and why.** ISS-04 is now on its third cycle
   with no deferral note; that is the item most likely to be raised again.

**On the carried Lows, one process recommendation.** If any of these is genuinely not worth fixing,
**accept it formally rather than carrying it silently** — use the convention this document's own
upstream siblings already use in their `Status:` line (Doc 07 v2.4.4: "*0C/0H/0M/1L; ISS-01 Low
carried — … **accepted** at the v2.4.2 PASS*"; Doc 02 v2.16.2 does the same). A recorded acceptance
closes a Low; a silent carry re-opens it every cycle and is why this version is at 93%.

**A note on fairness in routing, and I want it read.** **This is by a wide margin the best rework in
the sequence, and the first that introduced no substantive defect.** The High is fixed and the sweep
is genuinely complete — I checked the whole document, not the three named places. All three Mediums
are fixed, two of them better than my required fixes asked for: the tester adopted Doc 03's own
"should terminate" modal form rather than my wording, and it assigned the DES-096 accessor to the
architect from first principles at a point when Doc 03 itself recorded that item as **unowned** — and
Doc 03 reached the same assignment one version later. **The formatting defect that produced two
Highs across cycles 2 and 3 is closed, and the changelog's claim about it is the first claim in this
loop that I tested mechanically and found exactly true.** The changelog's withdrawal of its own false
"all three instances corrected" sentence — naming the conflation rather than quietly correcting it —
is the right way to run a version history and it made this review materially cheaper.

**What is left is a backlog, not a defect.** Twenty Lows is what four cycles of "fix the blockers,
carry the rest" accumulates to. One deliberate clean-up pass clears it, and every item above has its
exact location and its one-line fix. **Cycle 5 should be a PASS, and it will be if this pass is
treated as bookkeeping rather than as rework.**

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle **4** of 5. **One cycle remains before the cap.** If v2.7.0 does not
clear the bar, the verdict becomes `ESCALATED` and the project-manager must present the surviving
issues to the human approver for a recorded decision. **I record now, for that eventuality, that as
of v2.6.1 the surviving issues are all Low and none affects a row status, a count, a chain link, or a
Gate-2 determination** — an escalation from here would be an escalation on accumulated bookkeeping,
which is the least useful thing to put in front of a human approver. That is avoidable in one pass.

---

## 8. Memory-index registration (blocked — recorded here)

`artifacts/memory-index.json` is **~333 KB / 5,540+ lines**, above the read limit, so it cannot be
read in full and therefore cannot be safely rewritten with the `Write` tool (no `Edit` tool is
available to this reviewer). The session-memory note **was written** to
`artifacts/architect-2026-08-30T2130.md`, and the exact object to append to the `notes` array is
recorded at the end of that note for a role with a capable tool to register.
