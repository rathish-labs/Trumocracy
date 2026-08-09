/**
 * SDK error taxonomy.
 *
 * Every error here is *typed*, because the client's failure policy is not uniform
 * (SDD §10.7): the SDK fails **closed** on anything security-relevant — a bad proving key,
 * a scope that would not verify, an indexer that disagrees with the chain — and fails
 * **open** on convenience — an unavailable bundler, a missing indexer. A caller can only
 * implement that policy if it can tell the two apart without parsing message strings.
 */

/** Base class so a caller can `catch (e) { if (e instanceof TrumocracyError) … }`. */
export class TrumocracyError extends Error {
  /**
   * @param {string} code   stable, machine-readable code — never localise or reword this
   * @param {string} message
   * @param {object} [details]
   */
  constructor(code, message, details = {}) {
    super(message);
    this.name = new.target.name;
    this.code = code;
    this.details = details;
  }
}

/**
 * The indexer told us something the chain contradicts (ADR-014 §1).
 *
 * This is not a "stale cache" warning to be swallowed. The indexer is allowed to be slow;
 * it is not allowed to be wrong about a value a citizen is about to act on. Surfacing it
 * loudly is the only thing that makes a non-authoritative indexer safe to have.
 */
export class TrustBoundaryViolation extends TrumocracyError {
  constructor(label, indexerValue, chainValue) {
    super(
      'TRUST_BOUNDARY_VIOLATION',
      `indexer disagrees with chain for "${label}": indexer=${String(indexerValue)} chain=${String(chainValue)}`,
      { label, indexerValue, chainValue },
    );
  }
}

/**
 * The proving artifact we were handed does not hash to the `zkeyHash` the on-chain
 * `VerifierRegistry` publishes for this circuit (DES-052, ADR-005 §6, ADR-012 §3).
 *
 * A malicious or compelled frontend swapping in a backdoored proving key is exactly the
 * attack this check exists for, so there is no override flag and no "continue anyway".
 */
export class ZkeyHashMismatch extends TrumocracyError {
  constructor(circuit, expected, actual) {
    super(
      'ZKEY_HASH_MISMATCH',
      `refusing to prove "${circuit}": artifact hash ${actual} is not the registered ceremony key ${expected}`,
      { circuit, expected, actual },
    );
  }
}

/** A dev-only component was asked to run against a chain that is not a dev chain. */
export class DevOnlyRefusal extends TrumocracyError {
  constructor(what, chain) {
    super(
      'DEV_ONLY_REFUSAL',
      `${what} refuses to run on chain ${chain?.name ?? chain?.id ?? 'unknown'}: it produces a zero proof that only an insecure mock verifier accepts`,
      { what, chainId: chain?.id, chainName: chain?.name },
    );
  }
}

/**
 * A value destined for a Groth16 public signal is not a bn254 scalar-field element.
 *
 * A real Groth16 verifier rejects any input ≥ the scalar field modulus, so proving would
 * be wasted work and the citizen's action would fail on-chain with an opaque revert.
 */
export class NotAFieldElement extends TrumocracyError {
  constructor(label, value) {
    super(
      'NOT_A_FIELD_ELEMENT',
      `${label} is not a bn254 scalar-field element (0x${value.toString(16)}); a Groth16 verifier will reject it`,
      { label, value },
    );
  }
}

/** Every transport in the chain declined or failed. The action did not reach the chain. */
export class AllTransportsFailed extends TrumocracyError {
  constructor(attempts) {
    super(
      'ALL_TRANSPORTS_FAILED',
      `no transport could submit the action (tried: ${attempts.map((a) => `${a.transport}=${a.outcome}`).join(', ')})`,
      { attempts },
    );
  }
}

/** The caller asked for something the protocol has no representation for. */
export class InvalidArgument extends TrumocracyError {
  constructor(message, details) {
    super('INVALID_ARGUMENT', message, details);
  }
}

/** A capability is dark behind a feature flag (ADR-011 ship-dark rule). */
export class FlagDisabled extends TrumocracyError {
  constructor(flagKey) {
    super('FLAG_DISABLED', `the "${flagKey}" capability is not enabled in this environment`, { flagKey });
  }
}
