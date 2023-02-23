import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname);
const outDir = resolve(__dirname,'docs');

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ScoutingWebsite2/',
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname,'index.html'),
        admin: resolve(root,'admin/index.html'),
      }
    }
  }
})
