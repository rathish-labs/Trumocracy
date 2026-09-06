# Document Review — Doc 03 SDD v2.10.0 (technical, cycle 1)

<!-- MACHINE-PARSEABLE METADATA BLOCK — the SubagentStop hook reads these exact fields -->

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.10.0
Review mode: technical
Reviewer role: sre (neutral — architect Ravi Deshmukh owns Doc 03)
Score: 80%
Critical: 0
High: 2
Medium: 4
Low: 3
Cycle: 1 of 5
Verdict: FAIL
```

```
Date:        2026-08-30
Owning role: architect (Ravi Deshmukh)
Baseline:    v2.9.3 — PASSED technical cycle 2 (100%, 0C/0H/0M/0L),
             artifacts/reviews/03-architecture-design-sdd-v2.9.3-technical-cycle2.md  [claim VERIFIED]
Decision rec: artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md   [read in full]
```

---

## 1. Summary (BLUF)

v2.10.0 applies the human approver's two rulings of 2026-08-30 to §10.13.13, §5.2 (DES-104,
DES-105) and §16 (Q15). **Ruling (b) — proposing is not an FR-123 counting action — is verified
correct against the code in every particular**: the service genuinely holds no verifier,
`fileProposal` genuinely takes none, `canAuthorProposal` has arity 1, `COUNTING_ACTION` is genuinely
a three-value frozen allowlist, and all cited tests exist, assert what is claimed, and pass (48/48).
Q15 is real, correctly scoped to the product-owner, and consistent with Doc 02 §13 (h).

**The verdict is FAIL because the mapping table — the central deliverable of ruling (a) — does not
survive checking against the chain it declares sovereign.** Two of its nine rows are wrong: it maps
FR-091's `PROPOSAL` and `REVIEW` onto a `DRAFT` ballot state that the v2 chain does not have
(`Governor.State` has seven members and no `Draft`) and that the reference derivation never returns;
and it states `CANCELLED` is "reachable from any pre-execution state" when the chain's only
cancellation entrypoint is `cancelDuringDiscussion()` — "before voting opens, and not after
(FR-029)". Both errors are contradicted by **§5.6 of this same document**, whose PROPOSAL state model
(`discussion → voting → tallying → {defeated | timelocked → executed}`, plus
`proposer withdraws (discussion only) → cancelled`) is exactly right and was left untouched. The
section that exists to stop an implementer building a wrong stage machine currently hands them one.

## 2. Pass-bar check

- Score ≥ 95%? **no** (`80%`)
- Critical = 0? **yes** · High = 0? **no** (2) · Medium = 0? **no** (4)
- **Verdict:** `FAIL`

## 3. Per-criterion scores

| Criterion | Weight | Score (0–100) | Weighted | Notes |
|-----------|--------|---------------|----------|-------|
| T1 Requirement coverage | 20 | 88 | 17.6 | Both ruled questions addressed; FR-091/FR-024/FR-090/FR-020/OI-14 all covered; Q15 minted and routed. Deduction: FR-090's "voted in the same decision window" has no resolution mechanism, yet §10.13.13 asserts an outcome distribution (ISS-06). |
| T2 Soundness | 20 | 62 | 12.4 | The complementary-vs-competing finding and the derivation direction are sound. The bridge that carries them is not: two mapping rows are wrong against the chain and against §5.6 (ISS-01, ISS-02); the reference and on-chain enums are never reconciled (ISS-04); a named function does not exist (ISS-03). |
| T3 Traceability & IDs | 20 | 88 | 17.6 | §5.2 DES-104 gains FR-020, DES-105 gains ADR-008 — both verified. Q15 and Doc 02 §13 (h) agree. Decision record cited correctly everywhere. Deduction: no §15 sub-table for DES-103..DES-106 (ISS-09). |
| T4 Security & failure modes | 15 | 72 | 10.8 | The derivation rule names the right failure mode (two stored copies drifting) but scopes itself out of the one place v1 will first hold a vote (ISS-05), and the collision warning under-counts the trap it exists to flag (ISS-02). |
| T5 Completeness & testability | 15 | 78 | 11.7 | Every cited test verified present, asserting the claim, and green. No placeholders. Deduction: `PROPOSAL_STATE` / `stateAt()` has been made normative for ballot state while carrying **zero** test coverage in either the protocol or the differential suite (ISS-04). |
| T6 Convention compliance | 10 | 96 | 9.6 | RFC 2119 used precisely; ISO-8601 throughout; named owner on Q15; minor semver bump correct; `Status: In Review` correct; rulings attributed to the human approver with the artifact path. |
| **Total** | **100** | — | **79.7 → 80%** | — |

## 4. Issues (summary — full findings in §5)

| ID | Severity | Criterion | Location | Finding (one line) |
|----|----------|-----------|----------|--------------------|
| ISS-01 | **High** | T2 | §10.13.13(a) mapping, `CANCELLED` row | "Reachable from any pre-execution state" is wrong: the chain cancels only during discussion (`cancelDuringDiscussion`, FR-029), as §5.6 already says. |
| ISS-02 | **High** | T2 / T4 | §10.13.13(a) mapping rows 1–2 + the ⚠ collision warning | `PROPOSAL`/`REVIEW` are mapped to a `DRAFT` ballot state the chain does not have and the derivation never returns; the collision therefore spans four FR-091 stages, not three. |
| ISS-03 | Medium | T2 / T5 | §10.13.13(a) item 3; changelog line 25 | `proposalState()` does not exist anywhere in the repo; the function is `stateAt()` (`governance.js:210`). |
| ISS-04 | Medium | T2 / T5 | §10.13.13(a); the seam rule | JS `PROPOSAL_STATE` (8 values, `SUCCEEDED_TIMELOCK`) and on-chain `Governor.State` (7 values, `Timelocked`) are never reconciled, and neither is exercised by any test. |
| ISS-05 | Medium | T2 / T4 | §10.13.13(a) "v1 is unaffected"; §16 Q15; changelog | "v1 holds no ballot (ADR-024 §(b))" contradicts §10.13.3 DES-096 and ADR-024 itself; the seam rule is scoped out of the v1 ballot backing where drift will first be possible. |
| ISS-06 | Medium | T1 / T2 | §10.13.13(a) item 1 | "One `SUCCEEDED_TIMELOCK` and two `DEFEATED`" asserts a winner-selection outcome that no specified mechanism produces. |
| ISS-07 | Low | T2 | §10.13.13(a) closing para; §16 Q15 | "Terminates at `DECISION`" is enforced by nothing — `advanceStage()` would move a defeated window onward; the design half of the Q15 gap is unrecorded. |
| ISS-08 | Low | T2 | §10.13.13 DES-104 item 4 lead-in | "Entry closes when the ballot opens" — entry closes one stage earlier, at debate; contradicts its own body and the §5.2 DES-105 row corrected at v2.9.1. |
| ISS-09 | Low | T3 | §15 Traceability | No per-version `FR/NFR → DES` sub-table for DES-103..DES-106, breaking the pattern set by DES-087..091 and DES-101/102. |

> **Low** issues do not block the pass bar. **Critical/High/Medium** each force a FAIL.

## 5. Full findings

### ISS-01 (High) — the `CANCELLED` mapping row misstates reachability, and contradicts §5.6

**Location.** §10.13.13(a), mapping table, final row: `*(none — the window ends)*` → `CANCELLED`,
relationship cell "reachable from any pre-execution state; terminates the window".

**Finding.** It is not reachable from any pre-execution state. The v2 chain exposes exactly one
cancellation entrypoint, and its own contract comment states the restriction:

```solidity
/// @notice A proposer may withdraw before voting opens, and not after (FR-029).
function cancelDuringDiscussion(uint256 proposalId, uint256[8] calldata proof, ...)
```
(`packages/contracts/src/core/Governor.sol:396–397`)

So `CANCELLED` is reachable **only from `DISCUSSION`** — not from `VOTING`, not from `TALLYING`,
not from `SUCCEEDED_TIMELOCK`. **§5.6 of this same document already states the correct rule**:

```
PROPOSAL:  discussion ──▶ voting ──▶ tallying ──▶ {defeated | timelocked ──▶ executed}
                └──proposer withdraws (discussion only)──▶ cancelled
```

v2.10.0 therefore introduces a direct internal contradiction with §5.6, and misstates the chain in
the one section that declares the chain sole authority on ballot state.

**Anticipated objection, and why it does not hold.** The JS reference `stateAt()` evaluates the
caller-supplied `cancelled` flag first (`governance.js:211`), so a `CANCELLED` result is
*representable* from any input. Representability is not reachability, and the row makes a
reachability claim. `Governor.state()` has the identical branch order and is still constrained by
the fact that only `cancelDuringDiscussion()` can ever set the flag.

**Required fix.** Rewrite the relationship cell as "reachable from `DISCUSSION` only —
`Governor.cancelDuringDiscussion()`, FR-029; not reachable once voting opens", and cross-reference
§5.6 so the two state models are visibly one model. Widening cancellation is a design change
requiring its own ADR/DES — it cannot be effected by a mapping-table cell.

---

### ISS-02 (High) — `DRAFT` is not a state the ballot machine can be in, and the collision warning under-counts

**Location.** §10.13.13(a), mapping rows `PROPOSAL → DRAFT` and `REVIEW → DRAFT`, and the ⚠ block
warning about the `discussion` name collision.

**Finding — three independent confirmations that the chain has no `DRAFT`:**

1. **The chain enum.** `Governor.State` (`Governor.sol:41–49`) is
   `{ Discussion, Voting, Tallying, Defeated, Timelocked, Executed, Cancelled }` — **seven members,
   no `Draft`**. `Governor.state()` (lines 424–432) can return nothing else.
2. **The reference derivation.** `stateAt()` never returns `DRAFT`: for any `now` before
   `discussionEndsAt` it returns `DISCUSSION` (`governance.js:213`). Repo-wide, the only occurrence
   of `PROPOSAL_STATE.DRAFT` is its own declaration — **no producer exists**. (`PARTY_STATE.DRAFT`
   in `party.js` is a different enum for a different subject.)
3. **This document.** §5.6's PROPOSAL model begins at `discussion`; the PARTY model beside it does
   have a `draft` node, so the omission is deliberate, not an oversight.

The row's own gloss — "ballot not open; **the proposal exists**" — describes precisely the condition
the chain reports as `Discussion`: a proposal exists on-chain only once `propose()` has set its
schedule, and that starts the discussion period immediately.

**The consequence for the warning.** The ⚠ block is the safety payload of this section. It warns
that ADR-008 §6's `DISCUSSION` spans FR-091's "review + discussion + debate" and that equating them
by name "will build a stage machine that silently skips two stages". With no `DRAFT`, the chain's
single pre-vote period actually spans FR-091's **proposal + review + discussion + debate — four
stages — so the name-equating implementer skips three, not two**. The section under-states the trap
it exists to flag.

**Verified correct, for contrast.** The T2 = 7 days / T3 = 14 days figures quoted from ADR-008 §6
are exact (`docs/adr/ADR-008-anti-capture-governance.md:94`) and corroborated by
`TIER_RULES.discussionSeconds` in `packages/protocol/src/constants.js` (`7 * DAY`, `14 * DAY`). The
claim that ADR-008's `DISCUSSION` is the whole mandatory pre-vote period is correct.

**Required fix.** Either (i) drop both `DRAFT` rows and record that FR-091's `PROPOSAL` and `REVIEW`
have **no on-chain counterpart** — the proposal is off-chain until submission, and submission itself
starts `DISCUSSION`; or (ii) keep `DRAFT` and state explicitly that it is a declared-but-unreachable
enum member modelling the pre-submission off-chain draft, absent from `Governor.State`. Under either
choice, correct the ⚠ warning to "spans four FR-091 stages / skips three". The derivation rule
(`VOTE`/`DECISION`/`IMPLEMENTATION`) is unaffected and should be carried forward unchanged.

---

### ISS-03 (Medium) — `proposalState()` does not exist; the function is `stateAt()`

**Location.** §10.13.13(a) item 3 ("Stored vs derived"); mirrored in the header changelog, line 25.

**Finding.** The document states: "`proposalState()` (governance.js) is a **pure function** of
schedule, tally and flags — nothing stores it." A repo-wide search for `proposalState` returns three
hits and no code: this line, the changelog line, and the identical sentence in
`artifacts/status/DECISIONS-2026-08-30-PROPOSING-AND-STAGE-TAXONOMY.md:125`. The function meant is:

```js
export function stateAt(sched, now, { executed = false, cancelled = false, outcome = null } = {})
```
(`packages/protocol/src/governance.js:210`)

**The substance of the claim is verified true** — `stateAt()` is genuinely pure, genuinely a function
of schedule, tally and flags, and nothing persists its result; the "stored vs derived" argument
stands, and the FR-091 half is equally verified (the stage is stored on the window and advanced only
by `advanceStage(windowId)`). Only the symbol name is wrong. It matters because this is the argument
an implementer follows to the code, and because the document's own v2.9.1 changelog names this
defect class: "a design document that misstates the behaviour it governs is the exact defect class
that produced the v2.8.0 High."

**Required fix.** Replace `proposalState()` with `stateAt()` in §10.13.13(a) item 3 and in the header
changelog, citing `packages/protocol/src/governance.js:210`.

---

### ISS-04 (Medium) — the reference enum and the chain enum are never reconciled, and neither is tested

**Location.** §10.13.13(a) throughout, and the normative seam rule.

**Finding.** The section makes `PROPOSAL_STATE` normative for ballot state and declares "the chain is
the sole authority on ballot state" — but the enum it names and the enum the chain implements are
not the same object, and the document never says so:

| | JS `PROPOSAL_STATE` (`governance.js:19–28`) | Solidity `Governor.State` (`Governor.sol:41–49`) |
|---|---|---|
| Members | 8 | 7 |
| Pre-submission | `DRAFT` (no producer) | **absent** |
| Passed-and-timelocked | `SUCCEEDED_TIMELOCK` | `Timelocked` |

§5.6 of this document uses the Solidity name (`timelocked`); §10.13.13 uses the JS name — one state,
two names, in one document, unreconciled.

**Compounding it: neither is under test.** `PROPOSAL_STATE` and `stateAt()` appear in no test file —
not `packages/protocol/test/governance.test.js`, not `packages/contracts/test/differential.test.mjs`.
`stateAt()` has **zero call sites in the entire repo**. That sits against `governance.js`'s own
header promise: "The Solidity contracts implement the same rules on-chain, and the differential test
suite asserts the two agree. That agreement is a security property." Making an untested,
undifferentiated enum normative for ballot state converts that promise into an assumption.

**Required fix.** Add a reconciliation note to §10.13.13(a): name the normative referent of the seam
rule (the on-chain `Governor.State`), record the name mapping (`SUCCEEDED_TIMELOCK` = `Timelocked`)
and the `DRAFT` asymmetry, and record the differential-coverage obligation as either a §14 test hook
or a §13 debt row, so the header's promise becomes a tracked obligation rather than a comment.

---

### ISS-05 (Medium) — "v1 holds no ballot" mis-cites ADR-024 and leaves the drift rule unbound where it will first be needed

**Location.** §10.13.13(a), "**v1 is unaffected:** v1 holds no ballot (ADR-024 §(b))…" (line ~2348);
§16 Q15 ("v1 holds no vote (ADR-024 §(b))"); header changelog lines 38 and 53.

**Finding.** ADR-024 §(b) does not say v1 holds no ballot. It says v1 has **no on-chain governance
execution**, and in the same passage: "Party data, memberships, petitions, proposals, **votes**, and
manifesto are stored in a conventional relational database (Postgres…)." ADR-024 §(a) Seam 2 defines
a **v1 backing for `IBallotService`** — and so does **this document**, at §10.13.3 (DES-096):

| Method | v1 backing behaviour (Doc 03 §10.13.3) |
|---|---|
| `castBallot` | authenticated write to database; receipt includes the choice |
| `computeTally` | SQL COUNT aggregate; result hash published to the on-chain audit contract |
| `getTallyProperties()` | `{ receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true }` |

The accurate statement is "v1 holds no **on-chain** ballot" — or, about what is built today, "the
DES-096 v1 ballot backing is not yet built".

**Why this is more than wording.** The normative rule is scoped "**At the v2 on-chain seam**". It
therefore does **not** bind the DES-096 v1 backing — which is precisely where the failure mode the
rule exists to eliminate first becomes possible: an FR-091 stage stored on the window, a ballot
outcome stored in Postgres, two copies of one fact, and no chain to be sole authority over either.
The rule's own justification ("derivation makes that unrepresentable rather than merely
discouraged") does not reach the first system that will actually hold a vote.

**Required fix.** Correct the claim in all three places to "no **on-chain** ballot; the DES-096 v1
backing is not yet built". Then either extend the derivation rule to bind the DES-096 v1 backing when
it is built, or state explicitly why it does not apply and what prevents drift there instead.

---

### ISS-06 (Medium) — the cardinality illustration asserts a resolution rule that does not exist

**Location.** §10.13.13(a) item 1; mirrored in the header changelog, lines 21–23.

**What is verified sound.** The one-to-many claim itself checks out. `stage` is a field on the
**window**, set at `saveWindow({ …, stage: PROPOSAL_STAGE.PROPOSAL, … })` and mutated only through
`updateWindowStage(windowId, { stage, at })`; proposals are saved with a `windowId` and carry **no
stage of their own** (`packages/sdk/src/proposals.js:280–317`). So a decision window really does hold
one FR-091 stage shared by all its competing proposals, while each proposal's ballot would carry its
own state. The cardinality argument stands.

**What does not.** The illustration states the resolution as fact: "at resolution, **three**
`PROPOSAL_STATE` values — one `SUCCEEDED_TIMELOCK` and two `DEFEATED`". Nothing selects a single
winner:

- FR-090 requires competing proposals be "voted in the same decision window", but the chain models
  no window at all — `Governor` gives each proposal an independent `Choice { Against, For, Abstain }`
  ballot with its own quorum and approval test. Two of the three could pass.
- DES-104 deliberately removes every capability that could resolve a window to one winner: no
  `closeWindow`, no `mergeProposal`, no `prioritiseProposal`, no `setPrimaryProposal`, no ranking or
  weight field. That absence is the correct anti-capture design; it also means no winner-selection
  rule exists to be relied on.

The argument does not need the distribution — "three proposals, three state values, whatever they
are" carries the full weight. As written, the doc states an unspecified resolution rule as settled,
in the same section where it correctly routed a comparable gap as Q15.

**Required fix.** Either soften to "three `PROPOSAL_STATE` values — however they resolve", or keep
the illustration and **route the competing-proposal resolution rule as a new §16 open question**, on
the Q15 pattern: FR-090 mandates one shared decision window, the chain offers per-proposal binary
ballots, and how a multi-option window resolves is specified nowhere.

---

### ISS-07 (Low) — Q15 is correctly scoped, but its design half is unrecorded

**Location.** §10.13.13(a) closing paragraph ("Surfaced by doing the mapping — routed, not ruled");
§16 Q15.

**Verified.** The gap is real: FR-091 (Doc 02 §4.26, line 794) does require every proposal to move
through all eight stages in sequence with no stage skipped, and is silent on defeated or cancelled
decisions. Scoping it as a **requirement clarification owned by the product-owner** is right —
amending FR-091's text is not the architect's call — and the "not a v1 defect" reasoning holds (v1
holds no vote, so no window can yet be defeated). Q15's wording matches Doc 02 §13 tracked routing
(h) substantively, and the owner (Priya Raghunathan) and "needed by" are both filled.

**The residual.** The document asserts "such a window **terminates at `DECISION`** and does not
advance" as though something enforced it. Nothing does: `advanceStage(windowId)` derives its target
from `nextStage()`, and `assertStageTransition()` refuses only skips, reversals, no-ops and
past-the-end. A defeated window at `DECISION` would be advanced to `IMPLEMENTATION` without
complaint. The requirement half is routed; the design half — which belongs to the architect — is not
recorded anywhere.

**Required fix.** One sentence in §10.13.13(a): once the PO clarifies FR-091, DES-105 owes a
terminal-exit guard (a defeated or cancelled window MUST be refused advancement past `DECISION`), so
the design obligation is recorded beside the requirement one.

---

### ISS-08 (Low) — DES-104 item 4's lead-in still names the wrong cutoff

**Location.** §10.13.13, DES-104 item 4, bold lead-in (line ~2251).

**Finding.** The lead-in reads "**Entry closes when the ballot opens.**" Entry closes one stage
earlier, at `DEBATE`:

```js
export const COMPETING_ENTRY_STAGES = Object.freeze([
  PROPOSAL_STAGE.PROPOSAL, PROPOSAL_STAGE.REVIEW, PROPOSAL_STAGE.DISCUSSION,
]);
```
(`packages/protocol/src/proposals.js:144–148`) — the ballot opens at `VOTE`, two stages later. The
item's own body says this correctly ("may join while the window is at proposal / review /
discussion. Once it reaches debate, entry is refused"), and the **§5.2 DES-105 row was corrected for
exactly this sentence at v2.9.1**; the lead-in was left behind, so §10.13.13 now contradicts §5.2 at
the headline level while agreeing at the body level.

**Required fix.** Change the lead-in to "**Entry closes when the window reaches debate.**" and align
its rationale with the corrected §5.2 DES-105 wording (the deliberation has by then been framed
around a fixed set of options).

**For routing, not for this document.** The superseded rationale also survives as a code comment at
`packages/sdk/src/proposals.js:295` — "Admitting a new option after the ballot opens would change
what people already voted on." That is engineer-owned; hand it to the project-manager rather than
editing it from Doc 03.

---

### ISS-09 (Low) — §15 has no traceability sub-table for DES-103..DES-106

**Location.** §15 Traceability.

**Finding.** §15 carries per-version `FR/NFR → DES` sub-tables for every recent design increment —
v2.0.0 (DES-087..DES-091), v2.8.0 (DES-101, DES-102, DES-097(b)), and the DES-093/094 and
DES-095..DES-098 sets — but there is none for **DES-103..DES-106**, minted at v2.9.0 and amended
here. Pre-existing rather than introduced by v2.10.0, and §15 does delegate the authoritative chain
to Doc 08, but the pattern break is now two versions old and this version edited two of the four
rows.

**Required fix.** Add a "v2.9.0 / v2.10.0 proposals & debate" sub-table covering FR-024, FR-079,
FR-080, FR-090, FR-091, FR-092 and FR-107 → DES-103..DES-106, carrying the 2026-08-30 ruling
annotations.

---

## 6. What was verified and PASSED

Recorded so cycle 2 need not re-derive it. Every item was checked against source, not accepted as
asserted.

| Claim under review | Verdict | Evidence |
|---|---|---|
| Mapping covers every `PROPOSAL_STATE` value | **PASS** | All 8 JS enum members appear (`DRAFT`×2, `DISCUSSION`×2, `VOTING`, `TALLYING`, `DEFEATED`, `SUCCEEDED_TIMELOCK`, `EXECUTED`, `CANCELLED`). None missing. Correctness of two of those rows is ISS-01 / ISS-02. |
| Mapping covers every FR-091 stage | **PASS** | All 8 members of `STAGE_ORDER` appear, in order, and match FR-091's text (Doc 02 §4.26, line 794) exactly. |
| `VOTE → VOTING`; `DECISION → TALLYING → DEFEATED \| SUCCEEDED_TIMELOCK`; `IMPLEMENTATION → EXECUTED`; `MEASUREMENT → (none)` | **PASS** | Branch order in `stateAt()` (`governance.js:210–218`) and `Governor.state()` (`Governor.sol:424–432`) agree exactly. The timelock does elapse *inside* `SUCCEEDED_TIMELOCK` — the ternary at `governance.js:217` returns the same state on both sides, so no distinct "executable" state exists. FR-026 (Doc 02 line 611) is the timelock requirement and is correctly cited. |
| Cardinality — one window stage, many ballot states | **PASS** | `stage` stored on the window, mutated only via `updateWindowStage(windowId, …)`; proposals hold `windowId` and no stage (`packages/sdk/src/proposals.js:280–317`). The illustrative *distribution* is ISS-06. |
| Stored vs derived | **PASS on substance** | FR-091's stage is genuinely stored and advanced only by `advanceStage(windowId)` (`proposals.js:458–475`); the ballot state is genuinely derived by a pure function nothing persists. The function **name** is wrong — ISS-03. |
| ADR-008 §6 DISCUSSION durations (T2: 7 days, T3: 14 days) | **PASS** | `ADR-008-anti-capture-governance.md:94` quotes exactly those figures; `TIER_RULES` in `constants.js` corroborates (`7 * DAY`, `14 * DAY`). ADR-008's `DISCUSSION` is indeed the whole mandatory pre-vote period. |
| Ruling (b) — the service holds no verifier and `fileProposal` takes none (UT-0834) | **PASS** | `packages/sdk/src/proposals.js:207–208` — `this._verifier` deliberately absent with the FR-020 rationale in-comment; `fileProposal(partyId, draft, authorPseudonym, participationTier)` has no verifier parameter. UT-0834 asserts `service._verifier` is `undefined` **and** `takesNoVerifier(service.fileProposal)`, and spies that `verifyEligibility` was never called. |
| Ruling (b) — the authoring rule takes no approver (UT-0089) | **PASS** | `canAuthorProposal(participationTier)` is arity 1; UT-0089 asserts `canAuthorProposal.length === 1` with the FR-024 rationale in-test ("a gate that accepted a second argument would be a gate someone could stand in"). |
| Ruling (b) — Worker tier required (UT-0832) | **PASS** | `packages/sdk/test/proposals.test.js:127` — Worker and Candidate may author, Supporter refused with `AUTHORSHIP_REQUIRES_WORKER_TIER` and `selfDeclarable: true`. |
| `COUNTING_ACTION` is a three-value allowlist | **PASS** | `packages/sdk/src/eligibility.js:70–89` — frozen `{ STRENGTH_CONTRIBUTION, BINDING_VOTE, CANDIDACY }`; `NotACountingAction` thrown on anything else. |
| Cited tests are green | **PASS** | `npx vitest run packages/protocol/test/proposals.test.js packages/sdk/test/proposals.test.js` → **48/48 passed**. |
| Exactly one seam call site, scope `BINDING_VOTE` | **PASS** | `admitToBallot(windowId, memberPseudonym, verifier)` — verifier arrives per call, scope `COUNTING_ACTION.BINDING_VOTE`, refusal carries `stillAMember` and `mayStillDeliberate`. |
| The normative seam rule is well-formed and unambiguous | **PASS on form** | Derivation direction stated with RFC 2119 keywords; the application-owned stage set enumerated exhaustively; no conflict with any existing DES or ADR. Its **scope** is the defect — ISS-05. |
| §5.2 DES-104 / DES-105 rows agree with §10.13.13 | **PASS** | DES-104 carries ruling (b) and gains **FR-020** in its trace column; DES-105 carries ruling (a) and gains **ADR-008**. Both match §10.13.13, and DES-105 retains the corrected v2.9.1 competing-entry wording. |
| §16 Q15 | **PASS** | Real gap; correctly scoped as a requirement clarification with the PO named as owner; correctly stated as not a v1 defect; substantively identical to Doc 02 §13 tracked routing (h). Design residual noted as ISS-07 (Low). |
| Staleness sweep | **PASS** | No section outside the header changelog still describes either question as open. §13 debt rows carry nothing about them. The v2.9.0 changelog entry ("CONFLICT RECORDED, NOT SILENTLY RESOLVED") is a historical version record and is legitimate as history. |
| Changelog housekeeping claim | **PASS** | "v2.9.3 technical cycle-2 review PASSED (100%, 0C/0H/0M/0L)" matches `artifacts/reviews/03-architecture-design-sdd-v2.9.3-technical-cycle2.md` exactly. |

## 7. Observations (no issue raised — for the architect's awareness)

- `packages/protocol/src/governance.js:217` is a degenerate ternary: both branches return
  `SUCCEEDED_TIMELOCK`. It falsifies nothing the document claims — the mapping's treatment of the
  timelock is accurate — but it means the reference cannot distinguish "timelock running" from
  "timelock elapsed, awaiting execution". Engineer-owned; noted only.
- `packages/protocol/src/proposals.js:103–108` still calls the reconciliation "the open
  reconciliation question" in its docblock, now superseded by the ruling. Engineer-owned; route via
  the PM if the architect wants it aligned.
- §18 (Contradiction record) is this document's own home for recorded contradictions. The §5.6 vs
  §10.13.13 divergence behind ISS-01 and ISS-02 is a candidate for recording there once corrected,
  in keeping with the document's practice of recording corrections rather than overwriting them.

## 8. Routing instruction (to the owning role)

**FAIL → route to the architect (Ravi Deshmukh), owning role for Doc 03.**

Fix ISS-01 through ISS-06 (2 High + 4 Medium — each independently forces the FAIL); ISS-07 to ISS-09
(Low) do not block but should be taken in the same pass. The rework MUST produce a **new version** —
bump `Version:` to at least **2.11.0** (a Medium-or-above FAIL warrants at least a minor bump per the
`document-review` skill's rework rule) with `Status: In Review` — after which this loop re-reviews as
**cycle 2 of 5**.

The corrections are confined to §10.13.13(a) plus three consequential edits: the §10.13.13 DES-104
item-4 lead-in, §16 Q15's v1 wording, and the header changelog's mirrored claims. **Ruling (b) needs
no rework at all** — §10.13.13(b), the §5.2 DES-104 row and the directional warning are verified
correct against the code and should be carried forward unchanged. **§5.6 is correct as it stands**
and is the reference the mapping should be aligned *to*, not away from.

Two items to route onward rather than fix in Doc 03: the superseded rationale in the code comment at
`packages/sdk/src/proposals.js:295` and the stale docblock at
`packages/protocol/src/proposals.js:103–108` belong to the engineer — hand them to the
project-manager for routing.

## 9. Human decision at the cap (ESCALATED only)

Not applicable — this is cycle 1 of 5 and the verdict is FAIL, not ESCALATED.
