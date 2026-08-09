/**
 * Identity, scopes and nullifiers — the client half of ADR-003.
 *
 * Three things live here and nothing else:
 *
 *  1. **Identity derivation.** The identity secret is derived on the device from a
 *     passkey-wrapped seed and never leaves it (ADR-002, ADR-012 §2). The only thing that
 *     is ever published is `poseidon1([secret])`, which is a leaf, not a person.
 *  2. **Scope construction.** A scope is the domain string that makes one action
 *     unlinkable to another. Every builder below reproduces a specific line of Solidity
 *     byte for byte. **If a scope is off by one byte the proof still generates, the
 *     transaction still gets sent, and the citizen's action silently does not count** —
 *     the contract compares `publicSignals[3]` against its own `keccak256` and reverts
 *     with `InvalidProof`. That is why the parity tests in `test/scopes.test.js` hard-code
 *     the expected digests rather than re-deriving them from the same helper.
 *  3. **Nullifier derivation.** `poseidon2([secret, scope])`. Uniqueness per action comes
 *     from including the secret; unlinkability across actions comes from including the
 *     scope. One construction delivers both (SDD §4.3).
 */
import { keccak256, encodePacked, toHex, concatHex } from 'viem';
import { poseidon1, poseidon2, poseidon3, poseidon4 } from 'poseidon-lite';
import { toField, assertFieldElement } from './field.js';
import { InvalidArgument } from './errors.js';

/**
 * Scope labels, verbatim from the Solidity string literals.
 *
 * Sources (packages/contracts/src/core):
 *   PartyRegistry._endorseScope   → keccak256(abi.encodePacked("endorse", petitionId))
 *   PartyRegistry._withdrawScope  → keccak256(abi.encodePacked("withdraw-endorsement", petitionId))
 *   Party._joinScope              → keccak256(abi.encodePacked("join", partyId))
 *   Party._leaveScope             → keccak256(abi.encodePacked("leave", partyId))
 *   Governor._checkProposerEligibility → keccak256(abi.encodePacked("propose", partyId))
 *   Governor.vote                 → keccak256(abi.encodePacked("vote", partyId, proposalId))
 *   Governor.cancelDuringDiscussion → keccak256(abi.encodePacked("cancel", partyId, proposalId))
 */
export const SCOPE_LABEL = Object.freeze({
  ENDORSE: 'endorse',
  WITHDRAW_ENDORSEMENT: 'withdraw-endorsement',
  JOIN: 'join',
  LEAVE: 'leave',
  PROPOSE: 'propose',
  VOTE: 'vote',
  CANCEL: 'cancel',
});

/** Domain separator for identity-secret derivation. Changing it re-keys every citizen. */
const IDENTITY_DOMAIN = toField(keccak256(toHex('trumocracy:identity-secret:v1')));

/** Domain separator for the credential secret that feeds the enrolment nullifier. */
const CREDENTIAL_DOMAIN = toField(keccak256(toHex('trumocracy:credential-secret:v1')));

const BYTES32_RE = /^0x[0-9a-fA-F]{64}$/;

function assertBytes32(label, v) {
  if (typeof v !== 'string' || !BYTES32_RE.test(v)) {
    throw new InvalidArgument(`${label} must be a 0x-prefixed 32-byte hex string`, { label, value: v });
  }
  return /** @type {`0x${string}`} */ (v);
}

/**
 * Split a 32-byte seed into two 128-bit halves.
 *
 * Both halves are < 2^128 < r, so feeding them to Poseidon involves no modular reduction
 * and therefore no reduction bias — which is why the seed is split rather than reduced.
 * @param {`0x${string}`} seedHex
 */
function splitSeed(seedHex) {
  const n = BigInt(seedHex);
  return [n >> 128n, n & ((1n << 128n) - 1n)];
}

/**
 * Derive the citizen's identity secret from a passkey-wrapped seed.
 *
 * The seed is expected to come from a WebAuthn PRF/`hmac-secret` extension output (or, on
 * platforms without it, from a random seed sealed under a passkey-derived key in
 * IndexedDB — ADR-002). Either way the input never leaves the device and this function is
 * pure, so the same passkey always reproduces the same civic identity: recovery re-keys
 * the *account*, never the *person* (SDD §11, FR-001).
 *
 * @param {object} args
 * @param {`0x${string}`} args.seed  32-byte seed unwrapped by the passkey
 * @param {string} [args.context]    optional extra domain separation (e.g. a pilot id)
 * @returns {bigint} the identity secret — treat as key material; never log, never transmit
 */
export function deriveIdentitySecret({ seed, context = '' }) {
  assertBytes32('seed', seed);
  const material = context
    ? keccak256(concatHex([seed, toHex(`trumocracy:ctx:${context}`)]))
    : seed;
  const [hi, lo] = splitSeed(material);
  return poseidon3([IDENTITY_DOMAIN, hi, lo]);
}

/**
 * Derive the per-credential secret the enrolment circuit hashes into the issuer nullifier.
 *
 * Separate from the identity secret on purpose: an issuer learns something about the
 * credential, and nothing derived from the identity secret should ever be a function of
 * anything an issuer sees.
 *
 * @param {object} args
 * @param {`0x${string}`} args.credentialDigest  device-local digest of the credential
 * @returns {bigint}
 */
export function deriveCredentialSecret({ credentialDigest }) {
  assertBytes32('credentialDigest', credentialDigest);
  const [hi, lo] = splitSeed(credentialDigest);
  return poseidon3([CREDENTIAL_DOMAIN, hi, lo]);
}

/**
 * The public leaf inserted into the identity tree: `poseidon1([secret])`.
 * Matches `PersonhoodRegistry.identityTree` (SDD §5.3).
 * @param {bigint} secret
 * @returns {bigint}
 */
export function identityCommitment(secret) {
  return poseidon1([assertFieldElement('identity secret', secret)]);
}

/**
 * The action nullifier: `poseidon2([secret, scope])`.
 *
 * The scope is a keccak256 digest, which is 256 bits and therefore usually ≥ r, so it is
 * reduced into the field *for the hash input only*. The `bytes32` scope the contract
 * compares against is the unreduced digest — see `scopeSignal()`.
 *
 * @param {bigint} secret
 * @param {`0x${string}`} scope  a 32-byte scope digest from one of the builders below
 * @returns {bigint}
 */
export function nullifier(secret, scope) {
  assertBytes32('scope', scope);
  return poseidon2([assertFieldElement('identity secret', secret), toField(scope)]);
}

/**
 * The enrolment nullifier: `poseidon2([credentialSecret, namespaceId])`.
 *
 * Hashed over the issuer's *namespace*, not its id, so two issuers reading the same
 * passport derive the same nullifier and the second enrolment is refused
 * (`PersonhoodRegistry.Issuer.namespaceId`). This is the client side of the 1-of-N
 * double-enrolment defence.
 *
 * @param {bigint} credentialSecret
 * @param {`0x${string}`} namespaceId
 * @returns {bigint}
 */
export function enrolmentNullifier(credentialSecret, namespaceId) {
  assertBytes32('namespaceId', namespaceId);
  return poseidon2([assertFieldElement('credential secret', credentialSecret), toField(namespaceId)]);
}

/**
 * The residency credential leaf an attester inserts:
 * `poseidon4([identityCommitment, regionId, validUntil, tier])`.
 * Matches `RegionRegistry.issueResidency`'s documented pre-image (SDD §5.3).
 *
 * @param {object} args
 * @param {bigint} args.commitment
 * @param {`0x${string}`} args.regionId
 * @param {number|bigint} args.validUntil unix seconds
 * @param {number|bigint} args.tier
 * @returns {bigint}
 */
export function residencyLeaf({ commitment, regionId, validUntil, tier }) {
  assertBytes32('regionId', regionId);
  return poseidon4([
    assertFieldElement('commitment', commitment),
    toField(regionId),
    BigInt(validUntil),
    BigInt(tier),
  ]);
}

// ---------------------------------------------------------------------------- scopes

/**
 * `keccak256(abi.encodePacked("endorse", petitionId))`
 * — PartyRegistry._endorseScope. One endorsement per person per petition (DES-011).
 * @param {`0x${string}`} petitionId
 * @returns {`0x${string}`}
 */
export function endorseScope(petitionId) {
  return keccak256(
    encodePacked(['string', 'bytes32'], [SCOPE_LABEL.ENDORSE, assertBytes32('petitionId', petitionId)]),
  );
}

/**
 * `keccak256(abi.encodePacked("withdraw-endorsement", petitionId))`
 * — PartyRegistry._withdrawScope.
 *
 * A *distinct* scope from `endorseScope`, which is what makes a withdrawal both once-only
 * and unlinkable to the endorsement it withdraws (DES-012). Reusing the endorse scope here
 * would let anyone watching the chain pair the two actions.
 * @param {`0x${string}`} petitionId
 * @returns {`0x${string}`}
 */
export function withdrawEndorsementScope(petitionId) {
  return keccak256(
    encodePacked(
      ['string', 'bytes32'],
      [SCOPE_LABEL.WITHDRAW_ENDORSEMENT, assertBytes32('petitionId', petitionId)],
    ),
  );
}

/**
 * `keccak256(abi.encodePacked("join", partyId))` — Party._joinScope.
 * @param {`0x${string}`} partyId
 * @returns {`0x${string}`}
 */
export function joinScope(partyId) {
  return keccak256(encodePacked(['string', 'bytes32'], [SCOPE_LABEL.JOIN, assertBytes32('partyId', partyId)]));
}

/**
 * `keccak256(abi.encodePacked("leave", partyId))` — Party._leaveScope.
 * @param {`0x${string}`} partyId
 * @returns {`0x${string}`}
 */
export function leaveScope(partyId) {
  return keccak256(encodePacked(['string', 'bytes32'], [SCOPE_LABEL.LEAVE, assertBytes32('partyId', partyId)]));
}

/**
 * `keccak256(abi.encodePacked("propose", partyId))` — Governor._checkProposerEligibility.
 * @param {`0x${string}`} partyId
 * @returns {`0x${string}`}
 */
export function proposeScope(partyId) {
  return keccak256(
    encodePacked(['string', 'bytes32'], [SCOPE_LABEL.PROPOSE, assertBytes32('partyId', partyId)]),
  );
}

/**
 * `keccak256(abi.encodePacked("vote", partyId, proposalId))` — Governor.vote.
 *
 * `proposalId` is a `uint256` in the Solidity, so it is packed as 32 big-endian bytes —
 * not as the decimal string, and not as a `bytes32` hex the caller happened to have.
 * Including the proposal id is what keeps one citizen's votes on two different proposals
 * mutually unlinkable (ADR-003 §3).
 *
 * @param {`0x${string}`} partyId
 * @param {number|bigint} proposalId
 * @returns {`0x${string}`}
 */
export function voteScope(partyId, proposalId) {
  return keccak256(
    encodePacked(
      ['string', 'bytes32', 'uint256'],
      [SCOPE_LABEL.VOTE, assertBytes32('partyId', partyId), BigInt(proposalId)],
    ),
  );
}

/**
 * `keccak256(abi.encodePacked("cancel", partyId, proposalId))` — Governor.cancelDuringDiscussion.
 * @param {`0x${string}`} partyId
 * @param {number|bigint} proposalId
 * @returns {`0x${string}`}
 */
export function cancelScope(partyId, proposalId) {
  return keccak256(
    encodePacked(
      ['string', 'bytes32', 'uint256'],
      [SCOPE_LABEL.CANCEL, assertBytes32('partyId', partyId), BigInt(proposalId)],
    ),
  );
}

/**
 * The `uint256` form of a scope, for `publicSignals[3]` / `publicSignals[2]`.
 *
 * Deliberately NOT reduced mod r: the contract does `bytes32(publicSignals[3]) != scope`,
 * so the full 256-bit digest has to survive the round trip. See `assertProvableScope()`
 * for the consequence of that choice.
 * @param {`0x${string}`} scope
 * @returns {bigint}
 */
export function scopeSignal(scope) {
  return BigInt(assertBytes32('scope', scope));
}
