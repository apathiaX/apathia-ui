// @ts-ignore
import { noop, isFunction } from '@apathia/apathia.shared'
import type { SetupContext, Ref } from 'vue'

interface UserProps {
  disabled: Ref<boolean>
}

export default function useButton(userProps: UserProps, ctx: SetupContext) {
  const { disabled } = userProps
  // 没有自定义事件时默认值为空函数
  const {
    onclick = noop,
    ondblclick = noop,
    onmousedown = noop,
    onmouseup = noop,
  } = ctx.attrs

  const getButtonProps = () => ({
    disabled: !!disabled.value,
    onclick: !disabled.value && isFunction(onclick) ? onclick : noop,
    ondblclick: !disabled.value && isFunction(ondblclick) ? ondblclick : noop,
    onmousedown:
      !disabled.value && isFunction(onmousedown) ? onmousedown : noop,
    onmouseup: !disabled.value && isFunction(onmouseup) ? onmouseup : noop,
  })

  return {
    getButtonProps,
  }
}
