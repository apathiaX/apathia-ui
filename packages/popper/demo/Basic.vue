<template>
  <Popper :content="content">
    <BaseButton>Click</BaseButton>
  </Popper>
</template>

<script>
import { ref, defineComponent } from 'vue'
export default defineComponent({
  setup() {
    const content = ref(
      'this is popper content, this is popper content, this is popper content',
    )
    return { content }
  },
})
</script>
