<template>
  <ap-form labelWidth="100">
    <ap-form-item label="姓名" required style="color: red">
      <ap-input v-model="form.name" />
    </ap-form-item>
    <ap-form-item label="手机号">
      <ap-input v-model="form.phone" />
    </ap-form-item>
    <ap-form-item label="喜欢的运动">
      <ap-checkbox v-model="form.enjoy_game" value="running">跑步</ap-checkbox>
      <ap-checkbox v-model="form.enjoy_game" value="swimming">游泳</ap-checkbox>
      <ap-checkbox v-model="form.enjoy_game" value="basketball"
        >篮球</ap-checkbox
      >
    </ap-form-item>
    <ap-form-item label="性别">
      <ap-radio-group v-model="form.gender">
        <ap-radio :value="0">男</ap-radio>
        <ap-radio :value="1">女</ap-radio>
      </ap-radio-group>
    </ap-form-item>
    <ap-form-item label="其他信息">
      <ap-input v-model="form.other" :rows="1" type="textarea"></ap-input>
    </ap-form-item>
    <ap-form-item label="最喜欢的水果">
      <ap-select v-model="form.fav_fruit">
        <ap-option :value="1">苹果</ap-option>
        <ap-option :value="2">香蕉</ap-option>
      </ap-select>
    </ap-form-item>
  </ap-form>
</template>

<script lang="ts" setup>
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
