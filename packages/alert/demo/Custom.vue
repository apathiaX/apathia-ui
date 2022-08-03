<template>
  <Base @click="openRender">自定义渲染</Base>
</template>

<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  setup() {
    const openRender = () => {
      toast({
        type: 'success',
        duration: 0,
        render: ({ close }) => h('div', { onClick: close }, '点我关闭'),
      })
    }

    return {
      openRender,
    }
  },
})
</script>
