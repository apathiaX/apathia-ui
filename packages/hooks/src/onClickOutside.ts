import { ref, onMounted, onUnmounted } from 'vue'
// @ts-ignore
import { unrefElement, MaybeElementRef, noop } from '@apathia/apathia.shared'
import { useEventListener } from './useEventListener'

// const defaultEvents = ['click']

/**
 *
 * @param {Object} target dom el
 * @param {function} handler callback function
 * @param {scope} scope outside scope
 *
 * @return {function} stop stop listen function
 */
export function onClickOutside(
  target: MaybeElementRef,
  handler: EventListener,
) {
  const shouldListen = ref(true)

  const listener = (event: MouseEvent) => {
    const el = unrefElement(target)

    if (
      !el ||
      el === event.target ||
      event.composedPath().includes(el) ||
      !shouldListen.value
    )
      return

    handler(event)
  }

  const cleanup = [
    useEventListener(window, 'click', listener, {
      passive: true,
      capture: true,
    }),
    useEventListener(
      window,
      'pointerdown',
      e => {
        const el = unrefElement(target)
        shouldListen.value = !!el && !e.composedPath().includes(el)
      },
      { passive: true },
    ),
  ]

  const stop = () => cleanup.forEach(fn => fn())

  return stop
}

export function useClickAwayFixIOS() {
  onMounted(() => {
    if ('ontouchstart' in document.documentElement) {
      Array.from(document.body.children).forEach(e =>
        e.addEventListener('mouseover', noop),
      )
    }
  })

  onUnmounted(() => {
    if ('ontouchstart' in document.documentElement) {
      Array.from(document.body.children).forEach(e =>
        e.removeEventListener('mouseover', noop),
      )
    }
  })
}
