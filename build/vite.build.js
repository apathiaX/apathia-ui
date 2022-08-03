// for build sub package lib

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import ts2 from 'rollup-plugin-typescript2'

// @apathia/apathia.button => button
// @apathia/apathia => apathia
const resolveBareName = packageName => {
  return packageName.match(/[./]([\w-]+)$/)[1]
}

const resolveGlobal = id => {
  if (id === 'vue') {
    return 'Vue'
  }
  return id.indexOf('@apathia/apathia') > -1 ? resolveBareName(id) : id
}

// console.log(process.env.PNPM_PACKAGE_NAME);
const pkgName = resolveBareName(process.env.PNPM_PACKAGE_NAME)

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { dependencies = {} } = require(path.join(
  __dirname,
  `../packages/${pkgName}/package.json`,
))

const deps = Object.keys(dependencies)

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    {
      ...ts2({
        check: true,
        tsconfig: path.resolve(
          __dirname,
          `../packages/${pkgName}/tsconfig.json`,
        ),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
          },
        },
      }),
      enforce: 'pre',
    },
  ],
  build: {
    minify: false,
    lib: {
      entry: './src/index.ts',
      name: pkgName,
    },
    rollupOptions: {
      external(id) {
        // subpath
        return (
          /^vue/.test(id) || deps.some(dep => new RegExp(`^${dep}`).test(id))
        )
      },
      output: {
        dir: 'dist',
        globals: resolveGlobal,
        exports: 'named',
      },
      plugins: [],
    },
  },
})
