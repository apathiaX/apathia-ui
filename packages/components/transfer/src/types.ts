export type Key = string | number

export type TransferDataItem = {
  value: Key
  label: string
  disabled: boolean
}

export type TargetOrder = 'original' | 'push' | 'unshift'

export type PropsItem = {
  value: string
  label: string
  disabled?: string
}

export type Checked = Key[]

export type CheckedMap = Record<Key, boolean>

export interface TransferProps {
  modelValue: Key[]
  data: Array<Record<string, string | boolean | number>>
  filterable?: boolean
  filterPlaceholder?: string
  filterMethod?: (word: string, option: TransferDataItem) => boolean
  targetOrder?: TargetOrder
  titles?: [string, string]
  propKeys?: PropsItem
  leftDefaultChecked?: Key[]
  rightDefaultChecked?: Key[]
}

export interface PanelProps {
  modelValue: Key[]
  data: TransferDataItem[]
  filterable?: boolean
  filterPlaceholder?: string
  defaultChecked?: Key[]
  filterMethod?: (w: string, option: TransferDataItem) => boolean
  title: string
}

export type TransferEmits = {
  'update:modelValue': [value: Key[]]
  select: [value: Key[]]
  remove: [value: Key[]]
}
