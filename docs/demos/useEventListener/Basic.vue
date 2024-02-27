<template>
  <ap-button>点击了 {{ count }} 次</ap-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useEventListener } from 'apathia-ui'

const count = ref(0)
useEventListener('click', () => {
  count.value += 1
})
</script>
