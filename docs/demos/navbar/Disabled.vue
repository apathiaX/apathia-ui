<template>
  <ap-navbar
    v-model="nav"
    :list="list"
    trigger="click"
    :disabled-parent="false"
  />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { NavNode } from 'apathia-ui'

const nav = ref<number>(1)
const list = reactive<Array<NavNode>>([
  {
    label: 'nav1',
    value: 1,
  },
  {
    label: 'nav2',
    value: 2,
  },
  {
    label: 'nav3',
    value: 3,
    children: [
      {
        label: '二级1',
        value: '3-1',
      },
      {
        label: '二级2',
        value: '3-2',
      },
      {
        label: '二级3',
        value: '3-3',
      },
    ],
  },
])
</script>
