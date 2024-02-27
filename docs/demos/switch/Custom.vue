<template>
  <ap-switch v-model="switchVal1" :active-text="'开'" :inactive-text="'关'" />
  <ap-switch v-model="switchVal2" style="margin-left: 20px">
    <template #active>custom open</template>
    <template #inactive>custom close</template>
  </ap-switch>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const switchVal1 = ref<boolean>(false)
const switchVal2 = ref<boolean>(false)
</script>
