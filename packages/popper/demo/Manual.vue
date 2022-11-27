<template>
  <Popper v-model="visible" placement="bottom" trigger="manual">
    <BaseButton @click="handleManual" plain>Click</BaseButton>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </Popper>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)
const handleManual = () => {
  visible.value = !visible.value
}
</script>
