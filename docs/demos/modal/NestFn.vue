<template>
  <ap-button @click="showModalFn1">嵌套使用</ap-button>
</template>

<script lang="tsx" setup>
import { useModal } from 'apathia-ui'

const { modal } = useModal()

const showModalFn = () => {
  modal({
    title: '函数式调用 - 内层',
    render: () => (
      <div>
        一个人的时候，怎么过？就算再难以承受，其实到最后我们总能走得过来。
      </div>
    ),
  })
}

const showModalFn1 = () => {
  modal({
    title: '函数式调用 - 外层',
    width: 700,
    render: () => <div onClick={showModalFn}>点击打开二级modal</div>,
  })
}
</script>
