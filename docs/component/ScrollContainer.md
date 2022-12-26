# ScrollContainer

滚动条

`ScrollContainer组件包含了自定义的滚动条，可用于展示可能出现滚动条的内容列表`

## 基础用法

:::demo

<<< @/../packages/scroll-container/demo/Basic.vue

:::

## 自动隐藏

通过auto-hide属性可以设置鼠标在组件外时自动隐藏滚动条

:::demo

<<< @/../packages/scroll-container/demo/AutoHide.vue

:::

## 隐藏滚动条

通过hide-vertical/hide-horizontal属性可以隐藏垂直/水平滚动条
隐藏垂直滚动条如下：

:::demo

<<< @/../packages/scroll-container/demo/HideVertical.vue

:::

## 控制滚动位置

通过scrollTop/scrollLeft属性可以控制垂直/水平滚动条的位置

:::demo

<<< @/../packages/scroll-container/demo/ScrollTop.vue

:::

## props

| 参数 |  类型   | 是否必传 |   说明       | 默认值 |
| ---- | ------ | ----- | ------------- | ----- |
| size | number/'thick'\/'normal'\/'thin' | 否 | 滚动条的宽度 | 'normal' |
| tag | string | 否 | 滚动容器使用的标签 | 'div' |
| scrollTop | number | 否 | 滚动scrollTop | 0 |
| scrollLeft | number | 否 | 滚动scrollLeft | 0 |
| autoHide | boolean | 否 | 当鼠标在元素外面的时候，隐藏滚动条 | false |
| hideVertical | boolean | 否 | 是否隐藏垂直滚动条 | false |
| hideHorizontal | boolean | 否 | 是否隐藏水平滚动条 | false |

## events

| 事件名称 |  说明   | 回调参数 |
| ---- | ------ | ----- |
| update:scrollTop | 当滚动scrollTop改变时触发 | 新的scrollTop值 |
| update:scrollLeft | 当滚动scrollLeft改变时触发 | 新的scrollLeft值 |

## slots

| 插槽名称 |  说明   | 参数 |
| ---- | ------ | ----- |
| default | 显示内容 | - |

## 注意

滚动条能够显示的原因是，容器的宽度/高度比内容的宽度/高度 小。只有符合此条件，才会出现滚动条
