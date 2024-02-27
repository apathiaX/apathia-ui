<template>
  <p>当前输入的内容:{{ base }}</p>
  <ap-textarea v-model="base" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const base = ref<string>('')
</script>
