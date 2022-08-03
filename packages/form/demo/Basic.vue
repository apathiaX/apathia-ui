<template>
  <Form :disabled="false" label-width="10rem" label-position="left">
    <FormItem label="姓名" required style="color: red">
      <Input v-model="form.name" />
    </FormItem>
    <FormItem label="手机号" :label-width="200" label-position="right">
      <Input v-model="form.phone" />
    </FormItem>
    <FormItem label="喜欢打游戏吗">
      <Checkbox v-model="form.enjoy_game" :true-value="1" :false-value="0" />
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

<script>
import { reactive, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const form = reactive({
      name: '',
      phone: 0,
      enjoy_game: 1,
      secret: false,
      gender: 0,
      other: '',
      fav_fruit: 1,
    })

    return {
      form,
    }
  },
})
</script>
