<template>
  <Switch v-model="switchVal" :disabled="true" />
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