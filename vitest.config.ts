import { defineConfig } from 'vitest/config';

// Pure-logic tests only (i18n helpers + translation parity). No Astro runtime needed —
// the i18n modules are plain TS and base resolution falls back to '/' when
// import.meta.env.BASE_URL is absent under Vitest.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
});
