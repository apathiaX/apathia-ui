<template>
  <Checkbox v-model="base"> 是否为热血青年 </Checkbox>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const base = ref(true)
    return {
      base,
    }
  },
})
</script>
