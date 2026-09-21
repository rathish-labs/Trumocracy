# Document Review Report — Doc 04 Test Strategy & Master Test Plan v1.7.1, technical, cycle 2

> Produced by the **document-review** skill. The reviewer **scores and lists issues only — it never
> edits the reviewed document**. Rework, if any, is the **architect's** (Ravi Deshmukh), as a new
> version. Independence: reviewer is the **tester** (Ji-woo Park, new instance), PM-assigned before
> dispatch per `artifacts/status/REVIEW-ASSIGNMENT-2026-09-20-DEBT-CLOSURE.md`. The reviewer owns
> neither Doc 03 nor Doc 04. §13 assigns the tester `OPEN-20` as an **action item**; being assigned
> an item is not authorship, and `OPEN-20` is untouched this session and not ruled here. **Docs 07
> and 08 are reviewer-qa's** — Doc 07 v2.9.0 §2 is read here only as the **source** Doc 04's §14
> register must agree with, which is a fact about Doc 04; Doc 08 is read only at its header, to
> confirm Doc 04's pin on it is honest.

```
Reviewed document: 04-test-strategy-master-plan.md
Document version: 1.7.1
Review mode: technical
Reviewer role: tester
Score: 97%
Critical: 0
High: 0
Medium: 0
Low: 3
Cycle: 2 of 5
Verdict: PASS
```

---

## 1. Summary (BLUF)

The cycle-1 Medium is **fixed at the site and in the form the required fix specified**, both Lows
are **taken**, `OPEN-30` is **closed on a reconciliation I verified id-for-id against Doc 07 v2.9.0
§2 myself**, and the withdrawal, the counts, the `OPEN-27` closure, the three new `OPEN-##` items
and the retained lapse analysis are carried into v1.7.1 **unchanged**. I proved the last claim
mechanically: reconstructing v1.7.1 from the **pre-session file at `HEAD`** through the v1.7.0 spec
and then the v1.7.1 spec produces a file **byte-identical to `docs/04-test-strategy-master-plan.md`
on disk**, with every FIND matching exactly once. **Nothing outside the 14 declared operations
changed.** The **PATCH** bump is honest: the §14 re-cut mints no `TC`, re-statuses none, records ids
the tester owns and narrows a reservation this document owns — the identical operation to the v1.1.0
and v1.6.0 re-cuts.

**The six sites are clean and there is no seventh.** I swept every occurrence of "carve-out",
"exception", "`anon`-badge" and "PrivacyStatus" in the document and read each in context: five were
swept at v1.7.0, the sixth — §11.2's tooling-register row at line 2802 — is swept at v1.7.1 in the
same annotate-don't-delete form, with rule 4's *"an exception asserts compliance and a failure
asserts work"* quoted at the site and the two strings recorded as **in scope and failing** under
`OPEN-28`, never as an exception. Every other live occurrence is either the withdrawal itself, a
retained-and-marked historical block, or a changelog entry.

**On `OPEN-30` I rule independently, and I rule that taking it here was RIGHT** — and that my own
cycle-1 advice against it was the weaker call. The decisive ground is one neither of us wrote down at
cycle 1: v1.7.1 **had** to advance the Doc 07 bibliographic pin, and §14's standing instruction binds
on any version that advances it. See §5(b). I did not weigh the PM's direction as authority.

The three remaining issues are **Lows**: a paraphrase presented inside quotation marks, and two stale
echoes of other documents' figures. **PASS at 97%.**

## 2. Pass-bar check

- Score ≥ 95%? **yes** (`97%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **yes**
- **Verdict:** `PASS`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 97 | 19.40 | Unchanged in substance from v1.7.0: FR-131 clause (e) and §8 Scenarios 8/9 pinned at Doc 02 v2.17.3; S4's (a)–(d) notice range and S5's four rules preserved; origin (v2.17.0) and currency (v2.17.3) kept apart. |
| T2 Soundness | 20 | 98 | 19.60 | The cite-don't-rule division is held. The `OPEN-30` discharge is sound, its four grounds are recorded rather than assumed, and the departure from the cycle-1 reviewer's advice is **disclosed** — which is the right way to depart. The register-correction-not-normative-change classification is true of the actual ops and I verified it. |
| T3 Traceability & IDs | 20 | 95 | 19.00 | The sixth site swept; §14 reconciled id-for-id against Doc 07 v2.9.0 §2 with every figure independently verified; `OPEN-30` closed with no successor minted; nothing reused or renumbered (verified by reconstruction diff). **All three Lows land here.** |
| T4 Security & failure modes | 15 | 97 | 14.55 | The build-failing control's carve-out count is now one at **every** site including the row that describes the control; the "in scope and failing, never an exception" vocabulary reaches the tooling register, which is where a scan author would actually look. Gate posture inherited unchanged. |
| T5 Completeness & testability | 15 | 97 | 14.55 | The four-step mechanical scan instruction is unchanged and still mechanical; §14's register now describes the allocation that exists rather than one it intends. |
| T6 Convention compliance | 10 | 95 | 9.50 | Annotate-don't-delete observed on **every** operation — mechanically verified. ISO-8601, named owners, RFC 2119. Minus for `ISS-C2-01`: quotation marks around text the cited source does not contain. |
| **Total** | **100** | — | **96.60 → 97%** | — |

## 4. Verification log — what I checked rather than accepted

| Claim (Doc 04 v1.7.1) | Method | Result |
|---|---|---|
| **v1.7.1 is v1.7.0 plus 14 declared ops and nothing else; the ruling and rules are carried verbatim** | Reconstructed `HEAD` → (v1.7.0 spec, 15 ops) → (v1.7.1 spec, 14 ops) with an exact-match applier, then `diff` against the on-disk file | **TRUE — byte-identical, zero diff.** Every FIND matched **exactly once**, including the four long single-line table rows (2615, 2718, 2748, 2758 as numbered pre-application). |
| Annotate-don't-delete on every op (the PATCH claim) | Diffed reconstructed v1.7.0 against v1.7.1: **7 deleted lines** — `Version:`, the first line of `Status:` and `Changelog:`, and four whole table rows. Then chunk-tested each replaced row for retention of its prior text | **TRUE.** The `Status:` and `Changelog:` prior text is retained at 99% / 89% verbatim below the new entry. Of the four rows, **every prose chunk of the prior text is retained verbatim**; the only non-retained fragments are three **label/range cells** (`OPEN-30`'s title, `TS-ADV`'s range, `TS-V1-*`'s band), each of which is an **extension or narrowing whose superseded value is quoted in the appended annotation**. Nothing is lost. |
| **The six carve-out sites are clean; is there a seventh?** | Grepped `docs/04` for `carve-out`, `carve out`, `anon\`-badge`, `badge exception`, `Two carve-outs`, `PrivacyStatus`, `STATE_CONFIG`, `Nothing you do here` — then read **every** hit in context | **SIX CLEAN, NO SEVENTH.** See the site-by-site table below. |
| Site 6 (§11.2, line 2802) swept in the specified form | Read the whole row | **TRUE** — the v1.5.0 annotation retained verbatim and its closing sentence marked SUPERSEDED; **ONE carve-out** restated; the two strings recorded as **in scope and FAILING**, tracked as **`OPEN-28`**, *"MUST NOT be recorded here or anywhere as an exception — because an exception asserts compliance and a failure asserts work"* — rule 4 quoted **verbatim** (checked against line 1302). It also records *why* the row survived the v1.7.0 sweep, rather than excusing it. |
| The "every site" claims now enumerate six | Status block (lines 20-40) and changelog v1.7.1 entry (lines 509-518) | **TRUE** — both state six, both attribute the omission upstream to Doc 03 v2.14.0, and the Status block additionally enumerates **every site this version touched**, which is more than was asked |
| §14 `TS-ADV-01…16` = TC-2600–TC-2752, TC-3564–TC-3567, TC-3570–TC-3576, **TC-3577–TC-3591**; 69 / 49 / 20 | Read `docs/07` §2 suite table (line 1068) **and** the §5 heading (line 1384) | **TRUE — exact match on the range and on all three figures** |
| `TS-V1-*` narrowed TC-3570–TC-3699 → **TC-3592–TC-3699**; 22 drawn, all into `TS-ADV-01…16`; **108 free**; none of the six suites has minted an id | Arithmetic + Doc 07 §2 | **TRUE.** 3576−3570+1 = 7, 3591−3577+1 = 15, **22**. 3699−3592+1 = **108**. Both groups appear in Doc 07 §2 under `TS-ADV-01…16` and nowhere else; **none of the six `TS-V1-*` suites appears in Doc 07 §2 at all.** Independently corroborated by Doc 07's own cycle-1 review, whose ISS-01 computes the free band as TC-3592–TC-3699 from the other side. |
| `TS-ABSENCE` and `TS-SCAFFOLD` re-read and unchanged | Doc 07 §2 rows + §4.3 heading (line 1242) + §5.3 heading (line 1903) | **TRUE** — `TS-ABSENCE` TC-1600–TC-1614, TC-3569 (16/13/3) matches §14's "actual use … 16 cases"; `TS-SCAFFOLD` TC-3470–TC-3488, TC-3568 (20/17/3) matches §14's v1.6.0 figures exactly. Neither moved. |
| **Was the whole §14 table re-read, or only the four rows named?** | Compared **every** §14 row carrying an actual-use figure against Doc 07 v2.9.0 §2 myself | **The table is in agreement.** `TS-GOV2` 70 all Blocked ✓ · `TS-PARTY` 29/28/1 ✓ · `TS-MEMBERSHIP` 24/24/0 ✓ · `TS-PROPOSALS` 22/22/0 ✓ (with §5.6's heading still disagreeing — `OPEN-20`, correctly untouched) · `TS-ADV-22…32` "none minted" ✓. **No row other than the two named has moved.** |
| The three free-band echoes are consistent | §0.4 (lines 1100-1114), §1.4 roll-call (line 1741), §21 Downstream (lines 3267-3275) | **TRUE** — all three now state TC-3592–TC-3699 / 108 free, each superseding rather than rewriting its predecessor |
| `OPEN-30` closed with no successor; no id minted, renumbered or reused | §13 row (line 2914); id sweep across the reconstruction diff | **TRUE** — `OPEN-30` marked **CLOSED v1.7.1**, owner cell "Ravi Deshmukh (**DONE, v1.7.1**)", v1.7.0 body and Impact cell both retained verbatim, **no successor minted** |
| Doc 07 is v2.9.0 **Approved**, PASS 97% (0C/0H/0M/4L, reviewer-qa) | `docs/07` header; `artifacts/reviews/07-test-cases-suites-v2.9.0-technical-cycle1.md` | **TRUE** |
| Doc 08 pin: v2.12.1 In Review, last Approved v2.11.3, not read as settled | `docs/08` header **only**; all 30 Doc 08 references in `docs/04` read in context | **TRUE and honest** — see §5(c) |
| Suite unchanged at 640/640 | `npm test` | **TRUE** — 95 + 151 + 244 + 18 + 16 + 116 = **640 passed, 0 failed**. No code or test changed this session. |
| Gate self-check | `node hooks/run_gates.cjs --audit` | Doc 04 v1.7.1 blocks only for want of **this** report; Doc 08 v2.12.1 blocks on reviewer-qa's cycle-2 report — **expected, not mine, not self-appointed** |

### The six sites, checked one by one — and the search for a seventh

| # | Site | Line | State at v1.7.1 |
|---|---|---|---|
| 1 | §0.5 S5's named `anon`-badge carve-out (the blockquote) | 1323-1345 | **CLEAN** — READ-THIS-FIRST WITHDRAWN banner above; the v1.6.0 carve-out retained verbatim beneath and marked superseded as a whole |
| 2 | §0.5 S5 rule 4's count | 1289-1322 | **CLEAN** — "**ONE carve-out, and only one**"; clause (ii) marked WITHDRAWN; the v1.6.0 "Two carve-outs, and only two" text retained verbatim below and marked superseded |
| 3 | §0.5 S4's scope-before-count sentence | 1177-1190 | **CLEAN** — the sentence is retained and a v1.7.0 annotation immediately below supersedes it **on its count only**, restating S4's own count as unchanged at one and the two as now the same one |
| 4 | §1.4's status roll-call | 1712-1741 | **CLEAN** — v1.7.0 roll-call retained, v1.7.1 roll-call appended below it |
| 5 | §13's `OPEN-27` row and the gate-blocking bullets | 2856-2870, 2911 | **CLEAN** — `OPEN-27` **CLOSED**, successors take its place in a re-cut bullet, prior bullets retained |
| 6 | §11.2's tooling-register row | 2802 | **CLEAN at v1.7.1** — swept as described above. This was the site Doc 03 v2.14.0's enumeration missed. |

**Search for a seventh — negative.** Every remaining occurrence of the carve-out vocabulary in
`docs/04` is one of: the **withdrawal statements** themselves (1124-1128, 1173-1190, 1289-1331);
**retained-and-marked** superseded text (1314-1322, 1343-1414, and the v1.5.0 annotation inside site
6); or a **Status-block / changelog historical entry** (14, 23-32, 42-50, 110, 128, 232-234, 269-272,
331, 403-427, 509-520, 548, 573-606, 688-699, 753-792, 846-850). `PrivacyStatus` appears in two
further live places — §0.2's design-system inventory row (1028) and §13's "not a shipped-copy defect
today" note (2862) — and **neither asserts a carve-out or an exception**. Doc 04 §22's Approvals rows
(3227-3228) are version records, not carve-out statements.

**One cross-document note, routed and not ruled:** `docs/08` carries a historical status-block
description of `OPEN-27` as then-open (lines 839-844). Doc 08 is **reviewer-qa's**, it is mid-rework,
its entry is a dated record of an earlier version's session scope, and it is **not** one of the six
sites Doc 03's instruction addresses. Recorded here only so it is not rediscovered as a surprise;
**no finding is raised against Doc 04 or Doc 08 for it.**

## 5. Rulings the assignment asked for

**(a) Is the Medium genuinely fixed, and in the right form? YES.**

The required fix at cycle 1 had four parts: retain the v1.5.0 annotation as a record; append a v1.7.0
(now v1.7.1) annotation withdrawing the named exception; restate the control's count as **one**;
record the two strings as in-scope-and-failing under `OPEN-28`, **never** as an exception — and then
correct the "every site" claims to enumerate six. **All five are delivered**, and two things are done
better than asked. First, rule 4's governing sentence — *"an exception asserts compliance and a
failure asserts work"* — is quoted **at the site**, so a scan author reading only the tooling
register gets the rule rather than a pointer to it. Second, the row records **why it survived the
v1.7.0 sweep** and attributes the omission upstream to Doc 03 v2.14.0's five-site enumeration, which
is the honest form: the site is fixed here, the instruction was fixed first at Doc 03 v2.14.1, and
both documents say so in the same terms.

**(b) `OPEN-30` — taken here against the cycle-1 reviewer's advice. MY INDEPENDENT RULING: TAKING IT
HERE WAS RIGHT, and my cycle-1 advice was the weaker call. I do not treat the PM's direction as a
defence and did not need it.**

I set the PM's direction aside entirely, as instructed, and tested the decision on its own merits.

1. **My cycle-1 advice was conditional, and its condition was not met.** I wrote: *"Do **not** attempt
   the reconciliation in a Low-only rework."* This rework carries a **Medium**. The architect read the
   sentence accurately rather than conveniently; a conditional instruction whose condition fails does
   not bind.
2. **The deferral's own stated reason expired, and the document says which reason and when.** v1.7.0
   deferred because Doc 07 was mid-rework and *"a register reconciled today is stale before the session
   closes."* Doc 07 closed its loop at **v2.9.0 Approved** (PASS 97%). Reconciling against a settled,
   Approved source is not the thing that was deferred.
3. **And this is the ground that decides it, which neither of us wrote down at cycle 1: the standing
   instruction is triggered by the pin advance, not by the rework's severity.** §14 says *"any future
   version that advances the Doc 07 pin MUST re-read this table against Doc 07 §2 in the same touch."*
   v1.7.1 **had** to advance the Doc 07 bibliographic pin — leaving Doc 07 at v2.8.1 in the version
   that sweeps pins would have been a fresh pin-currency defect, and Doc 08's pin moved in the same
   touch for the same reason. Once the pin moves, the instruction binds. **Had my cycle-1 advice been
   followed literally, v1.7.1 would have had to either freeze a stale Doc 07 pin or advance the pin
   without re-reading the table — and advancing the pin without re-reading the body is precisely the
   defect that produced §14's v1.6.0 Medium.** My advice would have reproduced the prior cycle's
   defect. I record that as my error, not the architect's.
4. **The risk my advice was guarding against does not materialise, and I checked rather than assumed.**
   The worry was that a reconciliation would smuggle normative change into a patch bump. It does not:
   the re-cut **mints no `TC`**, re-statuses none, records ids Doc 07 owns and narrows a reservation
   Doc 04 owns — and I verified every figure independently (see §4). The precedent is exact: v1.1.0 and
   v1.6.0 performed the identical operation on the identical table.
5. **Independent corroboration exists and is not the PM's.** Doc 07's own cycle-1 review computed the
   free band as **TC-3592–TC-3699** from the Doc 07 side and named the architect as the owner of the
   Doc 04 narrowing. Two documents, reached independently, agree on the number.

**On the fourth ground the architect recorded — "the PM's dispatch directs it" — I make one
distinction rather than object.** The project-manager legitimately sets an increment's **scope**; it
does not license a document to overrule a quality finding. Listed as a *scope* ground it is proper,
and it is not doing any work here: grounds 1, 2, 3 and 5 are each sufficient alone. Recording the
departure openly, with reasons a reviewer can test, is exactly how a departure should be made, and I
would have said so even had I disagreed with the outcome.

**(c) Doc 08's framing — HONEST, and nothing more is ruled.** Doc 04 pins Doc 08 as **v2.12.1 (In
Review), last Approved v2.11.3**, says it is mid-rework in the tester's hands, says it is **not read
as settled here**, and states that no statement in v1.7.1 depends on its content. I checked both
halves: `docs/08`'s header reads `Version: 2.12.1` / `Status: In Review … cycle 2 of 5`, and v2.11.3
was the last Approved version; and I read **all thirty** Doc 08 references in `docs/04` — every one is
a version pin, a routing statement about what the tester owes, or a retained historical record.
**Not one reads Doc 08's content.** The framing is accurate and appropriately limited. Nothing further
about Doc 08 is ruled here.

**(d) Both Lows — genuinely discharged, not restated.**

- **ISS-02** asked that §13's `OPEN-30` row record the trigger as **fired on 2026-09-20** and route to
  the PM. v1.7.1 does strictly more: it **closes the item** on a reconciliation, records the trigger
  date, and mints no successor. The routing half is moot because there is nothing left to route.
  Discharged.
- **ISS-03** asked for four words at the point of the bump-rationale claim: *"a carve-out to a
  **specified-but-unimplemented** build-failing control"*. The phrase appears verbatim in the v1.7.1
  Status block, which a reader meets **before** the retained v1.7.0 sentence rather than forty lines
  after it — which was the actual defect. The v1.7.0 sentence is retained unedited, consistent with
  the convention this document applies everywhere else. Discharged.

**Zero Lows carried out of cycle 1.** The claim is true.

## 6. Issues

| ID | Severity | Criterion | Location | Finding | Required fix |
|----|----------|-----------|----------|---------|--------------|
| ISS-C2-01 | Low | T3 / T6 | Status block, **lines 63-66** (and the same paraphrase, unquoted, in §13's `OPEN-30` row) | **A paraphrase is presented inside quotation marks as verbatim text of a cited source.** The document reads: *"Doc 07 v2.9.0's own cycle-1 review raised the staleness as its **ISS-01 (Low)** and routed it **"to Ravi Deshmukh now, while Doc 04 v1.7.1 is open."**"* That sentence does not appear in `artifacts/reviews/07-test-cases-suites-v2.9.0-technical-cycle1.md`. What the report says is *"this version routes no narrowing to the architect, who is holding Doc 04 open in this same session"*, with the required fix naming "(architect, Ravi Deshmukh)". **The substance is faithful and the attribution is correct** — the report does identify the consequence for Doc 04 §14 and does name Ravi Deshmukh — which is why this is a Low. But the quoted words are not the source's, and the quotation is additionally **anachronistic**: it puts "Doc 04 v1.7.1" into the mouth of a report written when Doc 04 was at v1.7.0 and v1.7.1 did not exist. This is the family's recorded Low-severity pattern — a claim true in fact but not verifiable at the cited source (Doc 02 `ISS-C2-03`, 2026-09-20, graded **Low** on the same reasoning) — appearing inside a paragraph whose purpose is to justify a departure from a reviewer instruction, which is exactly where a checkable citation matters most. | Drop the quotation marks and state it as the paraphrase it is — *"…raised the staleness as its ISS-01 (Low), naming the architect (Ravi Deshmukh) as the owner of the Doc 04 §14 narrowing"* — or quote the source verbatim. Either closes it; no other change. |
| ISS-C2-02 | Low | T3 | **§0.4**, the "Live suites" table, lines **1077-1085** (and its lead-in, "Live suites, as they exist in **Doc 07 v2.4.4 §2** (Approved). Ranges verified against that table on 2026-08-31") | **§0.4's suite table is a second echo of Doc 07 §2 and it is now five Doc 07 versions stale — in the very version that re-read §14 against Doc 07 v2.9.0 §2.** Its `TS-SCAFFOLD` row reads **TC-3470–TC-3488 · 19 cases · 16 automated (3 Blocked)**; Doc 07 v2.9.0 §2 reads **TC-3470–TC-3488, TC-3568 · 20 · 17 · 3** — a difference §14's own row records correctly and this table does not. **It is defensible as written**, because the column header names the pinned version and the lead-in dates the verification, which is why this is a Low and not a Medium; and the **free-band** echoes in §0.4, §1.4 and §21 *were* correctly re-cut. But a table headed "**Live** suites" whose figures a reader can only trust by noticing a parenthesised version five increments old is the pin-currency pattern this document sweeps elsewhere, and v1.7.1 is the touch that had Doc 07 v2.9.0 §2 open in front of it. | On the next touch, one annotation beneath the table (not an edit to it, per house style): the four rows state the allocation **as at Doc 07 v2.4.4**; `TS-SCAFFOLD` has since gained **TC-3568** (20 / 17 / 3) and `TS-ADV-01…16` has gained TC-3564–TC-3567, TC-3570–TC-3576 and TC-3577–TC-3591; **§14 is the current register** and governs. |
| ISS-C2-03 | Low | T3 | **§14**, the `TS-FUNC` row, "**131 active FRs, 114 Must** — **Doc 02 v2.16.3** §11" | **A live row cites a Doc 02 version three increments stale.** Doc 02 is **v2.17.3 (Approved)**. **The figures are still correct** — I verified both against Doc 02 v2.17.3 (§11 Counts: "133 FR minted (131 active + 2 superseded)"; §11 session scope: "Must count stays at 114") — so nothing downstream is wrong, which is why this is a Low. It is also **pre-existing**, dating from v1.0.x, and outside both the cycle-1 issue set and §14's standing instruction (which governs the **Doc 07** pin). It is raised only because v1.7.1 is a pin-sweeping version that reached the row's own section. | On the next touch, advance the citation to **Doc 02 v2.17.3 §11** and note that the figures are unchanged since v2.16.3 — a one-line annotation, no figure changes. |

> **Low** issues do not block the pass bar. There are **no** Critical, High or Medium issues.

## 7. Routing instruction

**PASS → the owning role (architect, Ravi Deshmukh) sets `Status: Approved` for v1.7.1.** The SOP
advances. **Three Lows are carried** under this document's established convention — record them in
the Approved status line with the standing *"fix on the next touch"* posture that v1.6.0's carried
Lows used and that v1.7.1 discharged in full. All three are single-site annotations; none warrants a
version of its own, and `ISS-C2-01` in particular is a punctuation change.

**Nothing is routed back.** The Medium is fixed, both cycle-1 Lows are taken, `OPEN-30` is closed on
a verified reconciliation, and the withdrawal, the counts, the `OPEN-27` closure, the three new
`OPEN-##` items, the pin sweep, the retained lapse analysis and the four-step mechanical scan
instruction are carried into v1.7.1 unchanged — which I proved by reconstruction rather than by
reading for it.

**Ordering note for the project-manager:** Doc 03 v2.14.1 was applied first and Doc 04 v1.7.1 second,
as both specs and both cycle-1 reports required. Doc 03's corresponding cycle-2 report is
`artifacts/reviews/03-architecture-design-sdd-v2.14.1-technical-cycle2.md` (**PASS 97%**), and it
rules there — for the record — that the architect was **right** to decline the cycle-1 reviewer's
"published pseudonymously" formulation, on the ground that no design record establishes it.

## 8. Out of scope, as instructed — and not ruled

`OPEN-20` (the `TS-PROPOSALS` §2-vs-§5.6 heading disagreement — untouched this session, and an item
**assigned to** the reviewer's role, which is not authorship); `OPEN-28` and `OPEN-29` (open,
untouched); the `OPEN-27` ruling and everything affirmed at cycle 1 (not re-opened); the clause-(e)
**substance** (a product-owner ruling CONFIRMED by the approver 2026-09-06); and **Docs 07 and 08**,
which are reviewer-qa's. Doc 07 v2.9.0 §2 is read here only as the **source** §14 must agree with —
a fact about Doc 04, not a ruling on Doc 07 — and Doc 08 only at its header, to confirm Doc 04's pin
is honest. The **audit's Doc 08 block is expected and is not mine**; I have not self-appointed.

**One observation for the project-manager, not a finding.** The `document-review` skill's
parenthetical takes a FAIL on a Medium+ issue to "at least a **minor** bump". Both of my cycle-1
reports directed a **patch** bump on the ground that no normative content changes, and reviewer-qa
directed the same for Doc 08 v2.12.0 → v2.12.1 this session. Three documents, three reviewers, one
convention — which departs from the skill's default. Worth a human look at the handbook wording
rather than a per-document deviation each time.
