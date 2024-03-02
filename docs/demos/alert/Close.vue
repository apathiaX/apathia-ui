<template>
  <ap-button @click="openDefault">默认 3s 关闭</ap-button>
  <ap-button @click="customClose">不自动关闭</ap-button>
  <ap-button @click="customTime">自定义 1s 关闭</ap-button>
</template>

<script lang="ts" setup>
import { toast } from 'apathia-ui'
const openDefault = () => {
  toast({
    type: 'primary',
    message: 'this is a message, default auto close time is 3s',
    showClose: true,
  })
}

const customClose = () => {
  toast({
    type: 'primary',
    message: 'this is a message, can not be closed automatically',
    showClose: true,
    duration: 0,
  })
}

const customTime = () => {
  toast({
    type: 'primary',
    message: 'this is a message, custom auto close time is 1s',
    showClose: true,
    duration: 1000,
  })
}
</script>
