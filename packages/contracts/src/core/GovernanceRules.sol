// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

/**
 * @title GovernanceRules
 * @notice The tier table and the arithmetic of a decision (ADR-008 §1, §3).
 *
 * @dev This library is the on-chain twin of `packages/protocol/src/governance.js`. The two
 *      are kept in step by a differential test suite that runs the same inputs through both
 *      and asserts identical outputs. That agreement is a citizen-facing guarantee: the
 *      client tells a member whether a proposal passed, and the chain must not disagree.
 */
library GovernanceRules {
    uint16 internal constant BPS = 10_000;

    uint8 internal constant TIER_OPERATIONAL = 0;
    uint8 internal constant TIER_POLICY = 1;
    uint8 internal constant TIER_STRUCTURAL = 2;
    uint8 internal constant TIER_CONSTITUTIONAL = 3;

    uint16 internal constant SURGE_APPROVAL_PENALTY_BPS = 500;
    uint8 internal constant SURGE_WINDOW_MULTIPLIER = 2;

    /// @notice Absolute floor on constitutional tenure. No charter may configure below this.
    uint32 internal constant CONSTITUTIONAL_TENURE_FLOOR = 90 days;

    struct Rules {
        uint16 quorumBps;
        uint16 approvalBps;
        uint32 minTenureSeconds;
        uint32 timelockSeconds;
        uint32 discussionSeconds;
        uint32 minVotingSeconds;
        bool surgeApplied;
    }

    error UnknownTier(uint8 tier);
    error CharterWeakerThanFloor();

    /// @dev Protocol floors per tier. A charter may ratchet these up; never down.
    function baseRules(uint8 tier) internal pure returns (Rules memory r) {
        if (tier == TIER_OPERATIONAL) {
            return Rules(500, 5_001, 0, 0, 0, 3 days, false);
        } else if (tier == TIER_POLICY) {
            return Rules(1_000, 5_001, 14 days, 48 hours, 2 days, 3 days, false);
        } else if (tier == TIER_STRUCTURAL) {
            return Rules(2_500, 6_000, 90 days, 14 days, 7 days, 7 days, false);
        } else if (tier == TIER_CONSTITUTIONAL) {
            return Rules(4_000, 7_500, 180 days, 30 days, 14 days, 14 days, false);
        }
        revert UnknownTier(tier);
    }

    /**
     * @notice Apply a charter's overrides and any growth-surge penalty.
     * @param charterTenure The party's configured tenure for this tier (0 = use the default).
     */
    function effectiveRules(uint8 tier, uint32 charterTenure, bool surge) internal pure returns (Rules memory r) {
        r = baseRules(tier);

        if (charterTenure != 0) {
            if (charterTenure < r.minTenureSeconds) revert CharterWeakerThanFloor();
            r.minTenureSeconds = charterTenure;
        }
        if (tier == TIER_CONSTITUTIONAL && r.minTenureSeconds < CONSTITUTIONAL_TENURE_FLOOR) {
            revert CharterWeakerThanFloor();
        }

        // Structural and constitutional decisions get harder during a membership surge.
        // Everyday party life is deliberately left alone — a party that is growing fast is
        // usually succeeding, and freezing its ordinary business would punish success.
        if (surge && tier >= TIER_STRUCTURAL) {
            uint16 raised = r.approvalBps + SURGE_APPROVAL_PENALTY_BPS;
            r.approvalBps = raised > BPS ? BPS : raised;
            r.minVotingSeconds = r.minVotingSeconds * SURGE_WINDOW_MULTIPLIER;
            r.surgeApplied = true;
        }
    }

    /**
     * @notice Decide an outcome.
     * @dev Quorum is measured against the member count AT THE SNAPSHOT, never the current
     *      count — otherwise flooding a party mid-vote could fail quorum and kill a proposal
     *      the flooders were losing. Abstentions count toward participation but not approval.
     */
    function passed(
        uint256 forVotes,
        uint256 againstVotes,
        uint256 abstainVotes,
        uint256 snapshotMembers,
        Rules memory r
    ) internal pure returns (bool ok, uint16 quorumReachedBps, uint16 approvalReachedBps) {
        if (snapshotMembers == 0) return (false, 0, 0);

        // Clamp before narrowing. A ratio above 100% is not supposed to happen, but if it
        // ever did, a silent uint16 wrap would turn "everyone voted" into "quorum missed"
        // and defeat a proposal that passed — a failure the citizens could not see.
        uint256 participation = forVotes + againstVotes + abstainVotes;
        uint256 quorumRaw = (participation * BPS) / snapshotMembers;
        quorumReachedBps = uint16(quorumRaw > BPS ? BPS : quorumRaw);

        uint256 decisive = forVotes + againstVotes;
        uint256 approvalRaw = decisive == 0 ? 0 : (forVotes * BPS) / decisive;
        approvalReachedBps = uint16(approvalRaw > BPS ? BPS : approvalRaw);

        ok = quorumReachedBps >= r.quorumBps && approvalReachedBps >= r.approvalBps;
    }
}
