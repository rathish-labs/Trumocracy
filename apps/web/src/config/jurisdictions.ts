/**
 * Jurisdiction seed data for the party-creation form.
 *
 * SEED DATA — NOT PRODUCTION REGISTRY.
 * This is a small, curated set of real region codes and approximate
 * eligible-population denominators for demo and development use. In production,
 * this table is replaced by a live registry service (DES-007, FR-009).
 *
 * Population figures are approximations for demo purposes only and are NOT
 * suitable for use as the official denominator in any real petition computation.
 * The production denominator is computed from the population oracle per DES-010.
 *
 * Region code format: ISO 3166-1 alpha-2 country / admin1 / admin2 (region.js).
 */

export interface JurisdictionSeed {
  /** Region code — e.g. "IN/KA/BLR" */
  regionId: string;
  /** Human-readable label for display in the form. */
  label: string;
  /**
   * Approximate eligible-population denominator.
   * Used for demo petition-threshold computation only.
   * Production: replaced by the DES-007 population oracle.
   */
  approximatePopulation: number;
}

/**
 * Seed jurisdictions — pilot regions only (Gate-1 disposition: one pilot jurisdiction first).
 *
 * APPROVER NOTE: extending this list to additional jurisdictions requires a
 * Gate-1 pilot disposition review per CON-005 (per-jurisdiction legal review
 * before enablement). Do not add jurisdictions without that review.
 */
export const JURISDICTION_SEEDS: JurisdictionSeed[] = [
  {
    regionId: 'IN/KA',
    label: 'Karnataka, India',
    approximatePopulation: 67_000_000,
  },
  {
    regionId: 'IN/KA/BLR',
    label: 'Bengaluru, Karnataka, India',
    approximatePopulation: 12_500_000,
  },
  {
    regionId: 'IN/MH',
    label: 'Maharashtra, India',
    approximatePopulation: 125_000_000,
  },
  {
    regionId: 'IN/MH/MUM',
    label: 'Mumbai, Maharashtra, India',
    approximatePopulation: 20_700_000,
  },
  {
    regionId: 'IN/TN',
    label: 'Tamil Nadu, India',
    approximatePopulation: 77_000_000,
  },
];

/**
 * Look up a seed by regionId (exact match).
 * Returns null if the regionId is not in the seed list.
 */
export function findJurisdictionSeed(regionId: string): JurisdictionSeed | null {
  return JURISDICTION_SEEDS.find((j) => j.regionId === regionId) ?? null;
}
