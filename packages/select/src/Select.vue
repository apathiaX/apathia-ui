<template>
  <div
    v-bind="{ ...getRootProps() }"
    :class="{
      [styles.selectWrapper]: true,
      [styles.disabled]: disableSelect,
      [styles.active]: active,
    }"
  >
    <input
      v-bind="{ ...getInputProps() }"
      :class="{ [styles.inputSelected]: true, [styles.focused]: inputFocused }"
    />
    <svg
      :class="{ [styles.arrow]: true }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden="true"
    >
      <path
        fill-rule="evenodd"
        d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
        clip-rule="evenodd"
      />
    </svg>
    <svg
      v-if="clearable"
      :class="{
        [styles.clearableIcon]: true,
        [styles.clearable]: clearable && filterStr,
      }"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-3 -3 24 24"
      fill="currentColor"
      @click.stop="clear"
    >
      <path
        d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
      />
    </svg>

    <teleport to="body">
      <div
        v-auto-pos.root="rootEl"
        v-bind="{ ...getDropdownProps() }"
        :class="{
          [styles.dropdownContainer]: true,
          [styles.dropdownContainerShow]: active,
        }"
      >
        <ul
          v-if="!isRemote || !isLoading"
          :class="{ [styles.optionList]: true }"
          role="listbox"
          :style="{ maxHeight: maxHeight + 'px' }"
        >
          <slot></slot>
          <slot v-if="isLoading" name="loading">
            <p :class="{ [styles.tips]: true }">加载中...</p>
          </slot>
          <slot v-if="!isLoading && isEmpty" name="empty">
            <p :class="{ [styles.tips]: true }">没有选项数据</p>
          </slot>
          <slot v-if="!isLoading && !isEmpty && isNoResult" name="no-result">
            <p :class="{ [styles.tips]: true }">没有搜索结果</p>
          </slot>
        </ul>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
// @ts-nocheck
import { defineComponent, toRefs, provide, SetupContext, PropType } from 'vue'
import { style } from '@apathia/apathia.twind'
import { useInjectProp } from '@apathia/apathia.hooks'
import { autoPos } from '@apathia/apathia.shared'
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
import { ValueType } from './types'

export default defineComponent({
  name: 'Select',

  directives: {
    autoPos,
  },

  props: {
    modelValue: {
      type: [String, Number, Boolean, Object] as PropType<ValueType>,
      required: true,
    },
    valueKey: {
      type: String,
      default: 'value',
    },
    placeholder: {
      type: String,
      default: '请选择…',
    },
    filterable: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    emptyText: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: undefined,
    },
    maxHeight: {
      type: [Number, String],
      default: 235,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    placement: {
      type: String,
      default: '',
    },
  },

  emits: [
    'update:modelValue',
    'change',
    'input',
    'native-change',
    'query-change',
  ],

  setup(props, ctx) {
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

    const userProps = {
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
    } = useSelect(userProps, ctx as SetupContext)

    provide(UpdateRegisterKey, updateRegister)
    provide(RegisterKey, register)
    provide(UnregisterKey, unregister)
    provide(SelectStateKey, selectState)
    provide(ChangeHandlerKey, changeHandler)
    provide(FocusKey, focus)
    provide(SameValueCompareKey, isSameValue)

    const styles = {
      selectWrapper: style`relative`,
      disabled: style(
        'cursor-not-allowed pointer-events-none bg-gray-100 border-gray-100 placeholder-gray-300',
      ),
      active: style(''),
      inputSelected: style`w-full block border border-gray-300 shadow-sm rounded-md text-sm py-2 px-3 outline-none focus:(bg-white border-brand-500)
        cursor-pointer`,
      focused: style('select-none'),
      arrow: style(
        'ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none h-9 w-7 text-brand-700',
      ),
      clearableIcon: style(
        'hidden absolute w-4 h-4 rounded-full top-2.5 right-8 items-center bg-brand-300 text-white cursor-pointer hover:bg-brand-500',
      ),
      clearable: style('block'),

      dropdownContainer: style`z-dropdown block h-0 absolute mt-1 border border(solid gray-300) rounded-md bg-white shadow-lg opacity-0 transition duration-200 overflow-y-hidden`,
      dropdownContainerShow: style`h-auto opacity-100`,

      optionList: style`max-h-56 text-base overflow-auto focus:outline-none sm:text-sm`,
      tips: style('ml-3 py-2 text-gray-500 text-left mr-2'),
    }

    return {
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
      disableSelect,
      getRootProps,
      getInputProps,
      getDropdownProps,
      styles,
      rootEl,
    }
  },
})
</script>
