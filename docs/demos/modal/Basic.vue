<template>
  <div style="display: flex; gap: 20px">
    <ap-modal v-model="show" title="template基础用法">
      我们的孤独就像天空中漂浮的城市，仿佛是一个秘密，却无从述说。
    </ap-modal>
    <ap-button @click="showModal">点击弹出(template)</ap-button>
    <ap-button @click="showModalFn">点击弹出(function)</ap-button>
  </div>
</template>

<script lang="ts" setup>
import { modal } from 'apathia-ui'
import { ref, h } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}

const showModalFn = () => {
  modal({
    title: '函数式调用',
    render: () =>
      h(
        'div',
        '一个人的时候，怎么过？就算再难以承受，其实到最后我们总能走得过来。',
      ),
  })
}
</script>
