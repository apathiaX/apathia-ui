export interface CheckboxProps {
  disabled?: boolean
  modelValue: string | number | boolean | Array<unknown>
  trueValue?: string | number | boolean
  falseValue?: string | number | boolean
  value?: string | number
  intermediate?: boolean
}

export type CheckboxEmits = {
  'update:modelValue': [value: string | number | boolean | Array<unknown>]
  change: [value: string | number | boolean | Array<unknown>]
}
