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
}
