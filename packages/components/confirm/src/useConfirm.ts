import { h } from 'vue'
import {
  modal,
  removeModal as remove,
  type ModalProps,
} from '@apathia/components/modal'
import Confirm from './Confirm.vue'
import { ConfirmProps } from './types'

const defaultOptions = {
  title: '',
  render: '',
  confirmText: '确认',
  cancelText: '取消',
  btnPosition: 'right',
}

export function useConfirm() {
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
          h<ConfirmProps>(Confirm, {
            ...confirmOptions,
            confirm: doConfirm,
            cancel: doCancel,
          } as ConfirmProps),
      })
    })
  }

  return { confirm, remove }
}
