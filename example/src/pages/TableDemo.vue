<template>
  <div>
    <Card title="1: 基础使用">
      <Table :columns="columns1" :data="tableData" bordered />
    </Card>

    <Card title="2: stripe + border">
      <Table v-bind="tableOps2" border stripe />
    </Card>

    <Card title="2: rowClassName + headerRowClassName + cellClassName">
      <Table
        v-bind="tableOps2"
        :header-row-class-name="headerRowClass"
        :header-row-style="headerRowStyle"
        :header-cell-class-name="headerCellClassName"
        :header-cell-style="headerCellStyle"
        :row-class-name="rowClassName"
        :row-style="rowStyle"
        :cell-class-name="cellClassName"
        :cell-style="cellStyle"
      />
    </Card>

    <Card title="3. colSpan 与 rowSpan合并">
      <Table v-bind="tableOps3" :cell-span="cellSpan" />
    </Card>

    <Card title="4. fixed">
      <Table v-bind="tableOps4" :height="200" :scroll="{ width: 1500 }" />
    </Card>

    <Card title="5. highlightCurrentRow (单选）">
      <Table
        v-model:current="currentKey"
        row-key="key"
        v-bind="tableOps2"
        highlight-current-row
      />
      <p>当前选中{{ currentKey }}</p>
      <h3>单选单条数据</h3>
      <Table
        v-model:currentSelected="currentItem"
        row-key="key"
        v-bind="tableOps2"
        highlight-current-row
      />
      <p>当前选中: {{ currentItem }}</p>
    </Card>

    <Card title="6. 排序">
      <Table
        v-bind="tableOps5"
        :sort="tableSort"
        @sort-change="onTableSortChange"
      />
    </Card>

    <Card title="7. expand">
      <h4>age > 30 展开查看详细</h4>
      <Table v-bind="tableOps6" :expand="expandTableConfig" />
    </Card>

    <Card title="8. 多选">
      <Table
        v-model:selected="selected"
        v-model:selectedKeys="selectedKeys"
        v-bind="tableOps7"
        row-key="key"
      />
      <p>已经选中{{ selected.length }}条</p>
      <BaseButton @click="removeLast">remove last</BaseButton>
      <BaseButton @click="selectFirst">select first</BaseButton>
      <BaseButton @click="removeAllChecked">remove all checked</BaseButton>
    </Card>

    <Card title="9. 自定义渲染">
      <Table v-bind="tableOps8" />
    </Card>

    <Card title="10. 异步渲染">
      <Table v-bind="tableOps9" />
    </Card>

    <Card title="11. col when控制显示隐藏">
      <p @click="toggleName">toggle name show</p>
      <Table v-bind="tableOps10" />
    </Card>
  </div>
</template>

<script lang="jsx">
import { ref, reactive } from 'vue'
import { cloneDeep } from 'lodash'
import { tw, apply, BaseButton } from '@apathia/apathia'
import { createTable, useToggle, Table } from '@apathia/apathia'

const normalColumns = [
  {
    title: '姓名',
    align: 'left',
    field: 'name',
  },
  {
    title: '年龄就看了的很长的字',
    width: 90,
    field: 'age',
    prop: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
  },
  {
    title: 'Phone',
    field: 'phone',
    prop: 'phone',
  },
  {
    title: 'Address',
    field: 'address',
  },
]
const mergeColumns = [
  {
    title: '姓名',
    field: 'name',
  },
  {
    title: 'age',
    field: 'age',
    prop: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
    align: 'center',
    colSpan: 2,
  },
  {
    title: 'Phone',
    field: 'phone',
    colSpan: 0,
  },
  {
    title: 'Address',
    field: 'address',
  },
]
const sortColumns = [
  {
    title: '姓名',
    field: 'name',
  },
  {
    title: 'age',
    field: 'age',
    sortable: true,
    prop: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
  },
  {
    title: 'Phone',
    field: 'phone',
    sortable: true,
    prop: 'phone',
  },
  {
    title: 'Address',
    field: 'address',
  },
]
const checkedColumns = [
  {
    title: '全选',
    width: 40,
    type: 'selection',
    disabledWhen: ({ row }) => row.age > 30,
  },
  {
    title: '姓名',
    field: 'name',
  },
  {
    title: 'age',
    field: 'age',
    prop: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
  },
  {
    title: 'Phone',
    field: 'phone',
  },
  {
    title: 'Address',
    field: 'address',
  },
]
const fixedColumns = [
  {
    title: '姓名',
    field: 'name',
    fixed: 'left',
    width: '200',
  },
  {
    title: 'age',
    field: 'age',
    prop: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
    width: 200,
  },
  {
    title: 'age',
    field: 'age',
    prop: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
  },
  {
    title: 'age',
    field: 'age',
    prop: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
  },
  {
    title: 'Phone',
    field: 'phone',
  },
  {
    title: 'Address',
    field: 'address',
    // fixed: 'right',
    // width: 300,
  },
]

const expandColumns = [
  {
    title: '索引',
    type: 'index',
  },
  {
    title: '展开',
    type: 'expand',
    width: 50,
  },
  {
    title: '姓名',
    field: 'name',
    width: 100,
  },
  {
    title: 'age',
    field: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
  },
  {
    title: 'Phone',
    field: 'phone',
  },
  {
    title: 'Address',
    field: 'address',
  },
]

const costomColumns = [
  {
    title: '姓名',
    render: ({ colIndex, rowIndex, row }) => (
      <span>
        col: {colIndex} row: {rowIndex} name: {row.name} 来自{' '}
        {row.address.split(' ')[0]}
      </span>
    ),
    width: 100,
  },
  {
    title: '爸爸名字',
    field: 'father.name',
  },
  {
    title: 'age',
    field: 'age',
    prop: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
  },
  {
    title: 'Phone',
    field: 'phone',
  },
  {
    title: 'Address',
    field: 'address',
  },
  {
    title: '操作',
    width: 100,
    buttons: ({ row, rowIndex, colIndex }) => [
      {
        text: '编辑',
        onClick: () => {
          console.log('edit', row, rowIndex, colIndex)
        },
      },
      {
        text: '删除',
        className: 'danger',
        onClick: () => {
          console.log(row, rowIndex, colIndex)
        },
      },
      {
        text: '删除',
        className: 'danger',
        onClick: () => {
          console.log(row, rowIndex, colIndex)
        },
      },
    ],
  },
]

const data = [
  {
    key: '6',
    name: '听风',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
    father: {
      name: 'Jerry',
      age: 43,
    },
  },
  {
    key: '11',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',

    father: {
      name: 'Bob',
      age: 34,
    },
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
    father: {
      name: 'Cnaob',
      age: 37,
    },
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
    father: {
      name: 'Jacy',
      age: 56,
    },
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
    father: {
      name: 'Mike',
      age: 43,
    },
  },
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
    father: {
      name: 'Jerry',
      age: 43,
    },
  },
]

export default {
  components: {
    Table,
    BaseButton,
  },

  setup() {
    const columns1 = ref(normalColumns)
    const tableData = ref(data)
    const [tableOps1, tableUtils1] = createTable(normalColumns)
    tableUtils1.setData(data)

    const [tableOps2, tableUtils2] = createTable(normalColumns)
    tableUtils2.setData(data)

    // 给header row添加outline
    const headerRowClass = () => tw`${apply`outline-black`}`
    const headerRowStyle = () => ({ fontSize: '22px' })

    const headerCellClassName = ({ colIndex }) =>
      colIndex === 1 ? 'bg-red' : 'bg-green'
    const headerCellStyle = ({ colIndex }) =>
      colIndex === 1 ? { fontSize: '22px' } : { color: 'blue' }

    const rowClassName = ({ rowIndex }) =>
      rowIndex === 1 ? 'row-min' : 'row-large'
    const rowStyle = ({ rowIndex }) =>
      rowIndex === 2 ? { fontSize: '16px' } : { fontSize: '14px' }
    const cellClassName = ({ rowIndex, colIndex }) =>
      rowIndex === 1 && colIndex === 1 ? 'oneone' : 'others'
    const cellStyle = ({ row, colIndex }) =>
      colIndex === 1 && row.age > 20 ? { color: 'red' } : null

    const [tableOps3, tableUtils3] = createTable(mergeColumns)
    tableUtils3.setData(data)
    const cellSpan = ({ rowIndex, colIndex }) => {
      if (colIndex === 2 && rowIndex === 2) return [2, 1]
      if (colIndex === 2 && rowIndex === 3) return [0, 1]
      if (colIndex === 1 && rowIndex === 4) return [1, 5]
      if (rowIndex === 4) return [1, 0]
      return [1, 1]
    }
    const currentKey = ref('4')
    const currentItem = ref(null)

    const showPagination = () => {
      tableUtils2.triggerShowPagination(true)
    }

    // fixed header and column
    const [tableOps4, tableUtils4] = createTable(fixedColumns)
    tableUtils4.setData(data)

    // 排序
    const [tableOps5, tableUtils5] = createTable(sortColumns)
    const tableSort = reactive({
      prop: 'age',
      order: 'desc',
    })
    tableUtils5.setData(data)

    const onTableSortChange = ({ prop, order }) => {
      tableSort.prop = prop
      tableSort.order = order
      tableUtils5.setData(
        cloneDeep(
          tableData.value.sort(
            (v1, v2) => (v1[prop] - v2[prop]) * (order === 'asc' ? 1 : -1),
          ),
        ),
      )
    }

    // 扩展
    const [tableOps6, tableUtils6] = createTable(expandColumns)
    tableUtils6.setData(data)
    const expandTableConfig = {
      expandRowRender: ({ row }) => <span>详细信息 age {row.age}</span>,
      rowExpandable: ({ row }) => row.age > 30,
    }

    // 多选
    const [tableOps7, tableUtils7] = createTable(checkedColumns)
    tableUtils7.setData(data)
    const selected = ref([])
    const selectedKeys = ref([])

    const removeLast = () => {
      tableUtils7.setData(tableUtils7.getData().slice(0, -1))
    }
    const selectFirst = () => {
      selected.value = [
        {
          key: '6',
          name: '听风',
          age: 18,
          tel: '0575-22098909',
          phone: 18900010002,
          address: 'Dublin No. 2 Lake Park',
          father: {
            name: 'Jerry',
            age: 43,
          },
        },
      ]
    }
    const removeAllChecked = () => {
      selected.value = []
    }

    // 自定义渲染
    const [tableOps8, tableUtils8] = createTable(costomColumns)
    tableUtils8.setData(data)

    // loading + empty
    const [tableOps9, tableUtils9] = createTable(normalColumns)
    tableUtils9.setData(async () => {
      const wait = () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve(Math.random() > 0.5 ? data : [])
          }, 2000)
        })
      return await wait()
    })

    // when控制某一列是否显示
    const [showName, toggleName] = useToggle(true)
    const whenColumns = [
      {
        title: '姓名',
        render: ({ row }) => (
          <span>
            name: {row.name} 来自 {row.address.split(' ')[0]}
          </span>
        ),
        width: 100,
        when: () => showName.value,
      },
      {
        title: '爸爸名字',
        field: 'father.name',
      },
      {
        title: 'age',
        field: 'age',
        prop: 'age',
      },
      {
        title: 'Home phone',
        field: 'tel',
      },
      {
        title: 'Phone',
        field: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
      },
      {
        title: '操作',
        buttons: ({ row, rowIndex, colIndex }) => [
          {
            text: '编辑',
            onClick: () => {
              console.log('edit', row, rowIndex, colIndex)
            },
          },
          {
            text: '删除',
            className: 'danger',
            onClick: () => {
              console.log(row, rowIndex, colIndex)
            },
          },
        ],
      },
    ]
    const [tableOps10, tableUtils10] = createTable(whenColumns)
    tableUtils10.setData(data)

    return {
      columns1,
      tableData,

      tableOps1,
      removeLast,

      // 自定义渲染
      tableOps2,
      headerRowClass,
      headerRowStyle,
      headerCellClassName,
      headerCellStyle,
      rowClassName,
      rowStyle,
      cellClassName,
      cellStyle,

      // 表格合并
      tableOps3,
      cellSpan,

      currentKey,
      currentItem,
      onTableSortChange,
      showPagination,
      tableOps4,
      selected,
      selectedKeys,

      tableOps5,

      tableOps6,
      tableOps7,
      removeAllChecked,
      selectFirst,

      expandTableConfig, // 展开
      tableSort,
      tableOps8,

      tableOps9,
      tableOps10,
      toggleName,
      showName,
    }
  },
}
</script>
