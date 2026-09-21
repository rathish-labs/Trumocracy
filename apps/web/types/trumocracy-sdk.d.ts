/**
 * Typed surface of `@trumocracy/sdk`.
 *
 * The app is allowed to know about *prediction* and *presentation*; it is deliberately not
 * given a typed handle on anything that could invent its own governance arithmetic. If a
 * screen needs a number about what will happen, it comes from here.
 */
declare module '@trumocracy/sdk' {
  import type { Rules, TallyResult, ValidationResult, Vision } from '@trumocracy/protocol';

  export function validateVision(vision: Vision): ValidationResult;
  export function validateCharter(charter: unknown): ValidationResult;

  export interface PetitionPrediction {
    state: string;
    met: boolean;
    remaining: number;
    endorsements: number;
    required: number;
    percent: number;
    secondsRemaining: number;
  }
  export function predictPetition(args: {
    endorsements: number | bigint;
    required: number | bigint;
    opensAt: number | bigint;
    closesAt: number | bigint;
    now?: number;
  }): PetitionPrediction;

  export function petitionView(args: {
    endorsements: number | bigint;
    required: number | bigint;
    opensAt: number | bigint;
    closesAt: number | bigint;
    now?: number;
  }): PetitionPrediction & { daysRemaining: number; hoursRemaining: number };

  export function predictThreshold(args: {
    eligiblePopulation: number;
    verifiedResidents: number;
    thresholdBps?: number;
  }): {
    required: number;
    byPopulation: number;
    byVerified: number;
    absoluteFloor: number;
    binding: 'population' | 'verified-residents' | 'absolute-floor';
  };

  export function predictRules(args: {
    tier: number;
    charter?: unknown;
    growthHistory?: Array<{ timestamp: number; memberCount: number }>;
    surgeActive?: boolean;
    now?: number;
  }): Rules;

  export function predictOutcome(args: {
    forVotes: number;
    againstVotes: number;
    abstainVotes?: number;
    snapshotMembers: number;
    rules: Rules;
  }): TallyResult & { votesNeededForQuorum: number };

  export function predictEligibility(args: {
    joinedAt: number | null;
    snapshotAt: number;
    leftAt?: number | null;
    rules: Rules;
  }): { eligible: boolean; reason: string; tenure?: number; required?: number; weight?: number; eligibleFrom?: number };

  export function predictSchedule(args: {
    createdAt: number;
    rules: Rules;
    requestedVotingSeconds?: number;
  }): {
    createdAt: number;
    discussionEndsAt: number;
    votingStartsAt: number;
    votingEndsAt: number;
    executableAt: number;
    votingSeconds: number;
  };

  export function predictAnonymityScope(
    regionPath: string,
    residentCountOf: (path: string) => number,
  ): { regionPath: string; escalated: boolean; size: number } | null;

  export const CHOICE: { readonly AGAINST: 0; readonly FOR: 1; readonly ABSTAIN: 2 };
  export const FLAG_ID: Record<string, `0x${string}`>;

  export class TrumocracyError extends Error {
    code: string;
    details: Record<string, unknown>;
  }
  export class TrustBoundaryViolation extends TrumocracyError {}

  // ─── Party-creation service seam (DES-097 predecessor) ───────────────────────

  /** One append-only membership event (never mutated, never deleted). */
  export interface MembershipEvent {
    seq: number;
    partyId: string;
    memberPseudonym: string;
    action: 'JOIN' | 'LEAVE';
    at: number;
  }

  /** IPartyStore — injectable persistence seam for PartyCreationService. */
  export interface IPartyStore {
    IS_INSECURE_MOCK(): boolean;
    findDraftById(id: string): object | null;
    findPetitionById(id: string): object | null;
    findPartyById(id: string): object | null;
    findLivePetitionsByJurisdiction(jurisdiction: string): object[];
    findActivePartiesByJurisdiction(jurisdiction: string): object[];
    findExpiredPetitionsByDrafter(drafterPseudonym: string, jurisdiction: string): object[];
    saveDraft(draft: object): string;
    updateDraft(id: string, data: object): object;
    savePetition(petition: object): string;
    updatePetition(id: string, data: object): object;
    archivePetition(id: string, now: number): object;
    findPetitionsPastClose(now: number): object[];
    saveParty(party: object): string;
    updateParty(id: string, data: object): object;
    recordJoin(partyId: string, memberPseudonym: string, at: number): void;
    recordLeave(partyId: string, memberPseudonym: string, at: number): void;
    getActiveMembership(memberPseudonym: string): { partyId: string; joinedAt: number } | null;
    getMembershipEvents(memberPseudonym: string): MembershipEvent[];
    getMemberPseudonyms(partyId: string): string[];
    recordStrengthContribution(partyId: string, memberPseudonym: string): void;
    getCountedPseudonyms(partyId: string): string[];
  }

  /**
   * InMemoryPartyStore — IS_INSECURE_MOCK=true; blocked past devnet.
   * Postgres/API backing is later wiring (DES-097).
   */
  export class InMemoryPartyStore implements IPartyStore {
    IS_INSECURE_MOCK(): true;
    findDraftById(id: string): object | null;
    findPetitionById(id: string): object | null;
    findPartyById(id: string): object | null;
    findLivePetitionsByJurisdiction(jurisdiction: string): object[];
    findActivePartiesByJurisdiction(jurisdiction: string): object[];
    findExpiredPetitionsByDrafter(drafterPseudonym: string, jurisdiction: string): object[];
    saveDraft(draft: object): string;
    updateDraft(id: string, data: object): object;
    savePetition(petition: object): string;
    updatePetition(id: string, data: object): object;
    archivePetition(id: string, now: number): object;
    findPetitionsPastClose(now: number): object[];
    saveParty(party: object): string;
    updateParty(id: string, data: object): object;
    recordJoin(partyId: string, memberPseudonym: string, at: number): void;
    recordLeave(partyId: string, memberPseudonym: string, at: number): void;
    getActiveMembership(memberPseudonym: string): { partyId: string; joinedAt: number } | null;
    getMembershipEvents(memberPseudonym: string): MembershipEvent[];
    getMemberPseudonyms(partyId: string): string[];
    recordStrengthContribution(partyId: string, memberPseudonym: string): void;
    getCountedPseudonyms(partyId: string): string[];
  }

  export interface PartyCreationDraft {
    name: string;
    jurisdiction: string;
    pillars: Record<string, string>;
    emblem: string;
    charter: { nonViolenceClause: string; [key: string]: unknown };
  }

  export interface PartyStatus {
    partyId: string;
    state: string;
    memberCount: number;
    /** FR-123(a): counts verified members only — joining is not counting. */
    officialStrength: number;
    provisional: boolean;
    cap: number | null;
    capReached: boolean;
    legalRegistrationStatement: string;
  }

  export interface MembershipHistoryRow {
    partyId: string;
    joinedAt: number;
    leftAt: number | null;
    active: boolean;
  }

  /**
   * PartyCreationService — demoable party-creation + membership flow.
   * IS_INSECURE_MOCK() delegates to the store. Holds NO eligibility verifier:
   * join/leave structurally cannot call the seam (FR-020); only
   * contributeToStrength receives a verifier, per call (FR-123(a)).
   */
  export class PartyCreationService {
    constructor(store: IPartyStore, clock?: () => number);
    IS_INSECURE_MOCK(): boolean;
    createDraft(draft: PartyCreationDraft, drafterPseudonym: string): { draftId: string };
    publishDraft(draftId: string): { petitionId: string; opensAt: number; closesAt: number };
    expirePetitions(now?: number): string[];
    activateParty(petitionId: string): { partyId: string };
    joinParty(partyId: string, memberPseudonym: string): { memberCount: number; joinedAt: number };
    leaveParty(partyId: string, memberPseudonym: string): { memberCount: number; leftAt: number };
    membershipHistory(memberPseudonym: string): MembershipHistoryRow[];
    activeMembership(memberPseudonym: string): { partyId: string; joinedAt: number } | null;
    countingStatus(partyId: string, memberPseudonym: string): { member: boolean; counted: boolean };
    contributeToStrength(
      partyId: string,
      memberPseudonym: string,
      verifier: { verifyEligibility(memberId: string, regionId: string, scope: string): EligibilityResult },
    ): { officialStrength: number };
    recordLegalRegistration(partyId: string, evidenceRef: string): { legalRegistrationVerified: true };
    partyStatus(partyId: string): PartyStatus;
  }

  // ─── Proposals & debate (DES-103..DES-106) ───────────────────────────────────

  /** Injectable persistence seam for ProposalService. */
  export interface IProposalStore {
    IS_INSECURE_MOCK(): boolean;
    saveWindow(window: object): string;
    findWindowById(id: string): object | null;
    findWindowByQuestion(partyId: string, questionKey: string): object | null;
    findWindowsByParty(partyId: string): object[];
    updateWindowStage(windowId: string, change: { stage: string; at: number }): object;
    saveProposal(proposal: object): string;
    findProposalById(id: string): object | null;
    findProposalsByWindow(windowId: string): object[];
    appendDeliberation(record: object): string;
    findDeliberationsByWindow(windowId: string): object[];
    appendTrailEvent(event: object): void;
    getTrail(windowId: string): object[];
    isAdmittedToBallot(windowId: string, memberPseudonym: string): boolean;
    recordBallotAdmission(windowId: string, memberPseudonym: string): void;
  }

  /** IS_INSECURE_MOCK=true; blocked past devnet. Postgres backing is later wiring. */
  export class InMemoryProposalStore implements IProposalStore {
    IS_INSECURE_MOCK(): true;
    saveWindow(window: object): string;
    findWindowById(id: string): object | null;
    findWindowByQuestion(partyId: string, questionKey: string): object | null;
    findWindowsByParty(partyId: string): object[];
    updateWindowStage(windowId: string, change: { stage: string; at: number }): object;
    saveProposal(proposal: object): string;
    findProposalById(id: string): object | null;
    findProposalsByWindow(windowId: string): object[];
    appendDeliberation(record: object): string;
    findDeliberationsByWindow(windowId: string): object[];
    appendTrailEvent(event: object): void;
    getTrail(windowId: string): object[];
    isAdmittedToBallot(windowId: string, memberPseudonym: string): boolean;
    recordBallotAdmission(windowId: string, memberPseudonym: string): void;
  }

  /** A stored row (proposal, deliberation record or trail event) returned as a copy. */
  export type ProposalRecord = Record<string, unknown>;

  export interface DecisionWindowSummary {
    windowId: string;
    question: string;
    stage: string;
    openedAt: number;
    proposalCount: number;
  }

  export interface ParticipationStatus {
    member: boolean;
    mayAuthor: boolean;
    mayDeliberate: boolean;
    admittedToBallot: boolean;
    stage: string;
  }

  /**
   * The v1 proposals & debate flow (FR-024/079/080/090/091/092/123).
   *
   * Holds NO eligibility verifier: authoring and deliberation structurally cannot reach
   * the seam. Only admitToBallot() receives one, per call, with scope BINDING_VOTE.
   * Casts, stores and counts NO vote — that is IBallotService (DES-096).
   */
  export class ProposalService {
    constructor(store: IProposalStore, membership: unknown, clock?: () => number);
    IS_INSECURE_MOCK(): boolean;
    fileProposal(
      partyId: string,
      draft: { question: string; title: string; body: string; tier: number },
      authorPseudonym: string,
      participationTier: string,
    ): { proposalId: string; windowId: string; isOriginal: boolean; competingCount: number };
    proposalsInWindow(windowId: string): ProposalRecord[];
    decisionWindows(partyId: string): DecisionWindowSummary[];
    postDeliberation(
      windowId: string,
      memberPseudonym: string,
      text: string,
      proposalId?: string | null,
    ): { deliberationId: string; stage: string };
    deliberation(windowId: string): ProposalRecord[];
    advanceStage(windowId: string): { windowId: string; from: string; to: string };
    admitToBallot(
      windowId: string,
      memberPseudonym: string,
      verifier: { verifyEligibility(memberId: string, regionId: string, scope: string): EligibilityResult },
    ): { admitted: true; windowId: string; member: string };
    participationStatus(
      windowId: string,
      memberPseudonym: string,
      participationTier?: string,
    ): ParticipationStatus;
    decisionTrail(windowId: string): ProposalRecord[];
  }

  // ─── IEligibilityVerifier seam (DES-095, ADR-024/ADR-025) ────────────────────

  export const COUNTING_ACTION: {
    readonly STRENGTH_CONTRIBUTION: 'STRENGTH_CONTRIBUTION';
    readonly BINDING_VOTE: 'BINDING_VOTE';
    readonly CANDIDACY: 'CANDIDACY';
  };

  export class NotACountingAction extends Error {
    scope: string;
  }

  export interface EligibilityResult {
    eligible: boolean;
    memberId: string;
    scope: string;
    reason?: string;
  }

  export interface EligibilityProperties {
    onePersonOneVote: boolean;
    subpoenaResistant: boolean;
    unlinkable: boolean;
    anonymityFloor: boolean;
  }

  /** DES-100 allowlist — the ONLY fields retained after a government-ID check. */
  export interface IdDocumentResult {
    id_verified_flag: boolean;
    age_verified: boolean;
    issuing_region: string;
    subject_id_hash: string;
    verified_at: string;
  }

  /** Vendor-boundary stub (IS_INSECURE_MOCK=true; blocked past devnet). */
  export class StubPhoneVerifier {
    verifyPhone(phoneE164: string): Promise<{ phone_hash: string }>;
    IS_INSECURE_MOCK(): true;
  }

  /** Vendor-boundary stub (IS_INSECURE_MOCK=true; blocked past devnet). */
  export class StubIdDocumentChecker {
    checkDocument(documentPayload: object): Promise<IdDocumentResult>;
    IS_INSECURE_MOCK(): true;
  }

  /**
   * v1 conventional backing for the IEligibilityVerifier seam.
   * IS_INSECURE_MOCK() delegates: true while any vendor seam is a stub.
   */
  export class ConventionalEligibilityVerifier {
    constructor(deps: {
      phoneVerifier: StubPhoneVerifier | { verifyPhone(p: string): Promise<{ phone_hash: string }>; IS_INSECURE_MOCK(): boolean };
      idDocumentChecker: StubIdDocumentChecker | { checkDocument(d: object): Promise<IdDocumentResult>; IS_INSECURE_MOCK(): boolean };
      credentialStore: Map<string, IdDocumentResult>;
    });
    verifyEligibility(memberId: string, regionId: string, scope: string, proof?: unknown): EligibilityResult;
    isUniqueInScope(memberId: string, scope: string): boolean;
    getProperties(): EligibilityProperties;
    IS_INSECURE_MOCK(): boolean;
  }

  // ─── IBallotService seam (DES-096, ADR-024) ──────────────────────────────────

  export interface BallotReceipt {
    electionId: string;
    messageHash: string;
    timestamp: string;
    choice?: string;
    memberId?: string;
  }
  export interface TallyProperties {
    receiptFree: boolean;
    coercionOverride: boolean;
    zeroKnowledge: boolean;
    publiclyVerifiable: boolean;
  }
  export interface TallyResult {
    electionId: string;
    result: Record<string, number>;
    resultHash: string;
    evidence: string;
    publicationPath: string;
    verifiabilityProps: TallyProperties;
  }
  /** v1 conventional ballot backing. IS_INSECURE_MOCK() delegates to the eligibility verifier. */
  export class ConventionalBallotService {
    constructor(deps: { eligibilityVerifier: ConventionalEligibilityVerifier });
    castBallot(electionId: string, choice: string, memberId: string, eligibilityRef: EligibilityResult): Promise<BallotReceipt>;
    changeBallot(electionId: string, newChoice: string, memberId: string): Promise<BallotReceipt>;
    computeTally(electionId: string): Promise<TallyResult>;
    getTallyProperties(): TallyProperties;
    IS_INSECURE_MOCK(): boolean;
  }

  // ─── Candidate selection (DES-027/028/066/067) ───────────────────────────────

  export interface ICandidateStore {
    IS_INSECURE_MOCK(): boolean;
    saveElection(election: object): string;
    findElectionById(id: string): object | null;
    updateElection(electionId: string, patch: object): object;
    saveCandidacy(candidacy: object): string;
    findCandidacyById(id: string): object | null;
    findCandidaciesByElection(electionId: string): object[];
    updateCandidacy(candidacyId: string, patch: object): object;
    destroyDisclosures(candidacyId: string): void;
    hasEndorsed(candidacyId: string, endorser: string): boolean;
    recordEndorsement(candidacyId: string, endorser: string): void;
    countEndorsements(candidacyId: string): number;
    upsertDebate(candidacyId: string, debate: object): void;
    findDebates(candidacyId: string): object[];
    hasGivenFeedback(candidacyId: string, member: string): boolean;
    recordFeedback(candidacyId: string, member: string, feedback: string): void;
    feedbackTally(candidacyId: string): Record<string, number>;
    recordOfficeHolder(officeId: string, member: string): void;
    officeHolder(officeId: string): string | null;
    appendTrailEvent(event: object): void;
    getTrail(candidacyId: string): object[];
  }

  /** IS_INSECURE_MOCK=true; blocked past devnet. Postgres backing is later wiring. */
  export class InMemoryCandidateStore implements ICandidateStore {
    IS_INSECURE_MOCK(): true;
    saveElection(election: object): string;
    findElectionById(id: string): object | null;
    updateElection(electionId: string, patch: object): object;
    saveCandidacy(candidacy: object): string;
    findCandidacyById(id: string): object | null;
    findCandidaciesByElection(electionId: string): object[];
    updateCandidacy(candidacyId: string, patch: object): object;
    destroyDisclosures(candidacyId: string): void;
    hasEndorsed(candidacyId: string, endorser: string): boolean;
    recordEndorsement(candidacyId: string, endorser: string): void;
    countEndorsements(candidacyId: string): number;
    upsertDebate(candidacyId: string, debate: object): void;
    findDebates(candidacyId: string): object[];
    hasGivenFeedback(candidacyId: string, member: string): boolean;
    recordFeedback(candidacyId: string, member: string, feedback: string): void;
    feedbackTally(candidacyId: string): Record<string, number>;
    recordOfficeHolder(officeId: string, member: string): void;
    officeHolder(officeId: string): string | null;
    appendTrailEvent(event: object): void;
    getTrail(candidacyId: string): object[];
  }

  export interface ElectionRecord {
    id: string;
    partyId: string;
    officeId: string;
    officeRegion: string;
    openedAt: number;
    nominationClosesAt: number;
    ballotLocksAt: number;
    locked: boolean;
    lockedAt?: number;
  }
  export interface DebateRecord {
    topic: string;
    scheduledAt: number | null;
    attended: boolean | null;
    contentRef: string | null;
    heldAt?: number;
  }
  export interface FeedbackAggregate {
    score: number;
    upvotes: number;
    downvotes: number;
  }
  /** One candidacy as the public sees it — member and disclosures only after consent (FR-083). */
  export interface CandidacyView {
    candidacyId: string;
    electionId: string;
    member: string | null;
    stage: string;
    residencyRegion: string;
    nominatedAt: number;
    consentRecordedAt: number | null;
    endorsements: number;
    endorsementsRequired: number;
    debates: DebateRecord[];
    feedback: FeedbackAggregate;
    disclosures: Record<string, unknown> | null;
  }
  export type TrailEvent = Record<string, unknown> & { candidacyId: string; type: string; at: number; seq: number };

  /**
   * The v1 candidate-selection flow (FR-036/037/038/065/066/067/081/085).
   *
   * Holds NO verifier and NO ballot service: reads and the consent step structurally
   * cannot reach a seam. nominate()/castFeedback()/castPostDebateVote() receive the
   * verifier per call; the post-debate vote is cast through the ballot service per call.
   */
  export class CandidateService {
    constructor(store: ICandidateStore, membership: unknown, clock?: () => number);
    IS_INSECURE_MOCK(): boolean;
    openElection(
      partyId: string,
      timetable: { officeId: string; officeRegion: string; nominationClosesAt: number; ballotLocksAt: number },
    ): { electionId: string };
    lockBallot(electionId: string): { electionId: string; locked: true };
    nominate(
      electionId: string,
      memberPseudonym: string,
      nomination: { residencyRegion: string; disclosures?: Record<string, unknown> },
      verifier: ConventionalEligibilityVerifier,
    ): { candidacyId: string; stage: string };
    endorseNomination(candidacyId: string, endorserPseudonym: string, args: { residencyRegion: string }): { endorsements: number; required: number; met: boolean };
    recordConsent(candidacyId: string, memberPseudonym: string, acknowledgements: Record<string, boolean>): { stage: string; consentRecordedAt: number };
    withdraw(candidacyId: string, memberPseudonym: string): { stage: string; disclosuresDestroyed: boolean };
    scheduleDebates(candidacyId: string, scheduledAt?: Record<string, number>): { stage: string; debates: DebateRecord[] };
    recordDebate(candidacyId: string, topic: string, record: { attended: boolean; contentRef?: string | null }): { stage: string; complete: boolean; absences: string[] };
    openPostDebateVote(candidacyId: string): { stage: string; ballotId: string };
    castPostDebateVote(
      candidacyId: string,
      memberPseudonym: string,
      choice: string,
      verifier: ConventionalEligibilityVerifier,
      ballotService: ConventionalBallotService,
    ): Promise<BallotReceipt>;
    closePostDebateVote(candidacyId: string, ballotService: ConventionalBallotService): Promise<{ stage: string; tally: Record<string, number>; resultHash: string }>;
    castFeedback(candidacyId: string, memberPseudonym: string, feedback: string, verifier: ConventionalEligibilityVerifier): FeedbackAggregate;
    feedbackTally(candidacyId: string): FeedbackAggregate;
    candidacy(candidacyId: string): CandidacyView;
    candidacies(electionId: string): CandidacyView[];
    candidateSet(electionId: string): CandidacyView[];
    election(electionId: string): ElectionRecord;
    recordOfficeHolder(officeId: string, memberPseudonym: string): void;
    officeHolder(officeId: string): string | null;
    trail(candidacyId: string): TrailEvent[];
  }
}
