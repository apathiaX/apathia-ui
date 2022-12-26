import { ref, onMounted, onUpdated, Ref } from 'vue'
import { debounce } from 'lodash-es'
import { useEventListener } from './useEventListener'

/**
 * 水平方向隐藏滚动条, 实现滚动.
 * * 需要将容器设置 overflow-hidden
 * @returns content ref
 */
export function useScrollX(translate:boolean = true) {
  const contentRef = ref<HTMLElement | null>(null) as Ref<HTMLElement | null>

  let stop: ((...args: any) => void) | null = null
  const listenerWheel = () => {
    if (stop) {
      stop()
    }
    const el = contentRef.value
    const clientWidth = el?.clientWidth || 0
    const scrollWidth = el?.scrollWidth || 0

    if (el && scrollWidth > clientWidth) {
      stop = useEventListener(el as HTMLElement, 'wheel', wheel, { passive: true })
    }

    if (el && scrollWidth <= clientWidth) {
      if (el) el.style.transform = ''
    }
  }

  onUpdated(listenerWheel)

  onMounted(listenerWheel)
  useEventListener('resize', debounce(listenerWheel, 400))

  function getCurrentTranslate() {
    if (translate) {
      const res = /\d+/.exec(contentRef.value?.style.transform || '')
      return res ? +res : 0
    }
    return contentRef.value?.scrollLeft || 0
  }

  function setTranslate(value: number) {
    const el = contentRef.value
    if (!el) return
    if (translate) {
      el.style.transform = `translateX(-${value}px)`
    } else {
      el.scrollLeft = value
    }
  }

  function wheel(e: WheelEvent) {
    const el = contentRef.value
    const clientWidth = el?.clientWidth || 0
    const scrollWidth = el?.scrollWidth || 0
    const maxTranslate = scrollWidth - clientWidth

    // https://stackoverflow.com/questions/54258968/how-to-fix-property-wheeldelta-does-not-exist-on-type-wheelevent-while-u
    // delta 正负表示方向, 大小表示速度. + 向上滚动 | - 向下滚动
    const speed = e.deltaY < 0 ? e.deltaY : -e.deltaY
    const step = parseInt(`${(clientWidth / 3000) * speed}`, 10)
    const currTranslate = getCurrentTranslate()

    let finalTranslate = currTranslate
    if (e.deltaY < 0)
      finalTranslate = currTranslate - step < 0 ? 0 : currTranslate - step
    if (e.deltaY > 0)
      finalTranslate =
        currTranslate + step > maxTranslate
          ? maxTranslate
          : currTranslate + step

    // if (el) el.style.transform = `translateX(-${finalTranslate}px)`
    setTranslate(finalTranslate)
  }

  return {
    contentRef,
  }
}
