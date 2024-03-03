# Switch

两种互相对立的状态之间的切换

## 基础用法

使用 `v-model` 绑定开关切换值

:::demo

<<< @/demos/switch/Basic.vue

:::

## 禁用

通过指定 `disabled` 为 `true` 可以对开关进行禁用

:::demo

<<< @/demos/switch/Disabled.vue

:::

## 加载状态

通过指定 `loading` 为 `true` 可以设置为加载状态

:::demo

<<< @/demos/switch/Loading.vue

:::

## 大小

指定 `large` 和 `small` 属性可以设置开关的大小，默认不指定

:::demo

<<< @/demos/switch/Size.vue

:::

## 自定义样式

通过指定 `active-text` 和 `inactive-text` 可以自定义开关不同状态的显示内容，或者通过插槽`active` 和 `inactive`的方式进行指定
::: tip
`props`的优先级会高于插槽的，也就是同时定义`props`和插槽的自定义形式会显示`props`定义的形式
:::

:::demo

<<< @/demos/switch/Custom.vue

:::

## Props

| prop         |           说明           |                    类型 | 默认值 |
| ------------ | :----------------------: | ----------------------: | -----: |
| modelValue   |        控制开关值        | String, Number, Boolean |  false |
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
