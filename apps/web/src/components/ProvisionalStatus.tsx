'use client';

/**
 * ProvisionalStatus — FR-130 honest live membership status for a provisional party.
 *
 * Displays: current member count, provisional cap, whether the cap is reached,
 * and the BR-020 platform-vs-legal-registration disclosure. The component is
 * honest about what "provisional" means and why the cap exists (anti-capture
 * control per FR-130, D2 ruling 2026-08-25).
 *
 * Privacy note: PrivacyStatus is NOT rendered in this context. The party-creation
 * demo flow has no authenticated session, so no selfView token exists — the
 * DES-094 clause 1 self-view contract would return null, and rendering it would
 * be dishonest (it would imply a session-backed privacy guarantee that is not
 * present). The absence is intentional and noted here per §2.5 of Doc 06.
 *
 * Traces: FR-130, BR-020, DES-094 clause 1, CON-013, D2 ruling 2026-08-25.
 */
import { useT } from '@/i18n/LocaleProvider';
import { PROVISIONAL_MEMBER_CAP } from '@trumocracy/protocol';

export interface ProvisionalStatusProps {
  memberCount: number;
  /** True if this party has not yet completed legal registration (FR-075). */
  provisional: boolean;
  /** Null when the party is legally registered (cap does not apply). */
  cap: number | null;
}

export function ProvisionalStatus({ memberCount, provisional, cap }: ProvisionalStatusProps) {
  const t = useT();

  return (
    <section
      aria-labelledby="provisional-status-title"
      className="card"
      data-testid="provisional-status"
    >
      <h2 id="provisional-status-title">{t.petitions.progressTitle}</h2>

      {/* Member count */}
      <p data-testid="provisional-member-count">
        {t.petitions.supporters(memberCount)}
      </p>

      {/* Provisional status and cap */}
      {provisional && cap !== null ? (
        <div data-testid="provisional-cap-section">
          <p
            className="notice notice--provisional"
            data-testid="provisional-label"
          >
            {t.petitions.provisionalLabel}
          </p>
          {memberCount >= cap ? (
            <p
              className="notice notice--warning"
              data-testid="provisional-cap-reached"
            >
              {t.petitions.provisionalCapHelpReached(cap)}
            </p>
          ) : (
            <p data-testid="provisional-cap-open">
              {t.petitions.provisionalCapHelpOpen(cap)}
            </p>
          )}
        </div>
      ) : (
        <p data-testid="provisional-cap-legal">
          {t.petitions.provisionalCapHelpLegal}
        </p>
      )}

      {/* BR-020 disclosure: platform creation ≠ legal registration.
          Required on every party/petition status view (BR-020). */}
      <aside
        className="disclosure"
        data-testid="br020-disclosure"
        aria-label="Platform registration statement"
      >
        <h3>{t.petitions.platformNotLegalTitle}</h3>
        <p>{t.petitions.platformNotLegalBody}</p>
      </aside>
    </section>
  );
}
