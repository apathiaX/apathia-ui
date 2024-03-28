<template>
  <div>
    <ap-modal v-model="show" title="基础用法" width="400px">
      在两个人的世界里，管他的风雨雷电飞沙走石天崩地裂，只要能在一起就足够了。
    </ap-modal>
    <ap-button @click="showModal">自定义宽度(template)</ap-button>
    <ap-button @click="showModalFn">自定义宽度(function)</ap-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, h } from 'vue'
import { modal } from 'apathia-ui'

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

const show = ref(false)
const showModal = () => {
  show.value = true
}
</script>
