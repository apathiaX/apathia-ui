<template>
  <div>
    <ap-button @click="showConfirm">基本用法</ap-button>
  </div>
</template>

<script lang="ts" setup>
import { useConfirm } from 'apathia-ui'
const { confirm } = useConfirm()
function showConfirm() {
  confirm({
    title: '确认',
    render: '内容',
    btnPosition: 'center',
  })
    .then(() => {
      console.log('确认')
    })
    .catch(() => {
      console.log('取消')
    })
}
</script>
