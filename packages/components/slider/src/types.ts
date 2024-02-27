import { StyleValue } from 'vue'

export type Marker = Record<
  number,
  Partial<{ label: string; style: StyleValue }>
>

export interface SliderProps {
  modelValue: number
  disabled?: boolean
  min?: number
  max?: number
  step?: number
  showSteps?: boolean
  showTooltip?: boolean
  formatTooltip?: Function
  range?: boolean
  valueRange?: number[]
  marks?: Marker
  vertical?: boolean
  height?: number
}

export interface StopProps {
  step: number
  min: number
  max: number
  vertical?: boolean
  marks: Marker
}
