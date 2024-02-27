// @ts-ignore
import { style } from '@apathia/apathia.twind'

export function mountContainerDom(
  name: string,
  callback?: (dom: HTMLElement) => void,
) {
  if (typeof window === 'undefined') return

  if (!document.querySelector(`.apathia-${name}`)) {
    const className = style`z-${name} relative` // 只有定位元素(position:relative/absolute/fixed)的 z-index 才有作用
    // 在第一次调用的时候挂载一次
    const modalContainerDom = document.createElement('div')
    modalContainerDom.className = `apathia-${name} ${className}`
    if (callback) callback(modalContainerDom)

    document.body.appendChild(modalContainerDom)
  }
}
