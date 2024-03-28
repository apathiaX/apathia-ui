<template>
  <ap-button @click="showConfirm">自定义footer</ap-button>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { useConfirm } from 'apathia-ui'

const { confirm } = useConfirm()
const confirmVal = ref('')

function showConfirm() {
  confirm({
    title: '确认',
    render: '内容',
    renderFooter: props =>
      h(
        'div',
        { onClick: () => props?.cancel && props.cancel() },
        '自定义 footer',
      ),
  })
    .then(() => {
      confirmVal.value = '确认'
    })
    .catch(() => {
      confirmVal.value = '取消'
    })
}
</script>
