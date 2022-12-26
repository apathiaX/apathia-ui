<template>
  <Datepicker v-model="time" timestamp />
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
