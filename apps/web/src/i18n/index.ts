/**
 * Locale registry.
 *
 * Two locales ship from the first commit, and one of them is right-to-left. That is the
 * minimum that makes the layout honest: with only LTR locales, direction bugs stay
 * invisible until a launch language exposes all of them at once (ADR-012 §6). Doc 03 §10.8
 * requires ≥8 languages including ≥1 RTL at launch; the scaffolding here is what those
 * translations drop into.
 */
import { en, type Messages } from './en';
import { ar } from './ar';

export const locales = { en, ar } as const;

export type Locale = keyof typeof locales;
export type { Messages };

export const localeCodes = Object.keys(locales) as Locale[];
export const defaultLocale: Locale = 'en';

/** Text direction for a locale — drives `<html dir>` and the logical CSS properties. */
export function direction(locale: Locale): 'ltr' | 'rtl' {
  return locales[locale].meta.dir;
}

export function isLocale(value: string | null | undefined): value is Locale {
  return typeof value === 'string' && Object.prototype.hasOwnProperty.call(locales, value);
}

export function messagesFor(locale: Locale): Messages {
  return locales[locale];
}
