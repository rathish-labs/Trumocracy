/**
 * UT-2614…UT-2622 — local Merkle witnesses and field-element discipline.
 *
 * The chain stores a root and nothing else, so the citizen's device rebuilds the tree from
 * the public event log and generates its own witness. No service does this for them —
 * a witness service would learn which leaf each citizen cares about, which is the
 * surveillance database ADR-005 refuses to build even when it would be faster.
 *
 * Traces: FR-006, FR-020, NFR-001, ADR-005 §4.
 */
import { describe, it, expect } from 'vitest';
import { buildTree, membershipWitness, verifyWitness, leanImtHash } from '../src/tree.js';
import { BN254_SCALAR_FIELD, assertFieldElement, isFieldElement, toField, toBigInt } from '../src/field.js';
import { InvalidArgument, NotAFieldElement } from '../src/errors.js';

const leaves = [11n, 22n, 33n, 44n, 55n];

describe('LeanIMT witnesses', () => {
  it('UT-2614 builds a tree whose root depends on insertion order', () => {
    const a = buildTree(leaves);
    const b = buildTree([...leaves].reverse());
    // Order is consensus: a correctly-hashed tree built in the wrong order yields a root
    // the chain has never seen, and the proof fails with an opaque InvalidProof.
    expect(a.root).not.toBe(b.root);
  });

  it('UT-2615 generates a witness that verifies against the tree root', () => {
    const tree = buildTree(leaves);
    const w = membershipWitness(tree, 33n);
    expect(w.root).toBe(tree.root);
    expect(w.leaf).toBe(33n);
    expect(w.index).toBe(2);
    expect(verifyWitness(w)).toBe(true);
  });

  it('UT-2616 a tampered witness does not verify', () => {
    const tree = buildTree(leaves);
    const w = membershipWitness(tree, 33n);
    expect(verifyWitness({ ...w, leaf: 99n })).toBe(false);
  });

  it('UT-2617 refuses to invent a witness for a leaf that is not in the tree', () => {
    // "You are not in this tree" is actionable (credential expired, region escalated);
    // guessing would waste seconds of proving on a device we promised not to waste.
    expect(() => membershipWitness(buildTree(leaves), 99n)).toThrow(InvalidArgument);
  });

  it('UT-2618 uses the same Poseidon pair-hash as the Solidity InternalLeanIMT', () => {
    const tree = buildTree([1n, 2n]);
    expect(tree.root).toBe(leanImtHash(1n, 2n));
  });

  it('UT-2619 refuses a non-array leaf set rather than silently building an empty tree', () => {
    expect(() => buildTree(null)).toThrow(InvalidArgument);
  });
});

describe('field discipline', () => {
  it('UT-2620 knows the bn254 scalar field modulus', () => {
    expect(BN254_SCALAR_FIELD).toBe(
      21888242871839275222246405745257275088548364400416034343698204186575808495617n,
    );
  });

  it('UT-2621 identifies values a Groth16 verifier would reject', () => {
    expect(isFieldElement(0n)).toBe(true);
    expect(isFieldElement(BN254_SCALAR_FIELD - 1n)).toBe(true);
    expect(isFieldElement(BN254_SCALAR_FIELD)).toBe(false);
    // A keccak256 digest is 256 bits, and the field is ~254, so roughly four in five
    // digests overflow. That is why scopes are checked and not assumed.
    expect(isFieldElement(2n ** 255n)).toBe(false);
    expect(() => assertFieldElement('signal', 2n ** 255n)).toThrow(NotAFieldElement);
  });

  it('UT-2622 reduces only where reduction is safe, and never loses the original', () => {
    const digest = `0x${'ff'.repeat(32)}`;
    expect(toField(digest)).toBe(BigInt(digest) % BN254_SCALAR_FIELD);
    expect(toField(digest)).toBeLessThan(BN254_SCALAR_FIELD);
    expect(toBigInt(digest)).toBe(BigInt(digest)); // unreduced, for the bytes32 comparison
  });

  it('UT-2623 refuses to coerce an unsafe JavaScript integer', () => {
    expect(() => toBigInt(Number.MAX_SAFE_INTEGER + 2)).toThrow(TypeError);
  });
});
