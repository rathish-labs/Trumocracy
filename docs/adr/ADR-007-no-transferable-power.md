# ADR-007 — No transferable governance power: non-transferable membership, 1p1v, and a treasury that buys nothing

```
Status:        Accepted
Date:          2026-08-08
Owner:         Priya Raghunathan (Principal Architect)
Traces:        BR-EQUAL, BR-ANTICORRUPT, FR-MEM-*, FR-TREAS-*, NFR-SYBIL-01, NFR-PLUTO-01,
               RISK-FLASHGOV, RISK-PLUTO, RISK-BRIBE
```

## Context

The requesting brief names flash-loan governance attacks as a threat to defend against. It is worth
being precise about *why* they happen, because the standard mitigations are all bad.

A flash-loan governance attack is possible only when **voting power is a transferable asset that can
be acquired instantaneously**. Every mitigation the DeFi world has invented — snapshot-at-proposal,
vote-locking (ve-tokens), timelocks, delegation delays — is a *patch on that root cause*. They raise
the cost of the attack; they do not remove it. Anyone with enough capital still wins, which for a
political party is not an edge case: it is the failure mode the entire product exists to prevent.
"A billionaire cannot buy this party" is the product.

## Decision

**There is no token.** Not a governance token, not a membership NFT that can be sold, not a
reputation score that can be transferred, not delegated voting weight that can be rented.

### The rules, stated as protocol invariants

1. **Membership is non-transferable.** A party membership is a leaf in the party's Merkle tree keyed
   to a personhood-bound identity commitment. There is no `transfer`, no `approve`, no `permit`, and
   no owner-level function that can move it. Enforced by the absence of the code path and asserted by
   test (UT "membership has no transfer surface").
2. **One person, one vote — always.** Voting weight is exactly `1` for every member on every
   decision. There is no weighting by tenure, by contribution, by office, or by stake. Tenure is
   used only for **eligibility** on high-tier decisions (ADR-008), never for weight. This distinction
   is deliberate and load-bearing: eligibility gates *who may vote*, weight decides *whose vote
   counts more*. The second is oligarchy with extra steps.
3. **Money buys nothing.** The treasury (a) may not be used to acquire voting power because none
   exists to acquire; (b) accepts contributions only up to a **per-person cap per period**
   (charter-set, hard-capped by protocol), enforced against the personhood nullifier so a whale
   cannot split into a hundred donations; (c) publishes every inflow and outflow with an on-chain
   record and a mandatory public purpose string; (d) spends only via a member vote with a timelock.
4. **Flash-loan governance is structurally impossible.** There is nothing to flash-borrow. An
   attacker with unlimited capital and one second of time acquires exactly zero votes. This is worth
   contrasting with the usual industry answer — *"we take a snapshot at proposal creation"* — which
   still loses to an attacker who accumulates before proposing. Our answer is not a mitigation; it
   is the removal of the attack surface.
5. **Delegation is opt-in, revocable, non-transferable and non-purchasable.** A member MAY delegate
   their vote to another *member of the same party*, revocable at any instant including mid-vote,
   never delegable onward more than one hop (no delegation chains, which concentrate power), and
   with a **public cap**: no delegate may hold more than 1% of a party's delegated votes. Delegation
   is also **disabled by default** at charter level — a party must consciously enable it.
6. **Sybil profit is nil, not merely hard.** Because power is neither transferable nor purchasable,
   a successful Sybil gains a vote they cannot sell. This does not make Sybils harmless (they can
   still swing a vote), but it removes the *economic engine* that makes industrial Sybil farming
   worth financing.

### What about funding the platform itself?

The protocol has running costs (gas sponsorship, storage pinning, ceremony coordination). These are
funded by **capped donations and public grants**, published in full, and — critically — **funders
receive no governance rights of any kind**. A funder who wants influence gets exactly what a citizen
gets: one vote, if they are a verified person, in a party they join. If the protocol cannot be funded
under that constraint, the correct response is a smaller protocol, not a governance token.

## Consequences

**Good**
- The headline attacks (flash-loan takeover, whale accumulation, vote markets, membership resale)
  are eliminated at the root rather than mitigated.
- The system's fairness properties are *legible to a non-technical citizen*: "everyone gets one
  vote, and you cannot buy one." That legibility is itself a security property — people defend
  systems they understand.

**Bad / accepted risk**
- **No token means no token-funded growth.** Slower bootstrapping, no speculative user acquisition,
  harder fundraising. Accepted deliberately: a platform that launches a governance token to fund
  itself has already sold the thing it claims to protect.
- **1p1v is vulnerable to Sybils in a way stake-weighting is not.** Stake-weighting makes Sybils
  pointless by making identity irrelevant; 1p1v makes identity load-bearing. This is precisely why
  ADR-003 and ADR-004 carry so much of the design weight — with 1p1v, **personhood is the security
  boundary**. We accept the trade because the alternative is plutocracy by construction.
- **No quadratic voting for preference intensity.** Quadratic voting requires a budget of voice
  credits, and any budget is an asset; funded QV re-introduces purchasable influence. Rejected for
  *governance*. Quadratic *funding* (matching donations) is permitted for treasury allocation only,
  where the matching pool is public and the influence is over money, not over people.
