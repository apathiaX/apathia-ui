<template>
  <ap-slider v-model="step" :step="10" show-steps />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const step = ref<number>(0)
</script>
