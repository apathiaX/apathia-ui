<template>
  <Slider v-model="base" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const base = ref<number>(0)

    return {
      base
    }
  }
})
</script>
