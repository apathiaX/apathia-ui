import type { DirectiveBinding } from 'vue'
import { throttle } from 'lodash'

type El = HTMLElement & {
  __parent?: Element
  __reCompute?: () => any
}

// 表示元素要放置于参考元素的哪个位置？上方，下方，左方，右方
enum Position {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
}

// 表示元素要对齐哪个方向，顶对齐，底对齐（对于postion为left or right）,左对齐，右对齐（对于position为top或者bottom）
enum Align {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Middle = 'middle',
}

type DomPositon = {
  pos: Position
  align: Align
  isRoot: boolean
}

export default {
  beforeMount(el: HTMLElement) {
    el.style.position = 'absolute'
  },
  mounted(el: El, binding: DirectiveBinding) {
    autoset(el, binding)
    el.__reCompute = throttle(() => autoset(el, binding), 500)
    window.addEventListener('resize', el.__reCompute, true)
    window.addEventListener('scroll', el.__reCompute, true)
  },
  updated(el: El, binding: DirectiveBinding) {
    autoset(el, binding)
  },
  unmounted(el: El) {
    if (el.__reCompute) {
      window.removeEventListener('resize', el.__reCompute, true)
      window.removeEventListener('scroll', el.__reCompute, true)
    }
    el.__reCompute = undefined
  },
}

function autoset(el: El, binding: DirectiveBinding) {
  if (el.style.display === 'none') {
    return
  }

  // 获取锚点，就是要参考谁，放在谁的 下方/上方/左方/右方
  // 优先从binding中获取，如果没有，则取el的父节点
  let anchorNode = el.parentNode as Element
  const bindingNode = binding.value || el.__parent
  if (bindingNode) {
    if (bindingNode instanceof HTMLElement) {
      console.warn('v-auto-pos的值期望是一个DOM对象')
    } else {
      anchorNode = bindingNode
    }
  }
  if (!anchorNode) {
    return
  }
  el.__parent = anchorNode as Element

  const scrollTop = window.pageYOffset || 0
  const clientSize = {
    width: document.body.offsetWidth,
    height: window.innerHeight,
  }

  const elRect = el.getBoundingClientRect()
  const anchorElRect = anchorNode.getBoundingClientRect()

  const isRoot = !!binding.modifiers.root

  setElementPosition(
    el,
    resolvePosition(el, isRoot, clientSize, anchorElRect, elRect),
    anchorElRect,
    elRect,
    scrollTop,
  )
}

function checkPosition(pos?: Position, align?: Align) {
  const arrX = ['left', 'right']
  const arrY = ['top', 'bottom']

  if (pos === undefined || align === undefined) {
    return true
  }

  // dirty check
  const validPos =
    [Position.Top, Position.Bottom, Position.Left, Position.Right].indexOf(
      pos,
    ) > -1
  const validAlign =
    [Align.Top, Align.Top, Align.Left, Align.Right, Align.Middle].indexOf(
      align,
    ) > -1
  if (pos && !validPos) {
    console.warn(
      `${pos}不是一个合理的参数，必须是${[
        Position.Top,
        Position.Bottom,
        Position.Left,
        Position.Right,
      ].join(',')}中的一个`,
    )
    return false
  }
  if (align && !validAlign) {
    console.warn(
      `${align}不是一个合理的参数，必须是${[
        Align.Top,
        Align.Bottom,
        Align.Left,
        Align.Right,
        Align.Middle,
      ].join(',')}中的一个`,
    )
    return false
  }
  if (arrX.indexOf(pos) > -1 && align === Align.Middle) {
    // pos 为left，right时，不能居中对齐（垂直）
    console.warn(`pos为${pos}时，align不能为middle`)
    return false
  }
  if (
    pos &&
    validPos &&
    align &&
    validAlign &&
    ((arrX.indexOf(pos) > -1 && arrX.indexOf(align) > -1) ||
      (arrY.indexOf(pos) > -1 && arrY.indexOf(align) > -1))
  ) {
    console.warn(`${pos}与${align}是一组相对的元素`)
    return false
  }
  return true
}

function setElementPosition(
  el: HTMLElement,
  position: DomPositon,
  anchorElRect: DOMRect,
  currentElSize: DOMRect,
  scrollTop: number,
) {
  // pos is one of 'left' , 'right', 'top', 'bottom' 表示贴哪个边
  // align is one of 'left', 'right', 'top', 'bottom', 'middle' 表示对齐方式
  const { pos, align, isRoot } = position
  const {
    width: parentElWidth,
    height: parentElHeight,
    top: parentElTop,
    bottom: parentElBottom,
    left: parentElLeft,
    right: parentElRight,
  } = anchorElRect
  const { width: currentElWidth, height: currentElHeight } = currentElSize
  const opposite = {
    top: 'bottom',
    bottom: 'top',
    left: 'right',
    right: 'left',
  } as Record<Position | Align, Position>

  const style = {
    top: '',
    bottom: '',
    left: '',
    right: '',
  } as Record<Position, string>

  if (!isRoot) {
    style[opposite[pos]] = `${
      [Position.Left, Position.Right].indexOf(pos) > -1
        ? parentElWidth
        : parentElHeight
    }px`
    style[pos] = ''
    style[opposite[align]] = ''
    if (align === Align.Middle) {
      // 只有水平方向才有居中对齐
      style.left = `${(parentElWidth - currentElWidth) / 2}px`
      style.right = ''
    } else {
      style[align] = ''
    }
  } else {
    style.bottom = ''
    style.right = ''
    if ([Position.Top, Position.Bottom].includes(pos)) {
      style.top = `${
        scrollTop +
        parentElTop +
        (pos === Position.Top ? -currentElHeight : parentElHeight)
      }px`
      if (align === Align.Middle) {
        style.left = `${parentElLeft - (currentElWidth - parentElWidth) / 2}px`
      } else {
        style.left = `${
          align === Align.Left ? parentElLeft : parentElRight - currentElWidth
        }px`
      }
    } else {
      style.left = `${
        pos === Position.Left ? parentElLeft - currentElWidth : parentElRight
      }px`
      style.top = `${
        scrollTop +
        (align === Align.Top ? parentElTop : parentElBottom - currentElHeight)
      }px`
    }
  }
  Object.assign(el.style, style)
}

function resolvePosition(
  el: HTMLElement,
  isRoot: boolean,
  clientSize: { width: number; height: number },
  parentElRect: DOMRect,
  currentElSize: DOMRect,
): DomPositon {
  const { top } = parentElRect
  const bottom = clientSize.height - parentElRect.bottom
  const { height: currentElHeight } = currentElSize
  let delcarePos = false
  let delcareAlign = false
  let pos = Position.Bottom
  let align = Align.Left

  // 可以使用data-pos,data-align来实现动态绑定pos和align, 运行时确定
  const { pos: dataPos, align: dataAlign } = (el.dataset || {}) as {
    pos?: Position
    align?: Align
  }

  // 传进来的值不对，则仍使用默认值
  if ((dataPos || dataAlign) && !checkPosition(dataPos, dataAlign)) {
    return {
      pos,
      align,
      isRoot: false,
    }
  }

  if (dataPos) {
    delcarePos = true
    pos = dataPos
  }

  if (dataAlign) {
    delcareAlign = true
    align = dataAlign
  }

  // 判断贴哪个边
  if (!delcarePos) {
    const bottomEnough = bottom > currentElHeight
    const topEnough = top > currentElHeight

    // 有优先级，优先级别是bottom > top， 默认是bottom
    pos =
      (bottomEnough && Position.Bottom) ||
      (topEnough && Position.Top) ||
      Position.Bottom
  }
  // 判断对齐方式
  if (!delcareAlign) {
    // 如果是左右贴边，默认对其方式就不是left，而是bottom
    align =
      ((pos === Position.Left || pos === Position.Right) && Align.Bottom) ||
      Align.Left
  }
  return {
    pos,
    align,
    isRoot,
  }
}
