import type { Ref } from 'vue'

export interface RadioProp {
  value?: number | string | boolean
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

export interface RadioUseProps {
  disabled: Ref<boolean>
  modelValue: Ref<string | number | boolean>
  value: Ref<string | number | boolean>
  groupState: Ref<GroupData> | null
  changeHandler: (val: string | number | boolean) => void
  inputEl: Ref<HTMLInputElement | null>
}
