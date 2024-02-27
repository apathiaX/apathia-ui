<template>
  <Transfer
    v-model="base"
    target-order="unshift"
    :data="transData"
    filterable
    :filter-method="searchCity"
  />
</template>

<script lang="ts">
import { ref, shallowReactive } from 'vue'

interface Option {
  value: string
  label: string
  disabled?: boolean
}

export default {
  setup() {
    const base = ref([])
    const transData = shallowReactive<Option[]>([
      { value: 'beijing', label: '北京' },
      { value: 'shanghai', label: '上海' },
      { value: 'nanjing', label: '南京' },
      { value: 'shenzhen', label: '深圳' },
      { value: 'dalian', label: '大连' },
      { value: 'zhengzhou', label: '郑州' },
      { value: 'jinan', label: '济南' },
      { value: 'lasa', label: '拉萨' },
      { value: 'xian', label: '西安' },
      { value: 'xiamen', label: '厦门' },
      { value: 'nanchang', label: '南昌' },
      { value: 'chongqing', label: '重庆' },
      { value: 'haikou', label: '海口' },
      { value: 'guiyang', label: '贵阳' },
      { value: 'guangzhou', label: '广州' },
      { value: 'huizhou', label: '惠州' },
      { value: 'dongguan', label: '东莞' },
    ])

    const searchCity = (word: string, option: Option) => {
      return option.label.indexOf(word) > -1
    }

    return {
      base,
      transData,
      searchCity
    }
  }
}
</script>
