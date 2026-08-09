'use client';

/**
 * Home.
 *
 * The promises list is not marketing copy — each line is a property the system actually
 * has, and each is falsifiable. "We do not count your visits" is true because there is no
 * analytics code in this bundle, which anyone can check by reading it (ADR-014 §3).
 */
import Link from 'next/link';
import { useT } from '@/i18n/LocaleProvider';

export default function HomePage() {
  const t = useT();

  return (
    <>
      <h1>{t.home.title}</h1>
      <p className="lead">{t.home.lead}</p>

      <p className="actions">
        <Link className="button" href="/verify/">
          {t.home.cta}
        </Link>
      </p>

      <h2>{t.home.howTitle}</h2>
      <ol className="steps">
        {t.home.steps.map((step) => (
          <li key={step.title} className="card">
            <h3>{step.title}</h3>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>

      <h2>{t.home.promisesTitle}</h2>
      <ul>
        {t.home.promises.map((promise) => (
          <li key={promise}>{promise}</li>
        ))}
      </ul>
    </>
  );
}
