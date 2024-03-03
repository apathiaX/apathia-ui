<template>
  <div class="wrapper">
    <div>当前状态: {{ switchVal ? '开' : '关' }}</div>

    <ap-switch v-model="switchVal" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const switchVal = ref<boolean>(false)
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}
</style>
