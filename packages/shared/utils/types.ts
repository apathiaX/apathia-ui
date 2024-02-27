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
