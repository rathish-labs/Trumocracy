// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {IProofVerifier} from "../interfaces/IProofVerifier.sol";

/**
 * @title MockVerifier
 * @notice Development and test double for a Groth16 verifier.
 *
 * @dev DEPLOYING THIS TO PRODUCTION WOULD DESTROY EVERY PRIVACY AND SYBIL GUARANTEE IN THE
 *      PROTOCOL. It accepts any proof. Its presence is asserted against by a deployment
 *      check and by a test that fails if a production configuration ever registers it
 *      (see test/deployment-safety.test.mjs).
 *
 *      It exists because the real verifiers are generated from Circom circuits by a public
 *      ceremony (ADR-005 §2), which is a Phase-2 deliverable — while the governance layer is
 *      built and tested in Phase 1, the verification seam needs a stand-in that lets the
 *      *rest* of the logic be exercised for real.
 */
contract MockVerifier is IProofVerifier {
    uint256 private immutable _signalCount;
    bool public accept;

    /// @notice Marker read by the deployment-safety check. Real verifiers do not have it.
    bool public constant IS_INSECURE_MOCK = true;

    constructor(uint256 signalCount_, bool accept_) {
        _signalCount = signalCount_;
        accept = accept_;
    }

    function setAccept(bool accept_) external {
        accept = accept_;
    }

    function verifyProof(uint256[8] calldata, uint256[] calldata) external view override returns (bool) {
        return accept;
    }

    function publicSignalCount() external view override returns (uint256) {
        return _signalCount;
    }
}
