import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.js'],
    coverage: {
      reporter: ['text', 'lcov', 'cobertura'],
      reportsDirectory: './coverage',
      exclude: ['**/*.config.*', '**/main.jsx'],
    },
  },
});
