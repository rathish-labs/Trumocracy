'use client';

/**
 * Site header and primary navigation.
 *
 * The vocabulary here is a product decision with a political consequence: a citizen should
 * never meet the words "wallet", "gas", "token" or "sign a transaction" on the way to
 * supporting a party. Jargon selects for an existing crypto demographic, and that
 * demographic is not the electorate (ADR-012 §1).
 */
import Link from 'next/link';
import { useLocale, useT } from '@/i18n/LocaleProvider';
import { localeCodes } from '@/i18n';
import { useFlag, FLAG } from '@/config/flags';

export function SiteHeader() {
  const t = useT();
  const { locale, setLocale } = useLocale();
  // /verify is flag-gated off in the public build (DECISIONS-2026-09-08-VERIFY-PAGE.md §5.1):
  // the nav must not point a citizen at a route that only shows an honesty placeholder there.
  const enrolmentUiOn = useFlag(FLAG.ENROLMENT_UI);
  // Candidate selection ships dark behind the elections flag (dev/staging on; prod off).
  const electionsOn = useFlag(FLAG.ELECTIONS);

  return (
    <header className="site-header">
      {/* The product name is a proper noun and is deliberately not translated. */}
      <Link href="/" className="site-header__brand">
        Trumocracy
      </Link>

      <nav aria-label={t.nav.home}>
        <ul className="site-header__nav">
          <li>
            <Link href="/parties/">{t.nav.parties}</Link>
          </li>
          <li>
            <Link href="/petitions/new/">{t.nav.startAParty}</Link>
          </li>
          {enrolmentUiOn && (
            <li>
              <Link href="/verify/">{t.nav.verify}</Link>
            </li>
          )}
          {electionsOn && (
            <li>
              <Link href="/candidates/">{t.nav.candidates}</Link>
            </li>
          )}
        </ul>
      </nav>

      <label className="site-header__locale">
        <span className="visually-hidden">{t.common.language}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as typeof locale)}
          data-testid="locale-select"
        >
          {localeCodes.map((code) => (
            <option key={code} value={code}>
              {code.toUpperCase()}
            </option>
          ))}
        </select>
      </label>
    </header>
  );
}
