'use client';

/**
 * Draft a party (FR-010, FR-011, FR-012, FR-013, FR-077, US-0014/US-0015, US-0131).
 *
 * Wired to PartyCreationService backed by InMemoryPartyStore for the demoable flow.
 * The backing is IS_INSECURE_MOCK = true (in-memory; blocked past devnet by the
 * CI promotion gate). The Postgres/API backing is later wiring per DES-097.
 *
 * The page manages the creation flow state machine:
 *   idle → submitting → petition (success) / error (collision/cooldown)
 *
 * PrivacyStatus is NOT rendered: there is no authenticated session in the static
 * demo. The DES-094 clause 1 self-view contract returns null without a session —
 * rendering it would imply a session-backed privacy guarantee that does not exist
 * in the demo context (Doc 06 §7 limitation).
 *
 * Traces: FR-010, FR-011, FR-013, FR-018, FR-020, FR-077, FR-130, BR-020.
 */
import { useCallback, useRef, useState } from 'react';
import { EightPillarForm } from '@/components/EightPillarForm';
import { PetitionProgress } from '@/components/PetitionProgress';
import { ProvisionalStatus } from '@/components/ProvisionalStatus';
import { useT } from '@/i18n/LocaleProvider';
import { InMemoryPartyStore, PartyCreationService } from '@trumocracy/sdk';
import { PROVISIONAL_MEMBER_CAP } from '@trumocracy/protocol';
import { findJurisdictionSeed } from '@/config/jurisdictions';

// ─── Service provider ─────────────────────────────────────────────────────────

/**
 * Module-level singleton for the demo party-creation service.
 *
 * Pattern matches FlagProvider: a single service instance is created once and
 * reused across renders. In production this would be replaced by a real
 * Postgres-backed service via dependency injection or a React context provider.
 *
 * IS_INSECURE_MOCK = true: in-memory store; blocked past devnet by the CI gate.
 */
const _demoStore = new InMemoryPartyStore();
const _demoService = new PartyCreationService(_demoStore);

// ─── Page ─────────────────────────────────────────────────────────────────────

type PageState =
  | { phase: 'idle' }
  | { phase: 'submitting' }
  | { phase: 'petition'; petitionId: string; opensAt: number; closesAt: number; jurisdiction: string }
  | { phase: 'error'; errors: Array<{ field: string; code: string; message: string }> };

export default function NewPetitionPage() {
  const t = useT();
  const [state, setState] = useState<PageState>({ phase: 'idle' });

  const handlePublish = useCallback(
    (draft: {
      name: string;
      jurisdiction: string;
      pillars: Record<string, string>;
      emblem: string;
      charter: { nonViolenceClause: string };
    }) => {
      setState({ phase: 'submitting' });
      try {
        // createDraft (FR-010: validateDraft + collision check + cooldown check).
        const { draftId } = _demoService.createDraft(draft, 'demo-drafter');
        // publishDraft (FR-011 server-side re-validation, FR-013: petition state).
        const { petitionId, opensAt, closesAt } = _demoService.publishDraft(draftId);
        setState({ phase: 'petition', petitionId, opensAt, closesAt, jurisdiction: draft.jurisdiction });
      } catch (err: unknown) {
        const e = err as { code?: string; errors?: Array<{ field: string; code: string; message: string }> };
        if (e.code === 'VALIDATION_FAILED' && Array.isArray(e.errors)) {
          setState({ phase: 'error', errors: e.errors });
        } else if (e.code === 'NAME_COLLISION') {
          setState({
            phase: 'error',
            errors: [{ field: 'name', code: 'NAME_COLLISION', message: t.petitions.collisionName }],
          });
        } else if (e.code === 'EMBLEM_COLLISION') {
          setState({
            phase: 'error',
            errors: [{ field: 'emblem', code: 'EMBLEM_COLLISION', message: t.petitions.collisionEmblem }],
          });
        } else if (e.code === 'COOLDOWN_ACTIVE') {
          const asAny = e as unknown as { reopensAt?: number };
          setState({
            phase: 'error',
            errors: [
              {
                field: 'draft',
                code: 'COOLDOWN_ACTIVE',
                message: t.petitions.cooldownActive(asAny.reopensAt ?? 0),
              },
            ],
          });
        } else {
          setState({
            phase: 'error',
            errors: [{ field: 'draft', code: 'UNKNOWN', message: t.errors.generic }],
          });
        }
      }
    },
    [t],
  );

  if (state.phase === 'petition') {
    // Petition view: PetitionProgress + ProvisionalStatus (FR-130).
    const seed = findJurisdictionSeed(state.jurisdiction);
    const denominator = seed?.approximatePopulation ?? 10_000;
    // Threshold: 2% of denominator or 500, whichever is larger.
    const required = Math.max(Math.ceil(denominator * 0.02), 500);
    const now = Math.floor(Date.now() / 1000);

    // FR-018 stub: get the petition and show its progress.
    const petition = _demoStore.findPetitionById(state.petitionId) as { endorsements?: number } | null;
    const endorsements = petition?.endorsements ?? 0;

    return (
      <>
        <h1>{t.petitions.progressTitle}</h1>
        <p data-testid="petition-started-notice">{t.petitions.petitionStarted}</p>

        <PetitionProgress
          endorsements={endorsements}
          required={required}
          opensAt={state.opensAt}
          closesAt={state.closesAt}
          now={now}
        />

        {/* ProvisionalStatus (FR-130): honest membership cap display.
            Party is provisional (no legal registration verified yet).
            PrivacyStatus NOT rendered — no authenticated session in demo. */}
        <ProvisionalStatus
          memberCount={0}
          provisional={true}
          cap={PROVISIONAL_MEMBER_CAP}
        />
      </>
    );
  }

  return (
    <>
      <EightPillarForm
        onPublish={handlePublish}
        serviceErrors={state.phase === 'error' ? state.errors : []}
      />
    </>
  );
}
