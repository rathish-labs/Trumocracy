'use client';

/**
 * Feature flags in the client (ADR-011 "ship dark", NFR-020).
 *
 * Defaults come from `@trumocracy/protocol`'s registry — the same registry the on-chain
 * `FeatureFlags` contract is seeded from — so the client cannot drift into believing a
 * capability is live when the contract will revert, or worse, believing MACI is on when it
 * is not (which would silence the banner that keeps a citizen safe).
 *
 * The on-chain value always wins. `overrides` is how a page passes down what it read from
 * `FeatureFlags.isEnabled`; a flag the client has not yet read is treated as its registry
 * default, and a flag nobody has heard of is treated as OFF.
 */
import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { FLAGS, isEnabled, type FlagDefinition } from '@trumocracy/protocol';

export type Environment = 'dev' | 'staging' | 'prod';

/**
 * Build-time environment. Defaults to `prod`, which is the strict end of every flag:
 * a misconfigured build must ship *less* capability, never more.
 */
export const BUILD_ENVIRONMENT: Environment = ((): Environment => {
  const raw = process.env.NEXT_PUBLIC_TRUMOCRACY_ENV;
  return raw === 'dev' || raw === 'staging' ? raw : 'prod';
})();

export type FlagOverrides = Partial<Record<string, boolean>>;

interface FlagContextValue {
  environment: Environment;
  overrides: FlagOverrides;
  isOn: (key: string) => boolean;
  definition: (key: string) => FlagDefinition | undefined;
}

const FlagContext = createContext<FlagContextValue | null>(null);

export function resolveFlag(key: string, environment: Environment, overrides: FlagOverrides = {}): boolean {
  if (Object.prototype.hasOwnProperty.call(overrides, key)) return Boolean(overrides[key]);
  try {
    return isEnabled(key, environment);
  } catch {
    // An unknown flag is off. A typo must never turn a dark capability on.
    return false;
  }
}

export function flagDefinition(key: string): FlagDefinition | undefined {
  return Object.values(FLAGS).find((f) => f.key === key);
}

export function FlagProvider({
  children,
  environment = BUILD_ENVIRONMENT,
  overrides = {},
}: {
  children: ReactNode;
  environment?: Environment;
  overrides?: FlagOverrides;
}) {
  const value = useMemo<FlagContextValue>(
    () => ({
      environment,
      overrides,
      isOn: (key: string) => resolveFlag(key, environment, overrides),
      definition: flagDefinition,
    }),
    [environment, overrides],
  );
  return <FlagContext.Provider value={value}>{children}</FlagContext.Provider>;
}

export function useFlag(key: string): boolean {
  const ctx = useContext(FlagContext);
  // Outside a provider, fall back to the build environment rather than throwing: a flag
  // read must never be the reason a page fails to render.
  if (!ctx) return resolveFlag(key, BUILD_ENVIRONMENT);
  return ctx.isOn(key);
}

/** Flag keys the client cares about, named so a typo is a compile error. */
export const FLAG = {
  PETITIONS: 'petitions',
  PARTY_GOVERNANCE: 'party_governance',
  MACI_VOTING: 'maci_voting',
  ELECTIONS: 'elections',
  RECALL: 'recall',
  TREASURY: 'treasury',
  FORK: 'fork',
  PRIVATE_ENDORSEMENT: 'private_endorsement',
} as const;
