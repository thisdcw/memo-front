import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/api': {
        target: "https://back.thisdcw.fun",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }

  }
})
