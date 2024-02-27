<template>
  <ap-form inline>
    <ap-form-item label="姓名">
      <ap-input v-model="form.name" />
    </ap-form-item>
    <ap-form-item label="手机号">
      <ap-input v-model="form.phone" />
    </ap-form-item>
    <ap-form-item>
      <ap-button primary>确认</ap-button>
    </ap-form-item>
  </ap-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  phone: '',
})
</script>
