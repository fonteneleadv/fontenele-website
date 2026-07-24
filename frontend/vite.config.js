import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  ssgOptions: {
    formatting: 'minify',
    includedRoutes: (paths) =>
      paths.filter((p) => {
        const route = p.replace(/^\/+/, ''); // normaliza: com ou sem barra inicial
        return (
          route !== 'components' &&
          !route.includes('direito-bancario') &&
          !route.includes('direito-institucional') &&
          !route.includes('direito-publico')
        );
      }),
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
