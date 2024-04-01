# Slider

滑块

## 基础用法

通过 `v-model` 绑定选中的值，默认是百分比进度
:::demo

<<< @/demos/slider/Basic.vue

:::

## 垂直模式

设置 `vertical` 为 `true` 可以切换成垂直模式，默认为水平

:::demo

<<< @/demos/slider/Vertical.vue

:::

## 设置步长

通过 `step` 设置每一步的长度, 总长度为 `100`

:::demo

<<< @/demos/slider/Step.vue

:::

## 设置值的范围

通过 `valueRange` 可以设置值的范围

:::demo

<<< @/demos/slider/Range.vue

:::

## 设置部分值的样式

通过 `marks` 可以设置 `slider` 上点的样式

:::demo

<<< @/demos/slider/Marks.vue

:::

## 格式化当前进度

通过 `formatTooltip` 可以格式化当前进度的展示效果，默认鼠标悬停会展示，可以通过设置 `showTooltip`为 `false` 进行禁用，默认为 `true`

:::demo

<<< @/demos/slider/Format.vue

:::

## Slider Props

| 参数          | 类型     | 是否必传 | 说明                                                                                               | 默认值       |
| ------------- | -------- | -------- | -------------------------------------------------------------------------------------------------- | ------------ |
| modelValue    | number   | 是       | 当前的值                                                                                           | -            |
| disabled      | boolean  | 否       | 使用禁用                                                                                           | false        |
| min           | number   | 否       | 起点值                                                                                             | 0            |
| max           | number   | 否       | 终点值                                                                                             | 100          |
| step          | number   | 否       | 步长                                                                                               | 1            |
| showSteps     | boolean  | 否       | 是否展示每一步的小圆点                                                                             | false        |
| showTooltip   | boolean  | 否       | 是否展示 tooltip                                                                                   | true         |
| formatTooltip | function | 否       | 函数，用来设置 tooltip 里的内容， 接收当前的值为参数                                               | (cur) => cur |
| valueRange    | array    | 否       | 可供选择的值范围，[min,max], 如果缺省的话则 min 则是整个 slider 的 min, max 则是整个 slider 的 max | -            |
| marks         | object   | 否       | 设置每个点的值和样式，键是数值，值是一个包含 label 和 style 的对象                                 | -            |
| vertical      | boolean  | 否       | 是否垂直                                                                                           | false        |
| height        | number   | 否       | 高度，slider 的高度，在 vertical = true 的时候生效                                                 | -            |

## Slider 事件

| 事件名称          | 说明                     | 回调参数 |
| ----------------- | ------------------------ | -------- |
| update:modelValue | 当 slider 的值改变时触发 | 新的值   |
