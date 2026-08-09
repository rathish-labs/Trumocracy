# ADR-010 — Protocol governance & upgradeability: immutable core, modular periphery, timelocked change, guaranteed exit

```
Status:        Accepted
Date:          2026-08-08
Owner:         Ravi Deshmukh (Principal Architect)
Traces:        CON-003, NFR-017, NFR-018, RISK-16, RISK-07
```

## Context

"Whoever can upgrade the contract is the real government." A proxy admin key on a political platform
is a godfather with a multisig. But an unupgradeable system with a circuit bug cannot be fixed, and
this system has circuits, oracles and issuer registries that *will* need to change.

## Decision

**Split by mutability requirement, not by convenience.**

| Layer | Mutability | Governed by |
|---|---|---|
| **Core** — membership trees, nullifier registry, vote accounting, party state machine, treasury custody | **Immutable. No proxy, no admin, no pause.** Deployed once per version; a new version is a *new deployment* that parties opt into by migration vote | nobody |
| **Registries** — accepted personhood issuers, residency attesters, circuit verifiers, region scheme version, population oracle | Mutable via protocol governance | 30-day timelock (48h expedited for *removing* a compromised entry — removal only, never addition) |
| **Periphery** — paymaster policy, indexer, gateways, frontends | Freely mutable | operational; all client-replaceable |

**There is no pause button on the core.** No emergency multisig can stop a party's vote, freeze a
treasury, or halt an election. The ability to stop a political process on request is the single most
dangerous capability we could build, and a state actor's first demand. We do not build it. Emergency
response is *migration*, not *suspension* — slower, louder, and impossible to do quietly.

**Protocol governance is itself 1p1v** (ADR-007), among enrolled citizens across all parties, with
tiered thresholds and no founder privilege. The founding organisation holds **no** special key after
Phase 4; the sunset of any deployment key is itself a timelocked, published, irreversible
transaction (`renounceProtocolKeys()`), and the roadmap treats it as a Gate-2-equivalent milestone
rather than an aspiration.

**Guaranteed exit (NFR-018).** Every party can export its full state — charter, manifesto
history, member commitment tree, vote history, treasury record — as a signed, verifiable archive at
any time, with **no permission from anyone**, and re-instantiate it on another deployment or another
chain. Exit is tested in CI as a first-class flow (TC-EXIT-*), because an exit path that has never
been executed is not an exit path.

## Consequences

**Good** — no on-chain authority can be captured or compelled into altering party outcomes; upgrade
risk is confined to registries whose worst case is degraded (not falsified) service; exit makes the
whole protocol non-coercive.

**Bad / accepted risk**
- **An immutable core bug is unfixable in place.** Mitigation: the core is deliberately small
  (target < 2,000 SLOC), maximally audited, formally specified for its critical invariants, and
  every party's migration path to a new core version is designed, tested and exercised on testnet
  before mainnet — so "deploy v2 and migrate" is a rehearsed operation, not a crisis improvisation.
- **Registry governance can be captured** if participation is low. Mitigations: high quorum for
  registry changes, 30-day timelock, and the exit right — a captured registry is a reason to leave,
  and everyone can.
- **Slow.** 30 days to accept a new personhood issuer is frustrating. Accepted: the registries define
  who counts as a person, and that decision should be slow.
