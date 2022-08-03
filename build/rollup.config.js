import fs from 'fs-extra'
import vue from 'rollup-plugin-vue'
import babel from '@rollup/plugin-babel'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonJs from '@rollup/plugin-commonjs'
import ts2 from 'rollup-plugin-typescript2'
// import ts from '@rollup/plugin-typescript'

const isWatchMode = process.env.MODE === 'watcher'
const extensions = ['.ts', '.js', '.tsx', 'vue']

const packageJson = JSON.parse(fs.readFileSync('./package.json').toString())

const babelConfig = require('../babel.config.json')

const { main: mainFile, module: moduleFile, dependencies } = packageJson
const deps = Object.keys(dependencies || {})

const output = [
  {
    file: moduleFile,
    format: 'es',
  },
]

// for performance
if (!isWatchMode) {
  output.push({
    file: mainFile,
    format: 'cjs',
    exports: 'named',
  })
}

export default {
  input: 'src/index.ts',
  external(id) {
    return /^vue/.test(id) || deps.some(k => new RegExp(`^${k}`).test(id))
  },
  output,
  plugins: [
    nodeResolve({
      extensions,
    }),
    commonJs(),
    vue({
      target: 'browser',
      exposeFilename: false,
      css: false,
    }),
    ts2({
      tsconfigOverride: {
        compilerOptions: {
          declaration: true,
          declarationDir: './',
        },
        include: ['src'],
      },
    }),
    // ts({
    //   tsconfig: 'tsconfig.json',
    //   declaration: true,
    //   declarationDir: './',
    //   include: ['./src']
    // }),
    babel({
      extensions,
      babelHelpers: 'runtime',
      // to fix incorrect babel config resolve
      ...babelConfig,
    }),
  ],
}
