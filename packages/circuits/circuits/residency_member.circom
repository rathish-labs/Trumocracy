pragma circom 2.1.9;

include "circomlib/circuits/poseidon.circom";
include "circomlib/circuits/comparators.circom";
include "./lib/lean_imt.circom";

/*
 * residency_member — "I hold a valid residency credential for region R, of at least tier T,
 * and this is my one action in scope S."
 *
 * Proves, without revealing which credential or which person:
 *   1. the prover knows a secret `identitySecret` whose Poseidon commitment is a leaf's
 *      identity component,
 *   2. the credential leaf Poseidon(C, regionId, validUntil, tier) is in the region's
 *      residency tree under `residencyRoot`,
 *   3. the credential has not expired,
 *   4. the credential's tier meets the caller's minimum,
 *   5. the published nullifier is Poseidon(identitySecret, scope) — one action per person
 *      per scope, and unlinkable across scopes.
 *
 * The identity commitment IS published (the contract records membership by commitment), so
 * the anonymity property here is "which resident of R" — which is exactly why the protocol
 * refuses to publish an action when |residents(R)| < 1000 (NFR-002). A commitment is not a
 * person, but in a set of forty it is close enough to one to be dangerous.
 *
 * Public:  [residencyRoot, regionId, minTier, scope, nullifier, identityCommitment]
 * Private: identitySecret, validUntil, tier, merkle path
 */
template ResidencyMember(depth) {
    // --- public ---
    signal input residencyRoot;
    signal input regionId;
    signal input minTier;
    signal input scope;
    signal input nullifier;
    signal input identityCommitment;

    // --- private ---
    signal input identitySecret;
    signal input validUntil;
    signal input tier;
    signal input pathIndices[depth];
    signal input pathSiblings[depth];
    signal input pathDepth;

    // --- public, but supplied by the verifier contract as a bound value ---
    signal input nowTs;

    // 1. the commitment must be the prover's
    component commit = Poseidon(1);
    commit.inputs[0] <== identitySecret;
    commit.out === identityCommitment;

    // 2. the credential leaf must be in the region's tree
    component leaf = Poseidon(4);
    leaf.inputs[0] <== identityCommitment;
    leaf.inputs[1] <== regionId;
    leaf.inputs[2] <== validUntil;
    leaf.inputs[3] <== tier;

    component inclusion = LeanIMTInclusionProof(depth);
    inclusion.leaf <== leaf.out;
    inclusion.depth <== pathDepth;
    for (var i = 0; i < depth; i++) {
        inclusion.indices[i] <== pathIndices[i];
        inclusion.siblings[i] <== pathSiblings[i];
    }
    inclusion.root === residencyRoot;

    // 3. not expired.  NOTE: `nowTs` is a public input the contract binds to block.timestamp;
    //    a circuit cannot read the clock, and letting the prover choose it would make every
    //    expiry check vacuous.
    component notExpired = LessThan(64);
    notExpired.in[0] <== nowTs;
    notExpired.in[1] <== validUntil;
    notExpired.out === 1;

    // 4. tier is sufficient
    component tierOk = GreaterEqThan(8);
    tierOk.in[0] <== tier;
    tierOk.in[1] <== minTier;
    tierOk.out === 1;

    // 5. the nullifier is bound to BOTH the secret and the scope. Binding to the scope is
    //    what makes two actions by the same person in different scopes unlinkable; binding
    //    to the secret is what makes them unforgeable.
    component nul = Poseidon(2);
    nul.inputs[0] <== identitySecret;
    nul.inputs[1] <== scope;
    nul.out === nullifier;
}

component main {public [residencyRoot, regionId, minTier, scope, nullifier, identityCommitment, nowTs]} =
    ResidencyMember(32);
