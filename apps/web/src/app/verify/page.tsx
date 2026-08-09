'use client';

/**
 * Personhood enrolment (FR-001..FR-005, ADR-003).
 *
 * The issuer list is presented as a genuine choice, with each entry labelled as
 * government-run or independent, because that is the property that matters to someone who
 * has reason to distrust one of them. The protocol enforces that at least one accepted
 * issuer in a region is never state-operated; this screen is where that guarantee becomes
 * something a citizen can actually act on.
 *
 * Nothing on this page uploads anything. The document is read by the device, the proof is
 * computed by the device, and only the proof leaves it.
 */
import { useState } from 'react';
import { useT } from '@/i18n/LocaleProvider';

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

export default function VerifyPage() {
  const t = useT();
  const [chosen, setChosen] = useState<string>(ISSUERS[0].id);

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
