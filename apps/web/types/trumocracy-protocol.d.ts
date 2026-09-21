/**
 * Typed surface of `@trumocracy/protocol` — the dependency-free reference implementation
 * of the governance rules (DES-045, ADR-011).
 *
 * Only the members the client actually uses are declared. Adding one here does not make it
 * exist; it must exist in `packages/protocol/src`. The SDK's tests are what keep the two
 * honest, because a `.d.ts` that lies is worse than no types at all.
 */
declare module '@trumocracy/protocol' {
  export const TIER: {
    readonly OPERATIONAL: 0;
    readonly POLICY: 1;
    readonly STRUCTURAL: 2;
    readonly CONSTITUTIONAL: 3;
  };
  export const TIER_NAMES: readonly string[];
  export const BPS: number;
  export const MIN_ANONYMITY_SET: number;

  /** The eight mandatory policy pillars (BR-INCUBATE / FR-011). */
  export const PILLARS: readonly [
    'finance',
    'society',
    'governance',
    'law',
    'education',
    'healthcare',
    'security',
    'regional',
  ];

  export const PETITION: {
    readonly DEFAULT_THRESHOLD_BPS: number;
    readonly MIN_THRESHOLD_BPS: number;
    readonly MAX_THRESHOLD_BPS: number;
    readonly ABSOLUTE_FLOOR_ENDORSEMENTS: number;
    readonly MAX_DURATION_SECONDS: number;
    readonly MIN_DURATION_SECONDS: number;
  };

  export interface FlagDefinition {
    key: string;
    description: string;
    defaults: { dev: boolean; staging: boolean; prod: boolean };
    onChain: boolean;
    removeBy: string;
  }
  export const FLAGS: Record<string, FlagDefinition>;
  export const ENVIRONMENTS: readonly ('dev' | 'staging' | 'prod')[];
  export function isEnabled(
    flagKey: string,
    env: 'dev' | 'staging' | 'prod',
    overrides?: Record<string, boolean>,
  ): boolean;
  /** Flags with no removal target — CI/tests assert this stays empty (ADR-011 "ship dark"). */
  export function permanentFlags(): FlagDefinition[];

  export interface ValidationError {
    field: string;
    code: string;
    message: string;
  }
  export interface ValidationResult {
    valid: boolean;
    errors: ValidationError[];
  }

  export interface Vision {
    name?: string;
    jurisdiction?: string;
    pillars?: Partial<Record<string, string>>;
  }
  export function validateVision(vision: Vision): ValidationResult;
  export function validateCharter(charter: unknown): ValidationResult;

  export interface Rules {
    tier: number;
    quorumBps: number;
    approvalBps: number;
    minTenureSeconds: number;
    timelockSeconds: number;
    discussionSeconds: number;
    minVotingSeconds: number;
    surgeApplied: boolean;
  }
  export function effectiveRules(tier: number, charter?: unknown, surgeActive?: boolean): Rules;

  export interface TallyResult {
    passed: boolean;
    reason: string;
    quorumBps: number;
    approvalBps: number;
    participation: number;
  }
  export function tally(args: {
    forVotes: number;
    againstVotes: number;
    abstainVotes?: number;
    snapshotMembers: number;
    rules: Rules;
  }): TallyResult;

  export function petitionThreshold(args: {
    eligiblePopulation: number;
    verifiedResidents: number;
    thresholdBps?: number;
    absoluteFloor?: number;
  }): number;

  export function petitionOutcome(args: {
    endorsements: number;
    required: number;
    opensAt: number;
    closesAt: number;
    now: number;
  }): { state: string; met: boolean; remaining: number };

  export function parseRegion(
    path: string,
    schemeVersion?: number,
  ): { schemeVersion: number; segments: string[]; level: string; depth: number; path: string };
  export function ancestors(path: string, schemeVersion?: number): string[];
  export function resolveAnonymityScope(
    path: string,
    residentCountOf: (regionPath: string) => number,
    minSet?: number,
  ): { regionPath: string; escalated: boolean; size: number } | null;

  export const PARTY_STATE: Record<string, string>;
  export const PROPOSAL_STATE: Record<string, string>;

  // ─── Party-creation additions (v1 phase 1) ───────────────────────────────────

  /** Provisional party membership cap (FR-130). */
  export const PROVISIONAL_MEMBER_CAP: 100;

  /** Emblem bounds (FR-010, D3). */
  export const EMBLEM: { readonly MIN_CHARS: number; readonly MAX_CHARS: number };

  /**
   * The platform's standard non-violence clause (FR-077, CON-013).
   * Must appear verbatim in every party charter.
   */
  export const NON_VIOLENCE_CLAUSE: string;

  /** Cooldown for re-petitioning with a substantially identical charter (FR-013, COOLDOWN-01). */
  export const REPETITION_COOLDOWN_SECONDS: number;

  // ─── Proposals, tiers & deliberative lifecycle (DES-103..DES-105) ────────────

  /** The eight FR-091 lifecycle stage names. */
  export type ProposalStage =
    | 'PROPOSAL'
    | 'REVIEW'
    | 'DISCUSSION'
    | 'DEBATE'
    | 'VOTE'
    | 'DECISION'
    | 'IMPLEMENTATION'
    | 'MEASUREMENT';

  /** Participation tiers (FR-079). Descriptive only — never a voting weight. */
  export type ParticipationTierName = 'SUPPORTER' | 'WORKER' | 'CANDIDATE';

  export const PARTICIPATION_TIER: { readonly [K in ParticipationTierName]: K };
  export const DEFAULT_PARTICIPATION_TIER: 'SUPPORTER';

  /** May a member at this tier author a proposal? (FR-024, FR-090, OI-14) */
  export function canAuthorProposal(participationTier: string): boolean;

  /** Always 1 — no tier confers weight (FR-079, FR-021). Throws on an unknown tier. */
  export function votingWeightForTier(participationTier: string): number;

  export const PROPOSAL_STAGE: { readonly [K in ProposalStage]: K };
  export const STAGE_ORDER: readonly ProposalStage[];
  export const DELIBERATIVE_STAGES: readonly ProposalStage[];
  export const COMPETING_ENTRY_STAGES: readonly ProposalStage[];

  export function stageIndex(stage: string): number;
  export function isDeliberativeStage(stage: string): boolean;
  export function acceptsCompetingProposal(stage: string): boolean;
  export function nextStage(stage: string): ProposalStage | null;
  /** Only one step forward is legal (FR-091). Throws STAGE_SKIPPED/REVERSED/UNCHANGED. */
  export function assertStageTransition(from: string, to: string): { valid: true };

  export const PROPOSAL: {
    readonly QUESTION_MIN_CHARS: number;
    readonly QUESTION_MAX_CHARS: number;
    readonly TITLE_MIN_CHARS: number;
    readonly TITLE_MAX_CHARS: number;
    readonly BODY_MIN_CHARS: number;
    readonly BODY_MAX_CHARS: number;
  };

  export interface ProposalDraft {
    question: string;
    title: string;
    body: string;
    tier: number;
  }

  export function validateProposalDraft(draft: ProposalDraft): ValidationResult;

  /** Groups differently-phrased spellings of one question into one decision window. */
  export function normalizeQuestionKey(question: string): string;

  export interface Draft {
    name?: string;
    jurisdiction?: string;
    pillars?: Partial<Record<string, string>>;
    emblem?: string;
    charter?: { nonViolenceClause?: string; [key: string]: unknown };
  }

  /** Validate a complete draft (name + pillars + emblem + charter + non-violence clause). */
  export function validateDraft(draft: Draft): ValidationResult;

  /** Fill charter defaults where silent (FR-012). Returns a new object, never mutates. */
  export function applyCharterDefaults(charter?: unknown): unknown;

  /** Compute a stable fingerprint for substantially-identical-charter detection (FR-013, D4). */
  export function charterFingerprint(draft: { pillars?: Record<string, string>; charter?: unknown }): string;

  /** Normalise a name or emblem for collision detection (FR-010, DES-073). */
  export function normalizeCollisionKey(s?: string | null): string;

  // ─── Candidate selection reference rules (candidates.js; DES-027/028/066/067) ────

  export class CandidateError extends Error {
    code: string;
  }
  export type CandidacyStage = 'NOMINATED' | 'CONSENTED' | 'DEBATING' | 'DEBATES_COMPLETE' | 'VOTE_OPEN' | 'PUBLISHED' | 'NOT_ADVANCED' | 'WITHDRAWN';
  export const CANDIDACY_STAGE: { readonly [K in CandidacyStage]: K };
  export function assertCandidacyTransition(from: string, to: string): { valid: true };
  export type DebateTopic = 'LOCAL_CONDITIONS' | 'LOCAL_PROBLEMS' | 'WORK_REQUIRED';
  export const DEBATE_TOPIC: { readonly [K in DebateTopic]: K };
  export const REQUIRED_DEBATE_TOPICS: readonly DebateTopic[];
  export const DEBATES_PER_CANDIDATE: 3;
  export function debatesComplete(debates: { topic: string; attended: boolean | null }[]): { complete: boolean; missingTopics: string[]; absences: string[] };
  export const FEEDBACK: { readonly UPVOTE: 'UPVOTE'; readonly DOWNVOTE: 'DOWNVOTE' };
  export const FEEDBACK_SCORE: { readonly UPVOTE: 3; readonly DOWNVOTE: -1 };
  export function feedbackScore(tally: Record<string, number> | undefined): number;
  export const POST_DEBATE_CHOICE: { readonly SUITABLE: 'SUITABLE'; readonly NOT_SUITABLE: 'NOT_SUITABLE' };
  export function isNetPositive(tally: Record<string, number> | undefined): boolean;
  export function inScopeForOffice(args: { residencyRegion: string; officeRegion: string }): boolean;
  /** RATIFICATION REQUIRED (NOMINATION-MIN-01). */
  export const NOMINATION_ENDORSEMENTS_MIN: number;
  /** RATIFICATION REQUIRED (MATURATION-01). */
  export const NOMINATION_MATURATION_SECONDS: number;
  export function isMatured(args: { joinedAt: number | null | undefined; now: number; maturationSeconds?: number }): { matured: boolean; tenure: number; required: number };
  export const CONSENT_ACKNOWLEDGEMENTS: readonly ['identityBecomesPublic', 'irreversibleForTerm', 'revocableOnlyByWithdrawalBeforeLock'];
  export function validateConsent(acknowledgements: Record<string, unknown> | undefined): { valid: boolean; missing: string[] };
  export function isWithin(child: string, parent: string, schemeVersion?: number): boolean;
}
