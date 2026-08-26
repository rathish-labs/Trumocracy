/**
 * Party-creation service — IPartyStore seam pattern (DES-097 predecessor).
 *
 * Mirrors the IEligibilityVerifier / IBallotService seam pattern (DES-095/DES-096,
 * packages/sdk/src/eligibility.js) so the application layer is decoupled from the
 * persistence backing. The Postgres/API backing is later wiring per DES-097.
 *
 * ─── IS_INSECURE_MOCK() discipline (§2.1, §10.13.4) ─────────────────────────
 *
 * InMemoryPartyStore.IS_INSECURE_MOCK() returns true: it is non-production
 * in-memory persistence — honest about being a development/demo store.
 * PartyCreationService.IS_INSECURE_MOCK() delegates to its store.
 * The CI deployment-safety gate blocks any deployment where IS_INSECURE_MOCK() = true.
 * A real Postgres-backed store returns IS_INSECURE_MOCK() = false.
 *
 * ─── Clock injection (determinism rule, §2.6) ────────────────────────────────
 *
 * PartyCreationService accepts a `clock` function that returns Unix seconds.
 * No call to `Date.now()` exists in `InMemoryPartyStore` methods or service
 * business logic; the constructor accepts an optional clock and falls back to
 * `() => Math.floor(Date.now()/1000)` only when no clock is injected — tests
 * must inject.
 *
 * ─── Party-join MUST NOT call verifyEligibility (FR-020, §10.13.2) ──────────
 *
 * joinParty() is a non-counted action. verifyEligibility() is not called.
 * A test in the test file asserts this by spy/mock on any injected verifier.
 * The service constructor does NOT accept an eligibility verifier — by design.
 *
 * ─── FR-130 — provisional membership cap ─────────────────────────────────────
 *
 * A provisional party (platform-activated, legal registration not yet verified)
 * is capped at PROVISIONAL_MEMBER_CAP = 100 members. The cap lifts automatically,
 * by code only, when recordLegalRegistration() records verified registration.
 * No operator path, no bypass parameter, no flag. (D2 ruling 2026-08-25.)
 *
 * ─── FR-013 — cooldown and substantially-identical charter ───────────────────
 *
 * Same drafter + same jurisdiction + same charterFingerprint within
 * REPETITION_COOLDOWN_SECONDS of the prior petition's expiry → refuse.
 * "Substantially identical" = exact charterFingerprint match (D4 ruling).
 *
 * ─── Collision detection (FR-010, DES-073) ────────────────────────────────────
 *
 * normalizeCollisionKey() normalises name and emblem before comparing against
 * existing petitions and active parties in the same jurisdiction.
 *
 * ─── Immutable archive (FR-013) ───────────────────────────────────────────────
 *
 * Expired petitions move to an immutable archive. The store enforces this:
 * any mutation attempt on an archived petition row throws.
 */

import {
  validateDraft,
  charterFingerprint,
  normalizeCollisionKey,
  petitionThreshold,
  PROVISIONAL_MEMBER_CAP,
  REPETITION_COOLDOWN_SECONDS,
  PETITION,
  PARTY_STATE,
} from '@trumocracy/protocol';

// ─── Typedefs ──────────────────────────────────────────────────────────────────

/**
 * @typedef {Object} IPartyStore
 * Injectable persistence seam for the party-creation service.
 * Production backing: Postgres + API (DES-097). Dev/demo backing: InMemoryPartyStore.
 *
 * @property {function(): boolean} IS_INSECURE_MOCK
 *   Returns true if this store is not production persistence.
 *   InMemoryPartyStore: true. Postgres-backed store: false.
 *
 * @property {function(string): object|null} findDraftById
 * @property {function(string): object|null} findPetitionById
 * @property {function(string): object|null} findPartyById
 * @property {function(string): object[]} findLivePetitionsByJurisdiction
 *   Returns petitions in PETITION state for the given jurisdiction.
 * @property {function(string): object[]} findActivePartiesByJurisdiction
 *   Returns ACTIVE parties in the given jurisdiction.
 * @property {function(string, string): object[]} findExpiredPetitionsByDrafter
 *   (drafterPseudonym, jurisdiction) → archived petitions for cooldown check.
 * @property {function(object): string} saveDraft  — returns draftId
 * @property {function(string, object): object} updateDraft  — returns updated draft
 * @property {function(object): string} savePetition  — returns petitionId
 * @property {function(string, object): object} updatePetition  — throws if archived
 * @property {function(string, number): object} archivePetition  — (id, now) archives petition using the caller-supplied timestamp; immutable after this; throws on later mutation
 * @property {function(object): string} saveParty  — returns partyId
 * @property {function(string, object): object} updateParty  — returns updated party
 * @property {function(string, string): void} addMember  — (partyId, memberPseudonym)
 * @property {function(string): string[]} getMemberPseudonyms  — returns list of member pseudonyms
 */

/**
 * @typedef {Object} PartyCreationError
 * Error shape for service-level refusals.
 *
 * @property {string} code    — machine-readable code (e.g. 'NAME_COLLISION')
 * @property {string} field   — field path (e.g. 'name') or 'draft' for service-level refusals
 * @property {string} message — human-readable explanation
 */

// ─── InMemoryPartyStore ────────────────────────────────────────────────────────

/**
 * InMemoryPartyStore — IPartyStore backed by in-memory Maps.
 *
 * IS_INSECURE_MOCK() returns true: this is NOT production persistence.
 * It is blocked past devnet by the IS_INSECURE_MOCK CI promotion gate.
 * The Postgres-backed store (DES-097 later wiring) returns IS_INSECURE_MOCK() = false.
 *
 * Archived petitions are immutable: any updatePetition() call after archivePetition()
 * throws an error with code 'ARCHIVED_IMMUTABLE'. This enforces the FR-013 invariant
 * that expired petitions cannot be mutated.
 */
export class InMemoryPartyStore {
  constructor() {
    /** @type {Map<string, object>} */
    this._drafts = new Map();
    /** @type {Map<string, object>} draft id → petition row */
    this._petitions = new Map();
    /** @type {Set<string>} petition ids that are immutably archived */
    this._archivedPetitionIds = new Set();
    /** @type {Map<string, object>} */
    this._parties = new Map();
    /** @type {Map<string, Set<string>>} partyId → Set of member pseudonyms */
    this._members = new Map();
    this._nextId = 1;
  }

  /** @returns {true} — this store is NOT production persistence. */
  IS_INSECURE_MOCK() {
    return /** @type {true} */ (true);
  }

  _newId() {
    return String(this._nextId++);
  }

  /**
   * @param {object} draft
   * @returns {string} draftId
   */
  saveDraft(draft) {
    const id = draft.id ?? this._newId();
    this._drafts.set(id, { ...draft, id });
    return id;
  }

  /**
   * @param {string} id
   * @returns {object|null}
   */
  findDraftById(id) {
    return this._drafts.get(id) ?? null;
  }

  /**
   * @param {string} id
   * @param {object} data
   * @returns {object}
   */
  updateDraft(id, data) {
    const existing = this._drafts.get(id);
    if (!existing) throw new Error(`draft ${id} not found`);
    const updated = { ...existing, ...data };
    this._drafts.set(id, updated);
    return updated;
  }

  /**
   * @param {object} petition
   * @returns {string} petitionId
   */
  savePetition(petition) {
    const id = petition.id ?? this._newId();
    this._petitions.set(id, { ...petition, id });
    return id;
  }

  /**
   * @param {string} id
   * @returns {object|null}
   */
  findPetitionById(id) {
    return this._petitions.get(id) ?? null;
  }

  /**
   * @param {string} id
   * @param {object} data
   * @returns {object}
   * @throws if the petition has been archived (immutable).
   */
  updatePetition(id, data) {
    if (this._archivedPetitionIds.has(id)) {
      const err = new Error(`petition ${id} is archived and immutable (FR-013)`);
      err.code = 'ARCHIVED_IMMUTABLE';
      throw err;
    }
    const existing = this._petitions.get(id);
    if (!existing) throw new Error(`petition ${id} not found`);
    const updated = { ...existing, ...data };
    this._petitions.set(id, updated);
    return updated;
  }

  /**
   * Move a petition to the immutable archive.
   * Any subsequent updatePetition() for this id throws ARCHIVED_IMMUTABLE.
   *
   * The caller MUST supply the current time as `now` (Unix seconds) so that
   * archivedAt is deterministic and testable. No Date.now() inside this method
   * (§2.6 determinism rule).
   *
   * @param {string} id
   * @param {number} now  — current Unix seconds, supplied by the service clock.
   * @returns {object}
   */
  archivePetition(id, now) {
    if (this._archivedPetitionIds.has(id)) return this._petitions.get(id);
    const existing = this._petitions.get(id);
    if (!existing) throw new Error(`petition ${id} not found`);
    const archived = { ...existing, state: PARTY_STATE.EXPIRED, archivedAt: now };
    this._petitions.set(id, archived);
    this._archivedPetitionIds.add(id);
    return archived;
  }

  /**
   * @param {string} jurisdiction
   * @returns {object[]}
   */
  findLivePetitionsByJurisdiction(jurisdiction) {
    const result = [];
    for (const petition of this._petitions.values()) {
      if (petition.jurisdiction === jurisdiction && petition.state === PARTY_STATE.PETITION) {
        result.push(petition);
      }
    }
    return result;
  }

  /**
   * @param {string} drafterPseudonym
   * @param {string} jurisdiction
   * @returns {object[]}
   */
  findExpiredPetitionsByDrafter(drafterPseudonym, jurisdiction) {
    const result = [];
    for (const petition of this._petitions.values()) {
      if (
        petition.drafterPseudonym === drafterPseudonym &&
        petition.jurisdiction === jurisdiction &&
        petition.state === PARTY_STATE.EXPIRED
      ) {
        result.push(petition);
      }
    }
    return result;
  }

  /**
   * @param {object} party
   * @returns {string} partyId
   */
  saveParty(party) {
    const id = party.id ?? this._newId();
    this._parties.set(id, { ...party, id });
    this._members.set(id, new Set());
    return id;
  }

  /**
   * @param {string} id
   * @returns {object|null}
   */
  findPartyById(id) {
    return this._parties.get(id) ?? null;
  }

  /**
   * @param {string} jurisdiction
   * @returns {object[]}
   */
  findActivePartiesByJurisdiction(jurisdiction) {
    const result = [];
    for (const party of this._parties.values()) {
      if (party.jurisdiction === jurisdiction && party.state === PARTY_STATE.ACTIVE) {
        result.push(party);
      }
    }
    return result;
  }

  /**
   * @param {string} id
   * @param {object} data
   * @returns {object}
   */
  updateParty(id, data) {
    const existing = this._parties.get(id);
    if (!existing) throw new Error(`party ${id} not found`);
    const updated = { ...existing, ...data };
    this._parties.set(id, updated);
    return updated;
  }

  /**
   * @param {string} partyId
   * @param {string} memberPseudonym
   */
  addMember(partyId, memberPseudonym) {
    const members = this._members.get(partyId);
    if (!members) throw new Error(`party ${partyId} not found`);
    members.add(memberPseudonym);
  }

  /**
   * @param {string} partyId
   * @returns {string[]}
   */
  getMemberPseudonyms(partyId) {
    return Array.from(this._members.get(partyId) ?? []);
  }
}

// ─── PartyCreationService ──────────────────────────────────────────────────────

/**
 * PartyCreationService — demoable party-creation flow (FR-010..013, FR-018,
 * FR-020, FR-130).
 *
 * Accepts an IPartyStore and a clock function. No Date.now() in logic.
 *
 * IS_INSECURE_MOCK() delegates to the store: the service is only as trustworthy
 * as its persistence backing.
 *
 * @param {IPartyStore} store
 * @param {function(): number} [clock]  — returns current Unix seconds; defaults to
 *   () => Math.floor(Date.now() / 1000) but MUST be injected in tests.
 */
export class PartyCreationService {
  /**
   * @param {IPartyStore} store
   * @param {function(): number} [clock]
   */
  constructor(store, clock = () => Math.floor(Date.now() / 1000)) {
    this._store = store;
    this._clock = clock;
  }

  /**
   * IS_INSECURE_MOCK() — delegates to the store.
   *
   * Returns true whenever the injected store is not production persistence.
   * The CI gate sees a stub-backed service as insecure.
   *
   * @returns {boolean}
   */
  IS_INSECURE_MOCK() {
    return this._store.IS_INSECURE_MOCK();
  }

  /**
   * Create a party draft (FR-010).
   *
   * Validates the draft via validateDraft() (FR-011, FR-077). Performs
   * collision detection for name AND emblem against existing petitions and
   * active parties in the same jurisdiction (normalizeCollisionKey; DES-073).
   * Checks the FR-013 cooldown for substantially-identical charters. Stores
   * the drafter only as a pseudonym.
   *
   * @param {object} draft — { name, jurisdiction, pillars, emblem, charter }
   * @param {string} drafterPseudonym — stored as-is; never the real identity.
   * @returns {{ draftId: string }} on success.
   * @throws {Error} with .errors array on validation or collision failure.
   */
  createDraft(draft, drafterPseudonym) {
    // 1. Protocol-level validation (FR-011, FR-077).
    const validation = validateDraft(draft);
    if (!validation.valid) {
      const err = new Error('draft failed validation');
      err.code = 'VALIDATION_FAILED';
      err.errors = validation.errors;
      throw err;
    }

    const jurisdiction = draft.jurisdiction;

    // 2. Collision check: name + emblem vs live petitions + active parties in
    //    the same jurisdiction (FR-010, DES-073).
    const normName = normalizeCollisionKey(draft.name);
    const normEmblem = normalizeCollisionKey(draft.emblem);

    const livePetitions = this._store.findLivePetitionsByJurisdiction(jurisdiction);
    for (const petition of livePetitions) {
      if (normalizeCollisionKey(petition.name) === normName) {
        const err = new Error(
          `a petition with the same name already exists in jurisdiction "${jurisdiction}"`,
        );
        err.code = 'NAME_COLLISION';
        err.field = 'name';
        throw err;
      }
      if (normalizeCollisionKey(petition.emblem) === normEmblem) {
        const err = new Error(
          `a petition with the same emblem already exists in jurisdiction "${jurisdiction}"`,
        );
        err.code = 'EMBLEM_COLLISION';
        err.field = 'emblem';
        throw err;
      }
    }

    const activeParties = this._store.findActivePartiesByJurisdiction(jurisdiction);
    for (const party of activeParties) {
      if (normalizeCollisionKey(party.name) === normName) {
        const err = new Error(
          `an active party with the same name already exists in jurisdiction "${jurisdiction}"`,
        );
        err.code = 'NAME_COLLISION';
        err.field = 'name';
        throw err;
      }
      if (normalizeCollisionKey(party.emblem) === normEmblem) {
        const err = new Error(
          `an active party with the same emblem already exists in jurisdiction "${jurisdiction}"`,
        );
        err.code = 'EMBLEM_COLLISION';
        err.field = 'emblem';
        throw err;
      }
    }

    // 3. Cooldown check (FR-013): same drafter + jurisdiction + charterFingerprint
    //    within REPETITION_COOLDOWN_SECONDS of the prior petition's expiry.
    const fingerprint = charterFingerprint(draft);
    const now = this._clock();
    const expiredPetitions = this._store.findExpiredPetitionsByDrafter(
      drafterPseudonym,
      jurisdiction,
    );
    for (const prev of expiredPetitions) {
      if (prev.fingerprint === fingerprint) {
        const reopensAt = prev.closesAt + REPETITION_COOLDOWN_SECONDS;
        if (now < reopensAt) {
          const err = new Error(
            `re-petition with substantially identical charter is on cooldown; ` +
              `you may file again after Unix time ${reopensAt}`,
          );
          err.code = 'COOLDOWN_ACTIVE';
          err.field = 'draft';
          err.reopensAt = reopensAt;
          throw err;
        }
      }
    }

    // 4. Store the draft.
    const draftId = this._store.saveDraft({
      ...draft,
      drafterPseudonym,
      fingerprint,
      state: PARTY_STATE.DRAFT,
      createdAt: now,
    });

    return { draftId };
  }

  /**
   * Publish a draft into Petition state (FR-011, FR-013).
   *
   * Re-runs validateDraft server-side (never trust the form alone). On pass,
   * transitions the draft to PETITION state with a fixed expiry computed from
   * PETITION constants.
   *
   * @param {string} draftId
   * @returns {{ petitionId: string, opensAt: number, closesAt: number }}
   * @throws {Error} with .errors array when validation fails, naming each deficient pillar.
   */
  publishDraft(draftId) {
    const draft = this._store.findDraftById(draftId);
    if (!draft) {
      const err = new Error(`draft ${draftId} not found`);
      err.code = 'NOT_FOUND';
      throw err;
    }
    if (draft.state !== PARTY_STATE.DRAFT) {
      const err = new Error(`draft ${draftId} is not in DRAFT state (current: ${draft.state})`);
      err.code = 'WRONG_STATE';
      throw err;
    }

    // Server-side validation re-run (never trust the form).
    const validation = validateDraft(draft);
    if (!validation.valid) {
      const err = new Error('draft failed server-side validation');
      err.code = 'VALIDATION_FAILED';
      err.errors = validation.errors;
      throw err;
    }

    // ISS-02 (cycle-1 rework): re-run name/emblem collision check to close the TOCTOU
    // window between createDraft and publishDraft. A concurrent caller could have published
    // a petition with the same name or emblem in the same jurisdiction between the two calls.
    // Same normalisation, same scope (live petitions + active parties, same jurisdiction).
    const normName = normalizeCollisionKey(draft.name);
    const normEmblem = normalizeCollisionKey(draft.emblem);
    const jurisdiction = draft.jurisdiction;

    const livePetitionsNow = this._store.findLivePetitionsByJurisdiction(jurisdiction);
    for (const petition of livePetitionsNow) {
      if (normalizeCollisionKey(petition.name) === normName) {
        const err = new Error(
          `a petition with the same name already exists in jurisdiction "${jurisdiction}" (TOCTOU re-check)`,
        );
        err.code = 'NAME_COLLISION';
        err.field = 'name';
        throw err;
      }
      if (normalizeCollisionKey(petition.emblem) === normEmblem) {
        const err = new Error(
          `a petition with the same emblem already exists in jurisdiction "${jurisdiction}" (TOCTOU re-check)`,
        );
        err.code = 'EMBLEM_COLLISION';
        err.field = 'emblem';
        throw err;
      }
    }

    const activePartiesNow = this._store.findActivePartiesByJurisdiction(jurisdiction);
    for (const party of activePartiesNow) {
      if (normalizeCollisionKey(party.name) === normName) {
        const err = new Error(
          `an active party with the same name already exists in jurisdiction "${jurisdiction}" (TOCTOU re-check)`,
        );
        err.code = 'NAME_COLLISION';
        err.field = 'name';
        throw err;
      }
      if (normalizeCollisionKey(party.emblem) === normEmblem) {
        const err = new Error(
          `an active party with the same emblem already exists in jurisdiction "${jurisdiction}" (TOCTOU re-check)`,
        );
        err.code = 'EMBLEM_COLLISION';
        err.field = 'emblem';
        throw err;
      }
    }

    const now = this._clock();
    const opensAt = now;
    const closesAt = now + PETITION.MIN_DURATION_SECONDS;

    const petitionId = this._store.savePetition({
      ...draft,
      id: undefined, // store assigns new id
      draftId,
      state: PARTY_STATE.PETITION,
      endorsements: 0,
      opensAt,
      closesAt,
    });

    // Mark the draft as published (state change).
    this._store.updateDraft(draftId, { state: PARTY_STATE.PETITION, petitionId });

    return { petitionId, opensAt, closesAt };
  }

  /**
   * Expire petitions whose closesAt has passed.
   *
   * Expired petitions move to the immutable archive (FR-013). Subsequent calls
   * to updatePetition() for these ids will throw ARCHIVED_IMMUTABLE.
   *
   * @param {number} [now]  — defaults to clock(); pass explicitly for determinism.
   * @returns {string[]} ids of petitions that were expired in this call.
   */
  expirePetitions(now) {
    const t = now ?? this._clock();
    const jurisdiction = null; // scan all — this is a maintenance sweep.
    const expired = [];

    // Scan all live petitions across all jurisdictions.
    // (InMemoryPartyStore: iterate all maps. Production: a DB query with WHERE closesAt < now.)
    const allPetitionIds = Array.from(this._store._petitions?.keys() ?? []);
    for (const id of allPetitionIds) {
      const petition = this._store.findPetitionById(id);
      if (!petition || petition.state !== PARTY_STATE.PETITION) continue;
      if (petition.closesAt < t) {
        this._store.archivePetition(id, t);
        expired.push(id);
      }
    }
    return expired;
  }

  /**
   * Activate a party from a petition that has met its endorsement threshold (FR-016, FR-018).
   *
   * Computes the required count via petitionThreshold() — max(thresholdBps × pop / BPS,
   * thresholdBps × verified / BPS, PETITION.ABSOLUTE_FLOOR_ENDORSEMENTS) — and refuses
   * with THRESHOLD_NOT_MET if the petition's stored endorsement count falls short.
   *
   * The gate is enforced at the SDK service layer. Production wiring (DES-097) must keep
   * petition.endorsements accurate in the Postgres-backed store; the service reads what the
   * store provides. No human step, no bypass parameter.
   *
   * @param {string} petitionId
   * @returns {{ partyId: string }}
   * @throws {Error} with code 'THRESHOLD_NOT_MET' when endorsements < required;
   *   the error carries .current and .required for the caller to display.
   */
  activateParty(petitionId) {
    const petition = this._store.findPetitionById(petitionId);
    if (!petition) {
      const err = new Error(`petition ${petitionId} not found`);
      err.code = 'NOT_FOUND';
      throw err;
    }
    if (petition.state !== PARTY_STATE.PETITION) {
      const err = new Error(
        `petition ${petitionId} is not in PETITION state (current: ${petition.state})`,
      );
      err.code = 'WRONG_STATE';
      throw err;
    }

    // FR-018 / FR-016: endorsement threshold gate — no human step, no bypass.
    // petitionThreshold() (governance.js) takes the jurisdiction denominators stored
    // on the petition row. Missing denominators default to 0, causing the 500-floor
    // to bind — safe fail-closed for underspecified jurisdictions.
    const required = petitionThreshold({
      eligiblePopulation: petition.jurisdictionPopulation ?? 0,
      verifiedResidents: petition.jurisdictionVerified ?? 0,
      thresholdBps: petition.charter?.petitionThresholdBps,
    });
    const current = petition.endorsements ?? 0;
    if (current < required) {
      const err = new Error(
        `petition ${petitionId} has ${current} endorsements but requires ${required} to activate`,
      );
      err.code = 'THRESHOLD_NOT_MET';
      err.current = current;
      err.required = required;
      throw err;
    }

    const now = this._clock();

    // Party becomes ACTIVE provisional: legalRegistrationVerified = false.
    const partyId = this._store.saveParty({
      petitionId,
      name: petition.name,
      emblem: petition.emblem,
      jurisdiction: petition.jurisdiction,
      pillars: petition.pillars,
      charter: petition.charter,
      drafterPseudonym: petition.drafterPseudonym,
      state: PARTY_STATE.ACTIVE,
      legalRegistrationVerified: false,
      activatedAt: now,
    });

    this._store.updatePetition(petitionId, { state: PARTY_STATE.ACTIVE, partyId });

    return { partyId };
  }

  /**
   * Join a party (FR-020, FR-130).
   *
   * Joining is a non-counted action. verifyEligibility() is NEVER called here.
   * (FR-020: no approval, sponsorship, interview, invitation, fee, or veto.)
   *
   * For a provisional party (legalRegistrationVerified = false), joining
   * is refused at PROVISIONAL_MEMBER_CAP (100). The cap is an anti-capture
   * control (FR-130, D2 ruling): it lifts ONLY via recordLegalRegistration(),
   * by code, with no bypass parameter. A legally-registered party (FR-075)
   * is uncapped.
   *
   * @param {string} partyId
   * @param {string} memberPseudonym
   * @returns {{ memberCount: number }}
   * @throws {Error} with code 'PROVISIONAL_CAP_REACHED' when cap is exceeded.
   */
  joinParty(partyId, memberPseudonym) {
    const party = this._store.findPartyById(partyId);
    if (!party) {
      const err = new Error(`party ${partyId} not found`);
      err.code = 'NOT_FOUND';
      throw err;
    }
    if (party.state !== PARTY_STATE.ACTIVE) {
      const err = new Error(`party ${partyId} is not ACTIVE`);
      err.code = 'NOT_ACTIVE';
      throw err;
    }

    const currentMembers = this._store.getMemberPseudonyms(partyId);

    // FR-130: provisional cap check.
    // verifyEligibility() is NOT called — joining is NOT a counting action.
    if (!party.legalRegistrationVerified && currentMembers.length >= PROVISIONAL_MEMBER_CAP) {
      const err = new Error(
        `this party has reached its provisional membership cap of ${PROVISIONAL_MEMBER_CAP} members. ` +
          `The cap is an anti-capture control (FR-130): it lifts automatically when the party ` +
          `completes verified legal registration. Joining is not possible until then.`,
      );
      err.code = 'PROVISIONAL_CAP_REACHED';
      err.cap = PROVISIONAL_MEMBER_CAP;
      throw err;
    }

    this._store.addMember(partyId, memberPseudonym);
    const newCount = this._store.getMemberPseudonyms(partyId).length;
    return { memberCount: newCount };
  }

  /**
   * Record verified legal registration for a party (FR-075).
   *
   * This is the ONLY path that lifts the provisional membership cap (FR-130).
   * No operator flag, no bypass parameter, no manual override is possible.
   * The evidenceRef is an opaque reference to the verified registration record.
   *
   * @param {string} partyId
   * @param {string} evidenceRef — opaque reference to the verified registration.
   * @returns {{ legalRegistrationVerified: true }}
   */
  recordLegalRegistration(partyId, evidenceRef) {
    const party = this._store.findPartyById(partyId);
    if (!party) {
      const err = new Error(`party ${partyId} not found`);
      err.code = 'NOT_FOUND';
      throw err;
    }
    if (party.state !== PARTY_STATE.ACTIVE) {
      const err = new Error(`party ${partyId} is not ACTIVE`);
      err.code = 'NOT_ACTIVE';
      throw err;
    }

    this._store.updateParty(partyId, {
      legalRegistrationVerified: true,
      legalRegistrationEvidenceRef: evidenceRef,
      legalRegistrationRecordedAt: this._clock(),
    });

    return { legalRegistrationVerified: true };
  }

  /**
   * Get party status (FR-130 honest live status).
   *
   * Returns member count, provisional cap, provisional flag, and a BR-020
   * statement that platform creation is NOT legal registration.
   *
   * @param {string} partyId
   * @returns {object}
   */
  partyStatus(partyId) {
    const party = this._store.findPartyById(partyId);
    if (!party) {
      const err = new Error(`party ${partyId} not found`);
      err.code = 'NOT_FOUND';
      throw err;
    }

    const memberCount = this._store.getMemberPseudonyms(partyId).length;
    const provisional = !party.legalRegistrationVerified;

    return {
      partyId,
      state: party.state,
      memberCount,
      provisional,
      // FR-130: cap only applies when provisional.
      cap: provisional ? PROVISIONAL_MEMBER_CAP : null,
      capReached: provisional ? memberCount >= PROVISIONAL_MEMBER_CAP : false,
      // BR-020: platform creation ≠ legal registration.
      legalRegistrationStatement:
        'Platform registration is not the same as legal registration. ' +
        'This platform cannot grant or override legal recognition by any government body.',
    };
  }
}
