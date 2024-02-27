<template>
  <ap-input v-model="value" disabled />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
