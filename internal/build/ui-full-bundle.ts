import { resolve } from 'path'
import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
// 解析 commonjs
import commonjs from '@rollup/plugin-commonjs'
import { apOutput, apRoot } from '../build-utils'

// 全量打包
export const buildFullEntry = async () => {
  const bundle = await rollup({
    input: resolve(apRoot, 'apathia/index.ts'),
    plugins: [
      commonjs(),
      vue() as Plugin,
      nodeResolve({
        extensions: ['.ts'],
      }),
      esbuild(),
    ],
    external: ['vue'],
  })
  // 配置输出文件格式
  bundle.write({
    format: 'umd',
    file: resolve(apOutput, 'dist', 'index.full.js'),
    name: 'Apathia',
    globals: {
      vue: 'Vue',
    },
  })
}
