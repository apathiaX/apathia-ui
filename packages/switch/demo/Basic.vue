<template>
  <div>
    <div>Current Status: {{ switchVal ? '开' : '关' }}</div>

    <Switch v-model="switchVal" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const switchVal = ref<boolean>(false)
</script>