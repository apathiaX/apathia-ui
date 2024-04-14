import { Ref, onBeforeUnmount, onMounted } from 'vue'

/**
 * useScroll 兼容移动端无法使触发 wheel 事件
 * @param el 事件监听元素
 * @param scrollFn 滚动处理方法
 * @param horizontal 是否为水平
 * @param smooth 移动端是否平滑滚动
 */
export const useScroll = (
  elRef: Ref<HTMLElement | null>,
  scrollFn: (distance: number) => void,
  horizontal: Ref<boolean>,
  smooth: boolean = true,
) => {
  let startX = 0
  let startY = 0
  let preDelta = 0
  let startTime = 0
  let momentum = 0

  function handleTouchStart(evt: TouchEvent) {
    document.body.style.overflow = 'hidden'
    const { pageX, pageY } = evt.touches[0]
    startX = pageX
    startY = pageY
    startTime = Date.now()
    momentum = 0 // Reset momentum on new touchstart
  }

  function easeOutCubic(x: number) {
    return 1 - Math.pow(1 - x, 3)
  }

  /** move 事件模拟平滑滚动 */
  function smoothScrollTo(targetDistance: number) {
    const duration = 500 // 滚动动画持续时间，单位为毫秒
    let startTime: null | number = null
    let preDistance = 0

    function scrollStep(timestamp: number) {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeProgress = easeOutCubic(progress)
      const scrollDistance = targetDistance * easeProgress

      scrollFn(scrollDistance - preDistance)
      preDistance = scrollDistance

      if (progress < 1) {
        requestAnimationFrame(scrollStep)
      }
    }

    requestAnimationFrame(scrollStep)
  }

  function handleTouchEnd() {
    document.body.style.overflow = 'scroll'
    preDelta = 0

    if (!smooth) return

    const acceleration = -0.005 // 减速率（像素/毫秒²）
    const distance = (momentum * momentum) / (2 * Math.abs(acceleration))

    smoothScrollTo(momentum > 0 ? distance : -distance)
  }

  function handleMobileScroll(evt: TouchEvent) {
    if (!startX || !startY) {
      return
    }

    let moveEndX = evt.touches[0].pageX
    let moveEndY = evt.touches[0].pageY

    let diffX = moveEndX - startX
    let diffY = moveEndY - startY

    return {
      deltaX: -diffX,
      deltaY: -diffY,
    }
  }

  function onMobileScroll(evt: TouchEvent) {
    const mobileDelta = handleMobileScroll(evt)
    const deltaX = mobileDelta?.deltaX || 0
    const deltaY = mobileDelta?.deltaY || 0
    const timeDiff = Date.now() - startTime

    const isPreventDefault = horizontal.value
      ? Math.abs(deltaY) < Math.abs(deltaX)
      : Math.abs(deltaX) < Math.abs(deltaY)
    if (isPreventDefault) {
      evt.preventDefault()
    }

    const delta = horizontal.value ? deltaX : deltaY
    momentum = (delta - preDelta) / timeDiff

    scrollFn(delta - preDelta)
    preDelta = delta
    startTime = Date.now()
  }

  function onScroll(evt: WheelEvent) {
    // 沿主轴方向滚动时，阻止滚轮事件的默认行为，防止触发页面滚动
    // 沿副轴方向滚动时，不阻止滚轮事件的默认行为，保持页面滚动
    const isPreventDefault = horizontal.value
      ? Math.abs(evt.deltaY) < Math.abs(evt.deltaX)
      : Math.abs(evt.deltaX) < Math.abs(evt.deltaY)
    if (isPreventDefault) {
      evt.preventDefault()
    }

    const delta = horizontal.value ? evt.deltaX : evt.deltaY

    scrollFn(delta)
  }

  onMounted(() => {
    if (elRef.value) {
      elRef.value.addEventListener('wheel', onScroll)
      elRef.value.addEventListener('touchstart', handleTouchStart)
      elRef.value.addEventListener('touchmove', onMobileScroll)
      elRef.value.addEventListener('touchend', handleTouchEnd)
    }
  })

  onBeforeUnmount(() => {
    if (elRef.value) {
      elRef.value.removeEventListener('wheel', onScroll)
      elRef.value.removeEventListener('touchstart', handleTouchStart)
      elRef.value.removeEventListener('touchmove', onMobileScroll)
      elRef.value.removeEventListener('touchend', handleTouchEnd)
    }
  })
}
