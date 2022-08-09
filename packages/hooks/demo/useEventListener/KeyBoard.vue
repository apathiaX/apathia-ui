<template>
  你按下的键为：
  <div style="color: red">{{ name }}</div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
const { proxy } = getCurrentInstance()
const { useEventListener } = proxy
const name = ref('')
useEventListener('keydown', e => {
  name.value = e.code
})
</script>
