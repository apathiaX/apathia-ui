export type ValueType = number | string | boolean | Record<string, any>

export enum Direction {
  UP = 'up',
  DOWN = 'down',
}

export type Option = {
  value: ValueType
  label: string
  disabled: boolean
}

export type SelectState = {
  label: string
  remote: boolean
  value: ValueType
  valueKey: string
  filterStr: string
  optionIds: number[]
  optionMap: Record<string, Option>
  focusId: number
  pendingFocusId: number
  innerChange: boolean
  indeed: boolean
}

export type OptionRegister = (
  disabled: boolean,
  uid: number,
  value: ValueType,
  label: string,
) => void

export type OptionRemover = (uid: number) => void
