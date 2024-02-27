<template>
  <div>Current Tab: {{ tab }}</div>

  <ap-tabs v-model="tab" :list="list" />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import type { TabItem } from 'apathia-ui'

const tab = ref<string>('')
const list = reactive<TabItem[]>([1, 2, 3, 4])
</script>
