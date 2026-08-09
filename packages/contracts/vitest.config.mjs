import { defineConfig } from 'vitest/config';

/**
 * Contract tests run a full EVM in-process and seed thousands of Merkle insertions, so the
 * default 5s timeout is far too tight. Single-fork execution keeps the compiled-artifact
 * cache warm across files, which dominates runtime.
 */
export default defineConfig({
  test: {
    testTimeout: 300_000,
    hookTimeout: 600_000,
    teardownTimeout: 60_000,
    pool: 'forks',
    poolOptions: { forks: { singleFork: true } },
    reporters: [['default', { summary: false }]],
  },
});
