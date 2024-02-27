/* eslint-disable no-bitwise */
const KB = 1 << 10
const MB = 1 << 20
const GB = 1 << 30
const TB = 1 << 40

/**
 * 字节转化为易读 KB,MB,GB
 * @param {Number|String} size
 */
export function sizeFormat(size: number | string, digits = 2) {
  if (size === '') return ''

  const nSize = +size
  if (nSize < KB) return `${nSize}B`
  if (nSize < MB) return `${(nSize / KB).toFixed(digits)}KB`
  if (nSize < GB) return `${(nSize / MB).toFixed(digits)}MB`
  if (nSize < TB) return `${(nSize / GB).toFixed(digits)}GB`

  return `${(nSize / TB).toFixed(2)}TB`
}
