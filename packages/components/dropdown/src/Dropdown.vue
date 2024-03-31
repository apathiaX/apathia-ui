<template>
  <ApPopper
    v-model="visible"
    :trigger="trigger"
    :placement="placement"
    :show-arrow="false"
    :popper-class="`${styles.popper} ${divide ? styles.divide : ''}`"
    :distance="5"
    :transition-class="transitionClass"
    :delay="delay"
    :disabled="disabled"
    @show="show"
    @hide="hide"
  >
    <slot>
      <div :class="styles.baseButton">
        {{ label }}
        <ApIcon> <ArrowDown :class="styles.iconClass"></ArrowDown></ApIcon>
      </div>
    </slot>
    <template #content>
      <div :class="styles.container">
        <slot name="dropdown"></slot>
      </div>
    </template>
  </ApPopper>
</template>

<script setup lang="ts">
import { computed, ref, withDefaults, provide, type ComputedRef } from 'vue'
import { ApPopper } from '@apathia/components/popper'
import { ApIcon } from '@apathia/components/icon'
import { getComputedStyle } from '@apathia/theme'
import type { DropdownEmits, DropdownProps } from './types'
import { getDropdownStyle, getTransitionClass } from './dropdown'
import ArrowDown from '../icon/ArrowDown.vue'

defineOptions({
  name: 'ApDropdown',
})

const props = withDefaults(defineProps<DropdownProps>(), {
  delay: 300,
  disabled: false,
  label: '',
  trigger: 'click',
  placement: 'bottom',
  hideOnClick: false,
})

const emit = defineEmits<DropdownEmits>()

const visible = ref<boolean>(false)
const divide = ref<boolean>(true)

const show = (state: boolean) => {
  emit('show', state)
}

const hide = (state: boolean) => {
  emit('hide', state)
}

provide('dropdown', {
  hideOnClick: computed(() => props.hideOnClick),
})

provide('updateVisible', (v: boolean) => {
  visible.value = v
})

provide('updateDivide', (v: boolean) => {
  divide.value = v
})

const styles = getComputedStyle({ divide }, getDropdownStyle) as ComputedRef<{
  popper: string[]
  divide: string[]
  iconClass: string[]
  baseButton: string[]
  container: string[]
}>

const transitionClass = getTransitionClass()
</script>
