import type { Ref, ComputedRef, defineComponent } from 'vue'

// type methods
/**
 * maybe a ref
 * type MaybeRef<T> = T | Ref<T>
 */
export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>
export type VueInstance = InstanceType<ReturnType<typeof defineComponent>>
export type MaybeElementRef = MaybeRef<Element | VueInstance | undefined | null>
export type MaybePromise<T> = T | Promise<T>

// types
export const isFunction = (val: unknown): val is Function =>
  typeof val === 'function'
export const isNumber = (val: unknown): val is number => typeof val === 'number'
export const isString = (val: unknown): val is string => typeof val === 'string'
export const isSymbol = (val: unknown): val is symbol => typeof val === 'symbol'
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'

export const isPromise = <T = any>(val: unknown): val is Promise<T> => {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

export function promiseWrapper<T>(promise: MaybePromise<T>) {
  return (isPromise(promise) ? promise : Promise.resolve(promise))
    .then(data => [data, null] as const)
    .catch(error => [null, error] as const)
}

export function raf(
  fn: FrameRequestCallback,
): ReturnType<typeof requestAnimationFrame> {
  return requestAnimationFrame(fn)
}
