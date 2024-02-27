import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// 确定执行的根目录 apathia-vue
export const projRoot = resolve(__dirname, '..', '..')

// 打包目录 apathia-vue/dist
export const buildOutput = resolve(projRoot, 'dist')

// 打包入口 apathia-vue/packages
export const pkgRoot = resolve(projRoot, 'packages')

// ui组件库打包入口
export const apRoot = resolve(pkgRoot, 'apathia-ui')

// ui 组件库打包目录入口
export const apOutput = resolve(buildOutput, 'apathia-ui')

// ui 组件库 package 文件
export const apPackage = resolve(apRoot, 'package.json')

// ui 组件库打包类型目录
export const outputTypeRoot = resolve(buildOutput, 'types/packages')

// 打包 ts 配置文件
export const buildTsConf = resolve(projRoot, 'tsconfig.build.json')

// 打包类型目录
export const outTypeDir = resolve(buildOutput, 'types')
