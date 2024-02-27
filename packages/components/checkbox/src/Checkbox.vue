<template>
  <label
    :class="{ [styles.wrapper]: true, [styles.disabledWrapper]: disableInput }"
  >
    <span :class="{ [styles.checkbox]: true }">
      <input
        type="checkbox"
        :class="{ [styles.input]: true }"
        :checked="isChecked"
        :disabled="disableInput"
        :value="trueValue"
        @click.stop="handleChange"
        @keydown.space="handleChange"
        @keydown.enter="handleChange"
      />
      <span
        ref="inputEl"
        :class="{
          [styles.inner]: true,
          [styles.disabledInner]: disableInput,
          [styles.checkedBlueBorder]:
            !disableInput && (isChecked || intermediate),
          [styles.checkedAfter]: isChecked && !intermediate,
          [styles.intermediateAfter]: !isChecked && intermediate,
          [styles.ring]: !disableInput,
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
import { ref, toRefs, Ref } from 'vue'
import { useInjectProp } from '@apathia/shared'
import useCheckbox from './useCheckbox'
import { getCheckboxStyles } from './checkbox'
import type { CheckboxUseProps, CheckboxEmits, CheckboxProps } from './types'

defineOptions({
  name: 'ApCheckbox',
})

const props = defineProps<CheckboxProps>()

const emit = defineEmits<CheckboxEmits>()

const inputEl = ref(null)
const { modelValue, trueValue, falseValue, value, disabled } = toRefs(props)

const disableInput = useInjectProp(
  'FormDisabled',
  false,
  disabled,
) as Ref<boolean>

const userProps = {
  modelValue,
  trueValue,
  falseValue,
  value,
  disabled: disableInput,
  inputEl,
}

const { isChecked, handleChange } = useCheckbox(
  userProps as CheckboxUseProps,
  emit,
)

const styles = getCheckboxStyles()
</script>
