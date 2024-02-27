import { unref } from 'vue'
import { MaybeElementRef, VueInstance } from './types'

/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
export function unrefElement(elRef: MaybeElementRef) {
  const plain = unref(elRef)
  return (plain as VueInstance)?.$el ?? plain
}
