<template>
  <div style="margin-bottom: 5px">
    选中的值为： {{ path2.length > 0 ? path2 : '' }}
  </div>
  <ap-cascader
    v-model="path2"
    :data="options"
    trigger="click"
    :emit-path="false"
    clearable
    :change-on-select="false"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const path2 = ref([])
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
</script>
