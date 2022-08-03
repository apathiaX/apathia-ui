// https://github.com/element-plus/element-plus/blob/dev/packages/hooks/use-attrs/index.ts
import { getCurrentInstance, reactive, shallowRef, watchEffect } from 'vue'

interface Params {
  excludeListeners?: boolean
  excludeKeys?: string[]
}

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

export function useAttrs(params: Params = {}) {
  const { excludeListeners = false, excludeKeys = [] } = params
  // https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance
  // 用于获取组件实例，并且只能在setup和生命周期函数中使用
  const instance = getCurrentInstance()
  const attrs = shallowRef({})
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS)

  if (!instance) {
    console.warn('[useAttrs]只能在setup方法中使用')
    return attrs
  }

  // Since attrs are not reactive, make it reactive instead of doing in `onUpdated` hook for better performance
  instance.attrs = reactive(instance.attrs)

  watchEffect(() => {
    const res = Object.entries(instance.attrs).reduce<Record<string, any>>(
      (acm, [key, val]) => {
        if (
          !allExcludeKeys.includes(key) &&
          !(excludeListeners && LISTENER_PREFIX.test(key))
        ) {
          acm[key] = val
        }

        return acm
      },
      {},
    )

    attrs.value = res
  })

  return attrs
}
