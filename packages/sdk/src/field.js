/**
 * bn254 scalar-field helpers.
 *
 * Everything the citizen's device hands to a Groth16 verifier must be an element of the
 * bn254 *scalar* field (ADR-005). A real verifier reverts on any public input ≥ r, so a
 * value that overflows is not "probably fine" — it is an action that will silently fail
 * at the moment a citizen tries to participate. We therefore check before we prove.
 */
import { NotAFieldElement } from './errors.js';

/** The bn254 (alt-bn128) scalar field modulus — the group order snarkjs/circom work in. */
export const BN254_SCALAR_FIELD =
  21888242871839275222246405745257275088548364400416034343698204186575808495617n;

/**
 * Coerce a hex string / number / bigint to a bigint without reduction.
 * @param {string|number|bigint} v
 * @returns {bigint}
 */
export function toBigInt(v) {
  if (typeof v === 'bigint') return v;
  if (typeof v === 'number') {
    if (!Number.isSafeInteger(v)) throw new TypeError(`unsafe integer: ${v}`);
    return BigInt(v);
  }
  if (typeof v === 'string') return BigInt(v); // handles "0x…" and decimal
  throw new TypeError(`cannot coerce ${typeof v} to bigint`);
}

/** @returns {boolean} true when `v` may be used as a Groth16 public signal. */
export function isFieldElement(v) {
  const n = toBigInt(v);
  return n >= 0n && n < BN254_SCALAR_FIELD;
}

/**
 * Assert that a value is a valid public signal, or throw.
 * Fail closed: a proof built on an out-of-range signal cannot verify on-chain.
 */
export function assertFieldElement(label, v) {
  const n = toBigInt(v);
  if (!isFieldElement(n)) throw new NotAFieldElement(label, n);
  return n;
}

/**
 * Reduce an arbitrary 256-bit value (typically a keccak256 digest) into the scalar field.
 *
 * Used ONLY for values that go *inside* a Poseidon hash on the device — never for a value
 * that must byte-match a `bytes32` the contract recomputes. Reducing a scope before
 * comparing it to `_endorseScope()` would produce a different scope and the endorsement
 * would revert, so the two uses are kept deliberately separate.
 */
export function toField(v) {
  const n = toBigInt(v);
  const m = n % BN254_SCALAR_FIELD;
  return m < 0n ? m + BN254_SCALAR_FIELD : m;
}
