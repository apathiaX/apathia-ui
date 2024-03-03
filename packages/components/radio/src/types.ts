import type { ComputedRef, Ref } from 'vue'

export interface RadioProp {
  value: number | string | boolean
  modelValue?: string | number | boolean
  disabled?: boolean
}

export interface GroupData {
  value: string | number | boolean
  disabled?: boolean
}

export interface RadioGroupProps {
  modelValue: string | number | boolean
  disabled?: boolean
}

export type RadioEmits = {
  'update:modelValue': [value: string | number | boolean]
  change: [value: string | number | boolean]
}

export interface RadioUseReturn {
  inputEl: Ref<HTMLInputElement | null>
  isDisabled: ComputedRef<boolean>
  isSelected: ComputedRef<boolean>
  value: Ref<string | number | boolean>
  handleChange: () => void
}
