# Collapse

折叠面板

## 基础用法

折叠组件的基础用法
:::demo

<<< @/../packages/collapse/demo/Basic.vue

:::

## 动画时间

prop: duration, 初始值300ms

:::demo

<<< @/../packages/collapse/demo/Duration.vue

:::

## 禁用

prop: disabled
:::demo

<<< @/../packages/collapse/demo/Disabled.vue

:::

## 自定义header

自定义header(小箭头右侧区域)
:::demo

<<< @/../packages/collapse/demo/Header.vue

:::

## 完全自定义header

完全自由，自己处理toggle
:::demo

<<< @/../packages/collapse/demo/Toggle.vue

:::

## props

| prop      |        说明         |    类型 | 默认值 |
| --------- | :-----------------: | ------: | -----: |
| expand    |      是否展开       | boolean |  false |
| duration  | 展开的动画时间(ms)  |  number |    400 |
| header    |        标题         |  string |     'header' |
| showArrow | 是否展示小三角 icon | boolean |   true |
| disabled  |      disabled       | boolean |  false |

## slots

> default:
> 折叠区域

> header:
> 小箭头右侧区域，无需自己处理逻辑

> toggleHeader:
> header 区域，完全自主，接收 show， toggleShow。自己处理展开逻辑