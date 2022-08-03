<template>
  <Input v-model="value">
    <template #prepend>
      <span>$:</span>
    </template>
    <template #append>
      <span>.com</span>
    </template>
  </Input>
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
