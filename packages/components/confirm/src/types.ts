import type { RenderCustom } from '@apathia/shared'

export type PositionType = 'left' | 'center' | 'right'

export type ConfirmProps = {
  render?: string | RenderCustom
  renderFooter?: RenderCustom<{
    confirm?: (...args: any) => any
    cancel?: (...args: any) => any
  }>
  confirmText?: string
  cancelText?: string
  btnPosition?: PositionType
  confirm?: (...args: any) => any
  cancel?: (...args: any) => any
}
