<template>
  <div style="margin-bottom: 10px">
    搜索的值为:<span style="color: red">{{ text }}</span>
  </div>
  <ap-input v-model="value" search @Search="search" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('')
const text = ref('')

const search = value => {
  text.value = value
}
</script>
