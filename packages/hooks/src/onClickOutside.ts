import { ref } from 'vue'
// @ts-ignore
import { unrefElement, MaybeElementRef} from '@apathia/apathia.shared'
import { useEventListener } from './useEventListener'

/**
 *
 * @param {Object} target dom el
 * @param {function} handler callback function
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
