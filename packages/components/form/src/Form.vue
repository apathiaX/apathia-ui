<template>
  <div :class="styles.form">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'
import * as constants from './constants'
import { style } from '@apathia/theme'
import type { FormProps } from './types'

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

const getFromStyle = () => ({
  form: style`mb-2`,
})
const styles = getFromStyle()
</script>
