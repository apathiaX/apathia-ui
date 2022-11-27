<template>
  <Input v-model="value" clearable />
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>
