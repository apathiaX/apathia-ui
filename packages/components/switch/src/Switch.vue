<template>
  <component
    :is="as"
    :class="{
      [styles.wrapper]: true,
      [styles.wrapperLoading]: loading,
    }"
    @click="handleChange"
  >
    <div :class="styles.switchWrap">
      <div :class="styles.outer"></div>
      <span :class="styles.inner">
        <CustomRender :render="innerRender" />
      </span>
    </div>
  </component>
</template>

<script setup lang="ts">
import { computed, withDefaults, useSlots } from 'vue'
import { useInjectProp, CustomRender } from '@apathia/shared'
import { getComputedStyle } from '@apathia/theme'
import { SwitchEmits, SwitchProps } from './types'
import { getSwitchStyles } from './switch'

defineOptions({
  name: 'ApSwitch',
})

const props = withDefaults(defineProps<SwitchProps>(), {
  as: 'div',
  modelValue: false,
  trueValue: true,
  falseValue: false,
  disabled: undefined,
  loading: false,
})

const emit = defineEmits<SwitchEmits>()

const slots = useSlots()

const disableChange = useInjectProp('FormDisabled', false, props.disabled)

const isTrue = computed(() => props.modelValue === props.trueValue)
const large = computed(() => !!(props.size && props.size === 'large'))
const small = computed(() => !!(props.size && props.size === 'small'))
const loading = computed(() => props.loading)
const innerRender = computed(() =>
  isTrue.value
    ? props.activeText || slots.active
    : props.inactiveText || slots.inactive,
)

const toggle = () => {
  const newValue = isTrue.value ? props.falseValue : props.trueValue
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

const handleChange = () => {
  if (!(loading.value || !!disableChange.value)) {
    toggle()
  }
}

const styles = getComputedStyle(
  {
    isTrue,
    large,
    small,
    disabled: !!disableChange.value,
    loading: loading,
  },
  getSwitchStyles,
)
</script>
