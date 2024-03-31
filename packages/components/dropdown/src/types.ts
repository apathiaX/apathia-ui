import { ComputedRef } from 'vue'
import type { TriggerType, PlacementType } from '@apathia/components/popper'

export interface DropdownInstance {
  hideOnClick?: ComputedRef<boolean>
}

export interface DropdownProps {
  delay?: number
  disabled?: boolean
  label?: string
  trigger?: TriggerType
  placement?: PlacementType
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
