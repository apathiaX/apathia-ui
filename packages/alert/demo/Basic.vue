<template>
  <BaseButton @click="open">点击弹出</BaseButton>
  <BaseButton @click="openVn">danger</BaseButton>
</template>

<script setup>
import { getCurrentInstance, h } from 'vue'
const {proxy} = getCurrentInstance()
const open = () => {
  proxy.$toast.info('', 'toast message')
}
const openVn = () => {
  proxy.$toast({
    type: 'info',
    render: ({ close }) => h('div', { onClick: close }, [
      h('span', null, 'VNode')
    ])
  })
}
</script>