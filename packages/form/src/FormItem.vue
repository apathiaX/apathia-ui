<template>
  <div :class="containerClasses">
    <label
      v-if="label || offset || $slots.label"
      :class="lableClasses"
      :style="labelStyle"
    >
      <slot name="label">{{ label }}</slot>
    </label>
    <div :class="[styles.content, contentClass]">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, StyleValue, toRef } from 'vue'
import type { PropType } from 'vue'
// @ts-ignore
import { tw, apply, style, css } from '@apathia/apathia.twind'
import {
  POSITION,
  ALIGN,
  FORM_LABEL_POSITION_KEY,
  FORM_LABEL_WIDTH_KEY,
  FORM_ITEM_INLINE_KEY,
  FORM_LABEL_ALIGN_KEY,
} from './constants'
// @ts-ignore
import { useInjectProp } from '@apathia/apathia.hooks'

export default defineComponent({
  name: 'FormItem',

  props: {
    prop: {
      type: String,
    },
    labelAlign: {
      type: String as PropType<typeof ALIGN[number]>,
      validator: (val: string) => ALIGN.includes(val),
    },
    labelPosition: {
      type: String as PropType<typeof POSITION[number]>,
      validator: (val: string) => POSITION.includes(val),
    },
    label: {
      type: String,
    },
    required: {
      type: Boolean,
    },
    offset: {
      type: Boolean,
    },
    labelWidth: {
      type: [Number, String],
    },
    inline: {
      type: Boolean,
      default: undefined,
    },
    contentClass: {
      type: String,
    },
  },

  setup(props) {
    const styles = getStyles()

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
      [styles.flex]:
        realLabelPosition.value !== 'top' && !realFormItemInline.value,
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
      width: parseWidth(realLabelWidth.value),
      display: realLabelPosition.value === 'top' ? 'block' : '',
      'text-align': realLabelPosition.value === 'right' ? 'right' : 'left',
      'margin-bottom': realLabelPosition.value === 'top' ? '0.5rem' : '',
    }))
    const lableClasses = computed(() => ({
      [styles.labelBlock]: realLabelPosition.value === 'top',
      [styles.labelInline]: realLabelPosition.value !== 'top',
      [styles.labelAlignTop]: realLabelAlign.value === 'top',
      [styles.labelAlignCenter]: realLabelAlign.value === 'center',
      [styles.labelAlignBottom]: realLabelAlign.value === 'bottom',
      [styles.labelRequired]: props.required,
    }))

    return {
      styles,

      containerClasses,
      lableClasses,
      labelStyle,
      realLabelAlign,
    }
  },
})

const getStyles = () => {
  const label = apply`text-sm text-content-primary`
  const mark = css`
    &:before {
      content: '*';
      ${apply`text-error-primary align-top`}
    }
  `
  return {
    container: style`mb-2 ml-2`,
    flex: style`flex`,
    inlineFlex: style`inline-flex mr-2 last:mr-0`,
    labelBlock: style`w-full ${label}`,
    labelInline: style`mr-2 flex-shrink-0 ${label}`,
    labelAlignTop: style`self-start`,
    labelAlignCenter: style`self-center`,
    labelAlignBottom: style`self-end`,
    labelRequired: tw`${mark}`,
    content: style`flex-auto`,
  }
}
</script>
