import { h } from 'vue';
import type { VNodeChild } from 'vue';
export declare type VNodeType = typeof h extends (p: infer U, ...args: any[]) => any ? U : never;
export declare type RenderFn<T extends Record<string, any> = Record<string, any>> = (arg?: T) => VNodeChild;
export declare type RenderCustom<T extends Record<string, any> = Record<string, any>> = string | RenderFn<T>;
