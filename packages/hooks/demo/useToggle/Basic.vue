<template>
  <div style="margin: 10px 0">
    Effects:
    <span style="color: red">{{ state }}</span>
  </div>
  <BaseButton @click="toggle">Toggle</BaseButton>
  <BaseButton @click="setState(false)">Toggle False</BaseButton>
  <BaseButton @click="setState(true)">Toggle True</BaseButton>
</template>

<script setup>
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance()
const { useToggle } = proxy
const [state, toggle, setState] = useToggle()
</script>
