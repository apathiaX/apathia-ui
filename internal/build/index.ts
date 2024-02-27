import { rmSync } from 'fs'
import consola from 'consola'
import { buildOutput, copyFiles } from '../build-utils'
import { buildModules } from './ui-modules'
import { generateType } from './ui-buildType'

export const buildUI = async () => {
  consola.start('Start build ApathiaUI....')
  rmSync(buildOutput, { recursive: true, force: true })
  await buildModules()
  await generateType()
  copyFiles()
  consola.success('ApathiaUI build success!')
}
