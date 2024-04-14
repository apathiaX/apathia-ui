import { CSSProperties, computed, ref, watch } from 'vue'
import {
  IScrollBarProps,
  IScrollbarEmitFn,
  RenderThumbStyleParams,
} from './type'

const BAR_MAP = {
  vertical: {
    offset: 'offsetHeight',
    scrollSize: 'scrollHeight',
    size: 'height',
    key: 'vertical',
    axis: 'Y',
    client: 'clientY',
    direction: 'top',
  },
  horizontal: {
    offset: 'offsetWidth',
    scrollSize: 'scrollWidth',
    size: 'width',
    key: 'horizontal',
    axis: 'X',
    client: 'clientX',
    direction: 'left',
  },
} as const

const SCROLLBAR_MIN_SIZE = 20

export const useScrollbar = (
  props: IScrollBarProps,
  emitFn: IScrollbarEmitFn,
) => {
  const thumbRef = ref<HTMLElement | null>(null)
  const trickRef = ref<HTMLElement | null>(null)

  const isDragging = ref(false)
  const offset = ref(0)
  const clickOffset = ref(0)

  const bar = computed(() => BAR_MAP[props.direction || 'vertical'])

  const renderThumbStyle = (options: RenderThumbStyleParams) => {
    const { bar, move, size, direction } = options
    const style: CSSProperties = {}
    const translate = `translate${bar.axis}(${move}px)`

    style[bar.size] = size
    style.transform = translate
    style.msTransform = translate
    style.backgroundColor = props.bgColor || '#909399'

    if (direction === 'horizontal') {
      style.height = '100%'
    } else {
      style.width = '100%'
    }

    return style
  }

  const thumbSize = computed(() => {
    const ratio = (props.clientSize * 100) / props.listSize
    if (ratio >= 100) {
      return Number.POSITIVE_INFINITY
    }
    if (ratio >= 50) {
      return (ratio * props.clientSize) / 100
    }
    const SCROLLBAR_MAX_SIZE = props.clientSize / 3
    return Math.floor(
      Math.min(
        Math.max((ratio * props.clientSize) / 100, SCROLLBAR_MIN_SIZE),
        SCROLLBAR_MAX_SIZE,
      ),
    )
  })

  const trackStyle = computed<CSSProperties>(() => {
    return {
      position: 'absolute',
      width:
        props.direction === 'horizontal' ? `${props.clientSize}px` : '10px',
      height:
        props.direction === 'horizontal' ? '10px' : `${props.clientSize}px`,
      [bar.value.direction]: '2px',
      right: '2px',
      bottom: '2px',
      borderRadius: '4px',
      zIndex: 11,
    }
  })

  const thumbStyle = computed(() => {
    if (!Number.isFinite(thumbSize.value)) {
      return {
        display: 'none',
      }
    }
    const thumb = `${thumbSize.value}px`

    const style: CSSProperties = renderThumbStyle({
      bar: {
        size: bar.value.size,
        axis: props.direction === 'horizontal' ? 'X' : 'Y',
      },
      size: thumb,
      move: offset.value,
      direction: props.direction,
    })

    return style
  })

  const totalOffset = computed(() => props.clientSize - thumbSize.value - 4)

  let onselectstartStore: null | typeof document.onselectstart = null
  const detachEvents = () => {
    window.removeEventListener('mousemove', onThumbMove)
    window.removeEventListener('touchmove', onThumbMove)
    window.removeEventListener('mouseup', onThumbUp)
    window.removeEventListener('touchend', onThumbUp)

    if (!thumbRef.value) return

    onselectstartStore = document.onselectstart
    document.onselectstart = () => false

    thumbRef.value.addEventListener('touchmove', onThumbMove)
    thumbRef.value.addEventListener('touchend', onThumbUp)
  }

  const attachEvents = () => {
    window.addEventListener('mousemove', onThumbMove)
    window.addEventListener('touchmove', onThumbMove)
    window.addEventListener('mouseup', onThumbUp)
    window.addEventListener('touchend', onThumbUp)
    document.onselectstart = onselectstartStore
    onselectstartStore = null

    if (!thumbRef.value) return

    thumbRef.value.removeEventListener('touchmove', onThumbMove)
    thumbRef.value.removeEventListener('touchend', onThumbMove)
  }

  const onThumbDown = (e: MouseEvent | TouchEvent) => {
    document.body.style.overflow = 'hidden'
    e.stopPropagation()
    isDragging.value = true
    if (e.type === 'touchstart') {
      if ((e as TouchEvent).touches.length === 0) return
      clickOffset.value =
        (e.target as HTMLElement)![bar.value.offset] -
        ((e as TouchEvent).touches[0][bar.value.client] -
          (e.target as HTMLElement).getBoundingClientRect()[
            bar.value.direction
          ])
    } else {
      clickOffset.value =
        (e.currentTarget as HTMLElement)![bar.value.offset] -
        ((e as MouseEvent)[bar.value.client] -
          (e.currentTarget as HTMLElement).getBoundingClientRect()[
            bar.value.direction
          ])
    }
    attachEvents()
    emitFn.startScroll(offset.value)
  }

  const onThumbUp = (e: Event) => {
    e.preventDefault()
    isDragging.value = false
    clickOffset.value = 0
    detachEvents()

    emitFn.endScroll(offset.value)

    document.body.style.overflow = 'scroll'
  }

  let frameHandle: null | number = null
  const onThumbMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging.value) return
    e.preventDefault()
    if (!thumbRef.value || !trickRef.value) return
    const prevClickOffset = clickOffset.value
    if (!prevClickOffset) return
    cancelAnimationFrame(frameHandle as number)
    // 移动端兼容
    let clientSize = 0
    if (e.type === 'touchmove') {
      if ((e as TouchEvent).touches.length === 0) return
      clientSize = (e as TouchEvent).touches[0][bar.value.client]
    } else {
      clientSize = (e as MouseEvent)[bar.value.client]
    }
    const tempOffset =
      (trickRef.value.getBoundingClientRect()[bar.value.direction] -
        clientSize) *
      -1
    const thumbClickPosition =
      thumbRef.value[bar.value.offset] - prevClickOffset
    let distance = tempOffset - thumbClickPosition
    if (distance < 0) {
      distance = 0
    }
    if (distance > totalOffset.value) {
      distance = totalOffset.value
    }
    if (emitFn.scroll) {
      emitFn.scroll(distance / totalOffset.value)
    }
    frameHandle = requestAnimationFrame(() => {
      offset.value = distance
    })
  }

  const onClickTrack = (e: MouseEvent) => {
    // 点击滚动条时，thumb 中点定位到鼠标点击位置
    if (!trickRef.value) return
    let mousePosition =
      e[bar.value.client] -
      trickRef.value.getBoundingClientRect()[bar.value.direction] -
      thumbSize.value / 2
    if (mousePosition < 0) {
      mousePosition = 0
    } else if (mousePosition > totalOffset.value) {
      mousePosition = totalOffset.value
    }
    if (emitFn.scroll) {
      emitFn.scroll(mousePosition / totalOffset.value)
    }
    offset.value = mousePosition
  }

  watch(
    () => props.scrollFrom,
    val => {
      if (isDragging.value) return
      if (val === undefined) {
        offset.value = 0
        return
      }
      offset.value = val * totalOffset.value
    },
  )

  return {
    thumbRef,
    trickRef,
    trackStyle,
    thumbStyle,

    onClickTrack,
    onThumbDown,
  }
}
