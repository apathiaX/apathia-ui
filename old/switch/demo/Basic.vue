<template>
  <div>
    <div>Current Status: {{ switchVal ? '开' : '关' }}</div>

    <Switch v-model="switchVal" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const switchVal = ref<boolean>(false)
    return {
      switchVal
    }
  }
}
</script>
