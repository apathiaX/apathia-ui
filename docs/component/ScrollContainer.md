# ScrollContainer

滚动容器，用于展示大量内容，当内容超出容器时，会出现滚动条

## 基础用法

:::demo

<<< @/demos/scrollContainer/Basic.vue

:::

## 自动隐藏

通过 auto-hide 属性可以设置鼠标在组件外时自动隐藏滚动条

:::demo

<<< @/demos/scrollContainer/AutoHide.vue

:::

## 隐藏滚动条

通过 hide-vertical/hide-horizontal 属性可以隐藏垂直/水平滚动条
隐藏垂直滚动条如下：

:::demo

<<< @/demos/scrollContainer/HideVertical.vue

:::

## 控制滚动位置

通过 scrollTop/scrollLeft 属性可以控制垂直/水平滚动条的位置

:::demo

<<< @/demos/scrollContainer/ScrollTop.vue

:::

## props

| 参数           | 类型                             | 是否必传 | 说明                               | 默认值   |
| -------------- | -------------------------------- | -------- | ---------------------------------- | -------- |
| size           | number/'thick'\/'normal'\/'thin' | 否       | 滚动条的宽度                       | 'normal' |
| tag            | string                           | 否       | 滚动容器使用的标签                 | 'div'    |
| scrollTop      | number                           | 否       | 滚动 scrollTop                     | 0        |
| scrollLeft     | number                           | 否       | 滚动 scrollLeft                    | 0        |
| autoHide       | boolean                          | 否       | 当鼠标在元素外面的时候，隐藏滚动条 | false    |
| hideVertical   | boolean                          | 否       | 是否隐藏垂直滚动条                 | false    |
| hideHorizontal | boolean                          | 否       | 是否隐藏水平滚动条                 | false    |

## events

| 事件名称          | 说明                         | 回调参数           |
| ----------------- | ---------------------------- | ------------------ |
| update:scrollTop  | 当滚动 scrollTop 改变时触发  | 新的 scrollTop 值  |
| update:scrollLeft | 当滚动 scrollLeft 改变时触发 | 新的 scrollLeft 值 |

## slots

| 插槽名称 | 说明     | 参数 |
| -------- | -------- | ---- |
| default  | 显示内容 | -    |

## 注意

滚动条能够显示的原因是，容器的宽度/高度比内容的宽度/高度 小。只有符合此条件，才会出现滚动条
