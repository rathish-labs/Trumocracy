'use client';

/**
 * Live petition progress (US-0018, FR-017).
 *
 * Every number on this screen comes from `petitionView()` in `@trumocracy/sdk`, which
 * delegates to `@trumocracy/protocol` — the same reference implementation the contracts are
 * differentially tested against (DES-045). The component performs **no arithmetic of its
 * own**, deliberately: "312 more supporters needed" is a governance fact, and a React
 * component that computes it independently is a second opinion about whether a party gets
 * to exist.
 */
import { petitionView } from '@trumocracy/sdk';
import { useT } from '@/i18n/LocaleProvider';
import { ProgressMeter } from './ProgressMeter';

export interface PetitionProgressProps {
  endorsements: number | bigint;
  required: number | bigint;
  opensAt: number | bigint;
  closesAt: number | bigint;
  /** Injected so the component is deterministic under test and under a frozen clock. */
  now?: number;
  binding?: 'population' | 'verified-residents' | 'absolute-floor';
}

export function PetitionProgress({ binding, ...args }: PetitionProgressProps) {
  const t = useT();
  const view = petitionView(args);

  return (
    <section aria-labelledby="petition-progress-title" className="card">
      <h2 id="petition-progress-title">{t.petitions.progressTitle}</h2>

      <ProgressMeter
        percent={view.percent}
        label={t.a11y.progressLabel(view.percent)}
        valueText={t.petitions.percentReady(view.percent)}
      />

      <dl className="stats">
        <div className="stats__item">
          <dt>{t.petitions.supporters(view.endorsements)}</dt>
          <dd data-testid="endorsements">{view.endorsements.toLocaleString()}</dd>
        </div>
        <div className="stats__item">
          <dt>{t.petitions.needed(view.required)}</dt>
          <dd data-testid="required">{view.required.toLocaleString()}</dd>
        </div>
        <div className="stats__item">
          <dt>{t.petitions.remaining(view.remaining)}</dt>
          <dd data-testid="remaining">{view.remaining.toLocaleString()}</dd>
        </div>
      </dl>

      {/* The state word is text, not a coloured dot: "closed" and "open" must be
          distinguishable without perceiving colour. */}
      <p data-testid="petition-state" className="state">
        {view.met
          ? t.petitions.met
          : view.state === 'expired'
            ? t.petitions.closed
            : t.petitions.timeLeft(view.daysRemaining, view.hoursRemaining)}
      </p>

      {binding ? (
        <details className="disclosure">
          <summary>{t.petitions.whyThisNumber}</summary>
          <p>{t.petitions.whyThisNumberBody(binding)}</p>
        </details>
      ) : null}
    </section>
  );
}
