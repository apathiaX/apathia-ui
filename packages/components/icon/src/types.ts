import type { CSSProperties } from 'vue'

export interface IconProps {
  readonly color?: Pick<CSSProperties, 'color'>
  readonly size?: number | string
}
