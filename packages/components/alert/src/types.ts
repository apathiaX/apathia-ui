import type { RenderFn } from '@apathia/shared'

export type AlertType = 'info' | 'warning' | 'danger' | 'success' | 'primary'

export interface AlertProps {
  type?: AlertType
  duration?: number
  title?: string
  message?: string
  showIcon?: boolean
  showClose?: boolean
  effect?: 'light' | 'dark'
  render?: RenderFn<{ close: (...args: any) => any }>
}

export interface AlertListProps {
  props: AlertProps
  id: string
}
