<template>
  <Input v-model="value" disabled />
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('')
    return {
      value,
    }
  },
})
</script>
