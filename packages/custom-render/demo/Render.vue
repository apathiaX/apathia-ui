<template>
  <CustomRender :render="titleRender" custom="custom render"/>
</template>

<script setup>
import { h } from 'vue'

const titleRender = ({ custom }) =>
      h('h1', {}, `自定义渲染函数 - 参数为：${custom}`)
</script>
