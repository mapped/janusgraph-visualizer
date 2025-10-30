import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'classic', // Use classic JSX runtime for React 16
    })
  ],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.[jt]sx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      // Proxy API calls to your backend server
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
      },
    }
  },
  build: {
    outDir: 'build',
    sourcemap: true,
  },
})