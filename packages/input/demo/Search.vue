<template>
  <Input v-model="value" search @Search="search" />
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('')

    const search = value => {
      console.log('search:', value)
    }
    return {
      value,
      search,
    }
  },
})
</script>
