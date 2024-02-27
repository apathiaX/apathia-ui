<template>
  <Affix :offset-top="100" @change="handleChange">
    <span style="background: #00aeec; font-size: 16px; padding: 10px"
      >Fix the position at the top of 100px at the top</span
    >
  </Affix>
</template>

<script>
import { getCurrentInstance, defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const { proxy } = getCurrentInstance()
    let flag = false
    const handleChange = status => {
      if (flag === status) {
        return
      } else {
        flag = status
        console.log(status)
        proxy.$toast({
          type: 'info',
          duration: 1000,
          message: `Status has changed, current status is ${status}`,
        })
      }
    }
    return {
      handleChange
    }
  }
})
</script>
