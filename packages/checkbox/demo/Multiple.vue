<template>
  <p>你喜欢吃啥</p>

  <Checkbox v-model="likes" value="apple">苹果🍎</Checkbox>
  <Checkbox v-model="likes" value="banana">香蕉🍌</Checkbox>
  <Checkbox v-model="likes" value="pear">梨🍐</Checkbox>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const likes = ref([])
    return {
      likes,
    }
  },
})
</script>
