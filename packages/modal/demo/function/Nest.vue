<template>
  <BaseButton @click="showModalFn1">嵌套使用</BaseButton>
</template>

<script>
import { defineComponent, getCurrentInstance, h } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    const { modal, remove } = proxy.useModal()

    const showModalFn = () => {
      modal({
        title: '函数式调用 - 内层',
        render: () =>
          h(
            'div',
            '一个人的时候，怎么过？就算再难以承受，其实到最后我们总能走得过来。',
          ),
      })
    }

    const showModalFn1 = () => {
      modal({
        title: '函数式调用 - 外层',
        width: 700,
        render: () => h('div', { onClick: showModalFn }, '点击打开二级modal'),
      })
    }
    return {
      showModalFn1,
    }
  },
})
</script>
