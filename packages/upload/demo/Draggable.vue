<template>
  <Upload
    v-model="file4s"
    :draggable="true"
    :multiple="true"
    action="/x/admin/creative/material/upload"
    :resolve-url="resolveLocation"
  />
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const file4s = ref([])

    const resolveLocation = resp => {
      return resp.data
    }

    return {
      file4s,
      resolveLocation,
    }
  },
})
</script>
