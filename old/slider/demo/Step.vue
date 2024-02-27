<template>
  <Slider v-model="step" :step="10" show-steps />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const step = ref<number>(0)
    return {
      step
    }
  }
})
</script>
