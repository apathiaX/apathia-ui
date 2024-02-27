<template>
  <div>
    <BaseButton @click="showConfirm">自定义footer</BaseButton>
    {{ confirmVal }}
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, h, ref } from 'vue'

export default defineComponent({
  setup() {
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

    return {
      confirmVal,
      showConfirm
    }
  }
})
</script>
