
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig(({ command }) => {
  return {
    plugins: [vue()],
    base: command === 'build' ? '/VRNas/' : '/', 
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})