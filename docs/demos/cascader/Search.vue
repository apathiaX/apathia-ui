<template>
  <ap-cascader
    v-model="path2"
    :data="options"
    trigger="click"
    :emit-path="false"
    clearable
    search
    :change-on-select="false"
    @search-change="handleSearch"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const path2 = ref<Array<string>>([])
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          {
            value: 'xihu',
            label: '西湖',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [
          {
            value: 'zhonghuamen',
            label: '中华门',
          },
        ],
      },
    ],
  },
]

const handleSearch = (val: string) => {
  console.log(val)
}
</script>
