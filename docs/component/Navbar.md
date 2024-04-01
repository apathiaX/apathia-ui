# Navbar

层级选项卡 | 多级标签页

::: tip 提示
`Navbar` 是为了处理有层级的 `tab`。若是简单的一级 `tab` 建议用 `Tabs` 组件。

`Navbar` 暂仅支持两层，不支持三层。
:::

## 基础用法

:::demo

<<< @/demos/navbar/Basic.vue

:::

## 下划线样式

通过指定 `type` 属性为 `underline` 定义导航的样式有下划线，默认是没有

:::demo

<<< @/demos/navbar/Underline.vue

:::

## 子级触发方式

通过指定 `trigger` 属性为 `click` 指定子级必须点击才生效，默认为 `hover`

:::demo

<<< @/demos/navbar/Trigger.vue

:::

## 父级禁用

通过指定 `disabled-parent` 来设置包含多级选项的父级是否禁用，默认为 `true`

:::demo

<<< @/demos/navbar/Disabled.vue

:::

## Props

| prop           |              说明              |          类型 |    默认值 |
| -------------- | :----------------------------: | ------------: | --------: |
| type           |     样式 default,underline     |        string | 'default' |
| modelValue     |             绑定值             | string,number |        无 |
| list           | navbar 的列表{label,value}数组 |         array |        无 |
| trigger        |      子级 navbar 触发方式      |        string |   'hover' |
| disabledParent |       父组件是否禁止选择       |       boolean |      true |

## Slots

| 名称  |    说明    |       接收参数       |
| ----- | :--------: | :------------------: |
| label | 自定义展示 | nav ({label, value}) |

## Events

> change: 改变选择是触发, 参数为 nav ({label, value})
