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
import { computed, toRefs, withDefaults, useSlots } from 'vue'
import { CustomRender } from '@apathia/apathia.custom-render'
import { useInjectProp } from '@apathia/apathia.hooks'
import { getComputedStyle } from '@apathia/apathia.twind'
import { getStyles } from './styles'

interface SwitchProps {
    as?: object | string
    modelValue?: string | number | boolean
    trueValue?: string | number | boolean
    falseValue?: string | number | boolean
    inactiveText?: string
    activeText?: string
    disabled?: boolean | undefined
    size?: string
    loading?: boolean
}

const props = withDefaults(defineProps<SwitchProps>(), {
  as: 'div',
  modelValue: false,
  trueValue: true,
  falseValue: false,
  disabled: undefined,
  loading: false
})

const emit = defineEmits(['update:modelValue', 'change'])

const slots = useSlots()

const disableChange = useInjectProp('FormDisabled', false, props.disabled)

const isTrue = computed(() => props.modelValue === props.trueValue)
const large = computed(() => !!(props.size && props.size === 'large'))
const small = computed(() => !!(props.size && props.size === 'small'))

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
  if (!(props.loading || !!disableChange.value)) {
    toggle()
  }
}

const styles = getComputedStyle(
    { isTrue, large, small, disabled: !!disableChange.value, loading: props.loading },
    getStyles,
)
</script>

