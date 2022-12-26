<template>
  <div :class="styles.form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, provide } from 'vue'
import * as constants from './constants'
import { style } from '@apathia/apathia.twind'

export default defineComponent({
  name: 'Form',

  props: {
    disabled: {
      type: Boolean as PropType<boolean>,
      default: undefined,
    },
    inline: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    labelWidth: {
      type: [Number, String] as PropType<number | string>,
      default: 80,
    },
    labelPosition: {
      type: String as PropType<typeof constants.POSITION[number]>,
      validate: (value: string) => constants.POSITION.includes(value),
      default: 'left',
    },
    labelAlign: {
      type: String as PropType<typeof constants.ALIGN[number]>,
      validator: (val: string) => constants.ALIGN.includes(val),
      default: 'top',
    },
  },

  setup(props) {
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

    return {
      styles,
    }
  },
})

const getFromStyle = () => ({
    form: style`mb-2`,
})
</script>
