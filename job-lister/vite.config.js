import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',
    port: 3012,
  },
  theme:{
    fontFamily:{
      sans: ['Roboto', 'sans-serif'],
      mono: ['Fira Code', 'monospace'],
    },
    gridTemplateColumns: {
      '70/30': '70% 28%',
    }
  }
})
