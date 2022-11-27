# Icon 图标

基于 `fontawsome` 二次封装的 `Icon` 组件

## 基础用法

::: info 用法
在 [fontawsome](https://fontawesome.com/docs/web/use-with/vue/) 官网找到对应图标的名称,作为 `name` 属性传入组件即可。<br/>
传入的方式采用数组的形式：['fa', '图标名']
:::

::: demo
<<< @/../packages/icon/demo/Basic.vue
:::

## Icon Props

| 参数 | 类型  | 是否必传 | 说明     | 默认值 |
| ---- | ----- | -------- | -------- | ------ |
| name | array | 是       | 图标名称 | -      |
