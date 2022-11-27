<template>
  <div>{{count}}</div>
   <CustomRender :as="BaseButton" primary small @click="handleClick">点我 +1</CustomRender>
 </template>
 
 <script setup>
 import { getCurrentInstance, ref } from 'vue'
 const { root } = getCurrentInstance()
 const { BaseButton } = root.appContext.components
 const count = ref(0)
 const handleClick = () => {
   count.value += 1
 }
 </script>
 