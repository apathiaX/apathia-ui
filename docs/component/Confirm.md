# confirm

确认框

## 基础用法

确认框的基础用法 useConfirm
:::demo

<<< @/../packages/confirm/demo/Basic.vue

:::

## props

| prop      |     说明     |           类型 | 默认值 |
| --------- | :----------: | -------------: | -----: |
| title        | 标题 |  string | '' |
| render        | 内容 |  string & CustomRender | '' |
| confirmText        | 确认按钮 |  string | 确认 |
| cancelText        | 取消按钮 |  string | 取消 |
| btnPosition        | 按钮位置 |  ['left', 'right', 'center'] | right |
| renderFooter        | 自定义底部 |  CustomRender | () => {} |
