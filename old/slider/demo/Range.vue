<template>
  <Slider v-model="range" :value-range="[20, 60]" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const range = ref<number>(30)
    return {
      range
    }
  }
})
</script>
