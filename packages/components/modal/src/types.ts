import type { RenderFn } from '@apathia/shared'

export type ModalProps<T extends Record<string, any> = Record<string, any>> = {
  modelValue?: boolean
  title?: string
  subTitle?: string
  render?: RenderFn | string
  renderHeader?: RenderFn<{ close: () => void }> | string
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
