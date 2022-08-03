import { watch, ref, nextTick, SetupContext } from 'vue'
// @ts-ignore
import { onClickOutside } from '@apathia/apathia.hooks'
// @ts-ignore
import { mountContainerDom } from '@apathia/apathia.shared'
import { pushModal, popModalStack } from './modalStack'
import { hideScrollbar } from './helper'
import type { ModalProps } from './types'

export function createModal(
  props: ModalProps,
  ctx: SetupContext<('close' | 'update:modelValue')[]>,
) {
  const shadeRef = ref<HTMLElement | null>(null)
  const modalRef = ref<HTMLElement | null>(null)
  const widthStyle = getWidthStyle(props.width, props.top)
  const isTemplate = !!ctx.slots.default

  mountContainerDom('modal')

  function templateClose() {
    if (props.beforeClose && props.beforeClose()) {
      ctx.emit('update:modelValue', false)
      popModalStack()
    }
  }
  function functionClose() {
    if (props.beforeClose && props.beforeClose()) {
      ctx.emit('close')
      popModalStack()
    }
  }

  const close = isTemplate ? templateClose : functionClose

  function bindClickOutside() {
    if (props.maskClosable === false) return

    function handleClose() {
      if (props.beforeClose && props.beforeClose()) {
        close()
      }
    }

    nextTick(() => {
      onClickOutside(modalRef, handleClose)
    })
  }

  watch(
    () => props.modelValue,
    show => {
      if (show) {
        pushModal({ close, props }) // esc close 事件栈
        hideScrollbar() // 隐藏滚动条来阻止滚动事件
        bindClickOutside() // 绑定点击蒙层关闭事件
        if (shadeRef.value) {
          shadeRef.value.scrollTop = 0
        }
      } else {
        ctx.emit('close')
      }
    },
  )

  return {
    shadeRef,
    modalRef,
    widthStyle,
    close,
    isTemplate,
  }
}

function getWidthStyle(width?: string | number, top?: string | number) {
  return `
    width: ${width}${typeof width === 'number' ? 'px' : ''};
    margin-top: ${top}${typeof top === 'number' ? 'px' : ''};
  `
}
