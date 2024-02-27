<template>
  <ap-affix :offset-top="100" @change="handleChange">
    <span style="background: #00aeec; font-size: 16px; padding: 10px"
      >Fix the position at the top of 100px at the top</span
    >
  </ap-affix>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue'

const { proxy } = getCurrentInstance() as any
let flag = false
const handleChange = status => {
  if (flag === status) {
    return
  } else {
    flag = status
    proxy!.$toast({
      type: 'info',
      duration: 1000,
      message: `Status has changed, current status is ${status}`,
    })
  }
}
</script>
