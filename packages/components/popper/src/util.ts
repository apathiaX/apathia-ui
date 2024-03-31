import { isRef, Ref } from 'vue'
import { RefType } from './types'

export const isHTMLElement = (val: unknown): val is HTMLElement =>
  val instanceof HTMLElement

export const isRefType = (val: unknown): val is RefType => isRef(val)

export const isRefBoolean = (val: unknown): val is Ref<boolean> =>
  isRef(val) ? typeof val.value === 'boolean' : false
