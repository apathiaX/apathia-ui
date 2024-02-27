<template>
  <ap-datepicker v-model="time" timestamp />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const time = ref('')
</script>
