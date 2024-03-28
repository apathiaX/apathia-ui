<template>
  <div class="container">
    <ap-select v-model="selectLGVal" size="lg">
      <ap-option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </ap-option>
    </ap-select>
    <ap-select v-model="selectVal">
      <ap-option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </ap-option>
    </ap-select>
    <ap-select v-model="selectSMVal" size="sm">
      <ap-option v-for="item in options" :key="item.value" :value="item.value">
        {{ item.label }}
      </ap-option>
    </ap-select>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const selectVal = ref('')
const selectSMVal = ref('')
const selectLGVal = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<style scoped>
.container {
  display: flex;
  gap: 20px;
}
</style>
