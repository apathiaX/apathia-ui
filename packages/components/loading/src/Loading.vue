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

<script lang="ts" setup>
import { style } from '@apathia/theme'

defineOptions({
  name: 'ApLoading',
})

const getStyles = () => ({
  spinnerItem: style`after:bg-brand-primary`,
})

const styles = getStyles()
</script>
