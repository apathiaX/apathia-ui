<template>
  <BaseButton @click="showPopper">函数式调用</BaseButton>
  <BaseButton ref="popperRef">Target</BaseButton>
</template>

<script setup>
import { ref, getCurrentInstance, h } from 'vue'
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
</script>