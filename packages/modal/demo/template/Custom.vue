<template>
  <div>
    <Modal v-model="show" title="template基础用法">
     <template #header="{ close }">
       <div :class="contentClass">
         <span>自定义header</span>
         <BaseButton danger @click="close">关闭</BaseButton>
       </div>
     </template>
      <template #default >
        <div>我们的孤独就像天空中漂浮的城市，仿佛是一个秘密，却无从述说。</div>
      </template>
    </Modal>
    <BaseButton @click="showModal">自定义 header </BaseButton>
  </div>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
const {proxy} = getCurrentInstance()
const { style } = proxy
const contentClass = style`flex w-full justify-between`
const show = ref(false)
const showModal = () => {
  show.value = true
}
</script>
