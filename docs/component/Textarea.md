# Textarea

文本框

## 基础用法

使用 `v-model` 绑定输入的值

:::demo

<<< @/demos/textarea/Basic.vue

:::

## 自定义输入行和列

通过 `cols` 和 `rows` 来定义列和行的数量

:::demo

<<< @/demos/textarea/RowCol.vue

:::

## 禁用

通过将 `disabled` 设置为 `true` 来禁用输入框

:::demo

<<< @/demos/textarea/Disabled.vue

:::

## Props

::: tip
Textarea 的其他参数 同原生 textarea
:::

| prop     |       说明       |                    类型 | 默认值 |
| -------- | :--------------: | ----------------------: | -----: |
| v-model  |   输入内容控制   | String, Number, Boolean |  false |
| disabled | 是否启用禁用开关 |                 Boolean |  false |
