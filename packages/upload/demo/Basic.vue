<template>
  <Upload
    v-model="file1"
    action="/x/admin/creative/material/upload"
    :resolve-url="resolveLocation"
  />
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const file1 = ref('')

    const resolveLocation = resp => {
      return resp.data
    }

    return {
      file1,
      resolveLocation,
    }
  },
})
</script>
