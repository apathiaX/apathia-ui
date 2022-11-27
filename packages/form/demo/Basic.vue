<template>
  <Form labelWidth="100">
    <FormItem label="姓名" required style="color: red">
      <Input v-model="form.name" />
    </FormItem>
    <FormItem label="手机号">
      <Input v-model="form.phone" />
    </FormItem>
    <FormItem label="喜欢的运动">
      <Checkbox v-model="form.enjoy_game" value="running">跑步</Checkbox>
      <Checkbox v-model="form.enjoy_game" value="swimming">游泳</Checkbox>
      <Checkbox v-model="form.enjoy_game" value="basketball">篮球</Checkbox>
    </FormItem>
    <FormItem label="性别">
      <RadioGroup v-model="form.gender">
        <Radio :value="0">男</Radio>
        <Radio :value="1">女</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="其他信息">
      <textarea v-model="form.other" rows="1"></textarea>
    </FormItem>
    <FormItem label="最喜欢的水果">
      <Select v-model="form.fav_fruit">
        <Option :value="1">苹果</Option>
        <Option :value="2">香蕉</Option>
      </Select>
    </FormItem>
  </Form>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  phone: 0,
  enjoy_game: [],
  secret: false,
  gender: 0,
  other: '',
  fav_fruit: 1,
})
</script>
