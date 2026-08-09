import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['test/**/*.test.js'],
    environment: 'node',
    // Doc 04 §"harness discipline": zero flake tolerance and no retries at L0–L3. These
    // tests are pure functions over fixed inputs, so a retry would only ever hide a bug.
    retry: 0,
  },
});
