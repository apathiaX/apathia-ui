<template>
  <ap-button primary @click="hiddenVal = !hiddenVal"
    >{{ hiddenVal ? 'Show' : 'Hidden' }} ap-side-nav</ap-button
  >
  <div style="height: 50vh; display: flex">
    <ap-side-nav :mini="hiddenVal" :menu-list="menu" key-field="path" />
    <div style="font-size: 24px; margin-left: 150px">Content</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { SideNavNode } from 'apathia-ui'

const menu = ref<SideNavNode[]>([
  {
    text: 'Navigator One',
    children: [
      {
        path: '/navigator_1/item_1',
        auth: 'WORKBENCH_TODO',
        text: 'item one',
      },
      {
        path: '/navigator_1/item_2',
        auth: 'WORKBENCH_TODO',
        text: 'item two',
      },
      {
        path: '/navigator_1/item_3',
        auth: 'WORKBENCH_TODO',
        text: 'item three',
      },
    ],
  },
  {
    text: 'Navigator Two',
    children: [
      {
        path: '/navigator_2/item_1',
        auth: 'WORKBENCH_TODO',
        text: 'item one',
      },
      {
        path: '/navigator_2/item_2',
        auth: 'WORKBENCH_TODO',
        text: 'item two',
      },
      {
        path: '/navigator_2/item_3',
        auth: 'WORKBENCH_TODO',
        text: 'item three',
      },
    ],
  },
  {
    text: 'Navigator Tree',
    path: '/navigator_3',
  },
  {
    text: 'Navigator Four',
    path: '/navigator_4',
  },
  {
    text: 'Navigator Five',
    path: '/navigator_5',
  },
])

const hiddenVal = ref<boolean>(false)
</script>
