import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), ssr()],
  resolve: {
    alias: {
      'renderer': path.resolve(__dirname, 'renderer'), // ✅ '@' を削除
      'src': path.resolve(__dirname, 'src'),
      'server': path.resolve(__dirname, 'server')
    },
  },
});
