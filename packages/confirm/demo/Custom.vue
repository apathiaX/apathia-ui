<template>
  <div>
    <BaseButton @click="showConfirm">自定义footer</BaseButton>
    {{confirmVal}}
  </div>
</template>

<script setup>
import { getCurrentInstance, h, ref } from 'vue'
const { proxy } = getCurrentInstance()
const { confirm } = proxy.useConfirm()
const confirmVal = ref('')
function showConfirm() {
  confirm({
    title: '确认',
    render: '内容',
    renderFooter: () => 
      h(
        'div',
        '自定义footer'
      )
  })
    .then(() => {
      confirmVal.value = '确认'
    })
    .catch(() => {
      confirmVal.value = '取消'
    })
}
</script>
