# Security Re-scan -- SC-01 Verdict

`
Scan ID:    SEC-TRUMOCRACY-RESCAN-SC01-2026-08-10
Scanner:    reviewer-qa (independent approver -- read-only on all code and docs/)
Date:       2026-08-10
Scope:      SC-01 only -- enrolment path trust-anchor binding and cross-adapter verifier dispatch.
            SC-02..SC-12 remain open and are NOT re-litigated here.
Documents:  docs/03-architecture-design-sdd.md v1.1.2
              changelog lines 32-43; SS5.3 lines 292-299; SS5.4 line 387
              DES-069/070 lines 260-261; SS10.1 STRIDE line 622
            docs/adr/ADR-017-nullifier-derivation-and-adapters.md lines 12-21
Method:     Attack Path A and Path B re-attacked against v1.1.2 specification.
            New attack surface (trust-anchor lifecycle) assessed independently.
Verdict:    SC-01 CLOSED. New findings: SC-13 (HIGH), SC-14 (MEDIUM).
`

---

## 1. What the architect changed (verified, not trusted)

### 1.1 Issuer struct (Doc 03 SS5.3, lines 292-299)

The issuer struct now contains two new fields:

  issuers: issuerId -> {active, credentialClass, stateOperated, tier,
                        operator, epochCap, metadataURI,
                        trustAnchorHash, verifierAddress}

- trustAnchorHash (bytes32): on-chain commitment to the issuer class signing trust anchor
  (eIDAS trust-list key set / ICAO CSCA root / Aadhaar attestor key);
  populated at registerIssuer via the timelock-governed process.
- verifierAddress (address): per-adapter-class enrolment verifier contract;
  dispatch target for enrol().

### 1.2 enrol() signal vector (Doc 03 SS5.4, line 387)

  enrol(issuerId, proof, [Ni, C, issuerId, namespaceId, trustAnchorHash])
  circuit: personhood_enrol_[class]  (resolved via issuers[issuerId].verifierAddress)
  on-chain MUST check: publicSignals[4] == issuers[issuerId].trustAnchorHash

Five signals. trustAnchorHash at signal index 4 is a PUBLIC signal, not a private witness.
The MUST check is explicit in the table entry.

### 1.3 DES-069 / DES-070 (lines 260-261)

DES-069 (line 260): trust-anchor commitment is a public input to the enrolment circuit
  and MUST be checked on-chain against issuers[issuerId].trustAnchorHash (SC-01).
DES-070 (line 261): verifierAddress is the dispatch target for enrol() --
  per-adapter-class verifier, not a shared CIRCUIT_ENROL constant (SC-01).

### 1.4 STRIDE Spoof row (Doc 03 SS10.1, line 622)

New row added:
  Threat: enrolment proof verified against an attacker-chosen trust anchor; prover
    substitutes K_attack for the issuer real trust anchor.
  Mitigation: trustAnchorHash is public signal publicSignals[4] bound on-chain to
    issuers[issuerId].trustAnchorHash; per-adapter verifier dispatch via
    issuers[issuerId].verifierAddress prevents cross-adapter-class proof substitution.
  Residual: a compromised or mis-registered trust anchor at registerIssuer time --
    mitigated by the timelock-governed registration process.

### 1.5 ADR-017 amendment (lines 12-21)

Amendment explicitly states:
  1. Trust anchor public-key commitment IS A PUBLIC INPUT to each adapter class circuit,
     not a private witness. Contract MUST verify it on-chain against trustAnchorHash.
  2. Each adapter class has its OWN circuit and verifier with its own ceremony.
     NO shared CIRCUIT_ENROL constant.
  3. Ceremony for each class conducted against the then-current trust anchor.

---

## 2. Path A re-attack: attacker substitutes K_attack as trust anchor

### Before the fix (original SC-01)

Trust anchor was a private witness. Attacker uses K_attack, signs a fake credential
with it, supplies K_attack as the private witness. The circuit verified the credential
signature was valid against the supplied trust anchor. The contract could not distinguish
the correct trust anchor from the attacker-chosen one. Result: unlimited synthetic
identities enrolled.

### Path A against v1.1.2

Step 1. Attacker constructs a fake credential signed with K_attack.
Step 2. Circuit requires trust anchor commitment as PUBLIC signal index 4.
  Prover must include Hash(K_attack) at publicSignals[4].
Step 3. Contract executes: require(publicSignals[4] == issuers[issuerId].trustAnchorHash)
Step 4. issuers[issuerId].trustAnchorHash = Hash(legitimate_anchor), set at registerIssuer.
Step 5. Hash(K_attack) != Hash(legitimate_anchor) -> check reverts. Proof rejected.

PATH A: CLOSED.

The on-chain binding makes it impossible for the attacker to substitute their own trust
anchor without the MUST check failing. Breaking this requires either:
  a) Computing a second preimage of the legitimate trustAnchorHash (breaks Poseidon/keccak).
  b) Getting K_attack registered as the legitimate anchor (requires passing timelock governance).
  c) Finding a soundness bug in the circuit (auditable per CON-012 and SC-11).
None of these is trivially achievable. Path A is closed.

---

## 3. Path B re-attack: cross-adapter-class proof substitution

### Before the fix (original SC-01)

A single CIRCUIT_ENROL constant meant all proofs were verified by the same verifier.
A proof from adapter class X could be submitted under issuerId Y (adapter class Z).
No per-adapter verifier binding existed in the issuer struct or enrol() dispatch.

### Path B against v1.1.2

Step 1. Attacker uses adapter class X (e.g. eIDAS) to generate a proof, exploiting a
  hypothetical circuit weakness.
Step 2. Attacker submits to enrol() claiming issuerId Y, where Y is an ICAO issuer.
Step 3. Contract dispatches: verifier = issuers[Y].verifierAddress
  issuers[Y].verifierAddress is the ICAO adapter verifier, not the eIDAS verifier.
Step 4. ICAO verifier receives a proof generated by the eIDAS circuit. Structurally
  incompatible (different proving key, different signal layout). Verification fails.
Step 5. Even if the verifier check were somehow bypassed: publicSignals[4] must equal
  issuers[Y].trustAnchorHash = Hash(ICAO_CSCA_root). The eIDAS proof carries
  publicSignals[4] = Hash(eIDAS_trust_anchor). Different hashes -> second check reverts.

PATH B: CLOSED.

Two independent layers protect against cross-adapter substitution:
  Layer 1: per-issuerId verifierAddress dispatch -- wrong circuit fails at the verifier.
  Layer 2: trust-anchor public signal check -- wrong adapter class carries wrong anchor hash.
An attacker would need to simultaneously break both layers, which requires obtaining a
legitimate credential from the target class or finding a hash collision.

---

## 4. New attack surface: trust-anchor lifecycle

The fix introduces a dependency on on-chain trustAnchorHash correctness.
Two lifecycle scenarios require assessment: post-registration compromise and
legitimate trust-anchor rotation.

---

### SC-13 (HIGH) -- No trust-anchor-only revocation or emergency update path specified;
STRIDE residual covers mis-registration only, not post-registration compromise.

Affects: Doc 03 SS5.3, SS5.4, SS10.1 STRIDE residual; ADR-017 amendment; ADR-008
Affected IDs: FR-069, FR-070, NFR-004, BR-006, DES-069, DES-070, ADR-017, ADR-008

The STRIDE residual (line 622) states: a compromised or mis-registered trust anchor
at registerIssuer time -- mitigated by the timelock-governed registration process.

This framing covers the REGISTRATION-TIME attack correctly. The timelock gives the
community time to detect and veto a malicious registration. That defence is working.

The residual does NOT cover POST-REGISTRATION compromise:

Scenario: eIDAS member-state X suffers a trust-anchor key compromise. The compromised
private key is accessible to an attacker. The chain still treats it as legitimate
because trustAnchorHash == Hash(compromised_key). Attacker can sign synthetic credentials
and enrol unlimited synthetic identities until the on-chain anchor is updated or the
issuer is deactivated.

Specific gaps:

  a) No UPDATE-ANCHOR or REVOKE-ANCHOR function is specified. The only remedy is
     full issuer deactivation (active = false). This is a blunt instrument: it stops
     ALL new enrolments from that class, not just the Sybil-enrolment vector.
     Already-enrolled nullifiers remain permanently valid (correct).

  b) The timelock protecting malicious REGISTRATION also applies to UPDATE if the same
     governance tier is required (not specified). A trust-anchor compromise could then
     be exploited for the full timelock duration. The mechanism designed to protect
     legitimate registration slows emergency response.

  c) A fast-deactivation path (T0 operational action: active = false) may exist under
     ADR-008 T0, but the specification does not state that issuer deactivation is T0
     vs. requiring the same governance tier as registration.

SC-13 does NOT reopen SC-01. SC-01 is about whether the binding works correctly for a
correctly-registered anchor -- it does. SC-13 is about what happens when the anchor
the binding depends on is itself compromised post-registration.

Recommendation: ADR-017 and Doc 03 SS5.4 must specify:
  a) A trust-anchor UPDATE function to change trustAnchorHash for an existing issuerId
     without requiring full re-registration.
  b) Governance tier for emergency issuer deactivation: lower than registration tier
     (T0 or T1, not T3) to allow fast emergency response.
  c) Expand the STRIDE residual to cover post-registration compromise and name the
     emergency deactivation path and its governance tier as the mitigation.
Route to: architect.

---

### SC-14 (MEDIUM) -- Trust-anchor rotation liveness gap;
governance tier for trustAnchorHash UPDATE unspecified;
legitimate new enrolments blocked during update window.

Affects: Doc 03 SS5.3, SS5.4; ADR-017 amendment; ADR-008
Affected IDs: FR-069, FR-070, NFR-008, DES-069, DES-070, ADR-017, ADR-008

When a legitimate trust anchor rotates (normal lifecycle event):

Step 1. Issuing authority updates their trust anchor. New credentials signed with new key.
Step 2. User with a new credential tries to enrol: publicSignals[4] = Hash(new_anchor),
  but issuers[issuerId].trustAnchorHash = Hash(old_anchor). On-chain check fails.
  New enrolments blocked for that issuer class.
Step 3. Platform must run governance to update trustAnchorHash. The spec says
  timelock-governed but does not specify which tier (T0-T3) or the duration.
Step 4. Until the update completes, ALL new enrolments from that issuer class blocked.
  Duration is unknown from the specification alone.

Already-enrolled users are UNAFFECTED. trustAnchorHash is only checked at enrol().
Liveness concern is for NEW enrolments during the rotation window only.

Recommendation:
  a) Specify governance tier for trust-anchor UPDATE operations, distinct from
     initial registration. UPDATE should be faster (e.g. T1 rather than T3).
  b) Specify maximum permissible staleness between issuing-authority rotation and
     on-chain update -- this is an operational SLA for the SRE function.
  c) Specify whether a grace-period accepting both old and new anchor hashes is
     supported, and if so, how it prevents a Sybil window during the overlap.
Route to: architect.

---

## 5. Is registerIssuer timelock governance sufficient for the residual?

For mis-registration protection: YES. The timelock gives the community time to detect
and veto a malicious trust-anchor registration. Correct control for that scenario.

For post-registration compromise (SC-13): INSUFFICIENT as the sole control.
Proactive governance timelocks are too slow for emergency breach response.

A complete residual statement requires two distinct sub-entries:
  Residual (a): mis-registered anchor at registerIssuer time -- mitigated by the
    timelock-governed registration process (governance tier T[N], duration D).
  Residual (b): anchor compromised after registration -- mitigated by emergency
    issuer deactivation (governance tier T[M], duration D2, where M < N);
    scope limited to new enrolments only (already-enrolled users unaffected).

---

## 6. Verdict summary

SC-01: CLOSED.

Path A (attacker-chosen trust anchor as private witness): CLOSED.
  trustAnchorHash is a public signal bound on-chain. An attacker-chosen key
  produces a hash mismatch at the MUST check. The contract reverts.

Path B (cross-adapter-class proof substitution): CLOSED.
  Per-issuerId verifierAddress dispatch means each issuer uses its own adapter-class
  verifier. A proof from adapter class X presented under issuerId Y fails at the
  verifier and independently at the trust-anchor signal mismatch check.

The fix is mechanically correct and addresses the root cause of SC-01.

New findings from the fix:
  SC-13 (HIGH): No trust-anchor-only revocation/emergency update path. STRIDE residual
    covers mis-registration only, not post-registration compromise. Emergency deactivation
    path and governance tier unspecified. Route to: architect.
  SC-14 (MEDIUM): Governance tier for trustAnchorHash UPDATE unspecified. New enrolments
    blocked for unknown duration during legitimate trust-anchor rotation. Route to: architect.

SC-02..SC-12 remain open and are out of scope for this re-scan.

---

*reviewer-qa -- independent read-only approver -- 2026-08-10*
*No file under docs/ was written or edited in the production of this re-scan.*
