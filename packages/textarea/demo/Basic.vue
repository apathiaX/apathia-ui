<template>
  <p>当前输入的内容:{{ base }}</p>
  <Textarea v-model="base" />
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const base = ref<string>('')
    return {
      base
    }
  }
}
</script>
