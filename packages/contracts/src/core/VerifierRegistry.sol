// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {IProofVerifier} from "../interfaces/IProofVerifier.sol";

/**
 * @title VerifierRegistry
 * @notice Binds a circuit id to its verifier contract and to the hash of the proving key
 *         produced by its public ceremony (ADR-005 §5, §6).
 *
 * @dev The `zkeyHash` is the load-bearing field. Clients refuse to prove against a proving
 *      key whose hash is not the one registered here, which is what stops a compromised
 *      frontend from silently handing a citizen a backdoored key. Registering a circuit is
 *      therefore a protocol decision with a timelock, and the ceremony URI must be
 *      published so the binding can be independently checked.
 *
 *      Superseding a circuit never deletes the old verifier: proofs generated against the
 *      previous key stay valid for a grace period so an upgrade cannot disenfranchise a
 *      citizen who started an action before it landed.
 */
contract VerifierRegistry {
    struct CircuitVersion {
        IProofVerifier verifier;
        bytes32 zkeyHash;
        string ceremonyURI;
        uint64 registeredAt;
        uint64 retiredAt; // 0 while current
    }

    address public immutable timelock;

    /// @notice Grace period during which a superseded verifier still accepts proofs.
    uint64 public constant SUPERSEDE_GRACE = 30 days;

    mapping(bytes32 circuitId => CircuitVersion[]) private _versions;

    event CircuitRegistered(
        bytes32 indexed circuitId, address indexed verifier, bytes32 zkeyHash, string ceremonyURI, uint256 version
    );
    event CircuitSuperseded(bytes32 indexed circuitId, uint256 version, uint64 retiredAt);

    error NotTimelock();
    error UnknownCircuit(bytes32 circuitId);
    error ZeroAddress();
    error EmptyCeremony();
    error DuplicateZkey(bytes32 zkeyHash);

    constructor(address timelock_) {
        if (timelock_ == address(0)) revert ZeroAddress();
        timelock = timelock_;
    }

    function register(bytes32 circuitId, IProofVerifier verifier, bytes32 zkeyHash, string calldata ceremonyURI)
        external
        returns (uint256 version)
    {
        if (msg.sender != timelock) revert NotTimelock();
        if (address(verifier) == address(0)) revert ZeroAddress();
        if (bytes(ceremonyURI).length == 0) revert EmptyCeremony();

        CircuitVersion[] storage vs = _versions[circuitId];
        if (vs.length > 0) {
            CircuitVersion storage cur = vs[vs.length - 1];
            if (cur.zkeyHash == zkeyHash) revert DuplicateZkey(zkeyHash);
            cur.retiredAt = uint64(block.timestamp) + SUPERSEDE_GRACE;
            emit CircuitSuperseded(circuitId, vs.length - 1, cur.retiredAt);
        }

        vs.push(
            CircuitVersion({
                verifier: verifier,
                zkeyHash: zkeyHash,
                ceremonyURI: ceremonyURI,
                registeredAt: uint64(block.timestamp),
                retiredAt: 0
            })
        );
        version = vs.length - 1;
        emit CircuitRegistered(circuitId, address(verifier), zkeyHash, ceremonyURI, version);
    }

    function current(bytes32 circuitId) public view returns (CircuitVersion memory) {
        CircuitVersion[] storage vs = _versions[circuitId];
        if (vs.length == 0) revert UnknownCircuit(circuitId);
        return vs[vs.length - 1];
    }

    function versionCount(bytes32 circuitId) external view returns (uint256) {
        return _versions[circuitId].length;
    }

    /**
     * @notice Verify a proof against the current circuit version, falling back to any
     *         superseded version still inside its grace window.
     */
    function verify(bytes32 circuitId, uint256[8] calldata proof, uint256[] calldata publicSignals)
        external
        view
        returns (bool)
    {
        CircuitVersion[] storage vs = _versions[circuitId];
        uint256 n = vs.length;
        if (n == 0) revert UnknownCircuit(circuitId);

        for (uint256 i = n; i > 0; i--) {
            CircuitVersion storage v = vs[i - 1];
            bool live = v.retiredAt == 0 || block.timestamp < v.retiredAt;
            if (!live) continue;
            if (v.verifier.publicSignalCount() != publicSignals.length) continue;
            if (v.verifier.verifyProof(proof, publicSignals)) return true;
        }
        return false;
    }
}
