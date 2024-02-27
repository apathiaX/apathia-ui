<template>
  <div>
    <div>Current Status: {{ switchVal ? '开' : '关' }}</div>

    <ap-switch v-model="switchVal" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const switchVal = ref<boolean>(false)
</script>
