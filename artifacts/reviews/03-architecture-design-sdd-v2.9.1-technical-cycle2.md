# Technical Review — Doc 03 Architecture & Design SDD v2.9.1, Cycle 2 of 5

```
Reviewed document: 03-architecture-design-sdd.md
Document version: 2.9.1
Document:       SDD-TRUMOCRACY
Document version: 2.9.1
Cycle:          2 of 5
Review mode:    technical
Reviewer role:  reviewer-qa (neutral — architect owns Doc 03)
Review date:    2026-08-29
Reviewer:       reviewer-qa subagent (independent)
Score:          100%
Critical:       0
High:           0
Medium:         0
Low:            0
Verdict:        PASS
```

---

## Scope

Cycle-2 rework review of Doc 03 v2.9.1. The single Low finding from cycle 1 (ISS-01:
DES-105 §5.2 table entry gave an incorrect rationale for when the competing-proposal entry
window closes) was reworked. This review verifies the fix, confirms alignment with the
protocol source and with §10.13.13 DES-104, and confirms no other v2.9.0 content changed.

---

## ISS-01 Resolution: DES-105 §5.2 table entry corrected

**Cycle-1 finding:** The DES-105 row in §5.2 stated "admitting one after the ballot opens
would change what people already voted on" as the rationale for closing the entry window.
The ballot opens at VOTE (the fifth stage); entry actually closes at DEBATE (the fourth
stage), one stage earlier, at which point no vote has been cast.

**Fix verified — corrected table entry:**

```
| DES-105 | deliberative lifecycle stage machine | The eight FR-091 stages — proposal →
review → discussion → debate → vote → decision → implementation → measurement — advanced
exactly one step at a time. `assertStageTransition` refuses skipping (`STAGE_SKIPPED`,
naming what was skipped), reversal (`STAGE_REVERSED`) and no-ops; `advanceStage()` takes
no target, no `force`, no `skipTo` and no actor, so there is nothing for a human to veto.
Review/discussion/debate are DELIBERATIVE: they produce records, never outcomes. A
competing proposal may join only while the window still accepts entries (proposal / review /
discussion); **once the window reaches debate, entry is refused** — the deliberation has by
then been framed around a fixed set of options, and admitting another would change the
question people have been arguing about | ... |
```

**Verified against the protocol source** (`packages/protocol/src/proposals.js`):

```javascript
export const COMPETING_ENTRY_STAGES = Object.freeze([
  PROPOSAL_STAGE.PROPOSAL,
  PROPOSAL_STAGE.REVIEW,
  PROPOSAL_STAGE.DISCUSSION,
]);

export function acceptsCompetingProposal(stage) {
  return COMPETING_ENTRY_STAGES.includes(stage);
}
```

The corrected table entry states exactly the three stages that are in `COMPETING_ENTRY_STAGES`:
proposal, review, discussion. It then states "once the window reaches debate, entry is
refused" — which matches `acceptsCompetingProposal(PROPOSAL_STAGE.DEBATE)` returning
`false`. The correction is precise.

**Rationale verified:** "the deliberation has by then been framed around a fixed set of
options, and admitting another would change the question people have been arguing about."
By the time the window enters DEBATE, the REVIEW and DISCUSSION deliberative stages have
already run against the then-existing proposal set. Introducing a new option at DEBATE
would require re-running that deliberation, changing what members have been reasoning about.
This is the correct rationale for the DEBATE cutoff — distinct from the VOTE-based rationale
(which would be about changing what people have already voted on). ✓

**Alignment with §10.13.13 DES-104 subsection (item 4) — already correct, still agrees:**

§10.13.13 DES-104 item 4: "A competing proposal may join while the window is at proposal /
review / discussion. Once it reaches debate, entry is refused (`WINDOW_CLOSED_TO_ENTRIES`,
naming the stage): admitting a new option after people have begun deciding would change the
question they were asked."

Both the corrected §5.2 table entry and §10.13.13 DES-104 item 4 now consistently state:
- Entry is open at: proposal / review / discussion
- Entry closes at: DEBATE
- Rationale: the deliberation has framed around a fixed set; a new entry would shift the question

The two sections agree. ✓

---

## Rest of v2.9.0 Content Unchanged

The v2.9.1 changelog states only ISS-01 was addressed; no other section of v2.9.0 was
changed. Spot-checks of DES-103, DES-104, DES-106, the §10.13.13 normative specifications,
and the Two open questions subsection confirm they are identical to what passed at cycle 1.

---

## No New Issues

The rework is a targeted correction to one table row's rationale clause. It introduces no
new content, no new design claims, and no change to any other section. No new issues found.

---

**Score: 100% / 0C / 0H / 0M / 0L — PASS**
