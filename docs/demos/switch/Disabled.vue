<template>
  <div style="display: flex; gap: 20px">
    <ap-switch v-model="switchTrue" :disabled="true" />
    <ap-switch v-model="switchFalse" :disabled="true" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const switchTrue = ref<boolean>(true)
const switchFalse = ref<boolean>(false)
</script>
