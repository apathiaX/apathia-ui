<template>
  <label
    :class="{ [styles.wrapper]: true, [styles.disabledWrapper]: disabled }"
  >
    <span :class="{ [styles.checkbox]: true }">
      <input
        type="checkbox"
        :class="{ [styles.input]: true }"
        :checked="isChecked"
        :disabled="disabled"
        :value="trueValue"
        @click.stop="handleChange"
        @keydown.space="handleChange"
        @keydown.enter="handleChange"
      />
      <span
        ref="inputEl"
        :class="{
          [styles.inner]: true,
          [styles.disabledInner]: disabled,
          [styles.checkedBlueBorder]: !disabled && (isChecked || intermediate),
          [styles.checkedAfter]: isChecked && !intermediate,
          [styles.intermediateAfter]: !isChecked && intermediate,
          [styles.ring]: !disabled,
        }"
        tabindex="-1"
      >
      </span>
    </span>
    <span v-if="$slots.default" :class="styles.contentWrap">
      <slot></slot>
    </span>
  </label>
</template>

<script setup lang="ts">
import useCheckbox from './useCheckbox'
import { getCheckboxStyles } from './checkbox'
import type { CheckboxEmits, CheckboxProps } from './types'

defineOptions({
  name: 'ApCheckbox',
})

const props = withDefaults(defineProps<CheckboxProps>(), {
  trueValue: true,
  falseValue: false,
  disabled: false,
})

const emit = defineEmits<CheckboxEmits>()

const { disabled, inputEl, isChecked, handleChange } = useCheckbox(props, emit)

const styles = getCheckboxStyles()
</script>
