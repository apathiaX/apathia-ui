<template>
  <BaseButton @click="openRender">自定义渲染</BaseButton>
</template>

<script>
import { getCurrentInstance, defineComponent, h } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const openRender = () => {
      proxy.$toast({
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
