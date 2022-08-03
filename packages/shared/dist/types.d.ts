import type { Ref, ComputedRef, defineComponent } from 'vue';
/**
 * maybe a ref
 * type MaybeRef<T> = T | Ref<T>
 */
export declare type MaybeRef<T> = T | Ref<T> | ComputedRef<T>;
export declare type VueInstance = InstanceType<ReturnType<typeof defineComponent>>;
export declare type MaybeElementRef = MaybeRef<Element | VueInstance | undefined | null>;
export declare type MaybePromise<T> = T | Promise<T>;
export declare const isFunction: (val: unknown) => val is Function;
export declare const isNumber: (val: unknown) => val is number;
export declare const isString: (val: unknown) => val is string;
export declare const isSymbol: (val: unknown) => val is symbol;
export declare const isObject: (val: unknown) => val is Record<any, any>;
export declare const isPromise: <T = any>(val: unknown) => val is Promise<T>;
export declare function promiseWrapper<T>(promise: MaybePromise<T>): Promise<readonly [T, null] | readonly [null, any]>;
export declare function raf(fn: FrameRequestCallback): ReturnType<typeof requestAnimationFrame>;
