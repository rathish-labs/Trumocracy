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
    findPetitionById(id: string): object | null;
    updatePetition(id: string, data: object): object;
    archivePetition(id: string): object;
    saveParty(party: object): string;
    updateParty(id: string, data: object): object;
    addMember(partyId: string, memberPseudonym: string): void;
    getMemberPseudonyms(partyId: string): string[];
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
    archivePetition(id: string): object;
    saveParty(party: object): string;
    updateParty(id: string, data: object): object;
    addMember(partyId: string, memberPseudonym: string): void;
    getMemberPseudonyms(partyId: string): string[];
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
    provisional: boolean;
    cap: number | null;
    capReached: boolean;
    legalRegistrationStatement: string;
  }

  /**
   * PartyCreationService — demoable party-creation flow.
   * IS_INSECURE_MOCK() delegates to the store.
   */
  export class PartyCreationService {
    constructor(store: IPartyStore, clock?: () => number);
    IS_INSECURE_MOCK(): boolean;
    createDraft(draft: PartyCreationDraft, drafterPseudonym: string): { draftId: string };
    publishDraft(draftId: string): { petitionId: string; opensAt: number; closesAt: number };
    expirePetitions(now?: number): string[];
    activateParty(petitionId: string): { partyId: string };
    joinParty(partyId: string, memberPseudonym: string): { memberCount: number };
    recordLegalRegistration(partyId: string, evidenceRef: string): { legalRegistrationVerified: true };
    partyStatus(partyId: string): PartyStatus;
  }
}
