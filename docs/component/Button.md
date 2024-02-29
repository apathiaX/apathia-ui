# Button 按钮

常用的操作按钮

## 基础用法

使用 `primary` `success` `warning` `danger` `info` 来定义按钮的主题样式。<br/>
使用 `plain` `round` `circle` 来定义按钮的形状
:::demo

<<< @/demos/button/Basic.vue

:::

## 文字按钮

没有边框和背景色的按钮，设置 `bg` 字段设置文字按钮是否有背景

:::demo

<<< @/demos/button/Text.vue

:::

## 禁用状态

你可以使用`disabled`属性来定义按钮是否被禁用。

使用`disabled`属性来控制按钮是否为禁用状态。 该属性接受一个`Boolean`类型的值。
:::demo

<<< @/demos/button/Disabled.vue

:::

## 按钮大小

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

可使用`large`和`small`来设置按钮大小。
:::demo

<<< @/demos/button/Size.vue

:::

## 链接按钮

可以通过设置 `href` 属性，将按钮设置为链接按钮，并跳转至指定链接
:::demo

<<< @/demos/button/Link.vue

:::

## 加载状态

通过设置 `loading` 属性，将按钮设置为加载状态，显示加载按钮，同时可以通过插槽自定义加载状态的 icon，或者通过 `loadingIcon` 属性指定图标

:::demo

<<< @/demos/button/Loading.vue

:::

## 自定义 tag 按钮

通过 `tag` 指定按钮的元素类型

::: demo
<<< @/demos/button/Tag.vue
:::

## Button Props

| prop        |         说明         |               类型 | 默认值 |
| ----------- | :------------------: | -----------------: | -----: |
| tag         |    按钮 tag 类型     | div \| button \| a | button |
| href        |      是否为链接      |             string |     '' |
| primary     |    是否为主要模式    |            boolean |  false |
| success     |    是否为成功模式    |            boolean |  false |
| danger      |    是否为危险模式    |            boolean |  false |
| info        |    是否为信息模式    |            boolean |  false |
| warning     |    是否为警告模式    |            boolean |  false |
| plain       |    是否为简单模式    |            boolean |  false |
| text        |    是否为文字按钮    |            boolean |  false |
| loading     |    是否为加载状态    |            boolean |  false |
| loadingIcon |    加载状态的按钮    |          Component |  false |
| bg          | 文字按钮是否有背景色 |            boolean |  false |
| small       |        小尺寸        |            boolean |  false |
| large       |        大尺寸        |            boolean |  false |
| disabled    |         禁用         |            boolean |  false |

## Button Slots

| 插槽名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| default  | 显示内容 | -    |
| icon     | 图标     | -    |
| loading  | 加载图标 | -    |
