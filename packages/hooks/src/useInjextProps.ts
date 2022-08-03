import { inject, computed, unref } from 'vue'
import type { InjectionKey } from 'vue'
// @ts-ignore
import type { MaybeRef } from '@apathia/apathia.shared'

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
