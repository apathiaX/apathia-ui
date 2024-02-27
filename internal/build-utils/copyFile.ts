import { copyFile } from 'fs/promises'
import { join, resolve } from 'path'
import { apPackage, projRoot, apRoot, apOutput } from './path'
import consola from 'consola'
import { rename, readFile, writeFile } from 'fs/promises'
import { getPackageVersion } from './pkg'

const copyPkg = async () => {
  consola.start('Copy package.json....')
  await copyFile(apPackage, join(apOutput, 'package.build.json'))

  // 读取版本信息
  const pkgVersion = getPackageVersion(apPackage)

  // 读取 package.build.json 文件
  const buildPkgPath = join(apOutput, 'package.build.json')
  const buildPkgData = JSON.parse(await readFile(buildPkgPath, 'utf-8'))

  // 同步 version
  buildPkgData.version = pkgVersion
  await writeFile(buildPkgPath, JSON.stringify(buildPkgData, null, 2), 'utf-8')

  await rename(
    join(apOutput, 'package.build.json'),
    join(apOutput, 'package.json'),
  )
  consola.success('Copy package.json success!')
}

// 复制
export const copyFiles = () => {
  consola.start('Copy config files....')
  copyPkg()
  // copyFile(apPackage, join(apOutput, 'package.build.json'))
  // rename(join(apOutput, 'package.build.json'), join(apOutput, 'package.json'))
  copyFile(resolve(apRoot, 'readme.md'), join(apOutput, 'readme.md'))
  copyFile(resolve(projRoot, 'global.d.ts'), join(apOutput, 'global.d.ts'))
  consola.success('Copy files success!')
}
