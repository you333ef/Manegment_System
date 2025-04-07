import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // ← ده مهم جدًا عشان الـ CSS يتشاف بعد الدبلوي

})
