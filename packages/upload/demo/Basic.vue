<template>
  <Upload
    v-model="file1"
    action="/upload/path"
    :resolve-url="resolveLocation"
  />
</template>

<script setup>
import { ref } from 'vue'

const file1 = ref('')

const resolveLocation = resp => {
  return resp.data
}
</script>
