<template>
  <ap-datepicker v-model="time" date-format="Y-m-d" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const time = ref('')
</script>
