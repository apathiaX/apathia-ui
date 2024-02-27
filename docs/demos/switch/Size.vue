<template>
  <ap-switch v-model="switchVal" size="small" />
  <ap-switch v-model="switchVal" size="large" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const switchVal = ref<boolean>(false)
</script>
