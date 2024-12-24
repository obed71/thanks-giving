import { defineConfig } from 'vite';

export default defineConfig({
  server: {
      // Handle 404 errors
      '/': {
        rewrite: (path) => '/404.html'
      }
    }
  }
});
