// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

/**
 * @title IProofVerifier
 * @notice Verification seam for every zero-knowledge circuit in the protocol (ADR-005 §5).
 *
 * @dev Verification is deliberately an interface rather than a hard-coded verifier so a
 *      circuit can be re-ceremonied and replaced behind a protocol timelock without
 *      redeploying the immutable core. Old verifiers stay live so proofs already in flight
 *      are never invalidated by an upgrade.
 */
interface IProofVerifier {
    /**
     * @param proof            Groth16 proof, encoded as [a0,a1, b00,b01,b10,b11, c0,c1].
     * @param publicSignals    Circuit public inputs, in circuit order.
     * @return ok              True iff the proof satisfies the circuit.
     */
    function verifyProof(uint256[8] calldata proof, uint256[] calldata publicSignals)
        external
        view
        returns (bool ok);

    /// @notice Number of public signals this verifier expects. Used to reject malformed calls early.
    function publicSignalCount() external view returns (uint256);
}
