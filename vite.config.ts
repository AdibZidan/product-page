/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react({ fastRefresh: true }), eslint(), tsconfigPaths()],
  server: { port: 3000 },
  test: {
    environment: 'jsdom',
  },
});
