import { render, AppContext, VNode } from 'vue'

function getElement(container: Element | string): Element | null {
  if (typeof window === 'undefined') return null

  if (typeof container === 'string') {
    let res = document.querySelector(container)
    if (!res) {
      // eslint-disable-next-line no-console
      console.error(
        'Failed to render component: render target selector returned null.',
      )
      res = document.createElement('div')
    }
    return res
  }
  return container
}

export function mountComponent(
  vNode: VNode,
  element: Element | string,
  appContext?: AppContext,
) {
  let el = getElement(element)

  if (appContext) vNode.appContext = appContext
  if (el) render(vNode, el)

  const destroy = () => {
    if (el) render(null, el)
    el = null
  }

  return {
    vNode,
    destroy,
    el,
  }
}
