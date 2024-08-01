import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  outDir: 'build', // 确保这里的 outDir 设置为你想要的输出目录

})
