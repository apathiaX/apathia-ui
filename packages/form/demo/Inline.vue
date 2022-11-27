<template>
  <Form inline>
    <FormItem label="姓名">
      <Input v-model="form.name" />
    </FormItem>
    <FormItem label="手机号">
      <Input v-model="form.phone" />
    </FormItem>
    <FormItem>
      <BaseButton promary>确认</BaseButton>
    </FormItem>
  </Form>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({
  name: '',
  phone: ''
})
</script>