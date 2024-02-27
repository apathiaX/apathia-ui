<template>
  <ap-upload
    v-model="file4s"
    :draggable="true"
    :multiple="true"
    action="/upload/path"
    :resolve-url="resolveLocation"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const file4s = ref('')

const resolveLocation = resp => {
  return resp.data
}
</script>
