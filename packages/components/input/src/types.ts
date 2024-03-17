import { Component } from 'vue'

export interface InputProps {
  type?: 'text' | 'textarea'
  modelValue?: string | number
  inputClass?: string | object
  search?: boolean
  clearable?: boolean
  disabled?: boolean
  maxWords?: number
  placeholder?: string
  formatter?: (val: string | number) => string
  parser?: (val: string) => string
  rows?: number
  size?: 'sm' | 'md' | 'lg'
  prefixIcon?: Component
  suffixIcon?: Component
}

export type InputEmits = {
  'update:modelValue': [value: string | number]
  input: [e: Event]
  search: [value: string | number]
}
