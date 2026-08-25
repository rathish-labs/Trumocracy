/**
 * IBallotService seam — DES-096, ADR-024.
 *
 * A stable design-level interface decoupling the application layer from the ballot-casting
 * and tally mechanism. The application calls this interface; the backing is swapped between
 * v1 (conventional authenticated database vote) and v2 (MACI encrypted ballot) without any
 * change above the seam boundary. Doc 03 §10.13.3.
 *
 * ─── v1 backing overview (DES-097) ───────────────────────────────────────────────
 *
 * Conventional authenticated database vote. The ballot direction is visible to the
 * database operator (getTallyProperties().receiptFree = false — honest declaration).
 * The tally is a conventional aggregate published as a result hash to the on-chain audit
 * contract. The BallotReceipt includes the choice in v1.
 *
 * ─── v2 backing overview (for seam design) ───────────────────────────────────────
 *
 * MACI encrypted ballot + 5-of-7 threshold coordinator (ADR-006, DES-023). The BallotReceipt
 * in v2 includes only the message hash — choice cannot be recovered from the receipt.
 * Receipt shape is designed for v2 narrowing: choice and memberId are optional in the type
 * so v2's hash-only receipt is accommodated without changing callers.
 *
 * ─── IS_INSECURE_MOCK() delegation ───────────────────────────────────────────────
 *
 * Same discipline as IEligibilityVerifier: IS_INSECURE_MOCK() = true when ANY dependency
 * lies. ConventionalBallotService receives an IEligibilityVerifier as a dependency;
 * if that verifier is stub-backed, the ballot service is also marked as insecure.
 * Doc 03 §10.13.4.
 *
 * ─── Seam composition (castBallot → eligibilityRef) ─────────────────────────────
 *
 * castBallot() requires an eligibilityRef produced by IEligibilityVerifier.verifyEligibility()
 * with scope COUNTING_ACTION.BINDING_VOTE. A ballot cannot be cast without a valid
 * counting-eligibility result. This is the BINDING_VOTE call site (Doc 03 §10.13.2(b)).
 * Doc 03 §10.13.3.
 *
 * ─── Audit-contract publication path ─────────────────────────────────────────────
 *
 * computeTally() returns a resultHash field shaped for the audit-contract publication
 * path. The publication to the on-chain audit contract is NOT wired in this build session
 * (the contract subset for v1 is a later integration point). The hash is returned; the
 * caller is responsible for the chain write.
 *
 * ─────────────────────────────────────────────────────────────────────────────────
 */

// ─── Typedefs ─────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} BallotReceipt
 * Result of castBallot() or changeBallot().
 *
 * RECEIPT SHAPE DESIGNED FOR v2 NARROWING:
 * In v1, the receipt includes electionId, choice, memberId, and timestamp. In v2 (MACI),
 * the receipt includes only the message hash — choice cannot be recovered. The choice and
 * memberId fields are therefore OPTIONAL BY DESIGN so v2's hash-only receipt is
 * accommodated without changing any caller. Callers MUST NOT depend on choice or memberId
 * being present in the receipt when the v2 backing is active.
 *
 * v1: { electionId, messageHash, timestamp, choice?, memberId? }
 * v2: { electionId, messageHash, timestamp } — choice and memberId absent by MACI design.
 *
 * @property {string}  electionId   - The election this receipt is for.
 * @property {string}  messageHash  - A hash of the ballot message. Shaped for audit publication.
 *   v1: deterministic hash of canonical ballot content.
 *   v2: the MACI message hash (cannot be used to recover the choice).
 * @property {string}  timestamp    - ISO-8601 timestamp of the cast or change action.
 * @property {string}  [choice]     - The choice made (v1 only; absent in v2 for receipt-freeness).
 * @property {string}  [memberId]   - The member who voted (v1 only; absent in v2 for unlinkability).
 */

/**
 * @typedef {Object} TallyResult
 * Result of computeTally().
 *
 * @property {string}  electionId        - The election that was tallied.
 * @property {Object}  result            - Tallied counts per choice. Keys are choice strings;
 *   values are counts. v1: conventional SQL aggregate. v2: ZK tally (same shape).
 * @property {string}  resultHash        - SHA-256 hash of the canonical result JSON.
 *   Shaped for the on-chain audit-contract publication path. Publication is NOT wired here —
 *   the caller is responsible for the chain write (integration point for a later sprint).
 * @property {string}  evidence          - How the tally was produced.
 *   v1: 'conventional-sql-aggregate'. v2: 'maci-zk-tally-proof'.
 * @property {string}  publicationPath   - Status of the audit-contract publication.
 *   'PENDING-audit-contract-wiring' until the chain write is integrated.
 * @property {TallyProperties} verifiabilityProps - What verifiability properties this tally has.
 */

/**
 * @typedef {Object} TallyProperties
 * Properties declared by IBallotService.getTallyProperties().
 *
 * v1 returns { receiptFree: false, coercionOverride: false, zeroKnowledge: false, publiclyVerifiable: true }.
 * v2 returns all true.
 *
 * @property {boolean} receiptFree       - v2 only: voter cannot prove their choice even if coerced.
 * @property {boolean} coercionOverride  - v2 only: voter can override a coerced ballot silently.
 * @property {boolean} zeroKnowledge     - v2 only: tally proof is independently verifiable ZK proof.
 * @property {boolean} publiclyVerifiable - v1 and v2: tally result is publicly auditable.
 */

// ─── Utility: deterministic result hash ──────────────────────────────────────────

/**
 * Compute a SHA-256 hash of a string using the Web Crypto API.
 * Available in Node 18+ and all modern browsers.
 *
 * @param {string} str
 * @returns {Promise<string>} hex-encoded SHA-256 digest
 */
async function sha256Hex(str) {
  const data = new TextEncoder().encode(str);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

// ─── In-memory ballot store ───────────────────────────────────────────────────────

/**
 * @typedef {Object} StoredBallot
 * @property {string} memberId
 * @property {string} choice
 * @property {string} timestamp
 */

// ─── ConventionalBallotService ────────────────────────────────────────────────────

/**
 * ConventionalBallotService — v1 backing for IBallotService (DES-096 / DES-097).
 *
 * In-memory v1 stub. Implements the seam contract so the v2 MACI backing can swap in
 * with no change to any caller above the seam.
 *
 * IS_INSECURE_MOCK() delegates to the injected eligibility verifier: if the verifier is
 * stub-backed, the ballot service is also insecure. Doc 03 §10.13.4.
 */
export class ConventionalBallotService {
  /**
   * @param {object} deps
   * @param {import('./eligibility.js').ConventionalEligibilityVerifier} deps.eligibilityVerifier
   *   The IEligibilityVerifier to use for eligibility checks. castBallot() requires a
   *   valid eligibilityRef from this verifier. IS_INSECURE_MOCK() delegates here.
   */
  constructor({ eligibilityVerifier }) {
    /**
     * @type {import('./eligibility.js').ConventionalEligibilityVerifier}
     */
    this._eligibilityVerifier = eligibilityVerifier;

    /**
     * In-memory ballot store: maps `${electionId}:${memberId}` → StoredBallot.
     * Last-ballot-counts semantics: a second write overwrites the first.
     * Production v1: Postgres table with an atomic UPDATE (last-write-wins per election+member).
     *
     * @type {Map<string, StoredBallot>}
     */
    this._ballots = new Map();
  }

  /**
   * Cast a ballot for an election.
   *
   * Requires a valid eligibilityRef produced by IEligibilityVerifier.verifyEligibility()
   * with eligible = true. A ballot cannot be cast without a counting-eligibility result —
   * this is the BINDING_VOTE call site seam composition. Doc 03 §10.13.2(b), §10.13.3.
   *
   * @param {string} electionId      - The election to vote in.
   * @param {string} choice          - The member's choice.
   * @param {string} memberId        - The member casting the ballot.
   * @param {import('./eligibility.js').EligibilityResult} eligibilityRef
   *   - A result produced by IEligibilityVerifier.verifyEligibility(). Must have eligible = true.
   * @returns {Promise<BallotReceipt>}
   * @throws {Error} If eligibilityRef is absent or ineligible.
   */
  async castBallot(electionId, choice, memberId, eligibilityRef) {
    // ─── Seam composition check ───────────────────────────────────────────────────
    // castBallot MUST receive a valid eligibilityRef: a ballot cannot be cast without a
    // counting-eligibility result. Doc 03 §10.13.3.
    if (!eligibilityRef || !eligibilityRef.eligible) {
      const reason = eligibilityRef?.reason ?? 'no eligibilityRef provided';
      throw new Error(
        `castBallot requires a valid eligibilityRef from IEligibilityVerifier.verifyEligibility() ` +
        `(eligible = true). Got: ${reason}. ` +
        `A ballot cannot be cast without a counting-eligibility result. ` +
        `Doc 03 §10.13.3; ADR-024 §"Seam 2 — IBallotService".`,
      );
    }

    const timestamp = new Date().toISOString();
    const key = `${electionId}:${memberId}`;

    // Write ballot (overwriting any prior vote — last-ballot-counts semantics).
    this._ballots.set(key, { memberId, choice, timestamp });

    // Compute message hash for the receipt and audit path.
    const canonical = JSON.stringify({ electionId, memberId, choice, timestamp });
    const messageHash = await sha256Hex(canonical);

    // v1 BallotReceipt: includes choice and memberId.
    // v2 BallotReceipt: would omit these (MACI — choice cannot be recovered from receipt).
    // The fields are typed as optional to accommodate v2 without changing callers.
    return { electionId, messageHash, timestamp, choice, memberId };
  }

  /**
   * Change a previously cast ballot.
   *
   * Last-ballot-counts semantics: the new choice overwrites the old in the write path.
   * v1: atomic database UPDATE with audit log recording the change.
   * v2: MACI key-change + re-vote, indistinguishable from original ballot at tally layer
   * (FR-032, DES-023).
   *
   * @param {string} electionId  - The election to change the ballot in.
   * @param {string} newChoice   - The new choice.
   * @param {string} memberId    - The member changing their ballot.
   * @returns {Promise<BallotReceipt>}
   * @throws {Error} If no ballot exists for this member in this election.
   */
  async changeBallot(electionId, newChoice, memberId) {
    const key = `${electionId}:${memberId}`;
    if (!this._ballots.has(key)) {
      throw new Error(
        `changeBallot: no ballot found for member "${memberId}" in election "${electionId}". ` +
        `Cast a ballot first with castBallot().`,
      );
    }

    const timestamp = new Date().toISOString();

    // Atomic overwrite — last-ballot-counts.
    this._ballots.set(key, { memberId, choice: newChoice, timestamp });

    const canonical = JSON.stringify({ electionId, memberId, choice: newChoice, timestamp, changed: true });
    const messageHash = await sha256Hex(canonical);

    return { electionId, messageHash, timestamp, choice: newChoice, memberId };
  }

  /**
   * Compute and return the tally for an election.
   *
   * v1: SQL COUNT aggregate equivalent — counts ballots per choice from the in-memory store.
   * Returns a resultHash shaped for the audit-contract publication path.
   *
   * Audit-contract publication is NOT wired in this build session — that is a later
   * integration point (the v1 audit-record contract subset, DES-097). The resultHash is
   * returned and the caller is responsible for the chain write. The publicationPath field
   * signals this intent to callers.
   *
   * @param {string} electionId
   * @returns {Promise<TallyResult>}
   */
  async computeTally(electionId) {
    /** @type {Record<string, number>} */
    const result = {};

    for (const [key, ballot] of this._ballots) {
      if (!key.startsWith(`${electionId}:`)) continue;
      result[ballot.choice] = (result[ballot.choice] ?? 0) + 1;
    }

    const canonical = JSON.stringify({ electionId, result });
    const resultHash = await sha256Hex(canonical);

    return {
      electionId,
      result,
      resultHash,
      evidence: 'conventional-sql-aggregate',
      // ─── Audit-contract publication integration point ─────────────────────────
      // The v1 audit-record contract subset (petition milestones, tally result hash
      // registry, manifesto hash log, party activation events) is NOT wired here.
      // When the contract integration is built, this field will change from the
      // pending sentinel to the on-chain transaction reference.
      publicationPath: 'PENDING-audit-contract-wiring',
      verifiabilityProps: this.getTallyProperties(),
    };
  }

  /**
   * Declares which tally properties this backing provides.
   *
   * v1 returns { receiptFree: false, coercionOverride: false, zeroKnowledge: false,
   * publiclyVerifiable: true } — an honest description. The application MUST read and
   * surface these properties (DES-098; FR-131). Doc 03 §10.13.3; ADR-024.
   *
   * v2 returns all true.
   *
   * @returns {TallyProperties}
   */
  getTallyProperties() {
    return {
      receiptFree: false,       // v1: ballot direction visible to DB operator; receipt includes choice
      coercionOverride: false,  // v1: no key-change override mechanism (MACI is v2)
      zeroKnowledge: false,     // v1: conventional aggregate; no ZK tally proof
      publiclyVerifiable: true, // v1 and v2: tally result published as hash to audit contract
    };
  }

  /**
   * IS_INSECURE_MOCK() — CI promotion gate delegation.
   *
   * Delegates to the injected eligibility verifier. If the verifier is stub-backed
   * (IS_INSECURE_MOCK() = true), the ballot service is also considered insecure and
   * cannot be promoted past devnet. Doc 03 §10.13.4.
   *
   * @returns {boolean}
   */
  IS_INSECURE_MOCK() {
    return this._eligibilityVerifier.IS_INSECURE_MOCK();
  }
}
