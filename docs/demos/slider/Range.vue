<template>
  <ap-slider v-model="range" :value-range="[20, 60]" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const range = ref<number>(30)
</script>
