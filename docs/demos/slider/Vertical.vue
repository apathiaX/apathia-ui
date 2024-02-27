<template>
  <ap-slider v-model="vertical" vertical :height="200" />
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const vertical = ref<number>(0)
</script>
