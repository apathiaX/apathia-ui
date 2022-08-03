# BaseButton

按钮

## 基础用法

按钮的基础用法
:::demo

<<< @/../packages/button/demo/Basic.vue

:::

## 文字按钮

没有边框和背景色的按钮
:::demo

<<< @/../packages/button/demo/Text.vue

:::

## 按钮状态

active & disabled
:::demo

<<< @/../packages/button/demo/State.vue

:::

## 按钮大小

不同尺寸的按钮
:::demo

<<< @/../packages/button/demo/Size.vue

:::

## props

| prop      |     说明     |           类型 | 默认值 |
| --------- | :----------: | -------------: | -----: |
| tag        | component tag |  string,object | button |
| href      |     链接     |         string |     '' |
| to        |  router to   | string, object |     '' |
| primary   |     基础     |        boolean |  false |
| secondary |     次要     |        boolean |  false |
| success   |     成功     |        boolean |  false |
| danger    |     危险     |        boolean |  false |
| info      |     信息     |        boolean |  false |
| warning   |     警告     |        boolean |  false |
| light     |      亮      |        boolean |  false |
| hollow    |      额      |        boolean |  false |
| plain     |   文字模式   |        boolean |  false |
| active    |    激活的    |        boolean |  false |
| small     |    小尺寸    |        boolean |  false |
| large     |    大尺寸    |        boolean |  false |
| disabled  |     禁用     |        boolean |  false |
