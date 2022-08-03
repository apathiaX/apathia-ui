<template>
  <p>你喜欢吃啥</p>
  <Checkbox v-model="likes" value="fruit" :indeterminate="indeterminate"
    >水果</Checkbox
  >
  <Checkbox v-model="indeterminate" value="banana">香蕉🍌</Checkbox>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const likes = ref(false)
    const indeterminate = ref(false)
    return {
      likes,
      indeterminate,
    }
  },
})
</script>
