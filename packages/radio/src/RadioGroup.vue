<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, provide, toRefs } from 'vue'
// @ts-ignore
import { useInjectProp } from '@apathia/apathia.hooks'

export default defineComponent({
  name: 'RadioGroup',

  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: undefined,
    },
  },

  emits: ['update:modelValue', 'change'],

  setup(props, ctx) {
    const { modelValue, disabled } = toRefs(props)

    const isDisabled = useInjectProp('FormDisabled', false, disabled)
    const groupState = computed(() => ({
      value: modelValue.value,
      disabled: isDisabled.value,
    }))

    provide('groupState', groupState)
    provide('changeHandler', (val: string | number | boolean) => {
      ctx.emit('update:modelValue', val)
      ctx.emit('change', val)
    })
    return {}
  },
})
</script>
