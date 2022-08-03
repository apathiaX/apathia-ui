# toast

轻提示

## 基础用法

:::demo

<<< @/../packages/alert/demo/Basic.vue

:::

## 自定义渲染

:::demo

<<< @/../packages/alert/demo/Custom.vue

:::

## props

| prop      |                          说明                           |     类型 |          默认值 |
| --------- | :-----------------------------------------------------: | -------: | --------------: |
| type      |         info、warning、danger、success、default         |   string |         default |
| duration  |        toast 延迟多少毫秒关闭(0 则为不自动关闭)         |   number |            3000 |
| title     |                          标题                           |   string |              '' |
| message   |                          内容                           |   string |              '' |
| iconClass |                     左侧 iconClass                      |   string |              '' |
| showIcon  |                    是否展示左侧 icon                    |  boolean |            true |
| showClose | 是否展示右侧删除按钮(duration 为 0 时才会出现关闭 icon) |  boolean |            true |
| render    |                       自定义渲染                        | function | ({close})=>Node |

## events

> close: toast关闭时触发
