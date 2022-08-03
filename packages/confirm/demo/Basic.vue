<template>
  <div>
    <BaseButton @click="showConfirm">基本用法</BaseButton>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance } from 'vue'
export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const { confirm } = proxy.useConfirm()
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

    return {
      showConfirm,
    }
  },
})
</script>
