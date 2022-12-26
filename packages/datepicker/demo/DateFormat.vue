<template>
  <Datepicker v-model="time" date-format="Y-m-d" />
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
