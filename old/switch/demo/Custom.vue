<template>
  <Switch v-model="switchVal1" :active-text="'开'" :inactive-text="'关'" />
  <Switch v-model="switchVal2" style="margin-left: 20px">
    <template #active>custom open</template>
    <template #inactive>custom close</template>
  </Switch>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const switchVal1 = ref<boolean>(false)
    const switchVal2 = ref<boolean>(false)
    return {
      switchVal1,
      switchVal2
    }
  }
}
</script>
