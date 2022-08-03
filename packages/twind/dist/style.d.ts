import { Ref, ComputedRef } from 'vue';
export declare const style: (...args: any[]) => string;
declare type InferRef<T extends Ref> = T extends Ref<infer K> ? K : T extends ComputedRef<infer J> ? J : T;
export declare const getComputedStyle: <T extends Record<string, any>>(refs: T, func: (p: { [P in keyof T]: InferRef<T[P]>; }) => Record<string, string>) => ComputedRef<Record<string, string>>;
export {};
