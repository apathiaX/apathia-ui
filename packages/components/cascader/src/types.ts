export const Triggers = ['click', 'hover'] as const
export type Trigger = (typeof Triggers)[number]

export type CascaderNode = {
  label: string
  value: string | number
  fullPath: (string | number)[]
  fullName: string[]
  fullKey: string
  disabled: boolean
  leaf: boolean
  children?: CascaderNode[]
}

export type ValueType =
  | string
  | number
  | Array<string | number>
  | Array<Array<string | number>>

export interface CascaderProps {
  modelValue: ValueType
  placeholder?: string
  emitPath?: boolean
  disabled?: boolean
  clearable?: boolean
  showAllLevels?: boolean
  autoFocus?: boolean
  changeOnSelect?: boolean
  separator?: string
  data: Array<Record<string, any>>
  trigger?: Trigger
  fieldNames?: Record<'label' | 'value' | 'children', string>
  multiple?: boolean
  height?: string | number
  search?: boolean
}

export interface NodeProps {
  nodes: CascaderNode[]
  focus: boolean
  showAllLevels: boolean
  separator: string
  placeholder: string
  clearable: boolean
  search: boolean
  disabled: boolean
}
