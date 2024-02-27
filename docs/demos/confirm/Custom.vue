<template>
  <div>
    <ap-button @click="showConfirm">自定义footer</ap-button>
    {{ confirmVal }}
  </div>
</template>

<script lang="tsx" setup>
import { h, ref } from 'vue'
import { useConfirm } from 'apathia-ui'

const { confirm } = useConfirm()
const confirmVal = ref('')

function showConfirm() {
  confirm({
    title: '确认',
    render: '内容',
    renderFooter: () => <div>自定义 footer</div>,
  })
    .then(() => {
      confirmVal.value = '确认'
    })
    .catch(() => {
      confirmVal.value = '取消'
    })
}
</script>
