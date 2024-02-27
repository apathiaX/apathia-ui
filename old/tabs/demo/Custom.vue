<template>
  <div>Current Tab: {{ tab }}</div>

  <Tabs v-model="tab" :list="list" :show-label="showLabel" />
</template>

<script lang="ts">
import { ref, reactive } from 'vue'

export default {
  setup() {
    type TabItem = string | number | { [k: string]: any }
    const tab = ref<string>('')
    const list = reactive<TabItem[]>([1, 2, 3, 4])

    const showLabel = (tab: TabItem) => {
      return `tab-${tab}`
    }

    return {
      tab,
      list,
      showLabel
    }
  }
}
</script>
