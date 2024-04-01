# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

## 基础用法

指定 `columns` 和 `data` 就可以得到一个表格
::: tip Tip
由于表格宽度的计算规则，暂时如果需要表格自动撑满，需要给一个列指定宽度
:::

:::demo

<<< @/demos/table/Basic.vue

:::

## 斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe `属性可以创建带斑马纹的表格。 如果` true`, 表格将会带有斑马纹。

::: demo
<<< @/demos/table/Stripe.vue
:::

## 带边框表格

默认情况下，`Table `组件是不具有竖直方向的边框的,可以使用`border`属性，把该属性设置为`true`即可启用。

::: demo
<<< @/demos/table/Border.vue
:::

## 自定义表格的样式

指定 table 的相关特性，可以单独设置行，列，单元格的样式
::: tip
在定义整行样式和 class 的时候，由于表格样式的覆盖，部分整体设置的样式无法生效，可以采用无筛选单元格的形式进行设置，即在设置单元格 class 和 style 的样式的时候不针对某一特殊的进行设置，直接返回样式和 class 。<br/>
要针对单个设置特殊的样式，可以返回公用样式（class）和 单独样式（class）的组合。
:::

:::demo

<<< @/demos/table/CustomStyle.vue

:::

## 固定表头

纵向内容过多时，可选择固定表头。

只要在 `Table` 中定义了 height 属性，即可实现固定表头的表格，而不需要额外的代码。
<br/>
文档样式暂时固定样式显示有点问题，待修复！！！（实际使用没有问题）
:::demo
<<< @/demos/table/FixHeader.vue
:::

## 固定列

横向内容过多时，可选择固定列。<br/>

在 column 中加上 `fixed` 属性可以实现固定列。使用固定列，最好使用 `scroll` 属性置顶最大的宽度，

> 传入字符串，left 或 right，表示左边固定还是右边固定。
> 文档样式暂时固定列样式有点问题，待修复！！！

:::demo

<<< @/demos/table/Fixed.vue

:::

## 表格合并

指定 `cell-span` 属性，可以控制单元格的合并
::: info 使用方法
自定义单元格合并。返回`[rowSpan, colSpan]`。只要其中一个设成`0`就会忽略渲染<br/>
`colSpan`是 2 表示占用两列。`rowSpan `是 2 表示占用两行，在下面的例子中。第 2 行第 2 列占用了两行[2, 1]。所以第 2 行第 3 列应该设置`colSpan`为 0。
:::

:::demo

<<< @/demos/table/CellSpan.vue

:::

## 动态显示隐藏

指定 `column`重的 `when`属性可以自定义显示与隐藏行<br/>
`when` 的属性值是一个函数，函数的参数是` { row, rowIndex }`,返回值为 `boolean` 如果是 `true` 就会渲染，反之不显示

:::demo

<<< @/demos/table/Hide.vue

:::

## 表格单选

选择单行数据时使用色块表示。<br/>

通过将 `highlight-current-row` 设置为 true 实现高亮效果。可以通过 `v-model:current` 拿到选中行的唯一索引，可以通过 `v-model:currentSelected`拿到选中行的数据对象。

:::demo

<<< @/demos/table/Highlight.vue

:::

## 表格多选

columns 中可以定义 一个 type: 'selection' 的多选列，在 Table 上可以通过 `v-model:selected` 拿到选中的对象数组，可以通过 `v-model:selectedKeys` 拿到 唯一 id 数组，唯一 id 需要使用 `rowKey` 来指定，大部分场景都只需要单独使用其中一个 v-model<br/>

> 还可以通过在 `column`中设置为 selection 的列上添加 `disabledWhen` 来制定某一行禁止选择，使用方法类似于 `when` 的使用，根据返回值指定是否禁用

:::demo

<<< @/demos/table/Selection.vue

:::

## 表格排序

对表格进行排序，可快速查找或对比数据。<br/>

在列中设置 sortable 属性即可实现以该列为基准的排序， 接受一个 Boolean，默认为 false。 可以通过 Table 的 sort 属性设置默认的排序列和排序顺序。 可以使用在 `Table`上监听`sort-change`事件, 在事件回调中可以获取当前排序的字段名和排序顺序。

:::demo

<<< @/demos/table/Sort.vue

:::

## 自定义列

自定义列的显示内容，可组合其他组件使用。<br/>

在列中设置 render 属性，通过 render 返回一个渲染函数、字符串或者 JSX。

:::demo

<<< @/demos/table/CustomRender.vue

:::

## 表格拓展行

通过 `expand` 属性可以控制表格的扩展行显示
::: tip 使用方式
通过在 `column` 中将 type 类型指定为 `expand` ,同时 `Table` 上绑定 `expand` 值，指定 expand 出现的条件和展开后自定义渲染的内容
:::

:::demo

<<< @/demos/table/Expand.vue

:::

## 函数式赋值

`Table`组件的数据和操作数据的方法可以通过`createTable`动态创建和使用
::: tip 特点
通过闭包的形式，将表格的数据和修改方式隔离开，可以避免表格数据在使用过程中被污染，更好保障了数据显示的准确性
:::

::: demo
<<< @/demos/table/CreateTable.vue
:::

## Table Props

| prop                |                                                    说明                                                     |                                                               类型 |       默认值 |
| ------------------- | :---------------------------------------------------------------------------------------------------------: | -----------------------------------------------------------------: | -----------: |
| data                |                                                表格里的数据                                                 |                                                              Array |           [] |
| columns             |                                                   列选项                                                    |                                                           Column[] |           [] |
| stripe              |                                               是否启用斑马纹                                                |                                                            boolean |        false |
| border              |                                             是否启用表格 border                                             |                                                            boolean |        false |
| headerRowClassName  |                                        header row 的 class 生成函数                                         |                                                  函数 () => string |           无 |
| headerRowStyle      |                                          header row style 生成函数                                          |                                                    函数 () => ({}) |           无 |
| headerCellClassName |                                        header cell 的 class 生成函数                                        |                                      函数 ({ colIndex }) => string |           无 |
| headerCellStyle     |                                        header cell 的 style 生成函数                                        |                                         函数 ({ colIndex}) => ({}) |           无 |
| rowClassName        |                                         tbody row 的 class 生成函数                                         |                                 函数 ({ row, rowIndex }) => string |           无 |
| rowStyle            |                                         tbody row 的 style 生成函数                                         |                                   函数 ({ row, rowIndex }) => ({}) |           无 |
| cellClassName       |                                       tbody td cell 的 class 生成函数                                       |                  函数 ({ row, rowIndex, col, colIndex }) => string |           无 |
| cellStyle           |                                         tbody row 的 style 生成函数                                         |                    函数 ({ row, rowIndex, col, colIndex }) => ({}) |           无 |
| cellSpan            | 用来处理单元格合并，返回[rowspan, celspan]表示一个 td 的 rowspan 和 celspan，其中一个为 0，这个单元格不显示 |                    函数 ({ row, rowIndex, col, colIndex }) => ({}) | () => [1, 1] |
| height              |                 table 的高度,指定表格高度时，如果表格高度超过设定高度，滚动的时候会固定表头                 |                                                             Number |           无 |
| showHeader          |                                            是否显示 table header                                            |                                                            boolean |         true |
| showData            |                                             是否显示 table body                                             |                                                            boolean |         true |
| rowKey              |                                            表格数据的唯一键索引                                             |                                                             string |         'id' |
| highlightCurrentRow |                                  高亮当前选中行，可以结合 current 实现单选                                  |                                                            boolean |         true |
| current             |                                             当前选中的行 index                                              |                                                             Number |           -1 |
| selected            |                                                多选选中的行                                                 |                                                              Array |           [] |
| selectedKeys        |                                        高亮当前选中行的唯一 key 集合                                        |                                                              Array |           [] |
| sort                |                                                  表格排序                                                   |                         ({ order: 'asc' \| 'desc', prop: string }) |           {} |
| expand              |                                                 扩展行配置                                                  | ({ rowExpandable: () => boolean, expandRowRender: CustomeRender }) |     () => {} |
| scroll              |                                   表格横向滚动的时候，需要指定 width 属性                                   |                                                    {width: number} |           {} |

## Table 事件

| 事件名称               | 说明                   | 回调参数      |
| ---------------------- | ---------------------- | ------------- |
| update:selected        | 更新已经选中的行       | DataItem[]    |
| update:selectedKeys    | 更新选中的行的 key     | []            |
| update:current         | 更新当前选中的行       | DataItem      |
| update:currentSelected | 更新当前选中的行的 key | string number |
| sort-change            | 排序的回调             | order, prop   |

## Column 属性

| 属性         |                             说明                             |                                                                     类型 |  默认值 |
| ------------ | :----------------------------------------------------------: | -----------------------------------------------------------------------: | ------: |
| title        |                          表格的标题                          |                                                             CustomRender |       - |
| width        |                            列宽度                            |                                                         Number \| String |       - |
| align        |                           对其方式                           |                                                'left'、'center'、'right' |       - |
| className    |                         单元格 class                         |                                                                   string |       - |
| colSpan      |         theader > th 的 colSpan,用来自定义合并单元格         |                                                                   Number |       1 |
| sortable     |                             排序                             |                                                                  Boolean |   false |
| prop         |                  排序的 prop，指定排序的列                   |                                                                   String |    'id' |
| type         | 特殊类型，selection 是多选，index 是索引， expand 是展开按钮 |                                       'selection' \| 'index' \| 'expand' | 'index' |
| fixed        |                  固定列，固定到左边或者右边                  |                                                        'left' \| 'right' |       - |
| when         |                            显示列                            |                                                            () => boolean |       - |
| field        |                        指定显示的内容                        |                                                                   String |       - |
| render       |      自定义单元格的渲染，入参是 row, rowIndex, colIndex      |       RenderFn<{ row?: DataItem; colIndex?: number; rowIndex?: number }> |       - |
| disabledWhen |                          指定禁用行                          |                                             ({row, rowIndex}) => boolean |       - |
| buttons      |                   通过 buttons 来渲染按钮                    | (arg: { row?: DataItem,rowIndex?: number,colIndex?: number}) => Button[] |       - |

## createTable

### 返回值

```ts
const [tableOptions, tableUtils] = createTable(column, (shallowRef = false))
```

#### tableOptions

| 属性           |       说明       |       类型 |
| -------------- | :--------------: | ---------: |
| data           |     表格数据     | DataItem[] |
| loading        |      加载中      |    Boolean |
| columns        |      列配置      |   Column[] |
| pagination     |     分页信息     | Pagination |
| showPagination |   是否展示分页   |    Boolean |
| showData       | 是否展示表格数据 |    Boolean |
| showHeader     |  是否展示表格头  |    Boolean |

### tableUtils

| 属性              |       说明       |                   类型 |
| ----------------- | :--------------: | ---------------------: |
| setColumns        |  设置表格列配置  |     (column[]) => void |
| getColmns         |    获取列配置    |                      - |
| setData           |   设置数据信息   |   (DataItem[]) => void |
| getData           |   获取表格数据   |                      - |
| getPagination     |   获取分页信息   |                      - |
| setPagination     |   设置分页信息   | (Pagination[]) => void |
| updatePager       |     更新分页     |        (pager) => void |
| getCurrentPage    |   获取当前页码   |                      - |
| triggerPagination | 转换是否显示分页 |                      - |
| triggerData       | 转换是否显示数据 |                      - |
| triggerHeader     | 转换是否显示头部 |                      - |
