<template>
  <div>
    <Modal v-model="show" title="基础用法" width="400px">
      在两个人的世界里，管他的风雨雷电飞沙走石天崩地裂，只要能在一起就足够了。
    </Modal>
    <BaseButton @click="showModal">自定义宽度</BaseButton>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}
</script>
