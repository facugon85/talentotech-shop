import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { BrowserRouter as Router } from 'react-router-dom';

export default defineConfig({
  plugins: [react()],
  base: '/talentotech-shop/',
})

<Router basename="/talentotech-shop">