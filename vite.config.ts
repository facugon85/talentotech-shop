import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/talento_tech_entrega/', // 👈 importante
  plugins: [react()],
})