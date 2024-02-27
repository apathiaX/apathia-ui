<template>
  你按下的键为：
  <div style="color: red">{{ name }}</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEventListener } from 'apathia-ui'
const name = ref('')
useEventListener('keydown', e => {
  name.value = e.code
})
</script>
