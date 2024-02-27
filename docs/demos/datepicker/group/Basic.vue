<template>
  <ap-datepicker-group
    v-model:startTime="startTime"
    v-model:endTime="endTime"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')
</script>
