<template>
  <div>
    <Select
      v-model="demo"
      filterable
      remote
      clearable
      @query-change="queryChange"
    >
      <Option v-for="i in list" :key="i" :value="i">{{ i }}</Option>
    </Select>

    {{ demo }}
  </div>
</template>

<script>
import { ref, defineComponent, reactive } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    const list = reactive([
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
      Math.random(),
    ])
    const queryChange = val => {
      if (val) {
        list.splice(0, 1, val)
        // list改变要带remote 否则filterstr有问题
      }
    }
    return {
      demo,
      list,
      queryChange,
    }
  },
})
</script>
