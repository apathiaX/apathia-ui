# Confirm 确认框

在`modal`的基础上，快速实现确认功能

## 基础用法

::: tip 用法
使用需要全局注册使用 `modalInstall` 方法

```ts
import { modalInstall } from 'apathia-ui'
app.use(modalInstall)
```

使用`useConfirm`方法实现
:::
:::demo

<<< @/demos/confirm/Basic.vue

:::

## 自定义 footer

可以通过`renderFooter`的方式来实现自定义 footer
::: demo
<<< @/demos/confirm/Custom.vue
:::

## Confirm Props

| prop         |    说明    |                        类型 |   默认值 |
| ------------ | :--------: | --------------------------: | -------: |
| title        |    标题    |                      string |       '' |
| render       |    内容    |       string & CustomRender |       '' |
| confirmText  |  确认按钮  |                      string |     确认 |
| cancelText   |  取消按钮  |                      string |     取消 |
| btnPosition  |  按钮位置  | ['left', 'right', 'center'] |    right |
| renderFooter | 自定义底部 |                CustomRender | () => {} |
