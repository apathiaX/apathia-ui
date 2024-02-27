<template>
  <ap-button @click="open">点击弹出</ap-button>
  <ap-button @click="openVn">danger</ap-button>
</template>

<script setup lang="tsx">
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
const open = () => {
  proxy!.$toast.info('', 'toast message')
}
const openVn = () => {
  proxy!.$toast({
    type: 'info',
    render: ({ close }) => (
      <div onClick={close}>
        <span>VNode</span>
      </div>
    ),
  })
}
</script>
