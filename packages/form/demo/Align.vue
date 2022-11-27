<template>
  <div>
  <div style="margin-bottom: 12px">
    <BaseButton @click="changeAlign('left')">label 左对齐</BaseButton>
  <BaseButton @click="changeAlign('top')">label 位于上方</BaseButton>
  <BaseButton @click="changeAlign('right')">label 右对齐</BaseButton>
  </div>
  <Form :label-position="align">
    <FormItem label="姓名">
      <Input v-model="form.name" />
    </FormItem>
    <FormItem label="手机号">
      <Input v-model="form.phone" />
    </FormItem>
    <FormItem label="性别">
      <RadioGroup v-model="form.gender">
        <Radio :value="0">男</Radio>
        <Radio :value="1">女</Radio>
      </RadioGroup>
    </FormItem>
  </Form>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const form = reactive({
  name: '',
  phone: '',
  gender: 0
})
const align = ref('left')
const changeAlign = (item) => {
  align.value = item
}
</script>