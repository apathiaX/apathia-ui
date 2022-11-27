# Toast 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

> 可以接收一个字符串或一个 VNode 作为参数，它会被显示为正文内容。

:::demo

<<< @/../packages/alert/demo/Basic.vue

:::

## 不同状态

用来显示「成功、警告、消息、错误」类的操作反馈。
::: info Types
当需要自定义更多属性时，toast 也可以接收一个对象为参数。 比如，设置 type 字段可以定义不同的状态。 此时正文内容以 toast 的值传入。 同时，我们也为 toast 的各种 type 注册了方法，可以在不传入 type 字段的情况下直接通过属性方法调用。
:::

::: demo
<<< @/../packages/alert/demo/Types.vue
:::

## 可关闭的提醒

可以添加关闭按钮。
::: tip closeable
默认不可以被人工关闭的。 如果你需要手动关闭功能，你可以把`showClose`设置为 true 此外，可以设置关闭时间 `duration`， 默认的关闭时间为`3000`毫秒，当把这个属性的值设置为`0`便表示该消息不会被自动关闭。
:::

::: demo
<<< @/../packages/alert/demo/Close.vue
:::

## 全局方法

可以通过注册全局方法的形式注册`toast`, 然后就可以在 vue 实例中使用 toast

```js
import { toastInstall } from '@apathia/apathia'

app.use(toastInstall)
```

## 单独引用

```js
import { toast } from '@apathia/apathia'
```

::: info 使用方式
此时调用方法为 toast(options)。 我们也为每个 type 定义了各自的方法，如 toast.success(options)。 并且可以调用 toast.closeAll() 手动关闭所有实例。
:::

## Toast Props

| prop      |                          说明                           |     类型 |          默认值 |
| --------- | :-----------------------------------------------------: | -------: | --------------: |
| type      |         info、warning、danger、success、default         |   string |         default |
| duration  |        toast 延迟多少毫秒关闭(0 则为不自动关闭)         |   number |            3000 |
| title     |                          标题                           |   string |              '' |
| message   |                          内容                           |   string |              '' |
| iconClass |                     左侧 iconClass                      |   string |              '' |
| showIcon  |                    是否展示左侧 icon                    |  boolean |            true |
| showClose | 是否展示右侧删除按钮(duration 为 0 时才会出现关闭 icon) |  boolean |           false |
| render    |                       自定义渲染                        | function | ({close})=>Node |

## Toast 方法

> close: toast 关闭时触发
