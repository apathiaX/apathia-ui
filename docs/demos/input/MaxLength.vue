<template>
  <ap-input v-model="value" placeholder="最多输入10个字符" :maxWords="10" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
