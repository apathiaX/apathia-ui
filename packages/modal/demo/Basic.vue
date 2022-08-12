<template>
  <div>
    <Modal v-model="show" title="基础用法">
      我们的孤独就像天空中漂浮的城市，仿佛是一个秘密，却无从述说。
    </Modal>
    <BaseButton @click="showModal">基本用法</BaseButton>
  </div>
  <div>
    <Modal v-model="show1">
      <template #header="{ close }">
        <span>自定义头部</span>
        <BaseButton danger @click="close">关闭</BaseButton>
      </template>
      <template #default> test asdasdasdasssss</template>
    </Modal>
    <BaseButton @click="showModal1">基本用法</BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}

const show1 = ref(false)
const showModal1 = () => {
  show1.value = true
}
// const closeModal = (close) => {
//   close()
// }
</script>
