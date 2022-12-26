<template>
  <Popper :content="content">
    <BaseButton plain>Click</BaseButton>
  </Popper>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const content = ref(
      'this is popper content, this is popper content, this is popper content',
    )

    return {
      content
    }
  }
})
</script>
