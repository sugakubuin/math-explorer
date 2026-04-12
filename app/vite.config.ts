import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import contentBoxPlugin from './src/plugins/contentBoxPlugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contentBoxPlugin()],
  optimizeDeps: {
    include: ['react-katex'],
  },
  ssr: {
    // SSG 時: react-helmet-async はバンドル必須
    // react-katex は CJS のみのため、外部化せずバンドルして ESM の名前付き import を解決する
    noExternal: ['react-helmet-async', 'react-katex'],
  },
})
