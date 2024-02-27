import { type Ref, type ComputedRef, computed, unref } from 'vue'
import { tw, apply } from 'twind'

type MaybeRef<T> = ComputedRef<T> | Ref<T> | T

// 封装tw
export const style = (...args: any[]) => {
  if (
    args.length > 0 &&
    !Array.isArray(args[0]) &&
    typeof args[0] === 'string' &&
    args[0].includes('=>')
  ) {
    console.warn(
      // eslint-disable-next-line no-template-curly-in-string
      '请使用模版字符串调用 style`a b ${css`a`}`, 不要用 style(`a b ${css`a`}`)。',
    )
  }
  return tw(apply(...args))
}

type InferRef<T extends Ref> = T extends Ref<infer K>
  ? K
  : T extends ComputedRef<infer J>
  ? J
  : T

export const getComputedStyle = <T extends Record<string, MaybeRef<any>>>(
  refs: T,
  func: (p: { [P in keyof T]: InferRef<T[P]> }) => Record<string, string>,
) => {
  return computed(() => {
    const unrefProps = Object.keys(refs).reduce((acc, key) => {
      acc[key as keyof T] = unref(refs[key])
      return acc
    }, {} as { [P in keyof T]: InferRef<T[P]> })

    return func.call(null, unrefProps)
  })
}
