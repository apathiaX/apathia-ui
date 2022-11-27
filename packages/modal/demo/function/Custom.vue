<template>
  <div>
    <BaseButton @click="showModalFn">自定义header</BaseButton>
  </div>
</template>

<script setup>
import { getCurrentInstance, h } from 'vue'

const { proxy, BaseButton } = getCurrentInstance()
const { modal, remove } = proxy.useModal()

const showModalFn = () => {
  modal({
    render: () =>
      h(
        'div',
        '一个人的时候，怎么过？就算再难以承受，其实到最后我们总能走得过来。',
      ),
    renderHeader: () => 
      h(
        'div',
        [
          h(
            'sapn',
            'function 自定义header'
          )
        ]
      )
  })
}
</script>
