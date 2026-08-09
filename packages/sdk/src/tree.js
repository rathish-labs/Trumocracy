/**
 * Local mirrors of the on-chain Poseidon LeanIMTs (ADR-005 §4).
 *
 * The chain stores only a root; it cannot list who is in a tree, and that is the point
 * (SDD §5.3). A citizen who wants to prove membership therefore has to reconstruct the
 * tree locally from the public `ResidencyIssued` / `Joined` event log and generate their
 * own Merkle witness. That reconstruction happens here, on the device, from public data.
 *
 * Nothing in this module needs — or accepts — anyone else's help: a service that generated
 * witnesses for citizens would learn which leaf each citizen cares about, which is the
 * surveillance database the whole design exists to not have (ADR-005 §"delegated proving").
 */
import { LeanIMT } from '@zk-kit/lean-imt';
import { poseidon2 } from 'poseidon-lite';
import { InvalidArgument } from './errors.js';

/** The hash the Solidity `InternalLeanIMT` uses. Must match exactly or every root differs. */
export const leanImtHash = (a, b) => poseidon2([a, b]);

/**
 * Build a LeanIMT from an ordered list of leaves.
 *
 * **Order is consensus.** Leaves must be inserted in the same order the contract inserted
 * them — i.e. event order (block, then log index). A correctly-hashed tree built in the
 * wrong order produces a root the chain has never seen, and the proof fails with an
 * unhelpful `InvalidProof`.
 *
 * @param {Array<bigint|string|number>} leaves
 * @returns {LeanIMT}
 */
export function buildTree(leaves) {
  if (!Array.isArray(leaves)) throw new InvalidArgument('buildTree expects an array of leaves in insertion order');
  const tree = new LeanIMT(leanImtHash);
  for (const leaf of leaves) tree.insert(BigInt(leaf));
  return tree;
}

/**
 * Generate a membership witness for one leaf.
 *
 * @param {LeanIMT} tree
 * @param {bigint|string|number} leaf
 * @returns {{root: bigint, leaf: bigint, index: number, siblings: bigint[], depth: number}}
 */
export function membershipWitness(tree, leaf) {
  const target = BigInt(leaf);
  const index = tree.indexOf(target);
  if (index === -1) {
    // Fail loudly rather than proving something else: "you are not in this tree" is a real,
    // actionable answer (your credential expired, or your region escalated) and guessing
    // would waste 1–4 seconds of proving on a device we promised not to waste.
    throw new InvalidArgument('leaf is not in this tree — rebuild from the event log, or re-attest', {
      leaf: target.toString(),
      size: tree.size,
    });
  }
  const proof = tree.generateProof(index);
  return {
    root: proof.root,
    leaf: proof.leaf,
    index: proof.index,
    siblings: proof.siblings.map((s) => BigInt(s)),
    depth: proof.siblings.length,
  };
}

/**
 * Check a witness locally before spending a proof on it.
 * @param {{root: bigint, leaf: bigint, index: number, siblings: bigint[]}} witness
 */
export function verifyWitness(witness) {
  return LeanIMT.verifyProof(
    { root: witness.root, leaf: witness.leaf, index: witness.index, siblings: witness.siblings },
    leanImtHash,
  );
}
