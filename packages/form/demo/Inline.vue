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

<script>
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      phone: ''
    })
    return {
      form
    }
  }
})
</script>