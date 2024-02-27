<template>
  <ap-slider v-model="base" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const base = ref<number>(0)
</script>
