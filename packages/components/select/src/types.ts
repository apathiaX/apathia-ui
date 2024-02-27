import type { ComputedRef, Ref } from 'vue'

export type SelectValueType =
  | number
  | string
  | boolean
  | Record<string, any>
  | null

export enum Direction {
  UP = 'up',
  DOWN = 'down',
}

export type SelectOption = {
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
  optionMap: Record<string, SelectOption>
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

export interface SelectUseProps {
  modelValue: Ref<SelectValueType>
  filterable: Ref<boolean>
  valueKey: Ref<string>
  disabled: Ref<boolean | undefined>
  emptyText: Ref<string>
  maxHeight: Ref<number | string>
  placeholder: Ref<string>
}

export interface SelectProps {
  modelValue: SelectValueType
  valueKey?: string
  placeholder?: string
  filterable?: boolean
  clearable?: boolean
  emptyText?: string
  disabled?: boolean
  maxHeight?: number | string
  isLoading?: boolean
  placement?: string
}

export type SelectEmits = {
  'update:modelValue': [val: SelectValueType]
  change: [val: SelectValueType, label: string]
  input: [val: SelectValueType, label: string]
  'native-change': [val: SelectValueType, label: string]
  'query-change': [val: string]
}

export interface OptionUseProps {
  value: Ref<number | string | boolean | null>
  disabled: Ref<boolean>
  register: OptionRegister
  unregister: OptionRemover
  updateRegister: OptionRegister
  selectState: SelectState
  changeHandler: (
    value: SelectValueType,
    label: string,
    isInnerChange?: boolean,
  ) => void
  isSameValue: (newVal: SelectValueType, oldVal: SelectValueType) => boolean
  focus: (uid: number, focusedEl?: HTMLElement) => void
  compoId: number
}

export interface OptionUseReturn {
  isSelected: Ref<boolean>
  isHidden: Ref<boolean>
  isFocused: ComputedRef<boolean>
  getRootProps: () => Record<string, unknown>
}

export interface SelectOptionProps {
  value: string | number | boolean | null
  disabled?: boolean
}
