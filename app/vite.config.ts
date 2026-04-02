import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  ssr: {
    // SSG ビルド時に react-helmet-async を正しく処理するために必要
    noExternal: ['react-helmet-async'],
  },
})
