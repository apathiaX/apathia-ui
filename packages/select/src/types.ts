import { Ref } from "vue"

export type SelectValueType = number | string | boolean | Record<string, any>

export enum Direction {
  UP = 'up',
  DOWN = 'down',
}

export type Option = {
  value: SelectValueType
  label: string
  disabled: boolean
}

export type SelectState = {
  label: string
  remote: boolean
  value: SelectValueType
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
  value: SelectValueType,
  label: string,
) => void

export type OptionRemover = (uid: number) => void

export interface UserProps {
  modelValue: Ref<SelectValueType>
  filterable: Ref<boolean>
  valueKey: Ref<string>
  disabled: Ref<boolean | undefined>
  emptyText: Ref<string>
  placeholder: Ref<string>
}
