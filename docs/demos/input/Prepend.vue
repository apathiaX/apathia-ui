<template>
  <ap-form>
    <ap-form-item>
      <ap-input v-model="inputVal1">
        <template #prepend>Http://</template>
      </ap-input>
    </ap-form-item>
    <ap-form-item>
      <ap-input v-model="inputVal2">
        <template #append>.com</template>
      </ap-input>
    </ap-form-item>
    <ap-form-item>
      <ap-input v-model="inputVal3">
        <template #prepend>
          <ap-select v-model="selectVal1" style="margin: 0 -0.5rem">
            <ap-option value="">请选择</ap-option>
            <ap-option value="baidu">baidu</ap-option>
            <ap-option value="google">google</ap-option>
          </ap-select>
        </template>
        <template #append>
          <ap-icon> <Search /></ap-icon>
        </template>
      </ap-input>
    </ap-form-item>
    <ap-form-item>
      <ap-input v-model="inputVal4">
        <template #prepend>
          <ap-icon> <Search /></ap-icon>
        </template>
        <template #append>
          <ap-select v-model="selectVal2" style="margin: 0 -0.5rem">
            <ap-option value="">请选择</ap-option>
            <ap-option value="baidu">baidu</ap-option>
            <ap-option value="google">google</ap-option>
          </ap-select>
        </template>
      </ap-input>
    </ap-form-item>
  </ap-form>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputVal1 = ref('')
const inputVal2 = ref('')
const inputVal3 = ref('')
const inputVal4 = ref('')

const selectVal1 = ref('')
const selectVal2 = ref('')
</script>
