<template>
  <Transfer
    v-model="base"
    :data="transData"
    :titles="['Origin', 'Target']"
    :left-default-checked="[0]"
  >
    <template #source-item="{ option, index }">
      {{ option.label }}({{ option.value }}) - {{ index }}
    </template>
  </Transfer>
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

    return {
      base,
      transData
    }
  }
}
</script>
