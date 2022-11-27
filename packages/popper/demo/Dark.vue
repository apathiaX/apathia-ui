<template>
  <Popper
    placement="bottom"
    dark
    @hide="hide"
    @show="show"
    @after-hide="afterHide"
  >
    <BaseButton plain>Click</BaseButton>
    <template #content>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
      <div>Some Content</div>
    </template>
  </Popper>
</template>

<script setup>
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
