#!/usr/bin/env node
/**
 * ADR-011 dependency-direction guard.
 *
 * The monorepo's layering is a security property, not a style preference: the pure
 * `protocol` package is the reference implementation of the rules that the contracts
 * enforce, and it must stay free of chain, network and framework dependencies so it can
 * be differentially tested against the deployed contracts.
 *
 * This check fails CI when a workspace imports outside its allowed set.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..');

/** name -> packages it may depend on (workspace-internal only; '*' = any external) */
const ALLOWED = {
  '@trumocracy/protocol': [],
  // contracts depends on protocol for DIFFERENTIAL TESTS only (dev dependency).
  '@trumocracy/contracts': ['@trumocracy/protocol'],
  '@trumocracy/circuits': [],
  '@trumocracy/sdk': ['@trumocracy/protocol', '@trumocracy/contracts', '@trumocracy/circuits'],
  '@trumocracy/ui': ['@trumocracy/protocol'],
  '@trumocracy/web': ['@trumocracy/protocol', '@trumocracy/sdk', '@trumocracy/ui'],
  '@trumocracy/indexer': ['@trumocracy/protocol', '@trumocracy/contracts'],
  '@trumocracy/relayer': ['@trumocracy/protocol', '@trumocracy/sdk'],
  '@trumocracy/evm-harness': ['@trumocracy/contracts'],
  '@trumocracy/dep-guard': [],
};

/**
 * Packages that must have ZERO runtime dependencies of any kind. `protocol` is the
 * reference implementation — if it grows a dependency on a chain client or a framework,
 * differential testing stops being meaningful.
 */
const PURE = new Set(['@trumocracy/protocol']);

function findPackageJsons(dir, acc = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === 'node_modules' || entry === '.git' || entry.startsWith('.')) continue;
    const full = join(dir, entry);
    if (!statSync(full).isDirectory()) continue;
    const pkg = join(full, 'package.json');
    if (existsSync(pkg)) acc.push(pkg);
    else findPackageJsons(full, acc);
  }
  return acc;
}

const violations = [];
const workspaceRoots = ['packages', 'services', 'apps', 'tools']
  .map((d) => join(ROOT, d))
  .filter((d) => existsSync(d));

const pkgFiles = workspaceRoots.flatMap((d) => findPackageJsons(d));

for (const file of pkgFiles) {
  const pkg = JSON.parse(readFileSync(file, 'utf8'));
  const name = pkg.name;
  if (!name) continue;
  const allowed = ALLOWED[name];
  if (allowed === undefined) {
    violations.push(`${name}: not declared in tools/dep-guard/check.mjs ALLOWED map (add it deliberately)`);
    continue;
  }
  const deps = { ...(pkg.dependencies ?? {}), ...(pkg.peerDependencies ?? {}) };
  const depNames = Object.keys(deps);

  if (PURE.has(name) && depNames.length > 0) {
    violations.push(`${name} MUST stay dependency-free (ADR-011) but declares: ${depNames.join(', ')}`);
  }

  for (const dep of depNames) {
    if (!dep.startsWith('@trumocracy/')) continue;
    if (!allowed.includes(dep)) {
      violations.push(`${name} may not depend on ${dep} (allowed: ${allowed.join(', ') || 'none'})`);
    }
  }
}

if (violations.length > 0) {
  console.error('ADR-011 dependency-direction violations:\n');
  for (const v of violations) console.error('  ✗ ' + v);
  console.error(`\n${violations.length} violation(s).`);
  process.exit(1);
}

console.log(`dep-guard: ${pkgFiles.length} workspace package(s) checked — layering OK`);
