# ADR-015 — Candidate feedback scoring: deliberate asymmetry (upvote +3, downvote −1)

```
Status:        Accepted
Date:          2026-08-10
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-004, BR-005, FR-065, TD-07
Source:        CR-v1.1.0 Change 3; GATE1-DECISION-2026-08-09.md
```

## Context

FR-065 requires each matured party member to cast at most one feedback vote per candidate per
election, with the one-vote-per-member constraint enforced by a scope nullifier. It leaves the
**scoring formula** and the **privacy rationale** to be recorded here in an ADR.

Two scoring regimes were considered:

- **Symmetric ±1.** Natural, simple, and directly gameable by bloc-downvoting. A local incumbent
  who has made enemies can be mob-downvoted into a negative score by a coordinated minority even
  when most members have no strong opinion. More importantly, a visible downvote against a
  powerful local figure (a ward boss, a regional strongman, a family patriarch who leads the
  local branch) is socially dangerous in many of the political contexts Trumocracy is built for.
  Symmetric scoring imposes equal friction on upvotes and downvotes; but the real-world
  retaliation risk is not equal.

- **Asymmetric: upvote +3, downvote −1.** The decision taken. Individual votes remain private;
  only the aggregate tally is published.

## Decision

**Scoring rule:** upvote = +3, downvote = −1. Net score = 3U − D where U and D are the count
of upvotes and downvotes respectively.

**One vote per member per candidate per election**, enforced by the same scope-nullifier
mechanism as other action limits:
```
nullifier_scope = keccak("feedback", electionId, candidateId)
```
The nullifier prevents a member from voting twice on the same candidate in the same election.

**Privacy:** Individual votes are private and unlinkable to their caster (enforced by ZK proof;
the member proves their action nullifier is unspent without revealing which choice they made).
Only the aggregate `(upvotes, downvotes, netScore)` tuple is publicly visible.

## Known consequence — the 25% approval floor

With F total feedback casters and U upvotes:
```
netScore = 3U − (F − U) = 4U − F
netScore > 0  ⟺  U/F > 0.25
```

A candidate's score is net-positive when **more than 25% of feedback casters upvote**.
This means a 74%/26% downvote/upvote split still produces a net-negative score, but a
26%/74% upvote/downvote split produces a net-positive score.

**This is a deliberate KNOWN CONSEQUENCE, not a bug.** It is recorded here so a future
engineer does not "fix" the asymmetry to make the scoring symmetric. The 25% floor is the
accepted trade-off that achieves two goals simultaneously:

1. **Damp brigading.** A coordinated minority cannot drive a negative score unless they
   represent more than 75% of all feedback casters — a bar that requires genuine, broad
   opposition, not a motivated bloc.

2. **Protect downvoters.** Because the marginal impact of a downvote (−1) is lower than the
   marginal impact of an upvote (+3), a member in a minority position who casts a downvote
   contributes less identifiable signal to the aggregate. The retaliation-target risk is
   reduced: "someone in this room downvoted you" is harder to attribute when the marginal
   effect of a single downvote on a score in the thousands is small.

## Consequences

**Good**
- Members can express dissatisfaction without being easily identified as the dissenting voice.
- Brigading by a vocal minority requires near-unanimous opposition to produce a negative result.
- The 25% floor is transparent and publicly stated, so members understand what a net-positive
  score means: at least one in four people who voted on this candidate voted positively.

**Accepted risk**
- Critics will correctly observe that the scoring flatters incumbents and candidates with
  established support bases. This is the deliberate trade-off accepted to protect downvoters.
- A candidate with 26% genuine support and 74% apathy (non-voters) who receive only upvotes
  will show as net-positive even with majority apathy. The score is a signal of active
  sentiment, not of overall approval.
- The asymmetry is recorded in TD-07 of the requirements specification.

## Alternatives rejected

**Symmetric +1/−1.** Rejected because it creates equal incentive to mob-downvote and does not
protect downvoters in high-risk political contexts.

**Upvote only (+1/0).** Rejected because it eliminates the negative signal. Members with a
genuine objection have no mechanism to express it, which is a governance information loss.

**Hidden scoring formula.** Rejected because the formula must be public — a member has a right
to know what their vote means before they cast it.

**Higher downvote penalty (e.g., upvote +3, downvote −3 as a symmetric variant).** Rejected.
The problem is not the absolute magnitude but the marginal retaliation risk. Keeping the
downvote at −1 minimises the signal a single downvote contributes to the public aggregate.
