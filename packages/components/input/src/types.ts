export interface InputProps {
  type?: string
  modelValue?: string | number
  inputClass?: string | object
  search?: boolean
  clearable?: boolean
  disabled?: boolean
  maxWords?: number
}

export type InputEmits = {
  'update:modelValue': [value: string | number]
  input: [e: Event]
  search: [value: string | number]
}
