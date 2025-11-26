import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Nice quality-of-life alias so you can do import x from '@/components/...'
      '@': path.resolve(__dirname, './src'),

      // Only keep the ONE figma asset alias you actually use in code
      'figma:asset/83144e22ce975f95baa731b0c677d7b17047b0af.png':
        path.resolve(
          __dirname,
          './src/assets/83144e22ce975f95baa731b0c677d7b17047b0af.png'
        )
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },

  build: {
    // IMPORTANT: GitHub Pages workflow expects "dist"
    outDir: 'dist',
    target: 'esnext'
  },

  server: {
    port: 3000,
    open: true
  }
})
