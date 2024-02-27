# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

折叠组件的基础用法
:::demo

<<< @/demos/collapse/Basic.vue

:::

## 动画时间

可以通过设置`duration`设置动画时间, 初始值 400ms

:::demo

<<< @/demos/collapse/Duration.vue

:::

## 禁用状态

可以通过设置`disabled`属性来禁用
:::demo

<<< @/demos/collapse/Disabled.vue

:::

## 自定义 header

可以通过`header`插槽自定义 header 内容
::: warning 局限
`header `插槽只可以定义箭头右侧的`header`内容和样式
:::
:::demo

<<< @/demos/collapse/Header.vue

:::

## 完全自定义

可以通过 `toggleHeader` 完全自定义头部，可以自由操作折叠显示状态
::: danger 注意
需要自己操作折叠显示，否则折叠会失效
:::
:::demo

<<< @/demos/collapse/Toggle.vue

:::

## Collapse Props

| prop      |        说明         |    类型 |   默认值 |
| --------- | :-----------------: | ------: | -------: |
| expand    |      是否展开       | boolean |    false |
| duration  | 展开的动画时间(ms)  |  number |      400 |
| header    |        标题         |  string | 'header' |
| showArrow | 是否展示小三角 icon | boolean |     true |
| disabled  |      disabled       | boolean |    false |

## Collapse Slots

| 名称         |                  说明                  |                             接收参数                             |
| ------------ | :------------------------------------: | :--------------------------------------------------------------: |
| -            |           default(默认插槽)            |                                -                                 |
| header       |    小箭头右侧区域，无需自己处理逻辑    |                                -                                 |
| toggleHeader | header 区域，完全自主,自己处理展开逻辑 | show(boolean): 是否折叠， toggleShow(function)：折叠状态转换函数 |
