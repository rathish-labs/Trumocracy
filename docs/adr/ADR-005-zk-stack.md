# ADR-005 — ZK stack: Circom + Groth16 on bn254, Poseidon LeanIMT groups, scope-bound nullifiers

```
Status:        Accepted
Date:          2026-08-08
Owner:         Ravi Deshmukh (Principal Architect)
Traces:        NFR-001, NFR-005, NFR-006, FR-001..FR-005, FR-030..FR-035, RISK-10
```

## Context

Every privacy property in this system reduces to one on-chain question: *"is this proof valid?"*
The proving system choice therefore drives (a) on-chain verification cost, which drives whether
citizens can afford to participate; (b) client-side proving time, which drives whether a five-year-old
Android phone can generate a proof before the user gives up; and (c) the trusted-setup posture, which
is a live compromise risk (RISK-10).

| System | On-chain verify | Setup | Client proving (mobile) | Tooling maturity |
|---|---|---|---|---|
| **Groth16 / bn254** | **~230–290k gas, constant** | per-circuit trusted setup (Powers of Tau + phase 2) | fastest; ~1–4s for a Semaphore-class circuit in WASM | highest — snarkjs, circom, huge audited corpus |
| PLONK / KZG | ~350–500k gas | universal setup (reusable) | 2–4× slower than Groth16 | high |
| Halo2 / IPA | ~1–5M gas or recursion | **no trusted setup** | slow on mobile | medium |
| Noir + Barretenberg (UltraHonk) | ~400–700k gas | universal | good, improving fast | medium-high, best developer ergonomics |
| STARKs | very expensive directly | **no trusted setup**, post-quantum | large proofs | medium on EVM |

## Decision

**Circom + Groth16 over bn254 for all production circuits**, with these commitments:

1. **Constant, minimal verification cost.** Groth16 verification is 3 pairings + a few scalar mults —
   ~250k gas regardless of circuit size. At ADR-001 fee levels that is well under a cent, which is
   the requirement that ultimately decides this. A citizen voting must not cost more than a citizen
   reading.
2. **Per-circuit ceremony, run in public.** Each circuit gets a phase-2 ceremony on top of the
   existing **Perpetual Powers of Tau** (already ≫80k contributors — we do not re-run phase 1). Each
   phase-2 ceremony MUST have ≥ 500 independent contributors including named public figures from
   civil society, with attestations and a beacon; contributions verifiable by anyone with
   `snarkjs zkey verify`. The ceremony transcript is published permanently (ADR-009).
3. **The trusted-setup risk is bounded and stated plainly.** If *every* phase-2 contributor colluded,
   they could forge proofs — meaning fake residents and fake votes. They could **not** decrypt
   anyone's vote or deanonymise anyone; the failure mode is forgery, not privacy loss. That
   asymmetry is why Groth16 is acceptable here: the thing at stake in a leak (people's political
   identities) is not exposed by a setup compromise. Forgery is additionally rate-limited by the
   personhood and residency layers, which an attacker would have to break independently.
4. **Group membership uses the Semaphore construction**: Poseidon-hashed **LeanIMT** (incremental
   Merkle tree, gas-efficient, ~70–90k gas per on-chain insert — measured, see Doc 06), depth 32
   (≈4.3B members), with a rolling window of the last 64 valid roots accepted on-chain so a proof
   generated against a slightly stale root is not invalidated by a concurrent insert.
5. **The verifier is an interface, not a hard-coded contract.** `IProofVerifier` with a registry
   per circuit ID and version, so a circuit can be upgraded (new ceremony, new verifier) behind a
   protocol timelock without redeploying the protocol. Old verifiers stay live for in-flight
   proofs.
6. **A migration path to a transparent system is designed in, not promised vaguely.** Because
   verification is behind `IProofVerifier` and circuits are specified independently of the proving
   backend, moving to Noir/UltraHonk or a STARK backend when on-chain costs make it viable is a
   verifier swap + ceremony retirement, not a redesign. Target for re-evaluation: Phase 4.

### The circuit set

| Circuit | Proves | Public inputs | Private inputs |
|---|---|---|---|
| `personhood_enrol` | a valid issuer credential exists for this identity commitment | issuerId, `Nᵢ`, `C` | issuer signature/witness, document hash |
| `residency_member` | "I am a credentialed resident of R with tier ≥ t" | regionRoot, regionId, minTier, scope, `Nₐ` | s, Merkle path, credential fields |
| `party_member` | "I am a member of party P" | partyRoot, partyId, scope, `Nₐ`, signalHash | s, Merkle path |
| `tenure_member` | "I have been a member of P since before block B" | partyRootAtB, partyId, scope, `Nₐ` | s, Merkle path at snapshot |
| `vote_message` (MACI) | a well-formed encrypted ballot from a registered key | stateRoot, msgRoot | ballot, key, salt |
| `tally` (MACI) | the published tally is the correct decryption of the message queue | stateRoot, tallyCommitment | coordinator share, ballots |

Each circuit is **frozen by hash** in the on-chain verifier registry: `circuitId → (r1csHash, zkeyHash, verifierAddress, ceremonyURI)`. A client refusing to prove against an unrecognised
`zkeyHash` is a first-class client requirement (DES-052) — otherwise a malicious frontend could hand
users a backdoored proving key.

## Consequences

**Good** — cheapest possible on-chain privacy; the most battle-tested toolchain; mobile proving in
seconds; a clean upgrade seam.

**Bad / accepted risk**
- **Trusted setup exists.** Bounded as described above, mitigated by ceremony scale and by the fact
  that forgery — not deanonymisation — is the failure mode.
- **Circom is unergonomic and under-constraint bugs are the classic ZK failure.** Mitigations:
  every circuit gets (a) two independent audits, (b) `circomspect` in CI, (c) differential testing
  of the witness generator against a reference implementation, (d) **negative tests that assert a
  malformed witness fails** — an under-constrained circuit passes all positive tests, so positive
  tests prove nothing. This is stated in Doc 04 as a mandatory test class, not a suggestion.
- **Proving on very low-end devices (< 2GB RAM) may exceed 10s.** Mitigation: an optional
  **delegated-proving** path where the *witness stays on device* and only the (blinded) proving
  work is offloaded is explicitly **not** used, because it leaks the witness. Instead: circuits are
  kept small (depth-32 membership, ≤ 2^17 constraints), and the offline/assisted path (Doc 14) uses
  a civic-notary device the citizen physically controls.
