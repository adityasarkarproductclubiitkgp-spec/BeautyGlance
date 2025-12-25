
import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    // Bridges the system process.env to the browser environment for the Gemini SDK
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  },
  build: {
    target: 'esnext'
  }
});
