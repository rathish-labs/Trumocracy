/**
 * UT-2513…UT-2522 — identity derivation and nullifier unlinkability.
 *
 * The property under test is the one NFR-001/NFR-002 actually promise: from the outside,
 * two actions by the same person must look no more related than two actions by two
 * different people. That is not a UI promise, it is an algebraic one, and it is delivered
 * by putting the scope inside the hash.
 *
 * Traces: FR-001, FR-002, NFR-001, NFR-002, NFR-004, ADR-002, ADR-003.
 */
import { describe, it, expect } from 'vitest';
import { poseidon1, poseidon2 } from 'poseidon-lite';
import {
  deriveIdentitySecret,
  deriveCredentialSecret,
  identityCommitment,
  nullifier,
  enrolmentNullifier,
  residencyLeaf,
  endorseScope,
  joinScope,
  voteScope,
} from '../src/identity.js';
import { BN254_SCALAR_FIELD, toField } from '../src/field.js';
import { InvalidArgument } from '../src/errors.js';

const SEED_A = `0x${'a1'.repeat(32)}`;
const SEED_B = `0x${'b2'.repeat(32)}`;
const PETITION = `0x${'11'.repeat(32)}`;
const PARTY = `0x${'ab'.repeat(32)}`;
const NAMESPACE = `0x${'cd'.repeat(32)}`;

describe('identity derivation', () => {
  it('UT-2513 the same passkey seed always reproduces the same civic identity', () => {
    // Recovery re-keys the account, never the person (ADR-002 §3). If this were not
    // deterministic, a citizen who replaced a phone would become a different person and
    // lose every party membership and tenure they had earned.
    expect(deriveIdentitySecret({ seed: SEED_A })).toBe(deriveIdentitySecret({ seed: SEED_A }));
  });

  it('UT-2514 different seeds give different identities', () => {
    expect(deriveIdentitySecret({ seed: SEED_A })).not.toBe(deriveIdentitySecret({ seed: SEED_B }));
  });

  it('UT-2515 an explicit context separates identities derived from one seed', () => {
    expect(deriveIdentitySecret({ seed: SEED_A })).not.toBe(deriveIdentitySecret({ seed: SEED_A, context: 'pilot-2' }));
  });

  it('UT-2516 derived secrets are bn254 field elements', () => {
    for (const seed of [SEED_A, SEED_B]) {
      expect(deriveIdentitySecret({ seed })).toBeLessThan(BN254_SCALAR_FIELD);
      expect(deriveCredentialSecret({ credentialDigest: seed })).toBeLessThan(BN254_SCALAR_FIELD);
    }
  });

  it('UT-2517 the identity secret and the credential secret are independent', () => {
    // An issuer sees something about the credential. Nothing derived from the identity
    // secret may be a function of anything an issuer sees.
    expect(deriveIdentitySecret({ seed: SEED_A })).not.toBe(deriveCredentialSecret({ credentialDigest: SEED_A }));
  });

  it('UT-2518 identityCommitment is poseidon1([secret]) — the leaf the chain stores', () => {
    const secret = deriveIdentitySecret({ seed: SEED_A });
    expect(identityCommitment(secret)).toBe(poseidon1([secret]));
  });

  it('UT-2519 a malformed seed is refused', () => {
    expect(() => deriveIdentitySecret({ seed: '0xdeadbeef' })).toThrow(InvalidArgument);
    expect(() => residencyLeaf({ commitment: 1n, regionId: '0x00', validUntil: 0, tier: 1 })).toThrow(InvalidArgument);
  });
});

describe('nullifier unlinkability', () => {
  const secret = deriveIdentitySecret({ seed: SEED_A });
  const other = deriveIdentitySecret({ seed: SEED_B });

  it('UT-2520 nullifier is poseidon2([secret, scopeAsField])', () => {
    const scope = endorseScope(PETITION);
    expect(nullifier(secret, scope)).toBe(poseidon2([secret, toField(scope)]));
  });

  it('UT-2521 one person acting in N scopes produces N unrelated nullifiers', () => {
    const scopes = [endorseScope(PETITION), joinScope(PARTY), voteScope(PARTY, 1), voteScope(PARTY, 2)];
    const nullifiers = scopes.map((s) => nullifier(secret, s));
    // Distinctness is what "unlinkable" reduces to on-chain: nothing published in one
    // action can be matched against anything published in another.
    expect(new Set(nullifiers.map(String)).size).toBe(scopes.length);
    // …and no nullifier equals the secret or the commitment, i.e. nothing leaks directly.
    for (const n of nullifiers) {
      expect(n).not.toBe(secret);
      expect(n).not.toBe(identityCommitment(secret));
    }
  });

  it('UT-2522 the same person in the same scope is stable — that is what "once" means', () => {
    const scope = voteScope(PARTY, 3);
    expect(nullifier(secret, scope)).toBe(nullifier(secret, scope));
    // …and two people in one scope never collide, or one would block the other's vote.
    expect(nullifier(secret, scope)).not.toBe(nullifier(other, scope));
  });

  it('UT-2523 enrolment nullifiers are namespaced, so two issuers of one document collide', () => {
    // ADR-003: this collision is the FEATURE. Two issuers reading the same passport must
    // derive the same nullifier so the second enrolment is refused.
    const credential = deriveCredentialSecret({ credentialDigest: SEED_A });
    expect(enrolmentNullifier(credential, NAMESPACE)).toBe(enrolmentNullifier(credential, NAMESPACE));
    expect(enrolmentNullifier(credential, NAMESPACE)).not.toBe(enrolmentNullifier(credential, `0x${'ce'.repeat(32)}`));
  });

  it('UT-2524 a residency leaf binds commitment, region, expiry and tier together', () => {
    const commitment = identityCommitment(secret);
    const base = { commitment, regionId: PARTY, validUntil: 2_000_000_000, tier: 2 };
    const leaf = residencyLeaf(base);
    expect(residencyLeaf({ ...base, tier: 3 })).not.toBe(leaf);
    expect(residencyLeaf({ ...base, validUntil: 2_000_000_001 })).not.toBe(leaf);
    expect(residencyLeaf({ ...base, regionId: PETITION })).not.toBe(leaf);
  });
});
