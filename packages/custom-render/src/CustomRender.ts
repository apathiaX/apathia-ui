import { defineComponent, h, PropType } from 'vue'
import type { RenderCustom, VNodeType } from './types'

export default defineComponent({
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
