<template>
  <ap-button @click="openRender">自定义渲染</ap-button>
</template>

<script lang="tsx" setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
const openRender = () => {
  proxy.$toast({
    type: 'success',
    duration: 0,
    render: ({ close }) => <div onClick={close}>点我关闭</div>,
  })
}
</script>
