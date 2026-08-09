// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

import {GovernanceRules as G} from "../core/GovernanceRules.sol";

/**
 * @title RulesProbe
 * @notice Test-only wrapper exposing the internal `GovernanceRules` library so the exact
 *         same inputs can be pushed through the chain and through the pure reference
 *         implementation in the protocol package, and the outputs compared.
 *
 * @dev Compiled only by the test fixture; never part of a deployment. Its existence is why
 *      the differential suite can be exhaustive rather than sampling through the Governor.
 */
contract RulesProbe {
    function effective(uint8 tier, uint32 charterTenure, bool surge) external pure returns (G.Rules memory) {
        return G.effectiveRules(tier, charterTenure, surge);
    }

    function tally(uint8 tier, uint32 charterTenure, bool surge, uint256 f, uint256 a, uint256 ab, uint256 members)
        external
        pure
        returns (bool passed, uint16 quorumReachedBps, uint16 approvalReachedBps)
    {
        return G.passed(f, a, ab, members, G.effectiveRules(tier, charterTenure, surge));
    }
}
