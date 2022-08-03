import { h } from 'vue'
// @ts-ignore
import { useModal } from '@apathia/apathia.modal'
// @ts-ignore
import type { RenderCustom } from '@apathia/apathia.custom-render'
import Confirm from './Confirm.vue'

const defaultOptions = {
  title: '',
  render: '',
  confirmText: '确认',
  cancelText: '取消',
  btnPosition: 'right',
}

type ConfirmProps = {
  render: string | RenderCustom
  renderFooter?: RenderCustom<{
    confirm?: (...args: any) => any
    cancel?: (...args: any) => any
  }>
  confirmText?: string
  cancelText?: string
  btnPosition?: 'left' | 'right' | 'center'
}

type ModalProps = {
  modelValue?: boolean
  title?: string
  subTitle?: string
  render?: RenderCustom
  top?: number | string
  width?: number | string
  showClose?: boolean
  maskClosable?: boolean
  keyboard?: boolean
  beforeClose?: () => boolean
  onClose?: () => void
}

export function useConfirm() {
  const { modal, remove } = useModal()

  function confirm(options: ConfirmProps & ModalProps) {
    const {
      render,
      renderFooter,
      confirmText,
      cancelText,
      btnPosition,
      ...modalOptions
    } = {
      ...defaultOptions,
      ...options,
    }
    const confirmOptions = {
      render,
      renderFooter,
      confirmText,
      cancelText,
      btnPosition,
    }
    return new Promise((resolve, reject) => {
      function doConfirm() {
        resolve(null)
        remove()
      }

      function doCancel() {
        reject()
        remove()
      }

      modal({
        showClose: false,
        width: 450,
        ...modalOptions,
        render: () =>
          h(Confirm, {
            ...confirmOptions,
            confirm: doConfirm,
            cancel: doCancel,
          }),
      })
    })
  }

  return { confirm, remove }
}
