<template>
  <ap-cascader v-model="path5" :data="options" :change-on-select="true">
    <template #default="{ leaf, node }">
      <div class="node">
        <span class="label">
          {{ node.label }}{{ leaf ? '' : `(${node.children?.length})` }}
        </span>
        <ap-icon v-if="!leaf"><ArrowRight /></ap-icon>
      </div>
    </template>
  </ap-cascader>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const path5 = ref([])
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

<style>
.node {
  display: flex;
  padding: 10px 20px;
}
.node:hover {
  background-color: aquamarine;
}
.label {
  width: 80%;
}
</style>
