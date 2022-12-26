<template>
  <div>开始时间: {{ stime }} 结束时间: {{ etime }}</div>

  <DatepickerGroup
    v-model:startTime="stime"
    v-model:endTime="etime"
    timestamp
  />
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const stime = ref('')
    const etime = ref('')
    return {
      stime,
      etime,
    }
  },
})
</script>
