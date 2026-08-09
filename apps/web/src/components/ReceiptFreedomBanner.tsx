'use client';

/**
 * The honesty banner (SDD §13 architectural debt, ADR-006, FR-031/NFR-003).
 *
 * Phase 1 tallies votes in the open. That means a vote is **anonymous but not
 * receipt-free**: nobody can see that a vote was yours, but a person standing over your
 * shoulder can still see what you did on your own screen, and there is no silent override
 * yet. The SDD is explicit that "the client MUST state plainly that Phase-1 votes are
 * anonymous but not receipt-free".
 *
 * So this banner is persistent, not dismissible, and is not softened. A coercion warning a
 * citizen can close is a coercion warning they will close, and the person it protects is
 * the one least able to argue with the person standing next to them.
 *
 * It disappears — automatically, with no code change — the moment `maci_voting` is on.
 */
import { FLAG, useFlag } from '@/config/flags';
import { useT } from '@/i18n/LocaleProvider';

export function ReceiptFreedomBanner({ maciEnabled }: { maciEnabled?: boolean }) {
  const flagOn = useFlag(FLAG.MACI_VOTING);
  const t = useT();
  const receiptFree = maciEnabled ?? flagOn;

  if (receiptFree) return null;

  return (
    <aside
      role="note"
      aria-labelledby="receipt-freedom-title"
      data-testid="not-receipt-free-banner"
      className="banner banner--warning"
    >
      {/* The icon is decorative: the warning is carried by the text and by the border
          pattern, never by colour alone (WCAG 2.2 AA 1.4.1). */}
      <span aria-hidden="true" className="banner__mark">
        !
      </span>
      <div>
        <h2 id="receipt-freedom-title" className="banner__title">
          {t.banner.notReceiptFreeTitle}
        </h2>
        <p className="banner__body">{t.banner.notReceiptFreeBody}</p>
      </div>
    </aside>
  );
}
