import { modalStack } from './modalStack'

export function hideScrollbar() {
  if (typeof window === 'undefined') return

  const html = document.documentElement
  if (html.scrollHeight - html.clientHeight > 0) {
    // 判断是否会出现滚动条
    document.body.style.overflow = 'hidden'
    document.body.style.width = 'calc(100% - 15px)'
  }
}

export function showScrollbar() {
  if (typeof window === 'undefined') return

  if (modalStack.length === 0) {
    document.body.style.overflow = 'auto'
    document.body.style.width = 'auto'
  }
}
