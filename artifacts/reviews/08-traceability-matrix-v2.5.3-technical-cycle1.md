# Document Review — Doc 08 Traceability Matrix v2.5.3 (technical, cycle 1)

> Produced by the **document-review** skill (a shared capability — not a ninth agent). The reviewer
> **scores and lists issues only — it never edits the reviewed document**. Doc 08 is owned by the
> **tester** (Ji-woo Park); this review was run by the **architect** as a neutral, non-owning role.

```
Reviewed document: 08-traceability-matrix.md
Document version: 2.5.3
Review mode: technical
Reviewer role: architect
Score: 85%
Critical: 0
High: 1
Medium: 6
Low: 5
Cycle: 1 of 5
Verdict: FAIL
```

---

## 1. Summary (BLUF)

Doc 08 v2.5.3 is a **"ruling sync only"** version: it discharges the FR-090 revisit flag and corrects
the FR-091 taxonomy note following the human approver's two rulings of 2026-08-30, while claiming
that **no row status changed and no count moved** (Must 138 · COMPLETE 16 · OPEN 122 · 11.6%).
**The adjudication work is correct and I independently confirm every substantive claim:** the
headline counts genuinely did not move; FR-090 is legitimately still COMPLETE and its "discharged"
narrative adds no claim the tests do not support; FR-091 is correctly still OPEN, and I verified in
the source that `schedule()` in `packages/protocol/src/governance.js` is genuinely never reached
from `packages/sdk/src/proposals.js`; FR-092 is untouched and correctly OPEN on both counts.

**But the sync stopped at §3.1.** The one High finding is that **§7 gap-log entry 82 (FR-091) still
records the taxonomy question as open with "reconciliation owed" and still names the architect as an
owner of that work** — inside the same document whose §3.1 row now states, in bold, that the row
"stays OPEN for **exactly one reason and no other**". A document cannot simultaneously say a
reconciliation is owed and that it was never owed. That is precisely the staleness this version
existed to remove, and it survives in the operational register that assigns owners. Alongside it sit
six Medium issues — four of them **carried, pre-existing count contradictions** that earlier cycles
did not sweep (§3.1 subtotal, §6 DoD lead sentence, the §9 gate-verdict table, the §9 sign-off notes),
one genuine **UT-ID collision** (`UT-0841..UT-0848` denote two different test files and the RTM cites
both meanings), and one **incomplete sync**: the ruling also minted a *new* open item against FR-091
(Doc 02 §13 **(h)** / Doc 03 §16 **Q15**) that the RTM records nowhere.

**Verdict: FAIL.** Route to the tester for v2.5.4. Note for fairness in routing: most of the Medium
issues are **carried defects, not regressions introduced by v2.5.3**; the version's own delta is
substantially correct.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`85%`)
- Critical = 0? **yes** · High = 0? **no** (1) · Medium = 0? **no** (6)
- **Verdict:** `FAIL` — PASS requires both rows to be all "yes".

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| **T1** Requirement coverage | 20 | 85 | 17.0 | Every Must FR/NFR and every RISK still carries a row; the v2.5.3 delta addresses both ruled questions at §3.1 but leaves §7 unsynced and omits the newly minted Doc 02 §13 (h) / Doc 03 §16 Q15 item against FR-091. |
| **T2** Soundness | 20 | 95 | 19.0 | **The strongest part of the document.** The rulings are correctly treated as *confirming* rather than *changing*; no status was inflated to capitalise on a favourable ruling; FR-091's and FR-092's non-closures are re-derived correctly against rule 4. Verified independently in source. |
| **T3** Traceability & IDs | 20 | 70 | 14.0 | Four stale count statements contradict the authoritative figures; one self-refuting §3.1↔§7 contradiction; an unrecorded UT-ID collision across four rows; §9 misdirects the Accountable verifier to a stale row set. |
| **T4** Security & failure modes | 15 | 92 | 13.8 | §5 risk→control→test intact; §7.1 "four gaps that will not close by building harder" is exemplary; the Gate-2 verdict refuses a false green light. No inflation anywhere in the delta. |
| **T5** Completeness & testability | 15 | 85 | 12.75 | No placeholders; evidence chains verified against real test files. Deductions for the (h)/Q15 omission and the §7 non-sync. |
| **T6** Convention compliance | 10 | 88 | 8.8 | ISO-8601 dates ✓, ID scheme ✓, named owners ✓. Deductions: `MTP` source pin stale; stray blank lines fracture the §3.1/§3.2 markdown tables. |
| **Total** | **100** | — | **85%** | — |

---

## 4. Verification performed (against the eight items in the review brief)

### (a) Is "no count moved" true? — **YES for the authoritative locations.**

`git diff` was **not available** (the Bash tool is disabled in this session), so I verified the claim
by full internal-consistency sweep plus comparison against the figures the v2.5.2 cycle-1 report
derived independently. Every authoritative count location agrees and matches v2.5.2 exactly:

| Location | Figures | Result |
|---|---|---|
| SUMMARY table (§ lines 291–297) | 161 rows (138 Must + 23) · Must 138 · COMPLETE 16 · OPEN 122 · 11.6% · non-Must 4/19 · total 20/141 | ✅ internally consistent (138+23=161; 16+4=20; 122+19=141) |
| Must-row gaps by reason | 47+13+9+5+6+4+5+34 = **123** vs 122 distinct (NFR-007 compound) | ✅ |
| Gate-2 verdict paragraph | "16 close and 122 do not — 11.6%"; breakdown sums to 123 | ✅ |
| §6 dashboard table | FR-Must 114/16/98 · NFR-Must 24/0/24 · Stories 134/17/117 · TC 472/217/255 | ✅ (217+255=472; 134−17=117) |
| §7 heading | "all 122 open Must rows" | ✅ |
| §9 "Open Must rows" row · Gate rule | 122 | ✅ |
| §3.1 ✅ row count (mechanical) | **16** COMPLETE rows present in the table | ✅ matches the claimed 16 |

**Conclusion: the changelog's "NO count moved" claim is TRUE.** However the document carries
**four secondary locations with contradictory stale counts** (ISS-04, ISS-05, ISS-06, ISS-07). Those
did not move either — they were already wrong at v2.5.2 and earlier cycles did not sweep them.

### (b) Is FR-090 legitimately still COMPLETE after the ruling? — **YES.**

Re-derived independently against all four §1 completion rules, reading the tests in the repository
rather than their descriptions:

- **Rule 1** — DES-104 named, SCR-12 bound, US-0100 present, TC-3416/TC-3543/TC-3545..TC-3551 cited. ✓
- **Rule 2** — every cited UT located in a real file: `UT-0089`, `UT-0094`, `UT-0095` in
  `packages/protocol/test/proposals.test.js`; `UT-0832..UT-0838` in
  `packages/sdk/test/proposals.test.js`; `UT-0874..UT-0877` in `apps/web/test/proposals.test.tsx`. ✓
- **Rule 3** — Pass (inh.) from Doc 06 v2.4.1/v2.4.3 (Approved, 100%). ✓
- **Rule 4** — each clause has its own asserting test, confirmed in file: equal standing and one
  window for a rephrased question (`UT-0835`, lines 210–245); the first author's total
  capability-absence across nine named methods plus a regex sweep of the prototype surface
  (`UT-0836`, lines 247–283); no weight/rank/priority/standing/primary/featured field and
  `isOriginal` asserted as `[true, false]` provenance only (`UT-0837`, lines 285–308); entry closes
  at the ballot with `WINDOW_CLOSED_TO_ENTRIES` (`UT-0838`, lines 310–331). ✓

**Does the "discharged" narrative quietly add an unsupported claim?** I checked this specifically.
It does not. Every sentence of the new text maps to the recorded ruling
(`artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md` §1.2 verbatim quote, §1.3
two-axis table, §1.4 FR-020 decisive line) and the two-axis distinction is reproduced accurately —
including the load-bearing caveat that "open participation" speaks to the *verification* axis and
does **not** remove the OI-14 Worker-tier condition. The row correctly records that the ruling
**confirms** the built reading rather than changing it, and correctly declines to move any status on
the strength of a confirmation. The only defect here is a citation-precision slip (ISS-11): the
sentence "…and is not a verification gate" is attributed to `UT-0089`/`UT-0832`, when the test that
actually asserts it is **`UT-0834`** ("authoring NEVER calls the eligibility verifier",
`packages/sdk/test/proposals.test.js` lines 173–184, asserting `verifyEligibility` not called,
`service._verifier` undefined, and `fileProposal` taking no verifier). `UT-0834` is inside the row's
cited `UT-0832..UT-0838` range, so this is imprecision, not fabrication.

### (c) Is FR-091 still correctly OPEN, and now for exactly ONE stated reason? — **Correctly OPEN; the "one reason" claim is defensible but incomplete.**

**The unwired-timeline gap is real — verified in source.** `schedule()` is exported from
`packages/protocol/src/governance.js` (line 202). Its only importers repo-wide are
`packages/protocol/test/governance.test.js` and `packages/sdk/src/predict.js` (line 23, used at line
160 to *preview* a schedule). **`packages/sdk/src/proposals.js` does not import or call it** — the
only occurrences of the word "schedule" in that file are two prose comments (lines 7 and 21). The
RTM's claim "`schedule()` exists but is **not wired** into the proposal service" is exactly right.

**The order guarantees really are completely covered.** Verified in
`packages/protocol/test/proposals.test.js`: `STAGE_ORDER` asserted as exactly the eight FR-091 stages
in order and `nextStage(MEASUREMENT) === null` (UT-0090, lines 92–114); skip refused with
`STAGE_SKIPPED` **naming what was skipped** (`skipped: ['DEBATE']`, UT-0091); reversal refused with
`STAGE_REVERSED` (UT-0092); no-op refused with `STAGE_UNCHANGED`; unknown stage refused with
`UNKNOWN_STAGE` rather than defaulting to index 0; every single legal step forward accepted;
capability-absence with `assertStageTransition.length === 2` and a regex sweep for
`force|override|skip|veto|cancel|reset` (UT-0093). At the service layer,
`service.advanceStage.length === 1` and five named escape-hatch methods asserted `undefined`
(`UT-0842`, `packages/sdk/test/proposals.test.js` lines 427–434) — so "no target, no force, no skip
and no actor" is fully supported by arity 1. **The order half is genuinely complete; the automation
half is genuinely absent. The G-NOMECH classification is correct.**

**But "exactly one reason and no other" is stated without acknowledging a second open item that the
same ruling created.** Doc 02 v2.16.0 §13 tracked routing **(h)** — "FR-091 text — terminal outcomes
are unaddressed", owner **product-owner**, Status **"OPEN — clarification owed; does not block v1"**
— and its twin Doc 03 v2.10.0 §16 **Q15** were minted on 2026-08-30 by the very mapping exercise this
version syncs. The RTM mentions neither, anywhere (see ISS-03). It is *defensible* that (h) is not a
reason the **row** is open — it is a requirement-text clarification, not a test gap — but an RTM that
asserts "no other" while being silent on a live open item against the same FR is making a stronger
claim than it has established.

### (d) Is FR-092 untouched and still correctly OPEN on both counts? — **YES.**

The row text is unchanged from v2.5.0/v2.5.2 and both grounds hold in source:

- **(i) No ballot layer.** `UT-0845` (`packages/sdk/test/proposals.test.js` line 510) asserts the
  service never casts, stores or counts a vote. A repo-wide grep for `voteResult`,
  `enactedConsequence`, `implementationStatus` and `measuredOutcome` across all `.js/.jsx/.ts/.tsx`
  returns **zero** matches — four of FR-092's seven enumerated elements have no recording mechanism
  anywhere. ✓
- **(ii) No DES-097 anchoring.** The trail lives in the application store; `UT-0883`
  (`apps/web/test/proposals.test.tsx` lines 374–405) asserts the surface renders `trail-v1-note`
  (`ProposalsAndDebate.tsx` line 533) stating plainly that the record is not yet independently
  checkable. ✓

The append-only property is separately proven (`UT-0846`/`UT-0847`/`UT-0848`). The row's posture —
"the drop does not paper this over" — is accurate and is the right way to record a gap.

### (e) Does the FR-091 row's new v2-seam sentence overreach? — **No. It is the right call.**

The sentence records the derivation obligation (chain is sole authority on ballot state;
`VOTE`/`DECISION`/`IMPLEMENTATION` MUST derive from `PROPOSAL_STATE`) explicitly as a **v2-seam
obligation, not a v1 test obligation**. That framing is what keeps it in bounds. It is also
consistent with this matrix's own established convention for forward-looking re-verification flags —
FR-130 ("MUST be revisited when on-chain membership goes live") and FR-051 ("MUST be re-verified when
the `treasury` flag ships"). An RTM that records *when a closed or open row must be re-examined* is
doing its job, not importing design content.

The one criticism is placement, not presence (ISS-12, Low): the RTM already has a designated home for
"if this changes, re-verify these rows" — **§8 Change-impact view** — and no `PROPOSAL_STATE` / v2
seam row was added there. The obligation therefore lives only in a long row narrative where a future
reader working from §8 will not find it.

### (f) Staleness sweep — **TWO SURVIVORS, both in §7.**

Swept the whole document case-insensitively for `open question | revisit | reconcil | taxonom |
PROPOSING | 10.13.13 | ruling owed | awaiting`. Results, excluding the changelog (which is an
append-only history and correctly superseded by the v2.5.3 entry at its head):

| Line | Location | Survivor | Status |
|---|---|---|---|
| 763 | §7 entry **82** (FR-091, live) | "**Also open:** … a different taxonomy from ADR-008 `PROPOSAL_STATE` (Doc 03 §10.13.13 open question (a)) — **reconciliation owed**"; Owner column still names "**architect (stage-taxonomy reconciliation)**" | **STALE → ISS-01 (High)** |
| 761 | §7 entry **81** (FR-090, retired) | "**Revisit if** the approver rules PROPOSING an FR-123 counting action (Doc 03 §10.13.13 open question (b))" | **STALE → ISS-02 (Medium)** |
| 751 | §7 entry **71** (FR-080, retired) | "Residual **routed to the architect**: Doc 03 §10.12.5 class (i)'s entry for 3.6 is now partly stale" | **STALE** (discharged at Doc 03 v2.9.3 per the §3.1 FR-080 row and the v2.5.2 changelog) → folded into ISS-02 |

Clean elsewhere: the §3.1 FR-090 row frames the flag correctly in the past tense; FR-024 and FR-123
carry no pending-ruling text; §1, §5, §8 are clean.

### (g) Source pins — **three of four verified; one stale.**

| Pin in Doc 08 header | Actual file version | Result |
|---|---|---|
| SRS-TRUMOCRACY **v2.16.0** | `docs/02-requirements-srs.md` = **2.16.0** | ✅ exists (Status: In Review) |
| SDD-TRUMOCRACY **v2.10.0** | `docs/03-architecture-design-sdd.md` = **2.10.0** | ✅ exists (Status: In Review) |
| TC-TRUMOCRACY **v2.4.3** | `docs/07-test-cases-suites.md` = **2.4.3** | ✅ exists (Status: In Review) |
| CODE-TRUMOCRACY **v2.4.3** | `docs/06-coding-and-ut.md` = **2.4.3** | ✅ exists (Approved, 100%) |
| BKLG-TRUMOCRACY **v2.3.0** | `docs/05-product-backlog.md` = **2.3.0** | ✅ exists |
| **MTP-TRUMOCRACY v1.0.1** | `docs/04-test-strategy-master-plan.md` = **1.0.2** | ❌ **stale** → ISS-10 (Low) |

### (h) Is the carried ISS-01 Low still only a Low? — **Yes, but it has grown a second error.**

The authoritative §6 dashboard row is **still correct**: "472 | 217 with passing evidence (129 inh. ·
88 obs.) | 255 not executed or not executable", and 217 + 255 = 472. The convention note beneath it
still opens with the stale "The **195** 'with passing evidence' = **107** Pass (inh.) + 88 Pass
(obs.)" and the stale inherited enumeration (55 + 28 + 24 = 107). Because the table is authoritative
and correct, **Low remains the right severity** — the prior reviewer's reasoning holds.

However, the same note carries a **second, previously unflagged arithmetic error**: it states "Doc 07
at v2.4.1 uses **463** TC row anchors (299 original + 70 TS-GOV2 + 19 TS-SCAFFOLD + 29 TS-PARTY +
24 TS-MEMBERSHIP)" — that enumeration sums to **441**, not 463. The missing 22 are the 20 TS-PROPOSALS
cases plus TC-3562/TC-3563. The derived total 463 − 1 + 10 = 472 is right; the breakdown that is
supposed to justify it is not, and the note also still labels itself "v2.4.1" while the pin is v2.4.3.
Recorded as ISS-09 (Low), with a recommendation that it not be carried a third time.

---

## 5. Issues

| ID | Severity | Criterion | Location (section / line / ID) | Finding | Required fix |
|----|----------|-----------|--------------------------------|---------|--------------|
| **ISS-01** | **High** | T3 / T1 | §7 gap log, **entry 82 (FR-091)**, line 763 — blocking-cause cell **and** Owner cell | The entry still reads "**Also open:** the eight FR-091 stages are a different taxonomy from ADR-008 `PROPOSAL_STATE` (Doc 03 §10.13.13 open question (a)) — **reconciliation owed**", and its Owner column still assigns "**architect (stage-taxonomy reconciliation)**". This directly contradicts the §3.1 FR-091 row (line 463), which in this same version states that the two are complementary, that "**no reconciliation was ever owed**", and that the row "stays OPEN for **exactly one reason and no other**". The document therefore asserts and denies the same fact, and §7 — the operational register that assigns named owners — allocates work to the architect that the approver ruled does not exist. **This is exactly the staleness v2.5.3 was created to remove**, surviving in the section a PM or architect would actually work from. | Rewrite entry 82's blocking cause to a **single** cause — the unwired "per published timelines" clause — and record the taxonomy question as **RULED 2026-08-30, complementary, no reconciliation owed, published stage set unchanged**. Remove "architect (stage-taxonomy reconciliation)" from the Owner column, leaving `Tomas Ferreira (requirement) · engineer (timeline wiring)`. |
| **ISS-02** | Medium | T3 | §7 gap log, **entry 81 (FR-090, retired)**, line 761; and **entry 71 (FR-080, retired)**, line 751 | Two retired entries carry forward-looking conditionals that are now discharged. Entry 81: "**Revisit if** the approver rules PROPOSING an FR-123 counting action (Doc 03 §10.13.13 open question (b))" — the approver ruled the other way on 2026-08-30 and the §3.1 row records the flag as DISCHARGED. Entry 71: "Residual **routed to the architect**: Doc 03 §10.12.5 class (i)'s entry for 3.6 is now partly stale" — discharged at Doc 03 v2.9.3, as the §3.1 FR-080 row and the v2.5.2 changelog both state. §7 is not being kept in sync with §3.1 as a matter of pattern. | Entry 81: replace the conditional with "**Revisit flag DISCHARGED — RULED 2026-08-30** (PROPOSING is not an FR-123 counting action; the closure basis is confirmed)". Entry 71: mark the routed residual **DISCHARGED at Doc 03 v2.9.3**. |
| **ISS-03** | Medium | T1 / T5 | §3.1 FR-091 row (line 463) and §7 entry 82 (line 763) — **omission** | The 2026-08-30 ruling minted a **new** open item against FR-091: **Doc 02 v2.16.0 §13 tracked routing (h)** — "FR-091 text — terminal outcomes are unaddressed" (a defeated/cancelled window terminates at `decision`; FR-091's text does not say so), owner **product-owner**, Status **"OPEN — clarification owed; does not block v1"** — mirrored as **Doc 03 v2.10.0 §16 Q15**. Doc 08 v2.5.3 records it **nowhere** (grep for `Q15`, `terminat`, `routing (h)`, `DEFEATED`, `CANCELLED` returns nothing relevant). The RTM is "the single place the whole chain is verified" (§1); a live open item against an open Must FR must appear here, particularly when the row simultaneously asserts "exactly one reason **and no other**". | Record (h)/Q15 in the FR-091 row and in §7 entry 82 as an **open requirement clarification owned by the product-owner that is not a reason this row is open** (v1 holds no vote, so no window can be defeated). Retain the "one reason" statement, but qualify it against (h) explicitly rather than by silence. |
| **ISS-04** | Medium | T3 | **§9 Gate verdict table**, lines 849 and 851 | The gate-decision table — the table a Gate-2 approver reads — carries four stale figures. Row 1: "Must rows with a complete chain \| 138 / 138 \| **12 / 138**" — the correct figure is **16** (SUMMARY, §6 dashboard, Gate-2 verdict paragraph and the mechanical count of ✅ rows in §3.1 all say 16). Row 3: "**542/542** green … contracts 95 · protocol **126** · sdk **220** · ui 14 · indexer 16 · web **71**" — superseded at v2.5.1 by **610/610** (contracts 95 · protocol 150 · sdk 244 · ui 14 · indexer 16 · web 91); "of the RTM's own cases, **195 of 449** carry passing evidence" — now **217 of 472**; "**127** cases cannot execute" — now **255**. The errors understate progress so they produce no false green light, but a matrix whose entire function is accurate counting cannot carry a wrong number in its own gate table. | Update line 849 to **16 / 138**. Update line 851's suite figures to 610/610 with the v2.5.1 per-package breakdown, "217 of 472 carry passing evidence", and "255 cases cannot execute". Verdicts stay FAIL throughout. |
| **ISS-05** | Medium | T3 | **§3.1 subtotal**, line 509 | "**Must FR subtotal (v2.2.2): 114 rows · 12 complete · 102 open.**" A mechanical count of the table immediately above it returns **16** ✅ rows, and §6 records FR-Must as 114 / **16** / **98**. The "(v2.2.2)" label does not rescue it: the sibling subtotals at §3.2 ("(v2.0.0)" 24/0/24) and §3.3 ("(v2.2.4)" 23/4/19) are both still *correct*, so a reader reasonably reads all three as current. A reader who stops at the end of §3.1 leaves with the wrong completion count. | Recompute to "**Must FR subtotal (v2.5.3): 114 rows · 16 complete · 98 open.**" and re-label. |
| **ISS-06** | Medium | T3 | **§9 sign-off block**, lines 869–870 (reviewer-qa and Principal Architect notes) | The notes column misdirects the **Accountable** independent verifier. Line 869 instructs reviewer-qa to verify "these 122 gaps (including **40 G-TRACE rows** FR-074..FR-081/FR-087..FR-111/FR-121/FR-125..FR-130 and NFR-007)". G-TRACE is **34**, and that enumeration includes **seven rows that have left the class** — FR-077, FR-091, FR-092 (now G-NOMECH) and FR-079, FR-080, FR-090, FR-130 (now COMPLETE); the enumeration as written spans 41 rows. Line 870 tells the Principal Architect they own "the **15 missing DES links** (Doc 03 §5.2)" — a v1.1.0-era figure the document's own chain-integrity findings supersede. | Correct line 869 to **34 G-TRACE rows** with the exact enumeration already given in the SUMMARY by-reason table (1 NFR-007 + 33 FRs: FR-074..FR-076/FR-078/FR-081/FR-087..FR-089/FR-093..FR-111/FR-121/FR-125..FR-129). Correct or retire the "15 missing DES links" note on line 870. |
| **ISS-07** | Medium | T3 | **§6 Definition-of-Done paragraph**, lines 652–654 | The lead sentence reads, unqualified and in the present tense, "A story is done only when its RTM row is complete. **13 of 134 stories** meet that bar", followed by a 13-name list. The §6 dashboard three lines above says **17**. The correcting paragraphs that follow are out of chronological order (v2.3.0 → v2.5.0 → v2.4.0), so a reader must assemble the current figure from four paragraphs, the first of which is wrong. DoD is a CLAUDE.md gate concept; the RTM should state it once, correctly. | Rewrite the lead sentence to **17 of 134** with the current story list, and demote the per-version DoD checks to a clearly labelled chronological history beneath it. |
| **ISS-08** | Medium | T3 | Cross-cutting: §3.1 FR-010 (line 384), FR-011 (line 385), FR-091 (line 463), FR-092 (line 465); §7 entries 82–83; §4 orphan check (line 604 ff.) | **`UT-0841` … `UT-0848` are used twice in the repository for different tests.** `apps/web/test/party-creation.test.tsx` (header: "UT-0841..UT-0870 — party-creation web flow") defines UT-0841 emblem field, UT-0842 emblem-absent error, UT-0845 deficiency refusal, UT-0846/UT-0847 collision errors, UT-0848 BR-020 disclosure. `packages/sdk/test/proposals.test.js` independently defines UT-0841 lifecycle sequence, UT-0842 `advanceStage` arity, UT-0845 "service never casts a vote", UT-0846/UT-0847/UT-0848 decision trail. **The RTM cites both meanings**: FR-010 cites "UT-0841..UT-0847 (**inh.** web)" and FR-011 cites "UT-0845 (**inh.** web)", while FR-091 cites "UT-0839..UT-0842 (**inh.** sdk)" and FR-092 cites "UT-0846, UT-0847, UT-0848 (**inh.** sdk)". This violates CLAUDE.md's ID scheme ("stable — **never reuse or renumber**") and weakens completion rule 2 ("a `UT-####` that exists in the repository") for **FR-011, a COMPLETE Must row**. §4's orphan check reports no ID problem. The in-row `(web)`/`(sdk)` tags let a careful reader disambiguate, which is why this is Medium and not High. | Record the collision as a chain-integrity finding in §4 and route the renumbering to the **engineer** (Doc 06 owns `UT-####` minting) — the RTM must not silently renumber. Until it is resolved, make the `(web)` / `(sdk)` qualifier mandatory on every citation in the `UT-0841..UT-0848` range. |
| **ISS-09** | Low | T3 | **§6 TC-count convention note**, line 649 | Carried from the v2.5.2 review (ISS-01), **plus a second, newly identified arithmetic error**. (i) The note still opens "The **195** 'with passing evidence' = **107** Pass (inh.) + 88 Pass (obs.)" and enumerates the inherited bucket as 55 + 28 + 24 = 107, while the authoritative table says 217 = 129 + 88. (ii) The note states "Doc 07 at **v2.4.1** uses **463** TC row anchors (299 + 70 + 19 + 29 + 24)" — that enumeration sums to **441**; the missing 22 are the 20 TS-PROPOSALS cases plus TC-3562/TC-3563. The derived 463 − 1 + 10 = 472 is correct; its justification is not. The note also still self-labels "v2.4.1" while the pin is v2.4.3. (iii) The paragraph ends with a duplicated "— **unchanged**, because all 24 new cases carry passing evidence and none is Blocked" clause. Stays **Low** because the dashboard table is authoritative and correct. | Update to "The 217 'with passing evidence' = 129 Pass (inh.) + 88 Pass (obs.)"; enumerate the inherited bucket as 55 contract + 28 TS-PARTY + 24 TS-MEMBERSHIP + 22 TS-PROPOSALS = 129; correct the anchor enumeration to include TS-PROPOSALS (441 + 22 = 463); re-label to v2.4.3; delete the duplicated trailing clause. Do not carry this a third time. |
| **ISS-10** | Low | T6 | Header `Source:` block, lines 9–10 | Source-pin hygiene. (i) **`MTP-TRUMOCRACY v1.0.1` is stale** — `docs/04-test-strategy-master-plan.md` is at **v1.0.2** (2026-08-21, §Z6 ceremony-burden wording per ADR-022). Nothing in v1.0.2 bears on the Gate-2 blockers this matrix cites, hence Low. (ii) Three pins — SRS v2.16.0, SDD v2.10.0, TC v2.4.3 — are all **Status: In Review**, not Approved; the v2.5.2 changelog was explicit that its upstream pins were "Approved at 100%", and v2.5.3 makes no equivalent statement either way. (iii) The pinned **TC v2.4.3 currently carries a FAIL cycle-1 verdict** (`artifacts/reviews/07-test-cases-suites-v2.4.3-technical-cycle1.md`, 92%, 0C/1H/0M/1L — TC-3545's own Expected-result text still says a ruling is flagged), so that pin will be superseded by v2.4.4. | Advance the MTP pin to v1.0.2. State the approval status of the three In-Review pins so a reader knows the sync rests on unapproved upstream versions, and re-pin TC to the version that passes its review. |
| **ISS-11** | Low | T3 | §3.1 FR-090 row (line 461) and FR-091 row (line 463) | UT citation precision, in a document that is otherwise meticulous about naming the exact UT beside each clause. (i) FR-090: "…is self-declared with no approver, and **is not a verification gate**" is attributed to `UT-0089`/`UT-0832`; the test that actually asserts it is **`UT-0834`** (verifier not called, `service._verifier` undefined, `fileProposal` takes no verifier). (ii) FR-091: "a **no-op** is refused, and an **unknown stage** is rejected rather than treated as position zero" is attributed to `(UT-0091, UT-0092)`; both assertions are unlabelled `it` blocks inside the **`UT-0090`** describe, not inside UT-0091/UT-0092. Both cited ranges do contain the asserting tests, so nothing is fabricated. | Cite `UT-0834` at the FR-090 "not a verification gate" clause and add `UT-0090` to the FR-091 no-op / unknown-stage citation. |
| **ISS-12** | Low | T5 | §8 Change-impact view (lines 831–840) — **omission** | The FR-091 row records a new v2-seam derivation obligation (chain is sole authority on ballot state; `VOTE`/`DECISION`/`IMPLEMENTATION` MUST derive from `PROPOSAL_STATE`). §8 is this matrix's designated home for "if this changes, these rows must be re-verified", and it gains no row for the v2 seam / `PROPOSAL_STATE`. The same omission exists for FR-130's "revisit when on-chain membership goes live" flag, so this is a consistent gap rather than a new one. | Add a §8 row: "The v2 on-chain seam / `PROPOSAL_STATE` becoming authoritative → **FR-091** (stage derivation), **FR-092** (ballot layer + DES-097 anchoring), **FR-130** (uncapped `Party.join()` becomes a live bypass)". |
| **ISS-13** | Low | T6 | §3.1 (lines 394, 449, 451, 462, 464, 466, 508), §3.2 (line 537), §7 (line 762) | Stray blank lines inside the markdown tables fracture each table into several independent tables, so every fragment after the first renders **without a header row**. Several of these blanks surround the FR-090/FR-091/FR-092 rows edited in this version. Separately, §7 entries 68/69 (line 748) and 125/126 (line 806) are two records concatenated onto one physical line by a missing newline after a trailing `|`. | Remove the blank lines inside the §3.1/§3.2/§7 tables and split the two run-together gap-log lines so every row renders under its header. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL — ISS-01 (High)
> plus ISS-02..ISS-08 (Medium) are why this cycle is a FAIL.

---

## 6. Routing instruction (to the owning role)

**FAIL → route to the `tester` (Ji-woo Park), the owner of Doc 08.** The reviewer has edited nothing.

Rework into a **new version**. Because the surviving issues include one High and six Mediums, the
rework is at least a **minor** bump — **v2.6.0** — with `Status: In Review`, after which this loop
re-reviews as **cycle 2 of 5**.

Priority order for the rework:

1. **ISS-01 (High) first.** §7 entry 82 is the only issue that makes the document self-contradictory.
   Fixing it is a two-cell edit and it is what this version set out to do.
2. **ISS-02, ISS-03** — finish the ruling sync: discharge the two stale §7 conditionals, and record
   Doc 02 §13 (h) / Doc 03 §16 Q15 against FR-091.
3. **ISS-04, ISS-05, ISS-06, ISS-07** — one systematic sweep of every count statement outside the
   SUMMARY and §6 dashboard. These are **carried defects, not regressions**; they were already wrong
   at v2.5.2 and earlier cycles did not sweep them. Recommend the tester run one pass over *every*
   numeric assertion in the document and label each with the version at which it was last recomputed.
4. **ISS-08** — record the `UT-0841..UT-0848` collision in §4 and **route the renumbering to the
   engineer**; the tester must not renumber `UT-####` IDs (Doc 06 owns them).
5. **ISS-09..ISS-13** — Lows; fix in the same pass since the document is open anyway.

**No status change and no count change is implied or required by any of these issues.** Must 138 ·
COMPLETE 16 · OPEN 122 · 11.6% are correct and must be preserved; the fixes bring the document's
stale secondary statements *into line with* those figures rather than moving them.

**Explicitly affirmed, so the rework does not disturb it:** FR-090 remains **✅ COMPLETE** with its
revisit flag correctly discharged; FR-091 remains **☐ OPEN (G-NOMECH)** on the unwired
"per published timelines" clause; FR-092 remains **☐ OPEN (G-NOMECH)** on both its stated grounds.
All three adjudications were independently re-derived against the four completion rules and against
the source, and all three are correct.

## 7. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5.
