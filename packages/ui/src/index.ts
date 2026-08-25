/**
 * @trumocracy/ui — design system barrel export.
 *
 * Layering (ADR-011, enforced by tools/dep-guard):
 *   @trumocracy/protocol → @trumocracy/ui → @trumocracy/web
 *
 * Components exported from this package implement the design tokens (DES-093, tokens.css)
 * and the normative UI binding clauses (DES-094 PrivacyStatus). Import tokens.css
 * separately for the custom properties:
 *   import '@trumocracy/ui/tokens.css';
 */
export { PrivacyStatus } from './PrivacyStatus.js';
export type { SelfViewToken, PrivacyState, PrivacyStatusProps, BackingProperties } from './PrivacyStatus.js';
