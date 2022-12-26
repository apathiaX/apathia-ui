<template>
  <Datepicker
    v-model="time"
    date-format="h:i:S"
    :options="{ noCalendar: true }"
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
