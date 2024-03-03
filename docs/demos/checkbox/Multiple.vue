<template>
  <div class="wrapper">
    <div>当前选择的是:</div>
    <span class="wrapper-item" v-for="item in likes" :key="item">{{
      map[item]
    }}</span>
  </div>

  <div class="content">
    <ap-checkbox v-model="likes" value="apple">选项一：🍎</ap-checkbox>
    <ap-checkbox v-model="likes" value="banana">选项二：🍌</ap-checkbox>
    <ap-checkbox v-model="likes" value="pear">选项三：🍐</ap-checkbox>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const map = {
  apple: '🍎',
  banana: '🍌',
  pear: '🍐',
}
const likes = ref([])
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}
.wrapper-item {
  margin-left: 10px;
}
.content {
  display: flex;
  gap: 10px;
}
</style>
