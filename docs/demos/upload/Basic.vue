<template>
  <ap-upload
    v-model="file1"
    action="/api/admin/articles/images"
    :resolve-url="resolveLocation"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const file1 = ref('')

const resolveLocation = resp => {
  return resp.data
}
</script>
