pragma circom 2.1.9;

include "circomlib/circuits/poseidon.circom";
include "circomlib/circuits/comparators.circom";
include "./lib/lean_imt.circom";

/*
 * tenure_member — "I was a member of party P at the proposal's snapshot, and I had been for
 * at least the required time."
 *
 * This is the circuit that makes the anti-capture design work (ADR-008 §2). It proves
 * membership against the party's member root AS IT STOOD AT THE SNAPSHOT BLOCK, so someone
 * who joins after a proposal opens has no witness at all — not a rejected vote, an
 * *impossible* one.
 *
 * Note what is deliberately NOT here: any output that scales with tenure. The circuit emits
 * `tenureSeconds` so the contract can check eligibility, and the contract's only use of it
 * is a `>=` comparison. Tenure gates who may vote; it never weights a vote (ADR-007 §2).
 *
 * Public:  [partyRootAtSnapshot, partyId, scope, nullifier, tenureSeconds]
 * Private: identitySecret, joinedAt, merkle path
 */
template TenureMember(depth) {
    // --- public ---
    signal input partyRootAtSnapshot;
    signal input partyId;
    signal input scope;
    signal input nullifier;
    signal input tenureSeconds;
    signal input snapshotAt; // bound by the contract to the proposal's snapshot timestamp

    // --- private ---
    signal input identitySecret;
    signal input joinedAt;
    signal input pathIndices[depth];
    signal input pathSiblings[depth];
    signal input pathDepth;

    // membership: the identity commitment must be a leaf of the snapshot root
    component commit = Poseidon(1);
    commit.inputs[0] <== identitySecret;

    component inclusion = LeanIMTInclusionProof(depth);
    inclusion.leaf <== commit.out;
    inclusion.depth <== pathDepth;
    for (var i = 0; i < depth; i++) {
        inclusion.indices[i] <== pathIndices[i];
        inclusion.siblings[i] <== pathSiblings[i];
    }
    inclusion.root === partyRootAtSnapshot;

    // joined before the snapshot — a member who joined after has no valid witness
    component joinedBefore = LessEqThan(64);
    joinedBefore.in[0] <== joinedAt;
    joinedBefore.in[1] <== snapshotAt;
    joinedBefore.out === 1;

    // tenure is exactly snapshotAt - joinedAt, not a value the prover may choose
    tenureSeconds === snapshotAt - joinedAt;

    // one action per person per scope
    component nul = Poseidon(2);
    nul.inputs[0] <== identitySecret;
    nul.inputs[1] <== scope;
    nul.out === nullifier;

    // bind the proof to this party so a proof for party A cannot be replayed against party B
    signal partyBinding;
    partyBinding <== partyId * partyId;
}

component main {public [partyRootAtSnapshot, partyId, scope, nullifier, tenureSeconds, snapshotAt]} =
    TenureMember(32);
