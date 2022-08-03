<template>
  <label
    :class="{ [styles.wrapper]: true, [styles.wrapperDisabled]: isDisabled }"
  >
    <span :class="{ [styles.radio]: true }">
      <input
        type="radio"
        tabindex="0"
        :class="{ [styles.input]: true }"
        :value="value"
        :checked="isSelected"
        :disabled="isDisabled"
        @click="handleChange"
        @keydown.space="handleChange"
        @keydown.enter="handleChange"
      />
      <span
        ref="inputEl"
        :class="{
          [styles.inner]: true,
          [styles.innerDisabled]: isDisabled,
          [styles.innerSelected]: isSelected && !isDisabled,
          [styles.innerSelectedDisabled]: isDisabled && isSelected,
          [styles.ring]: !isDisabled,
        }"
        tabindex="-1"
      >
      </span>
    </span>
    <span v-if="$slots.default" :class="styles.contentWrap">
      <slot></slot>
    </span>
  </label>
</template>

<script lang="ts">
import {
  defineComponent,
  inject,
  SetupContext,
  ref,
  toRefs,
  Ref,
  computed,
  isRef,
} from 'vue'
import { noop } from 'lodash'
// @ts-ignore
import { tw, css, style, apply } from '@apathia/apathia.twind'

import useRadio from './useRadio'

interface groupData {
  value: string | number | boolean
  disabled: boolean
}

export default defineComponent({
  name: 'Radio',

  props: {
    value: {
      type: [String, Number, Boolean],
      default: false,
    },
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
    const { value, modelValue } = toRefs(props)

    const groupState = inject('groupState', null) as null | Ref<groupData>

    const changeHandler = inject('changeHandler', noop)

    const isDisabled = computed(() => {
      if (props.disabled !== undefined) {
        return props.disabled
      }
      return isRef(groupState) ? groupState.value.disabled : false
    })

    const inputEl = ref(null)
    const userProps = {
      value,
      modelValue,
      disabled: isDisabled,
      groupState,
      changeHandler,
      inputEl,
    }

    const { isSelected, handleChange } = useRadio(
      userProps,
      ctx as SetupContext,
    )

    const styles = {
      wrapper: style`inline-flex mr-2 p-0 list-none cursor-pointer items-center text-sm ${css`
        line-height: 38px;
      `}`,
      wrapperDisabled: style`text-gray-300 cursor-not-allowed`,
      radio: style`relative inline-block m-0 p-0 whitespace-nowrap align-middle`,
      inner: tw(
        style`relative block w-4 h-4 top-0 left-0 bg-white border border-gray-500 outline-none`,
        css`
          border-radius: 100px;
          transition: all 0.3s;
          &::after {
            content: '';
            position: absolute;
            display: table;
            width: 8px;
            height: 8px;
            left: 3px;
            top: 3px;
            border-radius: 4px;
            ${apply`bg-brand-500`}
            opacity: 0;
            transform: scale(0);
            transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        `,
      ),
      innerSelected: tw(
        style`border-brand-300`,
        css`
          &::after {
            opacity: 1;
            transform: scale(0.875);
            transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
          }
        `,
      ),
      innerDisabled: style`bg-gray-100 border-gray-300 cursor-not-allowed outline-none`,
      innerSelectedDisabled: tw(css`
        &::after {
          opacity: 1;
          transform: scale(0.875);
          transition: all 0.15s cubic-bezier(0.78, 0.14, 0.15, 0.86);
        }
      `),
      ring: style`focus:ring-2 focus:ring-brand-500`,
      input: style`hidden`,
      contentWrap: style`mx-1`,
    }

    return {
      inputEl,
      isDisabled,
      isSelected,
      handleChange,
      styles,
    }
  },
})
</script>