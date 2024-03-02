# onClickOutside

点击元素外触发事件

## 基础用法

::: demo
<<< @/demos/onClickOutside/Basic.vue
:::

## 参数

> `onClickOutside(target, handler, scope?)`返回一个停止监听的函数

| 参数    |              说明              |                           类型 | 默认值 |
| ------- | :----------------------------: | -----------------------------: | -----: |
| target  | 表示作用的元素，即哪个元素之外 | Ref<`HTMLElement`> HTMLElement |      - |
| handler |          事件处理函数          |                  EventListener |      - |
