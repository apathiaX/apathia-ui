<template>
  <div>
    <BaseButton @click="showModalFn">function 基础用法</BaseButton>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, h } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const { modal, remove } = proxy.useModal()

    const showModalFn = () => {
      modal({
        title: '函数式调用',
        width: '400',
        render: () =>
          h(
            'div',
            '一个人的时候，怎么过？就算再难以承受，其实到最后我们总能走得过来。',
          ),
      })
    }

    return {
      remove,
      showModalFn
    }
  }
})
</script>
