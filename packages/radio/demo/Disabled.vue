<template>
  <p>全体禁用</p>
  <RadioGroup v-model="value1" disabled>
    <Radio :value="1">选项1</Radio>
    <Radio :value="2">选项2</Radio>
    <Radio :value="3">选项3</Radio>
  </RadioGroup>
  <p>局部禁用</p>
  <RadioGroup v-model="value2">
    <Radio :value="1">选项1</Radio>
    <Radio :value="2">选项2</Radio>
    <Radio :value="3" disabled>选项3</Radio>
  </RadioGroup>
</template>

<script setup>
import { ref } from 'vue'
const value1 = ref(1)
const value2 = ref(2)
</script>
