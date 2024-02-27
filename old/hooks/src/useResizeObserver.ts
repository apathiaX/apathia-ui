import { onUnmounted, watch } from 'vue'
// @ts-ignore
import { MaybeElementRef, unrefElement } from '@apathia/apathia.shared'

export function useResizeObserver(
  target: MaybeElementRef,
  callback: ResizeObserverCallback,
  options: ResizeObserverOptions = {},
) {
  let observer: ResizeObserver | undefined
  const isSupported = window && 'ResizeObserver' in window

  const cleanup = () => {
    if (observer) {
      observer.disconnect()
      observer = undefined
    }
  }

  const stopWatch = watch(
    () => unrefElement(target),
    el => {
      cleanup()

      if (isSupported && window && el) {
        observer = new ResizeObserver(callback)
        observer?.observe(el, options)
      }
    },
    { immediate: true, flush: 'post' },
  )

  const stop = () => {
    cleanup()
    stopWatch()
  }

  onUnmounted(stop)

  return {
    isSupported,
    stop,
  }
}
