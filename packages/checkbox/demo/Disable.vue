<template>
  <Checkbox v-model="base1"> 选项一 </Checkbox>
  <Checkbox v-model="base2" disabled> 选项二 </Checkbox>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const base1 = ref(true)
    const base2 = ref(true)

    return {
      base1,
      base2
    }
  }
})
</script>