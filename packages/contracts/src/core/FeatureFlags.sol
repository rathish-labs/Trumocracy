// SPDX-License-Identifier: AGPL-3.0-or-later
pragma solidity ^0.8.28;

/**
 * @title FeatureFlags
 * @notice On-chain half of the "ship dark" rule (ADR-011).
 *
 * @dev A frontend-only flag leaves the risky contract path live for anyone who calls it
 *      directly, so every capability that can be exercised on-chain is gated here too.
 *
 *      Governance of this contract is intentionally minimal and *one-directional in the
 *      dangerous direction*: enabling a flag requires the protocol timelock, but the
 *      emergency responder can only ever DISABLE. Nothing here can stop a vote that is
 *      already running, freeze a treasury, or alter a result — the kill switch turns off a
 *      capability for future calls, and that is its entire power (CON-003).
 */
contract FeatureFlags {
    /// @notice Address permitted to enable flags — the protocol timelock (ADR-010).
    address public immutable timelock;

    /// @notice Address permitted to DISABLE flags only, for incident response.
    address public immutable emergencyDisabler;

    mapping(bytes32 flag => bool enabled) private _enabled;

    event FlagEnabled(bytes32 indexed flag, address indexed by);
    event FlagDisabled(bytes32 indexed flag, address indexed by, string reason);

    error NotTimelock();
    error NotEmergencyDisabler();
    error FlagDisabledError(bytes32 flag);
    error ZeroAddress();

    constructor(address timelock_, address emergencyDisabler_, bytes32[] memory initiallyEnabled) {
        if (timelock_ == address(0) || emergencyDisabler_ == address(0)) revert ZeroAddress();
        timelock = timelock_;
        emergencyDisabler = emergencyDisabler_;
        for (uint256 i = 0; i < initiallyEnabled.length; i++) {
            _enabled[initiallyEnabled[i]] = true;
            emit FlagEnabled(initiallyEnabled[i], msg.sender);
        }
    }

    function isEnabled(bytes32 flag) external view returns (bool) {
        return _enabled[flag];
    }

    /// @dev Reverts unless the flag is on. Modules call this at the top of gated entrypoints.
    function requireEnabled(bytes32 flag) external view {
        if (!_enabled[flag]) revert FlagDisabledError(flag);
    }

    function enable(bytes32 flag) external {
        if (msg.sender != timelock) revert NotTimelock();
        _enabled[flag] = true;
        emit FlagEnabled(flag, msg.sender);
    }

    /**
     * @notice Turn a capability off. Callable by the timelock or, for incident response, by
     *         the emergency disabler. Disabling is the only unilateral power in the protocol,
     *         and it can only ever subtract.
     */
    function disable(bytes32 flag, string calldata reason) external {
        if (msg.sender != timelock && msg.sender != emergencyDisabler) revert NotEmergencyDisabler();
        _enabled[flag] = false;
        emit FlagDisabled(flag, msg.sender, reason);
    }
}
