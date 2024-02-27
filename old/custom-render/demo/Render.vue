<template>
  <CustomRender :render="titleRender" custom="custom render"/>
</template>

<script>
import { defineComponent, h } from 'vue'

export default defineComponent({
  setup() {
    const titleRender = ({ custom }) =>
      h('h1', {}, `自定义渲染函数 - 参数为：${custom}`)

    return {
      titleRender
    }
  }
})
</script>
