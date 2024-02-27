# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

### 单选

单独使用可以表示两种状态之间的切换
:::demo

<<< @/demos/checkbox/Basic.vue

:::

### 多选

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
:::demo

<<< @/demos/checkbox/Multiple.vue

:::

## 禁用状态

多选框不可用状态。

> 设置 `disabled` 属性即可。

::: demo
<<< @/demos/checkbox/Disable.vue
:::

## 中间状态

`indeterminate` 属性用以表示 checkbox 的不确定状态，一般用于实现全选的效果
::: danger 注意
`indeterminate` 属性和 `modelValue` 的值是不关联的，且该属性只用来展示样式所用，一般用于表示全选的状态.<br/>
全选的中间状态是只要选中一个就会出现中间态，全部选中中间态失效。中间态即为示例中 横杠 的样式
:::

:::demo

<<< @/demos/checkbox/Intermediate.vue

:::

::: tip 状态
点击时改变 modelValue，indeterminate 要自己控制，一共有如下四个状态，避免出现都为`True`的情况
:::
| | 选中 | 取消（空白） | 中间态 | 无效（填满） |
| ---- | ------ | ----- | ------------- | ----- |
| intermediate | false | false | true | true |
| modelValue | true | false | false | true |

## Checkbox Props

| 参数          | 类型                        | 是否必传 | 说明                                                                | 默认值    |
| ------------- | --------------------------- | -------- | ------------------------------------------------------------------- | --------- |
| modelValue    | string/number/boolean/array | 是       | 选中的值                                                            | -         |
| trueValue     | number/string/boolean       | 否       | 选中的值                                                            | true      |
| falseValue    | number/string/boolean       | 否       | 未选中的值                                                          | false     |
| value         | number/string               | 否       | modelValue 是数组时，选中时的值，如果不提供，将会降级使用 trueValue | undefined |
| disabled      | boolean                     | 否       | 禁用                                                                | false     |
| indeterminate | number/string/boolean       | 否       | 中间状态，独立于 modelValue，需要用户手动控制                       | false     |

## Checkbox 事件

| 事件名称 | 说明                     | 参数       |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 改变后的值 |

## Checkbox 插槽

| 插槽名称 | 说明           |
| -------- | -------------- |
| default  | 自定义默认内容 |
