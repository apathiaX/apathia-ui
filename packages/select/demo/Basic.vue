<template>
  <Select v-model="demo">
    <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
  </Select>

  <p>{{ demo }}</p>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    return {
      demo,
    }
  },
})
</script>
