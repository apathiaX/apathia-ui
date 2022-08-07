<template>
  <BaseButton success @click="success">success</BaseButton>
  <BaseButton danger @click="danger">danger</BaseButton>
  <BaseButton default @click="default1">default</BaseButton>
  <BaseButton info @click="info">info</BaseButton>
  <BaseButton warning @click="warning">warning</BaseButton>
</template>

<script>
import { getCurrentInstance, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const success = () => {
      proxy.$toast.success('title', 'subtitle')
    }
    const info = () => {
      proxy.$toast.info('title', 'subtitle')
    }
    const warning = () => {
      proxy.$toast.warning('title', 'subtitle')
    }
    const danger = () => {
      proxy.$toast.danger('title', 'subtitle')
    }
    const default1 = () => {
      proxy.$toast.default('title', 'subtitle')
    }
    return {
      success,
      info,
      warning,
      danger,
      default1,
    }
  },
})
</script>
