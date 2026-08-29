'use client';

/**
 * PartyMembership — the join / leave / counting flow for the party directory.
 *
 * What this surface promises, and how it keeps each promise honest:
 *
 * - FR-020 join without permission: the Join action calls
 *   PartyCreationService.joinParty(), which holds no eligibility verifier —
 *   joining is not a counting action and structurally cannot reach the seam.
 *   No approval UI exists on this surface, by design.
 * - One active party at a time (FR-064 invariant, explicit-leave form): a
 *   second join is refused by the service; this component shows the refusal
 *   plainly, naming the current party and the way out (leave first).
 * - FR-022 leave at will: one action, immediate, no approval step, no penalty.
 * - Append-only history: every join and leave is shown, active or inactive,
 *   with the plain statement that nothing is ever deleted.
 * - FR-130 provisional cap: each card carries the cap state and the BR-020
 *   platform-vs-legal disclosure (same keys as ProvisionalStatus).
 * - FR-122/FR-123 join ≠ counting: the member sees an honest counting status.
 *   The one counting action here — contributing to the party's official
 *   strength number (FR-123(a)) — calls the IEligibilityVerifier seam. When
 *   the member is open-tier (not ID-verified), the FR-131 clause (d) notice
 *   is rendered BEFORE the refusal line and carries no dismiss control.
 *
 * PrivacyStatus is NOT rendered: the demo has no authenticated session, so the
 * DES-094 clause 1 self-view contract would return null; rendering it would
 * imply a session-backed guarantee that does not exist (Doc 06 §7 pattern).
 *
 * Traces: FR-020, FR-021, FR-022, FR-064, FR-122, FR-123, FR-130, FR-131(d),
 *         BR-003, BR-020, DES-095 §10.13.2(a), DES-098 pattern.
 */
import { useCallback, useReducer, useState } from 'react';
import { useT } from '@/i18n/LocaleProvider';
import type { PartyCreationService } from '@trumocracy/sdk';

/**
 * Structural seam type: any IEligibilityVerifier backing fits (v1 conventional
 * or v2 ZK) — the component never knows which one it was handed (ADR-024).
 */
export interface EligibilityVerifierLike {
  verifyEligibility(
    memberId: string,
    regionId: string,
    scope: string,
  ): { eligible: boolean; memberId: string; scope: string; reason?: string };
}

export interface PartySummary {
  partyId: string;
  name: string;
  emblem: string;
}

export interface PartyMembershipProps {
  service: PartyCreationService;
  verifier: EligibilityVerifierLike;
  /** The visitor's pseudonym. Demo: a fixed value; production: the session pseudonym. */
  memberPseudonym: string;
  parties: PartySummary[];
}

type Flash =
  | { kind: 'joined' | 'left' }
  | { kind: 'error'; message: string }
  | null;

const formatDate = (unixSeconds: number) => new Date(unixSeconds * 1000).toLocaleDateString();

export function PartyMembership({ service, verifier, memberPseudonym, parties }: PartyMembershipProps) {
  const t = useT();
  // The service is an external mutable store; bump forces a re-read after actions.
  const [, bump] = useReducer((n: number) => n + 1, 0);
  const [flash, setFlash] = useState<Flash>(null);
  // FR-131(d): once shown, the notice stays — there is no dismiss control.
  const [openTierNotice, setOpenTierNotice] = useState(false);

  const nameOf = useCallback(
    (partyId: string) => parties.find((p) => p.partyId === partyId)?.name ?? partyId,
    [parties],
  );

  const handleJoin = useCallback(
    (partyId: string) => {
      try {
        // FR-020: no approval, no fee, no veto — and no verifier on this path.
        service.joinParty(partyId, memberPseudonym);
        setFlash({ kind: 'joined' });
      } catch (err: unknown) {
        const e = err as { code?: string; currentPartyId?: string; cap?: number };
        if (e.code === 'ALREADY_MEMBER_ELSEWHERE' && e.currentPartyId) {
          setFlash({
            kind: 'error',
            message: t.parties.alreadyMemberElsewhere(nameOf(e.currentPartyId)),
          });
        } else if (e.code === 'PROVISIONAL_CAP_REACHED') {
          setFlash({
            kind: 'error',
            message: t.petitions.provisionalCapHelpReached(e.cap ?? 0),
          });
        } else {
          setFlash({ kind: 'error', message: t.errors.generic });
        }
      }
      bump();
    },
    [service, memberPseudonym, t, nameOf],
  );

  const handleLeave = useCallback(
    (partyId: string) => {
      try {
        // FR-022: immediate, no exit approval, no penalty.
        service.leaveParty(partyId, memberPseudonym);
        setFlash({ kind: 'left' });
      } catch {
        setFlash({ kind: 'error', message: t.errors.generic });
      }
      bump();
    },
    [service, memberPseudonym, t],
  );

  const handleCountMe = useCallback(
    (partyId: string) => {
      try {
        // FR-123(a) — the ONLY counting action on this surface. The verifier is
        // handed to the service per-call; join/leave above cannot reach it.
        service.contributeToStrength(partyId, memberPseudonym, verifier);
        setFlash(null);
      } catch (err: unknown) {
        const e = err as { code?: string };
        if (e.code === 'NOT_COUNTING_ELIGIBLE') {
          // FR-131 clause (d): the notice is shown before the refusal and is
          // non-dismissable. State change first so the notice renders above
          // the refusal line it explains.
          setOpenTierNotice(true);
        } else {
          setFlash({ kind: 'error', message: t.errors.generic });
        }
      }
      bump();
    },
    [service, memberPseudonym, verifier, t],
  );

  const active = service.activeMembership(memberPseudonym);
  const history = service.membershipHistory(memberPseudonym);

  return (
    <section aria-label={t.parties.title}>
      <p>{t.parties.onePartyRule}</p>

      {flash?.kind === 'joined' && (
        <p role="status" data-testid="membership-joined">
          {t.parties.joined}
        </p>
      )}
      {flash?.kind === 'left' && (
        <p role="status" data-testid="membership-left">
          {t.parties.left}
        </p>
      )}
      {flash?.kind === 'error' && (
        <p role="alert" className="notice notice--warning" data-testid="membership-error">
          {flash.message}
        </p>
      )}

      {/* ─── Party cards ─── */}
      <ul className="party-list">
        {parties.map(({ partyId, name, emblem }) => {
          const status = service.partyStatus(partyId) as {
            memberCount: number;
            officialStrength: number;
            provisional: boolean;
            cap: number | null;
            capReached: boolean;
          };
          const isMemberHere = active?.partyId === partyId;
          return (
            <li key={partyId}>
              <article className="card" data-testid={`party-card-${partyId}`}>
                <h2>
                  <span aria-hidden="true">{emblem}</span> {name}
                </h2>
                {/* Joining is not counting: both figures shown, side by side. */}
                <p data-testid={`party-members-${partyId}`}>
                  {t.parties.memberCount(status.memberCount)}
                </p>
                <p data-testid={`party-strength-${partyId}`}>
                  {t.parties.officialStrength(status.officialStrength)}
                </p>

                {status.provisional && status.cap !== null && (
                  <div data-testid={`party-provisional-${partyId}`}>
                    <p className="notice notice--provisional">{t.petitions.provisionalLabel}</p>
                    <p>
                      {status.capReached
                        ? t.petitions.provisionalCapHelpReached(status.cap)
                        : t.petitions.provisionalCapHelpOpen(status.cap)}
                    </p>
                  </div>
                )}

                {isMemberHere ? (
                  <div data-testid={`membership-panel-${partyId}`}>
                    <p className="notice" data-testid={`member-badge-${partyId}`}>
                      {t.parties.memberBadge}
                    </p>
                    <button type="button" onClick={() => handleLeave(partyId)}>
                      {t.parties.leave}
                    </button>
                    <p>{t.parties.leaveHelp}</p>
                  </div>
                ) : (
                  <div>
                    <h3>{t.parties.joinTitle}</h3>
                    <p>{t.parties.joinLead}</p>
                    <p>{t.parties.joinEqual}</p>
                    <p data-testid={`join-privacy-${partyId}`}>{t.parties.joinPrivate}</p>
                    <button type="button" onClick={() => handleJoin(partyId)}>
                      {t.parties.joinConfirm}
                    </button>
                  </div>
                )}

                {/* BR-020: on every party status view. */}
                <aside className="disclosure" data-testid={`br020-${partyId}`}>
                  <h3>{t.petitions.platformNotLegalTitle}</h3>
                  <p>{t.petitions.platformNotLegalBody}</p>
                </aside>
              </article>
            </li>
          );
        })}
      </ul>

      {/* ─── Counting status for the current membership (FR-122/FR-123) ─── */}
      {active && (
        <section aria-labelledby="counting-title" className="card" data-testid="counting-section">
          <h2 id="counting-title">{t.parties.countingTitle}</h2>
          {service.countingStatus(active.partyId, memberPseudonym).counted ? (
            <p data-testid="counting-counted">{t.parties.countingCountedBody}</p>
          ) : (
            <>
              <p data-testid="counting-open">{t.parties.countingOpenBody}</p>

              {/* FR-131 clause (d) notice: rendered ABOVE the action so it is
                  seen before the refusal; no dismiss control exists. */}
              {openTierNotice && (
                <section
                  role="alert"
                  aria-labelledby="open-tier-notice-title"
                  className="notice notice--warning"
                  data-testid="open-tier-notice"
                >
                  <h3 id="open-tier-notice-title">{t.parties.openTierNoticeTitle}</h3>
                  <p>{t.parties.openTierNoticeCurrent}</p>
                  <p>{t.parties.openTierNoticeNeedsId}</p>
                  <p>{t.parties.openTierNoticeWhatDoesNotCount}</p>
                  <p>{t.parties.openTierNoticeHowTo}</p>
                  <p data-testid="open-tier-refused">{t.parties.openTierNoticeRefused}</p>
                </section>
              )}

              <button type="button" onClick={() => handleCountMe(active.partyId)}>
                {t.parties.countMe}
              </button>
            </>
          )}
        </section>
      )}

      {/* ─── Append-only membership history ─── */}
      {history.length > 0 && (
        <section
          aria-labelledby="membership-history-title"
          className="card"
          data-testid="membership-history"
        >
          <h2 id="membership-history-title">{t.parties.membershipHistoryTitle}</h2>
          <p>{t.parties.membershipHistoryLead}</p>
          <ol>
            {history.map((row, i) => (
              <li key={i} data-testid={`history-row-${i}`}>
                <span>{nameOf(row.partyId)}</span>{' '}
                <span>{t.parties.historyJoined(formatDate(row.joinedAt))}</span>{' '}
                {row.leftAt !== null && <span>{t.parties.historyLeft(formatDate(row.leftAt))}</span>}{' '}
                <span data-testid={`history-state-${i}`}>
                  {row.active ? t.parties.historyActive : t.parties.historyInactive}
                </span>
              </li>
            ))}
          </ol>
        </section>
      )}
    </section>
  );
}
