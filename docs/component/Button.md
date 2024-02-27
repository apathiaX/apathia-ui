# BaseButton 按钮

常用的操作按钮

## 基础用法

使用 `primary` `success` `warining` `danger` `plain`、`round` 等字段来定义按钮的样式。
:::demo

<<< @/demos/button/Basic.vue

:::

## 文字按钮

没有边框和背景色的按钮
:::demo

<<< @/demos/button/Text.vue

:::

## 禁用状态

你可以使用`disabled`属性来定义按钮是否被禁用。

使用`disabled`属性来控制按钮是否为禁用状态。 该属性接受一个`Boolean`类型的值。
:::demo

<<< @/demos/button/State.vue

:::

## 按钮大小

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

可使用`large`和`small`来设置按钮大小。
:::demo

<<< @/demos/button/Size.vue

:::

## 链接按钮

可以通过制定 `href` 属性，将按钮设置为链接按钮，并跳转至指定链接
:::demo

<<< @/demos/button/Link.vue

:::

## loading

:::demo

<<< @/demos/button/Loading.vue

:::

## 自定义按钮

可以通过默认插槽的方式自定义按钮

::: demo
<<< @/demos/button/Custom.vue
:::

## Button Props

| prop      |     说明      |          类型 | 默认值 |
| --------- | :-----------: | ------------: | -----: |
| tag       | component tag | string,object | button |
| href      |     链接      |        string |     '' |
| primary   |     基础      |       boolean |  false |
| secondary |     次要      |       boolean |  false |
| success   |     成功      |       boolean |  false |
| danger    |     危险      |       boolean |  false |
| info      |     信息      |       boolean |  false |
| warning   |     警告      |       boolean |  false |
| plain     |   文字模式    |       boolean |  false |
| active    |    激活的     |       boolean |  false |
| small     |    小尺寸     |       boolean |  false |
| large     |    大尺寸     |       boolean |  false |
| disabled  |     禁用      |       boolean |  false |
