<template>
  <ap-button primary ref="btnRef">Box Container</ap-button>
  <p>counter:{{ count }}</p>
</template>

<script setup lang="ts">
import { onClickOutside } from 'apathia-ui'
import { ref } from 'vue'

const btnRef = ref(null)
const count = ref(0)
onClickOutside(btnRef, () => {
  count.value += 1
})
</script>
