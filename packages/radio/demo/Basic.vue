<template>
  <RadioGroup v-model="value">
    <Radio :value="1">选项1</Radio>
    <Radio :value="2">选项2</Radio>
    <Radio :value="3">选项3</Radio>
  </RadioGroup>
</template>

<script setup>
import { ref } from 'vue'
const value = ref(1)
</script>
