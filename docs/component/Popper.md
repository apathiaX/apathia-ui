# Popper

弹出气泡<br/>
常用于展示鼠标 hover 、click 时的提示信息。

## 基础用法

文字弹出框的基础用法

### template 用法

:::demo

<<< @/../packages/popper/demo/Basic.vue

:::

### functional 用法

::: tip
使用 `function` 方式需要全局注册使用 `usePoppertip` 方法 <br>
更多使用方法参考 `https://popper.js.org/docs/v2/constructors/`

```js
import { usePoppertip } from '@apathia/apathia'
app.use(usePoppertip)
```

:::
:::demo

<<< @/../packages/popper/demo/Functional.vue
:::

## 自定义内容

可以通过插槽(`content`)的方式，自定义显示的内容

:::demo

<<< @/../packages/popper/demo/Custom.vue

:::

## 暗色主题

可以通过定义`dark`属性来指定弹出内容为深色主题

:::demo

<<< @/../packages/popper/demo/Dark.vue

:::

## 自定义显示与影藏

可以通过`v-model`绑定控制显示与隐藏的值，`trigger`方式设置为 `manual`

:::demo

<<< @/../packages/popper/demo/Manual.vue

:::

## 自定义动画

可以通过设置`transition-class`来自定义显示与隐藏时的动画
:::tip
transition-class 中可以包括： enter-active-class, leave-active-class, enter-from-class, leave-to-class
:::

:::demo

<<< @/../packages/popper/demo/Transition.vue

:::

## Props

| prop            |                                                                        说明                                                                        |          类型 |    默认值 |
| --------------- | :------------------------------------------------------------------------------------------------------------------------------------------------: | ------------: | --------: |
| modelValue      |                                                              是否展示（传参控制显隐）                                                              |       boolean |     false |
| distance        |                                                                弹出框距离目标的长度                                                                |        number |        15 |
| skidding        |                                                                 箭头与目标的偏移量                                                                 |        number |         0 |
| trigger         |                                                    触发方式 'click', 'hover', 'focus', 'manual'                                                    |        string |   'click' |
| dark            |                                                                      暗色主题                                                                      |       boolean |     false |
| placement       | 弹出框位置 <br/>'top','top-start','top-end','bottom','bottom-start','bottom-end','left','left-start','left-end','right','right-start','right-end', |        string |     'top' |
| content         |                                                                     弹出框内容                                                                     | string,number |         - |
| transitionClass |                                                                 弹出消失动画自定义                                                                 |        object |         - |
| showArrow       |                                                                    箭头显隐控制                                                                    |       boolean |      true |
| delay           |                                                               hover 方式延迟时间 ms                                                                |        number |       300 |
| disabled        |                                                                      是否禁用                                                                      |       boolean |     false |
| popperClass     |                                                                     弹出框类名                                                                     |        string |        '' |
| appendToBody    |                                                                 是否追加到 body 后                                                                 |       boolean |      true |
| render          |                                                                   弹出框渲染内容                                                                   |  CustomRender | undefined |
| target          |                                                                    弹框目标元素                                                                    |   HTMLElement | undefined |
| delayClose      |                                                           自动关闭，传参是时间，单位 ms                                                            |        number | undefined |

## Modal 插槽 （template 使用）

| 名称    |            说明             | 接收参数 |
| ------- | :-------------------------: | :------: |
| -       | default(默认插槽)，触发主体 |    -     |
| content |          显示内容           |    -     |

## events

> show: 弹出时触发 参数是显隐状态的布尔值

> hide: 关闭时触发 参数是显隐状态的布尔值

> afterHide: 关闭动画结束时触发 无参数
