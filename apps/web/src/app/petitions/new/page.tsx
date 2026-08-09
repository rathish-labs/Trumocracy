'use client';

/**
 * Draft a party (FR-010, FR-011, US-0014/US-0015).
 *
 * The form is `EightPillarForm`, which validates through `validateVision()` from the shared
 * protocol package rather than re-implementing the rule. That is deliberate: if this screen
 * had its own idea of "complete", a citizen could be told their draft is ready and then be
 * rejected by the chain — and being told your party was ready when it was not is exactly
 * the class of lie this codebase is built to avoid.
 */
import { EightPillarForm } from '@/components/EightPillarForm';
import { useT } from '@/i18n/LocaleProvider';

export default function NewPetitionPage() {
  const t = useT();

  return (
    <>
      <h1>{t.petitions.newTitle}</h1>
      <p className="lead">{t.petitions.newLead}</p>
      <EightPillarForm />
    </>
  );
}
