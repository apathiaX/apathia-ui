<template>
  <ap-button success @click="success">success</ap-button>
  <ap-button danger @click="danger">danger</ap-button>
  <ap-button default @click="default1">default</ap-button>
  <ap-button info @click="info">info</ap-button>
  <ap-button warning @click="warning">warning</ap-button>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
const success = () => {
  proxy.$toast({
    type: 'success',
    title: 'title',
    message: 'message',
    showClose: true,
  })
}
const info = () => {
  proxy.$toast.info('title', 'message', { showClose: true })
}
const warning = () => {
  proxy.$toast.warning('title', 'message', { showClose: true })
}
const danger = () => {
  proxy.$toast.danger('title', 'message', { showClose: true })
}
const default1 = () => {
  proxy.$toast.default('title', 'message', { showClose: true })
}
</script>
