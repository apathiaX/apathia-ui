# Image

新的 图片预览组件，针对 bfs 的图片会进行缩放，保持原宽高

## 基础用法

指定 `src` 属性，定义图片的路径

:::demo

<<< @/demos/image/Basic.vue

:::

## 指定缩放尺寸

width 和 height 设置一个即可，始终保持原图横宽比，若两个都传，默认使用 width

:::demo

<<< @/demos/image/Size.vue

:::

## 禁用预览

通过指定 `preview` 属性, 来限制预览

:::demo

<<< @/demos/image/Preview.vue

:::

## 加载失败

使用命名插槽 `#error` 可以自定义图片加载出错的显示
:::demo

<<< @/demos/image/Error.vue

:::

## Props

| 参数    | 说明                                                                              | 类型            | 是否必传 | 默认值 |
| ------- | --------------------------------------------------------------------------------- | --------------- | -------- | ------ |
| src     | 原图片地址                                                                        | string          | 是       | -      |
| width   | 缩放图片，始终保持原图横宽比，和 height 属性两者传一个即可，若都传默认 width 生效 | string 、Number | 否       | -      |
| height  | 缩放图片，始终保持原图横宽比                                                      | string 、Number | 否       | -      |
| alt     | img alt 属性，图像描述                                                            | string          | 否       | 'img'  |
| preview | 是否可以预览                                                                      | boolean         | 否       | true   |

## Slots

| 名称  | 说明                   |
| ----- | ---------------------- |
| error | 图片加载失败的占位内容 |
