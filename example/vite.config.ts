import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ vue(), vueJsx()],
  // 指定安装包的主入口为 package.json 中的 source 字段定义的路径
  resolve: {
    mainFields: ['source', 'module', 'jsnext:main', 'jsnext'],
  },
})
