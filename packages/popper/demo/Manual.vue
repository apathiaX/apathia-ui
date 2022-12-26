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

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const visible = ref(false)
    const handleManual = () => {
      visible.value = !visible.value
    }

    return {
      visible,
      handleManual
    }
  }
})
</script>
