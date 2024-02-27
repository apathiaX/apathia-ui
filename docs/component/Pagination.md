# Pagination 分页

Pagination 组件 用于展示分页

## 基础用法

通过配置`option`和监听`page-change`事件实现分页功能

:::demo

<<< @/demos/pagination/Basic.vue

:::

## Pagination Props

| 参数                  | 类型    | 是否必传 | 说明                   | 默认值   |
| --------------------- | ------- | -------- | ---------------------- | -------- |
| options               | object  | 是       | 配置对象               | -        |
| options.currentPage   | number  | 否       | 当前在第几页           | 1        |
| options.totalItems    | number  | 否       | 总共有多少条数据       | 0        |
| options.pageSize      | number  | 否       | 每一页多少条数据       | 10       |
| options.totalPages    | number  | 否       | 总共多少页             | 0        |
| options.maxLength     | number  | 否       | 最多显示多少个页码     | 7        |
| options.keepMiddle    | boolean | 否       | 是否将当前页放到最中间 | true     |
| options.directionBtns | boolean | 否       | 是否展示前一/后一按钮  | true     |
| options.previousText  | string  | 否       | 前一按钮的文字         | '上一页' |
| options.nextText      | string  | 否       | 后一按钮的文字         | '下一页' |
| options.boundaryBtns  | boolean | 否       | 是否展示首页/末页按钮  | true     |
| options.firstText     | string  | 否       | 首页按钮的文字         | '首页'   |
| options.lastText      | string  | 否       | 末页按钮的文字         | '末页'   |
| options.totalCount    | boolean | 否       | 是否显示总数           | true     |
| options.jumpPage      | boolean | 否       | 是否展示跳转输入框     | false    |

## Pagination 事件

| 事件名称    | 说明           | 回调参数 |
| ----------- | -------------- | -------- |
| page-change | 点击翻页时触发 | 新的页码 |

## Pagination 插槽

| 插槽名称 | 说明         | 参数                                                      |
| -------- | ------------ | --------------------------------------------------------- |
| total    | 总量处的显示 | total.totalItems 数据总量， total.totalPages 总共有多少页 |
