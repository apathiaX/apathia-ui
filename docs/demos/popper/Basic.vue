<template>
  <ap-popper :content="content">
    <ap-button plain>Click</ap-button>
  </ap-popper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const content = ref(
  'this is popper content, this is popper content, this is popper content',
)
</script>
