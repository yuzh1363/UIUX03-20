import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/UIUX03-20/My_Note/',
  build: {
    outDir: './', // 讓打包後的 index.html 直接產出在 My_Note 資料夾中
  }
})
