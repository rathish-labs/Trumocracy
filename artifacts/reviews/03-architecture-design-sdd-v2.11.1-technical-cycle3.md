# Document Review — Doc 03 SDD v2.11.1 (technical, cycle 3)

<!-- MACHINE-PARSEABLE METADATA BLOCK — the SubagentStop hook reads these exact fields -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.11.1
Review mode: technical
Reviewer role: sre (neutral — architect Ravi Deshmukh owns Doc 03)
Score: 90%
Critical: 0
High: 0
Medium: 1
Low: 5
Cycle: 3 of 5
Verdict: FAIL
```

```
Date:          2026-08-30
Owning role:   architect (Ravi Deshmukh)
Prior cycles:  artifacts/reviews/03-architecture-design-sdd-v2.10.0-technical-cycle1.md (FAIL 80%, 0C/2H/4M/3L)
               artifacts/reviews/03-architecture-design-sdd-v2.11.0-technical-cycle2.md (FAIL 84%, 0C/0H/5M/4L)
               — cycle 2 re-read in full before this review
Cross-checked: docs/08-traceability-matrix.md v2.6.0 · docs/02-requirements-srs.md v2.16.2 ·
               docs/13-project-plan.md · packages/contracts/src/core/Governor.sol ·
               packages/protocol/src/governance.js · packages/protocol/src/proposals.js ·
               packages/sdk/src/constants.js · packages/sdk/src/proposals.js
```

---

## 1. Summary (BLUF)

**All nine cycle-2 findings are fixed at the locations they were raised, and every one of them is
fixed correctly.** I verified each against source, not against the changelog: §16 Q15 now carries
the narrow true claim and the mis-citation is gone from the whole live document; §5.2's DES-105 row
now binds the seam rule in both versions and cites DES-096; the reconciliation sub-table carries
**three** representations with `PROPOSAL_STATE_ENUM` correctly identified as the ordinal-indexed
decode array and the reorder hazard named, and Q17 now names that case as the one to write first;
the `Cancelled` row no longer asserts a window termination and correctly states that
`cancelDuringDiscussion(proposalId, …)` withdraws one proposal; and the §15 FR-107 row now agrees
with Doc 08 v2.6.0 instead of contradicting it. All four Lows are fixed too, including the genuinely
useful new warning that **DES-096 exposes no ballot-state accessor**, which I confirmed against
§10.13.3. I re-verified every enum value, member count, line number and signature the new text
asserts; they are all exact. The score moves 84% → 90%.

**The verdict is FAIL on a single Medium, and it is the same pattern this version's own changelog
names as "the lesson of this cycle": the correction stopped one location short.** §15's new FR-107
row says, in bold, *"Do not read this as a DES assignment … Doc 08 correctly records FR-107 as
`G-TRACE` with DES = none"* — while **§5.2's DES-106 row still lists FR-107 in its `Satisfies`
column** (line 908) and **§10.13.13's DES-106 heading still reads "(FR-092, FR-107)"** (line 2369).
§15 itself declares §5.2 to be the register that supplies the `FR/NFR → DES` half of the chain
(line 2722). The document therefore now asserts and denies the same traceability link about a
**Must** row that Doc 08 holds **OPEN** on exactly that missing link. That is not a leftover
phrasing problem: it is the register a tester reads to close a `G-TRACE` gap.

Nothing else rises above Low, and nothing in §10.13.13(a) needs further rework.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`90%`)
- Critical = 0? **yes** · High = 0? **yes** · Medium = 0? **no** (1)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 92 | 18.4 | Every §15 coverage claim re-verified against **Doc 08 v2.6.0** (not v2.5.4): FR-079, FR-080, FR-090/FR-024, FR-091, FR-092 and FR-107 all now agree exactly, including the "exactly ONE GAP" wording on FR-091 and the "two independent grounds" on FR-092. Q15/Q16/Q17 carry named owners and needed-by. Deductions: the §5.2 `Satisfies` claim for FR-107 survives (ISS-01); the FR-107 gap class is under-reported (ISS-04); the FR-090 row is silent on Doc 08 v2.6.0's new revisit flag (ISS-06). |
| T2 Soundness | 20 | 90 | 18.0 | The seam rule is now stated identically and in both versions at §5.2 and §10.13.13; the three-way enum reconciliation is complete and every value/count/citation is exact; the `Cancelled` row matches `Governor.cancelDuringDiscussion`'s actual signature and effect; the DES-096 unsatisfiability is disclosed rather than left to the implementer. Deductions: the FR-107 contradiction (ISS-01); the present-tense overclaim about the SDK decode array (ISS-02). |
| T3 Traceability & IDs | 20 | 84 | 16.8 | Five of six §15 rows verified exactly against Doc 08 v2.6.0; gap-log entry 98 and owner Erik Lindqvist verified; the mint version corrected to v2.9.0 and the DES-104/DES-105 attribution corrected. Deduction: ISS-01 is a traceability defect in the register of record, and ISS-04 under-reports a recorded gap class. |
| T4 Security & failure modes | 15 | 92 | 13.8 | Materially stronger: the ordinal-decode hazard is now named, ranked against the other two mirrors and routed to a differential case; the drift failure mode binds both versions; the v1 half of the rule is disclosed as presently unsatisfiable. Deduction: the owed DES-096 change is recorded only in a prose warning — not in §13 (the debt register), not in §16, not in §10.13.3 — and carries no named owner (ISS-03). |
| T5 Completeness & testability | 15 | 92 | 13.8 | Q17 now names the case to write first and its owner; every code citation re-verified exact (`Governor.sol:41-49`, `:396-397`, `:408`; `governance.js:19-28`, `:210`; `constants.js:42`; `sdk/proposals.js:458-475`). Deductions: Q17's lead sentence still counts two (ISS-05); the owed DES-096 accessor has no needed-by row anywhere (ISS-03). |
| T6 Convention compliance | 10 | 96 | 9.6 | §16 rows now run Q15 → Q16 → Q17; Q17's owner is a named person whose title matches Doc 13 ("Samuel Oyelaran — Engineering Lead"); patch bump defensible (every Medium fix is a correction inside existing content); `Status: In Review`; ISO-8601; RFC 2119 precise; corrections recorded in place in eight of nine cases. Minor deduction: Q17's substantive widening is the one correction not recorded in place. |
| **Total** | **100** | — | **90.4 → 90%** | — |

## 4. Issues (summary — full findings in §5)

| ID | Severity | Criterion | Location | Finding (one line) |
|----|----------|-----------|----------|--------------------|
| ISS-01 | Medium | T3 / T2 / T1 | §5.2 DES-106 row (line 908) + §10.13.13 DES-106 heading (line 2369) vs §15 (line 2814) | §15 says "Do not read this as a DES assignment … DES = none" for FR-107 while §5.2's `Satisfies` column and §10.13.13's heading both still assign it — the same correction one location short, on a Must row Doc 08 holds OPEN for that exact missing link. |
| ISS-02 | Low | T2 | §10.13.13(a) divergence (iii), lines 2450–2455 | "This is the **live** hazard … this array **is how** the chain's answer reaches the application" — `PROPOSAL_STATE_ENUM` has zero call sites repo-wide; the hazard is real but prospective, and this document's own house rule is to mark unbuilt things as intentions. |
| ISS-03 | Low | T4 / T5 | §10.13.13(a) warning, lines 2515–2523 | The newly-recorded owed design change ("DES-096 MUST gain a state accessor") lives only in a prose warning inside another element's section: not in §13's debt register, not in §16, not in §10.13.3, and with no named owner or needed-by. |
| ISS-04 | Low | T1 / T3 | §15 FR-107 row (line 2814) + header changelog (line 42) | Both say Doc 08 records FR-107 as `G-TRACE`; Doc 08 v2.6.0 records `G-TRACE + G-PHASE3`, and the row then contrasts with "a build being owed" — the half it omitted. |
| ISS-05 | Low | T5 | §16 Q17 (line 2836) | "**Neither** ballot-state enum is covered …" and "`differential.test.mjs` exercises **neither**" still count two, in the row corrected this version for counting two; §10.13.13 correctly says "none of the three". |
| ISS-06 | Low | T1 | §15 DES-104 row (line 2811) | Reports "FR-090 RTM row CLOSED (Doc 08 v2.5.0)" without noting that Doc 08 **v2.6.0** attaches a new Medium revisit flag to that row sourced from this document's own Q16; the sibling FR-091 row does carry its Q cross-references. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Full findings

### ISS-01 (Medium) — §15 denies an FR-107 → DES-106 link that §5.2 and §10.13.13 still assert

**Locations.**

- §15, FR-107 row (line 2814): *"**partially served by DES-106 — NOT discharged by it** … ⚠ **Do
  not read this as a DES assignment.** … **Doc 08 correctly records FR-107 as `G-TRACE` with
  DES = none** (§3.1; gap-log entry 98, owner Erik Lindqvist)"*.
- §5.2, DES-106 row (line 908), **`Satisfies` column**: `FR-092, FR-107, BR-014, BR-019`.
- §10.13.13, DES-106 subsection heading (line 2369): *"**DES-106 — the permanent decision trail
  (FR-092, FR-107).**"*

**Verified first — the new §15 row is right.** I checked it against **Doc 08 v2.6.0**, not v2.5.4.
Doc 08 §3.1 line 583 records FR-107 with `DES: none · SCR: none` and status
`☐ G-TRACE + G-PHASE3 — no DES (Doc 03 §16); no implementation`; gap-log entry 98 (line 887) reads
*"FR-107 · G-TRACE · No DES assigned — Doc 03 §16; append-only state-transition lifecycle not
designed (FR-085 carve-out pending too) · Erik Lindqvist · Design next increment"*. The owner, the
entry number, the section reference and the substantive point — that DES-106 satisfies FR-107's
append-only property *for the decision trail only*, while FR-107 is platform-wide and undesigned —
are all correct. Cycle-2 ISS-05 is fixed where it was raised.

**What is wrong.** The document now says two opposite things about the same link, in the two places
that matter most:

| Location | Says | Read by |
|---|---|---|
| §5.2 DES-106 row | DES-106 **satisfies** FR-107 | the element register — an implementer or tester learning what DES-106 covers |
| §10.13.13 DES-106 | "the permanent decision trail (FR-092, **FR-107**)" | the normative specification |
| §15 FR-107 row | "**Do not read this as a DES assignment** … DES = none" | the traceability section |

§15 is not a neutral bystander here: its own lead-in (line 2722) states *"**§5.2 provides the
`FR/NFR → DES` half**"*. The section that names §5.2 as the source of the DES link is the section
that now denies the link §5.2 publishes.

**Why this is Medium and not cosmetic.** FR-107 is a **Must** row in Doc 08 §3.1, currently OPEN,
and the *only* thing holding its `G-TRACE` half open is the absence of a DES. `G-TRACE` means a DES
is owed **from the architect**; the row closes when Doc 03 supplies one. A tester doing a rule-1
chain check by reading §5.2's `Satisfies` column — the documented procedure — would find `DES-106`
against FR-107 and could close a gating Must row on a link the architect has, in another section of
the same document, explicitly disclaimed. Doc 08 currently records it correctly, so nothing is
mis-closed **today**; the defect is that Doc 03 now supplies both answers and the wrong one sits in
the register.

**This is the version's own declared lesson, reprised.** The v2.11.1 changelog opens: *"Four of the
five Mediums are the same corrections applied ONE LOCATION SHORT — the v2.11.0 fixes stopped at the
section boundary. That is the lesson of this cycle."* The ISS-05 entry then declares the FR-107 fix
complete. It is complete in §15 and nowhere else. Cycle 2 flagged the provenance explicitly —
*"§5.2's DES-106 row has carried FR-107 in its trace column since v2.9.0 while Doc 08 has recorded
'none'"* — so the second location was named in the report this version reworks against.

**Required fix (Doc 03 only — do not touch Doc 08).** Make §5.2 and §10.13.13 say what §15 says.
Either remove FR-107 from the DES-106 `Satisfies` column and from the §10.13.13 heading, or qualify
both in place — e.g. `FR-107 (append-only property of the decision trail only; not the platform-wide
lifecycle — see §15)`. Whichever form is chosen, the three locations MUST agree, and the §15 row
should name the two locations it is correcting, exactly as the other eight v2.11.1 corrections do.
§18 (Contradiction record) is an available home if the architect prefers to record rather than
resolve — but a `Satisfies` cell the same document disclaims cannot simply be left standing.

---

### ISS-02 (Low) — the SDK decode array's hazard is described in the present tense, and it has no call sites

**Location.** §10.13.13(a), divergence (iii), lines 2450–2455: *"**(iii) The SDK array is
ORDINAL-INDEXED, which makes it the fragile one.** … This is the **live hazard** among the three …
the rule makes the chain authoritative, and **this array is how the chain's answer reaches the
application**."*

**Verified first.** Everything structural here is exactly right. `PROPOSAL_STATE_ENUM`
(`packages/sdk/src/constants.js:43`, under its `/** Governor.State. */` doc comment at :42 — the
citation the document gives, and the one cycle 2 used) is a frozen array of seven lowercase strings
in `Governor.State`'s declaration order: `discussion, voting, tallying, defeated, timelocked,
executed, cancelled`. It is positionally aligned to `Governor.State` (`Governor.sol:41-49`) member
for member. It resolves by index, so a Solidity enum reorder does silently remap every decoded state
with no name ever compared — and the neighbouring `CHOICE` comment (`constants.js:39`,
*"the enum ordering is load-bearing in `vote()`"*) shows the codebase already knows this coupling
class. The risk **ranking** — that this is the worst of the three drift surfaces — is correct, and
it is the finding cycle 2 asked for.

**What is wrong.** `PROPOSAL_STATE_ENUM` has **exactly one occurrence repo-wide: its own
declaration.** Nothing imports it; nothing decodes anything with it; no chain answer reaches any
application through it today. "This is the live hazard" and "this array **is** how the chain's
answer reaches the application" both describe a wiring that does not exist.

**Why it is Low, and why it is still worth fixing.** No obligation is misstated, and the direction
of the error is safe — it over-warns rather than under-warns, and Q17's remedy is correctly scoped.
But this document polices exactly this distinction in itself, twice in this same subsection: the
`advanceStage` warning (2548–2554) is headed *"is a design intention, not a property of the built
code"*, and DES-106's v1 boundary is labelled *"disclosed not papered over"*. The zero-call-site
fact also **strengthens** the argument rather than weakening it: all three mirrors are unused today,
so Q17 is cheap to satisfy now and gets more expensive the moment the ballot layer wires one in.

**Required fix.** One clause — *"none of the three has a call site today, which is precisely why the
pinning test is cheap now"* — and change "is how" to "is the intended path by which".

---

### ISS-03 (Low) — the owed DES-096 state accessor is recorded only in a prose warning, unowned

**Location.** §10.13.13(a), warning block at lines 2515–2523.

**Verified first — the finding itself is correct and well made.** §10.13.3's DES-096 design-level
interface table lists exactly four methods — `castBallot`, `changeBallot`, `computeTally`,
`getTallyProperties` — and **none returns a ballot state**. There is no v1 counterpart to
`Governor.state()` anywhere in the document. So the both-versions seam rule genuinely cannot be
satisfied in v1 against the interface as specified, and saying so — *"DES-096 MUST gain a state
accessor before the v1 ballot layer is built"* — closes cycle-2 ISS-06 as written (my required fix
offered "one clause in the rule **or** one row in DES-096"; the clause was chosen).

**The residual.** A newly-minted, normative, architect-owed design change now exists in exactly one
place: a prose warning inside DES-105's ruling subsection. It is **not** in §13 ("Risks & technical
debt"), which is this document's register for exactly this — carrying rows such as *"v1
party/membership store is in-memory"* and *"No Elections/Recall/Treasury contracts yet"*, each with
a "Repayment" column. It is **not** in §16, where every other owed item carries a **named owner** and
a **needed-by** date. It is **not** noted at §10.13.3, where DES-096's four-method table still reads
as complete. And §5.2's DES-105 row now publishes the both-versions MUST with no hint that its v1
half is currently unsatisfiable.

An implementer reading §5.2 + §10.13.3 — the two registers, without §10.13.13 — sees a normative
derivation rule and an interface that cannot serve it, which is the discovery-at-point-of-use the
warning says it exists to prevent.

**Required fix.** Add one §13 debt row (or one §16 Q-row) with a named owner — this is
architect-owed, so Ravi Deshmukh — and "needed by: before the v1 ballot layer is built"; and one
clause in §10.13.3's DES-096 subsection noting the fifth method is owed.

---

### ISS-04 (Low) — FR-107's gap class is reported as `G-TRACE`; Doc 08 records `G-TRACE + G-PHASE3`

**Locations.** §15 FR-107 row (line 2814): *"**Doc 08 correctly records FR-107 as `G-TRACE` with
DES = none**"*; and the header changelog (line 42): *"**Doc 08 records FR-107 as `G-TRACE`,
DES = none**"*.

**Finding.** Doc 08 v2.6.0 line 583 records `☐ G-TRACE + G-PHASE3 — no DES (Doc 03 §16); no
implementation`. What Doc 03 asserts is true as far as it goes, but it drops half the recorded gap
set — and then draws a contrast that depends on the dropped half: *"a DES is owed from the
architect, which is a stronger claim than a build being owed."* Doc 08 records **both**: no DES
**and** no implementation. Cycle-2's finding table quoted the full string `G-TRACE + G-PHASE3`, so
the complete classification was in front of the author.

No reader is misled into thinking FR-107 is built — the row says the lifecycle is "still
undesigned" — which is why this is Low rather than a repeat of the cycle-2 Medium.

**Required fix.** `G-TRACE + G-PHASE3` in both places, and adjust the contrast to "a DES is owed
from the architect **in addition to** the build".

---

### ISS-05 (Low) — Q17 still counts two enums in the row corrected this version for counting two

**Location.** §16, Q17 (line 2836): *"**Neither ballot-state enum is covered by a differential
test.** … `differential.test.mjs` exercises **neither**."*

**Verified first.** The substance of the cycle-2 fix is present and correct: Q17 now carries
*"**Write the ordinal-indexing case first:** `PROPOSAL_STATE_ENUM` decodes by position, so a
Solidity enum reorder silently remaps every state with nothing to raise an error"*, names the third
representation explicitly, and is owned by two named people. The `differential.test.mjs` claim is
also still true — I re-checked: it imports `effectiveRules`, `tally`, `petitionThreshold`,
`isSurgeActive`, `regionPreimage`, `TIER` and `BPS`, and touches no state enum at all.

**What is wrong.** The row's bolded lead and its coverage sentence both assert a set of **two**,
five lines after §10.13.13 establishes **three** and states it correctly: *"**No differential test
pins any of the three to another** — `differential.test.mjs` exercises **none of them**."* §16 is a
register read on its own, by owners looking for their ID; a reader who never opens §10.13.13 takes
away a two-item obligation with a three-item body.

**Required fix.** "**No ballot-state representation is covered by a differential test**" and
"exercises **none of the three**".

---

### ISS-06 (Low) — the §15 DES-104 row omits Doc 08 v2.6.0's new revisit flag on FR-090

**Location.** §15, DES-104 row (line 2811): *"**FR-090 RTM row CLOSED** (Doc 08 v2.5.0); FR-024
extended"*.

**Finding.** Both status claims are correct against Doc 08 v2.6.0 (FR-090: `✅ COMPLETE (was G-TRACE
+ G-PHASE3; closed v2.5.0)`; FR-024: `✅ COMPLETE … v2.5.0 extends the evidence`). But Doc 08
**v2.6.0** — published before this version — adds a headline item: *"**Q16 RECORDED against FR-090 as
a REVISIT FLAG (Medium), not a gap** … if the rule answering Q16 alters what 'the same decision
window' guarantees, this row and TC-3548/TC-3549 must be re-derived."* The flag is sourced from
**this document's own §16 Q16** and turns on **DES-104's** capability-absence set — the very content
this §15 row summarises. The sibling FR-091 row ends "See **Q15**, **Q16**, **Q17**"; the DES-104
row carries no Q reference at all, though Q16 names FR-090 and not FR-091.

Nothing here is false, which is why it is Low; the row is simply the one place in the new sub-table
where a live, reciprocal cross-reference is missing.

**Required fix.** Append "See **Q16** (Doc 08 v2.6.0 carries a revisit flag against this row)".

---

## 6. What was verified and PASSED

Checked against source and against Doc 08 **v2.6.0**, not accepted as asserted. Recorded so a
cycle 4, if needed, need not re-derive it.

| Claim under review | Verdict | Evidence |
|---|---|---|
| **ISS-01 (cycle 2) fixed** — §16 Q15 | **PASS** | Q15 now reads "the **proposals and debate layer** holds no vote — it stops at `admitToBallot()` and hands off to `IBallotService`", with the ADR-024 §(b) citation removed and the correction recorded in place. It no longer contradicts Q16. |
| **Full-document sweep for the mis-citation** | **PASS** | `holds no vote` / `holds no ballot` / `ADR-024 §(b)` swept across Doc 03. Live text: only the corrected narrow forms (Q15, Q16, lines 2531–2532, 2550–2551). Surviving broad forms are **historical changelog entries only** — lines 88–89 and 139 (v2.10.0 entry, corrected **by name** in the v2.11.0 entry above it) and line 154 (the v2.10.0 entry's Q15 minting record, superseded by that same correction). Consistent with the cycle-2 treatment of the "two stages" sweep. Other `ADR-024 §(b)` uses (1785, 2095, 2160, 2298, 2704, 2764) are the correct "no on-chain governance/execution in v1" claim, not the ballot claim. |
| **ISS-02 (cycle 2) fixed** — §5.2 DES-105 row | **PASS** | Line 907 now reads "**The ballot layer is the sole authority on ballot state IN BOTH VERSIONS** — the DES-096 database backing in v1, `Governor.State` at the v2 seam — and `VOTE`/`DECISION`/`IMPLEMENTATION` MUST be DERIVED from whatever backing `IBallotService` is bound to, never tracked independently", compatible with §10.13.13's form; **DES-096 added to the row's trace column**. |
| **§5.2 DES-104 row and the rest of §5.2** | **PASS** | DES-104's row carries only the counting-tier ruling and states no seam rule. Sweep of `sole authority` / `tracked independently` in Doc 03: three instances — §5.2 (907) and §10.13.13 (2502–2504), which now agree, plus the v2.10.0 historical entry (133–134), corrected by name above it. No live contradiction remains. |
| **ISS-03 (cycle 2) fixed** — three representations | **PASS, all values re-derived** | `Governor.State` = 7 members, no `Draft` (`Governor.sol:41-49`) ✓. `PROPOSAL_STATE` = the 8 listed values **in the listed order** (`governance.js:19-28`) ✓. `PROPOSAL_STATE_ENUM` = the 7 listed lowercase strings, positionally aligned to `Governor.State` (`constants.js:42`/:43) ✓. Divergence (i) three spellings ✓; (ii) `DRAFT` producerless — `stateAt()` never returns it, no contract declares a `Draft`, its only repo occurrence is its own declaration ✓, correctly identified as the reason for 8-vs-7-and-7; (iii) ordinal indexing correctly characterised (see ISS-02 for the tense). |
| **ISS-03 (cycle 2) fixed** — Q17 scope | **PASS on scope** | Q17 now names `PROPOSAL_STATE_ENUM`, states the position-decode mechanism, and instructs "**Write the ordinal-indexing case first**". The scope gap cycle 2 raised is closed; only the count wording remains (ISS-05). |
| **ISS-04 (cycle 2) fixed** — the `Cancelled` row | **PASS** | The row now reads "(no stage — and the window does NOT end)" … "it cancels **one proposal**, not the window". Verified: `cancelDuringDiscussion(uint256 proposalId, uint256[8] proof, uint256[] publicSignals)` (`Governor.sol:397`) writes only `p.cancelled` / `p.finalized` / `p.succeeded` on the single proposal (:408-410) and emits `ProposalCancelled(proposalId)`; it touches no window. The contract comment at :396 is quoted exactly. `state()` reads `p.cancelled` first (:426). The window-termination assertion is gone from the row **and** the new warning explains why, citing DES-104's `closeWindow` absence and Q15's open routing. |
| **ISS-05 (cycle 2) fixed** — §15 FR-107 | **PASS in §15** | The row now agrees with Doc 08 v2.6.0 on the link (none) and on the direction of the debt (architect-owed). Gap-log entry 98, owner Erik Lindqvist and the §3.1 location all verified. (The surviving §5.2/§10.13.13 assignments are ISS-01; the omitted `G-PHASE3` is ISS-04.) |
| **§15 sub-table vs Doc 08 v2.6.0 — full re-verification** | **PASS on 5 of 6 rows, exactly** | FR-079 "CLOSED (Doc 08 v2.5.0)" ✓ (COMPLETE, was G-TRACE + G-PHASE3, closed v2.5.0). FR-080 "CLOSED (v2.5.1)" ✓ (COMPLETE, was G-NOMECH at v2.5.0, closed v2.5.1). FR-090 "CLOSED (v2.5.0)" ✓ and FR-024 "extended" ✓ (see ISS-06 for the omitted flag). FR-091 "OPEN (G-NOMECH) on the unwired 'per published timelines' clause **only**" ✓ — Doc 08: "This row therefore carries exactly ONE GAP: the unwired 'per published timelines' clause". FR-092 "OPEN (G-NOMECH) on two counts" ✓ — Doc 08: "Rule 4 fails on two independent grounds", same two, same order. |
| **Low (cycle 2) ISS-06 fixed** — DES-096 has no state accessor | **PASS on the fact** | §10.13.3's interface table lists exactly `castBallot`, `changeBallot`, `computeTally`, `getTallyProperties`; none returns a ballot state. The new warning is factually correct and is a genuine improvement. (Registration residual = ISS-03.) |
| **Low (cycle 2) ISS-07 fixed** — DES-104 item 4 attribution | **PASS** | Item 4's note now reads "the correction note said the **DES-104** §5.2 row had been fixed for this at v2.9.1; it was the **DES-105** row". Confirmed: the competing-entry cutoff sentence lives in the §5.2 DES-105 row ("once the window reaches debate, entry is refused"); the DES-104 row has no entry-cutoff sentence. |
| **Low (cycle 2) ISS-08 fixed** — mint version | **PASS** | §15's lead-in now reads "minted at **v2.9.0**", with the correction recorded ("v2.9.1 was the first rework cycle, not the mint"). Confirmed against the v2.9.0 changelog entry ("Four new elements in §5.2", listing DES-103..DES-106) and the v2.9.1 entry (rework cycle 1). |
| **Low (cycle 2) ISS-09 fixed** — §16 order and owner | **PASS** | Rows now run **Q15, Q16, Q17** in numeric order with the rest of the table. Q17's owner is "Ji-woo Park (tester) + **Samuel Oyelaran (Engineering Lead)**" — a named person, and the title matches Doc 13 exactly ("Samuel Oyelaran — Engineering Lead", RACI table and sign-off row). |
| **`advanceStage` warning still accurate** | **PASS, re-verified** | `packages/sdk/src/proposals.js:458-475` reads only `window.stage`, derives `to` via `nextStage(from)`, calls `assertStageTransition`, and refuses only at `LIFECYCLE_COMPLETE`. It consults no outcome. The design-intention warning stands. |
| **`stateAt()` citation** | **PASS** | `export function stateAt(sched, now, { executed = false, cancelled = false, outcome = null } = {})` at `packages/protocol/src/governance.js:210` — signature and line exact. Still zero call sites repo-wide. |
| **Mapping table (nine rows)** | **PASS, correct** | Re-checked against `Governor.state()` (`Governor.sol:424-433`) and `stateAt()` (`governance.js:211-217`). The four-stage pre-vote span, the "skips **three**" warning, the DECISION branch to Tallying then Defeated or Timelocked, and the MEASUREMENT-to-none row all hold. |
| **§10.13.13(b) — ruling (b)** | **PASS, untouched** | Carried forward unchanged, as cycles 1 and 2 instructed. `COUNTING_ACTION` is still the ratified three-value allowlist; the directional warning still names both failure modes with their guarding tests (UT-0834; UT-0089/UT-0832). |
| **Changelog honesty (task item 8)** | **PASS with one exception** | The v2.11.1 entry names each cycle-2 ISS id, states the lesson candidly ("four of the five Mediums are the same corrections applied ONE LOCATION SHORT"), reports the correct prior verdict (FAIL 84%, 0C/0H/5M/4L) and report filename, and does not claim any fix I could not verify — with the single exception that "ISS-05 FIXED" is true of §15 only (ISS-01), which is the same over-report class the entry itself declares the lesson of the cycle. The `G-TRACE` under-statement is ISS-04. |
| **Header hygiene** | **PASS** | `Version: 2.11.1`, `Status: In Review`, `Last updated: 2026-08-30`, `Source: SRS-TRUMOCRACY v2.16.0`. Patch bump defensible: every Medium fix is a correction inside existing content, and the one arguably-new passage (the third sub-table row) documents an existing constant. |

## 7. Observations (no issue raised — for the architect's and the PM's awareness)

- **Cross-document, tester-owned — Doc 08 v2.6.0 still publishes the superseded seam scope.** Doc 08
  v2.6.0's changelog claims ISS-03/ISS-04 fixed with "all three instances corrected", but its
  **FR-091 row** (line 565) still reads *"a normative seam rule is recorded for v2: **the chain
  becomes the sole authority** on ballot state … **a v2-seam obligation, not a v1 test
  obligation**"* — the v2-only scope Doc 03 v2.11.0 corrected. This is a Doc 08 defect, not a Doc 03
  defect; route it to the tester (Ji-woo Park) via the project-manager. It matters operationally:
  the RTM currently tells a tester that the derivation rule creates **no v1 test obligation**, while
  Doc 03 §5.2 and §10.13.13 now bind it in v1.
- **"No two of them agree exactly" (line 2432) vs "The SDK agrees with the chain" (line 2444)** read
  in slight tension. Both are defensible — the first is about exact equality (case differs, and one
  is a Solidity enum, the other a JS array), the second is scoped to the `Timelocked` naming — but a
  half-clause ("agrees on that state's name") would remove the wobble.
- **§11 (Situation & failure-mode analysis) still has no row for DES-103..DES-106**, nor for
  DES-101/DES-102. That is a long-standing curation pattern rather than a regression introduced
  here, and it was not raised in cycles 1 or 2, so I am not raising it as an issue against a rework
  version. It is worth a decision at the next feature-complete pass: the section is titled "per
  requirement", and the proposals family is the one three review cycles have been about.
- **Q17's widening is the one v2.11.1 correction not recorded in place.** Eight of the nine carry a
  `_(v2.11.1: …)_` note; Q17's scope change and the row reordering are recorded only in the header
  changelog. Not an issue — the changelog does record both — but it breaks an otherwise perfect run
  of this document's best habit.
- **All three ballot-state mirrors still have zero call sites.** Q17 remains cheap to satisfy now
  and gets more expensive the moment the ballot layer wires one in. Unchanged from cycle 2 and worth
  repeating to the tester.

## 8. Routing instruction (to the owning role)

**FAIL → route to the architect (Ravi Deshmukh), owning role for Doc 03.**

Fix **ISS-01** (the single Medium — it alone forces the FAIL). **ISS-02 to ISS-06 (Low) do not
block** but should be taken in the same pass, since each is a one-clause edit. The rework MUST
produce a **new version** — bump `Version:` to **2.11.2** with `Status: In Review` (a patch bump is
correct: ISS-01 is a two-cell alignment to text that already exists in §15, and all five Lows are
clause-level) — after which this loop re-reviews as **cycle 4 of 5**.

**Nothing in §10.13.13(a) needs rework.** The three-representation sub-table, all three divergences,
the nine mapping rows, both `Cancelled` warnings, the seam rule in both its §5.2 and §10.13.13
forms, the DES-096-accessor warning, the corrected Q15, the reordered §16 and the whole of ruling
(b) are verified correct against source and should be carried forward unchanged. **ISS-01 is two
cells and one heading.**

**Route onward via the project-manager (not fixable from Doc 03):**

1. **product-owner (Priya Raghunathan)** — **still unrouted from cycle 2.** Doc 02 **v2.16.2**
   §13 tracked routing **(h)** continues to carry the exact stale sentence: *"**Not a defect in what
   is built:** v1 holds no vote (ADR-024 §(b)), so no window can yet be defeated."* Doc 03's Q15 has
   now been corrected; its Doc 02 counterpart has not, so the split has widened rather than closed.
   (§13 **(i)**, the Q16 counterpart, already uses the correct narrow form.)
2. **tester (Ji-woo Park)** — Doc 08 v2.6.0's **FR-091 row** still publishes the superseded v2-only
   seam scope and calls it "not a v1 test obligation" (see §7). Also worth a joint look with the
   architect once ISS-01 lands, so Doc 08's FR-107 row and Doc 03's §5.2 stop disagreeing.
3. **engineer (Samuel Oyelaran)** — **still unrouted from cycle 2.** Both stale comments are
   verbatim intact: `packages/sdk/src/proposals.js:295-296` still says entry closes "after the
   **ballot** opens" (the rule is **debate**), and `packages/protocol/src/proposals.js:103-108`
   still calls the taxonomy question "the **open** reconciliation question" — it was **ruled** on
   2026-08-30. The SDD changelog has listed both as engineer-owned since v2.11.0.

## 9. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 3 of 5 and the verdict is FAIL, not ESCALATED.
