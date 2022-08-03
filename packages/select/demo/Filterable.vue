<template>
  <div>
    <Select v-model="demo" filterable>
      <Option v-for="i in 66" :key="i" :value="i">{{ i }}</Option>
      <template #no-result> 没有搜索结果（这是slot） </template>
    </Select>

    {{ demo }}
  </div>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const demo = ref('')
    return {
      demo,
    }
  },
})
</script>
