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
    <Icon
      v-if="isSelected"
      :name="['fa', 'check']"
      :class="[styles.checkMark, isFocused ? styles.focusMark : '']"
    />
  </li>
</template>

<script lang="ts">
import { defineComponent, inject, toRefs, getCurrentInstance } from 'vue'
import { noop } from '@apathia/apathia.shared'
import { style } from '@apathia/apathia.twind'
import { Icon } from '@apathia/apathia.icon'
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
import { SelectState } from './types'

export default defineComponent({
  name: 'Option',

  components: {
    Icon,
  },

  props: {
    value: {
      type: [String, Number, Boolean],
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const { value, disabled } = toRefs(props)

    const updateRegister = inject(UpdateRegisterKey, noop)
    // ??
    const selectState = inject(SelectStateKey, { indeed: false } as SelectState)
    const changeHandler = inject(ChangeHandlerKey, noop)
    const register = inject(RegisterKey, noop)
    const unregister = inject(UnregisterKey, noop)
    const focus = inject(FocusKey, noop)
    const isSameValue = inject(SameValueCompareKey, () => false)

    const compoData = getCurrentInstance()
    const compoId = compoData ? compoData.uid : 0

    const userProps = {
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

    const { getRootProps, isSelected, isFocused, isHidden } =
      useOption(userProps)

    const styles = getOptionStyles()

    return {
      updateRegister,
      selectState,
      isSameValue,
      focus,
      getRootProps,
      isSelected,
      isHidden,
      isFocused,
      styles,
    }
  },
  created() {
    if (!this.selectState.indeed) {
      // select
      console.warn('<Option> 应该在 <Select> 内使用')
    }
  },
})

const getOptionStyles = () => ({
    wrapper: style`block text-content-primary cursor-pointer select-none relative flex items-center py-2 pl-3 pr-9 truncate outline-none`,
    selected: style`font-bold text-brand-primary`,
    focused: style`text-brand-primary bg-fill-gray`,
    text: style`overflow-hidden overflow-ellipsis whitespace-nowrap`,
    checkMark: style`absolute right-4 text-brand-primary`,
    focusMark: style`text-fill-white`,
    disabled: style`text-content-secondary bg-info-forbid cursor-not-allowed`,
})
</script>
