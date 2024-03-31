import { Instance } from '@popperjs/core'
import type { RenderCustom, RenderFn } from '@apathia/shared'
import type { ComponentPublicInstance, Ref } from 'vue'

export type RefType = Ref<HTMLElement | null>

export type ElementType = RefType | ComponentPublicInstance | HTMLElement

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'

export type PlacementType = 'top' | 'bottom' | 'left' | 'right'

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

export type Placement = (typeof placement)[number]

export type PopperInstance = Instance

export interface PopperProps {
  distance?: number
  skidding?: number
  trigger?: TriggerType
  dark?: boolean
  placement?: PlacementType
  content?: string | number
  transitionClass?: object
  showArrow?: boolean
  delay?: number
  disabled?: boolean
  modelValue?: boolean
  popperClass?: string
  appendToBody?: boolean
  render?: RenderCustom
  target?: HTMLElement
  delayClose?: number
}

export interface PopperOption {
  placement: Placement
  skidding: number
  distance: number
  trigger: string
  delay: number
  disabled: boolean
  component?: ComponentPublicInstance
  showArrow?: boolean
  modelValue?: boolean
  target?: HTMLElement | RefType
  delayClose?: number
}

export interface EmitOption {
  emitVisible: (val: boolean) => void
  emitHide: (val: boolean, instance: PopperInstance | null) => void
  emitShow: (val: boolean, instance: PopperInstance | null) => void
}

export type PopperEmits = {
  'update:modelValue': [value: boolean]
  hide: [val: boolean, instance: PopperInstance | null]
  show: [val: boolean, instance: PopperInstance | null]
  afterHide: []
}

export interface PopperPropType {
  render: RenderFn
  target: HTMLElement | null
  modelValue?: boolean
  delayClose?: number
  distance?: number
  skidding?: number
  dark?: boolean
  placement?: string
  transitionClass?: Record<string, any>
  showArrow?: boolean
  disabled?: boolean
  popperClass?: string
}

export interface PopperListProps {
  props: PopperPropType
  id: string
}
