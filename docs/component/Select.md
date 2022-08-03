# Select

下拉选择器

## 基础用法

:::demo

<<< @/../packages/select/demo/Basic.vue

:::

## disabled

disabled禁用（整体禁用和单个禁用）

:::demo

<<< @/../packages/select/demo/Disabled.vue

:::

## filterable

过滤 配置#no-result，为无结果展示，可以不做配置

:::demo

<<< @/../packages/select/demo/Filterable.vue

:::

## 远程查询和清除

filterable + remote + clearable + @query-change

:::demo

<<< @/../packages/select/demo/Remote.vue

:::

## slot和自定义

option Solt + 自定义label展示

:::demo

<<< @/../packages/select/demo/Slot.vue

:::

## props

| prop      |         说明         |     类型 | 默认值 |
| --------- | :-----------------: | --------: | -----: |
| v-model      | 控制选择值 |  String, Number, Boolean | 无 |
| valueKey     | 选择对象时 区分不同的关键key值 |  String | value |
| placeholder     | 提示值 |  String | 请选择… |
| filterable     | 是否启用查询（前端输入查询功能） |  Boolean | false |
| clearable     | 是否启用清除按钮 |  Boolean | false |
| emptyText     | 选项为空时展现的文本 |  String | '' |
| disabled     | 是否启用禁用开关 |  Boolean | false |
| maxHeight     | 下拉展示框最大高度 |  Number, String | 235 |
| isLoading     | 是否开启加载状态 |  Boolean | false |

## events

> change: 选择改变时触发 第一个参数为选择值value 第二个参数为 label

> input: 选择改变时触发 第一个参数为选择值value 第二个参数为 label

> native-change: 只有内部Option选择之后才会触发'native-change'事件 第一个参数为选择值value 第二个参数为 label

> query-change: 配合远程查询使用 使用方法如上
