# ADR-008 — Anti-capture party governance: charter tiers, tenure-gated eligibility, adaptive quorum, and the right to fork

```
Status:        Accepted
Date:          2026-08-08
Owner:         Priya Raghunathan (Principal Architect)
Traces:        BR-GOVERN, BR-ACCOUNT, FR-PROP-*, FR-CHARTER-*, FR-FORK-*, NFR-STABILITY-01,
               RISK-MOBCAP, RISK-FLASHGOV, RISK-BRIGADE
```

## Context

ADR-007 removes *purchased* capture. It does nothing about the other route: **membership flooding**.
Because anyone may join any party without approval (a core product requirement, BR-EQUAL), a hostile
group — or a rival party, or a state actor with a supply of real, verified humans — can join a party
en masse and rewrite its founding charter. This is not hypothetical; entryism is one of the oldest
tactics in party politics, and open membership makes it cheap.

The naive fixes are all product-destroying:
- Require approval to join → restores the gatekeeper. **Forbidden by BR-EQUAL.**
- Weight votes by tenure → restores oligarchy of the founders. **Forbidden by ADR-007.**
- Give founders a veto → restores the godfather. **Forbidden by the product thesis.**

So the defence must be built from **time, thresholds, transparency, and exit** — never from
privilege.

## Decision

### 1. Decisions are tiered; the constitution is harder to change than the lunch order

| Tier | Examples | Quorum | Approval | Eligibility | Timelock |
|---|---|---|---|---|---|
| **T0 — Operational** | publish a statement, schedule an event | 5% | >50% | any member | 0 |
| **T1 — Policy** | adopt a policy position, allocate budget ≤ cap | 10% | >50% | member ≥ 14 days | 48h |
| **T2 — Structural** | manifesto pillar change, office structure, treasury cap change | 25% | ≥60% | member ≥ 90 days | 14 days |
| **T3 — Constitutional** | founding charter, name, core values, amendment rules themselves, dissolution | 40% | ≥75% | member ≥ 180 days **and** enrolled before the proposal's snapshot | 30 days |

**Tenure gates eligibility, never weight** (the ADR-007 distinction). A 200-day member and a
181-day member have identical power. Someone who joined yesterday has full power over T0/T1 — where
most party life actually happens — and no power over the constitution until they have been part of
the community for half a year. That is not a hierarchy; it is the same logic as a residency
requirement for citizenship, applied to the founding document only.

### 2. Snapshot at proposal creation

Eligibility and the member set are **snapshotted at the block the proposal is created** (using the
party tree root at that block, proven with the `tenure_member` circuit, ADR-005). Joining after a
proposal opens gives no power over it. This closes the "see the proposal, flood the party, vote"
sequence entirely.

### 3. Adaptive quorum — growth surges extend the window and raise the bar

The protocol tracks each party's membership growth rate. If membership grows more than **20% within
any 30-day window**, then for every T2/T3 proposal opened during or within 90 days after that surge:

- the voting window is automatically **doubled**,
- the approval threshold rises by **+5 percentage points**,
- and an on-chain **`AnomalousGrowth` event** is emitted, which clients surface to every member as a
  prominent warning.

The intent is not to block newcomers — genuine viral growth is success, not attack. The intent is to
make a *fast* takeover impossible and a *slow* one visible. An attacker who is willing to build a
real membership base over a year and then win a 75% constitutional vote has, at that point, simply
persuaded the party. That is democracy working, not an attack.

### 4. Charter immutability clauses

A party MAY, at founding, mark specific charter clauses **immutable** or **super-entrenched**
(requiring, e.g., 90% + 60-day timelock). A party that wants "we will never accept corporate
donations" to be genuinely permanent can bind its own future self. The protocol enforces it; no
majority can undo it. This is the constitutional-entrenchment pattern, and it is the strongest
single defence against a charter takeover, because the prize is removed.

### 5. The right to fork — exit as the ultimate protection

This is the most important clause in this ADR.

Any group of **≥10% of a party's members** may **fork the party**: a new party is created that
inherits the charter, manifesto history and (opt-in) member set of the original, at a chosen
historical block. Forking requires no permission from the original party's leadership or majority.

Why this matters more than any threshold: capture defences that rely on *winning the fight* always
eventually lose to a sufficiently determined attacker. Fork rights change the *payoff*. Capturing a
party no longer captures its people — they leave, with the charter, the history and the name lineage
intact, and the captured shell keeps only the empty structure. This makes takeover attempts
economically pointless in the same way ADR-007 makes vote-buying pointless.

The historical record makes the lineage undeniable: every fork records `parentPartyId`,
`forkBlock`, and the reason, and both parties display the fork in their public history permanently.
A citizen can always see which party is the continuation of what they joined.

### 6. Everything is visible, in advance and afterwards

Proposals have a mandatory **discussion period before voting opens** (T2: 7 days, T3: 14 days), all
proposal text is content-addressed and immutable once opened, and every member receives
notification. There is no path by which a charter changes without every member having had the
opportunity to see it coming, vote, and — failing that — fork.

## Consequences

**Good**
- Fast takeovers are impossible; slow takeovers are visible and forkable.
- No privileged actor is created anywhere in the defence — every mechanism is symmetric.
- Entrenchment lets communities protect their founding values from their own future majorities,
  which is exactly what a constitution is for.

**Bad / accepted risk**
- **Tenure gates disenfranchise the newly arrived on constitutional questions.** A genuine cost,
  imposed knowingly. A newly-arrived member can vote on everything else from day one, and can fork
  from day one. The 180-day figure is a charter parameter with a protocol-enforced floor of 90 days,
  so parties can choose their own balance above that floor.
- **Adaptive quorum can be weaponised**: an attacker could deliberately trigger a growth surge to
  freeze a party's ability to pass legitimate constitutional change. Mitigated by the 90-day decay
  and by allowing a party to override the surge penalty with a T3 vote under the *pre-surge* member
  snapshot.
- **Forking fragments movements.** Easy exit can mean parties splinter at the first disagreement,
  and a political landscape of a thousand three-member parties serves no one. Mitigated by the 10%
  threshold, a 30-day cooling-off period before a fork activates, and by petition thresholds
  (ADR-004) that a splinter must still clear to reach full party status.
- **Entrenched clauses can entrench something bad.** A party that permanently binds itself to a
  harmful position cannot fix it — it can only be abandoned and forked. Accepted: the alternative is
  a protocol-level override, which is a godfather with better branding.
