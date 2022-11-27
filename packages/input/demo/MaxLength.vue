<template>
  <Input v-model="value" placeholder="最多输入10个字符" maxwords="10"/>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
