import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        { src: 'feed.html', dest: '' },
        { src: 'profile.html', dest: '' },
        { src: '_redirects', dest: '' },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
  },
});
