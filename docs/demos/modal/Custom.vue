<template>
  <div>
    <ap-modal v-model="show" title="template基础用法">
      <template #header="{ close }">
        <div :class="contentClass">
          <span>自定义header</span>
          <ap-button danger @click="close">关闭</ap-button>
        </div>
      </template>
      <template #default>
        <div>我们的孤独就像天空中漂浮的城市，仿佛是一个秘密，却无从述说。</div>
      </template>
    </ap-modal>
    <ap-button @click="showModal">自定义 header(template) </ap-button>
    <ap-button @click="showModalFn">自定义header(function)</ap-button>
  </div>
</template>

<script lang="ts" setup>
import { ref, h } from 'vue'
import { style, modal, ApButton } from 'apathia-ui'

const contentClass = style`flex w-full justify-between`
const show = ref(false)
const showModal = () => {
  show.value = true
}

const showModalFn = () => {
  modal({
    render: () =>
      h(
        'div',
        '一个人的时候，怎么过？就算再难以承受，其实到最后我们总能走得过来。',
      ),
    renderHeader: props =>
      h(
        'div',
        h(
          'div',
          {
            style: {
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              padding: '1rem',
            },
          },
          [
            h('span', '自定义header'),
            h(ApButton, { danger: true, onClick: props!.close }, '关闭'),
          ],
        ),
      ),
  })
}
</script>
