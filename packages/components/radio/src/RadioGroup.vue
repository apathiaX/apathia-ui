<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide, toRefs } from 'vue'
import { useInjectProp } from '@apathia/shared'
import type { RadioEmits, RadioGroupProps } from './types'

defineOptions({
  name: 'ApRadioGroup',
})

const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: false,
  disabled: undefined,
})

const emit = defineEmits<RadioEmits>()

const { modelValue, disabled } = toRefs(props)

const isDisabled = useInjectProp('FormDisabled', false, disabled)
const groupState = computed(() => ({
  value: modelValue.value,
  disabled: isDisabled.value,
}))

provide('groupState', groupState)
provide('changeHandler', (val: string | number | boolean) => {
  emit('update:modelValue', val)
  emit('change', val)
})
</script>
./types
