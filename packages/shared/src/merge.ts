import { cloneDeep } from 'lodash'

export function mergeWithDefault<
  T extends Record<string, any>,
  U extends Record<string, any>,
>(
  defaultValue: T,
  source?: U,
): { [P in keyof T]: P extends keyof U ? U[P] : T[P] } {
  if (source === undefined) {
    return defaultValue
  }

  return Object.keys(defaultValue).reduce((acc, key) => {
    if (source[key] !== undefined) {
      acc[key as keyof T] = cloneDeep(source[key])
    } else {
      acc[key as keyof T] = defaultValue[key]
    }
    return acc
  }, {} as { [P in keyof T]: P extends keyof U ? U[P] : T[P] })
}
