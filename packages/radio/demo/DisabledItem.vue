<template>
  <div>选项: {{ value }}</div>

  <RadioGroup v-model="value">
    <Radio :value="1">选项1</Radio>
    <Radio :value="2">选项2</Radio>
    <Radio :value="3" disabled>选项3</Radio>
  </RadioGroup>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const value = ref(3)
    return {
      value,
    }
  },
})
</script>
