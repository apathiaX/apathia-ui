import { inject, computed, unref, type InjectionKey } from 'vue'
import type { MaybeRef } from '../utils'

export function useInjectProp<T>(
  injectKey: InjectionKey<MaybeRef<T>> | string,
  injectDefault: T,
  propRef?: MaybeRef<T | undefined>,
) {
  const injectValue = inject(injectKey, injectDefault)

  const finalValue = computed(() => {
    return propRef && unref(propRef) !== undefined
      ? unref(propRef)
      : unref(injectValue)
  })

  return finalValue
}
