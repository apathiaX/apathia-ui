<template>
  <div class="wrapper">
    <div class="item">
      <span>small</span>
      <ap-switch v-model="switchVal" size="small" />
    </div>
    <div class="item">
      <span>medium</span>
      <ap-switch v-model="switchVal" />
    </div>
    <div class="item">
      <span>large</span>
      <ap-switch v-model="switchVal" size="large" />
    </div>
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
.item {
  display: flex;
  gap: 20px;
  align-items: center;
}
.item span {
  width: 60px;
  text-align: left;
}
</style>
