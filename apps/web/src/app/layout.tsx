/**
 * Root layout.
 *
 * Two things here are security decisions rather than presentation ones:
 *
 *  - There is no analytics script, no error-reporting SDK, no font CDN and no third-party
 *    origin of any kind. Which party pages a citizen loads is as sensitive as which party
 *    they joined; a system that refuses to store the second and casually beacons the first
 *    has protected nobody (ADR-014 §3, NFR-024).
 *  - `dir` and `lang` come from the locale, set on `<html>`, so an RTL language is not a
 *    late retrofit that leaks layout bugs into the languages that need it most.
 */
import type { ReactNode } from 'react';
import { LocaleProvider } from '@/i18n/LocaleProvider';
import { FlagProvider } from '@/config/flags';
import { SiteHeader } from '@/components/SiteHeader';
import './globals.css';

export const metadata = {
  title: 'Trumocracy',
  description: 'Start a political party. Join one. Have a real say in it.',
  applicationName: 'Trumocracy',
  manifest: '/manifest.webmanifest',
  robots: { index: true, follow: true },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  // Never disable zoom: pinch-to-zoom is how many people with low vision read anything
  // (WCAG 2.2 AA 1.4.4).
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <LocaleProvider>
          <FlagProvider>
            {/* First focusable element on every page — keyboard users should not have to
                tab through the whole header to reach the content (WCAG 2.4.1). */}
            <a className="skip-link" href="#main">
              Skip to the main content
            </a>
            <SiteHeader />
            <main id="main" tabIndex={-1}>
              {children}
            </main>
            <footer className="site-footer">
              <p>
                Trumocracy helps people build and run political parties. It does not run
                government elections, and nothing here is an official election result.
              </p>
            </footer>
          </FlagProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
