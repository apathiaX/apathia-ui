import type { InjectionKey } from 'vue';
import type { MaybeRef } from '@apathia/apathia.shared';
export declare function useInjectProp<T>(injectKey: InjectionKey<MaybeRef<T>> | string, injectDefault: T, propRef?: MaybeRef<T | undefined>): import("vue").ComputedRef<T | import("vue").ComputedRef<T> | undefined>;
