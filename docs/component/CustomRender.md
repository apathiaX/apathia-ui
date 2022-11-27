# CustomRender 自定义渲染

自定义渲染，可自定义渲染 `h函数` `JSX` 等

## 基础用法

自定义渲染的 `Html` 标签
::: tip as 自定义
可以通过 `as` 指定 `html` 的标签进行渲染
:::
:::demo

<<< @/../packages/custom-render/demo/Basic.vue

:::

## 自定义 render 函数

::: tip render 函数
可以通过给 `render` 属性传入 `h函数` 的方式，进行渲染
:::
:::demo

<<< @/../packages/custom-render/demo/Render.vue

:::

<!-- ## 自定义 JSX
::: tip JSX
可以通过给 `render` 属性传入一个返回值为 `JSX` 的函数进行渲染
:::
:::demo

<<< @/../packages/custom-rende/demo/JSXRender.vue

::: -->

## 使用 as 指定组件

::: demo
<<< @/../packages/custom-render/demo/As.vue

:::

## Props

| 参数   | 类型         | 是否必传 | 说明                                     | 默认值 |
| ------ | ------------ | -------- | ---------------------------------------- | ------ |
| render | RenderCustom | 否       | 自定义渲染函数，可以是字符串或者渲染函数 | -      |
| as     | VNodeType    | 否       | 指定渲染标签或者组件                     | -      |

## Slots

| 插槽名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| default  | 显示内容 | -    |
