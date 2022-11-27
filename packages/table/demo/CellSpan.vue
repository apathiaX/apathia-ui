<template>
  <Table 
    :columns="columns" 
    :data="data" 
    :cell-span="cellSpan" 
    :cell-style="cellStyle"
  />
</template>

<script setup>
import { reactive } from 'vue'

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
    width: '200px'
  },
]

// 自定义单元格合并。返回 [rowSpan, colSpan]。
// colSpan 是 2 表示占用两列。rowSpan 是 2 表示占用两行，在下面的例子中。第2行第2列占用了两行[2, 1]。所以第2行第3列应该设置colSpan为0。
const cellSpan = ({ rowIndex, colIndex }) => {
  if (colIndex === 2 && rowIndex === 2) return [2, 1]
  if (colIndex === 2 && rowIndex === 3) return [0, 1]
  if (colIndex === 4 && rowIndex === 4) return [1, 5]
  if (rowIndex === 4) return [1, 0]
  return [1, 1]
}

const cellStyle = ({rowIndex, colIndex}) => {
  return rowIndex === 2 && colIndex === 2 ? { color: 'red' } : rowIndex === 4 ? { backgroundColor: 'skyblue'} : ''
}
</script>
