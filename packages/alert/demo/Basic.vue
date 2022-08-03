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
      toast.success('title', 'subtitle')
    }
    const info = () => {
      toast.info('title', 'subtitle')
    }
    const warning = () => {
      toast.warning('title', 'subtitle')
    }
    const danger = () => {
      toast.danger('title', 'subtitle')
    }
    const default1 = () => {
      toast.default('title', 'subtitle')
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
