# Modal

模态窗

## template用法（不推荐）

::: tip
modal 模态窗组件推荐使用 function 方式.有益于逻辑抽离和后续维护。
:::

### 基础用法

:::demo

<<< @/../packages/modal/demo/Basic.vue

:::

### 自定义宽度

width 设置宽度

:::demo

<<< @/../packages/modal/demo/Width.vue

:::

### 神奇的关闭

点击蒙层关闭 maskClosable 和 'esc'关闭弹窗(默认)

:::demo

<<< @/../packages/modal/demo/MaskClosable.vue

:::

## function

### 基础用法 | function

函数式调用模态窗的基础用法

:::demo

<<< @/../packages/modal/demo/function/Basic.vue

:::

### 嵌套使用

:::demo

<<< @/../packages/modal/demo/function/Nest.vue

:::

## props

| prop      |     说明     |           类型 | 默认值 |
| --------- | :----------: | -------------: | -----: |
| modelValue        | 是否展示 |  boolean | false |
| title        | 标题 |  string | '' |
| subTitle        | 副标题 |  string | '' |
| top        | 距离页面顶部距离 |  number,string | 60(px) |
| width        | 模态窗宽度 |  number,string | 640(px) |
| showClose        | 是否展示右上角关闭按钮 |  boolean | true |
| maskClosable        | 是否可以点击蒙层关闭 |  boolean | false |
| keyboard        | 是否可以通过 Esc 按键关闭 |  boolean | true |
| beforeClose        | 关闭前校验 |  function: () => bool.bool 为true则关闭，否则阻止关闭 | () => true |

## events

> close: 关闭时触发。无参数
