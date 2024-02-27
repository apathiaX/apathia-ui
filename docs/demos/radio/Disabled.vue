<template>
  <p>全体禁用</p>
  <ap-radio-group v-model="value1" disabled>
    <ap-radio :value="1">选项1</ap-radio>
    <ap-radio :value="2">选项2</ap-radio>
    <ap-radio :value="3">选项3</ap-radio>
  </ap-radio-group>
  <p>局部禁用</p>
  <ap-radio-group v-model="value2">
    <ap-radio :value="1">选项1</ap-radio>
    <ap-radio :value="2">选项2</ap-radio>
    <ap-radio :value="3" disabled>选项3</ap-radio>
  </ap-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(1)
const value2 = ref(2)
</script>
