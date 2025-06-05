import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// import 'bootstrap/dist/css/bootstrap.min.css';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
})
