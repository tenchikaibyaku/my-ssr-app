import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    react(),
    vike() // ✅ V1 の設定は `+config.ts` に移動
  ],
  resolve: {
    alias: {
      '~renderer': path.resolve(__dirname, 'renderer'),
      '~src': path.resolve(__dirname, 'src'),
      '~server': path.resolve(__dirname, 'server'),
    },
  },
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    manifest: true,
    emptyOutDir: true,
  },
  base: "/my-ssr-app/",
  ssr: {
    noExternal: ['vike']
  }
});
