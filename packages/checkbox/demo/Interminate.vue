<template>
  <div>
    <Checkbox v-model="isAll" :indeterminate="indeterminate" @change="handleAllCheckChange">全选</Checkbox>
  </div>
  <div>
    <Checkbox v-for="city in cities" v-model="checkedCities" :key="city" :value="city" @change="handleChange">{{cityMap[city]}}</Checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const cityMap = {
  'shanghai': '上海',
  'beijing': '北京',
  'suzhou': '苏州',
  'guangzhou': '广州'
}
const cities = ['shanghai', 'beijing', 'guangzhou', 'suzhou']
const isAll = ref(false)
const checkedCities = ref([])
const indeterminate = ref(false)

const handleAllCheckChange = (val) => {
  checkedCities.value = val ? cities : []
  indeterminate.value = false
}
const handleChange = (val) => {
  const checkedLength = checkedCities.value.length
  isAll.value = cities.length === checkedLength
  indeterminate.value = checkedLength > 0 && checkedLength < cities.length
}
</script>
