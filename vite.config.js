import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        'deep-time': 'deep-time-perspective.html',
        'logo-standalone': 'DinoDex Logo Standalone.html'
      }
    }
  }
});
