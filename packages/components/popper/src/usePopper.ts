import { onMounted, onUnmounted, watch, ref, nextTick } from 'vue'
import {
  createPopper,
  Instance as PopperInstance,
  StrictModifiers,
} from '@popperjs/core'
import {
  onClickOutside,
  useEventListener,
  mountContainerDom,
} from '@apathia/shared'
import { isRefType, isHTMLElement } from './util'
import type { EmitOption, PopperOption, ElementType } from './types'

export function usePopper(option: PopperOption, emitOption: EmitOption) {
  const contentRef = ref<HTMLElement | null>(null)
  const arrowRef = ref<HTMLElement | null>(null)
  const { emitVisible, emitHide, emitShow } = emitOption

  mountContainerDom('popper')

  let targetRef: ElementType
  if (option.component) {
    targetRef = option.component
  } else if (option.target) {
    targetRef = option.target
  } else {
    targetRef = ref<HTMLElement | null>(null)
  }

  let instance: PopperInstance | null = null

  const getTarget = () => {
    if (isHTMLElement(targetRef)) {
      return targetRef
    }

    return isRefType(targetRef)
      ? targetRef.value
      : (targetRef.$el as HTMLElement)
  }

  // 解决命名冲突
  const visibility = ref(!!option.modelValue)

  const detachPopper = () => {
    instance?.destroy?.()
    instance = null
  }

  // let timer: NodeJS.Timeout | null
  let timer: any | null

  const clearTimer = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  const show = () => {
    if (option.disabled) return
    visibility.value = true
    if (typeof option.modelValue === 'boolean') {
      emitVisible(true)
    }
    if (option.delayClose && option.trigger !== 'hover') {
      clearTimer()
      timer = setTimeout(() => {
        close()
      }, option.delayClose)
    }
  }

  const close = () => {
    visibility.value = false
    clearTimer()
    if (typeof option.modelValue === 'boolean') {
      emitVisible(false)
    }
    if (option.disabled) {
      detachPopper()
    }
  }

  let stopArr: (() => void)[] = []

  const handleEvent = () => {
    const targetEl = getTarget()

    if (!targetEl) return

    if (option.trigger === 'hover') {
      stopArr.push(
        useEventListener(targetEl, 'mouseenter', () => {
          clearTimer()
          if (visibility.value) {
            return
          }
          show()
        }),
      )
      stopArr.push(
        useEventListener(targetEl, 'mouseleave', () => {
          clearTimer()
          timer = setTimeout(() => {
            close()
          }, option.delayClose || option.delay)
        }),
      )
    }

    if (option.trigger === 'click') {
      stopArr.push(
        useEventListener(targetEl, 'click', e => {
          e.stopPropagation()
          if (visibility.value) {
            close()
          } else {
            show()
          }
        }),
      )
      stopArr.push(
        onClickOutside(targetEl, () => {
          if (visibility.value) {
            close()
          }
        }),
      )
    }

    if (option.trigger === 'focus') {
      stopArr.push(
        useEventListener(targetEl, 'focusin', () => {
          if (visibility.value) return
          show()
        }),
      )
      stopArr.push(
        useEventListener(targetEl, 'focusout', () => {
          close()
        }),
      )
    }
  }

  const modifiersArr: StrictModifiers[] = [
    {
      name: 'offset',
      options: {
        offset: [option.skidding, option.distance],
      },
    },
    {
      name: 'computeStyles',
      options: {
        adaptive: false,
        gpuAcceleration: false,
      },
    },
  ] as StrictModifiers[]
  const initPopper = () => {
    if (!visibility.value) {
      return
    }
    if (option.showArrow) {
      modifiersArr.push({
        name: 'arrow',
        phase: 'main',
        options: {
          element: arrowRef.value,
        },
      } as StrictModifiers)
    }
    const targetEl = getTarget()
    const contentEl = contentRef.value
    if (targetEl && contentEl) {
      createPopper(targetEl, contentEl, {
        placement: option.placement,
        modifiers: modifiersArr,
      })
    }
  }

  const handleContentEvent = () => {
    const contentEl = contentRef.value

    if (!contentEl) return

    if (option.trigger === 'hover') {
      stopArr.push(
        useEventListener(contentEl, 'mouseenter', () => {
          clearTimer()
        }),
      )
      stopArr.push(
        useEventListener(contentEl, 'mouseleave', () => {
          clearTimer()
          timer = setTimeout(() => {
            close()
          }, option.delayClose || option.delay)
        }),
      )
    }

    if (option.trigger === 'click') {
      stopArr.push(
        useEventListener(contentEl, 'mouseup', e => {
          e.stopPropagation()
        }),
      )
      stopArr.push(
        useEventListener(contentEl, 'click', e => {
          e.stopPropagation()
        }),
      )
    }
  }

  const hasMounted = ref(visibility.value)

  // 处理visibility变化
  const update = () => {
    if (!visibility.value) return

    if (instance) {
      instance.update()
    } else {
      initPopper()
    }
  }
  const watchVisible = (val: boolean) => {
    if (!hasMounted.value) {
      hasMounted.value = true
      nextTick(() => {
        update()
        handleContentEvent()
      })
      if (val) {
        emitShow(val, instance)
        return
      }
    }
    if (val) {
      update()
      emitShow(val, instance)
      return
    }
    emitHide(val, instance)
  }
  watch(visibility, watchVisible)

  const detachEvent = () => {
    stopArr.forEach(v => {
      v()
    })
    stopArr = []
  }

  watch(
    () => option.modelValue,
    val => {
      if (val !== undefined && !option.disabled) {
        if (val) {
          show()
        } else {
          close()
        }
      }
    },
  )

  onMounted(() => {
    handleEvent()
    initPopper()
  })
  onUnmounted(() => {
    if (timer) clearTimeout(timer)
    detachPopper()
    detachEvent()
  })

  return {
    contentRef,
    arrowRef,
    targetRef,

    update,
    instance,
    initPopper,
    detachPopper,
    visibility,
    hasMounted,
    show,
    close,
  }
}
