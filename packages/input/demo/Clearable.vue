<template>
  <Input v-model="value" clearable />
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
