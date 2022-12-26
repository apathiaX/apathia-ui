<template>
  <Upload
    v-model="file1"
    action="/upload/path"
    :resolve-url="resolveLocation"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const file1 = ref('')

    const resolveLocation = resp => {
      return resp.data
    }

    return {
      file1,
      resolveLocation
    }
  }
}
</script>
