/**
 * UT-2525…UT-2536 — proving-key pinning (DES-052) and the dev-provider refusal.
 *
 * DES-052 is not a nicety. If a compelled or compromised frontend can hand one citizen a
 * different `.zkey`, it can forge that citizen's residency, their membership, or their
 * vote — and the citizen has no way to notice. The only defence that works when the
 * frontend itself is the attacker is for the device to check the artifact against the
 * chain, and refuse. These tests exist to make sure that refusal is unconditional.
 *
 * Traces: RISK-10, DES-052, ADR-005 §6, ADR-012 §3, SDD §7.1.
 */
import { describe, it, expect, vi } from 'vitest';
import { keccak256 } from 'viem';
import { DevProofProvider, Groth16ProofProvider, ProofProvider, formatGroth16Proof } from '../src/proofs.js';
import { CIRCUIT, ZERO_PROOF } from '../src/constants.js';
import { DevOnlyRefusal, InvalidArgument, NotAFieldElement, ZkeyHashMismatch, TrumocracyError } from '../src/errors.js';
import { BN254_SCALAR_FIELD } from '../src/field.js';

const GOOD_ZKEY = new Uint8Array([1, 2, 3, 4]);
const EVIL_ZKEY = new Uint8Array([1, 2, 3, 5]);
const GOOD_HASH = keccak256(GOOD_ZKEY);

/** Six valid residency signals: [root, regionId, minTier, scope, nullifier, commitment]. */
const SIGNALS = [11n, 22n, 1n, 33n, 44n, 55n];

const fakeProof = {
  pi_a: ['1', '2', '1'],
  pi_b: [
    ['3', '4'],
    ['5', '6'],
    ['1', '0'],
  ],
  pi_c: ['7', '8', '1'],
};

function makeProvider({ zkey = GOOD_ZKEY, registeredHash = GOOD_HASH, publicSignals = SIGNALS } = {}) {
  const fullProve = vi.fn(async () => ({ proof: fakeProof, publicSignals: publicSignals.map(String) }));
  const zkeyHash = vi.fn(async () => registeredHash);
  const provider = new Groth16ProofProvider({
    registry: { zkeyHash },
    artifacts: { load: async () => ({ zkey, wasm: 'witness.wasm' }) },
    prover: { fullProve },
  });
  return { provider, fullProve, zkeyHash };
}

describe('Groth16ProofProvider — zkey pinning', () => {
  it('UT-2525 proves when the artifact hash equals the registered zkeyHash', async () => {
    const { provider, fullProve } = makeProvider();
    const result = await provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS, witness: { secret: 1n } });
    expect(result.proof).toEqual([1n, 2n, 4n, 3n, 6n, 5n, 7n, 8n]);
    expect(result.publicSignals).toEqual(SIGNALS);
    expect(fullProve).toHaveBeenCalledOnce();
  });

  it('UT-2526 REFUSES an artifact whose hash is not the registered ceremony key', async () => {
    const { provider, fullProve } = makeProvider({ zkey: EVIL_ZKEY });
    await expect(provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS, witness: {} })).rejects.toBeInstanceOf(
      ZkeyHashMismatch,
    );
    // The decisive assertion: proving never started. A "prove then warn" design would have
    // already put a forgeable proof in the citizen's hands.
    expect(fullProve).not.toHaveBeenCalled();
  });

  it('UT-2527 there is no override that lets a mismatched key through', async () => {
    const { provider } = makeProvider({ zkey: EVIL_ZKEY });
    for (const extra of [{ force: true }, { allowUnpinned: true }, { skipVerification: true }]) {
      await expect(
        provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS, witness: {}, ...extra }),
      ).rejects.toBeInstanceOf(ZkeyHashMismatch);
    }
  });

  it('UT-2528 re-reads the registry on every proof so a superseded key stops working', async () => {
    const { provider, zkeyHash } = makeProvider();
    await provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS, witness: {} });
    await provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS, witness: {} });
    expect(zkeyHash).toHaveBeenCalledTimes(2);

    // Now the protocol supersedes the circuit; the cached artifact must stop being used.
    zkeyHash.mockResolvedValue(keccak256(EVIL_ZKEY));
    await expect(provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS, witness: {} })).rejects.toBeInstanceOf(
      ZkeyHashMismatch,
    );
  });

  it('UT-2529 rejects the wrong number of public signals before spending proving time', async () => {
    const { provider, fullProve } = makeProvider();
    await expect(
      provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: [1n, 2n, 3n], witness: {} }),
    ).rejects.toBeInstanceOf(InvalidArgument);
    expect(fullProve).not.toHaveBeenCalled();
  });

  it('UT-2530 rejects a public signal that is not a bn254 field element', async () => {
    const { provider } = makeProvider();
    const overflowing = [...SIGNALS];
    overflowing[3] = BN254_SCALAR_FIELD + 1n; // a full-width keccak scope, for instance
    await expect(provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: overflowing, witness: {} })).rejects.toBeInstanceOf(
      NotAFieldElement,
    );
  });

  it('UT-2531 rejects a circuit whose output signals differ from the asserted ones', async () => {
    const { provider } = makeProvider({ publicSignals: [11n, 22n, 1n, 33n, 44n, 999n] });
    await expect(provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS, witness: {} })).rejects.toThrow(
      /public signals that differ/,
    );
  });

  it('UT-2532 formatGroth16Proof swaps the G2 coordinate pairs for Solidity', () => {
    // [a0,a1, b00,b01,b10,b11, c0,c1] per IProofVerifier — pi_b's inner pairs are reversed.
    expect(formatGroth16Proof(fakeProof)).toEqual([1n, 2n, 4n, 3n, 6n, 5n, 7n, 8n]);
    expect(() => formatGroth16Proof({})).toThrow(InvalidArgument);
  });

  it('UT-2533 refuses to be constructed without its safety dependencies', () => {
    expect(() => new Groth16ProofProvider({ artifacts: { load() {} }, prover: { fullProve() {} } })).toThrow(
      InvalidArgument,
    );
    expect(() => new Groth16ProofProvider({ registry: { zkeyHash() {} }, prover: { fullProve() {} } })).toThrow(
      InvalidArgument,
    );
  });
});

describe('DevProofProvider — dev chains only', () => {
  it('UT-2534 returns the all-zero proof on a dev chain', async () => {
    const provider = new DevProofProvider({ chain: { id: 31337, name: 'local', isDev: true } });
    const result = await provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS });
    expect(result.proof).toEqual([...ZERO_PROOF]);
    expect(result.publicSignals).toEqual(SIGNALS);
  });

  it('UT-2535 REFUSES on a chain that is not declared a dev chain', async () => {
    for (const chain of [{ id: 8453, name: 'base' }, { id: 8453, name: 'base', isDev: false }, { id: 84532, name: 'base-sepolia', isDev: 'yes' }]) {
      const provider = new DevProofProvider({ chain });
      await expect(provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS })).rejects.toBeInstanceOf(
        DevOnlyRefusal,
      );
    }
  });

  it('UT-2536 refuses even on a dev chain when the verifier is not an insecure mock', async () => {
    // The case that matters: a config file claiming "dev" against a real deployment.
    const provider = new DevProofProvider({
      chain: { id: 31337, isDev: true },
      isInsecureMockVerifier: async () => false,
    });
    await expect(provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS })).rejects.toBeInstanceOf(DevOnlyRefusal);
  });

  it('UT-2537 reports, rather than hides, signals that a real verifier would reject', async () => {
    const provider = new DevProofProvider({ chain: { id: 31337, isDev: true } });
    const overflowing = [...SIGNALS];
    overflowing[3] = BN254_SCALAR_FIELD + 7n;
    const result = await provider.prove(CIRCUIT.RESIDENCY_MEMBER, { signals: overflowing });
    expect(result.diagnostics).toEqual([{ code: 'NOT_A_FIELD_ELEMENT', index: 3, value: BN254_SCALAR_FIELD + 7n }]);
  });

  it('UT-2538 needs a chain config at all — "no config" is not "dev"', () => {
    expect(() => new DevProofProvider({})).toThrow(InvalidArgument);
  });

  it('UT-2539 the base ProofProvider cannot be used to prove anything', async () => {
    await expect(new ProofProvider('base').prove(CIRCUIT.RESIDENCY_MEMBER, { signals: SIGNALS })).rejects.toBeInstanceOf(
      TrumocracyError,
    );
  });
});
