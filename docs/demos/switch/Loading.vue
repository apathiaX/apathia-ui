<template>
  <div style="display: flex; gap: 20px">
    <ap-switch v-model="switchTrue" :loading="true" />
    <ap-switch v-model="switchFalse" :loading="true" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const switchFalse = ref<boolean>(false)
const switchTrue = ref<boolean>(true)
</script>
