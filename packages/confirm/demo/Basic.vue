<template>
  <div>
    <BaseButton @click="showConfirm">基本用法</BaseButton>
    {{confirmVal}}
  </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
const { proxy } = getCurrentInstance()
const { confirm } = proxy.useConfirm()
const confirmVal = ref('')
function showConfirm() {
  confirm({
    title: '确认',
    render: '内容',
    btnPosition: 'center',
  })
    .then(() => {
      confirmVal.value = '确认'
    })
    .catch(() => {
      confirmVal.value = '取消'
    })
}
</script>
