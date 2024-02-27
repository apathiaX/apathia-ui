<template>
  <Upload v-model="file1" action="/api/admin/articles/images" :headers="headers" :resolve-url="resolveLocation" />
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
      headers,
      file1,
      resolveLocation
    }
  }
}
</script>
