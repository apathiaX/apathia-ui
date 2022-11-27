<template>
  <div>
    <Modal v-model="show" title="template基础用法">
      我们的孤独就像天空中漂浮的城市，仿佛是一个秘密，却无从述说。
    </Modal>
    <BaseButton @click="showModal">基本用法</BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}
</script>
