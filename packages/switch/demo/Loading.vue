<template>
  <Switch v-model="switchVal" :loading="true" />
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