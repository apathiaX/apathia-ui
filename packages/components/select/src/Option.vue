<template>
  <li
    v-bind="{ ...getRootProps() }"
    role="option"
    :class="{
      [styles.wrapper]: true,
      [styles.disabled]: disabled,
      [styles.selected]: isSelected,
      [styles.focused]: isFocused,
    }"
  >
    <span :class="styles.text">
      <slot></slot>
    </span>
    <ApIcon
      v-if="isSelected"
      :class="[styles.checkMark, isFocused ? styles.focusMark : '']"
    >
      <Check />
    </ApIcon>
  </li>
</template>

<script lang="ts" setup>
import { withDefaults, inject, toRefs, getCurrentInstance } from 'vue'
import { noop } from '@apathia/shared'
import { style } from '@apathia/theme'
import { ApIcon } from '@apathia/components/icon'
import { useOption } from './useOption'
import {
  ChangeHandlerKey,
  FocusKey,
  RegisterKey,
  SameValueCompareKey,
  SelectStateKey,
  UnregisterKey,
  UpdateRegisterKey,
} from './injectKeys'
import type { OptionUseProps, SelectOptionProps, SelectState } from './types'
import { Check } from '@apathia/icons-vue'

defineOptions({
  name: 'ApOption',
})

const props = withDefaults(defineProps<SelectOptionProps>(), {
  disabled: false,
})

const { value, disabled } = toRefs(props)

const updateRegister = inject(UpdateRegisterKey, noop)
const selectState = inject(SelectStateKey, { indeed: false } as SelectState)
const changeHandler = inject(ChangeHandlerKey, noop)
const register = inject(RegisterKey, noop)
const unregister = inject(UnregisterKey, noop)
const focus = inject(FocusKey, noop)
const isSameValue = inject(SameValueCompareKey, () => false)

const compoData = getCurrentInstance()
const compoId = compoData ? compoData.uid : 0

if (!selectState.indeed) {
  // select
  console.warn('<Option> 应该在 <Select> 内使用')
}

const useProps: OptionUseProps = {
  value,
  disabled,
  register,
  unregister,
  updateRegister,
  selectState,
  changeHandler,
  isSameValue,
  focus,
  compoId,
}

const { getRootProps, isSelected, isFocused } = useOption(useProps)

const styles = {
  wrapper: style`block text-content-primary cursor-pointer select-none relative flex items-center py-2 pl-3 pr-9 truncate outline-none`,
  selected: style`font-bold text-brand-primary`,
  focused: style`text-brand-primary bg-fill-gray`,
  text: style`overflow-hidden overflow-ellipsis whitespace-nowrap`,
  checkMark: style`absolute right-4 text-brand-primary`,
  focusMark: style`text-fill-white`,
  disabled: style`text-content-secondary bg-info-forbid cursor-not-allowed`,
}
</script>
./types
