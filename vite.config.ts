import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {outDir:'dist'},
  base: '/to_do_list/',
  plugins: [react()],
})
