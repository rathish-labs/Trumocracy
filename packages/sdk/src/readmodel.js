/**
 * Reads that go through the indexer but are checked against the chain — ADR-014 §1.
 *
 * "The indexer may make the UI *fast*; it may never make it *wrong*." That sentence is
 * only true if the checking is **structural**, so this module makes it impossible to
 * return a decision-relevant value without having compared it to chain state: everything
 * a citizen might act on flows through `verified()`, and `verified()` needs both an
 * indexer value and a chain reader to produce an answer.
 *
 * Which values count as decision-relevant is not a judgement call — ADR-014 lists them:
 * petition counts at the moment of endorsing, eligibility at the moment of voting,
 * thresholds, tallies, and treasury balances. All five have a method here and none of them
 * has a path that returns an unchecked indexer value.
 */
import { TrustBoundaryViolation, InvalidArgument } from './errors.js';

/**
 * Normalise for comparison across the JSON/GraphQL boundary.
 *
 * An indexer serving JSON returns `"1200"` where the chain returns `1200n`. Those are the
 * same fact, and treating them as a mismatch would make the guard cry wolf until someone
 * switched it off — which is the usual way a security control dies.
 */
function normalise(v) {
  if (typeof v === 'bigint') return v.toString();
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : String(v);
  if (typeof v === 'boolean') return v ? 'true' : 'false';
  if (typeof v === 'string') return /^0x[0-9a-fA-F]+$/.test(v) ? v.toLowerCase() : v;
  if (v === null || v === undefined) return v;
  if (Array.isArray(v)) return JSON.stringify(v.map(normalise));
  if (typeof v === 'object') {
    return JSON.stringify(Object.fromEntries(Object.entries(v).sort().map(([k, x]) => [k, normalise(x)])));
  }
  return String(v);
}

/**
 * Return a value only if the chain agrees with the indexer.
 *
 * Behaviour, in the three cases that matter:
 *  - **agreement** → the *chain's* value is returned (not the indexer's), so a subtle
 *    type or precision difference can never propagate into a decision;
 *  - **disagreement** → `TrustBoundaryViolation`. Fail closed (SDD §10.7). The citizen is
 *    told the indexer is lying or broken; they are not quietly shown either number;
 *  - **no indexer value** (indexer down or omitted the field) → the chain value is
 *    returned with `source: 'chain'`. Fail *open* on convenience: a missing cache must
 *    never stop participation (SDD §6 degraded modes).
 *
 * @template T
 * @param {string} label                  what is being compared, for the error message
 * @param {T|undefined|null} indexerValue
 * @param {() => Promise<T>} chainRead    a direct contract read — the authority
 * @param {{compare?: (a: unknown, b: unknown) => boolean, onViolation?: Function}} [opts]
 * @returns {Promise<{value: T, source: 'chain'|'indexer+chain', verified: boolean}>}
 */
export async function verified(label, indexerValue, chainRead, opts = {}) {
  if (typeof chainRead !== 'function') {
    throw new InvalidArgument(`verified("${label}") requires a chain read function — an unchecked read is not a read`);
  }
  const chainValue = await chainRead();

  if (indexerValue === undefined || indexerValue === null) {
    return { value: chainValue, source: 'chain', verified: true };
  }

  const equal = opts.compare
    ? opts.compare(indexerValue, chainValue)
    : normalise(indexerValue) === normalise(chainValue);

  if (!equal) {
    const violation = new TrustBoundaryViolation(label, indexerValue, chainValue);
    opts.onViolation?.(violation);
    throw violation;
  }

  return { value: chainValue, source: 'indexer+chain', verified: true };
}

/**
 * The decision-relevant read surface.
 *
 * @param {object} deps
 * @param {object} [deps.indexer]  anything with the query methods below; may be absent
 * @param {object} deps.chain      direct chain readers (see `chainReaders()` in client.js)
 * @param {(v: TrustBoundaryViolation) => void} [deps.onViolation]
 */
export class ReadModel {
  #indexer;
  #chain;
  #onViolation;

  constructor({ indexer, chain, onViolation } = {}) {
    if (!chain) throw new InvalidArgument('ReadModel requires chain readers — the indexer is not an authority');
    this.#indexer = indexer;
    this.#chain = chain;
    this.#onViolation = onViolation;
  }

  /** @returns {boolean} whether a cache is configured at all. Reads work either way. */
  get hasIndexer() {
    return Boolean(this.#indexer);
  }

  async #ask(method, ...args) {
    if (!this.#indexer?.[method]) return undefined;
    try {
      return await this.#indexer[method](...args);
    } catch {
      // An indexer that errors is an indexer that is down. Degrade to chain reads.
      return undefined;
    }
  }

  #verify(label, indexerValue, chainRead) {
    return verified(label, indexerValue, chainRead, { onViolation: this.#onViolation });
  }

  /**
   * Endorsement count and the frozen requirement for a petition.
   *
   * This is the read a citizen acts on when they decide whether to endorse, and it is the
   * one an adversarial indexer would most like to inflate ("it already passed, don't
   * bother") or deflate ("it's hopeless"). Both numbers are re-read from the chain.
   *
   * @param {`0x${string}`} petitionId
   */
  async petitionProgress(petitionId) {
    const hinted = await this.#ask('petition', petitionId);
    const endorsements = await this.#verify(
      `petition ${petitionId} endorsements`,
      hinted?.endorsements,
      () => this.#chain.petitionEndorsements(petitionId),
    );
    const required = await this.#verify(
      `petition ${petitionId} requiredEndorsements`,
      hinted?.requiredEndorsements,
      () => this.#chain.petitionRequired(petitionId),
    );
    return {
      petitionId,
      endorsements: endorsements.value,
      required: required.value,
      source: endorsements.source,
    };
  }

  /**
   * The endorsement threshold for a jurisdiction at a given percentage.
   * Read from the chain's own arithmetic, never recomputed here from an indexed
   * population — a wrong denominator is a wrong bar, and the bar is the whole game.
   *
   * @param {`0x${string}`} jurisdiction
   * @param {number} thresholdBps
   */
  async threshold(jurisdiction, thresholdBps) {
    const hinted = await this.#ask('threshold', jurisdiction, thresholdBps);
    const r = await this.#verify(
      `threshold ${jurisdiction}@${thresholdBps}bps`,
      hinted,
      () => this.#chain.requiredEndorsements(jurisdiction, thresholdBps),
    );
    return r.value;
  }

  /**
   * Whether a commitment was a member at the snapshot, and its tenure there.
   *
   * Eligibility is checked at the moment of voting, against the chain, because an indexer
   * that says "you are eligible" when the chain disagrees costs the citizen a failed
   * transaction — and one that says "you are not" silently disenfranchises them.
   *
   * @param {`0x${string}`} party
   * @param {bigint} commitment
   * @param {bigint|number} snapshotAt unix seconds
   */
  async eligibility(party, commitment, snapshotAt) {
    const hinted = await this.#ask('membership', party, commitment, snapshotAt);
    const isMember = await this.#verify(
      `membership of ${commitment} in ${party} at ${snapshotAt}`,
      hinted?.isMember,
      () => this.#chain.isMemberAt(party, commitment, snapshotAt),
    );
    const tenure = await this.#verify(
      `tenure of ${commitment} in ${party} at ${snapshotAt}`,
      hinted?.tenureSeconds,
      () => this.#chain.tenureAt(party, commitment, snapshotAt),
    );
    return { isMember: isMember.value, tenureSeconds: tenure.value, source: isMember.source };
  }

  /**
   * A proposal's tally.
   *
   * FR-034 forbids showing interim counts before a vote closes; that suppression is a
   * client and indexer obligation because the chain cannot hide what it stores (SDD §11).
   * This method therefore refuses to *return* a tally while voting is open unless the
   * caller explicitly asks for it, so an accidental UI binding cannot leak a running
   * count. Passing `allowInterim` is a deliberate act by an auditor, not a default.
   *
   * @param {`0x${string}`} governor
   * @param {bigint|number} proposalId
   * @param {{now?: number, allowInterim?: boolean}} [opts]
   */
  async tally(governor, proposalId, { now = Math.floor(Date.now() / 1000), allowInterim = false } = {}) {
    const hinted = await this.#ask('tally', governor, proposalId);
    const r = await this.#verify(
      `tally ${governor}#${proposalId}`,
      hinted,
      () => this.#chain.proposalTally(governor, proposalId),
    );
    const tally = r.value;
    if (!allowInterim && Number(tally.votingEndsAt) > now) {
      return { suppressed: true, reason: 'VOTING_OPEN', votingEndsAt: tally.votingEndsAt, source: r.source };
    }
    return { suppressed: false, ...tally, source: r.source };
  }

  /**
   * A party treasury's balance (DES-033).
   *
   * Money never confers influence here, but a wrong balance still misleads a member
   * voting on a disbursement, so it is on ADR-014's re-verify list like everything else.
   *
   * @param {`0x${string}`} treasury
   */
  async treasuryBalance(treasury) {
    const hinted = await this.#ask('treasuryBalance', treasury);
    const r = await this.#verify(`treasury balance ${treasury}`, hinted, () => this.#chain.balanceOf(treasury));
    return r.value;
  }

  /**
   * Convenience/list reads that cannot change a decision — party names, manifesto CIDs,
   * timelines — may come straight from the cache. Kept as one explicitly named method so
   * "is this decision-relevant?" is answered at the call site, in the open.
   *
   * @param {string} method
   * @param {...unknown} args
   */
  async unverifiedDisplayOnly(method, ...args) {
    return this.#ask(method, ...args);
  }
}
