# Table

表格

## 基础用法

指定 `columns` 和 `data` 就可以得到一个表格

:::demo

<<< @/../packages/table/demo/Basic.vue

:::

## 自定义表格的样式

指定 table 的相关特性，可以设置行，列，单元格的样式

:::demo

<<< @/../packages/table/demo/CustomStyle.vue

:::

## 自定义表格的合并

指定 `cell-span` 属性，可以控制单元格的合并

:::demo

<<< @/../packages/table/demo/CellSpan.vue

:::

## 固定列

在 column 中加上 `fixed` 属性可以实现固定列。使用固定列，最好使用 `scroll` 属性置顶最大的宽度

:::demo

<<< @/../packages/table/demo/Fixed.vue

:::

## 动态显示隐藏某一个列

:::demo

<<< @/../packages/table/demo/Hide.vue

:::

## 表格单选

通过将 `highlight-current-row` 设置为true 实现高亮效果。可以通过 `v-model:current` 拿到选中行的唯一索引，可以通过 `v-model:currentSelected`拿到选中行的数据对象。

:::demo

<<< @/../packages/table/demo/Highlight.vue

:::

## 表格多选

columns 中可以定义 一个 type: 'selection' 的多选列，在Table上可以通过 `v-model:selected` 拿到选中的对象数组，可以通过 `v-model:selectedKeys` 拿到 唯一id数组，唯一id需要使用 `rowKey` 来指定，大部分场景都只需要单独使用其中一个 v-model

:::demo

<<< @/../packages/table/demo/Selection.vue

:::

## 表格排序

表格支持 `sort` 属性，定义用来定义当前表格被激活的排序

:::demo

<<< @/../packages/table/demo/Sort.vue

:::

## 表格展开拓展行

通过 `expand` 属性可以控制表格的扩展行显示

:::demo

<<< @/../packages/table/demo/Expand.vue

:::

```ts
interface BaseColumn {
  // 标题， 可以是字符串，也可是自定义渲染 title: () => <span>ab<span>
  title: CustomRender
  // 宽度
  width?: number | string
  // 对齐方式
  align?: 'left' | 'right' | 'center'
  // 单元格 class
  className?: string
  // theader > th 的colSpan
  colSpan?: number
  // 是否可排序
  sortable?: boolean
  // 排序prop
  prop?: string // 排序使用的字段
  // 特殊类型，selection 是多选，index 是索引， expand是展开按钮
  type?: 'selection' | 'index' | 'expand'
  // 固定到昨天或者右边
  fixed?: 'left' | 'right'
  // 什么时候显示该列
  when?: () => boolean
}

// 通过 field 指定显示的内容
interface FieldColumn extends BaseColumn {
  field: string
}

// 通过render 自定义单元格的渲染，入参是 row, rowIndex, colIndex
interface RenderColumn extends BaseColumn {
  render: RenderFn<{ row?: DataItem; colIndex?: number; rowIndex?: number }>
}

// 通过 buttons来渲染按钮
interface ButtonColumn extends BaseColumn {
  buttons: (arg: {
    row?: DataItem
    rowIndex?: number
    colIndex?: number
  }) => Button[]
}

export type Column = FieldColumn | ButtonColumn | RenderColumn | ButtonColumn

```

## props

| prop       |       说明       |    类型 | 默认值 |
| ---------- | :--------------: | ------: | -----: |
| data |      表格里的数据      |  Array |   [] |
| columns |  列选项   |  Column[] |     [] |
| stripe     |     是否启用斑马纹     | boolean |  false |
| border  | 是否启用表格border | boolean |  false |
| headerRowClassName | header row 的class 生成函数 | 函数 () => string | 无 |
| headerRowStyle | header row style 生成函数 | 函数 () => ({}) | 无 |
| headerCellClassName | header cell 的class 生成函数 | 函数 ({ colIndex }) => string | 无 |
| headerCellStyle | header cell 的style 生成函数 | 函数 ({ colIndex}) => ({}) | 无 |
| rowClassName | tbody row 的class 生成函数 | 函数 ({ row, rowIndex }) => string | 无 |
| rowStyle | tbody row 的style 生成函数 | 函数 ({ row, rowIndex }) => ({}) | 无 |
| cellClassName | tbody td cell 的class 生成函数 | 函数 ({ row, rowIndex, col, colIndex }) => string | 无 |
| cellStyle | tbody row 的style 生成函数 | 函数 ({ row, rowIndex, col, colIndex }) => ({}) | 无 |
| cellSpan | 用来处理单元格合并，返回[colspan, rowspan]表示一个td 的colspan和rowspan，其中一个为0，这个单元格不现实 | 函数 ({ row, rowIndex, col, colIndex }) => ({}) | () => [1, 1] |
| height | table的高度 | Number | 无 |
| showHeader | 是否显示table header | boolean | true |
| showData | 是否显示table body | boolean | true |
| rowKey | 表格数据的唯一键索引 | string | 'id' |
| highlightCurrentRow | 高亮当前选中行，可以结合 current实现单选 | boolean | true |
| current | 当前选中的行index | Number | -1 |
| selected | 多选选中的行 | Array | [] |
| selectedKeys | 高亮当前选中行的唯一key 集合 | Array | [] |
| sort | 表格排序 | ({ order: 'asc' \| 'desc', prop: string }) | {} |
| expand | 扩展行配置 | ({ rowExpandable: () => boolean, expandRowRender: CustomeRender }) | () => {} |
| scroll | 表格横向滚动的时候，需要指定width属性 | {width: number} | {} |
