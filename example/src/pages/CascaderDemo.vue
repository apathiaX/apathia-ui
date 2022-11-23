<template>
  <Cascader
    v-model="path1"
    :data="options"
    trigger="click"
    clearable
    :change-on-select="false"
  >
  </Cascader>
  <p>{{ path1 }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cascader } from '@apathia/apathia'
const path1 = ref([])
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        // disabled: true,
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
          {
            value: 'fuzimiao',
            label: '夫子庙',
          },
        ],
      },
    ],
  },
  {
    value: 'hubei',
    label: '湖北',
    children: [
      {
        value: 'wuhan',
        label: '武汉',
        children: [
          {
            value: 'wuchang',
            label: '武昌',
          },
          {
            value: 'hankou',
            label: '汉口',
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'shanghai',
  },
  {
    value: 'sichuan',
    label: '四川',
  },
  {
    value: 'guizhou',
    label: '贵州',
  },
  {
    value: 'hainan',
    label: '海南',
  },
]
</script>
