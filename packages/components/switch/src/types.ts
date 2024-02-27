export type SwitchEvent = 'update:modelValue' | 'change'

export interface SwitchProps {
  as?: object | string
  modelValue?: string | number | boolean
  trueValue?: string | number | boolean
  falseValue?: string | number | boolean
  inactiveText?: string
  activeText?: string
  disabled?: boolean | undefined
  size?: string
  loading?: boolean
}

export type SwitchEmits = {
  change: [val: string | number | boolean]
  'update:modelValue': [val: string | number | boolean]
}
