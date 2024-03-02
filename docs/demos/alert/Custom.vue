<template>
  <ap-button @click="openRender">自定义渲染</ap-button>
</template>

<script lang="tsx" setup>
import { toast } from 'apathia-ui'

const openRender = () => {
  toast({
    type: 'success',
    duration: 0,
    render: props => <div onClick={props!.close}>点我关闭</div>,
  })
}
</script>
