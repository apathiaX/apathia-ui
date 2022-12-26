<template>
  <Switch v-model="switchVal" size="small" />
  <Switch v-model="switchVal" size="large" />
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
