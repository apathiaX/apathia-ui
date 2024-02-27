<template>
  <div>开始时间: {{ startTime }} 结束时间: {{ endTime }}</div>

  <ap-datepicker-group
    v-model:startTime="startTime"
    v-model:endTime="endTime"
    timestamp
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const startTime = ref('')
const endTime = ref('')
</script>
