# Sidenav

侧边导航栏

## 基础用法

通过配置 `menu-list` 对象来定义侧边栏的展示

:::demo

<<< @/demos/sidenav/Basic.vue

:::

## 隐藏侧边栏

通过 `mini` 来控制侧边栏的显示与隐藏
:::tip
显示与隐藏需要手动进行操作
:::
:::demo

<<< @/demos/sidenav/Close.vue

:::

## 搜索侧边栏

通过设置 `search` 为 `true` 开启搜索侧边栏的功能

::: tip
搜索是根据输入的 `menu-list` 中的 `text` 属性
:::
:::demo

<<< @/demos/sidenav/Search.vue

:::

## 自定义显示

使用插槽可以自定义侧边栏的显示内容和样式

:::demo

<<< @/demos/sidenav/Custom.vue

:::

## Props

| prop      |               说明               |    类型 | 默认值 |
| --------- | :------------------------------: | ------: | -----: |
| menuList  |          侧边栏配置对象          |   Array |     [] |
| activeKey |        选择菜单时的选中值        |  String |     '' |
| mini      |          是否隐藏侧边栏          | Boolean |  false |
| search    | 是否启用查询（前端输入查询功能） | Boolean |  false |
| keyField  |       选中菜单对象中的字段       |  String |     '' |

## Events

| 事件名称 | 说明           | 回调参数 |
| -------- | -------------- | -------- |
| select   | 选中菜单时触发 | Node     |

## Slots

| 插槽名称   | 说明                                 | 参数                                                  |
| ---------- | ------------------------------------ | ----------------------------------------------------- |
| default    | 默认插槽，可以自定义显示的内容和样式 | mini, activeParent, expand, activeItem, onClick, node |
| menuTop    | 侧边栏顶部                           | -                                                     |
| menuBottom | 侧边栏底部                           | -                                                     |

| 参数         |       说明       |     类型 | 默认值 |
| ------------ | :--------------: | -------: | -----: |
| mini         |  是否隐藏侧边栏  |  Boolean |  false |
| activeParent |   是否选中父级   |  Boolean |  false |
| expand       |     是否展开     |  Boolean |  false |
| activeItem   | 是否激活当前菜单 |  Boolean |  false |
| onClick      |   切换展开状态   | Function |      - |
| node         | 当前选中结点信息 |     Node |      - |
