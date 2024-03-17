<template>
  <ap-input
    v-model="value"
    clearable
    placeholder="请输入"
    :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
    :parser="value => value.replace(/\$\s?|(,*)/g, '')"
  >
  </ap-input>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref('')
</script>
