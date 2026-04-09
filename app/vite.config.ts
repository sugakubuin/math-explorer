import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import contentBoxPlugin from './src/plugins/contentBoxPlugin'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contentBoxPlugin()],
  ssr: {
    // SSG ビルド時に react-helmet-async を正しく処理するために必要
    noExternal: ['react-helmet-async'],
  },
})
