# Switch

开关

## 基础用法

使用 `v-model` 绑定开关切换值

:::demo

<<< @/../packages/switch/demo/Basic.vue

:::

## Props

| prop         |           说明           |                    类型 | 默认值 |
| ------------ | :----------------------: | ----------------------: | -----: |
| v-model      |        控制开关值        | String, Number, Boolean |  false |
| trueValue    | 打开时 modelValue 值为啥 | String, Number, Boolean |   true |
| falseValue   | 关闭时 modelValue 值为啥 | String, Number, Boolean |  false |
| inactiveText |  关闭时文本 展示在右侧   |                  String |     无 |
| activeText   |  打开时文本 展示在左侧   |                  String |     无 |
| disabled     |     是否启用禁用开关     |                 Boolean |  false |
| size         |         控制大小         |    String (large,small) |     无 |
| loading      |     是否开启加载开关     |                 Boolean |  false |

## Slots

| 插槽名称 | 说明                         | 参数 |
| -------- | ---------------------------- | ---- |
| active   | 值为 trueValue 时的显示内容  | -    |
| inactive | 值为 falseValue 时的显示内容 | -    |

## Events

> change: 开关改变时触发 参数为开关值
