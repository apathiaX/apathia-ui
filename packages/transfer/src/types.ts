export type Key = string | number

export type TransferDataItem = {
  value: Key
  label: string
  disabled: boolean
}

export type TargetOrder = 'original' | 'push' | 'unshift'

export type Props = {
  value: string
  label: string
  disabled: string
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
  propKeys?: Props
  leftDefaultChecked?: Key[]
  rightDefaultChecked?: Key[]
}
