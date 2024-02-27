<template>
  <ap-slider v-model="base" :format-tooltip="formatFn" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const base = ref<number>(0)
const formatFn = (cur: number) => {
  if (cur < 50) {
    return '小于50%'
  } else if (cur === 50) {
    return '50%'
  } else if (cur > 50 && cur < 100) {
    return '大于50%'
  } else {
    return '完成！'
  }
}
</script>
