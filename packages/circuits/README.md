# Circuits

Three circuits, one per proof the protocol needs. Their **public signals are a contract**:
the order and count here must match exactly what the Solidity entrypoints require, because a
mismatch means either every action reverts permanently or — worse — a signal the contract
thought it was checking is simply absent.

| Circuit | Public signals | Consumed by |
|---|---|---|
| `personhood_enrol` | `[issuerNullifier, identityCommitment, issuerId, namespaceId]` (4) | `PersonhoodRegistry.enrol` |
| `residency_member` | `[residencyRoot, regionId, minTier, scope, nullifier, identityCommitment, provedAt]` (7) | `PartyRegistry.endorse` / `.withdrawEndorsement`, `Party.join` / `.leave` |
| `tenure_member` | `[partyRootAtSnapshot, partyId, scope, nullifier, tenureSeconds, snapshotAt]` (6) | `Governor.propose` / `.vote` / `.cancelDuringDiscussion` |

`MockVerifier` is deployed with these arities in the test fixture, and
`VerifierRegistry.verify` skips any verifier whose `publicSignalCount()` disagrees with the
proof it is given — so an arity drift fails closed rather than silently accepting.

## Status: written, not compiled

These are **sources only**. Compiling them needs the `circom` binary and a phase-2 ceremony
per circuit (ADR-005 §2), both of which are Phase-2 deliverables. Nothing in this repository
has ever verified a real proof, and the deployment gate in
`packages/contracts/script/deploy.mjs` refuses to promote any environment still wired to a
development mock.

## Two things a reviewer should check first

1. **`provedAt` and `snapshotAt` are half of a two-part check.** A circuit cannot read the
   clock. `residency_member` proves the credential had not expired at `provedAt`, and the
   contract bounds how stale `provedAt` may be. `tenure_member` derives `tenureSeconds` from
   `snapshotAt`, and the contract binds `snapshotAt` to the proposal's own snapshot. Either
   half alone is worthless: without the circuit constraint an expired credential passes;
   without the contract binding the prover picks their own clock and their own electorate.
2. **Positive tests prove nothing here.** An under-constrained circuit satisfies every honest
   witness. The mandatory test class is malformed-witness rejection, plus `circomspect` in
   CI and differential testing of witness generation against `@trumocracy/protocol`
   (Doc 04, ZK doctrine).
