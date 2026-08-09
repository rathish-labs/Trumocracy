import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';

/**
 * Component tests run in jsdom. They exist to pin the behaviours that are safety
 * properties rather than presentation: the vote confirmation being identical for every
 * choice, the not-yet-receipt-free banner appearing whenever MACI is off, and the
 * eight-pillar form agreeing with the protocol's own validation.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['test/**/*.test.tsx', 'test/**/*.test.ts'],
    setupFiles: ['./test/setup.ts'],
  },
});
