<template>
  <ap-select v-model="selectVal" clearable>
    <ap-option v-for="item in options" :key="item.value" :value="item.value">{{
      item.label
    }}</ap-option>
  </ap-select>
</template>

<script lang="ts" setup>
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
