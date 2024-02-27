import { defineComponent, h } from 'vue'
import type { PropType, VNodeChild } from 'vue'

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

export const CustomRender = defineComponent({
  name: 'Render',

  inheritAttrs: false,

  props: {
    render: {
      type: [Function, String] as PropType<RenderCustom>,
    },
    // 只有当render是字符串时生效
    as: {
      type: [String, Object] as PropType<VNodeType>,
      default: 'span',
    },
  },

  setup(props, { attrs, slots }) {
    return () =>
      typeof props.render !== undefined && typeof props.render === 'function'
        ? // 如果传入的是h函数就直接将attrs复制给h函数
          props.render(attrs)
        : // 可以直接渲染传入的 字符串 也可以渲染传入的默认插槽
          h(props.as, attrs, {
            default: () => props.render || slots?.default?.(),
          })
  },
})
