/**
 * Region codes (ADR-004 §1).
 *
 * A region is a path in a versioned administrative hierarchy — never a coordinate, never
 * an address. The finest granularity the protocol can express is the electoral ward,
 * because that is the finest granularity an election needs. There is deliberately no way
 * to represent anything more precise; the data model cannot leak what it cannot hold.
 */
import { MIN_ANONYMITY_SET, MIN_ISSUERS_PER_REGION } from './constants.js';

export const REGION_LEVELS = Object.freeze(['country', 'admin1', 'admin2', 'admin3', 'ward']);

const SEGMENT_RE = /^[A-Z0-9][A-Z0-9-]{0,15}$/;

export class RegionError extends Error {
  constructor(code, message) {
    super(message ?? code);
    this.code = code;
  }
}

/**
 * Parse and validate a region path such as "IN/KA/BLR/BLR-S/W-152".
 * Returns { schemeVersion, segments, level, path }.
 */
export function parseRegion(path, schemeVersion = 1) {
  if (typeof path !== 'string' || path.length === 0) {
    throw new RegionError('EMPTY_REGION', 'region path must be a non-empty string');
  }
  if (path.includes('//') || path.startsWith('/') || path.endsWith('/')) {
    throw new RegionError('MALFORMED_REGION', `malformed region path: ${path}`);
  }
  const segments = path.split('/');
  if (segments.length > REGION_LEVELS.length) {
    throw new RegionError('REGION_TOO_DEEP', `region has ${segments.length} levels; max is ${REGION_LEVELS.length} (ward)`);
  }
  for (const seg of segments) {
    if (!SEGMENT_RE.test(seg)) {
      throw new RegionError('BAD_SEGMENT', `invalid region segment "${seg}" — expected uppercase alphanumeric/dash, ≤16 chars`);
    }
  }
  if (!/^[A-Z]{2}$/.test(segments[0])) {
    throw new RegionError('BAD_COUNTRY', `first segment must be an ISO 3166-1 alpha-2 country code, got "${segments[0]}"`);
  }
  if (!Number.isInteger(schemeVersion) || schemeVersion < 1) {
    throw new RegionError('BAD_SCHEME_VERSION', 'schemeVersion must be a positive integer');
  }
  return {
    schemeVersion,
    segments,
    level: REGION_LEVELS[segments.length - 1],
    depth: segments.length,
    path: segments.join('/'),
  };
}

/** The canonical string that is hashed to produce a regionId. Keep in lockstep with Solidity. */
export function regionPreimage(path, schemeVersion = 1) {
  const r = parseRegion(path, schemeVersion);
  return `v${r.schemeVersion}:${r.path}`;
}

/** Ancestors, nearest first: "IN/KA/BLR" -> ["IN/KA", "IN"]. */
export function ancestors(path, schemeVersion = 1) {
  const r = parseRegion(path, schemeVersion);
  const out = [];
  for (let i = r.segments.length - 1; i > 0; i--) out.push(r.segments.slice(0, i).join('/'));
  return out;
}

export function isWithin(child, parent, schemeVersion = 1) {
  const c = parseRegion(child, schemeVersion);
  const p = parseRegion(parent, schemeVersion);
  if (p.depth > c.depth) return false;
  return p.segments.every((seg, i) => c.segments[i] === seg);
}

/**
 * Anonymity-set guard (NFR-PRIV-02).
 *
 * A ward with 40 verified residents provides no anonymity, and publishing an action scoped
 * to it would identify the actor by elimination. Rather than refusing to serve small
 * regions — which would exclude exactly the rural and minority communities this platform is
 * for — we escalate the action's scope to the nearest ancestor that is large enough.
 *
 * @param {string} path
 * @param {(regionPath: string) => number} residentCountOf
 * @returns {{ regionPath: string, escalated: boolean, size: number } | null}
 */
export function resolveAnonymityScope(path, residentCountOf, minSet = MIN_ANONYMITY_SET) {
  const own = residentCountOf(path) ?? 0;
  if (own >= minSet) return { regionPath: path, escalated: false, size: own };
  for (const anc of ancestors(path)) {
    const n = residentCountOf(anc) ?? 0;
    if (n >= minSet) return { regionPath: anc, escalated: true, size: n };
  }
  return null; // even the country has too few verified residents — the action must not publish
}

/**
 * Protocol invariant (ADR-003): a region must accept at least two personhood issuers, and
 * at least one of them must not be state-operated. A jurisdiction where the state is the
 * only accepted issuer is a jurisdiction where the state decides who is a person.
 */
export function validateIssuerSet(issuers) {
  const active = issuers.filter((i) => i.active !== false);
  if (active.length < MIN_ISSUERS_PER_REGION) {
    return { valid: false, reason: 'TOO_FEW_ISSUERS', count: active.length, required: MIN_ISSUERS_PER_REGION };
  }
  if (!active.some((i) => i.stateOperated === false)) {
    return { valid: false, reason: 'NO_NON_STATE_ISSUER', count: active.length };
  }
  return { valid: true, reason: 'OK', count: active.length };
}
