import { ComputedRef } from 'vue'
import type { TriggerType, Placement } from '@apathia/components/popper'

export interface DropdownInstance {
  hideOnClick?: ComputedRef<boolean>
}

export interface DropdownProps {
  delay?: number
  disabled?: boolean
  label?: string
  trigger?: TriggerType
  placement?: Placement
  hideOnClick?: boolean
}

export type DropdownEmits = {
  hide: [val: boolean]
  show: [val: boolean]
}

export interface DropdownItemProps {
  active?: boolean
  disabled?: boolean
}
