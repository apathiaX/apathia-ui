# Radio 单选框

在一组备选项中进行单选

## 基础用法

单选框不应该有太多的可选项， 如果你有很多的可选项你应该使用选择框而不是单选框。

要使用`Radio`组件，只需要设置`v-model`绑定变量， 选中意味着变量的值为相应`Radio` `value` 属性的值， `label`可以是`String`、`Number `或 `Boolean`。
:::demo

<<< @/../packages/radio/demo/Basic.vue

:::

## 禁用状态

disabled 属性可以用来控制单选框的禁用状态。

> 你只需要为单选框设置 disabled 属性就能控制其禁用状态。
> :::demo

<<< @/../packages/radio/demo/Disabled.vue

:::

## Radio Props

| 参数       | 类型                  | 是否必传 | 说明           | 默认值    |
| ---------- | --------------------- | -------- | -------------- | --------- |
| modelValue | string/number/boolean | 是       | 选中的值       | -         |
| value      | number/string/boolean | 否       | 单选框对应的值 | undefined |
| disabled   | boolean               | 否       | 禁用           | false     |

## RadioGroup Props

| 参数       | 类型                  | 是否必传 | 说明     | 默认值 |
| ---------- | --------------------- | -------- | -------- | ------ |
| modelValue | string/number/boolean | 是       | 选中的值 | -      |
| disabled   | boolean               | 否       | 禁用     | false  |

## Radio 事件

| 事件名称 | 说明                     | 参数       |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 改变后的值 |

## RadioGroup 事件

| 事件名称 | 说明                     | 参数       |
| -------- | ------------------------ | ---------- |
| change   | 当绑定值变化时触发的事件 | 改变后的值 |
