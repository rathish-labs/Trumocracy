import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

/**
 * Component tests for @trumocracy/ui run in jsdom.
 *
 * These tests protect the normative binding clauses of DES-094 (privacy-status
 * component): self-view-only rendering, exact approved copy, and absence of any
 * data leak through attributes or emitted side-effects.
 */
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['test/**/*.test.tsx', 'test/**/*.test.ts'],
    setupFiles: ['./test/setup.ts'],
  },
});
