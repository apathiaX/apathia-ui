<template>
  <Input v-model="value" placeholder="please input" />
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
