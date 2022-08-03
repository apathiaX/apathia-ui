# useAttrs

响应式 `attrs`

## 使用方法

```js
import { useAttrs } from '@apathia/apathia'

export default {
  setup(props, { attrs }) {
    // 默认不包含style, class
    const attrExcludeClassStyle = useAttrs()
    // 不包含所有的事件以及style, class
    const attrExcludeClassStyleEvent = useAttrs({
      excludeListener: true
    })
  }
}
```

## api

`useAttrs(params)` 将会返回经过过滤的响应式的`attrs`对象, 其中一定不会包含 class, style。params 是一个配置对象，可配置两个属性
- excludeKeys: 接收一个字符串数组，用于配置除了 class, style, 还需要移除那些attr
- excludeListeners: 接收一个布尔值，表示是否去除所有的事件，默认是false
