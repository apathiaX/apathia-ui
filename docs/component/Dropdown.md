# Dropdown

下拉菜单, 将动作或菜单折叠到下拉菜单中。

## 基础用法

点击下拉菜单以展开更多<br/>
通过组件 `slot` 来设置下拉触发的元素以及需要通过具名 `slot` 为 dropdown 来设置下拉菜单。

:::demo

<<< @/../packages/dropdown/demo/Basic.vue

:::

## 触发方式

可以配置点击激活或者悬停激活。<br/>

将 `trigger` 属性设置为 `hover`、`focus` 、 `manual`、`click` 即可， 默认为 `click`。
:::demo

<<< @/../packages/dropdown/demo/Trigger.vue

:::

## 菜单隐藏
通过 `hide-on-click` 属性来配置。<br/>

下拉菜单默认在点击菜单项后不会被隐藏，将 `hide-on-click` 属性设置为 `true` 可以关闭此功能。

:::demo

<<< @/../packages/dropdown/demo/HideOnClick.vue

:::

## 禁用选项

通过给每个 `dropdownItem` 配置 `disabled` 属性来禁用某个选项。

:::demo

<<< @/../packages/dropdown/demo/Disabled.vue

:::

## DropdownGroup

用来对下拉选项进行分类，包裹同一类的选项

::: tip
使用DropdownGroup时会触发Dropdown的 `divide` 功能未被当前组件包裹的 `#dropdown` 子内容都会被黑线分割
:::

:::demo

<<< @/../packages/dropdown/demo/group/Basic.vue

:::

## Props

dropdown props 如下

| prop      |     说明     |           类型 | 默认值 |
| --------- | :----------: | -------------: | -----: |
| label  | 展示默认的按钮 |  string | '' |
| delay  | hover方式延迟时间 ms|  number | 300 |
| disabled        | 是否禁用 |  boolean | false |
| trigger      | 触发方式 'click', 'hover', 'focus', 'manual' 四选一 |  string | 'click' |
| placement        | 弹出框位置 'top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end',|  string | 'top' |
| hideOnClick      | 点击后是否关闭 |  boolean | false |

## Events

| 事件名称 |  说明   | 回调参数 |
| ---- | ------ | ----- |
| show | 弹出时触发，参数是显隐状态的布尔值 | true/false |
| hide | 关闭时触发 参数是显隐状态的布尔值值 | true/false |

## DropdownItem Props

| prop      |     说明     |           类型 | 默认值 |
| --------- | :----------: | -------------: | -----: |
| active        | 激活状态 |  boolean | false |
| disabled        | 是否禁用 |  boolean | false |
