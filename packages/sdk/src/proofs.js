/**
 * Proof providers — where DES-052 is actually enforced.
 *
 * ADR-012 §3 and ADR-005 §6 both reduce to one rule: **the client refuses to prove with a
 * proving key whose hash is not the one the on-chain `VerifierRegistry` publishes**. A
 * compromised or compelled frontend serving a backdoored `.zkey` is the single highest-
 * leverage attack on this system, and the only defence that survives the frontend itself
 * being the attacker is for the device to check the artifact against the chain before it
 * uses it. There is deliberately no override, no `force: true`, and no warn-and-continue.
 *
 * snarkjs is *injected*, not imported. `tools/dep-guard` holds the SDK to a small
 * dependency set (ADR-011), and more importantly the proving backend is an ADR-005 §6
 * replacement seam: the day the protocol moves to Noir or a STARK backend, only the
 * injected `prover` changes.
 */
import { keccak256 } from 'viem';
import { CIRCUIT_NAME, SIGNAL_COUNT, ZERO_PROOF } from './constants.js';
import { assertFieldElement, isFieldElement, toBigInt } from './field.js';
import { DevOnlyRefusal, InvalidArgument, TrumocracyError, ZkeyHashMismatch } from './errors.js';

/**
 * Reshape a snarkjs Groth16 proof into the `uint256[8]` the Solidity verifier expects.
 *
 * `IProofVerifier` documents the encoding as `[a0,a1, b00,b01,b10,b11, c0,c1]`. The G2
 * coordinate pairs are **swapped** relative to snarkjs's JSON output — this is the classic
 * silent-failure point in every Groth16 integration, so it is done in exactly one place.
 *
 * @param {{pi_a: string[], pi_b: string[][], pi_c: string[]}} proof
 * @returns {bigint[]} eight field elements
 */
export function formatGroth16Proof(proof) {
  const { pi_a, pi_b, pi_c } = proof ?? {};
  if (!Array.isArray(pi_a) || !Array.isArray(pi_b) || !Array.isArray(pi_c)) {
    throw new InvalidArgument('proof is not a snarkjs Groth16 proof', { proof });
  }
  return [
    toBigInt(pi_a[0]),
    toBigInt(pi_a[1]),
    toBigInt(pi_b[0][1]),
    toBigInt(pi_b[0][0]),
    toBigInt(pi_b[1][1]),
    toBigInt(pi_b[1][0]),
    toBigInt(pi_c[0]),
    toBigInt(pi_c[1]),
  ];
}

/**
 * The provider contract.
 *
 * A provider takes a circuit id, the public signals **in the contract's index order**, and
 * a private witness that must never leave the device, and returns `{ proof, publicSignals }`.
 */
export class ProofProvider {
  /** @param {string} name */
  constructor(name) {
    this.name = name;
  }

  /**
   * Shared, non-abstract validation every provider runs.
   *
   * Checks the two things a contract will check for us far too late: the number of public
   * signals (`if (publicSignals.length != 6) revert InvalidProof()`), and whether each
   * signal is a usable bn254 element. Returns the signals as bigints.
   *
   * @param {`0x${string}`} circuitId
   * @param {Array<bigint|number|string>} signals
   * @param {{requireFieldElements?: boolean}} [opts]
   * @returns {{signals: bigint[], diagnostics: Array<{code: string, index: number, value: bigint}>}}
   */
  validateSignals(circuitId, signals, { requireFieldElements = true } = {}) {
    if (!Array.isArray(signals)) {
      throw new InvalidArgument('publicSignals must be an array', { circuitId });
    }
    const expected = SIGNAL_COUNT[circuitId];
    if (expected !== undefined && signals.length !== expected) {
      throw new InvalidArgument(
        `circuit ${CIRCUIT_NAME[circuitId] ?? circuitId} expects ${expected} public signals, got ${signals.length}`,
        { circuitId, expected, got: signals.length },
      );
    }
    const diagnostics = [];
    const out = signals.map((s, i) => {
      const n = toBigInt(s);
      if (requireFieldElements) return assertFieldElement(`publicSignals[${i}]`, n);
      if (!isFieldElement(n)) diagnostics.push({ code: 'NOT_A_FIELD_ELEMENT', index: i, value: n });
      return n;
    });
    return { signals: out, diagnostics };
  }

  /**
   * @abstract
   * @param {`0x${string}`} _circuitId
   * @param {{signals: Array<bigint|number|string>, witness: object}} _args
   * @returns {Promise<{proof: bigint[], publicSignals: bigint[], provider: string, diagnostics?: object[]}>}
   */
  async prove(_circuitId, _args) {
    throw new TrumocracyError(
      'PROVIDER_ABSTRACT',
      `${this.name} does not implement prove(); use Groth16ProofProvider or DevProofProvider`,
    );
  }
}

/**
 * The real one: loads a ceremony artifact, pins it to the chain, and proves in a worker.
 *
 * @param {object} deps
 * @param {{zkeyHash: (circuitId: string) => Promise<`0x${string}`>}} deps.registry
 *        reads `VerifierRegistry.current(circuitId).zkeyHash` — the on-chain pin
 * @param {{load: (circuitId: string) => Promise<{zkey: Uint8Array, wasm: Uint8Array|string}>}} deps.artifacts
 *        fetches the `.zkey` bytes and the witness-generator wasm
 * @param {{fullProve: (input: object, wasm: unknown, zkey: unknown) => Promise<{proof: object, publicSignals: string[]}>}} deps.prover
 *        injected `snarkjs.groth16` (or an equivalent running inside a Web Worker)
 * @param {(bytes: Uint8Array) => `0x${string}`} [deps.hash] defaults to keccak256
 */
export class Groth16ProofProvider extends ProofProvider {
  #registry;
  #artifacts;
  #prover;
  #hash;
  /** circuitId → the zkeyHash we last verified this artifact against. */
  #verified = new Map();

  constructor({ registry, artifacts, prover, hash = keccak256 }) {
    super('groth16');
    if (!registry?.zkeyHash) throw new InvalidArgument('Groth16ProofProvider needs a registry with zkeyHash()');
    if (!artifacts?.load) throw new InvalidArgument('Groth16ProofProvider needs an artifacts loader');
    if (!prover?.fullProve) throw new InvalidArgument('Groth16ProofProvider needs a prover with fullProve()');
    this.#registry = registry;
    this.#artifacts = artifacts;
    this.#prover = prover;
    this.#hash = hash;
  }

  /**
   * Load the artifact and check it against the chain.
   *
   * The registry is re-read on **every** call even when the artifact is cached: a circuit
   * that has been superseded (ADR-005 §5) must stop being used the moment the chain says
   * so, and caching the *decision* rather than the *bytes* would keep a retired key alive.
   *
   * @param {`0x${string}`} circuitId
   */
  async #loadPinned(circuitId) {
    const expected = String(await this.#registry.zkeyHash(circuitId)).toLowerCase();
    const artifact = await this.#artifacts.load(circuitId);
    if (!artifact?.zkey) {
      throw new InvalidArgument(`no zkey returned for circuit ${CIRCUIT_NAME[circuitId] ?? circuitId}`);
    }
    const cached = this.#verified.get(circuitId);
    if (cached?.zkeyHash === expected && cached.artifact === artifact) return artifact;

    const actual = String(this.#hash(artifact.zkey)).toLowerCase();
    if (actual !== expected) {
      // Fail closed. A citizen is better served by "we could not do this safely" than by a
      // proof generated with a key someone else chose for them.
      throw new ZkeyHashMismatch(CIRCUIT_NAME[circuitId] ?? circuitId, expected, actual);
    }
    this.#verified.set(circuitId, { zkeyHash: expected, artifact });
    return artifact;
  }

  /**
   * @param {`0x${string}`} circuitId
   * @param {{signals: Array<bigint|number|string>, witness: object}} args
   */
  async prove(circuitId, { signals, witness }) {
    const { signals: publicSignals } = this.validateSignals(circuitId, signals);
    const artifact = await this.#loadPinned(circuitId);

    const result = await this.#prover.fullProve(witness, artifact.wasm, artifact.zkey);
    const produced = (result?.publicSignals ?? []).map(toBigInt);

    // The contract indexes public signals positionally. If the circuit's output ordering
    // is not the ordering we intended to assert, the proof is valid for a statement other
    // than the one the citizen thinks they are making.
    if (produced.length !== publicSignals.length || produced.some((v, i) => v !== publicSignals[i])) {
      throw new TrumocracyError(
        'PUBLIC_SIGNAL_MISMATCH',
        `circuit ${CIRCUIT_NAME[circuitId] ?? circuitId} produced public signals that differ from the asserted ones`,
        { expected: publicSignals.map(String), produced: produced.map(String) },
      );
    }

    return { proof: formatGroth16Proof(result.proof), publicSignals, provider: this.name };
  }
}

/**
 * The all-zero proof, for environments whose `VerifierRegistry` holds a `MockVerifier`.
 *
 * This exists so the local/CI/devnet environments in SDD §7.1 can exercise every contract
 * check — scope binding, root freshness, nullifier spending, jurisdiction match — without
 * a ceremony. It is a loaded gun: on any chain with a real verifier it produces an action
 * that cannot verify, and on a chain that somehow accepts it, it produces an action that
 * proves nothing about a person.
 *
 * So it refuses on anything that is not declared a dev chain, and — when given a probe —
 * it additionally refuses unless the registered verifier admits to being an insecure mock.
 * The second check is the one that catches the dangerous case: a config file that lies.
 *
 * @param {object} deps
 * @param {{id: number|string, name?: string, isDev?: boolean}} deps.chain
 * @param {(circuitId: string) => Promise<boolean>} [deps.isInsecureMockVerifier]
 */
export class DevProofProvider extends ProofProvider {
  #chain;
  #isInsecureMockVerifier;

  constructor({ chain, isInsecureMockVerifier } = {}) {
    super('dev-zero-proof');
    if (!chain) throw new InvalidArgument('DevProofProvider needs a chain config to check isDev against');
    this.#chain = chain;
    this.#isInsecureMockVerifier = isInsecureMockVerifier;
  }

  /**
   * @param {`0x${string}`} circuitId
   * @param {{signals: Array<bigint|number|string>, witness?: object}} args
   */
  async prove(circuitId, { signals }) {
    if (this.#chain.isDev !== true) throw new DevOnlyRefusal('DevProofProvider', this.#chain);

    if (this.#isInsecureMockVerifier) {
      const isMock = await this.#isInsecureMockVerifier(circuitId);
      if (!isMock) {
        throw new DevOnlyRefusal(
          `DevProofProvider (circuit ${CIRCUIT_NAME[circuitId] ?? circuitId} is served by a real verifier)`,
          this.#chain,
        );
      }
    }

    // Field-element violations are reported rather than thrown here: a mock verifier does
    // not range-check its inputs, so a dev run should still surface the problem that would
    // break the same action against a real verifier instead of hiding it.
    const { signals: publicSignals, diagnostics } = this.validateSignals(circuitId, signals, {
      requireFieldElements: false,
    });

    return { proof: [...ZERO_PROOF], publicSignals, provider: this.name, diagnostics };
  }
}

/**
 * Build the `registry` dependency from a viem public client.
 * Kept here rather than in `client.js` so a provider can be constructed standalone.
 *
 * @param {{readContract: Function}} publicClient
 * @param {`0x${string}`} verifierRegistryAddress
 * @param {readonly unknown[]} verifierRegistryAbi
 */
export function onChainZkeyRegistry(publicClient, verifierRegistryAddress, verifierRegistryAbi) {
  return {
    async zkeyHash(circuitId) {
      const version = await publicClient.readContract({
        address: verifierRegistryAddress,
        abi: verifierRegistryAbi,
        functionName: 'current',
        args: [circuitId],
      });
      return version.zkeyHash;
    },
  };
}
