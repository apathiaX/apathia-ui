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
    <ap-button @click="showModal">自定义 header </ap-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { style } from 'apathia-ui'

const contentClass = style`flex w-full justify-between`
const show = ref(false)
const showModal = () => {
  show.value = true
}
</script>
