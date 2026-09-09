'use client';

/**
 * Personhood enrolment — DESIGNED screen, NOT built (FR-001..FR-005, FR-132 §(b), DES-100,
 * ADR-003).
 *
 * This file implements the enrolment screen as it is DESIGNED to work once built: the issuer
 * list presented as a genuine choice, each entry labelled government-run or independent
 * (the protocol enforces that at least one accepted issuer in a region is never
 * state-operated), and a verify-and-discard flow where only a proof — never the document —
 * is meant to leave the device.
 *
 * That design is not yet true in code. Enrolment is unbuilt
 * (`StubIdDocumentChecker.IS_INSECURE_MOCK()` returns `true`, Doc 06 §7) and the Phase-1
 * vendor adapter is blocked on CON-015 (legal opinion, not started). A public surface MUST
 * NOT state an unbuilt guarantee as current fact (DECISIONS-2026-09-08-VERIFY-PAGE.md §1),
 * so this route is gated behind the `enrolment_ui` feature flag (off in staging/prod, on in
 * dev only — `packages/protocol/src/flags.js`). With the flag off, the component below never
 * renders: an honest placeholder (DECISIONS §5.3) takes its place instead, stating what
 * exists today (no check at all), what is planned, and what the planned check will and will
 * not do. See DECISIONS-2026-09-08-VERIFY-PAGE.md §5 for the full ruling and rationale.
 */
import { useState } from 'react';
import Link from 'next/link';
import { useT } from '@/i18n/LocaleProvider';
import { useFlag, FLAG } from '@/config/flags';

interface IssuerOption {
  id: string;
  label: string;
  stateOperated: boolean;
}

/**
 * Placeholder set. In a real deployment these come from `PersonhoodRegistry.issuers`,
 * read through the SDK and re-verified against chain state before being shown — an issuer
 * list served only by an indexer would be a way to steer citizens toward a chosen checker.
 */
const ISSUERS: IssuerOption[] = [
  { id: 'epassport-nfc', label: 'Passport or national ID chip, read by your phone', stateOperated: false },
  { id: 'civil-registry', label: 'Your local electoral register', stateOperated: true },
  { id: 'civic-notary', label: 'A verification desk run by a local organisation', stateOperated: false },
];

/**
 * Honesty placeholder (DECISIONS-2026-09-08-VERIFY-PAGE.md §5.3, NORMATIVE text; §5.5 item 3
 * for the markup contract). Renders in place of the enrolment screen whenever `enrolment_ui`
 * is off — i.e. everywhere except `dev`. States what exists today (nothing), what is
 * planned, and what the planned check will and will not do, then routes the reader
 * somewhere they can actually act (`/parties/`).
 */
function VerifyUnavailable() {
  const t = useT();
  return (
    <div data-testid="verify-unavailable">
      <h1>{t.verify.unavailableTitle}</h1>
      <p className="lead">{t.verify.unavailableBody}</p>
      <h2>{t.verify.unavailablePlannedTitle}</h2>
      <ul data-testid="verify-unavailable-planned">
        {t.verify.unavailablePlanned.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        <Link href="/parties/">{t.nav.parties}</Link>
      </p>
    </div>
  );
}

export default function VerifyPage() {
  const t = useT();
  const [chosen, setChosen] = useState<string>(ISSUERS[0].id);
  const enrolmentUiOn = useFlag(FLAG.ENROLMENT_UI);

  if (!enrolmentUiOn) {
    return <VerifyUnavailable />;
  }

  return (
    <>
      <h1>{t.verify.title}</h1>
      <p className="lead">{t.verify.lead}</p>

      <section className="card" aria-labelledby="on-device">
        <h2 id="on-device">{t.verify.onDeviceTitle}</h2>
        <p>{t.verify.onDeviceBody}</p>
      </section>

      <fieldset className="card">
        <legend>
          <h2>{t.verify.chooseIssuer}</h2>
        </legend>
        <p className="help">{t.verify.chooseIssuerHelp}</p>

        {ISSUERS.map((issuer) => (
          <label key={issuer.id} className="field field--choice">
            <input
              type="radio"
              name="issuer"
              value={issuer.id}
              checked={chosen === issuer.id}
              onChange={() => setChosen(issuer.id)}
            />
            <span>{issuer.label}</span>{' '}
            {/* Never colour alone: the state/independent distinction is written out. */}
            <span className="help">
              {issuer.stateOperated ? t.verify.issuerRunByState : t.verify.issuerIndependent}
            </span>
          </label>
        ))}

        <button type="button" className="button" data-testid="start-verification">
          {t.verify.start}
        </button>
      </fieldset>

      <section className="card" aria-labelledby="kept">
        <h2 id="kept">{t.verify.keptTitle}</h2>
        <ul data-testid="kept-list">
          {t.verify.kept.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p>
          <strong>Not kept, anywhere, by anyone:</strong>
        </p>
        <ul data-testid="not-kept-list">
          {t.verify.notKept.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
