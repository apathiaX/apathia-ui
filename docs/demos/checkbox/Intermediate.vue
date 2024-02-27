<template>
  <div>
    <ap-checkbox
      v-model="isAll"
      :intermediate="intermediate"
      @change="handleAllCheckChange"
      >全选</ap-checkbox
    >
  </div>
  <div>
    <ap-checkbox
      v-for="city in cities"
      v-model="checkedCities"
      :key="city"
      :value="city"
      @change="handleChange"
      >{{ cityMap[city] }}</ap-checkbox
    >
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const cityMap = {
  shanghai: '上海',
  beijing: '北京',
  suzhou: '苏州',
  guangzhou: '广州',
}
const cities = ['shanghai', 'beijing', 'guangzhou', 'suzhou']
const isAll = ref(false)
const checkedCities = ref<string[]>([])
const intermediate = ref(false)

const handleAllCheckChange = val => {
  checkedCities.value = val ? cities : []
  intermediate.value = false
}
const handleChange = () => {
  const checkedLength = checkedCities.value.length
  isAll.value = cities.length === checkedLength
  intermediate.value = checkedLength > 0 && checkedLength < cities.length
}
</script>
