import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/~aarojy/root/Web-sovelluskehitys_TX00EY23-3007/React/Tailwind/',
});
