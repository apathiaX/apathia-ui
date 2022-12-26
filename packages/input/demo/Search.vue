<template>
  <div style="margin-bottom: 10px">
    搜索的值为:<span style="color: red">{{ text }}</span>
  </div>
   <Input v-model="value" search @Search="search" />
 </template>
 

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const value = ref('')
    const text = ref('')
    
    const search = value => {
      text.value = value
    }
    return {
      value,
      text,
      search
    }
  },
})
</script>
 