<template>
  <BaseButton>点击了 {{ count }} 次</BaseButton>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
const { proxy } = getCurrentInstance()
const { useEventListener } = proxy
const count = ref(0)
const stop = useEventListener('click', () => {
  count.value += 1
})
</script>
