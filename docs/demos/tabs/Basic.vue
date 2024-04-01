<template>
  <ap-tabs v-model="tab" :list="list" />
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import { TabItem } from 'apathia-ui'

const tab = ref(1)
const list = reactive<TabItem[]>([1, 2, 3, 4])
</script>
