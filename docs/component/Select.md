# Select

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法
适用广泛的基础单选 v-model 的值为当前被选中的 option 的 value 属性值

:::demo

<<< @/../packages/select/demo/Basic.vue

:::

## 全部禁用
将 select 设置 disabled 属性，则组件不可用

:::demo

<<< @/../packages/select/demo/FullDisabled.vue

:::

## 部分选项禁用
将 option 设置 disabled 属性，则该选项不可用

:::demo

<<< @/../packages/select/demo/SideDisabled.vue

:::

## 可清空选项
包含清空按钮，可将选择器清空为初始状态
将 select 设置 clearable 属性，则可将选择器清空。

:::demo

<<< @/../packages/select/demo/Clear.vue

:::

## 自定义选项

自定义单个选项怎么被渲染

将自定义的 HTML 模板插入 option 的 slot 中

:::demo

<<< @/../packages/select/demo/Slot.vue

:::
## 筛选选项

可以利用筛选功能快速查找选项

为 select 添加 filterable 属性即可启用筛选功能。 默认情况下，Select 会找出所有 label 属性包含输入值的选项。
::: info 自定义搜索
如果希望使用其他的搜索逻辑，可以通过传入一个 query-change 来实现。 query-change 为一个 Function，它会在输入值发生变化时调用，参数为当前输入值。
:::
::: tip 远程查询
如果需要远程查询，可以通过在 query-change 中请求远程数据
:::
::: info 自定义搜索插槽
可以通过 loading 、 no-result 、 empty 三个插槽来自定义三种情况的显示
:::

:::demo

<<< @/../packages/select/demo/Filterable.vue

:::

## Select Props

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

## Select 插槽
| 插槽名      |         说明         |     子标签 |
| --------- | :-----------------: | --------: |
| -      | Option 组件列表 |  Option |
| loading     | 加载中 |  - |
| no-result     | 查询没有结果 |  - |
| empty    | 远程搜索为空 |  - |

## Option Props

| prop      |         说明         |     类型 | 默认值 |
| --------- | :-----------------: | --------: | -----: |
| value      | 控制选择值 |  String, Number, Boolean | 无 |
| disabled     | 是否启用禁用开关 |  Boolean | false |

## Select 事件

> change: 选择改变时触发 第一个参数为选择值value 第二个参数为 label

> input: 选择改变时触发 第一个参数为选择值value 第二个参数为 label

> native-change: 只有内部Option选择之后才会触发'native-change'事件 第一个参数为选择值value 第二个参数为 label

> query-change: 配合远程查询使用 使用方法如上
