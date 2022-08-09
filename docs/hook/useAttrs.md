# useAttrs

更加方便高效的使用 Attrs，将 Attrs 转变成响应式数据

## 基础用法

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

## 参数

>`useAttrs(params)` 将会返回经过过滤的响应式的`attrs`对象, 其中一定不会包含 class, style。params 是一个配置对象，可配置两个属性

| 参数     |         说明         |     类型 | 默认值 |
| --------- | :-----------------: | --------: | -----: |
| excludeKeys | 配置除了 class, style, 还需要移除那些attr |  String[] | 无 |
| excludeListeners | 是否去除所有的事件 |  Boolean | false |
