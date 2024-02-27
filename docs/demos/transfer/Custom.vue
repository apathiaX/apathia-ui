<template>
  <ap-transfer
    v-model="base"
    :data="transData"
    :titles="['Origin', 'Target']"
    :left-default-checked="[0]"
  >
    <template #source-item="{ option, index }">
      {{ option.label }}({{ option.value }}) - {{ index }}
    </template>
  </ap-transfer>
</template>

<script lang="ts" setup>
import { ref, shallowReactive } from 'vue'
import type { PropsItem } from 'apathia-ui'

const base = ref([])
const transData = shallowReactive<PropsItem[]>([
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
</script>
