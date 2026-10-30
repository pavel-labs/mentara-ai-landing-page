/// <reference types="vitest/config" />

import { getViteConfig } from 'astro/config';

// Load the Astro Vite plugins so component tests can render .astro files with the container
// API alongside the existing pure-logic unit tests.
export default getViteConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts', 'scripts/**/*.test.mjs'],
    pool: 'forks',
    maxWorkers: 1,
    fileParallelism: false,
  },
});
