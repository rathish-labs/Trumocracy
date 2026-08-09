pragma circom 2.1.9;

include "circomlib/circuits/poseidon.circom";
include "circomlib/circuits/eddsaposeidon.circom";

/*
 * personhood_enrol — "an accepted issuer attested that I am one real person, and this is the
 * only enrolment that person gets in this identifier namespace."
 *
 * Proves, without publishing the underlying identifier:
 *   1. the issuer signed a credential over `idHash` (the hash of whatever the issuer read —
 *      a passport document number, a national-ID number, an iris code) under `namespaceId`,
 *   2. the published `issuerNullifier` is Poseidon(idHash, namespaceId),
 *   3. the published `identityCommitment` is Poseidon(identitySecret) for a secret the
 *      prover knows.
 *
 * **The namespace, not the issuer, is the deduplication key**, and that is the whole point of
 * this circuit. Under 1-of-N issuer acceptance (ADR-003), deriving the nullifier per *issuer*
 * would let one human enrol once with each accepted issuer and then vote once per enrolment —
 * silently turning one-person-one-vote into one-person-N-votes. Every issuer that reads the
 * same underlying credential shares one `namespaceId`, so all of them derive the same
 * nullifier from the same document and the second enrolment is refused on-chain.
 *
 * What this does NOT do, stated so nobody assumes otherwise: it cannot deduplicate across
 * namespaces. Someone holding both a passport and a social-graph credential can enrol twice.
 * Closing that would require a common identifier spanning unrelated issuers — the linkable
 * master identity the whole architecture exists to avoid. It is bounded instead by credential
 * tiering and per-region caps, and stated plainly in ADR-003.
 *
 * Public:  [issuerNullifier, identityCommitment, issuerId, namespaceId]
 *          — exactly the four signals, in this order, that PersonhoodRegistry.enrol requires.
 * Private: idHash, identitySecret, the issuer's signature
 */
template PersonhoodEnrol() {
    // --- public ---
    signal input issuerNullifier;
    signal input identityCommitment;
    signal input issuerId;
    signal input namespaceId;

    // --- private ---
    signal input idHash;          // hash of the identifier the issuer read; never published
    signal input identitySecret;  // generated in the citizen's enclave; never leaves it
    signal input issuerPubKeyAx;
    signal input issuerPubKeyAy;
    signal input sigR8x;
    signal input sigR8y;
    signal input sigS;

    // 1. the issuer signed (idHash, namespaceId, issuerId) — so a credential minted for one
    //    namespace cannot be replayed into another.
    component message = Poseidon(3);
    message.inputs[0] <== idHash;
    message.inputs[1] <== namespaceId;
    message.inputs[2] <== issuerId;

    component sig = EdDSAPoseidonVerifier();
    sig.enabled <== 1;
    sig.Ax <== issuerPubKeyAx;
    sig.Ay <== issuerPubKeyAy;
    sig.S <== sigS;
    sig.R8x <== sigR8x;
    sig.R8y <== sigR8y;
    sig.M <== message.out;

    // 2. the enrolment nullifier is derived from the IDENTIFIER and the NAMESPACE, never
    //    from the issuer — see the note above.
    component nul = Poseidon(2);
    nul.inputs[0] <== idHash;
    nul.inputs[1] <== namespaceId;
    nul.out === issuerNullifier;

    // 3. the identity commitment belongs to a secret the prover knows. Nothing links it to
    //    `idHash`, so the chain learns "a real person enrolled" and never which one.
    component commit = Poseidon(1);
    commit.inputs[0] <== identitySecret;
    commit.out === identityCommitment;
}

component main {public [issuerNullifier, identityCommitment, issuerId, namespaceId]} = PersonhoodEnrol();
