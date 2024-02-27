import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  // 指定安装包的主入口为 package.json 中的 source 字段定义的路径
  resolve: {
    mainFields: ['source', 'module', 'jsnext:main', 'jsnext'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://www.blog.apathia.cn:8080',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ''),
      },
    },
  },
})
