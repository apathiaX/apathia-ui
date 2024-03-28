<template>
  <div class="container">
    <div>
      当前选择的是:
      <span>{{ selectVal }}</span>
    </div>
    <ap-select v-model="selectVal" placeholder="请选择自定义选项">
      <ap-option v-for="item in cities" :key="item.value" :value="item.value">
        <p :label="item.label">{{ item.label }}</p>
        <p :label="item.label">😊🥺😉😍😘😚😜😂😝😳😁😣😢😭😰</p>
      </ap-option>
    </ap-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectVal = ref('')
const cities = [
  {
    value: 'Beijing',
    label: 'Beijing',
  },
  {
    value: 'Shanghai',
    label: 'Shanghai',
  },
  {
    value: 'Nanjing',
    label: 'Nanjing',
  },
  {
    value: 'Chengdu',
    label: 'Chengdu',
  },
  {
    value: 'Shenzhen',
    label: 'Shenzhen',
  },
  {
    value: 'Guangzhou',
    label: 'Guangzhou',
  },
]
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
