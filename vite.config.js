import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // Adjust "my-app" to your project's repository name
  plugins: [react()]
});
