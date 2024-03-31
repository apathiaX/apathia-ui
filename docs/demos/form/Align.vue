<template>
  <div>
    <div style="margin-bottom: 12px">
      <ap-button @click="changeAlign('left')">label 左对齐</ap-button>
      <ap-button @click="changeAlign('top')">label 位于上方</ap-button>
      <ap-button @click="changeAlign('right')">label 右对齐</ap-button>
    </div>
    <ap-form :label-position="align">
      <ap-form-item label="姓名">
        <ap-input v-model="form.name" />
      </ap-form-item>
      <ap-form-item label="手机号">
        <ap-input v-model="form.phone" />
      </ap-form-item>
      <ap-form-item label="性别">
        <ap-radio-group v-model="form.gender">
          <ap-radio :value="0">男</ap-radio>
          <ap-radio :value="1">女</ap-radio>
        </ap-radio-group>
      </ap-form-item>
    </ap-form>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { FormPosition } from 'apathia-ui'

const form = reactive({
  name: '',
  phone: '',
  gender: 0,
})
const align = ref<FormPosition>('left')
const changeAlign = item => {
  align.value = item
}
</script>
