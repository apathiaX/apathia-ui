<template>
  <div>
    <ap-modal v-model="show" title="template基础用法">
      我们的孤独就像天空中漂浮的城市，仿佛是一个秘密，却无从述说。
    </ap-modal>
    <ap-button @click="showModal">基本用法</ap-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(false)
const showModal = () => {
  show.value = true
}
</script>
