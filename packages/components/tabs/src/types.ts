export type TabItem = string | number | { [k: string]: any }

export interface TabsProps {
  modelValue: string | number
  list: Array<TabItem>
  underline?: boolean
  showLabel?: Function
}

export type TabsEmits = {
  'update:modelValue': [value: TabItem]
  navChange: [item: TabItem]
}
