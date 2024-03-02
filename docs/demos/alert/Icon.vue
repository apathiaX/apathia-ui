<template>
  <ap-button @click="showIcon">展示图标</ap-button>
  <ap-button @click="showTitle">展示标题</ap-button>
  <ap-button @click="showTitleAndIcon">展示标题和图标</ap-button>
</template>

<script lang="ts" setup>
import { toast } from 'apathia-ui'
const showIcon = () => {
  toast({
    type: 'primary',
    message: 'this is a message, show default theme icon',
    showIcon: true,
    showClose: true,
  })
}

const showTitle = () => {
  toast({
    type: 'primary',
    message: 'this is a message, show title',
    title: 'this is title',
    showClose: true,
  })
}

const showTitleAndIcon = () => {
  toast({
    type: 'primary',
    message: 'this is a message, show title and icon',
    title: 'this is title',
    showIcon: true,
    showClose: true,
  })
}
</script>
