'use client';

/**
 * Locale context.
 *
 * The chosen locale lives in `localStorage` only — never on a server, never in a cookie
 * that a request log could correlate. Language preference is a small fact about a person,
 * and small facts about people are how the reading record we refused to build gets built
 * anyway (ADR-014 §3).
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { defaultLocale, direction, isLocale, localeCodes, messagesFor, type Locale, type Messages } from './index';

interface LocaleContextValue {
  locale: Locale;
  dir: 'ltr' | 'rtl';
  t: Messages;
  setLocale: (locale: Locale) => void;
  available: Locale[];
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = 'trumocracy.locale';

export function LocaleProvider({ children, initialLocale }: { children: ReactNode; initialLocale?: Locale }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale ?? defaultLocale);

  useEffect(() => {
    if (initialLocale) return;
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (isLocale(stored)) setLocaleState(stored);
    } catch {
      // Private browsing can refuse storage. An unavailable preference is not an error.
    }
  }, [initialLocale]);

  // Direction is applied to the document, not to a wrapper div, so that native browser
  // behaviour (text selection, caret movement, scrollbar side) follows the language.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.lang = locale;
    document.documentElement.dir = direction(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* preference simply does not persist */
    }
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, dir: direction(locale), t: messagesFor(locale), setLocale, available: localeCodes }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    // Defaulting silently would let a component render untranslated English inside an RTL
    // page and nobody would notice until a screenshot arrived from a pilot.
    throw new Error('useLocale must be used inside <LocaleProvider>');
  }
  return ctx;
}

/** Shorthand for the common case: just the strings. */
export function useT(): Messages {
  return useLocale().t;
}
