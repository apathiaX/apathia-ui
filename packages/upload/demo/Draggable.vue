<template>
  <Upload
    v-model="file4s"
    :draggable="true"
    :multiple="true"
    action="/upload/path"
    :resolve-url="resolveLocation"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const file4s = ref('')

    const resolveLocation = resp => {
      return resp.data
    }

    return {
      file4s,
      resolveLocation
    }
  }
}
</script>
