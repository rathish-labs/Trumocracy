// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {Party} from "./Party.sol";
import {Governor} from "./Governor.sol";
import {PersonhoodRegistry} from "./PersonhoodRegistry.sol";
import {RegionRegistry} from "./RegionRegistry.sol";
import {VerifierRegistry} from "./VerifierRegistry.sol";
import {FeatureFlags} from "./FeatureFlags.sol";

/**
 * @notice Wiring bundle passed from the registry to the deployers.
 * @dev Grouped so a deployment cannot silently pick up the wrong registry by argument order.
 */
struct Wiring {
    PersonhoodRegistry personhood;
    RegionRegistry regions;
    VerifierRegistry verifiers;
    FeatureFlags flags;
}

/**
 * @title PartyDeployer
 * @notice Holds `Party`'s creation bytecode so `PartyRegistry` stays under the EIP-170
 *         code-size limit. Party and Governor are deployed by separate contracts because
 *         together their creation code also exceeds the limit.
 *
 * @dev This is a code-layout concern, not a trust boundary. The deployer is stateless,
 *      ownerless and has no discretion: it deploys exactly what it is asked for, and hands
 *      `registry_` straight through so the resulting Party answers only to the registry that
 *      requested it. Because the registry holds the deployer address as an immutable, there
 *      is no path to swap in a malicious deployer without redeploying the registry — which is
 *      a visible, migrate-by-choice event, not a silent upgrade (ADR-010).
 */
contract PartyDeployer {
    function deployParty(
        bytes32 partyId,
        bytes32 jurisdiction,
        Wiring calldata w,
        Party.Charter calldata charterParams,
        bytes32 parentPartyId,
        uint64 forkBlock,
        address registry_
    ) external returns (address) {
        Party party = new Party(
            partyId,
            jurisdiction,
            w.personhood,
            w.regions,
            w.verifiers,
            w.flags,
            charterParams,
            parentPartyId,
            forkBlock,
            registry_
        );
        return address(party);
    }
}

/**
 * @title GovernorDeployer
 * @notice Holds `Governor`'s creation bytecode. Same rationale as `PartyDeployer`.
 */
contract GovernorDeployer {
    function deployGovernor(Party party, Wiring calldata w) external returns (address) {
        Governor gov = new Governor(party, w.personhood, w.verifiers, w.flags);
        return address(gov);
    }
}
