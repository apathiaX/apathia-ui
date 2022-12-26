<template>
  <Select v-model="selectVal">
    <Option v-for="item in options" :key="item.value" :value="item.value">{{
      item.label
    }}</Option>
  </Select>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const selectVal = ref('')
    const options = [
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ]

    return {
      selectVal,
      options
    }
  }
})
</script>
