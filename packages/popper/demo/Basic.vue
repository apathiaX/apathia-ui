<template>
  <Popper :content="content">
    <BaseButton plain>Click</BaseButton>
  </Popper>
</template>

<script setup>
import { ref } from 'vue'
const content = ref(
  'this is popper content, this is popper content, this is popper content',
)
</script>
