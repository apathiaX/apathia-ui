import { rollup, Plugin } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'
// 解析 commonjs
import commonjs from '@rollup/plugin-commonjs'
import glob from 'fast-glob'
import { generateExternal, filterFiles, pkgRoot, apRoot } from '../build-utils'
import { buildConfigEntries } from './buildInfo'
import consola from 'consola'

// 全量打包
export const buildModules = async () => {
  const input = filterFiles(
    await glob(['**/*.{js?(x),ts?(x),vue}', '!**/types.ts', '!**/*.{d.ts}'], {
      cwd: pkgRoot,
      absolute: true, // 返回绝对路径
      onlyFiles: true, // 只返回文件的路径
    }),
  )
  const bundle = await rollup({
    input,
    plugins: [
      vue({
        isProduction: false,
      }) as Plugin,
      vueJsx() as Plugin,
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: 'es2018',
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: await generateExternal({ full: false }),
  })
  const writeTask = buildConfigEntries.map(([module, config]) =>
    bundle.write({
      format: config.format, // 配置输出格式
      dir: config.output.path, // 配置输出目录
      preserveModules: true, // 该选项将使用原始模块名作为文件名，为所有模块创建单独的 chunk，也就是打包后保留目录结构
      preserveModulesRoot: apRoot,
      sourcemap: true,
      entryFileNames: `[name].${config.ext}`, // [name] 表示入口文件的文件名（不包含扩展名），也就是生产 .mjs 结尾的文件
      exports: module === 'cjs' ? 'named' : undefined,
    }),
  )
  await Promise.all(writeTask)
  consola.success('Build modules success!')
}
