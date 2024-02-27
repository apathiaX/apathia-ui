import { h } from 'vue'
import type { VNodeChild } from 'vue'

export type VNodeType = typeof h extends (p: infer U, ...args: any[]) => any
  ? U
  : never

export type RenderFn<T extends Record<string, any> = Record<string, any>> = (
  arg?: T,
) => VNodeChild

// 自定义渲染的数据类型可以是字符或者渲染函数
export type RenderCustom<T extends Record<string, any> = Record<string, any>> =
  | string
  | RenderFn<T>
