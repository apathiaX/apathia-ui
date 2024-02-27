import type { DirectiveBinding } from 'vue'
import { throttle } from 'lodash-es'

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

// 表示元素要对齐哪个方向，顶对齐，底对齐（对于position为left or right）,左对齐，右对齐（对于position为top或者bottom）
enum Align {
  Top = 'top',
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Middle = 'middle',
}

type DomPosition = {
  pos: Position
  align: Align
  isRoot: boolean
}

/**
 * dom 元素位置的设定
 */
export const autoPos = {
  beforeMount(el: HTMLElement) {
    el.style.position = 'absolute'
  },
  mounted(el: El, binding: DirectiveBinding) {
    autoSet(el, binding)
    el.__reCompute = throttle(() => autoSet(el, binding), 500)
    window.addEventListener('resize', el.__reCompute, true)
    window.addEventListener('scroll', el.__reCompute, true)
  },
  updated(el: El, binding: DirectiveBinding) {
    autoSet(el, binding)
  },
  unmounted(el: El) {
    if (el.__reCompute) {
      window.removeEventListener('resize', el.__reCompute, true)
      window.removeEventListener('scroll', el.__reCompute, true)
    }
    el.__reCompute = undefined
  },
}

function autoSet(el: El, binding: DirectiveBinding) {
  if (el.style.display === 'none') {
    return
  }

  // 获取锚点，就是要参考谁，放在谁的 下方/上方/左方/右方
  // 优先从binding中获取，如果没有，则取el的父节点
  let anchorNode = el.parentNode as Element
  const bindingNode = binding.value || el.__parent
  if (bindingNode) {
    if (!(bindingNode instanceof HTMLElement)) {
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
  // 获取元素的位置，包含 top right bottom left width height
  const elRect = el.getBoundingClientRect()
  const anchorElRect = anchorNode.getBoundingClientRect()
  // 判断是不是有根元素
  const isRoot = !!binding.modifiers.root

  setElementPosition(
    el,
    resolvePosition(el, isRoot, clientSize, anchorElRect, elRect),
    anchorElRect,
    elRect,
    scrollTop,
  )
}

// 检查设置的元素的位置是否符合要求
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
  position: DomPosition,
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
    // 没有绑定元素的情况，默认为body
    // 如果位置为左右时，将左或右的位置设置为绑定元素的宽度，反之则为绑定元素的高度
    // 位置时相反的， 比如 如果要在绑定元素的右边应该是距离左边绑定元素的宽度
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

// 处理元素的放置位置
function resolvePosition(
  el: HTMLElement,
  isRoot: boolean,
  clientSize: { width: number; height: number },
  parentElRect: DOMRect,
  currentElSize: DOMRect,
): DomPosition {
  // 获取绑定元素到顶部的距离
  const { top } = parentElRect
  // 获取绑定元素到页面底部的距离
  const bottom = clientSize.height - parentElRect.bottom
  // 当前元素到顶部的距离
  const { height: currentElHeight } = currentElSize
  let declarePos = false
  let declareAlign = false
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
    declarePos = true
    pos = dataPos
  }

  if (dataAlign) {
    declareAlign = true
    align = dataAlign
  }

  // 判断贴哪个边
  if (!declarePos) {
    // 判断绑定元素到底部的距离是否大于元素的距离，即判断绑定元素到底部的距离够不够放置目标元素
    const bottomEnough = bottom > currentElHeight
    // 同理判断到顶部距离够不够
    const topEnough = top > currentElHeight

    // 有优先级，优先级别是bottom > top， 默认是bottom
    pos =
      (bottomEnough && Position.Bottom) ||
      (topEnough && Position.Top) ||
      Position.Bottom
  }
  // 判断对齐方式
  if (!declareAlign) {
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
