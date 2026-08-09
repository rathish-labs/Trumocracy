# ADR-001 — Execution & settlement layer: an Ethereum L2 (OP Stack), starting on a shared rollup

```
Status:        Accepted
Date:          2026-08-08
Owner:         Ravi Deshmukh (Principal Architect)
Supersedes:    —
Traces:        NFR-005, NFR-014, NFR-007, CON-003, RISK-09, RISK-07
```

## Context

Trumocracy needs a public, verifiable execution environment where:

1. **Cost per citizen action must be under one US cent.** A citizen endorses a petition, joins a
   party, votes on a proposal, nominates a candidate. If any of these costs more than a fraction of
   a cent, the platform is a toy for the wealthy — which is precisely the failure mode the product
   exists to eliminate. Cost is not a performance concern here; it is a **legitimacy** concern.
2. **No single operator may be able to stop the system**, alter results, or be compelled to. A
   government that dislikes an emerging party is an in-scope adversary (RISK-07).
3. **Zero-knowledge proof verification must be cheap on-chain.** Every privacy guarantee in this
   design terminates in an on-chain SNARK verification. If pairing checks are expensive or
   unavailable, the whole privacy architecture collapses into "trust the server".
4. **The social graph is global but the *jurisdiction* is local.** We need one shared substrate, not
   a chain per country, or cross-party and cross-region composition breaks.

### Options considered

| Option | Cost/action | ZK verify | Neutrality | Maturity | Verdict |
|---|---|---|---|---|---|
| Ethereum L1 | $0.50 – $20 | precompiled, cheap in gas *units*, ruinous in USD | highest | highest | **Rejected** — violates NFR-005 by 2–3 orders of magnitude |
| **OP Stack L2 (shared: Base / OP Mainnet)** | **~$0.0001 – $0.002** | bn254 precompiles inherited from L1 | inherits Ethereum security; sequencer is a liveness-only trust | very high | **Accepted for v1** |
| ZK-rollup L2 (zkSync, Linea, Scroll, Polygon zkEVM) | ~$0.001 – $0.01 | supported, but recursive-proof cost and non-standard precompile behaviour vary | inherits Ethereum | high | Rejected for v1 — EVM-equivalence caveats around precompiles and gas metering add ZK-on-ZK risk for no benefit we need today |
| Solana | ~$0.0002 | no bn254 pairing precompile parity; alt_bn128 syscalls exist but the Groth16 tooling and audited verifier ecosystem is far thinner | single client history, validator concentration | high | Rejected — the ZK verifier ecosystem is the deciding factor, not throughput |
| Cosmos SDK sovereign chain | ~$0.0001 | full control (custom precompiles) | **must bootstrap its own validator set** — a new political-party platform bootstrapping its own security is a capture target on day one | medium | Rejected for v1, revisit at ADR-001b |
| Sovereign OP Stack rollup (our own chain) | ~$0.00005 with alt-DA | full control | we control the sequencer — which is a *centralisation liability* before we have a credible decentralised sequencer set | medium | **Deferred to Phase 4** (see Consequences) |

## Decision

**Deploy the Trumocracy protocol on an OP Stack Ethereum L2 (Base) for v1**, with:

- **Data availability:** Ethereum blobs (EIP-4844). Only commitments, roots, nullifiers and tallies
  go on-chain; documents go to content-addressed storage (ADR-009).
- **Fee abstraction:** citizens never hold the gas token. All citizen-facing transactions are
  sponsored through an ERC-4337 paymaster (ADR-002), rate-limited per personhood nullifier
  (ADR-014) so sponsorship cannot be drained by a Sybil flood.
- **Censorship escape hatch:** every state-changing citizen action MUST also be submittable through
  the L2's **L1 force-inclusion** path (`OptimismPortal.depositTransaction`). If the sequencer
  censors a party, its members can still act from L1 within the force-inclusion window. This is
  wired into the SDK as a fallback transport, not left as a theoretical property (DES-041).
- **Multi-chain readiness from day one:** all contracts are deployed via CREATE2 with
  chain-agnostic addresses and no chain-specific assumptions, so redeployment to another L2 or to a
  sovereign rollup is a configuration change, not a rewrite.

## Consequences

**Good**
- Sub-cent citizen actions with Ethereum-grade settlement assurance.
- bn254 `ecAdd`/`ecMul`/`ecPairing` precompiles are available and cheap, so Groth16 verification
  (ADR-005) costs ~250–350k gas — under a cent at L2 fee levels.
- The largest audited Solidity/ZK library ecosystem, which materially reduces the chance of a
  privacy bug in code we did not write.

**Bad / accepted risk**
- **The sequencer is a liveness and ordering trust assumption.** A censoring sequencer can delay
  (not forge) actions. Mitigated by force-inclusion, but delay during a live vote is itself an
  attack. Mitigation: voting windows MUST be ≥ 72h so a force-inclusion round trip (typically
  ~12–24h) cannot silently disenfranchise anyone (NFR-007, RISK-09).
- **Blob-fee volatility** makes cost a *distribution*, not a constant. The treasury MUST hold a
  sponsorship buffer sized to 90 days at p95 fees, and the paymaster degrades to
  **queue-with-an-explanation at zero cost to the citizen** rather than failing closed
  (FR-061, NFR-005; Doc 11 §runbook).
- We inherit the L2's upgrade key risk. Accepted for v1 and explicitly re-opened in Phase 4.

**Phase 4 revisit (ADR-001b, deferred).** Once the protocol has a real member base, migrate to a
**sovereign OP Stack rollup with a governance-owned, rotating sequencer set** and alt-DA
(Celestia/EigenDA) for a further ~10× cost reduction. We deliberately do *not* do this first:
running our own chain before we have a decentralised sequencer set would replace "trust Base" with
"trust us", which is a worse trade for a platform whose entire premise is the absence of a
godfather.

## Alternatives explicitly rejected and why

- **"Just use a permissioned/consortium chain, it's cheaper and simpler."** Rejected. A consortium
  chain has a membership list, and a membership list is a gatekeeper. The product thesis dies.
- **"Do it off-chain with a transparency log (Certificate-Transparency style)."** Rejected as the
  *primary* substrate: a transparency log proves *what an operator published*, not that the
  operator published everything. It cannot give a citizen the guarantee that their endorsement was
  counted. It is, however, used as a *secondary* mirror (ADR-009).
