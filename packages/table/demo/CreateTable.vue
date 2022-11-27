<template>
  <BaseButton :style="{marginBottom: '5px'}" primary @click="addInfo">添加数据</BaseButton>
  <Table v-bind="tableOptions" />
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const createTable = proxy.createTable
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'London No. 2 Lake Park',
  },
]
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

const [tableOptions, tableUtil] = createTable(columns)
tableUtil.setData(data)

const addInfo = () => {
  const tempInfo = {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  }
  tableUtil.setData([...data, tempInfo])
}
</script>
