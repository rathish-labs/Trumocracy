/**
 * Multi-transport submission — DES-051 / ADR-014 "the fallback path is real".
 *
 * The order is bundler → alternate bundler → self-pay → **L1 force-inclusion**, and the
 * order encodes a politics: each step down costs the citizen more (money, then time) and
 * depends on fewer other people. The last step depends on nobody at all, which is the
 * property NFR-025 actually asks for — no component may sit on a path where its absence
 * prevents participation.
 *
 * An escape hatch that has never been exercised does not exist (ADR-014), so the selection
 * logic is a plain, testable state machine rather than a try/catch buried in a submit
 * function: `test/transport.test.js` drives every failure combination through it.
 */
import { encodeFunctionData } from 'viem';
import { optimismPortalAbi } from './abi.js';
import { AllTransportsFailed, InvalidArgument } from './errors.js';

/**
 * @typedef {object} SubmitRequest
 * @property {`0x${string}`} to        contract being called on the L2
 * @property {`0x${string}`} data      abi-encoded calldata
 * @property {bigint} [value]          wei to attach (protocol actions attach none)
 * @property {bigint} [gasLimit]       gas the action needs on L2
 * @property {string} [action]         human label, for the "how was this sent" receipt
 */

/**
 * @typedef {object} SubmitResult
 * @property {string} transport        which transport carried it
 * @property {`0x${string}`} [hash]    transaction / userOp hash, when the transport has one
 * @property {'l2'|'l1-force-inclusion'} layer
 * @property {number} [estimatedInclusionSeconds}
 */

/** Base transport. `available()` is a cheap pre-check; `send()` does the work. */
export class Transport {
  /**
   * @param {string} name
   * @param {'l2'|'l1-force-inclusion'} layer
   */
  constructor(name, layer = 'l2') {
    this.name = name;
    this.layer = layer;
  }

  /** @returns {Promise<boolean>} */
  async available() {
    return true;
  }

  /**
   * @param {SubmitRequest} _request
   * @returns {Promise<SubmitResult>}
   */
  async send(_request) {
    throw new InvalidArgument(`${this.name} does not implement send()`);
  }
}

/**
 * ERC-4337 bundler + paymaster (ADR-002, DES-043).
 *
 * The happy path: the citizen pays nothing and never sees the word "gas". Sponsorship
 * exhaustion is a *degradation* here, not a denial — `available()` returning false simply
 * moves the action one step down the chain (ADR-014).
 *
 * @param {object} opts
 * @param {string} opts.name
 * @param {{sendUserOperation: (req: SubmitRequest) => Promise<`0x${string}`>, health?: () => Promise<boolean>}} opts.bundler
 * @param {() => Promise<boolean>} [opts.hasSponsorshipBudget]
 */
export class BundlerTransport extends Transport {
  #bundler;
  #hasSponsorshipBudget;

  constructor({ name = 'bundler', bundler, hasSponsorshipBudget }) {
    super(name, 'l2');
    if (!bundler?.sendUserOperation) throw new InvalidArgument('BundlerTransport needs bundler.sendUserOperation');
    this.#bundler = bundler;
    this.#hasSponsorshipBudget = hasSponsorshipBudget;
  }

  async available() {
    if (this.#bundler.health && !(await this.#bundler.health())) return false;
    if (this.#hasSponsorshipBudget && !(await this.#hasSponsorshipBudget())) return false;
    return true;
  }

  async send(request) {
    const hash = await this.#bundler.sendUserOperation(request);
    return { transport: this.name, hash, layer: 'l2', estimatedInclusionSeconds: 10 };
  }
}

/**
 * The citizen pays their own (sub-cent) fee from their own account.
 *
 * Requires a funded account, which most citizens will not have — which is exactly why this
 * is third and not first. But "pay your own fee" is always better than "you cannot
 * participate", and ADR-014 makes that the stated degradation.
 *
 * @param {object} opts
 * @param {{sendTransaction: (req: object) => Promise<`0x${string}`>, account?: object}} opts.walletClient
 * @param {() => Promise<bigint>} [opts.balanceOf] native balance of the citizen's account
 */
export class SelfPayTransport extends Transport {
  #walletClient;
  #balanceOf;

  constructor({ name = 'self-pay', walletClient, balanceOf }) {
    super(name, 'l2');
    if (!walletClient?.sendTransaction) throw new InvalidArgument('SelfPayTransport needs walletClient.sendTransaction');
    this.#walletClient = walletClient;
    this.#balanceOf = balanceOf;
  }

  async available() {
    if (!this.#balanceOf) return true;
    return (await this.#balanceOf()) > 0n;
  }

  async send(request) {
    const hash = await this.#walletClient.sendTransaction({
      to: request.to,
      data: request.data,
      value: request.value ?? 0n,
      ...(request.gasLimit ? { gas: request.gasLimit } : {}),
    });
    return { transport: this.name, hash, layer: 'l2', estimatedInclusionSeconds: 30 };
  }
}

/**
 * L1 force-inclusion (DES-041, ADR-001).
 *
 * When the sequencer will not carry a party's transactions, the citizen deposits the same
 * call through the L1 `OptimismPortal`; the L2 derivation pipeline must include it. This
 * is slow (ADR-001 puts it at 12–24 h, which is why voting windows are ≥72 h) and the
 * citizen pays L1 fees — and it is the only submission path whose liveness does not depend
 * on anyone's goodwill.
 *
 * This adapter builds the correct `depositTransaction` calldata unconditionally; the
 * actual L1 submission is delegated to an injected `submit`, so the path is fully unit-
 * testable without a live L1 and can be driven by any L1 client the citizen already has.
 *
 * @param {object} opts
 * @param {`0x${string}`} opts.portalAddress   OptimismPortal on L1
 * @param {(tx: {to: `0x${string}`, data: `0x${string}`, value: bigint}) => Promise<`0x${string}`>} [opts.submit]
 * @param {bigint} [opts.l2GasLimit]           gas to buy on L2 for the deposited call
 * @param {number} [opts.estimatedInclusionSeconds]
 */
export class L1ForceInclusionTransport extends Transport {
  #portalAddress;
  #submit;
  #l2GasLimit;
  #eta;

  constructor({ portalAddress, submit, l2GasLimit = 1_000_000n, estimatedInclusionSeconds = 12 * 3600 }) {
    super('l1-force-inclusion', 'l1-force-inclusion');
    if (!portalAddress) throw new InvalidArgument('L1ForceInclusionTransport needs the OptimismPortal address');
    this.#portalAddress = portalAddress;
    this.#submit = submit;
    this.#l2GasLimit = l2GasLimit;
    this.#eta = estimatedInclusionSeconds;
  }

  /**
   * Build the L1 transaction that forces `request` into the L2.
   *
   * `_isCreation` is always false — a citizen action is always a call to an already
   * deployed protocol contract, and a deposit that creates a contract cannot be one of the
   * protocol actions we sponsor.
   *
   * @param {SubmitRequest} request
   * @returns {{to: `0x${string}`, data: `0x${string}`, value: bigint}}
   */
  buildDeposit(request) {
    const data = encodeFunctionData({
      abi: optimismPortalAbi,
      functionName: 'depositTransaction',
      args: [request.to, request.value ?? 0n, request.gasLimit ?? this.#l2GasLimit, false, request.data],
    });
    return { to: this.#portalAddress, data, value: request.value ?? 0n };
  }

  async available() {
    // The portal is an immutable L1 contract. If we have an address and a way to submit,
    // this path exists; it is never "down" in the way a hosted service is.
    return Boolean(this.#submit);
  }

  async send(request) {
    const deposit = this.buildDeposit(request);
    const hash = await this.#submit(deposit);
    return {
      transport: this.name,
      hash,
      layer: 'l1-force-inclusion',
      estimatedInclusionSeconds: this.#eta,
      deposit,
    };
  }
}

/**
 * Ordered fallback chain.
 *
 * Semantics, stated because they are the whole point:
 *  - transports are tried **in the order given** — the order is policy, not preference;
 *  - a transport that reports itself unavailable is skipped without an attempt;
 *  - a transport that *throws* is recorded and the chain moves on — one broken bundler
 *    must never end a citizen's participation;
 *  - if every transport declines or fails, `AllTransportsFailed` carries the full attempt
 *    log, so the UI can tell the citizen which door was closed rather than "try again".
 */
export class TransportChain {
  /**
   * @param {Transport[]} transports
   * @param {{onAttempt?: (attempt: {transport: string, outcome: string, error?: Error}) => void}} [opts]
   */
  constructor(transports, { onAttempt } = {}) {
    if (!Array.isArray(transports) || transports.length === 0) {
      throw new InvalidArgument('TransportChain needs at least one transport');
    }
    this.transports = transports;
    this.onAttempt = onAttempt;
  }

  /** @returns {string[]} the fallback order, for display and for tests. */
  order() {
    return this.transports.map((t) => t.name);
  }

  /**
   * @param {SubmitRequest} request
   * @returns {Promise<SubmitResult & {attempts: Array<{transport: string, outcome: string}>}>}
   */
  async send(request) {
    const attempts = [];
    const record = (transport, outcome, error) => {
      const attempt = { transport, outcome, ...(error ? { error } : {}) };
      attempts.push(attempt);
      this.onAttempt?.(attempt);
    };

    for (const transport of this.transports) {
      let usable = false;
      try {
        usable = await transport.available();
      } catch (error) {
        // An `available()` that throws is treated as unavailable, never as fatal: a health
        // probe failing is not a reason to stop a citizen acting.
        record(transport.name, 'probe-failed', error);
        continue;
      }
      if (!usable) {
        record(transport.name, 'unavailable');
        continue;
      }
      try {
        const result = await transport.send(request);
        record(transport.name, 'sent');
        return { ...result, attempts };
      } catch (error) {
        record(transport.name, 'send-failed', error);
      }
    }

    throw new AllTransportsFailed(attempts);
  }
}

/**
 * Assemble the ADR-014 order. Anything not configured is simply absent from the chain —
 * a citizen with no funded account still gets bundler → bundler → force-inclusion.
 *
 * @param {object} opts
 * @param {BundlerTransport[]} [opts.bundlers]  primary first, alternates after
 * @param {SelfPayTransport} [opts.selfPay]
 * @param {L1ForceInclusionTransport} [opts.forceInclusion]
 * @param {{onAttempt?: Function}} [opts.hooks]
 * @returns {TransportChain}
 */
export function defaultTransportChain({ bundlers = [], selfPay, forceInclusion, hooks = {} }) {
  const ordered = [...bundlers, selfPay, forceInclusion].filter(Boolean);
  return new TransportChain(ordered, hooks);
}
