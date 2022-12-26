<template>
  <DatepickerGroup v-model:startTime="stime" v-model:endTime="etime" />
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
