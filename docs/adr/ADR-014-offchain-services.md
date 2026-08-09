# ADR-014 — Off-chain services: an untrusted indexer, a replaceable relayer, and Sybil-resistant gas sponsorship

```
Status:        Accepted
Date:          2026-08-08
Owner:         Ravi Deshmukh (Principal Architect)
Traces:        NFR-006, NFR-005, NFR-007, RISK-16, RISK-15, RISK-09
```

## Context

Reading directly from an L2 for every screen is too slow for a usable product, and ERC-4337
sponsorship needs a bundler and a paymaster. Both are off-chain services, and both are therefore
potential points of control, failure and surveillance in a system whose whole thesis is that no such
point should exist.

## Decision

### The indexer is a cache, never an authority

Event-sourced read model (Ponder-style: chain events → Postgres → GraphQL) serving lists, search,
timelines and aggregate counts. Three rules make it safe:

1. **Every security-relevant value is re-verified against the chain by the client** before it is
   acted on: petition counts at the moment of endorsing, eligibility at the moment of voting,
   thresholds, tallies, treasury balances. The indexer may make the UI *fast*; it may never make it
   *wrong*.
2. **It is reproducible and multi-operator.** The indexer is open source and deterministic — anyone
   can run one and diff it. The client accepts a user-supplied indexer URL, and ships with several.
   A captured or lying indexer is detectable by anyone and routable-around by everyone.
3. **It logs nothing that identifies a reader.** No IP logs, no per-user query history, no
   analytics on political browsing. Reading which parties exist must not create a record of who is
   interested in which party — that record would be as dangerous as the member list we refused to
   build.

### The relayer/bundler is replaceable, and the fallback path is real

The client's default transport is a hosted bundler. Its fallbacks, in order: (1) alternate public
bundlers, (2) direct self-paid submission from the citizen's own account, (3) **L1 force-inclusion**
(ADR-001). All three are implemented and **tested in CI**, not documented as theoretical — an escape
hatch that has never been exercised does not exist.

### Sponsorship must not be drainable

Gas sponsorship is the most abusable resource in the system: free transactions, funded by a public
treasury, on a permissionless network. Policy:

- Sponsorship is bound to the **personhood nullifier**, not to an address — creating more addresses
  gains nothing.
- **Per-person budget per epoch** (e.g. 50 sponsored ops/day), with a much lower budget for
  tier-1 (weakest) personhood credentials.
- **Action allowlist**: only protocol actions with a civic purpose are sponsored, never arbitrary
  calls.
- **Circuit-breaker**: if daily spend exceeds the p99 baseline by 3×, sponsorship degrades to
  self-pay and pages the on-call SRE, rather than draining the treasury silently.
- Sponsorship exhaustion is a **degradation, never a denial, and never a charge**: the action is
  **queued** with a plain explanation and an expected time (FR-061, NFR-005). The citizen is
  charged USD 0.00 in every case.

  Self-payment exists in the SDK **only** as a censorship escape hatch — used when the paymaster
  and every alternate bundler are unavailable or censoring, i.e. when the alternative is denial
  rather than delay. It is never offered as a way to skip the queue: letting a citizen pay to act
  sooner during a live vote is money buying influence, which is the one thing this platform is
  built to prevent (ADR-007).

## Consequences

**Good** — a fast, cheap product without introducing a trusted party; every off-chain component is
observable, replaceable and non-authoritative.

**Bad / accepted risk**
- Running the default indexer/relayer makes us a *convenient* dependency even though we are not a
  *necessary* one; convenience creates de-facto centralisation over time. Mitigated by funding
  independent operators from launch and by publishing operator diversity as a governance signal
  the SRE tracks (Doc 11).
- Client-side re-verification costs extra round trips and complexity. Accepted — it is the property
  that makes the indexer safe to exist.
