<template>
  <div>选项: {{ value }}</div>

  <ap-radio-group v-model="value">
    <ap-radio :value="1">选项1</ap-radio>
    <ap-radio :value="2">选项2</ap-radio>
    <ap-radio :value="3" disabled>选项3</ap-radio>
  </ap-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(3)
</script>
