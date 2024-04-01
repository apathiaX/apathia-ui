# Tabs

标签页

::: tip 提示
`Tabs` 仅仅处理一层标签的情况。若有二级标签可使用 `Navbar` 组件。
:::

## 基础用法

通过 `v-model` 绑定选中值，`list` 定义显示选项

:::demo

<<< @/demos/tabs/Basic.vue

:::

## 下划线样式

通过指定 `type` 属性为 `underline` 定义导航的样式有下划线

:::demo

<<< @/demos/tabs/Underline.vue

:::

## 自定义显示样式

通过 `show-label` 可以自定义 `tab` 的显示内容

:::demo

<<< @/demos/tabs/Custom.vue

:::

## Props

| prop       |       说明        |                      类型 |       默认值 |
| ---------- | :---------------: | ------------------------: | -----------: |
| modelValue |      绑定值       |             string,number |           无 |
| list       |    tab 的配置     | string[], number[], any[] |           无 |
| underline  | 是否是下划线样式  |                   boolean |        false |
| showLabel  | 显示 label 的方法 |                  function | (tab) => tab |

## Events

> change: 修改时触发，参数 tab
