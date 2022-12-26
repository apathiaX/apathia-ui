<template>
    <BaseButton @click="showPopper">函数式调用</BaseButton>
    <BaseButton ref="popperRef">Target</BaseButton>
</template>
  
<script>
import { defineComponent, ref, getCurrentInstance, h } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const { popper } = proxy.usePoppertip()
    const popperRef = ref(null)
    
    const showPopper = () => {
      popper({
        target: popperRef.value,
        render: () => h(
          'div',
          [ 'Function Content', 'Function Content', 'Function Content', 'Function Content']
        )
      })
    }

    return {
      popperRef,
      showPopper
    }
  }
})
</script>