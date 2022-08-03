<template>
  <CustomRender :render="titleRender" :m="3" n="abc" />
</template>

<script lang="jsx">
import { h } from 'vue'

export default {
  setup() {
    const titleRender = ({ m, n }) =>
      h('h1', {}, `content render with render function ${m}${n}`)

    return {
      titleRender,
    }
  },
}
</script>
