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
import { PILLARS, NON_VIOLENCE_CLAUSE, EMBLEM } from '@trumocracy/protocol';
import { validateVision } from '@trumocracy/sdk';
import { useT } from '@/i18n/LocaleProvider';
import { JURISDICTION_SEEDS } from '@/config/jurisdictions';

const MIN_PILLAR_CHARS = 280;

export interface EightPillarFormProps {
  initialName?: string;
  initialJurisdiction?: string;
  initialPillars?: Partial<Record<string, string>>;
  initialEmblem?: string;
  onPublish?: (draft: {
    name: string;
    jurisdiction: string;
    pillars: Record<string, string>;
    emblem: string;
    charter: { nonViolenceClause: string };
  }) => void;
  /** Service-level errors surfaced by the page (collision, cooldown, etc.). */
  serviceErrors?: Array<{ field: string; code: string; message: string }>;
}

export function EightPillarForm({
  initialName = '',
  initialJurisdiction = '',
  initialPillars = {},
  initialEmblem = '',
  onPublish,
  serviceErrors = [],
}: EightPillarFormProps) {
  const t = useT();
  const [name, setName] = useState(initialName);
  const [jurisdiction, setJurisdiction] = useState(initialJurisdiction);
  const [pillars, setPillars] = useState<Record<string, string>>(() =>
    Object.fromEntries(PILLARS.map((p) => [p, initialPillars[p] ?? ''])),
  );
  const [emblem, setEmblem] = useState(initialEmblem);
  const [submitted, setSubmitted] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  // Live, on every keystroke — a citizen writing eight essays deserves to know where they
  // stand without pressing a button and being told off (US-0015).
  const result = useMemo(
    () => validateVision({ name, jurisdiction, pillars }),
    [name, jurisdiction, pillars],
  );

  // Emblem validation (additive — separate from validateVision per D6).
  const emblemTrimmed = emblem.trim();
  const emblemError: { field: string; code: string; message: string } | null = useMemo(() => {
    if (emblemTrimmed.length === 0) {
      return {
        field: 'emblem',
        code: 'REQUIRED',
        // Message includes the field name so the error summary is self-explanatory.
        message: `${t.petitions.emblemLabel}: ${t.petitions.emblemHelp}`,
      };
    }
    if (emblemTrimmed.length > EMBLEM.MAX_CHARS) {
      return {
        field: 'emblem',
        code: 'TOO_LONG',
        message: `${t.petitions.emblemLabel}: ${t.common.charactersSoFar(emblemTrimmed.length, EMBLEM.MAX_CHARS)}`,
      };
    }
    return null;
  }, [emblemTrimmed, t]);

  // All errors: vision + emblem + any service-level errors (collision, cooldown, etc.).
  const allErrors = useMemo(
    () => [
      ...result.errors,
      ...(emblemError ? [emblemError] : []),
      ...serviceErrors,
    ],
    [result.errors, emblemError, serviceErrors],
  );

  const errorFor = (field: string) => allErrors.find((e) => e.field === field);
  const completed = PILLARS.filter((p) => (pillars[p] ?? '').trim().length >= MIN_PILLAR_CHARS).length;
  const formValid = result.valid && !emblemError;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (!formValid) {
      summaryRef.current?.focus();
      return;
    }
    onPublish?.({
      name,
      jurisdiction,
      pillars,
      emblem: emblemTrimmed,
      charter: { nonViolenceClause: NON_VIOLENCE_CLAUSE },
    });
  };

  const showErrors = submitted || serviceErrors.length > 0;

  return (
    <form onSubmit={handleSubmit} noValidate aria-labelledby="pillar-form-title">
      <h1 id="pillar-form-title">{t.petitions.newTitle}</h1>
      <p className="lead">{t.petitions.newLead}</p>

      {/* BR-020 disclosure: platform creation ≠ legal registration.
          Required on the creation flow (BR-020). */}
      <aside
        className="disclosure"
        data-testid="br020-disclosure-form"
        aria-label="Platform registration statement"
      >
        <h2>{t.petitions.platformNotLegalTitle}</h2>
        <p>{t.petitions.platformNotLegalBody}</p>
      </aside>

      {showErrors && allErrors.length > 0 ? (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          data-testid="error-summary"
          className="error-summary"
        >
          <h2>{t.a11y.errorSummary(allErrors.length)}</h2>
          <ul>
            {allErrors.map((e) => (
              <li key={`${e.field}-${e.code}`}>
                <a href={`#field-${e.field.replace(/\./g, '-')}`}>{e.message}</a>
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

      {/* Emblem field (D3): 1–8 chars after trim. */}
      <div className="field">
        <label htmlFor="field-emblem">{t.petitions.emblemLabel}</label>
        <p id="help-emblem" className="help">
          {t.petitions.emblemHelp}
        </p>
        <input
          id="field-emblem"
          name="emblem"
          type="text"
          value={emblem}
          maxLength={EMBLEM.MAX_CHARS + 2} // a little slack so the user can see they are over
          onChange={(e) => setEmblem(e.target.value)}
          aria-describedby={
            showErrors && emblemError ? 'help-emblem error-emblem' : 'help-emblem'
          }
          aria-invalid={showErrors && Boolean(emblemError)}
          data-testid="field-emblem"
        />
        {showErrors && emblemError ? (
          <p id="error-emblem" className="error" data-testid="error-emblem">
            {emblemError.message}
          </p>
        ) : null}
      </div>

      {/* Jurisdiction select — fed from seed data (production: registry service). */}
      <div className="field">
        <label htmlFor="field-jurisdiction">{t.petitions.jurisdictionSelectLabel}</label>
        <p id="help-jurisdiction" className="help">
          {t.petitions.jurisdictionSelectHelp}
        </p>
        <select
          id="field-jurisdiction"
          name="jurisdiction"
          value={jurisdiction}
          onChange={(e) => setJurisdiction(e.target.value)}
          aria-describedby={
            showErrors && errorFor('jurisdiction')
              ? 'help-jurisdiction error-jurisdiction'
              : 'help-jurisdiction'
          }
          aria-invalid={showErrors && Boolean(errorFor('jurisdiction'))}
          data-testid="field-jurisdiction"
        >
          <option value="">{t.petitions.jurisdictionSelectPlaceholder}</option>
          {JURISDICTION_SEEDS.map((j) => (
            <option key={j.regionId} value={j.regionId}>
              {j.label}
            </option>
          ))}
        </select>
        {showErrors && errorFor('jurisdiction') ? (
          <p id="error-jurisdiction" className="error" data-testid="error-jurisdiction">
            {errorFor('jurisdiction')?.message}
          </p>
        ) : null}
      </div>

      {/* Charter section: non-violence clause (FR-077, CON-013).
          Displayed as fixed, non-editable text within the charter.
          The clause is required by the platform (CON-013) and cannot be removed
          or changed by any party. It is the only content restriction the platform
          imposes (ADR-013 §4). The submitted charter carries it verbatim. */}
      <section aria-labelledby="charter-section-title" className="card">
        <h2 id="charter-section-title">{t.petitions.charterSectionTitle}</h2>
        <p className="help">{t.petitions.charterSectionHelp}</p>

        <div className="field">
          <h3>{t.petitions.nonViolenceTitle}</h3>
          <p className="help">{t.petitions.nonViolenceHelp}</p>
          {/* Non-editable, required platform clause (FR-077).
              Rendered as a <blockquote> so it is semantically distinguished
              from editable content and cannot be mistaken for a form input. */}
          <blockquote
            data-testid="non-violence-clause"
            aria-label={t.petitions.nonViolenceTitle}
            aria-readonly="true"
          >
            {NON_VIOLENCE_CLAUSE}
          </blockquote>
        </div>
      </section>

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
      {showErrors && !formValid ? (
        <p className="help" data-testid="publish-blocked">
          {t.petitions.publishBlocked}
        </p>
      ) : null}
    </form>
  );
}
