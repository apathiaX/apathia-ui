<template>
  <ap-popper v-model="visible" placement="top" trigger="manual">
    <ap-button @click="handleManual" plain>Click</ap-button>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </ap-popper>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
const handleManual = () => {
  visible.value = !visible.value
}
</script>
