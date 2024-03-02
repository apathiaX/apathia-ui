# Affix

固钉

Affix 组件 用于将内容固定页面的位置，不随着页面滚动而改变位置

## 基础用法

固定顶部

::: demo

<<< @/demos/affix/Basic.vue

:::

## 偏移

固定在顶部指定位置
::: demo

<<< @/demos/affix/Top.vue

:::

## 状态改变时的回调

::: demo

<<< @/demos/affix/Events.vue

:::

## 固定底部

::: demo

<<< @/demos/affix/Bottom.vue

:::

## Props

| 参数          | 类型   | 是否必传 | 说明           | 默认值 |
| ------------- | ------ | -------- | -------------- | ------ |
| offset-top    | number | 否       | 距离顶部的距离 | 0      |
| offset-bottom | number | 否       | 距离底部的距离 | -      |

## Events

| 事件名称 | 说明                 | 回调参数   |
| -------- | -------------------- | ---------- |
| change   | 当固定状态改变时触发 | true/false |

## Slots

| 插槽名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| default  | 显示内容 | -    |
