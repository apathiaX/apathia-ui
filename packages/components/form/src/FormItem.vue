<template>
  <div :class="containerClasses">
    <label
      v-if="label || offset || $slots.label"
      :class="labelClasses"
      :style="labelStyle"
    >
      <slot name="label">{{ label }}</slot>
    </label>
    <div :class="[styles.content, contentClass]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, StyleValue, toRef } from 'vue'
import {
  FORM_LABEL_POSITION_KEY,
  FORM_LABEL_WIDTH_KEY,
  FORM_ITEM_INLINE_KEY,
  FORM_LABEL_ALIGN_KEY,
} from './constants'
import { useInjectProp } from '@apathia/shared'
import type { FormItemProps } from './types'
import { getFormItemStyle } from './form'

defineOptions({
  name: 'ApFormItem',
})

const props = defineProps<FormItemProps>()

const styles = getFormItemStyle()

const realLabelPosition = useInjectProp(
  FORM_LABEL_POSITION_KEY,
  'left',
  toRef(props, 'labelPosition'),
)
const realLabelAlign = useInjectProp(
  FORM_LABEL_ALIGN_KEY,
  'top',
  toRef(props, 'labelAlign'),
)

const realLabelWidth = useInjectProp(
  FORM_LABEL_WIDTH_KEY,
  80,
  toRef(props, 'labelWidth'),
)
const realFormItemInline = useInjectProp(
  FORM_ITEM_INLINE_KEY,
  false,
  toRef(props, 'inline'),
)

const containerClasses = computed(() => ({
  [styles.container]: true,
  [styles.inlineFlex]:
    realLabelPosition.value !== 'top' && !!realFormItemInline.value,
  [styles.flex]: realLabelPosition.value !== 'top' && !realFormItemInline.value,
}))

const parseWidth = (width?: string | number) => {
  if (typeof width === 'undefined' || width === '') {
    return 'auto'
  }
  if (typeof width === 'number') {
    return `${width}px`
  }
  return /^\d+$/.test(width) ? `${width}px` : width
}

const labelStyle = computed<StyleValue>(() => ({
  width: parseWidth(realLabelWidth.value as string | number),
  display: realLabelPosition.value === 'top' ? 'block' : '',
  'text-align': realLabelPosition.value === 'right' ? 'right' : 'left',
  'margin-bottom': realLabelPosition.value === 'top' ? '0.5rem' : '',
}))
const labelClasses = computed(() => ({
  [styles.labelBlock]: realLabelPosition.value === 'top',
  [styles.labelInline]: realLabelPosition.value !== 'top',
  [styles.labelAlignTop]: realLabelAlign.value === 'top',
  [styles.labelAlignCenter]: realLabelAlign.value === 'center',
  [styles.labelAlignBottom]: realLabelAlign.value === 'bottom',
  [styles.labelRequired]: props.required,
}))
</script>
./types
