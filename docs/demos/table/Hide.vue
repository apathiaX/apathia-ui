<template>
  <ap-button :style="{ marginBottom: '5px' }" primary @click="toggleShowName()"
    >{{ showName ? '隐藏' : '显示' }}姓名</ap-button
  >
  <ap-table :columns="toggledColumns" :data="data" />
</template>

<script lang="ts" setup>
import { DataItem } from 'apathia-ui'
import { reactive, ref } from 'vue'

const data = reactive<DataItem[]>([
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

const toggledColumns = [
  {
    title: '姓名',
    field: 'name',
    when: () => showName.value,
  },
  {
    title: 'age',
    field: 'age',
  },
  {
    title: 'Home phone',
    field: 'tel',
    width: 200,
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
    width: '200px',
  },
]

const showName = ref(true)
const toggleShowName = () => {
  showName.value = !showName.value
}
</script>
