<template>
  <ap-input v-model="value" type="textarea" placeholder="请输入" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
