<template>
  <Popper v-model="visible" placement="bottom" trigger="manual">
    <BaseButton @click="handleManual">Click</BaseButton>
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
const visible = ref(false)
const handleManual = () => {
  visible.value = !visible.value
}
</script>
