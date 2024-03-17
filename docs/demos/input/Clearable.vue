<template>
  <ap-input v-model="value" clearable placeholder="请输入"> </ap-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
