# ADR-017 — Deterministic enrolment nullifier derivation and pluggable credential adapter interface

```
Status:        Accepted
Date:          2026-08-10
Owner:         Ravi Deshmukh — Principal Architect
Traces:        BR-006, BR-009, CON-002, CON-012, FR-069, FR-070
Source:        CR-v1.1.0 Change 6; GATE1-DECISION-2026-08-09.md
Note:          OPEN-16 (stray "ADR-017" references in ADR-001 and ADR-002) was resolved by the
               engineer before this ADR was minted (docs/06-coding-and-ut.md §5 defect fixes).
               This ADR therefore does not inherit any prior meaning from that erroneous citation.
Amendment:     2026-08-10 — SC-01 (SEC-TRUMOCRACY-CR-2026-08-10, critical finding): the
               "Universal in-circuit checks" section below is amended to make explicit that
               (1) the trust anchor public-key commitment IS A PUBLIC INPUT to each adapter
               class's circuit — not a private witness — and the contract MUST verify it
               on-chain against the registered issuer's trustAnchorHash; (2) each adapter
               class has its OWN circuit and verifier (personhood_enrol_[class]) with its own
               ceremony — there is NO shared CIRCUIT_ENROL constant; (3) the ceremony for
               each class is conducted against the then-current trust anchor for that issuer
               class. See Doc 03 §5.3 (trustAnchorHash, verifierAddress fields), §5.4
               (enrol() 5-signal arity), §10.1 (SC-01 STRIDE row).
```

## Context

ADR-003 specified the nullifier construction at the level of proof obligations but did not
specify:

1. **What the circuit must receive from each adapter class** — the per-class in-circuit
   requirements for eIDAS 2.0 wallets, ICAO Doc 9303 NFC chips, and offline paper KYC adapters
   (Aadhaar offline XML, Aadhaar paperless eKYC, or equivalent government-signed assertion
   schemes).
2. **The exact derivation function** — "Poseidon(idHashᵢ, ISSUER_SCOPE)" leaves open what
   `idHashᵢ` is constructed from, which the in-circuit witness supplies.
3. **The adapter interface contract** — what the protocol expects from any implementation that
   plugs into it.
4. **What the circuit verifies universally** — the four checks that apply regardless of adapter
   class.

FR-069 and FR-070 (CR-v1.1.0 Change 6) add these requirements. This ADR records the design.

## Decision

### In-circuit nullifier derivation

The enrolment nullifier is derived as:
```
enrolmentNullifier = Poseidon(stable_id_secret, enrolment_scope)
```

Where:
- `stable_id_secret` is the adapter-supplied stable personal identifier. It MUST NOT leave the
  ZK circuit; the circuit takes it as a private input.
- `enrolment_scope` is a deployment-scoped public constant:
  `keccak256("enrol", chainId, PersonhoodRegistryAddress)`. This prevents a nullifier from one
  deployment being replayed at another.

This replaces the earlier notation `Nᵢ = Poseidon(idHashᵢ, ISSUER_SCOPE)` from ADR-003 with a
precise specification of what `idHashᵢ` means in each adapter class.

### Per-class in-circuit requirements

None of these adapter classes is hardcoded as the only supported path. Region-level adapter
selection is a configuration decision. The three classes below are CANDIDATE types named at
the direction of the human approver (CR-v1.1.0 Change 6); additional classes require a new ADR
with a threat model and audit (consistent with OI-03).

**(a) eIDAS 2.0 wallet adapters**

The adapter MUST supply to the FR-069 derivation circuit:
- `(i)` A qualified electronic attestation of attributes bearing a valid qualified trust-anchor
  signature, verified against the issuing member-state's trust anchor published in the applicable
  national or supra-national trust list. The circuit verifies this signature in-circuit (or
  via a pre-verified proof of the signature).
- `(ii)` The stable personal identifier designated by the issuing state (e.g. the natural-person
  identifier in the Personal Identification Data attestation). This is the `stable_id_secret`
  input to the derivation.
- `(iii)` A residency attribute placing the person in the claimed region tree.

The derivation operates on field `(ii)`.

**(b) ICAO Doc 9303 NFC chip adapters**

The adapter MUST supply to the FR-069 derivation circuit:
- `(i)` The Document Security Object (SOD), verifiable against the issuing state's Document
  Signer Certificate obtained from the ICAO public key directory. The circuit verifies the
  SOD signature in-circuit.
- `(ii)` The stable identifier field — MRZ DocumentNumber or chip-resident pseudonymous
  identifier as designated by the issuing state. This is the `stable_id_secret` input.
- `(iii)` An attested residency claim from a recognised attestor.

The derivation operates on field `(ii)`.

**(c) Offline paper KYC adapters** (e.g. Aadhaar offline XML, Aadhaar paperless eKYC, or
any equivalent government-signed offline assertion scheme)

The adapter MUST supply to the FR-069 derivation circuit:
- `(i)` A digitally signed or verifier-attested assertion carrying a government-assigned stable
  identifier, with the attestor's signature verifiable in-circuit against their published key.
- `(ii)` The government-assigned stable identifier from field `(i)`. This is the
  `stable_id_secret` input.
- `(iii)` A residency attribute established by the attestor; evidence of the attestor's
  authorisation to operate in the region.

The derivation operates on the stable identifier in field `(ii)`. No biometric data is retained
by the platform after the attestor check; the circuit receives only the stable identifier, not
any biometric.

### Universal in-circuit checks (all adapters)

The enrolment circuit MUST verify the following four conditions, regardless of adapter class:

1. **Issuer authenticity:** The credential was signed by a recognised issuer (verified against
   the adapter's published trust anchor; the trust anchor is a public input to the circuit).
2. **Credential freshness:** The credential has not expired (`validUntil > blockTimestamp`).
3. **Region membership:** The region attribute places the person's residency within the claimed
   region tree (verified against the on-chain region registry root).
4. **Correct derivation:** The enrolment nullifier was correctly derived from the stable
   identifier (`nullifier == Poseidon(stable_id_secret, enrolment_scope)`, where
   `stable_id_secret` is the private witness and `nullifier` is a public output).

### Adapter interface

```
interface ICredentialAdapter {
    /// The credential-class of this adapter (GOV_EID | AVAILABILITY_ONLY).
    function credentialClass() external pure returns (CredentialClass);

    /// The namespace identifier shared by all issuers that read the same underlying
    /// credential type. Two adapters with the same namespaceId derive the same
    /// enrolment nullifier from the same physical credential.
    function getNamespaceId() external pure returns (bytes32);

    /// The circuit verifier address that verifies proofs produced by this adapter's witness
    /// preparation. Must be registered in the VerifierRegistry.
    function getVerifierAddress() external view returns (address);
}
```

The adapter does NOT implement `prepareWitness`; witness preparation is performed on-device in
the WASM prover and never transmitted. The interface above is the on-chain contract-level API.

## Consequences

**Good**
- The derivation is fully deterministic: the same stable identifier and the same deployment
  always produce the same nullifier. This means a person who loses their key can re-derive
  their nullifier (the collision-is-recovery path, FR-071, ADR-018) without needing the
  platform's cooperation.
- The pluggable interface means a new government credential type (e.g., a future EU national
  identity wallet standard not yet named) can be integrated as a new adapter with its own ADR,
  without modifying the core enrolment circuit.
- No stable identifier ever leaves the ZK circuit; only the derived nullifier is published.

**Bad / accepted risk**
- **Adapter development cost.** Each adapter requires a separate Circom circuit to verify its
  credential's signature scheme (RSA for ICAO SOD; BLS/ECDSA for eIDAS wallets; Aadhaar uses
  RSA-2048). These are non-trivial ZK engineering efforts and each needs its own ceremony.
- **Circuit count grows with adapter count.** Three circuits × ceremony overhead × audit surface.
  The Phase-1 restriction (ADR-016, government eID only) limits this to two or three circuits
  at launch.
- **Trust list freshness.** The circuit's trust anchor is a public input; stale trust lists
  let expired or revoked issuers pass. The VerifierRegistry timelock window (DES-039) and the
  attester-set governance process (ADR-003) manage this, but operational diligence is required.

## Alternatives rejected

**Non-deterministic enrolment nullifiers (randomised at enrolment time).** Rejected because
the recovery flow (FR-071) requires the same nullifier to be re-derivable from the same
credential without platform cooperation. A randomised nullifier makes this impossible.

**Hash of the raw stable identifier without the circuit's in-circuit computation.** Rejected.
CON-012 prohibits any path where the stable identifier is transmitted outside the ZK circuit.
On-device hashing and then publishing the hash would still require the client to hold the raw
identifier, which must not cross the B1→B2 trust boundary.

**Uniform adapter interface for all credential classes.** Rejected. The per-class requirements
differ enough (RSA vs ECDSA vs government-attestor models) that a single interface would be
either too prescriptive (ruling out valid adapters) or too loose (failing to specify what must
be verified). Per-class specification with universal checks is cleaner.
