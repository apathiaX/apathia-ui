# Modal 模态窗

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

弹出一个对话框，适合定制性更强的场景

需要设置 `model-value(v-model)` 属性，它接收 `Boolean`，当为 `true` 时显示 `Modal`。

::: tip 推荐
`modal` 模态窗组件推荐使用 `function` 方式，有益于逻辑抽离和后续维护。

使用 `function` 方式需要全局注册使用 `modalInstall` 方法

```ts
import { modalInstall } from 'apathia-ui'
app.use(modalInstall)
```

:::

::: demo
<<< @/demos/modal/Basic.vue
:::

## 自定义宽度

可以通过 `width` 自定义宽度

:::demo

<<< @/demos/modal/Width.vue

:::

## 关闭方式

点击蒙层关闭 设置 `maskClosable` 或 `esc` 关闭弹窗(默认)

:::demo

<<< @/demos/modal/MaskClosable.vue

:::

## 自定义 header

可以完全自定义 header 的头部

template 方式通过 `header` 插槽实现，同时返回关闭 modal 的函数 `close`

function 方式通过 `renderHeader` 方法实现, 返回值为 `h` 函数 、`字符` 、`JSX` 等

::: demo
<<< @/demos/modal/Custom.vue
:::

## 嵌套使用

可以在一个对话框中再次打开一个对话框

:::demo

<<< @/demos/modal/NestFn.vue

:::

## Modal props

| prop         |                 说明                  |                                                                 类型 |  默认值 |
| ------------ | :-----------------------------------: | -------------------------------------------------------------------: | ------: |
| modelValue   |      是否展示, template 方式使用      |                                                              boolean |   false |
| title        |                 标题                  |                                                               string |      '' |
| subTitle     |                副标题                 |                                                               string |      '' |
| top          |           距离页面顶部距离            |                                                        number,string |  60(px) |
| width        |              模态窗宽度               |                                                        number,string | 640(px) |
| showClose    |        是否展示右上角关闭按钮         |                                                              boolean |    true |
| maskClosable |         是否可以点击蒙层关闭          |                                                              boolean |   false |
| keyboard     |       是否可以通过 Esc 按键关闭       |                                                              boolean |    true |
| beforeClose  |              关闭前校验               | function: () => bool.bool 为 true 则关闭，否则阻止关闭 、 () => true |
| render       |    function 方式的内容 render 函数    |                                   function: () => string 、 h 、 JSX |       - |
| renderHeader | function 方式的 header 的 render 函数 |                                    function: () => string 、 h 、JSX |       - |

## Modal 插槽 （template 使用）

| 名称   |               说明                |     接收参数      |
| ------ | :-------------------------------: | :---------------: |
| -      | default(默认插槽)，自定义内容插槽 |         -         |
| header |            自定义头部             | close: 关闭 modal |

## events

> close: 关闭时触发。无参数
