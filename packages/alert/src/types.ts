import { RenderFn } from '@apathia/apathia.custom-render'

export type AlertType = 'info' | 'warning' | 'danger' | 'success' | 'default'

export interface AlertProps {
  type?: AlertType
  duration?: number
  title?: string
  message?: string
  iconClass?: string[]
  showIcon?: boolean
  showClose?: boolean
  render?: RenderFn<{ close?: (...args: any) => any }>
}

export interface AlertListProps {
  props: AlertProps
  id: string
}