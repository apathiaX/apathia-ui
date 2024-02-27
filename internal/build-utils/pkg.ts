import { apPackage } from './path'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const getPackageManifest = (pkgPath: string) => {
  return require(pkgPath)
}

const getPackageDependencies = (pkgPath: string) => {
  const manifest = getPackageManifest(pkgPath)
  const { dependencies = {}, peerDependencies = {} } = manifest

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  }
}

export const getPackageVersion = (pkgPath: string) => {
  const manifest = getPackageManifest(pkgPath)
  return manifest.version
}

export const generateExternal = async (options: { full?: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(apPackage)

  return (id: string) => {
    const packages = [...peerDependencies]
    if (!options.full) {
      packages.push('@vue', ...dependencies)
    }

    return [...new Set(packages)].some(
      pkg => id === pkg || id.startsWith(`${pkg}/`),
    )
  }
}

export const filterFiles = (files: string[]) => {
  const excludes = ['node_modules']
  return files.filter(path => !excludes.some(exclude => path.includes(exclude)))
}
