<template>
  <Input v-model="value" placeholder="请输入"/>
</template>

<script setup>
import { ref } from 'vue'
const value = ref('')
</script>
