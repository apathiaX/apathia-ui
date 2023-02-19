import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  server: {
    proxy: {
      '/api': {
        target: 'http://www.blog.apathia.cn:8080',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
