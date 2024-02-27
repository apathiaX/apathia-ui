# useEventListener

更加方便优雅的使用 addEventListener
::: tip
useEventListener 应在 setup 内使用,这样才会在组件卸载时自动销毁监听。否则不会自动销毁。
:::

## 基础使用

> useEventListener(target, event, listener, options)

> useEventListener(event, listener, options) 不传 target 为 window

::: demo
<<< @/demos/useEventListener/Basic.vue
:::

## 监听键盘事件

::: demo

<<< @/demos/useEventListener/OnKeyboard.vue

:::
target

## 参数

`useEventListener(target, event, listener, options)` 将返回一个函数 `stop`, 用于销毁监听

| 参数     |                      说明                      |                                              类型 | 默认值 |
| -------- | :--------------------------------------------: | ------------------------------------------------: | -----: |
| target   | 绑定监听事件的 dom 元素（可选，默认为 window） |                                       HtmlElement | window |
| event    |       监听事件的类型。例如 click, input        |                                             Event |      - |
| listener |                    回调函数                    | (this: Window, ev: WindowEventMap[Event]) => void |      - |
| options  |       addEventlistener 的 options(可选)        |                           AddEventListenerOptions |      - |
