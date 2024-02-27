<template>
  <div class="row">
    <Card title="RadioGroup">
      value: {{ count }}
      <RadioGroup v-model="count" disabled @change="switchChange">
        <Radio :value="1">1</Radio>
        <Radio :value="2">2</Radio>
        <Radio :value="3">3</Radio>
        <Radio :value="4">4</Radio>
        <Radio :value="5">5</Radio>
      </RadioGroup>
      <RadioGroup v-model="count" @change="switchChange">
        <Radio :value="1">1</Radio>
        <Radio :value="2">2</Radio>
        <Radio :value="3">3</Radio>
        <Radio :value="4">4</Radio>
        <Radio :value="5">5</Radio>
      </RadioGroup>
    </Card>

    <Card title="Radio">
      value: {{ count2 }}
      <Radio v-model="count2" :value="1" @change="switchChange">1</Radio>
      <Radio v-model="count2" :value="2">2</Radio>
      <Radio v-model="count2" :value="3">3</Radio>
      <Radio v-model="count2" :value="4">4</Radio>
      <Radio v-model="count2" :value="4" disabled>4</Radio>
      <Radio v-model="count2" :value="5" disabled>adasdasd</Radio>
    </Card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ApRadio as Radio, ApRadioGroup as RadioGroup } from 'apathia-ui'

const count = ref(0)
const count2 = ref(0)

function switchChange(val) {
  console.log(val)
}
</script>
