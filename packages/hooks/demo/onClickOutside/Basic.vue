<template>
  <BaseButton primary ref="btnRef">Box Contener</BaseButton>
  <p>counter:{{ count }}</p>
</template>

<script setup>
import { getCurrentInstance, ref } from 'vue'
const { proxy } = getCurrentInstance()
const { onClickOutside } = proxy
const btnRef = ref(null)
const count = ref(0)
onClickOutside(btnRef, () => {
  count.value += 1
})
</script>
