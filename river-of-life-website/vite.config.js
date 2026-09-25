import { defineConfig } from 'vite';

export default defineConfig({
  // Relative base so the built site works from any folder or file://
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: 'index.html',
        about: 'about/index.html',
        worship: 'worship/index.html',
        secondLife: 'second-life/index.html',
        ministries: 'ministries/index.html',
        events: 'events/index.html',
        prayer: 'prayer/index.html',
        media: 'media/index.html',
        connect: 'connect/index.html',
        visit: 'visit/index.html',
      },
    },
  },
});
