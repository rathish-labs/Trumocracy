'use client';

/**
 * The honesty banner on the vote surface (FR-131, Doc 02 §4.45; DES-098; ADR-006; NFR-003).
 *
 * The normative wording is FR-131 itself — not any string in this codebase, and not the
 * SDD §13 architectural-debt line that once told the client to call Phase-1 votes "anonymous
 * but not receipt-free". That framing is retired (approver directive 2026-08-23,
 * DECISIONS-2026-08-23-V1-V2-SPLIT.md; Doc 09 REL-LIM-18). The v1 truth the banner states:
 *   (a) a v1 vote is cast through conventional authentication and is NOT anonymous, NOT
 *       receipt-free and NOT coercion-resistant;
 *   (b) the platform database CAN see vote direction and party membership in v1;
 *   (c) the ballot where the platform is technically unable to see vote direction arrives
 *       with the Definition-B (v2) privacy layer, and is not on yet.
 * The copy MUST NOT use "private", "anonymous", "receipt-free" or "secure" to describe v1
 * voting behaviour (FR-131, closing sentence) — those words may appear only negated.
 * UT-0887 asserts this against the rendered banner so the retired framing cannot come back.
 * Do not copy warning text out of this file into any document; cite FR-131.
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
