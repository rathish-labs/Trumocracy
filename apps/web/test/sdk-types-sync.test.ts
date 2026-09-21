/**
 * UT-0871 — the trumocracy-sdk.d.ts IPartyStore shim stays in sync with the SDK's
 * JSDoc typedef (Doc 06 v2.3.1 cycle-2 ISS-C2-01 guard).
 *
 * apps/web codes against a hand-written .d.ts shim (tsconfig `paths`), not the real
 * JSDoc'd SDK module — so a method added to the SDK interface but not to the shim lets
 * a TypeScript IPartyStore implementation (the DES-097 Postgres backing will be one)
 * typecheck clean and still throw at runtime on the first call the shim never declared.
 * This has drifted twice already (archivePetition arity at v2.2.0; findPetitionsPastClose
 * at v2.3.1). This test makes the next drift a red build instead of a review finding.
 */
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const read = (rel: string): string =>
  readFileSync(fileURLToPath(new URL(rel, import.meta.url)), 'utf8');

/** Property names of a store-seam JSDoc @typedef in the real SDK source. */
function jsdocMembers(file = 'party-creation.js', typedef = 'IPartyStore'): string[] {
  const src = read(`../../../packages/sdk/src/${file}`);
  const start = src.indexOf(`@typedef {Object} ${typedef}`);
  expect(start).toBeGreaterThan(-1);
  const block = src.slice(start, src.indexOf('*/', start));
  // Greedy `.*` reaches the LAST `}` on the line, so nested type braces
  // (e.g. `{function(string): {partyId: string, joinedAt: number}|null}`) parse.
  const names = [...block.matchAll(/@property\s*\{.*\}\s+(\w+)/g)].map((m) => m[1]);
  expect(names.length).toBeGreaterThan(0);
  return names;
}

/** Method names declared inside the member block that follows `header` in the shim. */
function dtsMembers(header: RegExp): string[] {
  const dts = read('../types/trumocracy-sdk.d.ts');
  const match = dts.match(header);
  expect(match).not.toBeNull();
  const from = (match!.index as number) + match![0].length;
  const block = dts.slice(from, dts.indexOf('\n  }', from));
  const names = [...block.matchAll(/^\s*(\w+)\(/gm)].map((m) => m[1]);
  expect(names.length).toBeGreaterThan(0);
  return names;
}

describe('UT-0871 SDK type-shim sync — every .d.ts store seam matches its JSDoc typedef', () => {
  // Extended from IPartyStore-only (Doc 06 §7 item 23 / ISS-C3-01): the proposals and
  // candidate stores carry the same silent-crash drift risk and get the same guard.
  const SEAMS = [
    { file: 'party-creation.js', typedef: 'IPartyStore', klass: 'InMemoryPartyStore' },
    { file: 'proposals.js', typedef: 'IProposalStore', klass: 'InMemoryProposalStore' },
    { file: 'candidates.js', typedef: 'ICandidateStore', klass: 'InMemoryCandidateStore' },
  ] as const;

  for (const seam of SEAMS) {
    it(`${seam.typedef}: interface and class member sets equal the JSDoc typedef member set exactly`, () => {
      const jsdoc = jsdocMembers(seam.file, seam.typedef).sort();
      const iface = dtsMembers(new RegExp(`export interface ${seam.typedef} \\{`)).sort();
      const klass = dtsMembers(new RegExp(`export class ${seam.klass} implements ${seam.typedef} \\{`)).sort();

      // Set equality both ways: a member missing from the shim is the silent-crash
      // drift; a member missing from the JSDoc means the shim promises an API the
      // SDK does not have.
      expect(iface).toEqual(jsdoc);
      expect(klass).toEqual(jsdoc);
    });
  }
});
