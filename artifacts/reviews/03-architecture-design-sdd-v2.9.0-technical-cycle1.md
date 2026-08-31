# Technical Review — Doc 03 Architecture & Design SDD v2.9.0, Cycle 1 of 5

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.9.0
Document:       SDD-TRUMOCRACY
Document version: 2.9.0
Cycle:          1 of 5
Review mode:    technical
Reviewer role:  reviewer-qa (neutral — architect owns Doc 03)
Review date:    2026-08-29
Reviewer:       reviewer-qa subagent (independent)
Score:          98%
Critical:       0
High:           0
Medium:         0
Low:            1
Verdict:        PASS
```

---

## Scope

Technical review of the v2.9.0 increment to Doc 03. This version adds DES-103..DES-106
to §5.2 and §10.13.13, recording design alongside the code drop it governs (commit c04b4f2).
The reviewer reads the SDD section against the shipped code independently.

---

## DES-103..DES-106: Accuracy Against the Code Drop

Each DES was verified by reading the corresponding source files.

### DES-103 — participation tiers (FR-079, FR-080)

**SDD claims:** Three tiers — Supporter (on join), Worker (self-declared, no approval),
Candidate. `votingWeightForTier()` returns 1 for every tier. No configuration can
differentiate weight, standing or precedence. Tier governs authorship for an anonymity
reason, not a merit one.

**Code (`packages/protocol/src/proposals.js`):**
- `PARTICIPATION_TIER` = `{SUPPORTER: 'SUPPORTER', WORKER: 'WORKER', CANDIDATE: 'CANDIDATE'}` ✓
- `DEFAULT_PARTICIPATION_TIER = PARTICIPATION_TIER.SUPPORTER` ✓
- `votingWeightForTier(tier)` returns `1` for all three tiers; throws `UNKNOWN_PARTICIPATION_TIER`
  for anything else — no branch where it returns anything other than 1 ✓
- No `weightMap`, no `charter.tierWeight`, no feature flag path ✓

**Verdict: DES-103 accurately describes the code.**

### DES-104 — proposal authorship and competing proposals (FR-024, FR-090)

**SDD claims:**
1. Authoring requires Worker tier or above — a disclosure step, never an approval step
2. `canAuthorProposal()` is a 1-argument function (tier only; no approver, no reason param)
3. Proposals answering the same question share a DECISION WINDOW keyed by normalised question
4. Every proposal has equal standing — no weight/rank/priority/standing/featured field,
   and no capability by which one author can withdraw, remove, merge, reject, prioritise
   or veto another's
5. Entry closes when the window reaches DEBATE — once at debate, `WINDOW_CLOSED_TO_ENTRIES`
6. The capability-absence set is a "first-class capability-absence control"

**Code verified:**
- `canAuthorProposal(participationTier)` takes exactly 1 argument; `AUTHORING_TIERS` is a
  frozen Set of {WORKER, CANDIDATE} ✓
- `normalizeQuestionKey()` produces a normalised key; `findWindowByQuestion(partyId, key)`
  is the grouping seam ✓
- `saveProposal()` persists `{authorPseudonym, authorTier, filedAt, seq, isOriginal}` — no
  `weight`, `rank`, `priority`, `standing`, `featured` field ✓
- Service has no `withdrawProposal`, `removeProposal`, `rejectCompeting`, `mergeProposal`,
  `acceptAsAmendment`, `prioritiseProposal`, `setPrimaryProposal`, `closeWindow`,
  `vetoProposal` method ✓
- `COMPETING_ENTRY_STAGES = [PROPOSAL, REVIEW, DISCUSSION]`; `acceptsCompetingProposal(DEBATE)`
  returns `false`; the `fileProposal` path calls `acceptsCompetingProposal(window.stage)` and
  throws `WINDOW_CLOSED_TO_ENTRIES` naming the stage ✓

**Verdict: DES-104 accurately describes the code.**

### DES-105 — the deliberative lifecycle (FR-091)

**SDD claims:**
- Eight stages, advanced one at a time
- `assertStageTransition` refuses STAGE_SKIPPED (with what was skipped), STAGE_REVERSED,
  STAGE_UNCHANGED
- `advanceStage()` takes no target, no `force`, no `skipTo`, no `reason`, no actor
- FR-091's constraint is a property of the type signature, not a check that could be forgotten
- Review, discussion, debate are deliberative — `postDeliberation()` changes no stage, proposal
  or outcome, and is open to all members including open-tier

**Code verified:**
- `STAGE_ORDER` has exactly 8 entries in the specified order ✓
- `assertStageTransition(from, to)` implements all three refusal cases; `toIndex > fromIndex + 1`
  → `STAGE_SKIPPED` with `.skipped` payload naming the missed stages ✓
- `advanceStage(windowId)`: 1 parameter; calls `nextStage(from)` then `assertStageTransition` ✓
- `postDeliberation()` writes a deliberation record and appends a trail event; it does not
  call `updateWindowStage`, does not modify proposals ✓
- Deliberation is not gated on any eligibility check; the verifier is absent from the service ✓

**One notation issue (recorded as Low ISS-01 below):** The §5.2 table entry for DES-105
states "admitting one after the ballot opens would change what people already voted on" as
the rationale for closing the entry window. The ballot opens at VOTE; entry actually closes
at DEBATE (one stage earlier). The normative statement in DES-104's own subsection is correct
("once it reaches debate, entry is refused"). The DES-105 summary borrows a slightly
inaccurate rationale.

**Verdict: DES-105 accurately describes the code, with one Low notation inaccuracy in the
§5.2 table summary.**

### DES-106 — the permanent decision trail (FR-092, FR-107)

**SDD claims:**
- Append-only per window; `appendTrailEvent` is the only writer; no update/delete/rewrite
- Reads return copies
- v1 honest boundary: trail is complete but held in app store; FR-092's "reconstructable
  by any third party from public data alone" needs DES-097 audit anchoring — not built
- FR-092 row does not close on this drop

**Code verified:**
- `InMemoryProposalStore` has `appendTrailEvent(event)` (appends `{...event, seq}`) and
  `getTrail(windowId)` (filters and maps to copies); no `updateTrail`, `deleteTrail`,
  `clearTrail`, `rewriteTrail` method ✓
- `getTrail()` returns `.map((e) => ({ ...e }))` — copies, so callers cannot mutate the store ✓
- `decisionTrail(windowId)` calls `this._store.getTrail(windowId)` — pure read ✓
- Web surface renders `trail-v1-note` with honest text: "In this version the record is
  kept by us. Publishing it so that anyone can check it without trusting us is not switched
  on yet." ✓
- Doc 06 §7 #24 records "FR-092's public-reconstruction half is not built" ✓
- SDD §10.13.13 DES-106: "The FR-092 row therefore does not close on this drop, and that
  is recorded rather than argued around." ✓

**Verdict: DES-106 accurately describes the code and its honest v1 boundary.**

---

## §10.13.13 Normative Specification Accuracy

All specific technical claims in §10.13.13 were verified against the code:

| Claim | Verified? |
|---|---|
| `votingWeightForTier()` returns 1 for every tier, no config changes this | ✓ |
| Worker is self-declared; platform records declaration, nobody approves it | ✓ |
| Every refusal on authoring path says tier is self-declarable | ✓ (selfDeclarable: true in thrown error) |
| Exactly one seam call site: `admitToBallot()` with scope `BINDING_VOTE` | ✓ |
| Service holds no verifier | ✓ (constructor comment + _verifier absent) |
| `appendTrailEvent` is only writer; store has no update/delete/rewrite | ✓ |
| Reads return copies | ✓ (getTrail uses .map) |
| Coercion-resistance notice rendered before member is asked to act, non-dismissable | ✓ (ReceiptFreedomBanner before check-ballot button, no dismiss button in banner) |

---

## The Two Open Questions: Assessment

### (a) FR-091's eight deliberative stages vs ADR-008's PROPOSAL_STATE consensus machine

**Assessment: Conflict is real, stated fairly, and correctly escalated.**

FR-091's PROPOSAL_STAGE (PROPOSAL/REVIEW/DISCUSSION/DEBATE/VOTE/DECISION/IMPLEMENTATION/
MEASUREMENT) and ADR-008's PROPOSAL_STATE (DRAFT/DISCUSSION/VOTING/TALLYING/
SUCCEEDED_TIMELOCK/EXECUTED/DEFEATED/CANCELLED) are genuinely different taxonomies:
- FR-091 answers "where is this question in its public deliberative process?"
- PROPOSAL_STATE answers "what is the ballot's current consensus state?"

Four stages in each have no counterpart in the other. The SDD correctly identifies these as
different taxonomies, implements FR-091's list as the citizen-facing lifecycle, and leaves
PROPOSAL_STATE as the ballot state it was. The question of which is normative at the v2
on-chain seam is not one an engineer can resolve unilaterally — it requires an architect
and PO decision, which the SDD correctly routes.

This is not work being dodged: both taxonomies are implemented and the mapping is recorded.
The question is governance, not engineering.

### (b) Whether PROPOSING should be an FR-123 counting action

**Assessment: The drop took the right call. The FR-conformant reading is correct; the
divergence was correctly not resolved by extending a ratified allowlist.**

The conflict is genuine: the commissioning brief stated PROPOSING is a counting action,
but three normative documents say otherwise:

1. `COUNTING_ACTION` is an approver-ratified three-value allowlist (STRENGTH_CONTRIBUTION,
   BINDING_VOTE, CANDIDACY — DES-100, ratified 2026-08-24). The seam throws
   `NotACountingAction` on any other value. Extending this requires a new ratification.
2. FR-024 forbids pre-screening of proposals. Making authoring a counting action would
   make authoring a gateable capability — inconsistent with FR-024's "the platform never
   judges the CONTENT of a political proposal" (which pre-screening of any kind undermines).
3. FR-090/OI-14 gate authoring on self-declared Worker tier — an anonymity property, not
   a trust or counting property. The reason a Supporter cannot author is that authorship
   is public and Supporters are anonymous unconditionally; this has nothing to do with
   whether their action COUNTS.

**The architectural consequence of making authoring a counting action is significant:**
An unverified member could join a party, deliberate in discussion, and receive a non-counting
ballot — but could not speak by proposing. This inverts the foundational principle "verification
gates counting, never participation" (FR-020, FR-122). A member who cannot author is a
member whose participation is restricted by verification status — which FR-020 explicitly
prohibits.

The drop correctly implements the FR-conformant reading and records the divergence. Extending
a ratified allowlist and amending FR-024/FR-090 requires an approver ruling — which the SDD
correctly requests. The ruling should address the FR-020 inversion explicitly if the answer
is that authoring should be gated.

**The two conflicts are stated fairly and are not used to dodge work.** Both are genuine
governance questions that require human decisions. The code implementing the FR-conformant
reading is shipped; the open items are approver rulings, not engineering gaps.

---

## Issue

### ISS-01 (Low): DES-105 §5.2 table entry incorrectly states the entry-window closure rationale

**Location:** Doc 03 §5.2, DES-105 table row, in the `Responsibility` column:
"A competing proposal may join only while the window still accepts entries — admitting one
after the ballot opens would change what people already voted on"

**What is wrong:** The entry window closes when the window reaches DEBATE (the fourth stage).
The ballot opens at VOTE (the fifth stage). "After the ballot opens" describes VOTE and later,
but entry is actually refused starting at DEBATE — one stage before the ballot. At DEBATE no
one has voted yet. The phrase "would change what people already voted on" is therefore
inaccurate — no one has voted at the point entry closes.

The normative statement in DES-104 (§10.13.13, item 4) is correct: "once it reaches debate,
entry is refused... admitting a new option after people have begun deciding would change the
question they were asked." The DES-105 summary borrowed a looser formulation.

**Required fix:** Change the DES-105 table entry's rationale from "after the ballot opens"
to align with DES-104: "once the window reaches debate; accepting a new option after
deliberation is underway would change what the members are deciding between."

**Severity:** Low. The normative specification (DES-104 §10.13.13 item 4) is correct. The
error is in a summary table entry only. The code correctly implements the DEBATE closure.

---

## Summary

The v2.9.0 SDD increment is accurate against the code drop it governs. DES-103, DES-104,
DES-105, and DES-106 correctly describe the shipped implementation. The §10.13.13 normative
specifications are true of the code. The two open questions are stated fairly and the
FR-conformant implementation is correct. DES-106's v1 boundary is honestly bounded and
no RTM row is claimed to close that cannot close.

The one Low finding is a wording inaccuracy in the DES-105 table summary — the normative
spec (DES-104) is accurate.

**Score: 98% / 0C / 0H / 0M / 1L — PASS**
