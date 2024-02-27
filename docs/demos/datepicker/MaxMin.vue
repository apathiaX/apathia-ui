<template>
  <ap-datepicker
    v-model="time"
    :options="{
      minDate: '2021-07-10 00:00:00',
      maxDate: '2021-07-16 00:00:00',
    }"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'

const time = ref('')
</script>
