<template>
  <ap-checkbox v-model="base1"> 选项一 </ap-checkbox>
  <ap-checkbox v-model="base2" disabled> 选项二 </ap-checkbox>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const base1 = ref(true)
const base2 = ref(true)
</script>
