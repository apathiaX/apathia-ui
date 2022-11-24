import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  // 指定安装包的主入口为 package.json 中的 source 字段定义的路径
  build: {
    ssrManifest: false,
    manifest: false,
  },
  // resolve: {
  //   mainFields: ['source', 'module', 'jsnext:main', 'jsnext', 'main', 'esm', 'umd', 'dist'],
  // },
})
