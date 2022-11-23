export const Triggers = ['click', 'hover'] as const
export type TriggerType = typeof Triggers[number]

export type Node = {
  label: string
  value: string | number
  fullpath: (string | number)[]
  fullname: string[]
  fullkey: string
  disabled: boolean
  leaf: boolean
  children?: Node[]
}
