// parse style string

import type { CSSProperties } from 'vue'

// "width: 3px; height: 3px;" => { width: '3px', height: '3px' }
export function toStyleObject(value?: string | CSSProperties) {
  if (!value) {
    return {}
  }

  if (typeof value === 'string') {
    return value.split(';').reduce<Record<string, string>>((acc, item) => {
      if (item) {
        const [key, val] = item.split(':')
        acc[key.trim()] = val.trim()
        return acc
      }
      return acc
    }, {})
  }
  return value
}

// '3px' => '3px'; 2 => '2px'; '2' => '2px'
export function toRealWidth(width?: string | number) {
  if (!width) return ''
  return typeof width === 'number' || /^\d+$/.test(width) ? `${width}px` : width
}
