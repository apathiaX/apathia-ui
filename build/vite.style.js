// only for @apathia/apathia
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    // no clean dist dir
    emptyOutDir: false,
    minify: false,
    lib: {
      entry: './src/style/style.ts',
      name: 'style',
    },
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: '_style.js',
      },
    },
  },
})
