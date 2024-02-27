import path, { resolve } from 'path'
import { execa } from 'execa'
import { copy } from 'fs-extra'
import { readFile, writeFile, rm } from 'fs/promises'
import glob from 'fast-glob'
import { Project } from 'ts-morph'
import {
  apRoot,
  buildOutput,
  buildTsConf,
  filterFiles,
  moduleNameRewrite,
  outTypeDir,
  outputTypeRoot,
  pkgRoot,
  projRoot,
} from '../build-utils'
import consola from 'consola'

export const generateTypesDefinitions = async () => {
  const project = new Project({
    compilerOptions: {
      emitDeclarationOnly: true, // 是否只输出类型文件 .d.ts
      outDir: outTypeDir, // 输出目录
      baseUrl: projRoot, // 用于解析非相对模块名称的目录
      preserveSymlinks: true, // 它对应了 Node.js 中 --preserve-symlinks 选项的行为，Node.js 有这样一个选项：–preserve-symlinks，可以设置成按照软链所在的位置查找依赖
      skipLibCheck: true, // 跳过.d.ts类型声明文件的类型检查。这样可以加快编译速度
      noImplicitAny: false, // 是否允许隐式声明 any 类型了
    },
    tsConfigFilePath: buildTsConf, // 手动指定 tsconfig.json 文件作为 ts-morph 项目的 TypeScript 配置
    skipAddingFilesFromTsConfig: true, // 取消从 tsconfig.json 文件中添加 TypeScript 源文件
  })
  // 手动添加 TypeScript 源文件
  await addSourceFiles(project)
  project.emit()
}

async function addSourceFiles(project: Project) {
  // 读取的文件类型 .js .jsx .ts .tsx .vue
  const globSourceFile = '**/*.{js?(x),ts?(x),vue}'
  const epPaths = filterFiles(
    await glob(globSourceFile, {
      cwd: apRoot, // 读取 ./packages/apathia 目录下的文件
      onlyFiles: true, // 只读取文件
    }),
  )

  await Promise.all([
    ...epPaths.map(async file => {
      // 读取 ./packages/apathia 目录下的文件，并手动通过 createSourceFile 方法添加 ts-morph 项目的 TypeScript 源文件
      const content = await readFile(path.resolve(apRoot, file), 'utf-8')
      project.createSourceFile(path.resolve(pkgRoot, file), content)
    }),
  ])
}

const generateType = async () => {
  consola.start('Start generate types....')
  await execa('npx', ['vue-tsc', '-p', buildTsConf], {
    stdio: 'pipe',
    cwd: projRoot,
  })
  await rm(path.resolve(buildOutput, 'types', 'packages', 'apathia-ui'), {
    recursive: true,
    force: true,
  })
  await generateTypesDefinitions()
  consola.success('Generate types success!')
  getTypeFiles()
  copyTypeFiles()
  consola.success('Copy types success!')
}

const copyTypeFiles = () => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  // 将 ./dist/types/packages 的内容复制到 ./dist/apathia/es 目录下
  copy(src, resolve(buildOutput, 'apathia-ui/es'))
  // 将 ./dist/types/packages 的内容复制到 ./dist/apathia/es 目录下
  copy(src, resolve(buildOutput, 'apathia-ui/lib'))
}

const getTypeFiles = async () => {
  const globSourceFile = '**/*.{js?(x),ts?(x),vue}'
  const typePaths = await glob(globSourceFile, {
    cwd: outputTypeRoot,
    absolute: true,
    onlyFiles: true,
  })

  const task = typePaths.map(async typePath => {
    const content = await readFile(path.resolve(typePath), 'utf-8')
    await writeFile(typePath, moduleNameRewrite()(content), 'utf-8')
  })
  await Promise.all(task)
}

export { copyTypeFiles, generateType }
