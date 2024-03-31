<template>
  <div :class="styles.form">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import * as constants from './constants'
import type { FormProps } from './types'
import { getFromStyle } from './form'

defineOptions({
  name: 'ApForm',
})

const props = withDefaults(defineProps<FormProps>(), {
  disabled: undefined,
  inline: false,
  labelWidth: 80,
  labelPosition: 'left',
  labelAlign: 'top',
})

provide(
  constants.FORM_ITEM_INLINE_KEY,
  computed(() => props.inline),
)

provide(
  constants.FORM_DISABLE_KEY,
  computed(() => !!props.disabled),
)
provide(
  constants.FORM_LABEL_WIDTH_KEY,
  computed(() => props.labelWidth),
)
provide(
  constants.FORM_LABEL_POSITION_KEY,
  computed(() => props.labelPosition),
)
provide(
  constants.FORM_LABEL_ALIGN_KEY,
  computed(() => props.labelAlign),
)

const styles = getFromStyle()
</script>
