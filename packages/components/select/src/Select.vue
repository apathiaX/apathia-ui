<template>
  <div ref="rootEl" v-bind="{ ...getRootProps() }" :class="styles.wrapper">
    <input
      ref="inputEl"
      v-bind="{ ...getInputProps() }"
      :class="styles.input"
    />
    <Arrow :class="styles.arrow" />
    <Clear v-if="clearable" :class="styles.clearable" @click.stop="clear" />

    <teleport to="body">
      <div
        ref="dropdownEl"
        v-auto-pos.root="rootEl"
        :class="styles.dropdownWrapper"
      >
        <div v-bind="{ ...getDropdownProps() }" :class="styles.dropdown">
          <ul
            v-if="!isRemote || !isLoading"
            :class="styles.optionList"
            role="listbox"
            :style="{ maxHeight: maxHeight + 'px' }"
          >
            <slot></slot>
            <div :class="styles.tips">
              <slot v-if="isLoading" name="loading"> 加载中... </slot>
              <slot v-if="!isLoading && isEmpty" name="empty">
                没有选项数据
              </slot>
              <slot
                v-if="!isLoading && !isEmpty && isNoResult"
                name="no-result"
              >
                没有搜索结果
              </slot>
            </div>
          </ul>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts" setup>
import { toRefs, provide, computed } from 'vue'
import { autoPos as vAutoPos, useInjectProp } from '@apathia/shared'
import { getComputedStyle } from '@apathia/theme'
import useSelect from './useSelect'
import {
  ChangeHandlerKey,
  FocusKey,
  RegisterKey,
  SameValueCompareKey,
  SelectStateKey,
  UnregisterKey,
  UpdateRegisterKey,
} from './injectKeys'
import type { SelectProps, SelectUseProps, SelectEmits } from './types'
import { getSelectStyles } from './select'
import Arrow from '../icon/Arrow.vue'
import Clear from '../icon/Clear.vue'

defineOptions({
  name: 'ApSelect',
})

const props = withDefaults(defineProps<SelectProps>(), {
  valueKey: 'value',
  placeholder: '请选择...',
  filterable: false,
  clearable: false,
  emptyText: '暂无数据',
  disabled: undefined,
  maxHeight: 235,
  isLoading: false,
  placement: '',
  size: 'md',
})

const emits = defineEmits<SelectEmits>()

const {
  disabled,
  modelValue,
  valueKey,
  filterable,
  emptyText,
  maxHeight,
  placeholder,
} = toRefs(props)

const disableSelect = useInjectProp('FormDisabled', false, disabled)

const useProps: SelectUseProps = {
  disabled: disableSelect,
  modelValue,
  valueKey,
  filterable,
  emptyText,
  maxHeight,
  placeholder,
}

const {
  filterStr,
  updateRegister,
  selectState,
  changeHandler,
  register,
  unregister,
  focus,
  clear,
  isSameValue,
  active,
  isEmpty,
  inputFocused,
  isNoResult,
  isRemote,
  getRootProps,
  getInputProps,
  getDropdownProps,
  rootEl,
  inputEl,
  dropdownEl,
} = useSelect(useProps, emits)

provide(UpdateRegisterKey, updateRegister)
provide(RegisterKey, register)
provide(UnregisterKey, unregister)
provide(SelectStateKey, selectState)
provide(ChangeHandlerKey, changeHandler)
provide(FocusKey, focus)
provide(SameValueCompareKey, isSameValue)

const isClear = computed(() => props.clearable && !!filterStr.value)

const styles = getComputedStyle(
  {
    disabled,
    active,
    clearable: isClear,
    focus: inputFocused,
    size: props.size,
  },
  getSelectStyles,
)
</script>
