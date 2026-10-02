import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://kevincollins-ncri.github.io/temp-CancerWatch-Quality-Check-Releases/"
})
