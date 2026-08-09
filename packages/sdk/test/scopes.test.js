/**
 * UT-2500…UT-2512 — scope derivation parity with the Solidity.
 *
 * Why these tests hard-code digests instead of calling the same helper twice: a scope that
 * is wrong by one byte is *not* an exception. The proof still generates, the transaction
 * is still sent, gas is still spent, and the contract's
 * `if (bytes32(publicSignals[3]) != _endorseScope(petitionId)) revert InvalidProof()`
 * turns a citizen's endorsement into nothing. The failure is silent to everyone except the
 * person whose action did not count.
 *
 * So each scope is checked twice, by two paths that share no code:
 *   (a) against a literal digest, and
 *   (b) against a byte-concatenation built by hand (UTF-8 label ‖ 32 raw bytes ‖ …),
 *       which is what `abi.encodePacked` is *defined* to produce.
 *
 * Traces: FR-002, NFR-001, DES-011, DES-012, ADR-003 §3.
 */
import { describe, it, expect } from 'vitest';
import { keccak256, concatHex, toHex, stringToHex, pad, numberToHex } from 'viem';
import {
  endorseScope,
  withdrawEndorsementScope,
  joinScope,
  leaveScope,
  proposeScope,
  voteScope,
  cancelScope,
  scopeSignal,
  SCOPE_LABEL,
} from '../src/identity.js';
import { InvalidArgument } from '../src/errors.js';

const PETITION = `0x${'11'.repeat(32)}`;
const PARTY = `0x${'ab'.repeat(32)}`;

/** An independent `abi.encodePacked` for (string, bytes32[, uint256]) — no viem encoder. */
const packedKeccak = (label, word, uint256) =>
  keccak256(
    concatHex([
      stringToHex(label), // a string is packed as its raw UTF-8 bytes, unpadded
      word, // a bytes32 is packed as its 32 raw bytes
      ...(uint256 === undefined ? [] : [pad(numberToHex(uint256), { size: 32 })]), // uint256 → 32 big-endian bytes
    ]),
  );

describe('scope derivation (contract parity)', () => {
  it('UT-2500 endorse scope matches PartyRegistry._endorseScope', () => {
    expect(endorseScope(PETITION)).toBe('0xdb828eb210eb2a60464520367805cefa4c0c49fe18fe5aec782f8907753d5799');
    expect(endorseScope(PETITION)).toBe(packedKeccak('endorse', PETITION));
  });

  it('UT-2501 withdraw scope matches PartyRegistry._withdrawScope', () => {
    expect(withdrawEndorsementScope(PETITION)).toBe(
      '0x780ed28da33b7ea82ac3253a6967f8e005ac1962f05abfc75e3e0ee3e829a863',
    );
    expect(withdrawEndorsementScope(PETITION)).toBe(packedKeccak('withdraw-endorsement', PETITION));
  });

  it('UT-2502 join scope matches Party._joinScope', () => {
    expect(joinScope(PARTY)).toBe('0x88e054767aefaf151489763a29f9baf260289dc6005ae28c8c0877efa56c54ea');
    expect(joinScope(PARTY)).toBe(packedKeccak('join', PARTY));
  });

  it('UT-2503 leave scope matches Party._leaveScope', () => {
    expect(leaveScope(PARTY)).toBe('0x1bce719f1f4b1bb594209d7d00884d6827c7f5f6792fff99f055a4fbe61e7f95');
    expect(leaveScope(PARTY)).toBe(packedKeccak('leave', PARTY));
  });

  it('UT-2504 propose scope matches Governor._checkProposerEligibility', () => {
    expect(proposeScope(PARTY)).toBe('0x6ee3c34f8dee0f1dc3e124a1fa0b24c11fda21defe7d622b0cce4dd832657041');
    expect(proposeScope(PARTY)).toBe(packedKeccak('propose', PARTY));
  });

  it('UT-2505 vote scope packs proposalId as a uint256, matching Governor.vote', () => {
    expect(voteScope(PARTY, 7)).toBe('0x41a180c589777d4d340568421022274b3cbb84812fceda3ba5981bc73639c40d');
    expect(voteScope(PARTY, 7n)).toBe(packedKeccak('vote', PARTY, 7));
    // Proposal 0 is a real proposal id, and a packing bug that dropped a zero word would
    // only ever show up on the first proposal a party ever votes on.
    expect(voteScope(PARTY, 0)).toBe('0xa40da8b8720248af83c5d05a8a1a73be5b42499467949a275dec87a3ace8173b');
  });

  it('UT-2506 cancel scope matches Governor.cancelDuringDiscussion', () => {
    expect(cancelScope(PARTY, 7)).toBe('0x0bcfe6a56e88bb51d3f63a1d46e63c0b20c8489365c60e121ee1e47bd5998851');
    expect(cancelScope(PARTY, 7n)).toBe(packedKeccak('cancel', PARTY, 7));
  });

  it('UT-2507 every scope label is the exact Solidity string literal', () => {
    expect(SCOPE_LABEL).toEqual({
      ENDORSE: 'endorse',
      WITHDRAW_ENDORSEMENT: 'withdraw-endorsement',
      JOIN: 'join',
      LEAVE: 'leave',
      PROPOSE: 'propose',
      VOTE: 'vote',
      CANCEL: 'cancel',
    });
  });

  it('UT-2508 no two actions on the same id share a scope', () => {
    const scopes = [
      endorseScope(PETITION),
      withdrawEndorsementScope(PETITION),
      joinScope(PETITION),
      leaveScope(PETITION),
      proposeScope(PETITION),
      voteScope(PETITION, 1),
      cancelScope(PETITION, 1),
    ];
    expect(new Set(scopes).size).toBe(scopes.length);
  });

  it('UT-2509 votes on different proposals get different scopes (cross-vote unlinkability)', () => {
    expect(voteScope(PARTY, 1)).not.toBe(voteScope(PARTY, 2));
  });

  it('UT-2510 the same action in two parties gets different scopes', () => {
    expect(joinScope(PARTY)).not.toBe(joinScope(PETITION));
  });

  it('UT-2511 a malformed id is refused rather than silently padded', () => {
    // Padding "0x1" to a bytes32 would produce a valid-looking scope for an id nobody has.
    expect(() => endorseScope('0x1')).toThrow(InvalidArgument);
    expect(() => joinScope(undefined)).toThrow(InvalidArgument);
    expect(() => voteScope(`0x${'ab'.repeat(31)}`, 1)).toThrow(InvalidArgument);
  });

  it('UT-2512 scopeSignal is the unreduced 256-bit digest the contract compares', () => {
    const scope = endorseScope(PETITION);
    // The contract does `bytes32(publicSignals[3]) != scope`, so reducing mod the bn254
    // field here would silently produce a scope the contract has never heard of.
    expect(scopeSignal(scope)).toBe(BigInt(scope));
    expect(toHex(scopeSignal(scope), { size: 32 })).toBe(scope);
  });
});
