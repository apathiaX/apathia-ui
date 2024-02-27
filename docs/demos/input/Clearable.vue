<template>
  <ap-input v-model="value" clearable />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
