<template>
  <ap-button @click="showModalFn">自定义header</ap-button>
</template>

<script lang="tsx" setup>
import { useModal } from 'apathia-ui'
const { modal } = useModal()

const showModalFn = () => {
  modal({
    render: () => (
      <div>
        一个人的时候，怎么过？就算再难以承受，其实到最后我们总能走得过来。
      </div>
    ),
    renderHeader: () => <div>function 自定义header</div>,
  })
}
</script>
