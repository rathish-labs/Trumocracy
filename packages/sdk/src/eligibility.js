/**
 * IEligibilityVerifier seam — DES-095, ADR-024, ADR-025.
 *
 * A stable design-level interface decoupling the application layer from the
 * identity/personhood proof mechanism. The application calls this interface; the backing
 * is swapped between v1 (conventional) and v2 (ZK) without any change above the seam
 * boundary. Doc 03 §10.13.2.
 *
 * ─── Counting-tier rule (NORMATIVE — 2026-08-24) ─────────────────────────────────
 *
 * verifyEligibility() MUST be invoked ONLY at the three FR-123 COUNTING-action call sites:
 *   (a) contributing to a party's official strength number;
 *   (b) admission to a binding ballot (vote eligibility check);
 *   (c) candidacy nomination.
 *
 * verifyEligibility() MUST NOT be called as a precondition of account creation or
 * party-join — those paths require phone verification alone (FR-020, FR-122).
 *
 * This constraint is enforced at runtime by the COUNTING_ACTION enum and the
 * NotACountingAction error: any scope value that is not one of the three COUNTING_ACTION
 * values causes verifyEligibility() to throw, making "MUST NOT be callable at account
 * creation or party-join" a runtime contract rather than a comment.
 *
 * Source: DECISIONS-2026-08-24-V1-ID-GATES-COUNTING.md; Doc 03 §10.13.2 normative
 * call-site placement; ADR-024 [AMENDMENT 2026-08-24].
 *
 * ─── IS_INSECURE_MOCK() derivation rule (§10.13.4) ───────────────────────────────
 *
 * IS_INSECURE_MOCK() = true means the implementation LIES about verifying (accepts
 * anything without checking). The CI promotion gate uses this to block stub-backed
 * deployments past devnet.
 *
 * STUB IMPLEMENTATIONS (this file's StubPhoneVerifier and StubIdDocumentChecker) lie —
 * they accept anything — so they return IS_INSECURE_MOCK() = true.
 *
 * ConventionalEligibilityVerifier.IS_INSECURE_MOCK() DELEGATES to its dependencies:
 * it returns true whenever ANY injected dependency returns IS_INSECURE_MOCK() = true.
 * This means a stub-backed ConventionalEligibilityVerifier is blocked from promotion.
 * When real vendor integrations replace the stubs, the composed verifier returns false
 * with no interface change — the derivation rule requires no code change at the seam.
 *
 * The PRODUCTION v1 conventional backing IS NOT A MOCK: it performs honest checking by
 * conventional means (database lookup, session validation, scope nullifier). It returns
 * IS_INSECURE_MOCK() = false because it is a fully functioning conventional implementation,
 * honest about what it is and what it is not. Doc 03 §10.13.4.
 *
 * ─── Vendor-boundary seams ───────────────────────────────────────────────────────
 *
 * IPhoneVerifier and IIdDocumentChecker are vendor-boundary seams (DES-097/DES-100).
 * They mark the integration boundary only; NO real vendor integration is implemented here.
 * Vendors are un-procured and gated on CON-015 (legal opinion required ≥ 8 weeks before
 * Gate 2; no enrolment sprint begins without CON-015 cleared).
 *
 * ─────────────────────────────────────────────────────────────────────────────────
 */

// ─── Counting-action enum ─────────────────────────────────────────────────────────

/**
 * The three FR-123 COUNTING actions.
 *
 * Only scopes built from these values MAY be passed to verifyEligibility(). Any other
 * scope — explicitly including SCOPE_LABEL.JOIN, SCOPE_LABEL.LEAVE, and anything
 * resembling account-creation — throws NotACountingAction.
 *
 * ADR-024 [AMENDMENT 2026-08-24]; Doc 03 §10.13.2; FR-123.
 *
 * @type {Readonly<{STRENGTH_CONTRIBUTION: 'STRENGTH_CONTRIBUTION', BINDING_VOTE: 'BINDING_VOTE', CANDIDACY: 'CANDIDACY'}>}
 */
export const COUNTING_ACTION = Object.freeze({
  /**
   * Contributing to a party's official strength number.
   * Call site (a) — Doc 03 §10.13.2(a).
   */
  STRENGTH_CONTRIBUTION: 'STRENGTH_CONTRIBUTION',
  /**
   * Admission to a binding ballot (vote eligibility check).
   * Call site (b) — Doc 03 §10.13.2(b).
   */
  BINDING_VOTE: 'BINDING_VOTE',
  /**
   * Candidacy nomination.
   * Call site (c) — Doc 03 §10.13.2(c).
   */
  CANDIDACY: 'CANDIDACY',
});

/** @type {Set<string>} */
const COUNTING_ACTION_VALUES = new Set(Object.values(COUNTING_ACTION));

// ─── NotACountingAction error ─────────────────────────────────────────────────────

/**
 * Thrown when verifyEligibility() is called with a scope that is not a COUNTING_ACTION.
 *
 * Message cites FR-020/FR-122/FR-123 to make the design invariant self-documenting:
 * "verification gates counting, never joining."
 *
 * Traces: FR-020, FR-122, FR-123; Doc 03 §10.13.2; ADR-024 [AMENDMENT 2026-08-24].
 */
export class NotACountingAction extends Error {
  /**
   * @param {string} scope - The invalid scope that was passed.
   */
  constructor(scope) {
    super(
      `verifyEligibility() may only be called at the three FR-123 COUNTING-action call sites ` +
      `(STRENGTH_CONTRIBUTION, BINDING_VOTE, CANDIDACY). ` +
      `Got: "${String(scope)}". ` +
      `This is a design invariant: verification gates COUNTING, never joining. ` +
      `Account creation and party-join use FR-020 / FR-122 (phone verification only) — ` +
      `verifyEligibility is NOT called on those paths. ` +
      `(FR-020/FR-122/FR-123; Doc 03 §10.13.2; ADR-024 [AMENDMENT 2026-08-24].)`,
    );
    this.name = 'NotACountingAction';
    /** @type {string} */
    this.scope = scope;
  }
}

// ─── Typedefs ─────────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} EligibilityProperties
 * Properties declared by a verifier backing to describe what it guarantees.
 *
 * v1 conventional backing returns all false (declared honestly; DES-095; Doc 03 §10.13.2).
 * v2 ZK backing returns all true.
 *
 * @property {boolean} onePersonOneVote  - True only if the backing provides a genuine
 *   one-person-one-vote guarantee derived from a unique personhood proof.
 *   v1: false — phone + government-ID check is a spam speed-bump, not a unique-personhood
 *   proof; multiple legitimate IDs still allow limited multi-accounting (FR-132; ADR-025 §(a)).
 * @property {boolean} subpoenaResistant - True only if the platform is technically unable to
 *   comply with a subpoena for voter identity (FR-128; v2 ZK property only).
 * @property {boolean} unlinkable        - True only if the platform cannot determine who voted.
 * @property {boolean} anonymityFloor    - True only if an anonymity floor (k ≥ 1000) is enforced.
 */

/**
 * @typedef {Object} EligibilityResult
 * Result shape of verifyEligibility(). Designed so the v2 ZK backing can return the same
 * shape without changing any caller.
 *
 * @property {boolean} eligible   - True if the member is eligible for the given COUNTING action.
 * @property {string}  memberId   - The member ID that was checked.
 * @property {string}  scope      - The COUNTING_ACTION scope that was checked.
 * @property {string}  [reason]   - Human-readable reason when eligible is false.
 */

/**
 * @typedef {Object} IdDocumentResult
 * DES-100 allowlist — the ONLY fields the platform may retain after a government-ID
 * document check. All other fields (document image, name, date_of_birth, document_number,
 * raw subject_id, biometric templates, selfie frames, expiry_date, verification_id) are
 * discarded and MUST NEVER reach any persistence layer, log, or analytics pipeline.
 *
 * ADR-025 §(e) Q-1; Doc 03 §10.13.9.
 *
 * @property {boolean} id_verified_flag  - Gate: true iff age + region + document authentic.
 * @property {boolean} age_verified      - Confirms participant is ≥ 18 at the time of check.
 * @property {string}  issuing_region    - ISO 3166-1 alpha-2 code of the issuing country.
 * @property {string}  subject_id_hash   - HMAC-SHA-256(provider_subject_id, pepper_id).
 *   Same-document deduplication: re-verification of the same person yields the same hash.
 *   Legal classification of this hash as personal data is routed to CON-015.
 * @property {string}  verified_at       - ISO-8601 timestamp of the verification.
 */

/**
 * @typedef {Object} IPhoneVerifier
 * Vendor-boundary seam for SMS phone verification (DES-097/DES-100; ADR-025).
 *
 * DESIGN (not yet implemented — vendors un-procured, gated on CON-015):
 *   verifyPhone(phoneE164) → { phone_hash } where phone_hash is
 *   HMAC-SHA-256(E.164-normalised(phone), pepper_phone) and pepper_phone is a 32-byte
 *   randomly generated KMS/HSM-held key (ADR-025 §(e) Q-2). The hash is used for
 *   one-account-per-number enforcement; the raw phone number is never retained.
 *
 * @property {function(string): Promise<{phone_hash: string}>} verifyPhone
 *   Verifies a phone number via SMS OTP and returns the HMAC hash (never the plaintext).
 * @property {function(): boolean} IS_INSECURE_MOCK
 *   Returns true if this implementation lies about verifying (stub).
 *   Returns false for a genuine vendor integration that performs real SMS verification.
 */

/**
 * @typedef {Object} IIdDocumentChecker
 * Vendor-boundary seam for government-ID document verification (DES-100; ADR-025 §(e)).
 *
 * DESIGN (not yet implemented — vendors un-procured, gated on CON-015):
 *   The vendor receives a document image (front/back) and optionally a selfie for face match.
 *   The platform retains ONLY the DES-100 allowlist fields (IdDocumentResult).
 *   Everything else — document image, biometric templates, selfie frames, name, date_of_birth,
 *   document_number, expiry_date, raw subject_id — is discarded.
 *
 *   Vendor contract MUST include: verify-and-discard (no retention of images or biometrics),
 *   no-resale, no-profiling, cross-border transfer compliance per CON-015. Vendor failure
 *   mode is fail-closed: if unavailable, enrolment fails (not permit-through). ADR-025 §(e).
 *
 * @property {function(object): Promise<IdDocumentResult>} checkDocument
 *   Checks a government-ID document and returns ONLY the allowlist fields.
 * @property {function(): boolean} IS_INSECURE_MOCK
 *   Returns true if this implementation lies about checking (stub).
 *   Returns false for a genuine vendor integration that performs real document verification.
 */

// ─── Stub implementations ─────────────────────────────────────────────────────────

/**
 * StubPhoneVerifier — vendor-boundary stub for IPhoneVerifier.
 *
 * MARKS THE BOUNDARY ONLY. Does NOT implement real SMS verification. Does NOT compute
 * a real HMAC-SHA-256/KMS-pepper hash (that requires a KMS-held key — an operational
 * infrastructure commitment outside this build session scope). Returns a deterministic
 * placeholder hash for test fixture use.
 *
 * IS_INSECURE_MOCK() returns true because this stub lies about verifying: it accepts
 * any phone number without real SMS delivery or real HMAC computation. The CI promotion
 * gate blocks any deployment where a composed verifier's IS_INSECURE_MOCK() returns true.
 * Doc 03 §10.13.4.
 */
export class StubPhoneVerifier {
  /**
   * Stub: accepts any phone number without real SMS delivery.
   * Returns a deterministic placeholder hash for test use only.
   *
   * @param {string} phoneE164
   * @returns {Promise<{phone_hash: string}>}
   */
  async verifyPhone(phoneE164) {
    // STUB — does not compute a real HMAC-SHA-256/KMS-pepper hash.
    // Real implementation: HMAC-SHA-256(E.164-normalised(phone), pepper_phone) via KMS API.
    // The KMS key must never be loaded into application memory in production (ADR-025 §(e) Q-2).
    return { phone_hash: `stub-phone-hash:${phoneE164}` };
  }

  /**
   * Returns true: this stub lies about verifying (CI promotion gate blocks it past devnet).
   * Doc 03 §10.13.4.
   *
   * @returns {true}
   */
  IS_INSECURE_MOCK() {
    return /** @type {true} */ (true);
  }
}

/**
 * StubIdDocumentChecker — vendor-boundary stub for IIdDocumentChecker.
 *
 * MARKS THE BOUNDARY ONLY. Does NOT implement real government-ID document verification.
 * Returns a fixed IdDocumentResult containing ONLY the DES-100 allowlist fields.
 * The stub deliberately omits all denylist fields (document image, name, date_of_birth,
 * document_number, raw subject_id, biometric templates) — callers must only ever see
 * the allowlist.
 *
 * IS_INSECURE_MOCK() returns true because this stub lies about checking: it approves
 * any document without real verification. Doc 03 §10.13.4.
 */
export class StubIdDocumentChecker {
  /**
   * Stub: accepts any document object without real verification.
   * Returns a fixed IdDocumentResult with ONLY the DES-100 allowlist fields.
   *
   * @param {object} _documentPayload - Ignored by the stub (real vendor would process it).
   * @returns {Promise<IdDocumentResult>}
   */
  async checkDocument(_documentPayload) {
    // STUB — does not perform real document verification.
    // Real implementation: send document to vendor; vendor processes and returns result.
    // Vendor contract MUST include verify-and-discard terms (ADR-025 §(e)).
    //
    // Allowlist (DES-100) — ONLY these six fields may be retained:
    return {
      id_verified_flag: true,
      age_verified: true,
      issuing_region: 'IN',
      // STUB subject_id_hash: real implementation computes HMAC-SHA-256(provider_subject_id, pepper_id)
      // via KMS API. Two peppers (pepper_phone, pepper_id) maintained separately — ADR-025 §(e) Q-2.
      subject_id_hash: 'stub-subject-id-hash',
      verified_at: new Date().toISOString(),
    };
    // ─── Denylist — MUST NEVER be present in any return value or stored field ────
    // document_image, biometric_template, selfie_frame, name, date_of_birth,
    // document_number, expiry_date, raw_subject_id, verification_id (ephemeral session handle)
    // ─────────────────────────────────────────────────────────────────────────────
  }

  /**
   * Returns true: this stub lies about checking (CI promotion gate blocks it past devnet).
   * Doc 03 §10.13.4.
   *
   * @returns {true}
   */
  IS_INSECURE_MOCK() {
    return /** @type {true} */ (true);
  }
}

// ─── ConventionalEligibilityVerifier ─────────────────────────────────────────────

/**
 * ConventionalEligibilityVerifier — v1 backing for IEligibilityVerifier (DES-095 / DES-097).
 *
 * The v1 conventional backing for the IEligibilityVerifier seam. Checks COUNTING-tier
 * eligibility using the DES-100 allowlist result (id_verified_flag from the credential
 * store) and a conventional in-memory nullifier record. Does NOT use ZK proofs; does NOT
 * call ICredentialAdapter or PersonhoodRegistry — those are v2 paths.
 *
 * HONEST ABOUT WHAT IT IS: getProperties() returns all false, accurately describing what
 * a conventional backing provides. IS_INSECURE_MOCK() DELEGATES to injected dependencies:
 * returns true when ANY dependency lies about verifying. The production v1 conventional
 * backing (with real vendor integrations) returns IS_INSECURE_MOCK() = false — it performs
 * honest conventional checking. Doc 03 §10.13.2; ADR-024.
 *
 * Call-site placement (normative — identical in v1 and v2):
 *   verifyEligibility() is invoked at the three FR-123 COUNTING-action call sites only.
 *   Account creation and party-join do NOT call verifyEligibility(). Doc 03 §10.13.2.
 */
export class ConventionalEligibilityVerifier {
  /**
   * @param {object} deps
   * @param {IPhoneVerifier} deps.phoneVerifier - Phone verification vendor seam.
   * @param {IIdDocumentChecker} deps.idDocumentChecker - ID document checker vendor seam.
   * @param {Map<string, IdDocumentResult>} deps.credentialStore - In-memory credential store.
   *   Maps memberId → IdDocumentResult (allowlist fields only).
   *   In production: a restricted-class database store (never on governance-path stores,
   *   never on-chain, never in public records — NFR-010, CON-002, CON-008).
   */
  constructor({ phoneVerifier, idDocumentChecker, credentialStore }) {
    /** @type {IPhoneVerifier} */
    this._phoneVerifier = phoneVerifier;
    /** @type {IIdDocumentChecker} */
    this._idDocumentChecker = idDocumentChecker;
    /**
     * Credential store: maps memberId → IdDocumentResult (DES-100 allowlist only).
     * @type {Map<string, IdDocumentResult>}
     */
    this._credentialStore = credentialStore;
    /**
     * In-memory nullifier record: tracks which (memberId, scope) pairs have been exercised.
     * Maps `${memberId}:${scope}` → true (first-write-wins; atomic per call).
     *
     * Production v1: conventional database nullifier record written atomically on first action.
     * v2: on-chain nullifierUsed[keccak(scope, N)] (DES-001).
     *
     * @type {Map<string, boolean>}
     */
    this._nullifiers = new Map();
  }

  /**
   * Checks COUNTING-tier eligibility for a member at one of the three FR-123 call sites.
   *
   * Runtime contract: scope MUST be one of the three COUNTING_ACTION values. Any other
   * scope throws NotACountingAction (FR-020/FR-122/FR-123 design invariant).
   *
   * v1 backing behaviour:
   *   Queries id_verified_flag from the credential store (populated when the member first
   *   completed the government-ID document check). Confirms the flag is set. Does NOT verify
   *   a ZK proof. Does NOT claim one-person-one-vote or unique personhood.
   *
   * Shared invariant (v1 and v2): the method MUST NOT gate account creation or party-join.
   * The scope parameter is always a COUNTING_ACTION — never a join/leave/account-creation scope.
   * Doc 03 §10.13.2; ADR-024 [AMENDMENT 2026-08-24].
   *
   * @param {string} memberId  - The member to check.
   * @param {string} regionId  - The governance region (ISO 3166-1 or jurisdiction ID).
   * @param {string} scope     - MUST be one of COUNTING_ACTION values. Throws NotACountingAction
   *   for any other value (including SCOPE_LABEL.JOIN, SCOPE_LABEL.LEAVE, 'account-creation').
   * @param {unknown} [proof]  - Ignored in v1 (no ZK proof). v2 backing verifies a ZK proof here.
   * @returns {EligibilityResult}
   */
  verifyEligibility(memberId, regionId, scope, proof) {
    // ─── Counting-tier runtime gate (normative) ───────────────────────────────────
    if (!COUNTING_ACTION_VALUES.has(scope)) {
      throw new NotACountingAction(scope);
    }

    // ─── Credential check (DES-100 allowlist) ────────────────────────────────────
    const credential = this._credentialStore.get(memberId);
    if (!credential || !credential.id_verified_flag) {
      return {
        eligible: false,
        memberId,
        scope,
        reason: 'id_verified_flag not set — member must complete government-ID document check (DES-100) before taking a COUNTING action',
      };
    }

    // ─── Session check (stub: trust the caller; production: verify live session) ──
    // v1 backing: "A member is eligible (to take a specific FR-123 COUNTING action) if,
    // at the moment the action is requested, they have a live session" (ADR-024 §[AMENDMENT]).
    // The stub trusts the caller; the production v1 backing verifies session auth.

    return { eligible: true, memberId, scope };
  }

  /**
   * Checks and registers whether a member has already exercised a given scope.
   *
   * First-write-wins atomic check-and-register: the first call for a given (memberId, scope)
   * pair returns true and registers the nullifier; subsequent calls return false.
   *
   * v1: in-memory Map (replaced by a database nullifier record with an atomic transaction in
   * production to prevent concurrent double-voting from the same account).
   * v2: on-chain nullifierUsed[keccak(scope, N)] (DES-001).
   *
   * @param {string} memberId
   * @param {string} scope - Should be a COUNTING_ACTION value for consistent semantics,
   *   though this method does not enforce the counting-tier gate itself.
   * @returns {boolean} true if this is the first use (unique), false if already used.
   */
  isUniqueInScope(memberId, scope) {
    const key = `${memberId}:${scope}`;
    if (this._nullifiers.has(key)) {
      return false;
    }
    // First write — atomic in this in-memory implementation.
    this._nullifiers.set(key, true);
    return true;
  }

  /**
   * Declares which properties this backing provides.
   *
   * v1 returns all false — an honest description of what a conventional backing provides.
   * The application MUST read and surface these properties (DES-098 honesty notice; FR-131).
   * v1 MUST NOT claim one-person-one-vote or unique personhood. ADR-025 §(a); FR-132.
   *
   * v2 returns all true.
   *
   * @returns {EligibilityProperties}
   */
  getProperties() {
    return {
      onePersonOneVote: false,    // v1: phone + ID check is a speed-bump, not unique-personhood proof
      subpoenaResistant: false,   // v1: conventional DB is technically able to disclose (FR-128 deferred)
      unlinkable: false,          // v1: conventional DB links account to membership
      anonymityFloor: false,      // v1: no k≥1000 anonymity floor (DES-008 is v2)
    };
  }

  /**
   * IS_INSECURE_MOCK() — CI promotion gate delegation rule.
   *
   * Returns true whenever ANY injected dependency returns IS_INSECURE_MOCK() = true.
   * This means:
   *   - Stub-backed ConventionalEligibilityVerifier → true → blocked by CI gate past devnet.
   *   - Real-vendor-backed ConventionalEligibilityVerifier → false → permitted (honest backing).
   *
   * The derivation: the composed verifier is only as trustworthy as its least trustworthy
   * dependency. If a stub that lies about verifying is injected, the composed verifier is
   * also lying — the CI gate must see it as such.
   *
   * Doc 03 §10.13.4; ADR-024 §"Composition check".
   *
   * @returns {boolean}
   */
  IS_INSECURE_MOCK() {
    return this._phoneVerifier.IS_INSECURE_MOCK() || this._idDocumentChecker.IS_INSECURE_MOCK();
  }
}
