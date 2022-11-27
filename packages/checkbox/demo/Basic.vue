<template>
  <Checkbox v-model="base1"> 选项一 </Checkbox>
  <Checkbox v-model="base2"> 选项二 </Checkbox>
</template>

<script setup>
import { ref } from 'vue'
const base1 = ref(true)
const base2 = ref(true)
</script>
