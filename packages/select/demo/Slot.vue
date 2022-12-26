<template>
  <div>
    Selected country:
    <span style="color: red">{{ selectVal }}</span>
    <Select v-model="selectVal" placeholder="请选择自定义选项">
      <Option v-for="item in cities" :key="item.value" :value="item.value">
        <p :label="item.label">{{ item.label }}</p>
        <p :label="item.label">😊🥺😉😍😘😚😜😂😝😳😁😣😢😭😰</p>
      </Option>
    </Select>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const selectVal = ref('')
    const cities = [
      {
        value: 'Beijing',
        label: 'Beijing',
      },
      {
        value: 'Shanghai',
        label: 'Shanghai',
      },
      {
        value: 'Nanjing',
        label: 'Nanjing',
      },
      {
        value: 'Chengdu',
        label: 'Chengdu',
      },
      {
        value: 'Shenzhen',
        label: 'Shenzhen',
      },
      {
        value: 'Guangzhou',
        label: 'Guangzhou',
      },
    ]

    return {
      selectVal,
      cities
    }
  }
})
</script>
