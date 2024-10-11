import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',     // Bind to 0.0.0.0 to make the app accessible externally
    port: process.env.PORT || 3000,
  }
})
