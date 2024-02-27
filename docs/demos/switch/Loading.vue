<template>
  <ap-switch v-model="switchVal" :loading="true" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const switchVal = ref<boolean>(false)
</script>
