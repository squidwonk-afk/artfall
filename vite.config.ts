import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// IMPORTANT:
// Replace "artfall" with your repo name IF you are NOT using a custom domain.
// If using a custom domain + CNAME, keep base: '/'.
const basePath = '/'

export default defineConfig({
  base: basePath,
  plugins: [react()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },

  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
    target: 'esnext',
    rollupOptions: {
      // Make sure Vite does NOT try to treat unknown assets as modules
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
      }
    }
  },

  server: {
    open: true
  },
})
