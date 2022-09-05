<template>
  <div class="lds-spinner">
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
    <div :class="styles.spinnerItem"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// @ts-ignore
import { style } from '@apathia/apathia.twind'

export default defineComponent({
  name: 'Loading',

  setup() {
    const styles = getStyles()

    return {
      styles,
    }
  },
})

const getStyles = () => ({
  spinnerItem: style`after:bg-brand-primary`,
})
</script>
