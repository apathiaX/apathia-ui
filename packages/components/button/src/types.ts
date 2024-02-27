import type { Ref } from 'vue'

export interface ButtonProps {
  tag?: string | object
  href?: string
  icon?: boolean
  loading?: boolean
  primary?: boolean
  success?: boolean
  danger?: boolean
  info?: boolean
  warning?: boolean
  plain?: boolean
  large?: boolean
  small?: boolean
  text?: boolean
  round?: boolean
  circle?: boolean
  disabled?: boolean
}

export interface ButtonUseProps {
  disabled: Ref<boolean>
}

export type ButtonThemeType =
  | 'primary'
  | 'success'
  | 'danger'
  | 'info'
  | 'warning'
