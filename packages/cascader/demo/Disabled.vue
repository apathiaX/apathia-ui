<template>
  <div :style="{ display: 'flex' }">
    <div :style="{ width: '40%' }">
      <Cascader
        v-model="value1"
        :data="options"
        trigger="click"
        clearable
        :change-on-select="false"
      />
    </div>
    <div :style="{ width: '40%', marginLeft: '30px' }">
      <Cascader
        v-model="value2"
        :data="options"
        trigger="click"
        clearable
        :change-on-select="false"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const value1 = ref<Array<string>>([])
    const value2 = ref<Array<string>>([])
    const options = [
      {
        value: 'zhejiang',
        label: '浙江',
        children: [
          {
            value: 'hangzhou',
            label: '杭州',
            children: [
              {
                value: 'xihu',
                label: '西湖',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: '江苏',
        disabled: true,
        children: [
          {
            value: 'nanjing',
            label: '南京',
            children: [
              {
                value: 'zhonghuamen',
                label: '中华门',
              },
            ],
          },
        ],
      },
    ]
    
    return {
      value1,
      value2,
      options
    }
  }
})
</script>
