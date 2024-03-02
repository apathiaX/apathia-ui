<template>
  <ap-affix :offset-top="100" @change="handleChange">
    <ap-button primary
      >Fix the position at the top of 100px at the top</ap-button
    >
  </ap-affix>
</template>

<script lang="ts" setup>
import { toast } from 'apathia-ui'

let flag = false
const handleChange = status => {
  if (flag === status) {
    return
  } else {
    flag = status
    toast({
      type: 'info',
      duration: 1000,
      message: `Status has changed, current status is ${status}`,
    })
  }
}
</script>
