<template>
  <Table :columns="fixedColumns" :data="data" :style="{width: '1000px'}"/>
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
  {
    key: '5',
    name: 'Jake White',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: 'Dublin No. 2 Lake Park',
  },
])
const fixedColumns = [
  {
    title: '姓名',
    field: 'name',
    fixed: 'left',
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
    width: '600px'
  },
]
</script>
