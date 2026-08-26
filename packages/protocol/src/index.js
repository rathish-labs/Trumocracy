/**
 * @trumocracy/protocol — pure, dependency-free reference implementation of the rules.
 *
 * Nothing in this package may import a chain client, a network library or a UI framework
 * (enforced by tools/dep-guard). It exists so that (a) the rules can be tested in
 * milliseconds, and (b) the deployed contracts can be differentially tested against an
 * independent implementation of the same specification.
 */
export * from './constants.js';
export * from './governance.js';
export * from './regions.js';
export * from './flags.js';
export * from './party.js';
// party.js new exports: validateDraft, applyCharterDefaults, charterFingerprint,
// normalizeCollisionKey, NON_VIOLENCE_CLAUSE, PROVISIONAL_MEMBER_CAP, EMBLEM,
// REPETITION_COOLDOWN_SECONDS — all additive, picked up via '*' above.
