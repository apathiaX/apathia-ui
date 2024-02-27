import type { RenderCustom } from '@apathia/shared'

export type ModalProps<T extends Record<string, any> = Record<string, any>> = {
  modelValue?: boolean
  title?: string
  subTitle?: string
  render?: RenderCustom
  renderHeader?: RenderCustom<T>
  top?: number | string
  width?: number | string
  showClose?: boolean
  maskClosable?: boolean
  keyboard?: boolean
  beforeClose?: () => boolean
  onClose?: () => void
}

export type ModalListItemProps = {
  props: ModalProps
  id: string
}

export type ModalEmits = {
  'update:modelValue': [value: boolean]
  close: []
}

export interface ModalInstance {
  props: ModalProps
  close: () => void
}
