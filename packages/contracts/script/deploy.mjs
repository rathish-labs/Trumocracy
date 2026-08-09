#!/usr/bin/env node
/**
 * CLI wrapper around the promotion gate / deployment plan.
 *
 * All logic lives in `../src/promotion-gate.mjs`; this file only reads argv and prints. Keep it
 * that way. A shebang makes a file unimportable under Vite's SSR transform (the transform does
 * not strip `#!`, so the test suite saw `SyntaxError: Invalid or unexpected token`), which is
 * why the gate itself is no longer defined here.
 *
 * This is an entry point with no exports, so it runs on load — no `import.meta.url ===
 * process.argv[1]` guard, which silently compared a POSIX-style `file://` string against a
 * Windows path and made `npm run deploy:plan` print nothing at all on Windows.
 */
import { formatDeploymentPlan } from '../src/promotion-gate.mjs';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
  console.log('Usage: node script/deploy.mjs\n\nPrints the deployment order, the post-deployment');
  console.log('wiring steps, and what the promotion gate refuses. Takes no arguments.');
} else {
  console.log(formatDeploymentPlan());
}
