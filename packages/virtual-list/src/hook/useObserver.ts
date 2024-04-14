import { onBeforeUnmount, onMounted, ref } from 'vue'
import type { IObserverItemProps } from '../type'

export const useObserverItem = (props: IObserverItemProps) => {
  const itemRefEl = ref<HTMLElement | null>(null)

  onMounted(() => {
    if (props.resizeObserver && itemRefEl.value) {
      props.resizeObserver.observe(itemRefEl.value)
    }
  })

  onBeforeUnmount(() => {
    if (props.resizeObserver && itemRefEl.value) {
      props.resizeObserver.unobserve(itemRefEl.value)
    }
  })

  return {
    itemRefEl,
  }
}
