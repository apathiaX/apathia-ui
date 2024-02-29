import type { Component, Ref } from 'vue'

export interface ButtonProps {
  tag?: string | object
  href?: string
  icon?: Component
  loading?: boolean
  loadingIcon?: Component
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
  bg?: boolean
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
