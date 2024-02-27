<template>
  <ap-popper
    placement="bottom"
    dark
    @hide="hide"
    @show="show"
    @after-hide="afterHide"
  >
    <ap-button plain>Click</ap-button>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </ap-popper>
</template>

<script lang="ts" setup>
const hide = val => {
  console.log('hide', val)
}

const show = val => {
  console.log('show', val)
}

const afterHide = () => {
  console.log('afterHide', '在隐藏动画结束后触发')
}
</script>
