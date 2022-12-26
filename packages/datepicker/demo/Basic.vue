<template>
  <Datepicker v-model="time" />
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
