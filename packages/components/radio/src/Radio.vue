<template>
  <label
    :class="{ [styles.wrapper]: true, [styles.wrapperDisabled]: isDisabled }"
  >
    <span :class="{ [styles.radio]: true }">
      <input
        type="radio"
        tabindex="0"
        :class="{ [styles.input]: true }"
        :value="value"
        :checked="isSelected"
        :disabled="isDisabled"
        @click="handleChange"
        @keydown.space="handleChange"
        @keydown.enter="handleChange"
      />
      <span
        ref="inputEl"
        :class="{
          [styles.inner]: true,
          [styles.innerDisabled]: isDisabled,
          [styles.innerSelected]: isSelected && !isDisabled,
          [styles.innerSelectedDisabled]: isDisabled && isSelected,
          [styles.ring]: !isDisabled,
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

<script lang="ts" setup>
import useRadio from './useRadio'
import type { RadioProp, RadioEmits } from './types'
import { getRadioStyle } from './radio'

defineOptions({
  name: 'ApRadio',
})

const props = withDefaults(defineProps<RadioProp>(), {
  value: false,
  modelValue: false,
  disabled: undefined,
})

const emit = defineEmits<RadioEmits>()

const { inputEl, isDisabled, value, isSelected, handleChange } = useRadio(
  props,
  emit,
)

const styles = getRadioStyle()
</script>
