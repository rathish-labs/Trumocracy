'use client';

/**
 * The eight-pillar drafting form (US-0014/US-0015, FR-011).
 *
 * Validation is `validateVision()` from `@trumocracy/protocol`, not a copy of it. That
 * matters twice over: the rule is the same one the rest of the system enforces, and — more
 * importantly — the protocol's rule is deliberately blunt. It checks that every pillar is
 * present and substantial; it does **not** judge what any of them says. A protocol that
 * judged political content would be a political actor (ADR-013 §4), so this form must not
 * grow a "quality" check either.
 *
 * Accessibility: every field has a real `<label>`, errors are attached with
 * `aria-describedby` and `aria-invalid`, and the error summary is focusable so a screen
 * reader lands on it after a failed submit (WCAG 2.2 AA 3.3.1, 3.3.3).
 */
import { useMemo, useRef, useState, type FormEvent } from 'react';
import { PILLARS } from '@trumocracy/protocol';
import { validateVision } from '@trumocracy/sdk';
import { useT } from '@/i18n/LocaleProvider';

const MIN_PILLAR_CHARS = 280;

export interface EightPillarFormProps {
  initialName?: string;
  initialJurisdiction?: string;
  initialPillars?: Partial<Record<string, string>>;
  onPublish?: (vision: { name: string; jurisdiction: string; pillars: Record<string, string> }) => void;
}

export function EightPillarForm({
  initialName = '',
  initialJurisdiction = '',
  initialPillars = {},
  onPublish,
}: EightPillarFormProps) {
  const t = useT();
  const [name, setName] = useState(initialName);
  const [jurisdiction, setJurisdiction] = useState(initialJurisdiction);
  const [pillars, setPillars] = useState<Record<string, string>>(() =>
    Object.fromEntries(PILLARS.map((p) => [p, initialPillars[p] ?? ''])),
  );
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  // Live, on every keystroke — a citizen writing eight essays deserves to know where they
  // stand without pressing a button and being told off (US-0015).
  const result = useMemo(
    () => validateVision({ name, jurisdiction, pillars }),
    [name, jurisdiction, pillars],
  );

  const errorFor = (field: string) => result.errors.find((e) => e.field === field);
  const completed = PILLARS.filter((p) => (pillars[p] ?? '').trim().length >= MIN_PILLAR_CHARS).length;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (!result.valid) {
      summaryRef.current?.focus();
      return;
    }
    onPublish?.({ name, jurisdiction, pillars });
  };

  const showErrors = submitted;

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby="pillar-form-title">
      <h1 id="pillar-form-title">{t.petitions.newTitle}</h1>
      <p className="lead">{t.petitions.newLead}</p>

      {showErrors && !result.valid ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          data-testid="error-summary"
          className="error-summary"
        >
          <h2>{t.a11y.errorSummary(result.errors.length)}</h2>
          <ul>
            {result.errors.map((e) => (
              <li key={e.field}>
                <a href={`#field-${e.field.replace('.', '-')}`}>{e.message}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="field">
        <label htmlFor="field-name">{t.petitions.nameLabel}</label>
        <p id="help-name" className="help">
          {t.petitions.nameHelp}
        </p>
        <input
          id="field-name"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-describedby={showErrors && errorFor('name') ? 'help-name error-name' : 'help-name'}
          aria-invalid={showErrors && Boolean(errorFor('name'))}
        />
        {showErrors && errorFor('name') ? (
          <p id="error-name" className="error" data-testid="error-name">
            {errorFor('name')?.message}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label htmlFor="field-jurisdiction">{t.petitions.jurisdictionLabel}</label>
        <p id="help-jurisdiction" className="help">
          {t.petitions.jurisdictionHelp}
        </p>
        <input
          id="field-jurisdiction"
          name="jurisdiction"
          type="text"
          value={jurisdiction}
          onChange={(e) => setJurisdiction(e.target.value.toUpperCase())}
          aria-describedby={
            showErrors && errorFor('jurisdiction') ? 'help-jurisdiction error-jurisdiction' : 'help-jurisdiction'
          }
          aria-invalid={showErrors && Boolean(errorFor('jurisdiction'))}
        />
        {showErrors && errorFor('jurisdiction') ? (
          <p id="error-jurisdiction" className="error" data-testid="error-jurisdiction">
            {errorFor('jurisdiction')?.message}
          </p>
        ) : null}
      </div>

      <h2>{t.petitions.pillarsTitle}</h2>
      <p aria-live="polite" data-testid="completeness" className="completeness">
        {t.petitions.completeness(completed, PILLARS.length)}
      </p>

      {PILLARS.map((pillar) => {
        const field = `pillars.${pillar}`;
        const id = `field-pillars-${pillar}`;
        const error = errorFor(field);
        const value = pillars[pillar] ?? '';
        return (
          <div className="field" key={pillar}>
            <label htmlFor={id}>{t.petitions.pillarNames[pillar]}</label>
            <p id={`help-${pillar}`} className="help">
              {t.petitions.pillarHelp}
            </p>
            <textarea
              id={id}
              name={field}
              rows={6}
              value={value}
              onChange={(e) => setPillars((prev) => ({ ...prev, [pillar]: e.target.value }))}
              aria-describedby={
                showErrors && error ? `help-${pillar} count-${pillar} error-${pillar}` : `help-${pillar} count-${pillar}`
              }
              aria-invalid={showErrors && Boolean(error)}
            />
            <p id={`count-${pillar}`} className="help" data-testid={`count-${pillar}`}>
              {t.common.charactersSoFar(value.trim().length, MIN_PILLAR_CHARS)}
            </p>
            {showErrors && error ? (
              <p id={`error-${pillar}`} className="error" data-testid={`error-pillars-${pillar}`}>
                {error.message}
              </p>
            ) : null}
          </div>
        );
      })}

      <button type="submit" className="button button--primary">
        {t.petitions.publish}
      </button>
      {showErrors && !result.valid ? (
        <p className="help" data-testid="publish-blocked">
          {t.petitions.publishBlocked}
        </p>
      ) : null}
    </form>
  );
}
