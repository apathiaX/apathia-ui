<template>
  <div class="group">
    <div>选项: {{ value }}</div>

    <ap-radio-group v-model="value" @change="handleChange">
      <ap-radio :value="1">选项1</ap-radio>
      <ap-radio :value="2">选项2</ap-radio>
      <ap-radio :value="3">选项3</ap-radio>
    </ap-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { toast } from 'apathia-ui'

const value = ref(1)

const handleChange = val => {
  if (val === 3) toast.primary('选项3被选中了')
}
</script>

<style scoped>
.group {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
