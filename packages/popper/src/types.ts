import { Instance } from '@popperjs/core'

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'

export const placement = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
] as const

export type Placement = typeof placement[number]

export type PopperInstance = Instance
