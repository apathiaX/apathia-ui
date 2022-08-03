# onClickOutside

点击元素外触发事件

## 基础用法

```html
<template>
  <button ref="btnRef">click me<button>
</template>

<script>
import { onClickOutside } from '@apathia/apathia'

export default {
  setup() {
    const btnRef = ref(null)
    onClickOutside(btnRef, () => {
      console.log('你点到外面啦')
    })

    return {
      btnRef
    }
  }
}
</script>
```

## api

`onClickOutside(target, handler, scope?)`

- target: `Ref<HTMLElement>` 或者 `HTMLElement`, 表示作用的元素，即哪个元素之外。
- handler: 事件处理函数，接收一个事件对象，当点击元素之外需要触发的事件
- scope: 非必传，作用范围。点击事件在scope之内才会调用handler, 默认是 `window`
