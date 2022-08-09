<template>
  <Select v-model="selectVal">
    <Option
      v-for="item in options"
      :disabled="item.disabled"
      :key="item.value"
      :value="item.value"
      >{{ item.label }}</Option
    >
  </Select>
</template>

<script setup>
import { ref } from 'vue'
const selectVal = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
    disabled: true,
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
