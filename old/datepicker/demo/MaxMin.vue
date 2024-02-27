<template>
  <Datepicker
    v-model="time"
    :options="{
      minDate: '2021-07-10 00:00:00',
      maxDate: '2021-07-16 00:00:00',
    }"
  />
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const time = ref('')
    return {
      time,
    }
  },
})
</script>
