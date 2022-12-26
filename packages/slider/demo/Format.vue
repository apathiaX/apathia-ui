<template>
  <Slider v-model="base" :format-tooltip="formatFn" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
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

    return {
      base,
      formatFn
    }
  }
})
</script>
