<template>
  <Input v-model="value" placeholder="最多输入10个字符" maxwords="10"/>
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
