<template>
  <ap-button success @click="success">success</ap-button>
  <ap-button danger @click="danger">danger</ap-button>
  <ap-button primary @click="primary">primary</ap-button>
  <ap-button info @click="info">info</ap-button>
  <ap-button warning @click="warning">warning</ap-button>
</template>

<script lang="ts" setup>
import { toast } from 'apathia-ui'
const success = () => {
  toast({
    type: 'success',
    message: 'this is a message, type is success',
    effect: 'dark',
    showClose: true,
  })
}
const info = () => {
  toast.info('this is a message, type is info', {
    showClose: true,
    effect: 'dark',
  })
}
const warning = () => {
  toast.warning('this is a message, type is warning', {
    showClose: true,
    effect: 'dark',
  })
}
const danger = () => {
  toast.danger('this is a message, type is danger', {
    showClose: true,
    effect: 'dark',
  })
}
const primary = () => {
  toast.primary('this is a message, type is primary', {
    showClose: true,
    effect: 'dark',
  })
}
</script>
