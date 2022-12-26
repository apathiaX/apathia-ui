# Transfer

穿梭框

## 基础用法

Transfer 的数据通过 `data` 属性传入。 数据需要是一个对象数组，每个对象有以下属性：`value` 为数据的唯一性标识，`label` 为显示文本，`disabled` 表示该项数据是否禁止被操作。 目标列表中的数据项会同步到绑定至 `v-model` 的变量，值为数据项的 `value` 所组成的数组。 当然，如果希望在初始状态时目标列表不为空，可以像本例一样为 v-model 绑定的变量赋予一个初始值.

:::demo

<<< @/../packages/transfer/demo/Basic.vue

:::

## 穿梭插入方式

通过 `target-order` 可以设置穿梭元素的添加形式，可选为`push` 和 `unshift`， 默认为 `push`
:::demo

<<< @/../packages/transfer/demo/TargetOrder.vue

:::

## 搜索

设置 `filterable` 为 `true` 即可开启搜索模式。 默认情况下，若数据项的 `label` 属性包含搜索关键字，则会在搜索结果中显示。 你也可以使用 `filter-method` 定义自己的搜索逻辑。 `filter-method` 接收一个方法，当搜索关键字变化时，会将当前的关键字和每个数据项传给该方法。 若方法返回 `true`，则会在搜索结果中显示对应的数据项。

:::demo

<<< @/../packages/transfer/demo/Filterable.vue

:::

## 自定义显示
可以对列表标题文案、数据项的渲染进行自定义。<br/>
::: info 具体使用
可以使用 `titles` 属性对列表标题文案进行自定义。 数据项的渲染可以使用 `scoped-slot` 进行自定义，提供了具名 slot：`source-item`。 此外，如果希望某些数据项在初始化时就被勾选，可以使用 `left-default-checked` 和 `right-default-checked` 属性。
:::
:::demo

<<< @/../packages/transfer/demo/Custom.vue

:::

## Props

| 参数 |  类型   | 是否必传 |   说明       | 默认值 |
| ---- | ------ | ----- | ------------- | ----- |
| modelValue | array | 是 | 选中的值 | - |
| data | array | 是 | 备选的数据, 对象数组，每个对象需要包含 value, label, disabled三个属性，如果没有的话，需要通过propKeys来指定对应的字段  | - |
| filterable | boolean | 否 | 是否显示筛选 | false |
| filterPlaceholder | string | 否 | 筛选输入框的placeholder | '请输入搜索内容' |
| filterMethod | function | 否 | 筛选的方法，第一个是输入的值， 第二个参数是每个可选项，返回true/false表示匹配成功/失败 | (word, option) => option.label.indexOf(word) > -1 |
| targetOrder | 'original'/'push'/'unshift' | 否 | 选中的值插入的方式，original表示按照原来的顺序，push表示放到最后，unshift表示放到最前面 | 'original' |
| titles | array | 否 | 一个长度为2的字符串数组，分别用于左右穿梭框的标题 | ['列表1', '列表2'] |
| propKeys | object | 否 | 当data里的每一项不符合规范时，可以通过该字段指明 label, value, disabled三个字段对应的字段。| ({ value: 'value', label: 'label', disabled: 'disabled'}) |
| leftDefaultChecked | array | 否 | 左侧默认选中项 | [] |
| rightDefaultChecked | array | 否 | 右侧默认选中项 | [] |

## Events

| 事件名称 |  说明   | 回调参数 |
| ---- | ------ | ----- |
| update:modelValue | 当值改变时触发 | 新的值 |
| select | 当一个项目被加入到右侧时触发 | 新添加的值 |
| remove | 当一个项目从右侧删除时触发 | 被删除的值 |

## Slots

| 插槽名称 |  说明   | 参数 |
| ---- | ------ | ----- |
| source-item | 单个数据项的显示 | option：包含了label, value, disabled三个属性。index：顺序 |
