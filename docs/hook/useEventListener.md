# useEventListener

useEventListener 应在 setup 内使用,这样才会在组件卸载时自动销毁监听。否则不会自动销毁。

```js
import { useEventListener } from '@apathia/apathia'

export default {
  setup() {
    useEventListener('click', () => {
      console.log(1)
    })
  }
}
```

<CodePreview title="语法" noPreview></CodePreview>

> useEventListener(target, event, listener, options)

> useEventListener(event, listener, options) 不传 target 为 window

<CodePreview title="参数" noPreview></CodePreview>

target

>绑定监听事件的dom元素

event

>监听事件的类型。例如 click, input

listener

>回调函数

options

>addEventlistener 的 options

<CodePreview title="返回值" noPreview></CodePreview>

返回一个函数 stop, 用于销毁监听