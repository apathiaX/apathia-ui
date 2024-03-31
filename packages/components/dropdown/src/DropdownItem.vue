<template>
  <div :class="styles.item" @click="clickCurItem">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { withDefaults, inject } from 'vue'
import { getComputedStyle } from '@apathia/theme'
import type { DropdownInstance, DropdownItemProps } from './types'
import { getDropdownItemStyle } from './dropdown'

defineOptions({
  name: 'ApDropdownItem',
})
const props = withDefaults(defineProps<DropdownItemProps>(), {
  active: false,
  disabled: false,
})

const dropdown = inject<DropdownInstance>('dropdown')
const updateVisible = inject<(a: boolean) => void>('updateVisible')

const clickCurItem = () => {
  if (dropdown?.hideOnClick?.value) {
    updateVisible?.(false)
  }
}

const styles = getComputedStyle(
  { active: props.active, disabled: props.disabled },
  getDropdownItemStyle,
)
</script>
