# Toast 消息提示

常用于主动操作后的反馈提示。

## 基础用法

用来显示不同类型的操作反馈，默认为 `info`
::: info 类型
当需要自定义更多属性时，toast 也可以接收一个对象为参数。 比如，设置 `type` 字段可以定义不同的状态。 此时正文内容以 `toast` 的值传入。 同时，我们也为 `toast` 的各种 `type` 注册了方法，可以在不传入 `type` 字段的情况下直接通过属性方法调用。
:::

:::demo

<<< @/demos/alert/Basic.vue

:::

## 不同主题

提供两种不同的显示主题：`light` 和 `dark`

::: demo
<<< @/demos/alert/Types.vue
:::

## 关闭

设置 `showClose` 可以添加关闭按钮。

::: tip Closeable
默认不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 true 此外，可以设置关闭时间 `duration`， 默认的关闭时间为`3000` 毫秒，当把这个属性的值设置为 `0` 便表示该消息不会被自动关闭。
:::

::: demo
<<< @/demos/alert/Close.vue
:::

## 图标和标题

设置 `showIcon` 属性可以设置显示默认主题图标，设置 `title` 属性

::: demo
<<< @/demos/alert/Icon.vue
:::

## 自定义渲染内容

通过配置 `render` 参数可以自定义渲染的内容

::: demo
<<< @/demos/alert/Custom.vue
:::

## 全局方法

可以通过注册全局方法的形式注册 `toast`, 然后就可以在 `vue` 实例中使用 toast

```ts
import { toastInstall } from 'apathia-ui'

app.use(toastInstall)
```

## 单独引用

```ts
import { toast } from 'apathia-ui'
```

::: tip 使用方式
此时调用方法为 toast(options)。 我们也为每个 type 定义了各自的方法，如 toast.success(options)。 并且可以调用 toast.closeAll() 手动关闭所有实例。
:::

## Toast Props

| prop      |                          说明                           |          类型 |          默认值 |
| --------- | :-----------------------------------------------------: | ------------: | --------------: |
| type      |         info、warning、danger、success、default         |        string |         default |
| effect    |                        展示主题                         | light 、 dark |           light |
| duration  |        toast 延迟多少毫秒关闭(0 则为不自动关闭)         |        number |            3000 |
| title     |                          标题                           |        string |              '' |
| message   |                          内容                           |        string |              '' |
| iconClass |                     左侧 iconClass                      |        string |              '' |
| showIcon  |                    是否展示左侧 icon                    |       boolean |            true |
| showClose | 是否展示右侧删除按钮(duration 为 0 时才会出现关闭 icon) |       boolean |           false |
| render    |                       自定义渲染                        |      function | ({close})=>Node |

## Toast 方法

> close: toast 关闭时触发
