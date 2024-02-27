<template>
  <ap-datepicker
    v-model="time"
    date-format="h:i:S"
    :options="{ noCalendar: true }"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const time = ref('')
</script>
