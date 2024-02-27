import type { Ref } from 'vue'

export interface CheckboxProps {
  disabled?: boolean
  modelValue: string | number | boolean | Array<unknown>
  trueValue?: string | number | boolean
  falseValue?: string | number | boolean
  value?: string | number | undefined
  intermediate?: boolean
}

export type CheckboxEmits = {
  'update:modelValue': [value: string | number | boolean | Array<unknown>]
  change: [value: string | number | boolean | Array<unknown>]
}

export interface CheckboxUseProps<T = string | number | boolean> {
  disabled: Ref<boolean>
  modelValue: Ref<T | Array<unknown>>
  trueValue: Ref<T>
  falseValue: Ref<T>
  value: Ref<string | number | undefined>
  inputEl: Ref<HTMLInputElement | null>
}
