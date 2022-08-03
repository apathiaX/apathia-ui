<template>
  <div>
    <Modal v-model="show" title="基础用法" mask-closable>
      当陪你的人要下车时，即使不舍，也该心存感激，然后挥手道别。
    </Modal>
    <BaseButton @click="showModal">点击蒙层关闭</BaseButton>
  </div>
</template>

<script setup>
import { ref, defineComponent } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}
</script>
