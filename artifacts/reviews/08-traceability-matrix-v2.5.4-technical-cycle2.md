# Document Review — Doc 08 Traceability Matrix v2.5.4 (technical, cycle 2)

> Produced by the **document-review** skill (a shared capability — not a ninth agent). The reviewer
> **scores and lists issues only — it never edits the reviewed document**. Doc 08 is owned by the
> **tester** (Ji-woo Park); this review was run by the **architect** as a neutral, non-owning role.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.5.4
Review mode: technical
Reviewer role: architect
Score: 83%
Critical: 0
High: 2
Medium: 4
Low: 10
Cycle: 2 of 5
Verdict: FAIL
```

> **Independence disclosure.** ISS-05 and ISS-06 turn on the content of Doc 03, which the architect
> owns. Both findings are stated as *Doc 08 is out of sync with the source it pins*, and both are
> evidenced by quoting Doc 03's own changelog and §16 table rather than by reviewer assertion. The
> PM should weigh that when routing. No other finding touches an architect-owned artifact.

---

## 1. Summary (BLUF)

v2.5.4 **fixes the High and most of what cycle 1 raised, and one of its additions is a genuine
improvement to the document** — but it introduces **two new High-severity defects of its own** and
leaves **two explicitly-required Medium fixes untouched without saying so**, so the cycle is a FAIL.

What is genuinely fixed, verified at the cited location: the **ISS-H self-contradiction is gone** —
§7 entry 82's "Also open … reconciliation owed" is struck through and closed against the ruling, and
"architect (stage-taxonomy reconciliation)" is out of the Owner column; entry 81's revisit condition
and entry 71's routed residual are both marked discharged; **Q15 is now recorded in both places**
with reasoning I checked against Doc 03 §16 and found sound; the **§3.1 subtotal (114 · 16 · 98)**,
the **§6 DoD lead-in (17 of 134)** and the **§6 TC-count note** now all add up — I re-derived every
sum independently and each one checks, including the 463-anchor breakdown, which now matches Doc 07
v2.4.4 §2 verbatim. All three pins exist, and **Doc 07 v2.4.4 is now Approved**. The new **§10
TD-RTM-01** is correct: I reproduced the `UT-0841..UT-0848` double definition in both files myself,
and all three of its judgement calls — no row's status is wrong, it need not block this merge, it is
the engineer's to fix — are right. **Every authoritative count held: Must 138 · COMPLETE 16 · OPEN
122 · 11.6%, confirmed by a mechanical re-count of the ✅ rows in §3.1.**

The two new defects are both in **§9, the gate-decision section**, and both were created by the
corrections themselves. **ISS-01:** the reviewer-qa instruction now says **"33 live G-TRACE rows"**
and enumerates them — I recounted from §7 and §3.1, and the answer is **34**. The enumeration drops
**FR-078**, which is open, and the correction note justifies the drop by asserting FR-078 is
"closed". It is not. So §9 now contradicts the SUMMARY, removes a live open Must row from the set
the **Accountable** verifier is told to check, and states in prose that an open Must row is closed —
in a version whose changelog advertises the figure as "derived mechanically from §7". **ISS-02:** the
suite row's replacement figures — "**233 of 465** carry passing evidence; **232** cannot execute" —
are Doc 07's *automated-test* accounting relabelled as *passing evidence*. Doc 07's own breakdown
says 233 includes **16 `apps/web` cases that were not executed**; 233 − 16 = **217**, which is
exactly what §6 says. The gate table now shows more evidence and fewer unexecutable cases than the
matrix's own dashboard — the flattering direction, in the one document that says it never does that.

Beside them, the §9 gate table **still reads "12 / 138"** (correct: 16) and the sign-off block
**still says "the 15 missing DES links"** (all 15 closed at v1.1.0, per this document's own §
chain-integrity findings). Both were named in cycle-1 ISS-04/ISS-06; neither was fixed and neither
was recorded as deferred.

**Verdict: FAIL.** Route to the tester for **v2.6.0** (a minor bump — the loop requires one after a
Medium+ FAIL, and v2.5.4 took a patch). **No status change and no count change is implied by any
finding here.**

## 2. Pass-bar check

- Score ≥ 95%? **no** (`83%`)
- Critical = 0? **yes** · High = 0? **no** (2) · Medium = 0? **no** (4)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **T1** Requirement coverage | 20 | 85 | 17.0 | Every Must FR/NFR and every RISK still carries a row, and the Q15 omission cycle 1 raised is closed. Deductions: §9 drops a live open Must row (FR-078) from the verifier's G-TRACE set, and the twin item Q16 / Doc 02 §13 (i) — minted by the same 2026-08-30 exercise, naming FR-090 — is recorded nowhere. |
| **T2** Soundness | 20 | 90 | 18.0 | **Still the strongest part.** Every adjudication re-derived and correct: FR-090 legitimately COMPLETE, FR-091/FR-092 legitimately OPEN, "exactly ONE GAP" now accurate, §10's three judgement calls right. Deductions: the evidence mislabel in ISS-02, and reasoning carried forward from a superseded reading of Doc 03 (ISS-05). |
| **T3** Traceability & IDs | 20 | 65 | 13.0 | Where the version fails. Two new §9 defects (33-vs-34 with a false "FR-078 closed"; 233/465 mislabelled) plus two carried, explicitly-required count errors left in place (12/138; 15 DES links). Four Lows of citation imprecision carried a second time. |
| **T4** Security & failure modes | 15 | 92 | 13.8 | §5 risk→control→test intact; §7.1 "four gaps that will not close by building harder" intact; the Gate-2 verdict still refuses a false green light and every row verdict stays FAIL. Small deduction for the optimistic drift in the gate table's evidence figures. |
| **T5** Completeness & testability | 15 | 86 | 12.9 | **§10 is a real addition** — independently verified and correctly routed. Q15 recorded. Deductions: Q16 unrecorded; the SDD pin advanced without a delta sweep; §8's new v2-seam row still omits FR-130; §4 carries no pointer to §10. |
| **T6** Convention compliance | 10 | 80 | 8.0 | Pins now correct and the TC pin is Approved — a real improvement. Deductions: patch bump where the loop requires a minor; the changelog is not a complete record of the delta (one §8 row announced, two added; SDD pin bump unrecorded; two dropped required fixes unrecorded); markdown table fractures persist and this time caused a counting error. |
| **Total** | **100** | — | **83%** | — |

---

## 4. Verification performed (against the eight items in the review brief)

### (1) ISS-H — the self-contradiction. **FIXED, all four parts.**

| Cycle-1 requirement | Location in v2.5.4 | Result |
|---|---|---|
| §7 entry 82 must stop saying the taxonomy reconciliation is "Also open" / owed | line 823 | ✅ struck through; replaced with "**TAXONOMY ITEM CLOSED v2.5.4 — no reconciliation was owed**", ruling cited, "the architect's reconciliation ownership is discharged" |
| §7 entry 82 must stop naming the architect as owner of it | line 823, Owner cell | ✅ Owner is now `Tomas Ferreira (requirement text — Q15) · engineer (timeline wiring — the row's only gap)`. No architect. (One residual nit — ISS-15.) |
| Entry 81's "Revisit if the approver rules PROPOSING…" marked discharged | line 821 | ✅ struck through; "**REVISIT CONDITION DISCHARGED v2.5.4 — it never triggered**", ruling quoted, "the closure above stands unrevisited" |
| Entry 71's residual marked discharged | line 811 | ✅ struck through; "**RESIDUAL DISCHARGED — the architect closed it at Doc 03 v2.9.3**" |
| §3.1 FR-091 row must no longer contradict §7 | line 518 vs 823 | ✅ Both now say the taxonomy question was **ruled**, both say the row carries **exactly ONE GAP** (the unwired timeline clause), and both record Q15 identically as tracked-but-not-a-gap. I compared the two passages clause by clause; they agree. The over-strong "one reason **and no other**" is correctly restated as "exactly **ONE GAP**". |

### (2) ISS-03 — the unrecorded new open item. **FIXED for Q15. The reasoning is sound. But its twin, Q16, is now the same omission one FR over.**

**Q15 is recorded in both places, and the reasoning holds.** §3.1 (line 518) and §7 entry 82 (line
823) both name **Doc 02 §13 (h) / Doc 03 §16 Q15** and both state why it is tracked but not a gap:
it is a requirement-**text** clarification owed to the product-owner, and v1 holds no vote so no
window can be defeated and no test can turn on it. I checked that against the sources rather than
accepting it: Doc 03 §16 Q15 (line 2758) says exactly this — "*terminating is not skipping — but the
requirement's text does not say so*… **This is a requirement clarification, not an architect's
call**… **Not a defect in what is built:** v1 holds no vote… Recorded in Doc 02 §13 tracked routing
(h)"; Doc 02 §13 (h) (line 2926) carries Status "OPEN — clarification owed; **does not block v1**".
**The RTM is not explaining away a gap** — it is reproducing the upstream disposition accurately,
and the row's status genuinely cannot turn on it. Correct call. (One qualification under ISS-05: Doc
03 **v2.11.0** — the version this matrix now pins — downgrades "terminates at `DECISION`" from mapped
behaviour to a *design intention that is not built*; §7 entry 82 still states it as fact.)

**Q16 is not recorded anywhere.** A case-insensitive sweep of Doc 08 for `Q16 | both pass | resolve`
returns one hit, and it is §8's unrelated `COUNTING_ACTION` row. Doc 03 §16 **Q16** (line 2756) and
Doc 02 §13 **(i)** (line 2925) were minted on 2026-08-30 by the *same* review that produced Q15,
both name **FR-090** explicitly, and both are OPEN: "*two competing proposals answering one question
can **both pass**, and no rule says what the party then gets… a gap between FR-090's 'same decision
window' and the ballot model, not an implementation detail… it MUST be answered before the ballot
layer is built*" (owners: PO + architect).

**Does Q16 undermine FR-090's COMPLETE status? No — and the tester would be right to keep it
COMPLETE.** I re-derived this deliberately, because the tempting answer is the wrong one. FR-090's
stated guarantee is that *authorship is public* and that *any Worker-or-above member may submit a
competing proposal with equal standing in the same decision window*. Every clause of that is
separately tested, positively and as capability-absence (UT-0832/0833/0835/0836/0837, UT-0874..0877,
UT-0089, UT-0095). Q16 is about what the party *gets* when both proposals win — an event **after**
the vote, in a layer that does not exist, governed by a rule FR-090 never asks for. Q16 is therefore
**genuinely orthogonal** to the four-rule assessment, and both upstream records say so themselves
("Not a v1 defect — the proposals layer holds no vote"). Answering it must not be done by adding a
window-closing capability, which is precisely the anti-capture absence FR-090's closure rests on.

**But it is still a live open item naming a Must row, and this matrix records nothing about it** —
which is exactly the defect cycle 1 raised as ISS-03, one FR over, from the same routing exercise.
It is arguably sharper here: the row is **COMPLETE**, which reads as "nothing further owed"; the
row's v2.5.4 text says this row and TC-3545 "stand unchanged and **need no revisit**"; and this
matrix already has the convention for exactly this — FR-051 ("MUST be re-verified when the
`treasury` flag ships") and FR-130 ("MUST be revisited when on-chain membership goes live"). Raised
as **ISS-06**, and the fix is a *revisit flag*, not a gap.

### (3) The four count fixes — **two fixed, one fixed-then-rebroken, one wrong.**

**(a) §3.1 Must-FR subtotal — ✅ FIXED and correct.** Line 564 now reads "114 rows · 16 complete · 98
open", labelled v2.5.4, with the derivation. I verified mechanically: a regex count of rows in §3.1
carrying `✅` returns **16** (lines 440, 442, 444, 445, 446, 448, 450, 451, 452, 453, 458, 467, 503,
505, 516, 559). The note's decomposition — "15 rows marked ✅ COMPLETE plus FR-051, marked ✅
COMPLETE (conditional)" — is accurate (FR-051, line 467). The reconciliation "98 open FRs + 24 open
NFRs = 122 open of 138" checks against §3.2's subtotal (24 · 0 · 24) and §6. The sibling
pre-v2.0.0 subtotal (line 488, "54 rows · 12 complete · 42 open") is also still correct: 12 ✅ rows
fall above it, and 54 + 47 + 13 = 114.

**(b) §6 DoD lead-in — ✅ FIXED and correct.** Line 708 now reads "**The current figure is 17 of
134**", with the derivation 13 (v2.2.4 baseline) → +US-0131 (v2.4.0) → +US-0089, US-0100 (v2.5.0) →
+US-0090 (v2.5.1) = 17. The arithmetic checks (13+1+2+1) and each step is traceable to the per-drop
check that made it. The 13-item list is correctly relabelled "**v2.2.4 baseline**". Matches §6's
dashboard (Stories 134 · 17 · 117). *Residual, not raised as an issue:* the per-drop checks below it
still run v2.2.4 → v2.3.0 → **v2.5.0 → v2.4.0**, so a reader meets "14 → 16" before learning where
14 came from. The lead-in now resolves it, so this is presentation only.

**(c) §9 suite row — ❌ the 610/610 half is right; the evidence half is newly wrong.** The
"610/610 green repo-wide" figure and its split (contracts 95 · protocol 150 · sdk 244 · ui 14 ·
indexer 16 · web 91) sum to 610 ✓ and are corroborated — see item (5) below. But "**233 of 465**
carry passing evidence; **232** cases cannot execute" is a **mislabel of Doc 07's figures** that
contradicts this matrix's own dashboard in the flattering direction. → **ISS-02 (High)**.

**(d) §9 G-TRACE instruction — ❌ 33 is wrong. I recounted; the answer is 34.**

I enumerated the live G-TRACE Must rows directly from §3.1 and cross-checked each against §7:

| Source | Enumeration | Count |
|---|---|---|
| **SUMMARY by-reason table** (line 365) | 1 NFR-007 + 33 FRs: FR-074..FR-076 / **FR-078** / FR-081 / FR-087..FR-089 / FR-093..FR-111 / FR-121 / FR-125..FR-129 | **34** |
| **My recount from §3.1 status cells** | NFR-007 (line 576) + FR-074, 075, 076 (498–500), **FR-078 (502)**, FR-081 (507), FR-087, 088, 089 (513–515), FR-093..FR-111 (19 rows, 522–540), FR-121 (550), FR-125..FR-129 (554–558) | **34** |
| **§9 reviewer-qa note** (line 931) | NFR-007, FR-074..FR-076, FR-081, FR-087..FR-089, FR-093..FR-111, FR-121, FR-125..FR-129 — **FR-078 absent** | **33** |

**FR-078 is open.** §3.1 line 502: "☐ **G-TRACE + G-PHASE3** — no DES (Doc 03 §16); no
implementation". §7 **entry 69** (line 808): "| 69 | FR-078 | G-TRACE | No DES assigned … | Tomas
Ferreira | Design next increment |" — live, not struck through. The §9 correction note nonetheless
justifies the omission with "FR-078/FR-079/FR-080 closed": FR-079 and FR-080 are closed; **FR-078 is
not**. 33 also breaks the SUMMARY's own reconciliation (line 368: 47+13+9+5+6+4+5+**34** = 123
against 122 distinct). → **ISS-01 (High)**.

*Probable mechanical cause, worth telling the tester:* §7 entries **68 and 69 are concatenated onto
one physical line** (line 808) — the missing-newline defect carried as cycle-1 ISS-13 and still
unfixed — so FR-078's entry is invisible to any row-wise scan of §7. The formatting Low caused the
counting High.

### (4) ISS-01 (Low) + the second error — **both arithmetic errors FIXED; the third part was not.**

Every sum in the §6 convention note (line 704) now checks, and I verified each independently:

- **463 anchors** = 299 + 70 + 19 + **29** (TS-PARTY incl. TC-3541) + 24 + **22** (TS-PROPOSALS
  TC-3542..TC-3563) = **463** ✅. The 22 TS-PROPOSALS component is present, which is what was
  missing. It also now matches **Doc 07 v2.4.4 §2 line 449 verbatim**, which states the same
  breakdown as Doc 08's convention — so the two documents agree on the anchor count for the first
  time.
- **463 − 1 + 10 = 472** ✅.
- **217 = 129 Pass (inh.) + 88 Pass (obs.)** ✅.
- **Inherited bucket = 55 contract + 28 TS-PARTY + 22 TS-PROPOSALS + 24 TS-MEMBERSHIP = 129** ✅.

**Not fixed (cycle-1 ISS-09 part iii):** the paragraph still ends with two conflicting trailing
clauses — "…because all **20** TS-PROPOSALS cases carry passing evidence and none is Blocked
(TC-3541 is No mechanism…) — **unchanged**, because all **24** new cases carry passing evidence and
none is Blocked." TS-PROPOSALS is **22** everywhere else in the same sentence. → **ISS-07 (Low)**.

### (5) Pins — **all three verified present; TC is now Approved; one pin moved silently.**

| Pin in Doc 08 header | Actual file | Result |
|---|---|---|
| **MTP-TRUMOCRACY v1.0.2** | `docs/04-test-strategy-master-plan.md` = **1.0.2** | ✅ **fixed** (was v1.0.1) |
| **TC-TRUMOCRACY v2.4.4** | `docs/07-test-cases-suites.md` = **2.4.4**, **Status: Approved** (cycle-2 PASS 99%, 0C/0H/0M/1L) | ✅ **fixed, and now Approved** — the cycle-1 concern that the TC pin carried a FAIL is fully discharged |
| **SDD-TRUMOCRACY v2.11.0** | `docs/03-architecture-design-sdd.md` = **2.11.0** (Status: In Review) | ✅ exists — **but the bump v2.10.0 → v2.11.0 is unrecorded in the changelog and unswept.** → ISS-05 |
| SRS-TRUMOCRACY v2.16.0 | `docs/02-requirements-srs.md` = **2.16.0** (In Review) | ✅ exists |
| CODE-TRUMOCRACY v2.4.3 | `docs/06-coding-and-ut.md` = **2.4.3** (Approved 100%) | ✅ exists |
| BKLG-TRUMOCRACY v2.3.0 | `docs/05-product-backlog.md` = **2.3.0** | ✅ exists |

**On the "610/610 green repo-wide (2026-08-30)" claim** — I treated this as a possible fabrication
and checked, because Doc 07 v2.4.4 §9 records only R-15 (2026-08-29, repo-wide, **608**/608) and
R-16 (2026-08-29, `apps/web` only, 91/91), and Doc 07 carries "§9 lacks an R-17 confirmatory re-run
row" as its own accepted Low. **The claim is true.** Three independent 2026-08-30 root `npm test`
runs are recorded in `artifacts/` — `engineer-2026-08-30T0930.md`, `engineer-2026-08-30T1130.md`,
and the Doc 07 v2.4.4 cycle-2 review, which re-ran it independently — all reporting 610/610 with
exactly this per-package split. The defect is only that Doc 08 **cites no source** for a dated
repo-wide observation, and the source a reader would check has no such row. → ISS-12 (Low), not a
soundness finding.

### (6) §8 change-impact — **two rows added (the changelog announces one). Row 902 is sound; row 901 is stale against the pin.**

**Row 902, `COUNTING_ACTION` allowlist (DES-100) → FR-024, FR-090, FR-122, FR-123, FR-132 +
TC-3543/3545/3546/3556.** Appropriately scoped and the right rows: FR-132 is the allowlist-shape
requirement, FR-122/FR-123 are the counting-action rows, FR-024/FR-090 are the two closures the
ruling confirmed. The trigger is a genuine one-way-door — the set is ratified, so a fourth member is
governance work, not a code change. Two citation nits only (ISS-11): the allowlist was
approver-**ratified 2026-08-24** and *confirmed* 2026-08-30 (DECISIONS-2026-08-30 §1.4 item 2), and
the record's §1.5 names "a **DES-100** allowlist amendment and an **FR-024/FR-090** amendment" where
the row says "an amendment to **FR-123** and DES-100".

**Row 901, the v2 seam swap → FR-091, FR-092.** The right instinct — this is exactly what §8 is for,
and cycle-1 ISS-12 asked for it — but the row **describes the superseded v2.10.0 rule**, cites
"Doc 03 v2.10.0 §10.13.13(a)" explicitly, and asserts "**v1 holds no ballot**", while the header
pins **v2.11.0**, which corrects precisely that. It also omits **FR-130**, whose "revisit when
on-chain membership goes live" flag ISS-12 named and which still has no §8 home. → ISS-05, ISS-10.

*Scoping observation:* both new rows are far longer than any pre-existing §8 row (which run to one
line). §8's value is that a reader can scan the trigger column; a 200-word cell in a two-column
lookup table works against that. Not raised as an issue — the content is correct and the alternative
(leaving it only in a row narrative) is worse — but the tester should consider moving the
justification prose into the row narratives and leaving §8 with the trigger and the row list.

### (7) §10 TD-RTM-01 — **independently verified. All three judgement calls are right.**

**The defect is real.** I grepped the repository for `UT-084[1-8]` and read both files:

- `apps/web/test/party-creation.test.tsx` — header "UT-0841..UT-0870 — party-creation web flow";
  defines UT-0841 (emblem field), UT-0842 (emblem-absent error), UT-0843, UT-0844, UT-0845
  (deficiency refusal, FR-011), UT-0846/UT-0847 (collision errors), UT-0848 (BR-020 disclosure).
- `packages/sdk/test/proposals.test.js` — defines UT-0841 (lifecycle sequence, FR-091), UT-0842
  (`advanceStage` arity), UT-0843/UT-0844 (ballot-admission gate), UT-0845 (service never casts a
  vote), UT-0846/UT-0847/UT-0848 (decision trail).

**All eight ids are defined twice.** §10's statement of the defect is accurate in every particular,
including its provenance (the proposals drop reused a block the party-creation web suite already
held) and its effect ("an id is no longer a unique address"; "it will silently corrupt the next
orphan check").

**"No row's status is wrong today" — correct.** I checked each citing row against the file it means:
FR-011 cites "UT-0845 (**inh.** web)" → the web UT-0845 does assert FR-011's deficiency refusal;
FR-010 cites "UT-0841..UT-0847 (**inh.** web)" → the web block does cover the emblem field and
collision errors; FR-091 cites "UT-0839..UT-0842 (**inh.** sdk)" → the sdk block does assert the
lifecycle and arity; FR-092 cites "UT-0846..UT-0848 (**inh.** sdk)" → the sdk block does assert the
trail. Each row's `(web)` / `(sdk)` qualifier resolves the ambiguity, and no cited assertion is
absent. **No status is inflated by the collision.**

**"Does not block the current merge" — correct in substance.** Both suites exist and pass, every
cited assertion is real, and the qualifiers disambiguate. One phrasing point (ISS-15): per CLAUDE.md
RACI, "Merge to trunk" is **A = reviewer-qa**; the tester should record this as its recommendation,
not as a determination.

**Routing to the engineer, not the tester — correct, and important.** `UT-####` ids are minted in
Doc 06 and live in product code; CLAUDE.md makes the engineer the only role that may write or edit
product code, and the tester read-only on it. The alternative — the tester renumbering to make its
own matrix tidy — would be exactly the failure this document exists to prevent. **Recording rather
than repairing is the right call, and creating §10 for it is a better home than the §4 line cycle 1
suggested.** (One residual: §4 still reports a clean ID sweep with no pointer to §10 — ISS-16.)

### (8) Did the rework introduce anything NEW that is wrong? — **Yes: ISS-01 and ISS-02, both in §9. The headline claims themselves are TRUE.**

**"NO row status changed and NO authoritative count moved" — verified TRUE.** Every authoritative
location agrees and matches v2.5.2/v2.5.3 exactly:

| Location | Figures | Result |
|---|---|---|
| SUMMARY table (346–352) | 161 rows (138 Must + 23) · Must 138 · COMPLETE 16 · OPEN 122 · 11.6% · non-Must 4/19 · total 20/141 | ✅ 138+23=161; 16+4=20; 122+19=141 |
| Must-row gaps by reason (358–368) | 47+13+9+5+6+4+5+34 = **123** vs 122 distinct (NFR-007 compound) | ✅ |
| Gate-2 verdict (380–383) | "16 close and 122 do not — 11.6%"; breakdown sums to 123 | ✅ |
| §3.1 subtotal (564) — **new this version** | 114 · 16 · 98 | ✅ and now consistent |
| §6 dashboard (695–701) | FR-Must 114/16/98 · NFR-Must 24/0/24 · Stories 134/17/117 · TC 472/217/255 | ✅ |
| §7 heading (722) | "all 122 open Must rows" | ✅ |
| §9 open-Must row (912) · Gate rule (950) | 122 | ✅ |
| §3.1 ✅ row count (mechanical) | **16** | ✅ matches |

**No row status changed** — FR-079/FR-080/FR-090/FR-130/FR-051 remain COMPLETE, FR-091/FR-092
remain OPEN (G-NOMECH) on unchanged grounds, and no ✅/☐ marker moved anywhere in §3.1 or §3.2.

**But the changelog is not a complete record of the delta.** It announces **one** new §8 row while
**two** were added; it omits the **SDD pin bump v2.10.0 → v2.11.0** entirely from its "Pins
corrected" item; and it silently re-scopes cycle-1 ISS-04 to the suite row alone and ISS-06 to the
reviewer-qa note alone, dropping "12/138" and "15 missing DES links" without recording them as
deferred or disputed. A changelog that lists what was fixed but not what was consciously left is
harder to review the next cycle, not easier. → ISS-13.

---

## 5. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-01** | **High** | T3 / T1 | **§9 sign-off, reviewer-qa row, line 931** | The instruction to the **Accountable** independent verifier now reads "**33 live G-TRACE rows**: NFR-007, FR-074..FR-076, FR-081, FR-087..FR-089, FR-093..FR-111, FR-121, FR-125..FR-129". **The correct figure is 34.** The enumeration omits **FR-078**, which is **☐ OPEN — G-TRACE + G-PHASE3** at §3.1 line 502 and live as §7 **entry 69** (line 808, "No DES assigned — Doc 03 §16"). The correction note justifies the omission by stating "**FR-078**/FR-079/FR-080 **closed**" — FR-079 and FR-080 are closed; **FR-078 is not**, and no version of this matrix has ever closed it. The SUMMARY by-reason table (line 365) states G-TRACE **34 = 1 NFR-007 + 33 FRs** with FR-078 in its enumeration, and the reconciliation note (368) depends on 34 (47+13+9+5+6+4+5+34 = 123). So this version (i) contradicts its own SUMMARY, (ii) removes a live open Must row from the set reviewer-qa is told to verify before merge sign-off, and (iii) asserts in prose that an open Must row is closed — the one class of statement §1 says this document never makes. The changelog compounds it by advertising the number as "enumerated and **derived mechanically from §7**". Probable cause: §7 entries 68 and 69 are concatenated onto **one physical line** (808) by the unfixed ISS-13 newline defect, so entry 69 is invisible to a row-wise scan. | Restore **34 live G-TRACE rows** and reuse the SUMMARY's enumeration verbatim (1 NFR-007 + 33 FRs: FR-074..FR-076, **FR-078**, FR-081, FR-087..FR-089, FR-093..FR-111, FR-121, FR-125..FR-129). Delete FR-078 from the "closed" list in the correction note, leaving FR-079/FR-080/FR-130 closed and FR-077/FR-091/FR-092 reclassified. Split line 808 so entry 69 renders as its own row, then re-derive the count. |
| **ISS-02** | **High** | T3 / T2 | **§9 gate verdict table, "Tests green" row, line 913** | The replacement figures — "of the RTM's own cases, **233 of 465** carry passing evidence; **232** cases cannot execute" — are **Doc 07 v2.4.4 §10's row-anchor accounting relabelled**. Doc 07 §10 (line 919–920) reads "Cases designed **465** (row-anchor count; see §2 for the **472** expanded total)" and "Cases with an implementing **automated test** — **233**"; the blocked bucket is "Blocked / no mechanism — **232**". "Has an implementing automated test" is **not** "carries passing evidence", and Doc 07's own breakdown (§2, lines 442–445) says so explicitly: of the 233, **88 observed + 107 inherited + 16 `apps/web` component cases that exist but were NOT executed**. **233 − 16 = 217** — which is exactly what §6 of this matrix says. The denominators are mixed too: Doc 07 §2 line 449 records the 465-vs-472 difference as an expected 7-row convention difference, and §6 of this very version derives 463 anchors → 472. Net effect: the **Gate-2 decision table now credits 16 cases with passing evidence they do not have** (233 > 217) and reports 23 fewer unexecutable cases (232 < 255) than the matrix's own authoritative dashboard, with no reconciliation between the two — and both errors run in the flattering direction, in a document whose §1 states that nothing is marked complete to make a number look better and whose §6 "Honesty note" refuses to promote file-granularity observations to `obs.` for exactly this reason. Cycle 1 supplied the correct in-document replacements ("217 of 472", "255") verbatim; they were not used. | Either restore "**217 of 472** carry passing evidence; **255** not executed or not executable" (matching §6), **or** keep Doc 07's pair with its true label and a one-line reconciliation: "Doc 07 v2.4.4 §10 records 233 of 465 anchors with an implementing automated test; of those, **217 carry passing evidence** — 16 `apps/web` cases exist but were not executed — against this matrix's expanded total of 472 (Doc 07 §2 records the 7-row convention difference)." |
| **ISS-03** | Medium | T3 | **§9 gate verdict table, row 1, line 911** | "Must rows with a complete chain \| 138 / 138 \| **12 / 138** \| **FAIL**". The correct figure is **16**. Four authoritative locations say 16 — the SUMMARY (348), §6 (695), the newly corrected §3.1 subtotal (564), and a mechanical count of ✅ rows in §3.1 — and only this cell says 12. It is the **first number a Gate-2 approver reads**. Named explicitly as the first of four figures in cycle-1 ISS-04 ("Update line 849 to 16 / 138"); not fixed, and the v2.5.4 changelog silently re-scoped ISS-04 to the suite row only, so the omission is not recorded as deferred either. | Correct to **16 / 138**. Verdict stays **FAIL**. While in the cell, add the version at which it was last recomputed, as recommended at cycle 1. |
| **ISS-04** | Medium | T3 | **§9 sign-off block, Principal Architect row, line 932** | Still reads "Owns the **15 missing `DES` links** (Doc 03 §5.2) and OPEN-02/03/11". This document's own chain-integrity findings (lines 372–373) record both original DES-gap sets as **CLOSED at v1.1.0** — "~~6 Must FRs have no `DES`~~ **v1.1.0: ALL CLOSED**" and "~~9 Must NFRs have no `DES`~~ **v1.1.0: ALL CLOSED**" (DES-073..DES-086). The sign-off block therefore assigns a named Accountable owner a debt the matrix says was paid nine versions ago, immediately beside the reviewer-qa note that *was* corrected in this pass. Cycle-1 ISS-06 required both cells be handled together ("Correct or retire the '15 missing DES links' note"); only one was. | Retire the "15 missing DES links" clause (or restate it as the **34** live G-TRACE rows, once ISS-01 is fixed, which is the current shape of the same debt). Keep OPEN-02/03/11. |
| **ISS-05** | Medium | T1 / T2 / T6 | **Header `Source:` line 9; §3.1 FR-091 (518); §7 entry 82 (823); §8 new row (901)** | The **SDD pin advanced v2.10.0 → v2.11.0** with **no delta sweep and no changelog entry** — the changelog's "Pins corrected" names only MTP and TC. The delta is not neutral. Doc 03 v2.11.0's changelog records: **ISS-05 FIXED** — "v2.10.0 scoped the derivation rule to the v2 seam alone, justified by '**v1 holds no ballot** (ADR-024 §(b))'. That **mis-cited**: ADR-024 §(b) removes on-chain EXECUTION in v1 and puts votes in Postgres; **DES-096 (§10.13.3) specifies a v1 ballot backing outright** (database `castBallot`, SQL `computeTally`)… **The rule now binds the ballot layer in BOTH versions**… The narrower true claim — that the layer built in THIS drop holds no vote — is stated where it belongs." Doc 08 v2.5.4 repeats the superseded framing in three places, two of them **text added in this version**: the FR-091 row ("a **v2-seam** obligation, not a v1 test obligation"), §7 entry 82 ("a build obligation at the v2 swap, not a v1 gap"), and the **new §8 row**, which cites "**Doc 03 v2.10.0** §10.13.13(a)" by name and asserts "**v1 holds no ballot**". Separately, Doc 03 v2.11.0's ISS-07 fix marks "terminates at `DECISION`" as "a **design intention, not built behaviour** (`advanceStage()` consults no outcome and **would advance a defeated window**)"; §7 entry 82 states it as the mapped fact. **No row status is affected** — every adjudication survives under the narrower true claim — so this is a sync defect, not an adjudication defect. But this matrix's own convention (v2.5.2: "the tester read both deltas against every row decided… and confirms neither bears on one") was not applied to a pin it moved. | Record the SDD pin bump in the changelog with a delta statement. Re-scope the derivation-rule language: the rule binds the ballot layer in **both** versions (authority = whatever backing `IBallotService` is bound to — v1 database, v2 chain); the true v1 claim is that **the layer built in this drop holds no vote**. Update §8 row 901's citation to **v2.11.0** and its trigger accordingly. Mark "terminates at `DECISION`" in entry 82 as a **design intention, not built behaviour**, per Doc 03 v2.11.0. |
| **ISS-06** | Medium | T1 / T5 | **§3.1 FR-090 row (516); §8 — omission** | **Doc 03 §16 `Q16` / Doc 02 §13 `(i)` is recorded nowhere in this matrix** (a sweep for `Q16 \| both pass \| resolve` returns only §8's unrelated `COUNTING_ACTION` row). Both were minted **2026-08-30** by the same review that produced Q15 — the item this version correctly added — and both name **FR-090** explicitly: "FR-090 requires competing proposals to be presented with equal standing and voted **in the same decision window**; the ballot model gives each proposal an **independent binary ballot**; DES-104 deliberately exposes **no** window-closing, merging, ranking or primary-selection capability… **two competing proposals answering one question can both pass, and no rule says what the party then gets**… **not a v1 defect**… but it MUST be answered before the ballot layer is built" (Doc 02 §13 (i), Status "OPEN — needed before the ballot layer"; Doc 03 §16 Q16, owners PO + architect). **FR-090's ✅ COMPLETE status is correct and must not change** — Q16 concerns what happens *after* a vote FR-090 does not require and v1 does not hold, so it is orthogonal to all four completion rules, and the fix must not be a window-closing capability, whose absence is what FR-090's closure rests on. The defect is the **silence**: a live open item names a Must row, the row is COMPLETE (which reads as "nothing further owed"), and the row's v2.5.4 text says it "stand[s] unchanged and need[s] **no revisit**". This matrix already has the exact convention for this — FR-051 ("MUST be re-verified when the `treasury` flag ships") and FR-130 ("MUST be revisited when on-chain membership goes live"). Same class as cycle-1 ISS-03, one FR over, from the same routing exercise. | Record Q16 / Doc 02 §13 (i) in the FR-090 row as a **forward revisit flag, explicitly not a gap**: the four rules hold and the row stays **✅ COMPLETE**; the open item is a *requirement decision* owed to the product-owner (with the architect on the mechanism) before the ballot layer is built, and the row **MUST be revisited then**. Add a §8 trigger — "the ballot layer / window-resolution rule being specified → **FR-090, FR-091, FR-092, FR-131**". Do **not** open the row. |
| **ISS-07** | Low | T3 | **§6 TC-count convention note, line 704** | Cycle-1 ISS-09 parts (i) and (ii) are **fixed and every sum now checks** (463 anchors incl. 22 TS-PROPOSALS; 217 = 129 + 88; inherited 55+28+22+24 = 129) — and the anchor breakdown now matches Doc 07 v2.4.4 §2 line 449 verbatim. Part **(iii) was not done**: the paragraph still ends with two conflicting clauses — "…because all **20** TS-PROPOSALS cases carry passing evidence and none is Blocked (TC-3541 is No mechanism…) — **unchanged**, because all **24** new cases carry passing evidence and none is Blocked." TS-PROPOSALS is **22** everywhere else in the same sentence. Also "22 TS-PROPOSALS (Doc 06 **v2.4.2**)" — 20 came from Doc 06 v2.4.1; TC-3562/TC-3563 came from v2.4.2. Stays **Low**: the dashboard table is authoritative and correct. | Delete the duplicated trailing clause; state "all **22** TS-PROPOSALS cases carry passing evidence and none is Blocked (TC-3541 is No mechanism and adds to the gap bucket)". Attribute "20 from Doc 06 v2.4.1 + TC-3562/TC-3563 from v2.4.2". |
| **ISS-08** | Low | T6 | **§3.1 (504, 506, 517, 519, 521), §3.2, §7 (808; the 125/126 pair)** | Carried cycle-1 ISS-13, unfixed. Blank lines inside the §3.1 markdown table still fracture it into independent tables, so every fragment after the first renders **without a header row** — and the blanks sit precisely around the FR-079/FR-080/FR-091/FR-092 rows this version edited. §7 entries **68 and 69** are still two records on **one physical line** (808), as are 125/126. **This is not cosmetic this cycle:** the concatenation is the most likely mechanical cause of ISS-01 — FR-078's gap-log entry is invisible to a row-wise scan of §7, and it is exactly the row the new G-TRACE count drops. | Remove the blank lines inside the §3.1/§3.2 tables; split lines 808 and the 125/126 line so every gap-log entry is its own row. Then re-derive the §9 G-TRACE count from the repaired table. |
| **ISS-09** | Low | T3 | **§3.1 FR-090 (516), FR-091 (518)** | Carried cycle-1 ISS-11, unfixed and not mentioned in the changelog. (i) FR-090: "…is self-declared with no approver, and **is not a verification gate**" is still attributed to `UT-0089`/`UT-0832`; the test that asserts it is **`UT-0834`** (`packages/sdk/test/proposals.test.js` — `verifyEligibility` not called, `service._verifier` undefined, `fileProposal` takes no verifier). The 2026-08-30 decision record itself cites **UT-0834** for exactly this guarantee (§1.6). (ii) FR-091: "a **no-op** is refused, and an **unknown stage** is rejected rather than treated as position zero" is still cited to `(UT-0091, UT-0092)`; both assertions are unlabelled `it` blocks inside the **`UT-0090`** describe. Both cited ranges contain the asserting tests, so nothing is fabricated. | Cite `UT-0834` at the FR-090 clause; add `UT-0090` to the FR-091 citation. |
| **ISS-10** | Low | T5 | **§8, new row 901** | Cycle-1 ISS-12 is only partly discharged. The new v2-seam row covers FR-091 and FR-092 but omits **FR-130**, whose §3.1 row carries "**MUST be revisited when on-chain membership goes live**, at which point the uncapped `Party.join()` becomes a live bypass" — still the only forward-looking flag in the matrix with no §8 home. Per ISS-05 it should also reach **FR-131** once the derivation rule binds the v1 ballot backing. | Extend the row (or add a sibling "on-chain membership goes live" trigger) to include **FR-130**, and **FR-131** once the v1/v2 scoping is corrected. |
| **ISS-11** | Low | T3 | **§8, new row 902** | Citation precision in an otherwise sound row. (i) "The set is confirmed closed at three values (Rathish, **2026-08-30**)" — the `COUNTING_ACTION` allowlist was approver-**ratified 2026-08-24**; 2026-08-30 *confirmed* it (`DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md` §1.4 item 2). (ii) "adding a fourth requires an amendment to **FR-123** and DES-100" — the record's §1.5 names "a **DES-100** allowlist amendment and an **FR-024/FR-090** amendment". Both FRs are already in the row's impacted set, so the substance is right. | Date the ratification 2026-08-24 (confirmed 2026-08-30); name FR-024/FR-090 (and FR-123 if the tester judges it also amendable) per the decision record. |
| **ISS-12** | Low | T3 | **§9 gate verdict table, line 913** | "**610/610 green repo-wide (2026-08-30)**" is **true** — independently corroborated by three 2026-08-30 root `npm test` runs recorded in `artifacts/engineer-2026-08-30T0930.md`, `artifacts/engineer-2026-08-30T1130.md` and `artifacts/reviews/07-test-cases-suites-v2.4.4-technical-cycle2.md`, all with this exact per-package split — but it is **uncited**, and the register a reader would check has no such entry: Doc 07 v2.4.4 §9 records R-15 (2026-08-29, repo-wide, **608**/608) and R-16 (2026-08-29, `apps/web` only), and Doc 07 carries "§9 lacks an R-17 confirmatory re-run row" as its own accepted Low. A dated observation with no run record invites the reader to doubt a claim that is in fact sound. | Cite the run (the 2026-08-30 root `npm test` recorded in `artifacts/`), or note that Doc 07's execution log has no R-17 row yet and this figure is corroborated elsewhere. |
| **ISS-13** | Low | T6 | **Header `Source:` (9–10); changelog (12–66)** | (i) Carried cycle-1 ISS-10(ii): **SRS v2.16.0 and SDD v2.11.0 are both `Status: In Review`**; the header states no approval status, so a reader cannot see that the sync rests on unapproved upstream versions. (The TC pin is now **Approved** — that half is fixed and is a real improvement.) (ii) The changelog is **not a complete record of the delta**: it announces **one** new §8 row while **two** were added; it omits the **SDD pin bump v2.10.0 → v2.11.0** from its "Pins corrected" item; and it silently narrows cycle-1 ISS-04 to the suite row and ISS-06 to the reviewer-qa note without recording that "12/138" and "15 missing DES links" were left open. | Annotate the In-Review pins. Record the SDD bump, the second §8 row, and any required fix consciously deferred — a deferral recorded is reviewable; a deferral omitted is not. |
| **ISS-14** | Low | T6 | **Header, `Version:` line 5** | The bump is **v2.5.3 → v2.5.4**, a **patch**. The `document-review` skill states "FAIL on a Medium+ issue → at least a **minor** bump", and the cycle-1 routing instruction named **v2.6.0** explicitly. The version string is the loop's own audit trail: a patch bump signals a Low-only polish, which this was not. | Number the next version **v2.6.0**. |
| **ISS-15** | Low | T3 / T6 | **§7 entry 82 Owner cell (823); §10 Status cell (946)** | (i) The Owner cell reads "**Tomas Ferreira** (requirement text — **Q15**)". Doc 02 §13 **(h)** assigns the clarification to the **product-owner** and Doc 03 §16 **Q15** to **Priya Raghunathan (PO)**; the same entry's cause cell says "a requirement clarification owed to **the product-owner**". §7's stated convention is "the named requirement owners from Doc 02", and **Tomás** Ferreira does own FR-091's text there — so this is defensible, but a PM working the register will route Q15 to the wrong person, which is the same failure mode as the (now-fixed) ISS-H. Also the spelling in Doc 02 is "Tomás Ferreira". (ii) §10 states "**Does not block the current merge**". Per CLAUDE.md RACI, "Merge to trunk" is **A = reviewer-qa**; this should be recorded as the tester's recommendation. | Name the product-owner (Priya Raghunathan) as Q15's owner alongside the FR-091 requirement owner; correct the accent. Rephrase §10's status as "**the tester's assessment is that this need not block the current merge**; the merge decision is reviewer-qa's". |
| **ISS-16** | Low | T5 | **§4 orphan check (652–664) vs §10 (939–946)** | Cycle-1 ISS-08 asked for the collision to be recorded "as a chain-integrity finding in §4". The tester created **§10** instead — a better home, and I endorse it — but **§4 was not cross-referenced**: it still reports "`TC` citing a non-existent `UT`: **0**" and "`UT` … with no `TC` mapping: **0 material**" with no pointer, while §10 itself warns the collision "will silently corrupt the next orphan check". A reader auditing ID integrity starts at §4. | Add one row or line to §4: "`UT` ids defined twice in different files → **1 range (`UT-0841..UT-0848`) — see §10, TD-RTM-01**". |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL — ISS-01 and
> ISS-02 (High) plus ISS-03..ISS-06 (Medium) are why this cycle is a FAIL.

---

## 6. Routing instruction (to the owning role)

**FAIL → route to the `tester` (Ji-woo Park), the owner of Doc 08.** The reviewer has edited nothing.

Rework into a **new version — v2.6.0** (minor bump; the loop requires at least a minor after a
Medium+ FAIL, and v2.5.4 took a patch), `Status: In Review`, after which this loop re-reviews as
**cycle 3 of 5**.

Priority order:

1. **ISS-01 and ISS-02 first — both are in §9, both were created by this rework, and both point the
   wrong way.** ISS-01 removes a live open Must row (FR-078) from the Accountable verifier's set and
   says in prose that an open row is closed; ISS-02 credits 16 unexecuted cases with passing
   evidence in the gate-decision table. Fix **ISS-08 (the line-808 concatenation) at the same
   time** — it is the mechanical cause of ISS-01, and the count cannot be safely re-derived from a
   §7 whose rows do not render as rows.
2. **ISS-03, ISS-04 — finish cycle-1 ISS-04/ISS-06.** Two cells: `12/138 → 16/138`, and retire "the
   15 missing DES links". Please do not re-scope a required fix silently; if one is disputed, record
   the dispute in the changelog and the next reviewer will weigh it.
3. **ISS-06 — record Q16 / Doc 02 §13 (i) against FR-090 as a revisit flag.** **Do not open the
   row.** FR-090 is correctly COMPLETE and this finding does not change that; the fix is the same
   forward-flag pattern FR-051 and FR-130 already use.
4. **ISS-05 — sweep the SDD v2.11.0 delta** and re-scope the derivation-rule language from "v2-seam
   only" to "binds the ballot layer in both versions; the layer built in this drop holds no vote".
5. **ISS-07..ISS-16 — Lows**; fix in the same pass. ISS-09 and ISS-07(iii) are now on their **third**
   cycle.

**A note on fairness in routing.** The substantive work of v2.5.4 is good: the High is genuinely
gone, the three discharges are correctly recorded, Q15's disposition is faithfully reproduced from
its sources, every arithmetic sum that was broken now checks, and **§10 is a real contribution —
independently verified, correctly reasoned, and correctly routed to the engineer rather than
quietly repaired**. Two of the four Mediums here are carried misses, not regressions. But two Highs
are new, both were introduced by corrections, and both drift optimistic — which is the direction
this document's own §1 says it never drifts. The lesson worth carrying into v2.6.0 is the one the
tester already applied to the §6 note: **a corrected number must be re-derived from the matrix, not
imported from a neighbouring document that counts something else.**

**Explicitly affirmed, so the rework does not disturb it:** Must **138** · COMPLETE **16** · OPEN
**122** · **11.6%** are correct and must be preserved. FR-090 remains **✅ COMPLETE** (Q16
notwithstanding — it is a revisit flag, not a gap); FR-091 remains **☐ OPEN (G-NOMECH)** on the
unwired "per published timelines" clause and on that alone; FR-092 remains **☐ OPEN (G-NOMECH)** on
both its stated grounds; FR-078 remains **☐ OPEN (G-TRACE + G-PHASE3)**. TD-RTM-01's three
judgement calls stand as written.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 2 of 5.
