<template>
  <Table
    :columns="columns"
    :data="data"
    :header-row-class-name="headerRowClass"
    :header-row-style="headerRowStyle"
    :header-cell-class-name="headerCellClassName"
    :header-cell-style="headerCellStyle"
    :row-class-name="rowClassName"
    :row-style="rowStyle"
    :cell-class-name="cellClassName"
    :cell-style="cellStyle"
  />
</template>

<script>
import { reactive } from 'vue'

export default {
  setup() {
    const data = reactive([
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
    ])
    const columns = [
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
        prop: 'phone',
      },
      {
        title: 'Address',
        field: 'address',
        width: '300px'
      },
    ]

    // 自定义表格的样式
    // 自定义表头 class
    const headerRowClass = () => 'table-header'
    // 自定义表头样式
    const headerRowStyle = () => ({ height: '80px' })
    // 自定义表头单元格 class
    const headerCellClassName = ({ colIndex }) =>
      colIndex === 1 ? 'cell-sky' : 'cell-green'
    // 自定义表头单元格样式
    const headerCellStyle = ({ colIndex }) =>
      colIndex === 1 ? { color: 'rgba(5, 150, 105, 1)' } : { color: 'rgba(147, 197, 253, 1)' }
    // 自定义行 class
    const rowClassName = ({ rowIndex }) =>
      rowIndex % 2 === 0 ? 'row-high' : 'row-low'
    // 自定义行 样式
    const rowStyle = ({ rowIndex }) =>
      rowIndex % 2 === 1 ? { fontWeight: 700 } : { fontWeight: 100 }
    // 自定义单元格 class
    const cellClassName = ({ rowIndex, colIndex }) =>
      rowIndex === 1 && colIndex === 1 ? 'cell-pink' : ''
    // 自定义单元格样式
    const cellStyle = ({ row, colIndex }) =>
      colIndex === 1 && row.age > 20 ? {backgroundColor: 'rgba(251, 191, 36, 1)'} : null

    return {
      data,
      columns,
      headerRowClass,
      headerRowStyle,
      headerCellClassName,
      headerCellStyle,
      rowClassName,
      rowStyle,
      cellClassName,
      cellStyle
    }
  }
}
</script>

<style scoped>
.table-header{
  height: 100px;
}
.cell-sky {
  background-color: rgba(147, 197, 253, 1);
}
.cell-green {
  background-color: rgba(5, 150, 105, 1)
}
.row-high {
  height: 120px;
}
.row-low {
  height: 70px;
}
.cell-pink {
  color: rgba(244, 114, 182, 1)
}
</style>