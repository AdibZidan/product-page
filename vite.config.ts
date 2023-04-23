import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [react({ fastRefresh: true }), eslint()],
  server: { port: 3000 },
});
