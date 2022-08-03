<template>
  <Select v-model="demo" disabled>
    <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
  </Select>
  <Select v-model="demo1">
    <Option v-for="i in 20" :key="i" :value="i" :disabled="i < 10">
      {{ i }}
    </Option>
  </Select>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    const demo1 = ref('')
    return {
      demo,
      demo1,
    }
  },
})
</script>
