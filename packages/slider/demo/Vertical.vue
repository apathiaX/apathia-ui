<template>
  <Slider v-model="vertical" vertical :height="200" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const vertical = ref<number>(0)
    return {
      vertical
    }
  }
})
</script>
