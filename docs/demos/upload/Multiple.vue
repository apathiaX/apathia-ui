<template>
  <ap-upload
    v-model="file2s"
    :multiple="true"
    action="/upload/path"
    :resolve-url="resolveLocation"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const file2s = ref('')

const resolveLocation = resp => {
  return resp.data
}
</script>
