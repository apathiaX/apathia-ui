# Checkbox

多选框

## 基础用法

### 单选

:::demo

<<< @/../packages/checkbox/demo/Basic.vue

:::

### 多选

:::demo

<<< @/../packages/checkbox/demo/Multiple.vue

:::

### 中间状态

:::demo

<<< @/../packages/checkbox/demo/Interminate.vue

:::

::: tip
使用 indeterminate 需要注意：indeterminate 和 modelValue 是隔离的
点击时改变 modelValue，indeterminate 要自己控制，一共有四个状态，如下，避免出现 都为True的情况
:::
|  |  选中   | 取消（空白） |   中间态       | 无效（填满） |
| ---- | ------ | ----- | ------------- | ----- |
| interminate | false | false | true | true |
| modelValue | true | false | false | true |

## props

| 参数 |  类型   | 是否必传 |   说明       | 默认值 |
| ---- | ------ | ----- | ------------- | ----- |
| modelValue | string/number/boolean/array | 是 | 选中的值 | - |
| trueValue | number/string/boolean | 否 | 选中的值 | true |
| falseValue | number/string/boolean | 否 | 未选中的值 | false |
| value | number/string | 否 | modelValue是数组时，选中时的值，如果不提供，将会降级使用trueValue | undefined |
| disabled | boolean | 否 | 禁用 | - |
| indeterminate | number/string/boolean | 否 | 中间状态，独立于modelValue，需要用户手动控制 | - |

## events

| 事件名称 |  说明   | 回调参数 |
| ---- | ------ | ----- |
| upadte:modelValue | 值修改时触发 | 新的值 |

## slots

| 插槽名称 |  说明   | 参数 |
| ---- | ------ | ----- |
| default | 说明 | - |
