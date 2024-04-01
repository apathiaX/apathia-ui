# Cascader

级联选择器

## 基础用法

点击触发
级联选择对数据有较严格要求，请参照示例的格式使用`data`，每项数据至少包含` value`、`label `两项，子集为 `children`，以此类推。

::: info 提示

`modelValue` 为当前选择的数据的 `value` 值的数组，比如`['jiangsu', 'nanjing']`，按照级联顺序依次排序，使用 `v-model` 进行双向绑定。

:::

:::demo

<<< @/demos/cascader/Basic.vue

:::

## 默认值

可以通过指定 `modelValue` 的初始值来初始化组件选中的值

:::demo

<<< @/demos/cascader/Default.vue

:::

## 输出单个值

传入`emit-path: false`可以 emit 单个值

::: tip 提示
默认`v-model` 返回的值是一个数组，可以通过 `emit-path: false`来输出单个值。这种情况下，需要使用者保证`options`每个值的唯一性。
:::

:::demo

<<< @/demos/cascader/Emit.vue

:::

## 禁用

设置属性 `disabled` 可以禁用组件。

给某项数据设置 `disabled: true` 可以禁用某一项。

::: demo

<<< @/demos/cascader/Disabled.vue

:::

## 触发方式

默认是点击触发选中，当然可以通过 `trigger: hover`来设置 `hover` 触发

使用 `trigger` 指定感触发方式
:::demo

<<< @/demos/cascader/Trigger.vue

:::

## 任何节点均可选中

默认只有最边缘的节点才可以被选中，可以设置 `change-on-select: true` 修改这个行为,点击任意一级都可选中

:::demo

<<< @/demos/cascader/Select.vue

:::

## 自定义节点渲染

如果你不满意默认的节点渲染，还可以使用`slot`来自定义节点渲染样式

::: tip
默认插槽会暴露四个参数：`node`: 当前节点对象;` active`: 当前节点是否被激活，被选中或者，在选中的路径上都会被激活；`selected`: 当前节点是否被直接选中；`leaf`: 当前节点是否为叶子节点
:::

:::demo

<<< @/demos/cascader/Slot.vue

:::

<!-- ## 搜索

::: demo

<<< @/demos/cascader/Search.vue

::: -->

## Props

| 参数           | 类型                | 是否必传 | 说明                                                                                                                                                 | 默认值   |
| -------------- | ------------------- | -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| modelValue     | array/string/number | 是       | emitPath = true, 为数组，否则为 string/number                                                                                                        | -        |
| placeholder    | string              | 否       | input 的 placeholder                                                                                                                                 | '请选择' |
| emitPath       | boolean             | 否       | 是否将值的路径都 emit 出去                                                                                                                           | true     |
| multiple       | boolean             | 否       | 是否支持多选                                                                                                                                         | false    |
| disabled       | boolean             | 否       | 禁用                                                                                                                                                 | false    |
| height         | string/number       | 否       | Cascader 的高度                                                                                                                                      | -        |
| clearable      | boolean             | 否       | 是否显示清除                                                                                                                                         | false    |
| showAllLevels  | boolean             | 否       | 在 input 上显示单个的值还是完整的路径(这个仅仅作用于显示，emitPath 作用于 v-model 值)                                                                | true     |
| autoFocus      | boolean             | 否       | 是否自动聚焦                                                                                                                                         | false    |
| changeOnSelect | boolean             | 否       | 点击任意节点都会选中                                                                                                                                 | false    |
| separator      | string              | 否       | input 上显示不同层级节点名字的 分隔符                                                                                                                | /        |
| data           | array               | 是       | 对象数组, 每个对象需要包含 label, value, children 字段。如果不符合要求，需要传 fieldNames 字段。可以给对象传入 disabled 字段控制单个节点是否可供选择 | 必传     |
| trigger        | 'click'/'hover'     | 否       | 节点选中的触发方式                                                                                                                                   | 'click'  |
| fieldNames     | 对象                | 否       | 一个对象，描述 data 中 field, value, children 的对应字段名。Record<'label' \| 'value' \| 'children', string>                                         | {}       |
| search         | boolean             | 否       | 是否支持搜索                                                                                                                                         | false    |

## Events

| 事件名称          | 说明                   | 回调参数                         |
| ----------------- | ---------------------- | -------------------------------- |
| update:modelValue | modelValue 值改变      | 根据 emitPath 的值，将新的值传出 |
| select            | 选中任何一个节点会触发 | 格式化好的节点对象               |
| search-change     | 搜索内容变化时出发     | 输入的结果                       |

## Slots

| 插槽名称 | 说明                 | 参数                                                                                                                                                 |
| -------- | -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| node     | 单个节点的自定义渲染 | node: 当前节点对象; active: 当前节点是否被激活，被选中或者，在选中的路径上都会被激活；selected: 当前节点是否被直接选中；leaf: 当前节点是否为叶子节点 |
